/* gamescool.id live players (vantis-game-live, docs/live-players.md). Each open tab says it is
   here every 15 s: page path, visible or not, seconds since the last input. Nothing is stored on
   the device; the tab id lives in memory and dies with the page. A visitor who chose "No thanks"
   for analytics, or whose browser sends Global Privacy Control or Do Not Track, is counted
   anonymously: beats go without cookies. A game may add a short scene label:
   window.dispatchEvent(new CustomEvent("vantis-live", { detail: { scene: "Act II · Arena 14" } })) */
(function () {
  "use strict";
  var HOSTS = ["gamescool.id","game.vantis.sh"];
  var w = window, d = document, n = navigator;
  if (w.__vantisLive || !w.fetch || !w.JSON || !w.crypto) return;
  w.__vantisLive = 1;

  var signal = n.globalPrivacyControl === true || n.doNotTrack === "1" || w.doNotTrack === "1";
  var anon = signal;
  var sid = uuid();
  var t0 = Math.round((w.performance && performance.timeOrigin) || Date.now());
  var lastInput = Date.now(), beats = 0, timer = 0, soon = 0, path = location.pathname, detail = null;

  function uuid() {
    if (crypto.randomUUID) return crypto.randomUUID();
    var b = new Uint8Array(16), h = "";
    crypto.getRandomValues(b);
    b[6] = (b[6] & 15) | 64; b[8] = (b[8] & 63) | 128;
    for (var i = 0; i < 16; i++) h += (b[i] + 256).toString(16).slice(1);
    return h.slice(0, 8) + "-" + h.slice(8, 12) + "-" + h.slice(12, 16) + "-" + h.slice(16, 20) + "-" + h.slice(20);
  }
  function input() { lastInput = Date.now(); }
  function pads() {
    try {
      var list = n.getGamepads ? n.getGamepads() : [];
      for (var i = 0; i < list.length; i++) {
        var g = list[i];
        if (!g) continue;
        for (var j = 0; j < g.buttons.length; j++) if (g.buttons[j].pressed) return input();
        for (var k = 0; k < g.axes.length; k++) if (Math.abs(g.axes[k]) > 0.35) return input();
      }
    } catch (e) { /* gamepads unavailable */ }
  }
  // The site's own analytics choice (components/visitor-analytics.tsx); read, never written.
  function declined() {
    try { return w.localStorage.getItem("vantis-play-analytics") === "deny"; } catch (e) { return false; }
  }
  function body(extra) {
    pads();
    anon = signal || declined();
    var b = { v: 1, sid: sid, t0: t0, path: location.pathname, vis: d.visibilityState === "hidden" ? 0 : 1,
      idle: Math.round((Date.now() - lastInput) / 1000), mt: n.maxTouchPoints || 0 };
    if (anon) b.anon = 1;
    if (detail) b.d = detail;
    if (extra) for (var key in extra) b[key] = extra[key];
    return JSON.stringify(b);
  }
  // The trophy-run cookie is scoped to /api/progression and the callsign cookie to /api/meme-surge,
  // so beats alternate between the two paths (both reach the live service, never the game).
  function post(url, payload) {
    try {
      fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: payload,
        keepalive: true, credentials: anon ? "omit" : "same-origin" })["catch"](function () {});
    } catch (e) { /* offline or blocked */ }
  }
  function beat() {
    var payload = body();
    post(!anon && beats % 4 === 1 ? "/api/meme-surge/live" : "/api/progression/live", payload);
    beats++;
  }
  function schedule() {
    clearInterval(timer);
    timer = setInterval(beat, d.visibilityState === "hidden" ? 60000 : 15000);
  }
  function bye() {
    var payload = body({ bye: 1 });
    try {
      if (!anon && n.sendBeacon && n.sendBeacon("/api/progression/live", new Blob([payload], { type: "application/json" }))) return;
    } catch (e) { /* fall through */ }
    post("/api/progression/live", payload);
  }
  function start() {
    ["pointerdown", "keydown", "touchstart", "wheel"].forEach(function (type) {
      w.addEventListener(type, input, { capture: true, passive: true });
    });
    d.addEventListener("visibilitychange", function () { beat(); schedule(); });
    w.addEventListener("pagehide", bye);
    w.addEventListener("pageshow", function (e) { if (e.persisted) { beat(); schedule(); } });
    // The shelf opens games client-side, without a page load.
    setInterval(function () { if (location.pathname !== path) { path = location.pathname; beat(); } }, 1000);
    w.addEventListener("vantis-live", function (e) {
      var scene = e && e.detail && e.detail.scene;
      detail = typeof scene === "string" && scene.length <= 48 ? { scene: scene } : null;
      clearTimeout(soon);
      soon = setTimeout(beat, 800);
    });
    beat();
    setTimeout(beat, 2000);
    schedule();
  }
  if (d.prerendering) d.addEventListener("prerenderingchange", start, { once: true });
  else start();
})();
