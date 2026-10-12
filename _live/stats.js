// Player stats (/stats): reads /_live/stats.json every 15 s. Counts only; all times UTC.
(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const NF = new Intl.NumberFormat("en-US");
  const n = (v) => NF.format(v ?? 0);
  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const pad = (v) => String(v).padStart(2, "0");
  const hm = (t) => { const d = new Date(t); return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`; };
  const dm = (t) => { const d = new Date(t); return `${d.getUTCDate()} ${MON[d.getUTCMonth()]}`; };
  const dayLabel = (day) => dm(Date.parse(`${day}T00:00:00Z`));
  const hours = (s) => {
    const h = (s ?? 0) / 3600;
    return h >= 100 ? NF.format(Math.round(h)) : h.toFixed(1);
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const COVER = { "meme-surge": "/_live/covers/meme-surge.webp", "realm-zero": "/_live/covers/realm-zero.webp", "game-03": "/_live/covers/game-03.webp", "game-04": "/_live/covers/game-04.webp", "game-05": "/_live/covers/game-05.webp", "game-06": "/_live/covers/game-06.webp", "game-07": "/_live/covers/game-07.webp", "game-10": "/_live/covers/game-10.webp", "game-11": "/_live/covers/game-11.webp", "game-12": "/_live/covers/game-12.webp", "game-14": "/_live/covers/game-14.webp", "game-17": "/_live/covers/game-17.webp", "game-18": "/_live/covers/game-18.webp", "game-19": "/_live/covers/game-19.webp", "game-22": "/_live/covers/game-22.webp", "game-23": "/_live/covers/game-23.webp" };
  const HREF = { "meme-surge": "/meme-surge", "realm-zero": "/realm-zero", "game-03": "/dark-dusk", "game-04": "/spartan-unbound", "game-05": "/might-and-mana", "game-06": "/meme-warrior", "game-07": "/kampung-bash", "game-10": "/chopper-rush", "game-11": "/wayang", "game-12": "/kite-wanderer", "game-14": "/wayang-rush", "game-17": "/night-brawler", "game-18": "/site-wrecker", "game-19": "/ridge-hunters", "game-22": "/solder-bench", "game-23": "/drone-rush" };

  let data = null;
  let range = "h48";
  let failures = 0;

  // ---- clock ----
  function clock() { $("clock").textContent = `${hm(Date.now())} UTC`; }
  clock();
  setInterval(clock, 10_000);

  // ---- hero ----
  function setNum(el, text) {
    if (el.textContent === text) return;
    el.textContent = text;
    el.classList.remove("tick");
    void el.offsetWidth;
    el.classList.add("tick");
  }

  function hero(s) {
    const fresh = s.live.fresh;
    setNum($("playing"), fresh ? String(s.live.playing) : "—");
    $("playing").classList.toggle("stale", !fresh);
    document.querySelector(".pulse").classList.toggle("stale", !fresh);
    $("online-line").innerHTML = !fresh
      ? "The live count is catching up. Numbers below are up to date."
      : s.live.playing === 0
        ? `Nobody in a game this minute · <b>${n(s.live.online)}</b> on the site`
        : `<b>${n(s.live.online)}</b> on the site`;
    $("peak-today").textContent = n(s.today.peak);
    $("peak-today-at").textContent = s.today.peak ? `at ${hm(s.today.peakAt)} UTC` : "No one yet today";
    $("record").textContent = n(s.record.peak);
    $("record-at").textContent = s.record.at ? dm(s.record.at) : " ";
    $("record-at").title = s.record.at ? `${dm(s.record.at)} ${hm(s.record.at)} UTC. Highest since the live count began, ${dm(s.trackingSince)} ${hm(s.trackingSince)} UTC.` : "";
    $("players-today").textContent = n(s.today.players);
    $("plays-today").textContent = `${n(s.today.plays)} ${s.today.plays === 1 ? "play" : "plays"}`;
  }

  // ---- totals ----
  function totals(s) {
    const launch = s.launch ? `Since launch, ${dm(s.launch)}` : "Since launch";
    $("t-players").textContent = n(s.totals.players);
    $("t-players-note").textContent = `${launch} · ${n(s.totals.visitors)} visitors`;
    $("t-plays").textContent = n(s.totals.plays);
    $("t-plays-note").textContent = launch;
    $("t-hours").textContent = hours(s.totals.seconds);
    $("t-hours-note").textContent = s.statsSince ? `Since ${dm(s.statsSince)}, ${hm(s.statsSince)} UTC` : " ";
    $("t-runs").textContent = n(s.totals.runs);
    $("t-runs-note").textContent = `${launch} · ${n(s.today.runs)} today`;
  }

  // ---- games ----
  function games(s) {
    const rows = s.games.map((g, i) => {
      const live = s.live.fresh ? g.now : null;
      const nowCls = live === null ? "now zero" : live > 0 ? "now on" : "now zero";
      const nowTxt = live === null ? "–" : String(live);
      const hrs = g.seconds > 0 ? hours(g.seconds) : `<span class="dash" title="Play time counts from ${dm(s.statsSince)} ${hm(s.statsSince)} UTC">0.0</span>`;
      const rec = g.peak ? `<span title="${dm(g.peakAt)}, ${hm(g.peakAt)} UTC">${n(g.peak)}</span>` : `<span class="muted">0</span>`;
      return `<tr>
        <td class="c-game"><a class="game-cell" href="${HREF[g.id]}"><span class="rank">${i + 1}</span><img src="${COVER[g.id]}" alt="" width="64" height="57" loading="lazy"><span><b>${esc(g.name)}</b><small>${esc(g.mission)}</small></span></a><span class="${nowCls} now-inline" aria-label="${nowTxt} in game now">${nowTxt}</span></td>
        <td class="c-num c-now"><span class="${nowCls}">${nowTxt}</span></td>
        <td class="c-num" data-label="Peak today">${n(g.peakToday)}</td>
        <td class="c-num c-wide" data-label="Record">${rec}</td>
        <td class="c-num strong" data-label="Players">${n(g.players)}</td>
        <td class="c-num" data-label="Plays">${n(g.plays)}</td>
        <td class="c-num c-wide" data-label="Hours">${hrs}</td>
      </tr>`;
    });
    $("games").innerHTML = rows.join("");
  }

  // ---- days ----
  function days(s) {
    const since = s.statsSince ? `${dm(s.statsSince)} ${hm(s.statsSince)} UTC` : "";
    const liveFrom = s.trackingSince ? `${dm(s.trackingSince)} ${hm(s.trackingSince)} UTC` : "";
    const today = s.today.day;
    const gap = s.gaps?.[0];
    // One final number per day, whatever counted it; where the numbers came from is in "How we count".
    $("days").innerHTML = s.days.map((d) => {
      const tag = d.day === today ? `<span class="tag today">Today</span>` : "";
      const peak = d.peak === null
        ? `<span class="dash" title="${liveFrom ? `The live count began ${liveFrom}` : "Not counted yet"}">—</span>`
        : n(d.peak);
      const hrs = d.source === "log"
        ? `<span class="dash" title="Play time counts from ${since}">—</span>`
        : d.source === "mixed" ? `<span title="Since ${since}">${hours(d.seconds)}</span>` : hours(d.seconds);
      return `<tr>
        <td class="c-day"><span class="day-cell">${dayLabel(d.day)}${tag}</span></td>
        <td class="c-num">${peak}</td>
        <td class="c-num c-wide">${n(d.visitors)}</td>
        <td class="c-num strong">${n(d.players)}</td>
        <td class="c-num">${n(d.plays)}</td>
        <td class="c-num c-wide">${hrs}</td>
        <td class="c-num c-wide">${n(d.runs)}</td>
      </tr>`;
    }).join("");
    if (s.statsSince) $("how-log").textContent = `Days before ${since} come from the server's request log: a game counts as opened when its own art or API was loaded, not the shelf cover. Hours start ${since} and peaks start ${liveFrom || since}.` +
      (gap ? ` From ${hm(gap.from)} UTC ${dm(gap.from)} to ${hm(gap.until)} UTC ${dm(gap.until)} the live count missed gamescool.id, so visitors, players and plays for that time come from the request log too; hours and peaks for it were not counted.` : "");
  }

  // ---- chart ----
  // Drawn in real pixels (redrawn on resize) so the axis text stays readable on a phone.
  const SPAN = { h48: 48 * 3_600_000, d7: 7 * 86_400_000, d30: 30 * 86_400_000 };
  const MIN = 60_000, HOUR = 3_600_000, DAY = 86_400_000;
  const STEPS = [15 * MIN, 30 * MIN, HOUR, 2 * HOUR, 3 * HOUR, 6 * HOUR, 12 * HOUR, DAY, 2 * DAY, 5 * DAY, 7 * DAY];
  let plot = null;

  function niceMax(v) {
    if (v <= 4) return 4;
    for (const s of [5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000, 10000]) if (v <= s) return s;
    return Math.ceil(v / 10000) * 10000;
  }

  function ticksX(t0, t1, most) {
    const step = STEPS.find((s) => (t1 - t0) / s <= most) ?? STEPS[STEPS.length - 1];
    const out = [];
    for (let t = Math.ceil(t0 / step) * step; t <= t1; t += step) out.push([t, step >= DAY || t % DAY === 0 ? dm(t) : hm(t)]);
    return out;
  }

  /** Ranges the live count can fill; the others stay hidden until it can. */
  function ranges(s) {
    const age = s.trackingSince ? s.now - s.trackingSince : 0;
    const open = { h48: true, d7: age > SPAN.h48, d30: age > SPAN.d7 };
    if (!open[range]) range = "h48";
    let shown = 0;
    for (const b of document.querySelectorAll(".seg button")) {
      b.hidden = !open[b.dataset.range];
      if (!b.hidden) shown++;
      b.setAttribute("aria-pressed", String(b.dataset.range === range));
    }
    document.querySelector(".seg").hidden = shown < 2;
  }

  function chart(s) {
    ranges(s);
    const svg = $("chart-svg");
    const W = Math.max(260, Math.round($("chart").clientWidth));
    const H = W < 520 ? 200 : 260;
    const L = 30, R = 6, T = 10, B = 26;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const series = s.series[range];
    const t1 = s.now;
    // Before the live count began there is nothing to draw: start the axis where it began.
    const t0 = Math.max(t1 - SPAN[range], s.trackingSince ? Math.floor(s.trackingSince / series.size) * series.size : 0);
    const zoomed = t0 > t1 - SPAN[range];
    $("chart-note").textContent = zoomed ? `Since the live count began, ${dm(s.trackingSince)} ${hm(s.trackingSince)} UTC` : "";
    const pts = series.points.filter((p) => p[0] >= t0);
    // The minute in progress is not in the history yet: end the lines on the live reading.
    if (s.live.fresh && pts.length && t1 - pts[pts.length - 1][0] <= series.size * 2.5) pts.push([t1, s.live.online, s.live.playing]);
    const top = niceMax(Math.max(4, ...pts.map((p) => Math.max(p[1], p[2]))));
    const x = (t) => L + ((t - t0) / Math.max(1, t1 - t0)) * (W - L - R);
    const y = (v) => T + (1 - v / top) * (H - T - B);
    const parts = [`<defs><linearGradient id="playFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ddf581" stop-opacity=".42"/><stop offset="1" stop-color="#ddf581" stop-opacity=".02"/></linearGradient></defs>`];
    for (const v of [0, top / 2, top]) {
      parts.push(`<line class="${v === 0 ? "base" : "grid"}" x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}"/>`);
      parts.push(`<text class="axis" x="${L - 8}" y="${y(v) + 4}" text-anchor="end">${n(v)}</text>`);
    }
    for (const [t, label] of ticksX(t0, t1, W < 520 ? 4 : 7)) {
      const xx = x(t);
      if (xx < L + 16 || xx > W - R - 16) continue;
      parts.push(`<line class="grid" x1="${xx}" x2="${xx}" y1="${T}" y2="${H - B}"/>`);
      parts.push(`<text class="axis" x="${xx}" y="${H - 7}" text-anchor="middle">${label}</text>`);
    }
    // Lines break where the count was down, so an outage never draws as zero players.
    const segs = [];
    let cur = [];
    for (const p of pts) {
      if (cur.length && p[0] - cur[cur.length - 1][0] > series.size * 1.5) { segs.push(cur); cur = []; }
      cur.push(p);
    }
    if (cur.length) segs.push(cur);
    const line = (a) => a.map((q, i) => `${i ? "L" : "M"}${q[0].toFixed(1)},${q[1].toFixed(1)}`).join("");
    for (const seg of segs) {
      const pl = seg.map((p) => [x(p[0]), y(p[2])]);
      const ol = seg.map((p) => [x(p[0]), y(p[1])]);
      if (seg.length === 1) { pl.push([pl[0][0] + 2, pl[0][1]]); ol.push([ol[0][0] + 2, ol[0][1]]); }
      parts.push(`<path class="area" d="${line(pl)}L${pl[pl.length - 1][0].toFixed(1)},${y(0)}L${pl[0][0].toFixed(1)},${y(0)}Z"/>`);
      parts.push(`<path class="line-online" d="${line(ol)}"/>`);
      parts.push(`<path class="line-play" d="${line(pl)}"/>`);
    }
    if (!pts.length) parts.push(`<text class="empty-label" x="${(L + W - R) / 2}" y="${H / 2}" text-anchor="middle">No live count in this range yet</text>`);
    parts.push(`<line class="cursor" id="cursor" x1="0" x2="0" y1="${T}" y2="${H - B}"/><circle class="dot" id="dot" r="4.5" cx="0" cy="0"/>`);
    svg.innerHTML = `<desc id="chart-desc">Players online, ${range === "h48" ? "last 48 hours" : range === "d7" ? "last 7 days" : "last 30 days"}</desc>${parts.join("")}`;
    plot = { pts, x, y, size: series.size, W, H };
  }

  function hover(ev) {
    if (!plot || !plot.pts.length) return;
    const svg = $("chart-svg");
    const box = svg.getBoundingClientRect();
    const sx = ((ev.clientX - box.left) / box.width) * plot.W;
    let best = null, bd = Infinity;
    for (const p of plot.pts) { const d = Math.abs(plot.x(p[0]) - sx); if (d < bd) { bd = d; best = p; } }
    if (!best || bd > 40) return leave();
    const px = plot.x(best[0]), py = plot.y(best[2]);
    const cursor = $("cursor"), dot = $("dot"), tip = $("tip");
    cursor.setAttribute("x1", px); cursor.setAttribute("x2", px); cursor.classList.add("show");
    dot.setAttribute("cx", px); dot.setAttribute("cy", py); dot.classList.add("show");
    const end = best[0] + plot.size;
    tip.innerHTML = `${dm(best[0])} ${hm(best[0])}–${hm(end)} UTC<br><b>${n(best[2])}</b> in a game · <b>${n(best[1])}</b> on the site`;
    const left = (px / plot.W) * box.width;
    tip.style.left = `${Math.min(Math.max(left, 110), box.width - 110)}px`;
    tip.style.top = `${Math.max(0, (py / plot.H) * box.height - 64)}px`;
    tip.classList.add("show");
  }
  function leave() {
    $("cursor")?.classList.remove("show");
    $("dot")?.classList.remove("show");
    $("tip").classList.remove("show");
  }
  $("chart-svg").addEventListener("pointermove", hover);
  $("chart-svg").addEventListener("pointerdown", hover);
  $("chart-svg").addEventListener("pointerleave", leave);

  for (const b of document.querySelectorAll(".seg button")) {
    b.addEventListener("click", () => {
      range = b.dataset.range;
      if (data) chart(data);
    });
  }
  let resized = 0;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(resized);
    resized = requestAnimationFrame(() => { if (data) { leave(); chart(data); } });
  });

  // ---- load ----
  async function load() {
    try {
      const res = await fetch("/_live/stats.json", { cache: "no-store" });
      if (!res.ok) throw new Error(String(res.status));
      data = await res.json();
      failures = 0;
      $("alert").hidden = true;
      hero(data); totals(data); games(data); days(data); chart(data);
      $("stats").setAttribute("aria-busy", "false");
    } catch {
      failures++;
      if (failures >= 2) { $("alert").textContent = "Stats could not be loaded. Trying again."; $("alert").hidden = false; }
    }
  }
  load();
  setInterval(() => { if (document.visibilityState === "visible") load(); }, 15_000);
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") load(); });
})();
