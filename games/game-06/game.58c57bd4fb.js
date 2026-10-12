/*! Game 06 (Vantis Play). Based on Voxel Musou by BubuAi, MIT licence:
MIT License

Copyright (c) 2026 BubuAi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

three.js r186, MIT licence, Copyright 2010-2026 three.js authors. */
var Ip=0,H0=1,Pp=2;var ma=1,Lp=2,_o=3,Or=0,Xn=1,En=2,Bs=0,zr=1,ii=2,V0=3,G0=4,Cc=5;var ga=100,Dp=101,Fp=102,Np=103,Up=104,kp=200,Ic=201,Op=202,zp=203,W0=204,Mo=205,Bp=206,Hp=207,Vp=208,Gp=209,Wp=210,qp=211,Xp=212,$p=213,Yp=214,Yl=0,Kl=1,Zl=2,ao=3,jl=4,Jl=5,Ql=6,th=7,q0=0,Kp=1,Zp=2,Is=0,X0=1,$0=2,Y0=3,Pc=4,K0=5,Z0=6,j0=7;var J0=300,Br=301,xa=302,bh=303,Sh=304,Lc=306,oo=1e3,Ns=1001,eh=1002,sn=1003,jp=1004;var Dc=1005;var oi=1006,wh=1007;var Hs=1008;var Vi=1009,Q0=1010,tf=1011,bo=1012,Eh=1013,Ps=1014,ls=1015,$n=1016,Th=1017,Ah=1018,So=1020,ef=35902,nf=35899,sf=1021,rf=1022,hs=1023,Us=1026,Hr=1027,Rh=1028,Ch=1029,Vr=1030,Ih=1031;var Ph=1033,Fc=33776,Nc=33777,Uc=33778,kc=33779,Lh=35840,Dh=35841,Fh=35842,Nh=35843,Uh=36196,kh=37492,Oh=37496,zh=37488,Bh=37489,Oc=37490,Hh=37491,Vh=37808,Gh=37809,Wh=37810,qh=37811,Xh=37812,$h=37813,Yh=37814,Kh=37815,Zh=37816,jh=37817,Jh=37818,Qh=37819,tu=37820,eu=37821,nu=36492,iu=36494,su=36495,ru=36283,au=36284,zc=36285,ou=36286;var cc=2300,nh=2301,Xl=2302,D0=2303,F0=2400,N0=2401,U0=2402;var Jp=3200;var cu=0,Qp=1,cr="",Hn="srgb",lc="srgb-linear",hc="linear",nn="srgb";var $l=7680;var tm=519,em=512,nm=513,im=514,lu=515,sm=516,rm=517,hu=518,am=519,af=35044,Ci=35048;var of="300 es",Cs=2e3,co=2001;function n2(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function i2(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function uc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function om(){let n=uc("canvas");return n.style.display="block",n}var sp={},lo=null;function fc(...n){let t="THREE."+n.shift();lo?lo("log",t,...n):console.log(t,...n)}function cm(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ee(...n){n=cm(n);let t="THREE."+n.shift();if(lo)lo("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ae(...n){n=cm(n);let t="THREE."+n.shift();if(lo)lo("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function da(...n){let t=n.join(" ");t in sp||(sp[t]=!0,Ee(...n))}function lm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var hm={[Yl]:Kl,[Zl]:Ql,[jl]:th,[ao]:Jl,[Kl]:Yl,[Ql]:Zl,[th]:jl,[Jl]:ao},ks=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},pi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rp=1234567,ac=Math.PI/180,ho=180/Math.PI;function rr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pi[n&255]+pi[n>>8&255]+pi[n>>16&255]+pi[n>>24&255]+"-"+pi[t&255]+pi[t>>8&255]+"-"+pi[t>>16&15|64]+pi[t>>24&255]+"-"+pi[e&63|128]+pi[e>>8&255]+"-"+pi[e>>16&255]+pi[e>>24&255]+pi[i&255]+pi[i>>8&255]+pi[i>>16&255]+pi[i>>24&255]).toLowerCase()}function Ke(n,t,e){return Math.max(t,Math.min(e,n))}function cf(n,t){return(n%t+t)%t}function s2(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function r2(n,t,e){return n!==t?(e-n)/(t-n):0}function oc(n,t,e){return(1-e)*n+e*t}function a2(n,t,e,i){return oc(n,t,1-Math.exp(-e*i))}function o2(n,t=1){return t-Math.abs(cf(n,t*2)-t)}function c2(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function l2(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function h2(n,t){return n+Math.floor(Math.random()*(t-n+1))}function u2(n,t){return n+Math.random()*(t-n)}function f2(n){return n*(.5-Math.random())}function d2(n){n!==void 0&&(rp=n);let t=rp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function p2(n){return n*ac}function m2(n){return n*ho}function g2(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function x2(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function v2(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function y2(n,t,e,i,s){let r=Math.cos,a=Math.sin,l=r(e/2),c=a(e/2),o=r((t+i)/2),u=a((t+i)/2),f=r((t-i)/2),h=a((t-i)/2),d=r((i-t)/2),p=a((i-t)/2);switch(s){case"XYX":n.set(l*u,c*f,c*h,l*o);break;case"YZY":n.set(c*h,l*u,c*f,l*o);break;case"ZXZ":n.set(c*f,c*h,l*u,l*o);break;case"XZX":n.set(l*u,c*p,c*d,l*o);break;case"YXY":n.set(c*d,l*u,c*p,l*o);break;case"ZYZ":n.set(c*p,c*d,l*u,l*o);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function rn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var va={DEG2RAD:ac,RAD2DEG:ho,generateUUID:rr,clamp:Ke,euclideanModulo:cf,mapLinear:s2,inverseLerp:r2,lerp:oc,damp:a2,pingpong:o2,smoothstep:c2,smootherstep:l2,randInt:h2,randFloat:u2,randFloatSpread:f2,seededRandom:d2,degToRad:p2,radToDeg:m2,isPowerOfTwo:g2,ceilPowerOfTwo:x2,floorPowerOfTwo:v2,setQuaternionFromProperEuler:y2,normalize:rn,denormalize:Rs},xe=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ke(this.x,t.x,e.x),this.y=Ke(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ke(this.x,t,e),this.y=Ke(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,l){let c=i[s+0],o=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],d=r[a+1],p=r[a+2],x=r[a+3];if(f!==x||c!==h||o!==d||u!==p){let _=c*h+o*d+u*p+f*x;_<0&&(h=-h,d=-d,p=-p,x=-x,_=-_);let g=1-l;if(_<.9995){let A=Math.acos(_),E=Math.sin(A);g=Math.sin(g*A)/E,l=Math.sin(l*A)/E,c=c*g+h*l,o=o*g+d*l,u=u*g+p*l,f=f*g+x*l}else{c=c*g+h*l,o=o*g+d*l,u=u*g+p*l,f=f*g+x*l;let A=1/Math.sqrt(c*c+o*o+u*u+f*f);c*=A,o*=A,u*=A,f*=A}}t[e]=c,t[e+1]=o,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let l=i[s],c=i[s+1],o=i[s+2],u=i[s+3],f=r[a],h=r[a+1],d=r[a+2],p=r[a+3];return t[e]=l*p+u*f+c*d-o*h,t[e+1]=c*p+u*h+o*f-l*d,t[e+2]=o*p+u*d+l*h-c*f,t[e+3]=u*p-l*f-c*h-o*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,c=Math.sin,o=l(i/2),u=l(s/2),f=l(r/2),h=c(i/2),d=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=h*u*f+o*d*p,this._y=o*d*f-h*u*p,this._z=o*u*p+h*d*f,this._w=o*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+o*d*p,this._y=o*d*f-h*u*p,this._z=o*u*p-h*d*f,this._w=o*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-o*d*p,this._y=o*d*f+h*u*p,this._z=o*u*p+h*d*f,this._w=o*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-o*d*p,this._y=o*d*f+h*u*p,this._z=o*u*p-h*d*f,this._w=o*u*f+h*d*p;break;case"YZX":this._x=h*u*f+o*d*p,this._y=o*d*f+h*u*p,this._z=o*u*p-h*d*f,this._w=o*u*f-h*d*p;break;case"XZY":this._x=h*u*f-o*d*p,this._y=o*d*f-h*u*p,this._z=o*u*p+h*d*f,this._w=o*u*f+h*d*p;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],l=e[5],c=e[9],o=e[2],u=e[6],f=e[10],h=i+l+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-o)*d,this._z=(a-s)*d}else if(i>l&&i>f){let d=2*Math.sqrt(1+i-l-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+o)/d}else if(l>f){let d=2*Math.sqrt(1+l-i-f);this._w=(r-o)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-i-l);this._w=(a-s)/d,this._x=(r+o)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,l=e._x,c=e._y,o=e._z,u=e._w;return this._x=i*u+a*l+s*o-r*c,this._y=s*u+a*c+r*l-i*o,this._z=r*u+a*o+i*c-s*l,this._w=a*u-i*l-s*c-r*o,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(i=-i,s=-s,r=-r,a=-a,l=-l);let c=1-e;if(l<.9995){let o=Math.acos(l),u=Math.sin(o);c=Math.sin(c*o)/u,e=Math.sin(e*o)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ap.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ap.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,l=t.z,c=t.w,o=2*(a*s-l*i),u=2*(l*e-r*s),f=2*(r*i-a*e);return this.x=e+c*o+a*f-l*u,this.y=i+c*u+l*o-r*f,this.z=s+c*f+r*u-a*o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ke(this.x,t.x,e.x),this.y=Ke(this.y,t.y,e.y),this.z=Ke(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ke(this.x,t,e),this.y=Ke(this.y,t,e),this.z=Ke(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*a-i*c,this.z=i*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return u0.copy(this).projectOnVector(t),this.sub(u0)}reflect(t){return this.sub(u0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},u0=new q,ap=new je,Ie=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,l,c,o){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,l,c,o)}set(t,e,i,s,r,a,l,c,o){let u=this.elements;return u[0]=t,u[1]=s,u[2]=l,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],l=i[3],c=i[6],o=i[1],u=i[4],f=i[7],h=i[2],d=i[5],p=i[8],x=s[0],_=s[3],g=s[6],A=s[1],E=s[4],m=s[7],v=s[2],y=s[5],w=s[8];return r[0]=a*x+l*A+c*v,r[3]=a*_+l*E+c*y,r[6]=a*g+l*m+c*w,r[1]=o*x+u*A+f*v,r[4]=o*_+u*E+f*y,r[7]=o*g+u*m+f*w,r[2]=h*x+d*A+p*v,r[5]=h*_+d*E+p*y,r[8]=h*g+d*m+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],o=t[7],u=t[8];return e*a*u-e*l*o-i*r*u+i*l*c+s*r*o-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],o=t[7],u=t[8],f=u*a-l*o,h=l*c-u*r,d=o*r-a*c,p=e*f+i*h+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=f*x,t[1]=(s*o-u*i)*x,t[2]=(l*i-s*a)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-l*e)*x,t[6]=d*x,t[7]=(i*c-o*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,l){let c=Math.cos(r),o=Math.sin(r);return this.set(i*c,i*o,-i*(c*a+o*l)+a+t,-s*o,s*c,-s*(-o*a+c*l)+l+e,0,0,1),this}scale(t,e){return da("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(f0.makeScale(t,e)),this}rotate(t){return da("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(f0.makeRotation(-t)),this}translate(t,e){return da("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(f0.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},f0=new Ie,op=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cp=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _2(){let n={enabled:!0,workingColorSpace:lc,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nn&&(s.r=ar(s.r),s.g=ar(s.g),s.b=ar(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nn&&(s.r=ro(s.r),s.g=ro(s.g),s.b=ro(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cr?hc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return da("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return da("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[lc]:{primaries:t,whitePoint:i,transfer:hc,toXYZ:op,fromXYZ:cp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:t,whitePoint:i,transfer:nn,toXYZ:op,fromXYZ:cp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),n}var Ye=_2();function ar(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ro(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ha,ih=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ha===void 0&&(Ha=uc("canvas")),Ha.width=t.width,Ha.height=t.height;let s=Ha.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ha}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=uc("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ar(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ar(e[i]/255)*255):e[i]=ar(e[i]);return{data:e,width:t.width,height:t.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},M2=0,uo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:M2++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(d0(s[a].image)):r.push(d0(s[a]))}else r=d0(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function d0(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ih.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}var b2=0,p0=new q,Ri=class n extends ks{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ns,s=Ns,r=oi,a=Hs,l=hs,c=Vi,o=n.DEFAULT_ANISOTROPY,u=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b2++}),this.uuid=rr(),this.name="",this.source=new uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(p0).x}get height(){return this.source.getSize(p0).y}get depth(){return this.source.getSize(p0).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ee(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==J0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oo:t.x=t.x-Math.floor(t.x);break;case Ns:t.x=t.x<0?0:1;break;case eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oo:t.y=t.y-Math.floor(t.y);break;case Ns:t.y=t.y<0?0:1;break;case eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ri.DEFAULT_IMAGE=null;Ri.DEFAULT_MAPPING=J0;Ri.DEFAULT_ANISOTROPY=1;var _n=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,o=c[0],u=c[4],f=c[8],h=c[1],d=c[5],p=c[9],x=c[2],_=c[6],g=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(p-_)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(p+_)<.1&&Math.abs(o+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(o+1)/2,m=(d+1)/2,v=(g+1)/2,y=(u+h)/4,w=(f+x)/4,M=(p+_)/4;return E>m&&E>v?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=y/i,r=w/i):m>v?m<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(m),i=y/s,r=M/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=w/r,s=M/r),this.set(i,s,r,e),this}let A=Math.sqrt((_-p)*(_-p)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(_-p)/A,this.y=(f-x)/A,this.z=(h-u)/A,this.w=Math.acos((o+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ke(this.x,t.x,e.x),this.y=Ke(this.y,t.y,e.y),this.z=Ke(this.z,t.z,e.z),this.w=Ke(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ke(this.x,t,e),this.y=Ke(this.y,t,e),this.z=Ke(this.z,t,e),this.w=Ke(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sh=class extends ks{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new _n(0,0,t,e),this.scissorTest=!1,this.viewport=new _n(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Ri(s),a=i.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new uo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends sh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},dc=class extends Ri{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var rh=class extends Ri{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var pe=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,l,c,o,u,f,h,d,p,x,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,l,c,o,u,f,h,d,p,x,_)}set(t,e,i,s,r,a,l,c,o,u,f,h,d,p,x,_){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=l,g[13]=c,g[2]=o,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=p,g[11]=x,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Va.setFromMatrixColumn(t,0).length(),r=1/Va.setFromMatrixColumn(t,1).length(),a=1/Va.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(s),o=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,d=a*f,p=l*u,x=l*f;e[0]=c*u,e[4]=-c*f,e[8]=o,e[1]=d+p*o,e[5]=h-x*o,e[9]=-l*c,e[2]=x-h*o,e[6]=p+d*o,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,p=o*u,x=o*f;e[0]=h+x*l,e[4]=p*l-d,e[8]=a*o,e[1]=a*f,e[5]=a*u,e[9]=-l,e[2]=d*l-p,e[6]=x+h*l,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,p=o*u,x=o*f;e[0]=h-x*l,e[4]=-a*f,e[8]=p+d*l,e[1]=d+p*l,e[5]=a*u,e[9]=x-h*l,e[2]=-a*o,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,d=a*f,p=l*u,x=l*f;e[0]=c*u,e[4]=p*o-d,e[8]=h*o+x,e[1]=c*f,e[5]=x*o+h,e[9]=d*o-p,e[2]=-o,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,d=a*o,p=l*c,x=l*o;e[0]=c*u,e[4]=x-h*f,e[8]=p*f+d,e[1]=f,e[5]=a*u,e[9]=-l*u,e[2]=-o*u,e[6]=d*f+p,e[10]=h-x*f}else if(t.order==="XZY"){let h=a*c,d=a*o,p=l*c,x=l*o;e[0]=c*u,e[4]=-f,e[8]=o*u,e[1]=h*f+x,e[5]=a*u,e[9]=d*f-p,e[2]=p*f-d,e[6]=l*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(S2,t,w2)}lookAt(t,e,i){let s=this.elements;return Yi.subVectors(t,e),Yi.lengthSq()===0&&(Yi.z=1),Yi.normalize(),Rr.crossVectors(i,Yi),Rr.lengthSq()===0&&(Math.abs(i.z)===1?Yi.x+=1e-4:Yi.z+=1e-4,Yi.normalize(),Rr.crossVectors(i,Yi)),Rr.normalize(),Sl.crossVectors(Yi,Rr),s[0]=Rr.x,s[4]=Sl.x,s[8]=Yi.x,s[1]=Rr.y,s[5]=Sl.y,s[9]=Yi.y,s[2]=Rr.z,s[6]=Sl.z,s[10]=Yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],l=i[4],c=i[8],o=i[12],u=i[1],f=i[5],h=i[9],d=i[13],p=i[2],x=i[6],_=i[10],g=i[14],A=i[3],E=i[7],m=i[11],v=i[15],y=s[0],w=s[4],M=s[8],S=s[12],P=s[1],C=s[5],z=s[9],U=s[13],V=s[2],Y=s[6],ct=s[10],T=s[14],L=s[3],D=s[7],B=s[11],b=s[15];return r[0]=a*y+l*P+c*V+o*L,r[4]=a*w+l*C+c*Y+o*D,r[8]=a*M+l*z+c*ct+o*B,r[12]=a*S+l*U+c*T+o*b,r[1]=u*y+f*P+h*V+d*L,r[5]=u*w+f*C+h*Y+d*D,r[9]=u*M+f*z+h*ct+d*B,r[13]=u*S+f*U+h*T+d*b,r[2]=p*y+x*P+_*V+g*L,r[6]=p*w+x*C+_*Y+g*D,r[10]=p*M+x*z+_*ct+g*B,r[14]=p*S+x*U+_*T+g*b,r[3]=A*y+E*P+m*V+v*L,r[7]=A*w+E*C+m*Y+v*D,r[11]=A*M+E*z+m*ct+v*B,r[15]=A*S+E*U+m*T+v*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],l=t[5],c=t[9],o=t[13],u=t[2],f=t[6],h=t[10],d=t[14],p=t[3],x=t[7],_=t[11],g=t[15],A=c*d-o*h,E=l*d-o*f,m=l*h-c*f,v=a*d-o*u,y=a*h-c*u,w=a*f-l*u;return e*(x*A-_*E+g*m)-i*(p*A-_*v+g*y)+s*(p*E-x*v+g*w)-r*(p*m-x*y+_*w)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],o=t[6],u=t[10];return e*(a*u-l*o)-i*(r*u-l*c)+s*(r*o-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],o=t[7],u=t[8],f=t[9],h=t[10],d=t[11],p=t[12],x=t[13],_=t[14],g=t[15],A=e*l-i*a,E=e*c-s*a,m=e*o-r*a,v=i*c-s*l,y=i*o-r*l,w=s*o-r*c,M=u*x-f*p,S=u*_-h*p,P=u*g-d*p,C=f*_-h*x,z=f*g-d*x,U=h*g-d*_,V=A*U-E*z+m*C+v*P-y*S+w*M;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/V;return t[0]=(l*U-c*z+o*C)*Y,t[1]=(s*z-i*U-r*C)*Y,t[2]=(x*w-_*y+g*v)*Y,t[3]=(h*y-f*w-d*v)*Y,t[4]=(c*P-a*U-o*S)*Y,t[5]=(e*U-s*P+r*S)*Y,t[6]=(_*m-p*w-g*E)*Y,t[7]=(u*w-h*m+d*E)*Y,t[8]=(a*z-l*P+o*M)*Y,t[9]=(i*P-e*z-r*M)*Y,t[10]=(p*y-x*m+g*A)*Y,t[11]=(f*m-u*y-d*A)*Y,t[12]=(l*S-a*C-c*M)*Y,t[13]=(e*C-i*S+s*M)*Y,t[14]=(x*E-p*v-_*A)*Y,t[15]=(u*v-f*E+h*A)*Y,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,l=t.y,c=t.z,o=r*a,u=r*l;return this.set(o*a+i,o*l-s*c,o*c+s*l,0,o*l+s*c,u*l+i,u*c-s*a,0,o*c-s*l,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,l=e._z,c=e._w,o=r+r,u=a+a,f=l+l,h=r*o,d=r*u,p=r*f,x=a*u,_=a*f,g=l*f,A=c*o,E=c*u,m=c*f,v=i.x,y=i.y,w=i.z;return s[0]=(1-(x+g))*v,s[1]=(d+m)*v,s[2]=(p-E)*v,s[3]=0,s[4]=(d-m)*y,s[5]=(1-(h+g))*y,s[6]=(_+A)*y,s[7]=0,s[8]=(p+E)*w,s[9]=(_-A)*w,s[10]=(1-(h+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Va.set(s[0],s[1],s[2]).length(),l=Va.set(s[4],s[5],s[6]).length(),c=Va.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ws.copy(this);let o=1/a,u=1/l,f=1/c;return ws.elements[0]*=o,ws.elements[1]*=o,ws.elements[2]*=o,ws.elements[4]*=u,ws.elements[5]*=u,ws.elements[6]*=u,ws.elements[8]*=f,ws.elements[9]*=f,ws.elements[10]*=f,e.setFromRotationMatrix(ws),i.x=a,i.y=l,i.z=c,this}makePerspective(t,e,i,s,r,a,l=Cs,c=!1){let o=this.elements,u=2*r/(e-t),f=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s),p,x;if(c)p=r/(a-r),x=a*r/(a-r);else if(l===Cs)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(l===co)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=u,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=f,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=x,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,i,s,r,a,l=Cs,c=!1){let o=this.elements,u=2/(e-t),f=2/(i-s),h=-(e+t)/(e-t),d=-(i+s)/(i-s),p,x;if(c)p=1/(a-r),x=a/(a-r);else if(l===Cs)p=-2/(a-r),x=-(a+r)/(a-r);else if(l===co)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=u,o[4]=0,o[8]=0,o[12]=h,o[1]=0,o[5]=f,o[9]=0,o[13]=d,o[2]=0,o[6]=0,o[10]=p,o[14]=x,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Va=new q,ws=new pe,S2=new q(0,0,0),w2=new q(1,1,1),Rr=new q,Sl=new q,Yi=new q,lp=new pe,hp=new je,Pn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],c=s[1],o=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,o),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,o),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,o),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return lp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hp.setFromEuler(this),this.setFromQuaternion(hp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var pc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},E2=0,up=new q,Ga=new je,Qs=new pe,wl=new q,jo=new q,T2=new q,A2=new je,fp=new q(1,0,0),dp=new q(0,1,0),pp=new q(0,0,1),mp={type:"added"},R2={type:"removed"},Wa={type:"childadded",child:null},m0={type:"childremoved",child:null},qn=class n extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E2++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new q,e=new Pn,i=new je,s=new q(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Ie}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ga.setFromAxisAngle(t,e),this.quaternion.multiply(Ga),this}rotateOnWorldAxis(t,e){return Ga.setFromAxisAngle(t,e),this.quaternion.premultiply(Ga),this}rotateX(t){return this.rotateOnAxis(fp,t)}rotateY(t){return this.rotateOnAxis(dp,t)}rotateZ(t){return this.rotateOnAxis(pp,t)}translateOnAxis(t,e){return up.copy(t).applyQuaternion(this.quaternion),this.position.add(up.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fp,t)}translateY(t){return this.translateOnAxis(dp,t)}translateZ(t){return this.translateOnAxis(pp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qs.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?wl.copy(t):wl.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qs.lookAt(jo,wl,this.up):Qs.lookAt(wl,jo,this.up),this.quaternion.setFromRotationMatrix(Qs),s&&(Qs.extractRotation(s.matrixWorld),Ga.setFromRotationMatrix(Qs),this.quaternion.premultiply(Ga.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mp),Wa.child=t,this.dispatchEvent(Wa),Wa.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(R2),m0.child=t,this.dispatchEvent(m0),m0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mp),Wa.child=t,this.dispatchEvent(Wa),Wa.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,T2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,A2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let o=0,u=c.length;o<u;o++){let f=c[o];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=a(t.geometries),c=a(t.materials),o=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),p=a(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),o.length>0&&(i.textures=o),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(l){let c=[];for(let o in l){let u=l[o];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qn.DEFAULT_UP=new q(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ai=class extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}},C2={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,o=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(o&&t.hand){a=!0;for(let x of t.hand.values()){let _=e.getJointPose(x,i),g=this._getHandJoint(o,x);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}let u=o.joints["index-finger-tip"],f=o.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;o.inputState.pinching&&h>d+p?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!o.inputState.pinching&&h<=d-p&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(C2)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ai;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},El={h:0,s:0,l:0};function g0(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Ye.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ye.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Ye.workingColorSpace){if(t=cf(t,1),e=Ke(e,0,1),i=Ke(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=g0(a,r,t+1/3),this.g=g0(a,r,t),this.b=g0(a,r,t-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(t,e=Hn){function i(r){r!==void 0&&parseFloat(r)<1&&Ee("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ee("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Hn){let i=um[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}copyLinearToSRGB(t){return this.r=ro(t.r),this.g=ro(t.g),this.b=ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Hn){return Ye.workingToColorSpace(mi.copy(this),t),Math.round(Ke(mi.r*255,0,255))*65536+Math.round(Ke(mi.g*255,0,255))*256+Math.round(Ke(mi.b*255,0,255))}getHexString(t=Hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ye.workingColorSpace){Ye.workingToColorSpace(mi.copy(this),e);let i=mi.r,s=mi.g,r=mi.b,a=Math.max(i,s,r),l=Math.min(i,s,r),c,o,u=(l+a)/2;if(l===a)c=0,o=0;else{let f=a-l;switch(o=u<=.5?f/(a+l):f/(2-a-l),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=o,t.l=u,t}getRGB(t,e=Ye.workingColorSpace){return Ye.workingToColorSpace(mi.copy(this),e),t.r=mi.r,t.g=mi.g,t.b=mi.b,t}getStyle(t=Hn){Ye.workingToColorSpace(mi.copy(this),t);let e=mi.r,i=mi.g,s=mi.b;return t!==Hn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Cr),this.setHSL(Cr.h+t,Cr.s+e,Cr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Cr),t.getHSL(El);let i=oc(Cr.h,El.h,e),s=oc(Cr.s,El.s,e),r=oc(Cr.l,El.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mi=new Qt;Qt.NAMES=um;var mc=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gc=class extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Es=new q,tr=new q,x0=new q,er=new q,qa=new q,Xa=new q,gp=new q,v0=new q,y0=new q,_0=new q,M0=new _n,b0=new _n,S0=new _n,sr=class n{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Es.subVectors(t,e),s.cross(Es);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Es.subVectors(s,e),tr.subVectors(i,e),x0.subVectors(t,e);let a=Es.dot(Es),l=Es.dot(tr),c=Es.dot(x0),o=tr.dot(tr),u=tr.dot(x0),f=a*o-l*l;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(o*c-l*u)*h,p=(a*u-l*c)*h;return r.set(1-d-p,p,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(t,e,i,s,r,a,l,c){return this.getBarycoord(t,e,i,s,er)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,er.x),c.addScaledVector(a,er.y),c.addScaledVector(l,er.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return M0.setScalar(0),b0.setScalar(0),S0.setScalar(0),M0.fromBufferAttribute(t,e),b0.fromBufferAttribute(t,i),S0.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(M0,r.x),a.addScaledVector(b0,r.y),a.addScaledVector(S0,r.z),a}static isFrontFacing(t,e,i,s){return Es.subVectors(i,e),tr.subVectors(t,e),Es.cross(tr).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Es.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Es.cross(tr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,l;qa.subVectors(s,i),Xa.subVectors(r,i),v0.subVectors(t,i);let c=qa.dot(v0),o=Xa.dot(v0);if(c<=0&&o<=0)return e.copy(i);y0.subVectors(t,s);let u=qa.dot(y0),f=Xa.dot(y0);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*o;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(qa,a);_0.subVectors(t,r);let d=qa.dot(_0),p=Xa.dot(_0);if(p>=0&&d<=p)return e.copy(r);let x=d*o-c*p;if(x<=0&&o>=0&&p<=0)return l=o/(o-p),e.copy(i).addScaledVector(Xa,l);let _=u*p-d*f;if(_<=0&&f-u>=0&&d-p>=0)return gp.subVectors(r,s),l=(f-u)/(f-u+(d-p)),e.copy(s).addScaledVector(gp,l);let g=1/(_+x+h);return a=x*g,l=h*g,e.copy(i).addScaledVector(qa,a).addScaledVector(Xa,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Os=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ts.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ts.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ts.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Ts):Ts.fromBufferAttribute(r,a),Ts.applyMatrix4(t.matrixWorld),this.expandByPoint(Ts);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tl.copy(i.boundingBox)),Tl.applyMatrix4(t.matrixWorld),this.union(Tl)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ts),Ts.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jo),Al.subVectors(this.max,Jo),$a.subVectors(t.a,Jo),Ya.subVectors(t.b,Jo),Ka.subVectors(t.c,Jo),Ir.subVectors(Ya,$a),Pr.subVectors(Ka,Ya),la.subVectors($a,Ka);let e=[0,-Ir.z,Ir.y,0,-Pr.z,Pr.y,0,-la.z,la.y,Ir.z,0,-Ir.x,Pr.z,0,-Pr.x,la.z,0,-la.x,-Ir.y,Ir.x,0,-Pr.y,Pr.x,0,-la.y,la.x,0];return!w0(e,$a,Ya,Ka,Al)||(e=[1,0,0,0,1,0,0,0,1],!w0(e,$a,Ya,Ka,Al))?!1:(Rl.crossVectors(Ir,Pr),e=[Rl.x,Rl.y,Rl.z],w0(e,$a,Ya,Ka,Al))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ts).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ts).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},nr=[new q,new q,new q,new q,new q,new q,new q,new q],Ts=new q,Tl=new Os,$a=new q,Ya=new q,Ka=new q,Ir=new q,Pr=new q,la=new q,Jo=new q,Al=new q,Rl=new q,ha=new q;function w0(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ha.fromArray(n,r);let l=s.x*Math.abs(ha.x)+s.y*Math.abs(ha.y)+s.z*Math.abs(ha.z),c=t.dot(ha),o=e.dot(ha),u=i.dot(ha);if(Math.max(-Math.max(c,o,u),Math.min(c,o,u))>l)return!1}return!0}var Bn=new q,Cl=new xe,I2=0,fn=class extends ks{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I2++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=af,this.updateRanges=[],this.gpuType=ls,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Cl.fromBufferAttribute(this,e),Cl.applyMatrix3(t),this.setXY(e,Cl.x,Cl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Bn.fromBufferAttribute(this,e),Bn.applyMatrix3(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Bn.fromBufferAttribute(this,e),Bn.applyMatrix4(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Bn.fromBufferAttribute(this,e),Bn.applyNormalMatrix(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Bn.fromBufferAttribute(this,e),Bn.transformDirection(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Rs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=rn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var xc=class extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var vc=class extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ze=class extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}},P2=new Os,Qo=new q,E0=new q,Dr=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):P2.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qo.subVectors(t,this.center);let e=Qo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Qo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(E0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qo.copy(t.center).add(E0)),this.expandByPoint(Qo.copy(t.center).sub(E0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},L2=0,os=new pe,T0=new qn,Za=new q,Ki=new Os,tc=new Os,ei=new q,hn=class n extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L2++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(n2(t)?vc:xc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ie().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return os.makeRotationFromQuaternion(t),this.applyMatrix4(os),this}rotateX(t){return os.makeRotationX(t),this.applyMatrix4(os),this}rotateY(t){return os.makeRotationY(t),this.applyMatrix4(os),this}rotateZ(t){return os.makeRotationZ(t),this.applyMatrix4(os),this}translate(t,e,i){return os.makeTranslation(t,e,i),this.applyMatrix4(os),this}scale(t,e,i){return os.makeScale(t,e,i),this.applyMatrix4(os),this}lookAt(t){return T0.lookAt(t),T0.updateMatrix(),this.applyMatrix4(T0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Za).negate(),this.translate(Za.x,Za.y,Za.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ki.setFromBufferAttribute(r),this.morphTargetsRelative?(ei.addVectors(this.boundingBox.min,Ki.min),this.boundingBox.expandByPoint(ei),ei.addVectors(this.boundingBox.max,Ki.max),this.boundingBox.expandByPoint(ei)):(this.boundingBox.expandByPoint(Ki.min),this.boundingBox.expandByPoint(Ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let i=this.boundingSphere.center;if(Ki.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];tc.setFromBufferAttribute(l),this.morphTargetsRelative?(ei.addVectors(Ki.min,tc.min),Ki.expandByPoint(ei),ei.addVectors(Ki.max,tc.max),Ki.expandByPoint(ei)):(Ki.expandByPoint(tc.min),Ki.expandByPoint(tc.max))}Ki.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)ei.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ei));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],c=this.morphTargetsRelative;for(let o=0,u=l.count;o<u;o++)ei.fromBufferAttribute(l,o),c&&(Za.fromBufferAttribute(t,o),ei.add(Za)),s=Math.max(s,i.distanceToSquared(ei))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let M=0;M<i.count;M++)l[M]=new q,c[M]=new q;let o=new q,u=new q,f=new q,h=new xe,d=new xe,p=new xe,x=new q,_=new q;function g(M,S,P){o.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,P),h.fromBufferAttribute(r,M),d.fromBufferAttribute(r,S),p.fromBufferAttribute(r,P),u.sub(o),f.sub(o),d.sub(h),p.sub(h);let C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(C),_.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(C),l[M].add(x),l[S].add(x),l[P].add(x),c[M].add(_),c[S].add(_),c[P].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let M=0,S=A.length;M<S;++M){let P=A[M],C=P.start,z=P.count;for(let U=C,V=C+z;U<V;U+=3)g(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let E=new q,m=new q,v=new q,y=new q;function w(M){v.fromBufferAttribute(s,M),y.copy(v);let S=l[M];E.copy(S),E.sub(v.multiplyScalar(v.dot(S))).normalize(),m.crossVectors(y,S);let C=m.dot(c[M])<0?-1:1;a.setXYZW(M,E.x,E.y,E.z,C)}for(let M=0,S=A.length;M<S;++M){let P=A[M],C=P.start,z=P.count;for(let U=C,V=C+z;U<V;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let s=new q,r=new q,a=new q,l=new q,c=new q,o=new q,u=new q,f=new q;if(t)for(let h=0,d=t.count;h<d;h+=3){let p=t.getX(h+0),x=t.getX(h+1),_=t.getX(h+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,_),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,x),o.fromBufferAttribute(i,_),l.add(u),c.add(u),o.add(u),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(_,o.x,o.y,o.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ei.fromBufferAttribute(t,e),ei.normalize(),t.setXYZ(e,ei.x,ei.y,ei.z)}toNonIndexed(){function t(l,c){let o=l.array,u=l.itemSize,f=l.normalized,h=new o.constructor(c.length*u),d=0,p=0;for(let x=0,_=c.length;x<_;x++){l.isInterleavedBufferAttribute?d=c[x]*l.data.stride+l.offset:d=c[x]*u;for(let g=0;g<u;g++)h[p++]=o[d++]}return new fn(h,u,f)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let l in s){let c=s[l],o=t(c,i);e.setAttribute(l,o)}let r=this.morphAttributes;for(let l in r){let c=[],o=r[l];for(let u=0,f=o.length;u<f;u++){let h=o[u],d=t(h,i);c.push(d)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let o=a[l];e.addGroup(o.start,o.count,o.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let o in c)c[o]!==void 0&&(t[o]=c[o]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let o=i[c];t.data.attributes[c]=o.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let o=this.morphAttributes[c],u=[];for(let f=0,h=o.length;f<h;f++){let d=o[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let o in s){let u=s[o];this.setAttribute(o,u.clone(e))}let r=t.morphAttributes;for(let o in r){let u=[],f=r[o];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[o]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let o=0,u=a.length;o<u;o++){let f=a[o];this.addGroup(f.start,f.count,f.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},yc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=af,this.updateRanges=[],this.version=0,this.uuid=rr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Ti=new q,po=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ti.fromBufferAttribute(this,e),Ti.applyMatrix4(t),this.setXYZ(e,Ti.x,Ti.y,Ti.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ti.fromBufferAttribute(this,e),Ti.applyNormalMatrix(t),this.setXYZ(e,Ti.x,Ti.y,Ti.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ti.fromBufferAttribute(this,e),Ti.transformDirection(t),this.setXYZ(e,Ti.x,Ti.y,Ti.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Rs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=rn(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rs(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rs(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rs(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rs(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){fc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){fc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},A0=new q,D2=new q,F2=new Ie,As=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=A0.subVectors(i,e).cross(D2.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(A0),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||F2.getNormalMatrix(t),s=this.coplanarPoint(A0).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},N2=0,or=class extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N2++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=zr,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=W0,this.blendDst=Mo,this.blendEquation=ga,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$l,this.stencilZFail=$l,this.stencilZPass=$l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ee(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new As().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new xe().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},mo=class extends or{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ja,ec=new q,Ja=new q,Qa=new q,to=new xe,nc=new xe,fm=new pe,Il=new q,ic=new q,Pl=new q,xp=new xe,R0=new xe,vp=new xe,_c=class extends qn{constructor(t=new mo){if(super(),this.isSprite=!0,this.type="Sprite",ja===void 0){ja=new hn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new yc(e,5);ja.setIndex([0,1,2,0,2,3]),ja.setAttribute("position",new po(i,3,0,!1)),ja.setAttribute("uv",new po(i,2,3,!1))}this.geometry=ja,this.material=t,this.center=new xe(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ja.setFromMatrixScale(this.matrixWorld),fm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qa.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ja.multiplyScalar(-Qa.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ll(Il.set(-.5,-.5,0),Qa,a,Ja,s,r),Ll(ic.set(.5,-.5,0),Qa,a,Ja,s,r),Ll(Pl.set(.5,.5,0),Qa,a,Ja,s,r),xp.set(0,0),R0.set(1,0),vp.set(1,1);let l=t.ray.intersectTriangle(Il,ic,Pl,!1,ec);if(l===null&&(Ll(ic.set(-.5,.5,0),Qa,a,Ja,s,r),R0.set(0,1),l=t.ray.intersectTriangle(Il,Pl,ic,!1,ec),l===null))return;let c=t.ray.origin.distanceTo(ec);c<t.near||c>t.far||e.push({distance:c,point:ec.clone(),uv:sr.getInterpolation(ec,Il,ic,Pl,xp,R0,vp,new xe),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ll(n,t,e,i,s,r){to.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(nc.x=r*to.x-s*to.y,nc.y=s*to.x+r*to.y):nc.copy(to),n.copy(t),n.x+=nc.x,n.y+=nc.y,n.applyMatrix4(fm)}var ir=new q,C0=new q,Dl=new q,Fl=new q,ah=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ir)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ir.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ir.copy(this.origin).addScaledVector(this.direction,e),ir.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){C0.copy(t).add(e).multiplyScalar(.5),Dl.copy(e).sub(t).normalize(),Fl.copy(this.origin).sub(C0);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Dl),l=Fl.dot(this.direction),c=-Fl.dot(Dl),o=Fl.lengthSq(),u=Math.abs(1-a*a),f,h,d,p;if(u>0)if(f=a*c-l,h=a*l-c,p=r*u,f>=0)if(h>=-p)if(h<=p){let x=1/u;f*=x,h*=x,d=f*(f+a*h+2*l)+h*(a*f+h+2*c)+o}else h=r,f=Math.max(0,-(a*h+l)),d=-f*f+h*(h+2*c)+o;else h=-r,f=Math.max(0,-(a*h+l)),d=-f*f+h*(h+2*c)+o;else h<=-p?(f=Math.max(0,-(-a*r+l)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+o):h<=p?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+o):(f=Math.max(0,-(a*r+l)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+o);else h=a>0?-r:r,f=Math.max(0,-(a*h+l)),d=-f*f+h*(h+2*c)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(C0).addScaledVector(Dl,h),d}intersectSphere(t,e){if(t.radius<0)return null;ir.subVectors(t.center,this.origin);let i=ir.dot(this.direction),s=ir.dot(ir)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,l,c,o=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return o>=0?(i=(t.min.x-h.x)*o,s=(t.max.x-h.x)*o):(i=(t.max.x-h.x)*o,s=(t.min.x-h.x)*o),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(l=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(l=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ir)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,l=this.direction,c=l.x,o=l.y,u=l.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,p=e.x-a.x,x=e.y-a.y,_=e.z-a.z,g=i.x-a.x,A=i.y-a.y,E=i.z-a.z,m=Math.abs(c),v=Math.abs(o),y=Math.abs(u),w,M,S,P,C,z,U,V,Y,ct,T,L;if(m>=v&&m>=y?(S=c,z=f,Y=p,L=g,c>=0?(w=o,M=u,P=h,C=d,U=x,V=_,ct=A,T=E):(w=u,M=o,P=d,C=h,U=_,V=x,ct=E,T=A)):v>=y?(S=o,z=h,Y=x,L=A,o>=0?(w=u,M=c,P=d,C=f,U=_,V=p,ct=E,T=g):(w=c,M=u,P=f,C=d,U=p,V=_,ct=g,T=E)):(S=u,z=d,Y=_,L=E,u>=0?(w=c,M=o,P=f,C=h,U=p,V=x,ct=g,T=A):(w=o,M=c,P=h,C=f,U=x,V=p,ct=A,T=g)),S===0)return null;let D=w/S,B=M/S,b=1/S,j=P-D*z,it=C-B*z,J=U-D*Y,vt=V-B*Y,Nt=ct-D*L,Z=T-B*L,at=Nt*vt-Z*J,pt=j*Z-it*Nt,zt=J*it-vt*j;if(s){if(at<0||pt<0||zt<0)return null}else if((at<0||pt<0||zt<0)&&(at>0||pt>0||zt>0))return null;let gt=at+pt+zt;if(gt===0)return null;let Ut=b*(at*z+pt*Y+zt*L);return(gt>0?Ut<0:Ut>0)?null:this.at(Ut/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends or{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},yp=new pe,ua=new ah,Nl=new Dr,_p=new q,Ul=new q,kl=new q,Ol=new q,I0=new q,zl=new q,Mp=new q,Bl=new q,Re=class extends qn{constructor(t=new hn,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){zl.set(0,0,0);for(let c=0,o=r.length;c<o;c++){let u=l[c],f=r[c];u!==0&&(I0.fromBufferAttribute(f,t),a?zl.addScaledVector(I0,u):zl.addScaledVector(I0.sub(e),u))}e.add(zl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),ua.copy(t.ray).recast(t.near),!(Nl.containsPoint(ua.origin)===!1&&(ua.intersectSphere(Nl,_p)===null||ua.origin.distanceToSquared(_p)>(t.far-t.near)**2))&&(yp.copy(r).invert(),ua.copy(t.ray).applyMatrix4(yp),!(i.boundingBox!==null&&ua.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ua)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,o=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let p=0,x=h.length;p<x;p++){let _=h[p],g=a[_.materialIndex],A=Math.max(_.start,d.start),E=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let m=A,v=E;m<v;m+=3){let y=l.getX(m),w=l.getX(m+1),M=l.getX(m+2);s=Hl(this,g,t,i,o,u,f,y,w,M),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let _=p,g=x;_<g;_+=3){let A=l.getX(_),E=l.getX(_+1),m=l.getX(_+2);s=Hl(this,a,t,i,o,u,f,A,E,m),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,x=h.length;p<x;p++){let _=h[p],g=a[_.materialIndex],A=Math.max(_.start,d.start),E=Math.min(c.count,Math.min(_.start+_.count,d.start+d.count));for(let m=A,v=E;m<v;m+=3){let y=m,w=m+1,M=m+2;s=Hl(this,g,t,i,o,u,f,y,w,M),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let _=p,g=x;_<g;_+=3){let A=_,E=_+1,m=_+2;s=Hl(this,a,t,i,o,u,f,A,E,m),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function U2(n,t,e,i,s,r,a,l){let c;if(t.side===Xn?c=i.intersectTriangle(a,r,s,!0,l):c=i.intersectTriangle(s,r,a,t.side===Or,l),c===null)return null;Bl.copy(l),Bl.applyMatrix4(n.matrixWorld);let o=e.ray.origin.distanceTo(Bl);return o<e.near||o>e.far?null:{distance:o,point:Bl.clone(),object:n}}function Hl(n,t,e,i,s,r,a,l,c,o){n.getVertexPosition(l,Ul),n.getVertexPosition(c,kl),n.getVertexPosition(o,Ol);let u=U2(n,t,e,i,Ul,kl,Ol,Mp);if(u){let f=new q;sr.getBarycoord(Mp,Ul,kl,Ol,f),s&&(u.uv=sr.getInterpolatedAttribute(s,l,c,o,f,new xe)),r&&(u.uv1=sr.getInterpolatedAttribute(r,l,c,o,f,new xe)),a&&(u.normal=sr.getInterpolatedAttribute(a,l,c,o,f,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:l,b:c,c:o,normal:new q,materialIndex:0};sr.getNormal(Ul,kl,Ol,h.normal),u.face=h,u.barycoord=f}return u}var Mc=class extends Ri{constructor(t=null,e=1,i=1,s,r,a,l,c,o=sn,u=sn,f,h){super(null,a,l,c,o,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gi=class extends fn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},eo=new pe,bp=new pe,Vl=[],Sp=new Os,k2=new pe,sc=new Re,rc=new Dr,Vn=class extends Re{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,k2)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Os),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,eo),Sp.copy(t.boundingBox).applyMatrix4(eo),this.boundingBox.union(Sp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,eo),rc.copy(t.boundingSphere).applyMatrix4(eo),this.boundingSphere.union(rc)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let l=0;l<i.length;l++)i[l]=s[a+l]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(sc.geometry=this.geometry,sc.material=this.material,sc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rc.copy(this.boundingSphere),rc.applyMatrix4(i),t.ray.intersectsSphere(rc)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,eo),bp.multiplyMatrices(i,eo),sc.matrixWorld=bp,sc.raycast(t,Vl);for(let a=0,l=Vl.length;a<l;a++){let c=Vl[a];c.instanceId=r,c.object=this,e.push(c)}Vl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new gi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Mc(new Float32Array(s*this.count),s,this.count,Rh,ls));let r=this.morphTexture.source.data.data,a=0;for(let o=0;o<i.length;o++)a+=i[o];let l=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=l,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fa=new Dr,O2=new xe(.5,.5),Gl=new q,go=class{constructor(t=new As,e=new As,i=new As,s=new As,r=new As,a=new As){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Cs,i=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],c=r[2],o=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],x=r[9],_=r[10],g=r[11],A=r[12],E=r[13],m=r[14],v=r[15];if(s[0].setComponents(o-a,d-u,g-p,v-A).normalize(),s[1].setComponents(o+a,d+u,g+p,v+A).normalize(),s[2].setComponents(o+l,d+f,g+x,v+E).normalize(),s[3].setComponents(o-l,d-f,g-x,v-E).normalize(),i)s[4].setComponents(c,h,_,m).normalize(),s[5].setComponents(o-c,d-h,g-_,v-m).normalize();else if(s[4].setComponents(o-c,d-h,g-_,v-m).normalize(),e===Cs)s[5].setComponents(o+c,d+h,g+_,v+m).normalize();else if(e===co)s[5].setComponents(c,h,_,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fa.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fa.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fa)}intersectsSprite(t){fa.center.set(0,0,0);let e=O2.distanceTo(t.center);return fa.radius=.7071067811865476+e,fa.applyMatrix4(t.matrixWorld),this.intersectsSphere(fa)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Gl.x=s.normal.x>0?t.max.x:t.min.x,Gl.y=s.normal.y>0?t.max.y:t.min.y,Gl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bc=class extends Ri{constructor(t=[],e=Br,i,s,r,a,l,c,o,u){super(t,e,i,s,r,a,l,c,o,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cs=class extends Ri{constructor(t,e,i,s,r,a,l,c,o){super(t,e,i,s,r,a,l,c,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zs=class extends Ri{constructor(t,e,i=Ps,s,r,a,l=sn,c=sn,o,u=Us,f=1){if(u!==Us&&u!==Hr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,a,l,c,u,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new uo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},oh=class extends zs{constructor(t,e=Ps,i=Br,s,r,a=sn,l=sn,c,o=Us){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,l,c,o),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Sc=class extends Ri{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ln=class n extends hn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],o=[],u=[],f=[],h=0,d=0;p("z","y","x",-1,-1,i,e,t,a,r,0),p("z","y","x",1,-1,i,e,-t,a,r,1),p("x","z","y",1,1,t,i,e,s,a,2),p("x","z","y",1,-1,t,i,-e,s,a,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(f,2));function p(x,_,g,A,E,m,v,y,w,M,S){let P=m/w,C=v/M,z=m/2,U=v/2,V=y/2,Y=w+1,ct=M+1,T=0,L=0,D=new q;for(let B=0;B<ct;B++){let b=B*C-U;for(let j=0;j<Y;j++){let it=j*P-z;D[x]=it*A,D[_]=b*E,D[g]=V,o.push(D.x,D.y,D.z),D[x]=0,D[_]=0,D[g]=y>0?1:-1,u.push(D.x,D.y,D.z),f.push(j/w),f.push(1-B/M),T+=1}}for(let B=0;B<M;B++)for(let b=0;b<w;b++){let j=h+b+Y*B,it=h+b+Y*(B+1),J=h+(b+1)+Y*(B+1),vt=h+(b+1)+Y*B;c.push(j,it,vt),c.push(it,J,vt),L+=6}l.addGroup(d,L,S),d+=L,h+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ni=class n extends hn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(i),c=Math.floor(s),o=l+1,u=c+1,f=t/l,h=e/c,d=[],p=[],x=[],_=[];for(let g=0;g<u;g++){let A=g*h-a;for(let E=0;E<o;E++){let m=E*f-r;p.push(m,-A,0),x.push(0,0,1),_.push(E/l),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let A=0;A<l;A++){let E=A+o*g,m=A+o*(g+1),v=A+1+o*(g+1),y=A+1+o*g;d.push(E,m,y),d.push(m,v,y)}this.setIndex(d),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var wc=class n extends hn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+l,Math.PI),o=0,u=[],f=new q,h=new q,d=[],p=[],x=[],_=[];for(let g=0;g<=i;g++){let A=[],E=g/i,m=a+E*l,v=t*Math.cos(m),y=Math.sqrt(t*t-v*v),w=0;g===0&&a===0?w=.5/e:g===i&&c===Math.PI&&(w=-.5/e);for(let M=0;M<=e;M++){let S=M/e,P=s+S*r;f.x=-y*Math.cos(P),f.y=v,f.z=y*Math.sin(P),p.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),_.push(S+w,1-E),A.push(o++)}u.push(A)}for(let g=0;g<i;g++)for(let A=0;A<e;A++){let E=u[g][A+1],m=u[g][A],v=u[g+1][A],y=u[g+1][A+1];(g!==0||a>0)&&d.push(E,m,y),(g!==i-1||c<Math.PI)&&d.push(m,v,y)}this.setIndex(d),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ya(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(wp(s))s.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(wp(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function xi(n){let t={};for(let e=0;e<n.length;e++){let i=ya(n[e]);for(let s in i)t[s]=i[s]}return t}function wp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function z2(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function lf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ye.workingColorSpace}var _a={clone:ya,merge:xi},B2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends or{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B2,this.fragmentShader=H2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ya(t.uniforms),this.uniformsGroups=z2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new xe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new q().fromArray(s.value);break;case"v4":this.uniforms[i].value=new _n().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(s.value);break;case"m4":this.uniforms[i].value=new pe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ch=class extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qe=class extends or{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var xo=class extends or{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},lh=class extends or{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function no(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function P0(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Fr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(i=2,r=l);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let l=i+a>>>1;t<e[l]?a=l:i=l+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hh=class extends Fr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:F0,endingEnd:F0}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case N0:r=t,l=2*e-i;break;case U0:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case N0:a=t,c=2*i-e;break;case U0:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let o=(i-e)*.5,u=this.valueSize;this._weightPrev=o/(e-l),this._weightNext=o/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,o=c-l,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(i-e)/(s-e),x=p*p,_=x*p,g=-h*_+2*h*x-h*p,A=(1+h)*_+(-1.5-2*h)*x+(-.5+h)*p+1,E=(-1-d)*_+(1.5+d)*x+.5*p,m=d*_-d*x;for(let v=0;v!==l;++v)r[v]=g*a[u+v]+A*a[o+v]+E*a[c+v]+m*a[f+v];return r}},uh=class extends Fr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,o=c-l,u=(i-e)/(s-e),f=1-u;for(let h=0;h!==l;++h)r[h]=a[o+h]*f+a[c+h]*u;return r}},fh=class extends Fr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},dh=class extends Fr{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,o=c-l,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(i-e)/(s-e),x=1-p;for(let _=0;_!==l;++_)r[_]=a[o+_]*x+a[c+_]*p;return r}let h=l*2,d=t-1;for(let p=0;p!==l;++p){let x=a[o+p],_=a[c+p],g=d*h+p*2,A=f[g],E=f[g+1],m=t*h+p*2,v=u[m],y=u[m+1],w=G2(i,e,A,v,s);r[p]=dm(w,x,E,y,_)}return r}};function dm(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function V2(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function G2(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let l=dm(r,t,e,i,s)-n;if(Math.abs(l)<1e-10)break;let c=V2(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var Zi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=no(e,this.TimeBufferType),this.values=no(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:no(t.times,Array),values:no(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),P0(t.settings)&&(i.settings={inTangents:no(t.settings.inTangents,Array),outTangents:no(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new fh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new dh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case cc:e=this.InterpolantFactoryMethodDiscrete;break;case nh:e=this.InterpolantFactoryMethodLinear;break;case Xl:e=this.InterpolantFactoryMethodSmooth;break;case D0:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ee("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cc;case this.InterpolantFactoryMethodLinear:return nh;case this.InterpolantFactoryMethodSmooth:return Xl;case this.InterpolantFactoryMethodBezier:return D0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;P0(this.settings)&&(Ep(this.settings.inTangents,t),Ep(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ae("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){Ae("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(a!==null&&a>c){Ae("KeyframeTrack: Out of order keys.",this,l,c,a),t=!1;break}a=c}if(s!==void 0&&i2(s))for(let l=0,c=s.length;l!==c;++l){let o=s[l];if(isNaN(o)){Ae("KeyframeTrack: Value is not a valid number.",this,l,o),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xl,r=t.length-1,a=1;for(let l=1;l<r;++l){let c=!1,o=t[l],u=t[l+1];if(o!==u&&(l!==1||o!==t[0]))if(s)c=!0;else{let f=l*i,h=f-i,d=f+i;for(let p=0;p!==i;++p){let x=e[f+p];if(x!==e[h+p]||x!==e[d+p]){c=!0;break}}}if(c){if(l!==a){t[a]=t[l];let f=l*i,h=a*i;for(let d=0;d!==i;++d)e[h+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let l=r*i,c=a*i,o=0;o!==i;++o)e[c+o]=e[l+o];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,P0(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ep(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Zi.prototype.ValueTypeName="";Zi.prototype.TimeBufferType=Float32Array;Zi.prototype.ValueBufferType=Float32Array;Zi.prototype.DefaultInterpolation=nh;var Nr=class extends Zi{constructor(t,e,i){super(t,e,i)}};Nr.prototype.ValueTypeName="bool";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=cc;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var ph=class extends Zi{constructor(t,e,i,s){super(t,e,i,s)}};ph.prototype.ValueTypeName="color";var mh=class extends Zi{constructor(t,e,i,s){super(t,e,i,s)}};mh.prototype.ValueTypeName="number";var gh=class extends Fr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(i-e)/(s-e),o=t*l;for(let u=o+l;o!==u;o+=4)je.slerpFlat(r,0,a,o-l,a,o,c);return r}},Ec=class extends Zi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new gh(this.times,this.values,this.getValueSize(),t)}};Ec.prototype.ValueTypeName="quaternion";Ec.prototype.InterpolantFactoryMethodSmooth=void 0;var Ur=class extends Zi{constructor(t,e,i){super(t,e,i)}};Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=cc;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var xh=class extends Zi{constructor(t,e,i,s){super(t,e,i,s)}};xh.prototype.ValueTypeName="vector";var vh=class{constructor(t,e,i){let s=this,r=!1,a=0,l=0,c,o=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,l),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return o.push(u,f),this},this.removeHandler=function(u){let f=o.indexOf(u);return f!==-1&&o.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=o.length;f<h;f+=2){let d=o[f],p=o[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pm=new vh,yh=class{constructor(t){this.manager=t!==void 0?t:pm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};yh.DEFAULT_MATERIAL_NAME="__DEFAULT";var vo=class extends qn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Tc=class extends vo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},L0=new pe,Tp=new q,Ap=new q,Ac=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=Vi,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new _n(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Tp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tp),Ap.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ap),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){L0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(L0,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,o=s?s.y/r.y:0;t.coordinateSystem===co||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,.5,.5,0,0,0,1),e.multiply(L0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Wl=new q,ql=new je,Fs=new q,Rc=class extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Cs,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wl,ql,Fs),Fs.x===1&&Fs.y===1&&Fs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,ql,Fs.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Wl,ql,Fs),Fs.x===1&&Fs.y===1&&Fs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,ql,Fs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Lr=new q,Rp=new xe,Cp=new xe,ai=class extends Rc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Lr.x,Lr.y).multiplyScalar(-t/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Lr.x,Lr.y).multiplyScalar(-t/Lr.z)}getViewSize(t,e){return this.getViewBounds(t,Rp,Cp),e.subVectors(Cp,Rp)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ac*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,o=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/o,s*=a.width/c,i*=a.height/o}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var k0=class extends Ac{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0}},pa=class extends vo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new k0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},kr=class extends Rc{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},O0=class extends Ac{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yo=class extends vo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.target=new qn,this.shadow=new O0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var io=-90,so=1,_h=class extends qn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ai(io,so,t,e);s.layers=this.layers,this.add(s);let r=new ai(io,so,t,e);r.layers=this.layers,this.add(r);let a=new ai(io,so,t,e);a.layers=this.layers,this.add(a);let l=new ai(io,so,t,e);l.layers=this.layers,this.add(l);let c=new ai(io,so,t,e);c.layers=this.layers,this.add(c);let o=new ai(io,so,t,e);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,l,c]=e;for(let o of e)this.remove(o);if(t===Cs)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===co)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let o of e)this.add(o),o.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,o,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Mh=class extends ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hf="\\[\\]\\.:\\/",W2=new RegExp("["+hf+"]","g"),uf="[^"+hf+"]",q2="[^"+hf.replace("\\.","")+"]",X2=/((?:WC+[\/:])*)/.source.replace("WC",uf),$2=/(WCOD+)?/.source.replace("WCOD",q2),Y2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uf),K2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uf),Z2=new RegExp("^"+X2+$2+Y2+K2+"$"),j2=["material","materials","bones","map"],z0=class{constructor(t,e,i){let s=i||xn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},xn=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(W2,"")}static parseTrackName(t){let e=Z2.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);j2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let c=i(l.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let o=e.objectIndex;switch(i){case"materials":if(!t.material){Ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===o){o=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(o!==void 0){if(t[o]===void 0){Ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[o]}}let a=t[s];if(a===void 0){let o=e.nodeName;Ae("PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xn.Composite=z0;xn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xn.prototype.GetterByBindingType=[xn.prototype._getValue_direct,xn.prototype._getValue_array,xn.prototype._getValue_arrayElement,xn.prototype._getValue_toArray];xn.prototype.SetterByBindingTypeAndVersioning=[[xn.prototype._setValue_direct,xn.prototype._setValue_direct_setNeedsUpdate,xn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xn.prototype._setValue_array,xn.prototype._setValue_array_setNeedsUpdate,xn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xn.prototype._setValue_arrayElement,xn.prototype._setValue_arrayElement_setNeedsUpdate,xn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xn.prototype._setValue_fromArray,xn.prototype._setValue_fromArray_setNeedsUpdate,xn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bE=new Float32Array(1);var B0=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function ff(n,t,e,i){let s=J2(i);switch(e){case sf:return n*t;case Rh:return n*t/s.components*s.byteLength;case Ch:return n*t/s.components*s.byteLength;case Vr:return n*t*2/s.components*s.byteLength;case Ih:return n*t*2/s.components*s.byteLength;case rf:return n*t*3/s.components*s.byteLength;case hs:return n*t*4/s.components*s.byteLength;case Ph:return n*t*4/s.components*s.byteLength;case Fc:case Nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Uc:case kc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dh:case Nh:return Math.max(n,16)*Math.max(t,8)/4;case Lh:case Fh:return Math.max(n,8)*Math.max(t,8)/2;case Uh:case kh:case zh:case Bh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oh:case Oc:case Hh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Wh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case qh:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case $h:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Kh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Zh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case jh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Qh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case tu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case eu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case nu:case iu:case su:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ru:case au:return Math.ceil(n/4)*Math.ceil(t/4)*8;case zc:case ou:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function J2(n){switch(n){case Vi:case Q0:return{byteLength:1,components:1};case bo:case tf:case $n:return{byteLength:2,components:1};case Th:case Ah:return{byteLength:2,components:4};case Ps:case Eh:case ls:return{byteLength:4,components:1};case ef:case nf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Um(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function iv(n){let t=new WeakMap;function e(l,c){let o=l.array,u=l.usage,f=o.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,o,u),l.onUploadCallback();let d;if(o instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=n.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=n.SHORT;else if(o instanceof Uint32Array)d=n.UNSIGNED_INT;else if(o instanceof Int32Array)d=n.INT;else if(o instanceof Int8Array)d=n.BYTE;else if(o instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:f}}function i(l,c,o){let u=c.array,f=c.updateRanges;if(n.bindBuffer(o,l),f.length===0)n.bufferSubData(o,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){let p=f[h],x=f[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){let x=f[d];n.bufferSubData(o,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(n.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let o=t.get(l);if(o===void 0)t.set(l,e(l,c));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(o.buffer,l,c),o.version=l.version}}return{get:s,remove:r,update:a}}var sv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ov=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Av=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$v=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Zv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ey=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ny=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ay=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,py=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,my=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,My=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ay=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ly=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$y=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,i_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,s_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,f_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:sv,alphahash_pars_fragment:rv,alphamap_fragment:av,alphamap_pars_fragment:ov,alphatest_fragment:cv,alphatest_pars_fragment:lv,aomap_fragment:hv,aomap_pars_fragment:uv,batching_pars_vertex:fv,batching_vertex:dv,begin_vertex:pv,beginnormal_vertex:mv,bsdfs:gv,iridescence_fragment:xv,bumpmap_pars_fragment:vv,clipping_planes_fragment:yv,clipping_planes_pars_fragment:_v,clipping_planes_pars_vertex:Mv,clipping_planes_vertex:bv,color_fragment:Sv,color_pars_fragment:wv,color_pars_vertex:Ev,color_vertex:Tv,common:Av,cube_uv_reflection_fragment:Rv,defaultnormal_vertex:Cv,displacementmap_pars_vertex:Iv,displacementmap_vertex:Pv,emissivemap_fragment:Lv,emissivemap_pars_fragment:Dv,colorspace_fragment:Fv,colorspace_pars_fragment:Nv,envmap_fragment:Uv,envmap_common_pars_fragment:kv,envmap_pars_fragment:Ov,envmap_pars_vertex:zv,envmap_physical_pars_fragment:Zv,envmap_vertex:Bv,fog_vertex:Hv,fog_pars_vertex:Vv,fog_fragment:Gv,fog_pars_fragment:Wv,gradientmap_pars_fragment:qv,lightmap_pars_fragment:Xv,lights_lambert_fragment:$v,lights_lambert_pars_fragment:Yv,lights_pars_begin:Kv,lights_toon_fragment:jv,lights_toon_pars_fragment:Jv,lights_phong_fragment:Qv,lights_phong_pars_fragment:ty,lights_physical_fragment:ey,lights_physical_pars_fragment:ny,lights_fragment_begin:iy,lights_fragment_maps:sy,lights_fragment_end:ry,lightprobes_pars_fragment:ay,logdepthbuf_fragment:oy,logdepthbuf_pars_fragment:cy,logdepthbuf_pars_vertex:ly,logdepthbuf_vertex:hy,map_fragment:uy,map_pars_fragment:fy,map_particle_fragment:dy,map_particle_pars_fragment:py,metalnessmap_fragment:my,metalnessmap_pars_fragment:gy,morphinstance_vertex:xy,morphcolor_vertex:vy,morphnormal_vertex:yy,morphtarget_pars_vertex:_y,morphtarget_vertex:My,normal_fragment_begin:by,normal_fragment_maps:Sy,normal_pars_fragment:wy,normal_pars_vertex:Ey,normal_vertex:Ty,normalmap_pars_fragment:Ay,clearcoat_normal_fragment_begin:Ry,clearcoat_normal_fragment_maps:Cy,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Py,opaque_fragment:Ly,packing:Dy,premultiplied_alpha_fragment:Fy,project_vertex:Ny,dithering_fragment:Uy,dithering_pars_fragment:ky,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:zy,shadowmap_pars_fragment:By,shadowmap_pars_vertex:Hy,shadowmap_vertex:Vy,shadowmask_pars_fragment:Gy,skinbase_vertex:Wy,skinning_pars_vertex:qy,skinning_vertex:Xy,skinnormal_vertex:$y,specularmap_fragment:Yy,specularmap_pars_fragment:Ky,tonemapping_fragment:Zy,tonemapping_pars_fragment:jy,transmission_fragment:Jy,transmission_pars_fragment:Qy,uv_pars_fragment:t_,uv_pars_vertex:e_,uv_vertex:n_,worldpos_vertex:i_,background_vert:s_,background_frag:r_,backgroundCube_vert:a_,backgroundCube_frag:o_,cube_vert:c_,cube_frag:l_,depth_vert:h_,depth_frag:u_,distance_vert:f_,distance_frag:d_,equirect_vert:p_,equirect_frag:m_,linedashed_vert:g_,linedashed_frag:x_,meshbasic_vert:v_,meshbasic_frag:y_,meshlambert_vert:__,meshlambert_frag:M_,meshmatcap_vert:b_,meshmatcap_frag:S_,meshnormal_vert:w_,meshnormal_frag:E_,meshphong_vert:T_,meshphong_frag:A_,meshphysical_vert:R_,meshphysical_frag:C_,meshtoon_vert:I_,meshtoon_frag:P_,points_vert:L_,points_frag:D_,shadow_vert:F_,shadow_frag:N_,sprite_vert:U_,sprite_frag:k_},ae={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Gs={basic:{uniforms:xi([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:xi([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:xi([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:xi([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:xi([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:xi([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:xi([ae.points,ae.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:xi([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:xi([ae.common,ae.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:xi([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:xi([ae.sprite,ae.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:xi([ae.common,ae.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:xi([ae.lights,ae.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Gs.physical={uniforms:xi([Gs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var uu={r:0,b:0,g:0},O_=new pe,km=new Ie;km.set(-1,0,0,0,1,0,0,0,1);function z_(n,t,e,i,s,r){let a=new Qt(0),l=s===!0?0:1,c,o,u=null,f=0,h=null;function d(A){let E=A.isScene===!0?A.background:null;if(E&&E.isTexture){let m=A.backgroundBlurriness>0;E=t.get(E,m)}return E}function p(A){let E=!1,m=d(A);m===null?_(a,l):m&&m.isColor&&(_(m,1),E=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(A,E){let m=d(E);m&&(m.isCubeTexture||m.mapping===Lc)?(o===void 0&&(o=new Re(new Ln(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:ya(Gs.backgroundCube.uniforms),vertexShader:Gs.backgroundCube.vertexShader,fragmentShader:Gs.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(v,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=m,o.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(O_.makeRotationFromEuler(E.backgroundRotation)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(km),o.material.toneMapped=Ye.getTransfer(m.colorSpace)!==nn,(u!==m||f!==m.version||h!==n.toneMapping)&&(o.material.needsUpdate=!0,u=m,f=m.version,h=n.toneMapping),o.layers.enableAll(),A.unshift(o,o.geometry,o.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new Re(new ni(2,2),new on({name:"BackgroundMaterial",uniforms:ya(Gs.background.uniforms),vertexShader:Gs.background.vertexShader,fragmentShader:Gs.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(m.colorSpace)!==nn,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(u!==m||f!==m.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=m,f=m.version,h=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function _(A,E){A.getRGB(uu,lf(n)),e.buffers.color.setClear(uu.r,uu.g,uu.b,E,r)}function g(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),l=E,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,_(a,l)},render:p,addToRenderList:x,dispose:g}}function B_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function l(C,z,U,V,Y){let ct=!1,T=f(C,V,U,z);r!==T&&(r=T,o(r.object)),ct=d(C,V,U,Y),ct&&p(C,V,U,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,m(C,z,U,V),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return n.createVertexArray()}function o(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function f(C,z,U,V){let Y=V.wireframe===!0,ct=i[z.id];ct===void 0&&(ct={},i[z.id]=ct);let T=C.isInstancedMesh===!0?C.id:0,L=ct[T];L===void 0&&(L={},ct[T]=L);let D=L[U.id];D===void 0&&(D={},L[U.id]=D);let B=D[Y];return B===void 0&&(B=h(c()),D[Y]=B),B}function h(C){let z=[],U=[],V=[];for(let Y=0;Y<e;Y++)z[Y]=0,U[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:U,attributeDivisors:V,object:C,attributes:{},index:null}}function d(C,z,U,V){let Y=r.attributes,ct=z.attributes,T=0,L=U.getAttributes();for(let D in L)if(L[D].location>=0){let b=Y[D],j=ct[D];if(j===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(j=C.instanceColor)),b===void 0||b.attribute!==j||j&&b.data!==j.data)return!0;T++}return r.attributesNum!==T||r.index!==V}function p(C,z,U,V){let Y={},ct=z.attributes,T=0,L=U.getAttributes();for(let D in L)if(L[D].location>=0){let b=ct[D];b===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(b=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(b=C.instanceColor));let j={};j.attribute=b,b&&b.data&&(j.data=b.data),Y[D]=j,T++}r.attributes=Y,r.attributesNum=T,r.index=V}function x(){let C=r.newAttributes;for(let z=0,U=C.length;z<U;z++)C[z]=0}function _(C){g(C,0)}function g(C,z){let U=r.newAttributes,V=r.enabledAttributes,Y=r.attributeDivisors;U[C]=1,V[C]===0&&(n.enableVertexAttribArray(C),V[C]=1),Y[C]!==z&&(n.vertexAttribDivisor(C,z),Y[C]=z)}function A(){let C=r.newAttributes,z=r.enabledAttributes;for(let U=0,V=z.length;U<V;U++)z[U]!==C[U]&&(n.disableVertexAttribArray(U),z[U]=0)}function E(C,z,U,V,Y,ct,T){T===!0?n.vertexAttribIPointer(C,z,U,Y,ct):n.vertexAttribPointer(C,z,U,V,Y,ct)}function m(C,z,U,V){x();let Y=V.attributes,ct=U.getAttributes(),T=z.defaultAttributeValues;for(let L in ct){let D=ct[L];if(D.location>=0){let B=Y[L];if(B===void 0&&(L==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),L==="instanceColor"&&C.instanceColor&&(B=C.instanceColor)),B!==void 0){let b=B.normalized,j=B.itemSize,it=t.get(B);if(it===void 0)continue;let J=it.buffer,vt=it.type,Nt=it.bytesPerElement,Z=vt===n.INT||vt===n.UNSIGNED_INT||B.gpuType===Eh;if(B.isInterleavedBufferAttribute){let at=B.data,pt=at.stride,zt=B.offset;if(at.isInstancedInterleavedBuffer){for(let gt=0;gt<D.locationSize;gt++)g(D.location+gt,at.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let gt=0;gt<D.locationSize;gt++)_(D.location+gt);n.bindBuffer(n.ARRAY_BUFFER,J);for(let gt=0;gt<D.locationSize;gt++)E(D.location+gt,j/D.locationSize,vt,b,pt*Nt,(zt+j/D.locationSize*gt)*Nt,Z)}else{if(B.isInstancedBufferAttribute){for(let at=0;at<D.locationSize;at++)g(D.location+at,B.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let at=0;at<D.locationSize;at++)_(D.location+at);n.bindBuffer(n.ARRAY_BUFFER,J);for(let at=0;at<D.locationSize;at++)E(D.location+at,j/D.locationSize,vt,b,j*Nt,j/D.locationSize*at*Nt,Z)}}else if(T!==void 0){let b=T[L];if(b!==void 0)switch(b.length){case 2:n.vertexAttrib2fv(D.location,b);break;case 3:n.vertexAttrib3fv(D.location,b);break;case 4:n.vertexAttrib4fv(D.location,b);break;default:n.vertexAttrib1fv(D.location,b)}}}}A()}function v(){S();for(let C in i){let z=i[C];for(let U in z){let V=z[U];for(let Y in V){let ct=V[Y];for(let T in ct)u(ct[T].object),delete ct[T];delete V[Y]}}delete i[C]}}function y(C){if(i[C.id]===void 0)return;let z=i[C.id];for(let U in z){let V=z[U];for(let Y in V){let ct=V[Y];for(let T in ct)u(ct[T].object),delete ct[T];delete V[Y]}}delete i[C.id]}function w(C){for(let z in i){let U=i[z];for(let V in U){let Y=U[V];if(Y[C.id]===void 0)continue;let ct=Y[C.id];for(let T in ct)u(ct[T].object),delete ct[T];delete Y[C.id]}}}function M(C){for(let z in i){let U=i[z],V=C.isInstancedMesh===!0?C.id:0,Y=U[V];if(Y!==void 0){for(let ct in Y){let T=Y[ct];for(let L in T)u(T[L].object),delete T[L];delete Y[ct]}delete U[V],Object.keys(U).length===0&&delete i[z]}}}function S(){P(),a=!0,r!==s&&(r=s,o(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:S,resetDefaultState:P,dispose:v,releaseStatesOfGeometry:y,releaseStatesOfObject:M,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:_,disableUnusedAttributes:A}}function H_(n,t,e){let i;function s(c){i=c}function r(c,o){n.drawArrays(i,c,o),e.update(o,i,1)}function a(c,o,u){u!==0&&(n.drawArraysInstanced(i,c,o,u),e.update(o,i,u))}function l(c,o,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,o,0,u);let h=0;for(let d=0;d<u;d++)h+=o[d];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function V_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==hs&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){let M=w===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Vi&&w!==ls&&!M&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp",u=c(o);u!==o&&(Ee("WebGLRenderer:",o,"not supported, using",u,"instead."),o=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),m=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:m,maxSamples:v,samples:y}}function G_(n){let t=this,e=null,i=0,s=!1,r=!1,a=new As,l=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let p=f.clippingPlanes,x=f.clipIntersection,_=f.clipShadows,g=n.get(f);if(!s||p===null||p.length===0||r&&!_)r?u(null):o();else{let A=r?0:i,E=A*4,m=g.clippingState||null;c.value=m,m=u(p,h,E,d);for(let v=0;v!==E;++v)m[v]=e[v];g.clippingState=m,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function o(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,p){let x=f!==null?f.length:0,_=null;if(x!==0){if(_=c.value,p!==!0||_===null){let g=d+x*4,A=h.matrixWorldInverse;l.getNormalMatrix(A),(_===null||_.length<g)&&(_=new Float32Array(g));for(let E=0,m=d;E!==x;++E,m+=4)a.copy(f[E]).applyMatrix4(A,l),a.normal.toArray(_,m),_[m+3]=a.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,_}}var Eo=4,W_=6,q_=20,X_=256,Bc=new kr,mm=new Qt,df=null,pf=0,mf=0,gf=!1,$_=new q,Ma=new q,du=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:l=$_}=r;df=this._renderer.getRenderTarget(),pf=this._renderer.getActiveCubeFace(),mf=this._renderer.getActiveMipmapLevel(),gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(df,pf,mf),this._renderer.xr.enabled=gf,t.scissorTest=!1,wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Br||t.mapping===xa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),df=this._renderer.getRenderTarget(),pf=this._renderer.getActiveCubeFace(),mf=this._renderer.getActiveMipmapLevel(),gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:$n,format:hs,colorSpace:lc,depthBuffer:!1},s=gm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gm(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Y_(r)),this._blurMaterial=Z_(r,t,e),this._ggxMaterial=K_(r,t,e)}return s}_compileMaterial(t){let e=new Re(new hn,t);this._renderer.compile(e,Bc)}_sceneToCubeUV(t,e,i,s,r){let c=new ai(90,1,e,i),o=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(mm),f.toneMapping=Is,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new Ln,new an({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,_=x.material,g=!1,A=t.background;A?A.isColor&&(_.color.copy(A),t.background=null,g=!0):(_.color.copy(mm),g=!0);for(let E=0;E<6;E++){let m=E%3;m===0?(c.up.set(0,o[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):m===1?(c.up.set(0,0,o[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,o[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));let v=this._cubeSize;wo(s,m*v,E>2?v:0,v,v),f.setRenderTarget(s),g&&f.render(x,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=A}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Br||t.mapping===xa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let c=this._cubeSize;wo(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Bc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms,o=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(o*o-u*u),h=o*1.25,d=f*h,{_lodMax:p}=this,x=this._sizeLods[i],_=3*x*(i>p-Eo?i-p+Eo:0),g=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=p-e,wo(r,_,g,3*x,2*x),s.setRenderTarget(r),s.render(l,Bc),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,wo(t,_,g,3*x,2*x),s.setRenderTarget(t),s.render(l,Bc)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let o=l.uniforms;o.envMap.value=t.texture,o.sigma.value=r,o.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Eo?s-this._lodMax+Eo:0),h=4*(this._cubeSize-u);wo(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(c,Bc)}};function Y_(n){let t=[],e=[],i=n,s=n-Eo+1+W_;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let l=1/(a-2),c=-l,o=1+l,u=[c,c,o,c,o,o,c,c,o,o,c,o],f=6,h=6,d=3,p=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let g=0;g<f;g++){let A=g%3*2/3-1,E=g>2?0:-1,m=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];p.set(m,d*h*g);for(let v=0;v<h;v++){let y=u[v*2]*2-1,w=u[v*2+1]*2-1;g===0?Ma.set(1,w,y):g===1?Ma.set(-y,1,-w):g===2?Ma.set(-y,w,1):g===3?Ma.set(-1,w,-y):g===4?Ma.set(-y,-1,w):Ma.set(y,w,-1),Ma.toArray(x,(g*h+v)*d)}}let _=new hn;_.setAttribute("position",new fn(p,d)),_.setAttribute("outputDirection",new fn(x,d)),e.push(new Re(_,null)),i>Eo&&i--}return{lodMeshes:e,sizeLods:t}}function gm(n,t,e){let i=new In(n,t,e);return i.texture.mapping=Lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function K_(n,t,e){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:X_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function Z_(n,t,e){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:q_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function xm(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function vm(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function gu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pu=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new bc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ln(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:ya(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:Bs});r.uniforms.tEquirect.value=e;let a=new Re(s,r),l=e.minFilter;return e.minFilter===Hs&&(e.minFilter=oi),new _h(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function j_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===bh||d===Sh)if(t.has(h)){let p=t.get(h).texture;return l(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let x=new pu(p.height);return x.fromEquirectangularTexture(n,h),t.set(h,x),h.addEventListener("dispose",o),l(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,p=d===bh||d===Sh,x=d===Br||d===xa;if(p||x){let _=e.get(h),g=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new du(n)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{let A=h.image;return p&&A&&A.height>0||x&&A&&c(A)?(i===null&&(i=new du(n)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h,d){return d===bh?h.mapping=Br:d===Sh&&(h.mapping=xa),h}function c(h){let d=0,p=6;for(let x=0;x<p;x++)h[x]!==void 0&&d++;return d===p}function o(h){let d=h.target;d.removeEventListener("dispose",o);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function J_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&da("WebGLRenderer: "+i+" extension not supported."),s}}}function Q_(n,t,e,i){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function l(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],n.ARRAY_BUFFER)}function o(f){let h=[],d=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(d!==null){let A=d.array;x=d.version;for(let E=0,m=A.length;E<m;E+=3){let v=A[E+0],y=A[E+1],w=A[E+2];h.push(v,y,y,w,w,v)}}else{let A=p.array;x=p.version;for(let E=0,m=A.length/3-1;E<m;E+=3){let v=E+0,y=E+1,w=E+2;h.push(v,y,y,w,w,v)}}let _=new(p.count>=65535?vc:xc)(h,1);_.version=x;let g=r.get(f);g&&t.remove(g),r.set(f,_)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&o(f)}else o(f);return r.get(f)}return{get:l,update:c,getWireframeAttribute:u}}function tM(n,t,e){let i;function s(f){i=f}let r,a;function l(f){r=f.type,a=f.bytesPerElement}function c(f,h){n.drawElements(i,h,r,f*a),e.update(h,i,1)}function o(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*a,d),e.update(h,i,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let x=0;for(let _=0;_<d;_++)x+=h[_];e.update(x,i,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=o,this.renderMultiDraw=u}function eM(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=l*(r/3);break;case n.LINES:e.lines+=l*(r/2);break;case n.LINE_STRIP:e.lines+=l*(r-1);break;case n.LINE_LOOP:e.lines+=l*r;break;case n.POINTS:e.points+=l*r;break;default:Ae("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function nM(n,t,e){let i=new WeakMap,s=new _n;function r(a,l,c){let o=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(l);if(h===void 0||h.count!==f){let S=function(){w.dispose(),i.delete(l),l.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let d=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],g=l.morphAttributes.normal||[],A=l.morphAttributes.color||[],E=0;d===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let m=l.attributes.position.count*E,v=1;m>t.maxTextureSize&&(v=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let y=new Float32Array(m*v*4*f),w=new dc(y,m,v,f);w.type=ls,w.needsUpdate=!0;let M=E*4;for(let P=0;P<f;P++){let C=_[P],z=g[P],U=A[P],V=m*v*4*P;for(let Y=0;Y<C.count;Y++){let ct=Y*M;d===!0&&(s.fromBufferAttribute(C,Y),y[V+ct+0]=s.x,y[V+ct+1]=s.y,y[V+ct+2]=s.z,y[V+ct+3]=0),p===!0&&(s.fromBufferAttribute(z,Y),y[V+ct+4]=s.x,y[V+ct+5]=s.y,y[V+ct+6]=s.z,y[V+ct+7]=0),x===!0&&(s.fromBufferAttribute(U,Y),y[V+ct+8]=s.x,y[V+ct+9]=s.y,y[V+ct+10]=s.z,y[V+ct+11]=U.itemSize===4?s.w:1)}}h={count:f,texture:w,size:new xe(m,v)},i.set(l,h),l.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<o.length;x++)d+=o[x];let p=l.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",o)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function iM(n,t,e,i,s){let r=new WeakMap;function a(o){let u=s.render.frame,f=o.geometry,h=t.get(o,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),r.get(o)!==u&&(e.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,n.ARRAY_BUFFER),r.set(o,u))),o.isSkinnedMesh){let d=o.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function l(){r=new WeakMap}function c(o){let u=o.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:l}}var sM={[X0]:"LINEAR_TONE_MAPPING",[$0]:"REINHARD_TONE_MAPPING",[Y0]:"CINEON_TONE_MAPPING",[Pc]:"ACES_FILMIC_TONE_MAPPING",[Z0]:"AGX_TONE_MAPPING",[j0]:"NEUTRAL_TONE_MAPPING",[K0]:"CUSTOM_TONE_MAPPING"};function rM(n,t,e,i,s,r){let a=new In(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,o=new hn;o.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ze([0,2,0,0,2,0],2));let u=new ch({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Re(o,u),h=new kr(-1,1,1,-1,0,1),d=null,p=null,x=!1,_,g=null,A=[],E=!1;this.setSize=function(m,v){a.setSize(m,v),l!==null&&l.setSize(m,v),c!==null&&c.setSize(m,v);for(let y=0;y<A.length;y++){let w=A[y];w.setSize&&w.setSize(m,v)}},this.setEffects=function(m){A=m,E=A.length>0&&A[0].isRenderPass===!0;let v=a.width,y=a.height;A.length>0&&l===null&&(l=new In(v,y,{type:$n,depthBuffer:!1,stencilBuffer:!1}),c=new In(v,y,{type:$n,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<A.length;w++){let M=A[w];M.setSize&&M.setSize(v,y)}},this.begin=function(m,v){if(x||m.toneMapping===Is&&A.length===0)return!1;if(g=v,v!==null){let y=v.width,w=v.height;(a.width!==y||a.height!==w)&&this.setSize(y,w)}return E===!1&&m.setRenderTarget(a),_=m.toneMapping,m.toneMapping=Is,!0},this.hasRenderPass=function(){return E},this.end=function(m,v){m.toneMapping=_,x=!0;let y=a,w=l;for(let M=0;M<A.length;M++){let S=A[M];S.enabled!==!1&&(S.render(m,w,y,v),S.needsSwap!==!1&&(y=w,w=w===l?c:l))}if(d!==m.outputColorSpace||p!==m.toneMapping){d=m.outputColorSpace,p=m.toneMapping,u.defines={},Ye.getTransfer(d)===nn&&(u.defines.SRGB_TRANSFER="");let M=sM[p];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,m.setRenderTarget(g),m.render(f,h),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),o.dispose(),u.dispose()}}var Om=new Ri,yf=new zs(1,1),zm=new dc,Bm=new rh,Hm=new bc,ym=[],_m=[],Mm=new Float32Array(16),bm=new Float32Array(9),Sm=new Float32Array(4);function Ao(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ym[s];if(r===void 0&&(r=new Float32Array(s),ym[s]=r),t!==0){i.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,n[a].toArray(r,l)}return r}function Yn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Kn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function xu(n,t){let e=_m[t];e===void 0&&(e=new Int32Array(t),_m[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function aM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function oM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Yn(e,t))return;n.uniform2fv(this.addr,t),Kn(e,t)}}function cM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Yn(e,t))return;n.uniform3fv(this.addr,t),Kn(e,t)}}function lM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Yn(e,t))return;n.uniform4fv(this.addr,t),Kn(e,t)}}function hM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Yn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Kn(e,t)}else{if(Yn(e,i))return;Sm.set(i),n.uniformMatrix2fv(this.addr,!1,Sm),Kn(e,i)}}function uM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Yn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Kn(e,t)}else{if(Yn(e,i))return;bm.set(i),n.uniformMatrix3fv(this.addr,!1,bm),Kn(e,i)}}function fM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Yn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Kn(e,t)}else{if(Yn(e,i))return;Mm.set(i),n.uniformMatrix4fv(this.addr,!1,Mm),Kn(e,i)}}function dM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function pM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Yn(e,t))return;n.uniform2iv(this.addr,t),Kn(e,t)}}function mM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Yn(e,t))return;n.uniform3iv(this.addr,t),Kn(e,t)}}function gM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Yn(e,t))return;n.uniform4iv(this.addr,t),Kn(e,t)}}function xM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function vM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Yn(e,t))return;n.uniform2uiv(this.addr,t),Kn(e,t)}}function yM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Yn(e,t))return;n.uniform3uiv(this.addr,t),Kn(e,t)}}function _M(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Yn(e,t))return;n.uniform4uiv(this.addr,t),Kn(e,t)}}function MM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(yf.compareFunction=e.isReversedDepthBuffer()?hu:lu,r=yf):r=Om,e.setTexture2D(t||r,s)}function bM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Bm,s)}function SM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Hm,s)}function wM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||zm,s)}function EM(n){switch(n){case 5126:return aM;case 35664:return oM;case 35665:return cM;case 35666:return lM;case 35674:return hM;case 35675:return uM;case 35676:return fM;case 5124:case 35670:return dM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return xM;case 36294:return vM;case 36295:return yM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return wM}}function TM(n,t){n.uniform1fv(this.addr,t)}function AM(n,t){let e=Ao(t,this.size,2);n.uniform2fv(this.addr,e)}function RM(n,t){let e=Ao(t,this.size,3);n.uniform3fv(this.addr,e)}function CM(n,t){let e=Ao(t,this.size,4);n.uniform4fv(this.addr,e)}function IM(n,t){let e=Ao(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function PM(n,t){let e=Ao(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function LM(n,t){let e=Ao(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function DM(n,t){n.uniform1iv(this.addr,t)}function FM(n,t){n.uniform2iv(this.addr,t)}function NM(n,t){n.uniform3iv(this.addr,t)}function UM(n,t){n.uniform4iv(this.addr,t)}function kM(n,t){n.uniform1uiv(this.addr,t)}function OM(n,t){n.uniform2uiv(this.addr,t)}function zM(n,t){n.uniform3uiv(this.addr,t)}function BM(n,t){n.uniform4uiv(this.addr,t)}function HM(n,t,e){let i=this.cache,s=t.length,r=xu(e,s);Yn(i,r)||(n.uniform1iv(this.addr,r),Kn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=yf:a=Om;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function VM(n,t,e){let i=this.cache,s=t.length,r=xu(e,s);Yn(i,r)||(n.uniform1iv(this.addr,r),Kn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Bm,r[a])}function GM(n,t,e){let i=this.cache,s=t.length,r=xu(e,s);Yn(i,r)||(n.uniform1iv(this.addr,r),Kn(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Hm,r[a])}function WM(n,t,e){let i=this.cache,s=t.length,r=xu(e,s);Yn(i,r)||(n.uniform1iv(this.addr,r),Kn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||zm,r[a])}function qM(n){switch(n){case 5126:return TM;case 35664:return AM;case 35665:return RM;case 35666:return CM;case 35674:return IM;case 35675:return PM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return FM;case 35668:case 35672:return NM;case 35669:case 35673:return UM;case 5125:return kM;case 36294:return OM;case 36295:return zM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return WM}}var _f=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=EM(e.type)}},Mf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qM(e.type)}},bf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],i)}}},xf=/(\w+)(\])?(\[|\.)?/g;function wm(n,t){n.seq.push(t),n.map[t.id]=t}function XM(n,t,e){let i=n.name,s=i.length;for(xf.lastIndex=0;;){let r=xf.exec(i),a=xf.lastIndex,l=r[1],c=r[2]==="]",o=r[3];if(c&&(l=l|0),o===void 0||o==="["&&a+2===s){wm(e,o===void 0?new _f(l,n,t):new Mf(l,n,t));break}else{let f=e.map[l];f===void 0&&(f=new bf(l),wm(e,f)),e=f}}}var To=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);XM(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Em(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var $M=37297,YM=0;function KM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;i.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return i.join(`
`)}var Tm=new Ie;function ZM(n){Ye._getMatrix(Tm,Ye.workingColorSpace,n);let t=`mat3( ${Tm.elements.map(e=>e.toFixed(4))} )`;switch(Ye.getTransfer(n)){case hc:return[t,"LinearTransferOETF"];case nn:return[t,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Am(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+KM(n.getShaderSource(t),l)}else return r}function jM(n,t){let e=ZM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var JM={[X0]:"Linear",[$0]:"Reinhard",[Y0]:"Cineon",[Pc]:"ACESFilmic",[Z0]:"AgX",[j0]:"Neutral",[K0]:"Custom"};function QM(n,t){let e=JM[t];return e===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fu=new q;function tb(){Ye.getLuminanceCoefficients(fu);let n=fu.x.toFixed(4),t=fu.y.toFixed(4),e=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vc).join(`
`)}function nb(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ib(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:l}}return e}function Vc(n){return n!==""}function Rm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(n){return n.replace(sb,ab)}var rb=new Map;function ab(n,t){let e=Fe[t];if(e===void 0){let i=rb.get(t);if(i!==void 0)e=Fe[i],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Sf(e)}var ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(n){return n.replace(ob,cb)}function cb(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pm(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var lb={[ma]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function hb(n){return lb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ub={[Br]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE",[Lc]:"ENVMAP_TYPE_CUBE_UV"};function fb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ub[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var db={[xa]:"ENVMAP_MODE_REFRACTION"};function pb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":db[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mb={[q0]:"ENVMAP_BLENDING_MULTIPLY",[Kp]:"ENVMAP_BLENDING_MIX",[Zp]:"ENVMAP_BLENDING_ADD"};function gb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mb[n.combine]||"ENVMAP_BLENDING_NONE"}function xb(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function vb(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,c=hb(e),o=fb(e),u=pb(e),f=gb(e),h=xb(e),d=eb(e),p=nb(r),x=s.createProgram(),_,g,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Vc).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Vc).join(`
`),g.length>0&&(g+=`
`)):(_=[Pm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vc).join(`
`),g=[Pm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+o:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Is?"#define TONE_MAPPING":"",e.toneMapping!==Is?Fe.tonemapping_pars_fragment:"",e.toneMapping!==Is?QM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,jM("linearToOutputTexel",e.outputColorSpace),tb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vc).join(`
`)),a=Sf(a),a=Rm(a,e),a=Cm(a,e),l=Sf(l),l=Rm(l,e),l=Cm(l,e),a=Im(a),l=Im(l),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",e.glslVersion===of?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=A+_+a,m=A+g+l,v=Em(s,s.VERTEX_SHADER,E),y=Em(s,s.FRAGMENT_SHADER,m);s.attachShader(x,v),s.attachShader(x,y),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(C){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(v)||"",V=s.getShaderInfoLog(y)||"",Y=z.trim(),ct=U.trim(),T=V.trim(),L=!0,D=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,v,y);else{let B=Am(s,v,"vertex"),b=Am(s,y,"fragment");Ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+B+`
`+b)}else Y!==""?Ee("WebGLProgram: Program Info Log:",Y):(ct===""||T==="")&&(D=!1);D&&(C.diagnostics={runnable:L,programLog:Y,vertexShader:{log:ct,prefix:_},fragmentShader:{log:T,prefix:g}})}s.deleteShader(v),s.deleteShader(y),M=new To(s,x),S=ib(s,x)}let M;this.getUniforms=function(){return M===void 0&&w(this),M};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,$M)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=YM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=y,this}var yb=0,wf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ef(t),e.set(t,i)),i}},Ef=class{constructor(t){this.id=yb++,this.code=t,this.usedTimes=0}};function _b(n){return n===Vr||n===Oc||n===zc}function Mb(n,t,e,i,s,r){let a=new pc,l=new wf,c=new Set,o=[],u=new Map,f=i.logarithmicDepthBuffer,h=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function x(M,S,P,C,z,U){let V=C.fog,Y=z.geometry,ct=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?C.environment:null,T=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,L=t.get(M.envMap||ct,T),D=L&&L.mapping===Lc?L.image.height:null,B=d[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&Ee("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));let b=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,j=b!==void 0?b.length:0,it=0;Y.morphAttributes.position!==void 0&&(it=1),Y.morphAttributes.normal!==void 0&&(it=2),Y.morphAttributes.color!==void 0&&(it=3);let J,vt,Nt,Z;if(B){let st=Gs[B];J=st.vertexShader,vt=st.fragmentShader}else{J=M.vertexShader,vt=M.fragmentShader;let st=l.getVertexShaderStage(M),K=l.getFragmentShaderStage(M);l.update(M,st,K),Nt=st.id,Z=K.id}let at=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),zt=z.isInstancedMesh===!0,gt=z.isBatchedMesh===!0,Ut=!!M.map,ie=!!M.matcap,rt=!!L,Rt=!!M.aoMap,Ct=!!M.lightMap,Ot=!!M.bumpMap&&M.wireframe===!1,Ht=!!M.normalMap,yt=!!M.displacementMap,ne=!!M.emissiveMap,ft=!!M.metalnessMap,Se=!!M.roughnessMap,et=M.anisotropy>0,be=M.clearcoat>0,ye=M.dispersion>0,H=M.retroreflectivity>0,R=M.iridescence>0,dt=M.sheen>0,ot=M.transmission>0,W=et&&!!M.anisotropyMap,bt=be&&!!M.clearcoatMap,At=be&&!!M.clearcoatNormalMap,ut=be&&!!M.clearcoatRoughnessMap,mt=R&&!!M.iridescenceMap,F=R&&!!M.iridescenceThicknessMap,X=dt&&!!M.sheenColorMap,G=dt&&!!M.sheenRoughnessMap,lt=!!M.specularMap,Bt=!!M.specularColorMap,Gt=!!M.specularIntensityMap,N=ot&&!!M.transmissionMap,k=ot&&!!M.thicknessMap,nt=!!M.gradientMap,Q=!!M.alphaMap,Ft=M.alphaTest>0,It=!!M.alphaHash,Mt=!!M.extensions,I=Is;M.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(I=n.toneMapping);let tt={shaderID:B,shaderType:M.type,shaderName:M.name,vertexShader:J,fragmentShader:vt,defines:M.defines,customVertexShaderID:Nt,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:gt,batchingColor:gt&&z._colorsTexture!==null,instancing:zt,instancingColor:zt&&z.instanceColor!==null,instancingMorph:zt&&z.morphTexture!==null,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ut,matcap:ie,envMap:rt,envMapMode:rt&&L.mapping,envMapCubeUVHeight:D,aoMap:Rt,lightMap:Ct,bumpMap:Ot,normalMap:Ht,displacementMap:yt,emissiveMap:ne,normalMapObjectSpace:Ht&&M.normalMapType===Qp,normalMapTangentSpace:Ht&&M.normalMapType===cu,packedNormalMap:Ht&&M.normalMapType===cu&&_b(M.normalMap.format),metalnessMap:ft,roughnessMap:Se,anisotropy:et,anisotropyMap:W,clearcoat:be,clearcoatMap:bt,clearcoatNormalMap:At,clearcoatRoughnessMap:ut,dispersion:ye,retroreflection:H,iridescence:R,iridescenceMap:mt,iridescenceThicknessMap:F,sheen:dt,sheenColorMap:X,sheenRoughnessMap:G,specularMap:lt,specularColorMap:Bt,specularIntensityMap:Gt,transmission:ot,transmissionMap:N,thicknessMap:k,gradientMap:nt,opaque:M.transparent===!1&&M.blending===zr&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:Ft,alphaHash:It,combine:M.combine,mapUv:Ut&&p(M.map.channel),aoMapUv:Rt&&p(M.aoMap.channel),lightMapUv:Ct&&p(M.lightMap.channel),bumpMapUv:Ot&&p(M.bumpMap.channel),normalMapUv:Ht&&p(M.normalMap.channel),displacementMapUv:yt&&p(M.displacementMap.channel),emissiveMapUv:ne&&p(M.emissiveMap.channel),metalnessMapUv:ft&&p(M.metalnessMap.channel),roughnessMapUv:Se&&p(M.roughnessMap.channel),anisotropyMapUv:W&&p(M.anisotropyMap.channel),clearcoatMapUv:bt&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:At&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:F&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:X&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:G&&p(M.sheenRoughnessMap.channel),specularMapUv:lt&&p(M.specularMap.channel),specularColorMapUv:Bt&&p(M.specularColorMap.channel),specularIntensityMapUv:Gt&&p(M.specularIntensityMap.channel),transmissionMapUv:N&&p(M.transmissionMap.channel),thicknessMapUv:k&&p(M.thicknessMap.channel),alphaMapUv:Q&&p(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ht||et),vertexNormals:!!Y.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(Ut||Q),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||Y.attributes.normal===void 0&&Ht===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:it,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:I,decodeVideoTexture:Ut&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===nn,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(M.emissiveMap.colorSpace)===nn,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===En,flipSided:M.side===Xn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Mt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&M.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function _(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(g(S,M),A(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function g(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numSunLights),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numSunLightShadows),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function A(M,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function E(M){let S=d[M.type],P;if(S){let C=Gs[S];P=_a.clone(C.uniforms)}else P=M.uniforms;return P}function m(M,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new vb(n,S,M,s),o.push(P),u.set(S,P)),P}function v(M){if(--M.usedTimes===0){let S=o.indexOf(M);o[S]=o[o.length-1],o.pop(),u.delete(M.cacheKey),M.destroy()}}function y(M){l.remove(M)}function w(){l.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:E,acquireProgram:m,releaseProgram:v,releaseShaderCache:y,programs:o,dispose:w}}function bb(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,c){n.get(a)[l]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Sb(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Lm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Dm(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function l(h,d,p,x,_,g){let A=n[t];return A===void 0?(A={id:h.id,object:h,geometry:d,material:p,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:_,group:g},n[t]=A):(A.id=h.id,A.object=h,A.geometry=d,A.material=p,A.materialVariant=a(h),A.groupOrder=x,A.renderOrder=h.renderOrder,A.z=_,A.group=g),t++,A}function c(h,d,p,x,_,g,A){A.reversedDepth===!0&&(_=-_);let E=l(h,d,p,x,_,g);p.transmission>0?i.push(E):p.transparent===!0?s.push(E):e.push(E)}function o(h,d,p,x,_,g){let A=l(h,d,p,x,_,g);p.transmission>0?i.unshift(A):p.transparent===!0?s.unshift(A):e.unshift(A)}function u(h,d){e.length>1&&e.sort(h||Sb),i.length>1&&i.sort(d||Lm),s.length>1&&s.sort(d||Lm)}function f(){for(let h=t,d=n.length;h<d;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:o,finish:f,sort:u}}function wb(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Dm,n.set(i,[a])):s>=r.length?(a=new Dm,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Eb(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new Qt};break;case"SpotLight":e={position:new q,direction:new q,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function Tb(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Ab=0;function Rb(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Cb(n){let t=new Eb,e=Tb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new q);let s=new q,r=new pe,a=new pe;function l(o){let u=0,f=0,h=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let d=0,p=0,x=0,_=0,g=0,A=0,E=0,m=0,v=0,y=0,w=0,M=0,S=0,P=0;o.sort(Rb);for(let z=0,U=o.length;z<U;z++){let V=o[z],Y=V.color,ct=V.intensity,T=V.distance,L=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Vr?L=V.shadow.map.texture:L=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)u+=Y.r*ct,f+=Y.g*ct,h+=Y.b*ct;else if(V.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(V.sh.coefficients[D],ct);P++}else if(V.isSunLight){let D=t.get(V);if(D.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let B=V.shadow,b=e.get(V);b.shadowIntensity=B.intensity,b.shadowBias=B.bias,b.shadowNormalBias=B.normalBias,b.shadowRadius=B.radius,b.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),i.sunShadow[p]=b,i.sunShadowMap[p]=L;let j=B.getViewportCount();for(let it=0;it<j;it++)i.sunShadowMatrix[x+it]=B.getMatrix(it),i.sunShadowCascade[x+it]=B._cascadeData[it];x+=j,p++}i.sun[d]=D,d++}else if(V.isDirectionalLight){let D=t.get(V);if(D.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let B=V.shadow,b=e.get(V);b.shadowIntensity=B.intensity,b.shadowBias=B.bias,b.shadowNormalBias=B.normalBias,b.shadowRadius=B.radius,b.shadowMapSize=B.mapSize,i.directionalShadow[_]=b,i.directionalShadowMap[_]=L,i.directionalShadowMatrix[_]=V.shadow.matrix,v++}i.directional[_]=D,_++}else if(V.isSpotLight){let D=t.get(V);D.position.setFromMatrixPosition(V.matrixWorld),D.color.copy(Y).multiplyScalar(ct),D.distance=T,D.coneCos=Math.cos(V.angle),D.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),D.decay=V.decay,i.spot[A]=D;let B=V.shadow;if(V.map&&(i.spotLightMap[M]=V.map,M++,B.updateMatrices(V),V.castShadow&&S++),i.spotLightMatrix[A]=B.matrix,V.castShadow){let b=e.get(V);b.shadowIntensity=B.intensity,b.shadowBias=B.bias,b.shadowNormalBias=B.normalBias,b.shadowRadius=B.radius,b.shadowMapSize=B.mapSize,i.spotShadow[A]=b,i.spotShadowMap[A]=L,w++}A++}else if(V.isRectAreaLight){let D=t.get(V);D.color.copy(Y).multiplyScalar(ct),D.halfWidth.set(V.width*.5,0,0),D.halfHeight.set(0,V.height*.5,0),i.rectArea[E]=D,E++}else if(V.isPointLight){let D=t.get(V);if(D.color.copy(V.color).multiplyScalar(V.intensity),D.distance=V.distance,D.decay=V.decay,V.castShadow){let B=V.shadow,b=e.get(V);b.shadowIntensity=B.intensity,b.shadowBias=B.bias,b.shadowNormalBias=B.normalBias,b.shadowRadius=B.radius,b.shadowMapSize=B.mapSize,b.shadowCameraNear=B.camera.near,b.shadowCameraFar=B.camera.far,i.pointShadow[g]=b,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=V.shadow.matrix,y++}i.point[g]=D,g++}else if(V.isHemisphereLight){let D=t.get(V);D.skyColor.copy(V.color).multiplyScalar(ct),D.groundColor.copy(V.groundColor).multiplyScalar(ct),i.hemi[m]=D,m++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let C=i.hash;(C.sunLength!==d||C.directionalLength!==_||C.pointLength!==g||C.spotLength!==A||C.rectAreaLength!==E||C.hemiLength!==m||C.numSunShadows!==p||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==w||C.numSpotMaps!==M||C.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=_,i.spot.length=A,i.rectArea.length=E,i.point.length=g,i.hemi.length=m,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.pointShadowMatrix.length=y,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+M-S,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=P,C.sunLength=d,C.directionalLength=_,C.pointLength=g,C.spotLength=A,C.rectAreaLength=E,C.hemiLength=m,C.numSunShadows=p,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=w,C.numSpotMaps=M,C.numLightProbes=P,i.version=Ab++)}function c(o,u){let f=0,h=0,d=0,p=0,x=0,_=0,g=u.matrixWorldInverse;for(let A=0,E=o.length;A<E;A++){let m=o[A];if(m.isSunLight){let v=i.sun[f];v.direction.setFromMatrixPosition(m.matrixWorld),v.direction.transformDirection(g),f++}else if(m.isDirectionalLight){let v=i.directional[h];v.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(m.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(m.isRectAreaLight){let v=i.rectArea[x];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(m.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(m.width*.5,0,0),v.halfHeight.set(0,m.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(m.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(g),d++}else if(m.isHemisphereLight){let v=i.hemi[_];v.direction.setFromMatrixPosition(m.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:l,setupView:c,state:i}}function Fm(n){let t=new Cb(n),e=[],i=[],s=[];function r(h){f.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function l(h){i.push(h)}function c(h){s.push(h)}function o(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:o,setupLightsView:u,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function Ib(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new Fm(n),t.set(s,[l])):r>=a.length?(l=new Fm(n),a.push(l)):l=a[r],l}function i(){t=new WeakMap}return{get:e,dispose:i}}var Pb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Db=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Fb=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Nm=new pe,Hc=new q,vf=new q;function Nb(n,t,e){let i=new go,s=new xe,r=new xe,a=new _n,l=new xo,c=new lh,o={},u=e.maxTextureSize,f={[Or]:Xn,[Xn]:Or,[En]:En},h=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Pb,fragmentShader:Lb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new hn;p.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Re(p,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ma;let g=this.type;this.render=function(y,w,M){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||y.length===0)return;this.type===Lp&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ma);let S=n.getRenderTarget(),P=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Bs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let U=g!==this.type;U&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(Y=>Y.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,Y=y.length;V<Y;V++){let ct=y[V],T=ct.shadow;if(T===void 0){Ee("WebGLShadowMap:",ct,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;s.copy(T.mapSize);let L=T.getFrameExtents();s.multiply(L),r.copy(T.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/L.x),s.x=r.x*L.x,T.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/L.y),s.y=r.y*L.y,T.mapSize.y=r.y));let D=n.state.buffers.depth.getReversed();if(T.camera._reversedDepth=D,T.map===null||U===!0){if(T.map!==null&&(T.map.depthTexture!==null&&(T.map.depthTexture.dispose(),T.map.depthTexture=null),T.map.dispose()),this.type===_o){if(ct.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}T.map=new In(s.x,s.y,{format:Vr,type:$n,minFilter:oi,magFilter:oi,generateMipmaps:!1}),T.map.texture.name=ct.name+".shadowMap",T.map.depthTexture=new zs(s.x,s.y,ls),T.map.depthTexture.name=ct.name+".shadowMapDepth",T.map.depthTexture.format=Us,T.map.depthTexture.compareFunction=null,T.map.depthTexture.minFilter=sn,T.map.depthTexture.magFilter=sn}else ct.isPointLight?(T.map=new pu(s.x),T.map.depthTexture=new oh(s.x,Ps)):(T.map=new In(s.x,s.y),T.map.depthTexture=new zs(s.x,s.y,Ps)),T.map.depthTexture.name=ct.name+".shadowMap",T.map.depthTexture.format=Us,this.type===ma?(T.map.depthTexture.compareFunction=D?hu:lu,T.map.depthTexture.minFilter=oi,T.map.depthTexture.magFilter=oi):(T.map.depthTexture.compareFunction=null,T.map.depthTexture.minFilter=sn,T.map.depthTexture.magFilter=sn);T.camera.updateProjectionMatrix()}T.map.isWebGLCubeRenderTarget!==!0&&(T.map.width!==s.x||T.map.height!==s.y)&&T.map.setSize(s.x,s.y);let B=T.map.isWebGLCubeRenderTarget?6:T.getViewportCount();ct.isPointLight!==!0&&T.updateMatrices(ct,M);for(let b=0;b<B;b++){let j=T.getCamera(b);if(ct.isPointLight){let it=T.camera,J=T.matrix,vt=ct.distance||it.far;vt!==it.far&&(it.far=vt,it.updateProjectionMatrix()),Hc.setFromMatrixPosition(ct.matrixWorld),it.position.copy(Hc),vf.copy(it.position),vf.add(Db[b]),it.up.copy(Fb[b]),it.lookAt(vf),it.updateMatrixWorld(),J.makeTranslation(-Hc.x,-Hc.y,-Hc.z),Nm.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),T._frustum.setFromProjectionMatrix(Nm,it.coordinateSystem,it.reversedDepth)}if(T.map.isWebGLCubeRenderTarget)n.setRenderTarget(T.map,b),n.clear();else{b===0&&(n.setRenderTarget(T.map),n.clear());let it=T.getViewport(b);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),z.viewport(a)}i=T.getFrustum(b),m(w,M,j,ct,this.type)}T.isPointLightShadow!==!0&&this.type===_o&&A(T,M),T.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(S,P,C)};function A(y,w){let M=t.update(x);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new In(s.x,s.y,{format:Vr,type:$n}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(w,null,M,h,x,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(w,null,M,d,x,null)}function E(y,w,M,S){let P=null,C=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)P=C;else if(P=M.isPointLight===!0?c:l,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let z=P.uuid,U=w.uuid,V=o[z];V===void 0&&(V={},o[z]=V);let Y=V[U];Y===void 0&&(Y=P.clone(),V[U]=Y,w.addEventListener("dispose",v)),P=Y}if(P.visible=w.visible,P.wireframe=w.wireframe,S===_o?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:f[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=n.properties.get(P);z.light=M}return P}function m(y,w,M,S,P){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&P===_o)&&(!y.frustumCulled||y.intersectsFrustum(i))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);let U=t.update(y),V=y.material;if(Array.isArray(V)){let Y=U.groups;for(let ct=0,T=Y.length;ct<T;ct++){let L=Y[ct],D=V[L.materialIndex];if(D&&D.visible){let B=E(y,D,S,P);y.onBeforeShadow(n,y,w,M,U,B,L),n.renderBufferDirect(M,null,U,B,y,L),y.onAfterShadow(n,y,w,M,U,B,L)}}}else if(V.visible){let Y=E(y,V,S,P);y.onBeforeShadow(n,y,w,M,U,Y,null),n.renderBufferDirect(M,null,U,Y,y,null),y.onAfterShadow(n,y,w,M,U,Y,null)}}let z=y.children;for(let U=0,V=z.length;U<V;U++)m(z[U],w,M,S,P)}function v(y){y.target.removeEventListener("dispose",v);for(let M in o){let S=o[M],P=y.target.uuid;P in S&&(S[P].dispose(),delete S[P])}}}function Ub(n,t){function e(){let k=!1,nt=new _n,Q=null,Ft=new _n(0,0,0,0);return{setMask:function(It){Q!==It&&!k&&(n.colorMask(It,It,It,It),Q=It)},setLocked:function(It){k=It},setClear:function(It,Mt,I,tt,st){st===!0&&(It*=tt,Mt*=tt,I*=tt),nt.set(It,Mt,I,tt),Ft.equals(nt)===!1&&(n.clearColor(It,Mt,I,tt),Ft.copy(nt))},reset:function(){k=!1,Q=null,Ft.set(-1,0,0,0)}}}function i(){let k=!1,nt=!1,Q=null,Ft=null,It=null;return{setReversed:function(Mt){if(nt!==Mt){let I=t.get("EXT_clip_control");Mt?I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT):I.clipControlEXT(I.LOWER_LEFT_EXT,I.NEGATIVE_ONE_TO_ONE_EXT),nt=Mt;let tt=It;It=null,this.setClear(tt)}},getReversed:function(){return nt},setTest:function(Mt){Mt?at(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(Mt){Q!==Mt&&!k&&(n.depthMask(Mt),Q=Mt)},setFunc:function(Mt){if(nt&&(Mt=hm[Mt]),Ft!==Mt){switch(Mt){case Yl:n.depthFunc(n.NEVER);break;case Kl:n.depthFunc(n.ALWAYS);break;case Zl:n.depthFunc(n.LESS);break;case ao:n.depthFunc(n.LEQUAL);break;case jl:n.depthFunc(n.EQUAL);break;case Jl:n.depthFunc(n.GEQUAL);break;case Ql:n.depthFunc(n.GREATER);break;case th:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ft=Mt}},setLocked:function(Mt){k=Mt},setClear:function(Mt){It!==Mt&&(It=Mt,nt&&(Mt=1-Mt),n.clearDepth(Mt))},reset:function(){k=!1,Q=null,Ft=null,It=null,nt=!1}}}function s(){let k=!1,nt=null,Q=null,Ft=null,It=null,Mt=null,I=null,tt=null,st=null;return{setTest:function(K){k||(K?at(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(K){nt!==K&&!k&&(n.stencilMask(K),nt=K)},setFunc:function(K,xt,Vt){(Q!==K||Ft!==xt||It!==Vt)&&(n.stencilFunc(K,xt,Vt),Q=K,Ft=xt,It=Vt)},setOp:function(K,xt,Vt){(Mt!==K||I!==xt||tt!==Vt)&&(n.stencilOp(K,xt,Vt),Mt=K,I=xt,tt=Vt)},setLocked:function(K){k=K},setClear:function(K){st!==K&&(n.clearStencil(K),st=K)},reset:function(){k=!1,nt=null,Q=null,Ft=null,It=null,Mt=null,I=null,tt=null,st=null}}}let r=new e,a=new i,l=new s,c=new WeakMap,o=new WeakMap,u={},f={},h={},d=new WeakMap,p=[],x=null,_=!1,g=null,A=null,E=null,m=null,v=null,y=null,w=null,M=new Qt(0,0,0),S=0,P=!1,C=null,z=null,U=null,V=null,Y=null,ct=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),T=!1,L=0,D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(D)[1]),T=L>=1):D.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),T=L>=2);let B=null,b={},j=n.getParameter(n.SCISSOR_BOX),it=n.getParameter(n.VIEWPORT),J=new _n().fromArray(j),vt=new _n().fromArray(it);function Nt(k,nt,Q,Ft){let It=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(k,Mt),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let I=0;I<Q;I++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(nt,0,n.RGBA,1,1,Ft,0,n.RGBA,n.UNSIGNED_BYTE,It):n.texImage2D(nt+I,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,It);return Mt}let Z={};Z[n.TEXTURE_2D]=Nt(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),at(n.DEPTH_TEST),a.setFunc(ao),Ot(!1),Ht(H0),at(n.CULL_FACE),Rt(Bs);function at(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function pt(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function zt(k,nt){return h[k]!==nt?(n.bindFramebuffer(k,nt),h[k]=nt,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=nt),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=nt),!0):!1}function gt(k,nt){let Q=p,Ft=!1;if(k){Q=d.get(nt),Q===void 0&&(Q=[],d.set(nt,Q));let It=k.textures;if(Q.length!==It.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,I=It.length;Mt<I;Mt++)Q[Mt]=n.COLOR_ATTACHMENT0+Mt;Q.length=It.length,Ft=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,Ft=!0);Ft&&n.drawBuffers(Q)}function Ut(k){return x!==k?(n.useProgram(k),x=k,!0):!1}let ie={[ga]:n.FUNC_ADD,[Dp]:n.FUNC_SUBTRACT,[Fp]:n.FUNC_REVERSE_SUBTRACT};ie[Np]=n.MIN,ie[Up]=n.MAX;let rt={[kp]:n.ZERO,[Ic]:n.ONE,[Op]:n.SRC_COLOR,[W0]:n.SRC_ALPHA,[Wp]:n.SRC_ALPHA_SATURATE,[Vp]:n.DST_COLOR,[Bp]:n.DST_ALPHA,[zp]:n.ONE_MINUS_SRC_COLOR,[Mo]:n.ONE_MINUS_SRC_ALPHA,[Gp]:n.ONE_MINUS_DST_COLOR,[Hp]:n.ONE_MINUS_DST_ALPHA,[qp]:n.CONSTANT_COLOR,[Xp]:n.ONE_MINUS_CONSTANT_COLOR,[$p]:n.CONSTANT_ALPHA,[Yp]:n.ONE_MINUS_CONSTANT_ALPHA};function Rt(k,nt,Q,Ft,It,Mt,I,tt,st,K){if(k===Bs){_===!0&&(pt(n.BLEND),_=!1);return}if(_===!1&&(at(n.BLEND),_=!0),k!==Cc){if(k!==g||K!==P){if((A!==ga||v!==ga)&&(n.blendEquation(n.FUNC_ADD),A=ga,v=ga),K)switch(k){case zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ii:n.blendFunc(n.ONE,n.ONE);break;case V0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case G0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ae("WebGLState: Invalid blending: ",k);break}else switch(k){case zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case V0:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case G0:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",k);break}E=null,m=null,y=null,w=null,M.set(0,0,0),S=0,g=k,P=K}return}It=It||nt,Mt=Mt||Q,I=I||Ft,(nt!==A||It!==v)&&(n.blendEquationSeparate(ie[nt],ie[It]),A=nt,v=It),(Q!==E||Ft!==m||Mt!==y||I!==w)&&(n.blendFuncSeparate(rt[Q],rt[Ft],rt[Mt],rt[I]),E=Q,m=Ft,y=Mt,w=I),(tt.equals(M)===!1||st!==S)&&(n.blendColor(tt.r,tt.g,tt.b,st),M.copy(tt),S=st),g=k,P=!1}function Ct(k,nt){k.side===En?pt(n.CULL_FACE):at(n.CULL_FACE);let Q=k.side===Xn;nt&&(Q=!Q),Ot(Q),k.blending===zr&&k.transparent===!1?Rt(Bs):Rt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let Ft=k.stencilWrite;l.setTest(Ft),Ft&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ne(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(k){C!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),C=k)}function Ht(k){k!==Ip?(at(n.CULL_FACE),k!==z&&(k===H0?n.cullFace(n.BACK):k===Pp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),z=k}function yt(k){k!==U&&(T&&n.lineWidth(k),U=k)}function ne(k,nt,Q){k?(at(n.POLYGON_OFFSET_FILL),(V!==nt||Y!==Q)&&(V=nt,Y=Q,a.getReversed()&&(nt=-nt),n.polygonOffset(nt,Q))):pt(n.POLYGON_OFFSET_FILL)}function ft(k){k?at(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function Se(k){k===void 0&&(k=n.TEXTURE0+ct-1),B!==k&&(n.activeTexture(k),B=k)}function et(k,nt,Q){Q===void 0&&(B===null?Q=n.TEXTURE0+ct-1:Q=B);let Ft=b[Q];Ft===void 0&&(Ft={type:void 0,texture:void 0},b[Q]=Ft),(Ft.type!==k||Ft.texture!==nt)&&(B!==Q&&(n.activeTexture(Q),B=Q),n.bindTexture(k,nt||Z[k]),Ft.type=k,Ft.texture=nt)}function be(){let k=b[B];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ye(){try{n.compressedTexImage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function R(){try{n.texSubImage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function dt(){try{n.texSubImage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function ot(){try{n.compressedTexSubImage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function W(){try{n.compressedTexSubImage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function bt(){try{n.texStorage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function At(){try{n.texStorage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function ut(){try{n.texImage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function mt(){try{n.texImage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function F(k){return f[k]!==void 0?f[k]:n.getParameter(k)}function X(k,nt){f[k]!==nt&&(n.pixelStorei(k,nt),f[k]=nt)}function G(k){J.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),J.copy(k))}function lt(k){vt.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),vt.copy(k))}function Bt(k,nt){let Q=o.get(nt);Q===void 0&&(Q=new WeakMap,o.set(nt,Q));let Ft=Q.get(k);Ft===void 0&&(Ft=n.getUniformBlockIndex(nt,k.name),Q.set(k,Ft))}function Gt(k,nt){let Ft=o.get(nt).get(k);c.get(nt)!==Ft&&(n.uniformBlockBinding(nt,Ft,k.__bindingPointIndex),c.set(nt,Ft))}function N(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},B=null,b={},h={},d=new WeakMap,p=[],x=null,_=!1,g=null,A=null,E=null,m=null,v=null,y=null,w=null,M=new Qt(0,0,0),S=0,P=!1,C=null,z=null,U=null,V=null,Y=null,J.set(0,0,n.canvas.width,n.canvas.height),vt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:at,disable:pt,bindFramebuffer:zt,drawBuffers:gt,useProgram:Ut,setBlending:Rt,setMaterial:Ct,setFlipSided:Ot,setCullFace:Ht,setLineWidth:yt,setPolygonOffset:ne,setScissorTest:ft,activeTexture:Se,bindTexture:et,unbindTexture:be,compressedTexImage2D:ye,compressedTexImage3D:H,texImage2D:ut,texImage3D:mt,pixelStorei:X,getParameter:F,updateUBOMapping:Bt,uniformBlockBinding:Gt,texStorage2D:bt,texStorage3D:At,texSubImage2D:R,texSubImage3D:dt,compressedTexSubImage2D:ot,compressedTexSubImage3D:W,scissor:G,viewport:lt,reset:N}}function kb(n,t,e,i,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new xe,u=new WeakMap,f=new Set,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(H,R){return p?new OffscreenCanvas(H,R):uc("canvas")}function _(H,R,dt){let ot=1,W=ye(H);if((W.width>dt||W.height>dt)&&(ot=dt/Math.max(W.width,W.height)),ot<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){let bt=Math.floor(ot*W.width),At=Math.floor(ot*W.height);h===void 0&&(h=x(bt,At));let ut=R?x(bt,At):h;return ut.width=bt,ut.height=At,ut.getContext("2d").drawImage(H,0,0,bt,At),Ee("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+bt+"x"+At+")."),ut}else return"data"in H&&Ee("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),H;return H}function g(H){return H.generateMipmaps}function A(H){n.generateMipmap(H)}function E(H){return H.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?n.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function m(H,R,dt,ot,W,bt=!1){if(H!==null){if(n[H]!==void 0)return n[H];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let At;ot&&(At=t.get("EXT_texture_norm16"),At||Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=R;if(R===n.RED&&(dt===n.FLOAT&&(ut=n.R32F),dt===n.HALF_FLOAT&&(ut=n.R16F),dt===n.UNSIGNED_BYTE&&(ut=n.R8),dt===n.UNSIGNED_SHORT&&At&&(ut=At.R16_EXT),dt===n.SHORT&&At&&(ut=At.R16_SNORM_EXT)),R===n.RED_INTEGER&&(dt===n.UNSIGNED_BYTE&&(ut=n.R8UI),dt===n.UNSIGNED_SHORT&&(ut=n.R16UI),dt===n.UNSIGNED_INT&&(ut=n.R32UI),dt===n.BYTE&&(ut=n.R8I),dt===n.SHORT&&(ut=n.R16I),dt===n.INT&&(ut=n.R32I)),R===n.RG&&(dt===n.FLOAT&&(ut=n.RG32F),dt===n.HALF_FLOAT&&(ut=n.RG16F),dt===n.UNSIGNED_BYTE&&(ut=n.RG8),dt===n.UNSIGNED_SHORT&&At&&(ut=At.RG16_EXT),dt===n.SHORT&&At&&(ut=At.RG16_SNORM_EXT)),R===n.RG_INTEGER&&(dt===n.UNSIGNED_BYTE&&(ut=n.RG8UI),dt===n.UNSIGNED_SHORT&&(ut=n.RG16UI),dt===n.UNSIGNED_INT&&(ut=n.RG32UI),dt===n.BYTE&&(ut=n.RG8I),dt===n.SHORT&&(ut=n.RG16I),dt===n.INT&&(ut=n.RG32I)),R===n.RGB_INTEGER&&(dt===n.UNSIGNED_BYTE&&(ut=n.RGB8UI),dt===n.UNSIGNED_SHORT&&(ut=n.RGB16UI),dt===n.UNSIGNED_INT&&(ut=n.RGB32UI),dt===n.BYTE&&(ut=n.RGB8I),dt===n.SHORT&&(ut=n.RGB16I),dt===n.INT&&(ut=n.RGB32I)),R===n.RGBA_INTEGER&&(dt===n.UNSIGNED_BYTE&&(ut=n.RGBA8UI),dt===n.UNSIGNED_SHORT&&(ut=n.RGBA16UI),dt===n.UNSIGNED_INT&&(ut=n.RGBA32UI),dt===n.BYTE&&(ut=n.RGBA8I),dt===n.SHORT&&(ut=n.RGBA16I),dt===n.INT&&(ut=n.RGBA32I)),R===n.RGB&&(dt===n.UNSIGNED_SHORT&&At&&(ut=At.RGB16_EXT),dt===n.SHORT&&At&&(ut=At.RGB16_SNORM_EXT),dt===n.UNSIGNED_INT_5_9_9_9_REV&&(ut=n.RGB9_E5),dt===n.UNSIGNED_INT_10F_11F_11F_REV&&(ut=n.R11F_G11F_B10F)),R===n.RGBA){let mt=bt?hc:Ye.getTransfer(W);dt===n.FLOAT&&(ut=n.RGBA32F),dt===n.HALF_FLOAT&&(ut=n.RGBA16F),dt===n.UNSIGNED_BYTE&&(ut=mt===nn?n.SRGB8_ALPHA8:n.RGBA8),dt===n.UNSIGNED_SHORT&&At&&(ut=At.RGBA16_EXT),dt===n.SHORT&&At&&(ut=At.RGBA16_SNORM_EXT),dt===n.UNSIGNED_SHORT_4_4_4_4&&(ut=n.RGBA4),dt===n.UNSIGNED_SHORT_5_5_5_1&&(ut=n.RGB5_A1)}return(ut===n.R16F||ut===n.R32F||ut===n.RG16F||ut===n.RG32F||ut===n.RGBA16F||ut===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function v(H,R){let dt;return H?R===null||R===Ps||R===So?dt=n.DEPTH24_STENCIL8:R===ls?dt=n.DEPTH32F_STENCIL8:R===bo&&(dt=n.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Ps||R===So?dt=n.DEPTH_COMPONENT24:R===ls?dt=n.DEPTH_COMPONENT32F:R===bo&&(dt=n.DEPTH_COMPONENT16),dt}function y(H,R){return g(H)===!0||H.isFramebufferTexture&&H.minFilter!==sn&&H.minFilter!==oi?Math.log2(Math.max(R.width,R.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?R.mipmaps.length:1}function w(H){let R=H.target;R.removeEventListener("dispose",w),S(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&f.delete(R)}function M(H){let R=H.target;R.removeEventListener("dispose",M),C(R)}function S(H){let R=i.get(H);if(R.__webglInit===void 0)return;let dt=H.source,ot=d.get(dt);if(ot){let W=ot[R.__cacheKey];W.usedTimes--,W.usedTimes===0&&P(H),Object.keys(ot).length===0&&d.delete(dt)}i.remove(H)}function P(H){let R=i.get(H);n.deleteTexture(R.__webglTexture);let dt=H.source,ot=d.get(dt);delete ot[R.__cacheKey],a.memory.textures--}function C(H){let R=i.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),i.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(R.__webglFramebuffer[ot]))for(let W=0;W<R.__webglFramebuffer[ot].length;W++)n.deleteFramebuffer(R.__webglFramebuffer[ot][W]);else n.deleteFramebuffer(R.__webglFramebuffer[ot]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[ot])}else{if(Array.isArray(R.__webglFramebuffer))for(let ot=0;ot<R.__webglFramebuffer.length;ot++)n.deleteFramebuffer(R.__webglFramebuffer[ot]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ot=0;ot<R.__webglColorRenderbuffer.length;ot++)R.__webglColorRenderbuffer[ot]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[ot]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let dt=H.textures;for(let ot=0,W=dt.length;ot<W;ot++){let bt=i.get(dt[ot]);bt.__webglTexture&&(n.deleteTexture(bt.__webglTexture),a.memory.textures--),i.remove(dt[ot])}i.remove(H)}let z=0;function U(){z=0}function V(){return z}function Y(H){z=H}function ct(){let H=z;return H>=s.maxTextures&&Ee("WebGLTextures: Trying to use "+(H+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,H}function T(H){let R=[];return R.push(H.wrapS),R.push(H.wrapT),R.push(H.wrapR||0),R.push(H.magFilter),R.push(H.minFilter),R.push(H.anisotropy),R.push(H.internalFormat),R.push(H.format),R.push(H.type),R.push(H.generateMipmaps),R.push(H.premultiplyAlpha),R.push(H.flipY),R.push(H.unpackAlignment),R.push(H.colorSpace),R.join()}function L(H,R){let dt=i.get(H);if(H.isVideoTexture&&et(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&dt.__version!==H.version){let ot=H.image;if(ot===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(dt,H,R);return}}else H.isExternalTexture&&(dt.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture,n.TEXTURE0+R)}function D(H,R){let dt=i.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&dt.__version!==H.version){pt(dt,H,R);return}else H.isExternalTexture&&(dt.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,dt.__webglTexture,n.TEXTURE0+R)}function B(H,R){let dt=i.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&dt.__version!==H.version){pt(dt,H,R);return}e.bindTexture(n.TEXTURE_3D,dt.__webglTexture,n.TEXTURE0+R)}function b(H,R){let dt=i.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&dt.__version!==H.version){zt(dt,H,R);return}e.bindTexture(n.TEXTURE_CUBE_MAP,dt.__webglTexture,n.TEXTURE0+R)}let j={[oo]:n.REPEAT,[Ns]:n.CLAMP_TO_EDGE,[eh]:n.MIRRORED_REPEAT},it={[sn]:n.NEAREST,[jp]:n.NEAREST_MIPMAP_NEAREST,[Dc]:n.NEAREST_MIPMAP_LINEAR,[oi]:n.LINEAR,[wh]:n.LINEAR_MIPMAP_NEAREST,[Hs]:n.LINEAR_MIPMAP_LINEAR},J={[em]:n.NEVER,[am]:n.ALWAYS,[nm]:n.LESS,[lu]:n.LEQUAL,[im]:n.EQUAL,[hu]:n.GEQUAL,[sm]:n.GREATER,[rm]:n.NOTEQUAL};function vt(H,R){if(R.type===ls&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===oi||R.magFilter===wh||R.magFilter===Dc||R.magFilter===Hs||R.minFilter===oi||R.minFilter===wh||R.minFilter===Dc||R.minFilter===Hs)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(H,n.TEXTURE_WRAP_S,j[R.wrapS]),n.texParameteri(H,n.TEXTURE_WRAP_T,j[R.wrapT]),(H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY)&&n.texParameteri(H,n.TEXTURE_WRAP_R,j[R.wrapR]),n.texParameteri(H,n.TEXTURE_MAG_FILTER,it[R.magFilter]),n.texParameteri(H,n.TEXTURE_MIN_FILTER,it[R.minFilter]),R.compareFunction&&(n.texParameteri(H,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(H,n.TEXTURE_COMPARE_FUNC,J[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===sn||R.minFilter!==Dc&&R.minFilter!==Hs||R.type===ls&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let dt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(H,dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function Nt(H,R){let dt=!1;H.__webglInit===void 0&&(H.__webglInit=!0,R.addEventListener("dispose",w));let ot=R.source,W=d.get(ot);W===void 0&&(W={},d.set(ot,W));let bt=T(R);if(bt!==H.__cacheKey){W[bt]===void 0&&(W[bt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,dt=!0),W[bt].usedTimes++;let At=W[H.__cacheKey];At!==void 0&&(W[H.__cacheKey].usedTimes--,At.usedTimes===0&&P(R)),H.__cacheKey=bt,H.__webglTexture=W[bt].texture}return dt}function Z(H,R,dt){return Math.floor(Math.floor(H/dt)/R)}function at(H,R,dt,ot){let bt=H.updateRanges;if(bt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,R.width,R.height,dt,ot,R.data);else{bt.sort((X,G)=>X.start-G.start);let At=0;for(let X=1;X<bt.length;X++){let G=bt[At],lt=bt[X],Bt=G.start+G.count,Gt=Z(lt.start,R.width,4),N=Z(G.start,R.width,4);lt.start<=Bt+1&&Gt===N&&Z(lt.start+lt.count-1,R.width,4)===Gt?G.count=Math.max(G.count,lt.start+lt.count-G.start):(++At,bt[At]=lt)}bt.length=At+1;let ut=e.getParameter(n.UNPACK_ROW_LENGTH),mt=e.getParameter(n.UNPACK_SKIP_PIXELS),F=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,R.width);for(let X=0,G=bt.length;X<G;X++){let lt=bt[X],Bt=Math.floor(lt.start/4),Gt=Math.ceil(lt.count/4),N=Bt%R.width,k=Math.floor(Bt/R.width),nt=Gt,Q=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,N),e.pixelStorei(n.UNPACK_SKIP_ROWS,k),e.texSubImage2D(n.TEXTURE_2D,0,N,k,nt,Q,dt,ot,R.data)}H.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ut),e.pixelStorei(n.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(n.UNPACK_SKIP_ROWS,F)}}function pt(H,R,dt){let ot=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ot=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ot=n.TEXTURE_3D);let W=Nt(H,R),bt=R.source;e.bindTexture(ot,H.__webglTexture,n.TEXTURE0+dt);let At=i.get(bt);if(bt.version!==At.__version||W===!0){if(e.activeTexture(n.TEXTURE0+dt),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let Q=Ye.getPrimaries(Ye.workingColorSpace),Ft=R.colorSpace===cr?null:Ye.getPrimaries(R.colorSpace),It=R.colorSpace===cr||Q===Ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment);let mt=_(R.image,!1,s.maxTextureSize);mt=be(R,mt);let F=r.convert(R.format,R.colorSpace),X=r.convert(R.type),G=m(R.internalFormat,F,X,R.normalized,R.colorSpace,R.isVideoTexture);vt(ot,R);let lt,Bt=R.mipmaps,Gt=R.isVideoTexture!==!0,N=At.__version===void 0||W===!0,k=bt.dataReady,nt=y(R,mt);if(R.isDepthTexture)G=v(R.format===Hr,R.type),N&&(Gt?e.texStorage2D(n.TEXTURE_2D,1,G,mt.width,mt.height):e.texImage2D(n.TEXTURE_2D,0,G,mt.width,mt.height,0,F,X,null));else if(R.isDataTexture)if(Bt.length>0){Gt&&N&&e.texStorage2D(n.TEXTURE_2D,nt,G,Bt[0].width,Bt[0].height);for(let Q=0,Ft=Bt.length;Q<Ft;Q++)lt=Bt[Q],Gt?k&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,lt.width,lt.height,F,X,lt.data):e.texImage2D(n.TEXTURE_2D,Q,G,lt.width,lt.height,0,F,X,lt.data);R.generateMipmaps=!1}else Gt?(N&&e.texStorage2D(n.TEXTURE_2D,nt,G,mt.width,mt.height),k&&at(R,mt,F,X)):e.texImage2D(n.TEXTURE_2D,0,G,mt.width,mt.height,0,F,X,mt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Gt&&N&&e.texStorage3D(n.TEXTURE_2D_ARRAY,nt,G,Bt[0].width,Bt[0].height,mt.depth);for(let Q=0,Ft=Bt.length;Q<Ft;Q++)if(lt=Bt[Q],R.format!==hs)if(F!==null)if(Gt){if(k)if(R.layerUpdates.size>0){let It=ff(lt.width,lt.height,R.format,R.type);for(let Mt of R.layerUpdates){let I=lt.data.subarray(Mt*It/lt.data.BYTES_PER_ELEMENT,(Mt+1)*It/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Mt,lt.width,lt.height,1,F,I)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,mt.depth,F,lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,G,lt.width,lt.height,mt.depth,0,lt.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,mt.depth,F,X,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,G,lt.width,lt.height,mt.depth,0,F,X,lt.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{Gt&&N&&e.texStorage2D(n.TEXTURE_2D,nt,G,Bt[0].width,Bt[0].height);for(let Q=0,Ft=Bt.length;Q<Ft;Q++)lt=Bt[Q],R.format!==hs?F!==null?Gt?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,lt.width,lt.height,F,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,G,lt.width,lt.height,0,lt.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?k&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,lt.width,lt.height,F,X,lt.data):e.texImage2D(n.TEXTURE_2D,Q,G,lt.width,lt.height,0,F,X,lt.data)}else if(R.isDataArrayTexture)if(Gt){if(N&&e.texStorage3D(n.TEXTURE_2D_ARRAY,nt,G,mt.width,mt.height,mt.depth),k)if(R.layerUpdates.size>0){let Q=ff(mt.width,mt.height,R.format,R.type);for(let Ft of R.layerUpdates){let It=mt.data.subarray(Ft*Q/mt.data.BYTES_PER_ELEMENT,(Ft+1)*Q/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ft,mt.width,mt.height,1,F,X,It)}R.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,F,X,mt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,G,mt.width,mt.height,mt.depth,0,F,X,mt.data);else if(R.isData3DTexture)Gt?(N&&e.texStorage3D(n.TEXTURE_3D,nt,G,mt.width,mt.height,mt.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,F,X,mt.data)):e.texImage3D(n.TEXTURE_3D,0,G,mt.width,mt.height,mt.depth,0,F,X,mt.data);else if(R.isFramebufferTexture){if(N)if(Gt)e.texStorage2D(n.TEXTURE_2D,nt,G,mt.width,mt.height);else{let Q=mt.width,Ft=mt.height;for(let It=0;It<nt;It++)e.texImage2D(n.TEXTURE_2D,It,G,Q,Ft,0,F,X,null),Q>>=1,Ft>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in n){let Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),mt.parentNode!==Q){Q.appendChild(mt),f.add(R),Q.onpaint=Ft=>{let It=Ft.changedElements;for(let Mt of f)It.includes(Mt.image)&&(Mt.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,mt);else{let It=n.RGBA,Mt=n.RGBA,I=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,It,Mt,I,mt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Gt&&N){let Q=ye(Bt[0]);e.texStorage2D(n.TEXTURE_2D,nt,G,Q.width,Q.height)}for(let Q=0,Ft=Bt.length;Q<Ft;Q++)lt=Bt[Q],Gt?k&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,F,X,lt):e.texImage2D(n.TEXTURE_2D,Q,G,F,X,lt);R.generateMipmaps=!1}else if(Gt){if(N){let Q=ye(mt);e.texStorage2D(n.TEXTURE_2D,nt,G,Q.width,Q.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,F,X,mt)}else e.texImage2D(n.TEXTURE_2D,0,G,F,X,mt);g(R)&&A(ot),At.__version=bt.version,R.onUpdate&&R.onUpdate(R)}H.__version=R.version}function zt(H,R,dt){if(R.image.length!==6)return;let ot=Nt(H,R),W=R.source;e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+dt);let bt=i.get(W);if(W.version!==bt.__version||ot===!0){e.activeTexture(n.TEXTURE0+dt);let At=Ye.getPrimaries(Ye.workingColorSpace),ut=R.colorSpace===cr?null:Ye.getPrimaries(R.colorSpace),mt=R.colorSpace===cr||At===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let F=R.isCompressedTexture||R.image[0].isCompressedTexture,X=R.image[0]&&R.image[0].isDataTexture,G=[];for(let Mt=0;Mt<6;Mt++)!F&&!X?G[Mt]=_(R.image[Mt],!0,s.maxCubemapSize):G[Mt]=X?R.image[Mt].image:R.image[Mt],G[Mt]=be(R,G[Mt]);let lt=G[0],Bt=r.convert(R.format,R.colorSpace),Gt=r.convert(R.type),N=m(R.internalFormat,Bt,Gt,R.normalized,R.colorSpace),k=R.isVideoTexture!==!0,nt=bt.__version===void 0||ot===!0,Q=W.dataReady,Ft=y(R,lt);vt(n.TEXTURE_CUBE_MAP,R);let It;if(F){k&&nt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,N,lt.width,lt.height);for(let Mt=0;Mt<6;Mt++){It=G[Mt].mipmaps;for(let I=0;I<It.length;I++){let tt=It[I];R.format!==hs?Bt!==null?k?Q&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,I,0,0,tt.width,tt.height,Bt,tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,I,N,tt.width,tt.height,0,tt.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,I,0,0,tt.width,tt.height,Bt,Gt,tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,I,N,tt.width,tt.height,0,Bt,Gt,tt.data)}}}else{if(It=R.mipmaps,k&&nt){It.length>0&&Ft++;let Mt=ye(G[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,N,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(X){k?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,G[Mt].width,G[Mt].height,Bt,Gt,G[Mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,N,G[Mt].width,G[Mt].height,0,Bt,Gt,G[Mt].data);for(let I=0;I<It.length;I++){let st=It[I].image[Mt].image;k?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,I+1,0,0,st.width,st.height,Bt,Gt,st.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,I+1,N,st.width,st.height,0,Bt,Gt,st.data)}}else{k?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Bt,Gt,G[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,N,Bt,Gt,G[Mt]);for(let I=0;I<It.length;I++){let tt=It[I];k?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,I+1,0,0,Bt,Gt,tt.image[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,I+1,N,Bt,Gt,tt.image[Mt])}}}g(R)&&A(n.TEXTURE_CUBE_MAP),bt.__version=W.version,R.onUpdate&&R.onUpdate(R)}H.__version=R.version}function gt(H,R,dt,ot,W,bt){let At=r.convert(dt.format,dt.colorSpace),ut=r.convert(dt.type),mt=m(dt.internalFormat,At,ut,dt.normalized,dt.colorSpace),F=i.get(R),X=i.get(dt);if(X.__renderTarget=R,!F.__hasExternalTextures){let G=Math.max(1,R.width>>bt),lt=Math.max(1,R.height>>bt);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?e.texImage3D(W,bt,mt,G,lt,R.depth,0,At,ut,null):e.texImage2D(W,bt,mt,G,lt,0,At,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,H),Se(R)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,W,X.__webglTexture,0,ft(R)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ot,W,X.__webglTexture,bt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(H,R,dt){if(n.bindRenderbuffer(n.RENDERBUFFER,H),R.depthBuffer){let ot=R.depthTexture,W=ot&&ot.isDepthTexture?ot.type:null,bt=v(R.stencilBuffer,W),At=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Se(R)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft(R),bt,R.width,R.height):dt?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft(R),bt,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,bt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,H)}else{let ot=R.textures;for(let W=0;W<ot.length;W++){let bt=ot[W],At=r.convert(bt.format,bt.colorSpace),ut=r.convert(bt.type),mt=m(bt.internalFormat,At,ut,bt.normalized,bt.colorSpace);Se(R)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft(R),mt,R.width,R.height):dt?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft(R),mt,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,mt,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ie(H,R,dt){let ot=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,H),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=i.get(R.depthTexture);if(W.__renderTarget=R,(!W.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ot){if(W.__webglInit===void 0&&(W.__webglInit=!0,R.depthTexture.addEventListener("dispose",w)),W.__webglTexture===void 0){W.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),vt(n.TEXTURE_CUBE_MAP,R.depthTexture);let F=r.convert(R.depthTexture.format),X=r.convert(R.depthTexture.type),G;R.depthTexture.format===Us?G=n.DEPTH_COMPONENT24:R.depthTexture.format===Hr&&(G=n.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,G,R.width,R.height,0,F,X,null)}}else L(R.depthTexture,0);let bt=W.__webglTexture,At=ft(R),ut=ot?n.TEXTURE_CUBE_MAP_POSITIVE_X+dt:n.TEXTURE_2D,mt=R.depthTexture.format===Hr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(R.depthTexture.format===Us)Se(R)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,mt,ut,bt,0,At):n.framebufferTexture2D(n.FRAMEBUFFER,mt,ut,bt,0);else if(R.depthTexture.format===Hr)Se(R)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,mt,ut,bt,0,At):n.framebufferTexture2D(n.FRAMEBUFFER,mt,ut,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(H){let R=i.get(H),dt=H.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==H.depthTexture){let ot=H.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ot){let W=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ot.removeEventListener("dispose",W)};ot.addEventListener("dispose",W),R.__depthDisposeCallback=W}R.__boundDepthTexture=ot}if(H.depthTexture&&!R.__autoAllocateDepthBuffer)if(dt)for(let ot=0;ot<6;ot++)ie(R.__webglFramebuffer[ot],H,ot);else{let ot=H.texture.mipmaps;ot&&ot.length>0?ie(R.__webglFramebuffer[0],H,0):ie(R.__webglFramebuffer,H,0)}else if(dt){R.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[ot]),R.__webglDepthbuffer[ot]===void 0)R.__webglDepthbuffer[ot]=n.createRenderbuffer(),Ut(R.__webglDepthbuffer[ot],H,!1);else{let W=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=R.__webglDepthbuffer[ot];n.bindRenderbuffer(n.RENDERBUFFER,bt),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,bt)}}else{let ot=H.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),Ut(R.__webglDepthbuffer,H,!1);else{let W=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,bt),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,bt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(H,R,dt){let ot=i.get(H);R!==void 0&&gt(ot.__webglFramebuffer,H,H.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),dt!==void 0&&rt(H)}function Ct(H){let R=H.texture,dt=i.get(H),ot=i.get(R);H.addEventListener("dispose",M);let W=H.textures,bt=H.isWebGLCubeRenderTarget===!0,At=W.length>1;if(At||(ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture()),ot.__version=R.version,a.memory.textures++),bt){dt.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(R.mipmaps&&R.mipmaps.length>0){dt.__webglFramebuffer[ut]=[];for(let mt=0;mt<R.mipmaps.length;mt++)dt.__webglFramebuffer[ut][mt]=n.createFramebuffer()}else dt.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){dt.__webglFramebuffer=[];for(let ut=0;ut<R.mipmaps.length;ut++)dt.__webglFramebuffer[ut]=n.createFramebuffer()}else dt.__webglFramebuffer=n.createFramebuffer();if(At)for(let ut=0,mt=W.length;ut<mt;ut++){let F=i.get(W[ut]);F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture(),a.memory.textures++)}if(H.samples>0&&Se(H)===!1){dt.__webglMultisampledFramebuffer=n.createFramebuffer(),dt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer);for(let ut=0;ut<W.length;ut++){let mt=W[ut];dt.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,dt.__webglColorRenderbuffer[ut]);let F=r.convert(mt.format,mt.colorSpace),X=r.convert(mt.type),G=m(mt.internalFormat,F,X,mt.normalized,mt.colorSpace,H.isXRRenderTarget===!0),lt=ft(H);n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,G,H.width,H.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),H.depthBuffer&&(dt.__webglDepthRenderbuffer=n.createRenderbuffer(),Ut(dt.__webglDepthRenderbuffer,H,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(bt){e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),vt(n.TEXTURE_CUBE_MAP,R);for(let ut=0;ut<6;ut++)if(R.mipmaps&&R.mipmaps.length>0)for(let mt=0;mt<R.mipmaps.length;mt++)gt(dt.__webglFramebuffer[ut][mt],H,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt);else gt(dt.__webglFramebuffer[ut],H,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);g(R)&&A(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ut=0,mt=W.length;ut<mt;ut++){let F=W[ut],X=i.get(F),G=n.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(G=H.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(G,X.__webglTexture),vt(G,F),gt(dt.__webglFramebuffer,H,F,n.COLOR_ATTACHMENT0+ut,G,0),g(F)&&A(G)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(ut=H.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,ot.__webglTexture),vt(ut,R),R.mipmaps&&R.mipmaps.length>0)for(let mt=0;mt<R.mipmaps.length;mt++)gt(dt.__webglFramebuffer[mt],H,R,n.COLOR_ATTACHMENT0,ut,mt);else gt(dt.__webglFramebuffer,H,R,n.COLOR_ATTACHMENT0,ut,0);g(R)&&A(ut),e.unbindTexture()}H.depthBuffer&&rt(H)}function Ot(H){let R=H.textures;for(let dt=0,ot=R.length;dt<ot;dt++){let W=R[dt];if(g(W)){let bt=E(H),At=i.get(W).__webglTexture;e.bindTexture(bt,At),A(bt),e.unbindTexture()}}}let Ht=[],yt=[];function ne(H){if(H.samples>0){if(Se(H)===!1){let R=H.textures,dt=H.width,ot=H.height,W=n.COLOR_BUFFER_BIT,bt=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(H),ut=R.length>1;if(ut)for(let F=0;F<R.length;F++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);let mt=H.texture.mipmaps;mt&&mt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let F=0;F<R.length;F++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[F]);let X=i.get(R[F]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,X,0)}n.blitFramebuffer(0,0,dt,ot,0,0,dt,ot,W,n.NEAREST),c===!0&&(Ht.length=0,yt.length=0,Ht.push(n.COLOR_ATTACHMENT0+F),H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&(Ht.push(bt),yt.push(bt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,yt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let F=0;F<R.length;F++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,At.__webglColorRenderbuffer[F]);let X=i.get(R[F]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.TEXTURE_2D,X,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&c){let R=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function ft(H){return Math.min(s.maxSamples,H.samples)}function Se(H){let R=i.get(H);return H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function et(H){let R=a.render.frame;u.get(H)!==R&&(u.set(H,R),H.update())}function be(H,R){let dt=H.colorSpace,ot=H.format,W=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||dt!==lc&&dt!==cr&&(Ye.getTransfer(dt)===nn?(ot!==hs||W!==Vi)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",dt)),R}function ye(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(o.width=H.naturalWidth||H.width,o.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(o.width=H.displayWidth,o.height=H.displayHeight):(o.width=H.width,o.height=H.height),o}this.allocateTextureUnit=ct,this.resetTextureUnits=U,this.getTextureUnits=V,this.setTextureUnits=Y,this.setTexture2D=L,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=b,this.rebindTextures=Rt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ob(n,t){function e(i,s=cr){let r,a=Ye.getTransfer(s);if(i===Vi)return n.UNSIGNED_BYTE;if(i===Th)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ah)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ef)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Q0)return n.BYTE;if(i===tf)return n.SHORT;if(i===bo)return n.UNSIGNED_SHORT;if(i===Eh)return n.INT;if(i===Ps)return n.UNSIGNED_INT;if(i===ls)return n.FLOAT;if(i===$n)return n.HALF_FLOAT;if(i===sf)return n.ALPHA;if(i===rf)return n.RGB;if(i===hs)return n.RGBA;if(i===Us)return n.DEPTH_COMPONENT;if(i===Hr)return n.DEPTH_STENCIL;if(i===Rh)return n.RED;if(i===Ch)return n.RED_INTEGER;if(i===Vr)return n.RG;if(i===Ih)return n.RG_INTEGER;if(i===Ph)return n.RGBA_INTEGER;if(i===Fc||i===Nc||i===Uc||i===kc)if(a===nn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Uc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Uc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lh||i===Dh||i===Fh||i===Nh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Lh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uh||i===kh||i===Oh||i===zh||i===Bh||i===Oc||i===Hh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Uh||i===kh)return a===nn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===zh)return r.COMPRESSED_R11_EAC;if(i===Bh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Oc)return r.COMPRESSED_RG11_EAC;if(i===Hh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vh||i===Gh||i===Wh||i===qh||i===Xh||i===$h||i===Yh||i===Kh||i===Zh||i===jh||i===Jh||i===Qh||i===tu||i===eu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$h)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tu)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eu)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nu||i===iu||i===su)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===nu)return a===nn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===iu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===su)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ru||i===au||i===zc||i===ou)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ru)return r.COMPRESSED_RED_RGTC1_EXT;if(i===au)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ou)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var zb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Tf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Sc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new on({vertexShader:zb,fragmentShader:Bb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Af=class extends ks{constructor(t,e){super();let i=this,s=null,r=1,a=null,l="local-floor",c=1,o=null,u=null,f=null,h=null,d=null,p=null,x=typeof XRWebGLBinding<"u",_=new Tf,g={},A=e.getContextAttributes(),E=null,m=null,v=[],y=[],w=new xe,M=null,S=null,P=new ai;P.viewport=new _n;let C=new ai;C.viewport=new _n;let z=[P,C],U=new Mh,V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let at=v[Z];return at===void 0&&(at=new fo,v[Z]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Z){let at=v[Z];return at===void 0&&(at=new fo,v[Z]=at),at.getGripSpace()},this.getHand=function(Z){let at=v[Z];return at===void 0&&(at=new fo,v[Z]=at),at.getHandSpace()};function ct(Z){let at=y.indexOf(Z.inputSource);if(at===-1)return;let pt=v[at];pt!==void 0&&(pt.update(Z.inputSource,Z.frame,o||a),pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function T(){s.removeEventListener("select",ct),s.removeEventListener("selectstart",ct),s.removeEventListener("selectend",ct),s.removeEventListener("squeeze",ct),s.removeEventListener("squeezestart",ct),s.removeEventListener("squeezeend",ct),s.removeEventListener("end",T),s.removeEventListener("inputsourceschange",L);for(let Z=0;Z<v.length;Z++){let at=y[Z];at!==null&&(y[Z]=null,v[Z].disconnect(at))}V=null,Y=null,_.reset();for(let Z in g)delete g[Z];if(t.setRenderTarget(E),d=null,h=null,f=null,s=null,m=null,Nt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(w.width,w.height,!1),S!==null){let Z=S.camera;Z.fov=S.fov,Z.zoom=S.zoom,Z.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,i.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(Z){o=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",ct),s.addEventListener("selectstart",ct),s.addEventListener("selectend",ct),s.addEventListener("squeeze",ct),s.addEventListener("squeezestart",ct),s.addEventListener("squeezeend",ct),s.addEventListener("end",T),s.addEventListener("inputsourceschange",L),A.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,zt=null,gt=null;A.depth&&(gt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=A.stencil?Hr:Us,zt=A.stencil?So:Ps);let Ut={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ut),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),m=new In(h.textureWidth,h.textureHeight,{format:hs,type:Vi,depthTexture:new zs(h.textureWidth,h.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let pt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new In(d.framebufferWidth,d.framebufferHeight,{format:hs,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await s.requestReferenceSpace(l),Nt.setContext(s),Nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function L(Z){for(let at=0;at<Z.removed.length;at++){let pt=Z.removed[at],zt=y.indexOf(pt);zt>=0&&(y[zt]=null,v[zt].disconnect(pt))}for(let at=0;at<Z.added.length;at++){let pt=Z.added[at],zt=y.indexOf(pt);if(zt===-1){for(let Ut=0;Ut<v.length;Ut++)if(Ut>=y.length){y.push(pt),zt=Ut;break}else if(y[Ut]===null){y[Ut]=pt,zt=Ut;break}if(zt===-1)break}let gt=v[zt];gt&&gt.connect(pt)}}let D=new q,B=new q;function b(Z,at,pt){D.setFromMatrixPosition(at.matrixWorld),B.setFromMatrixPosition(pt.matrixWorld);let zt=D.distanceTo(B),gt=at.projectionMatrix.elements,Ut=pt.projectionMatrix.elements,ie=gt[14]/(gt[10]-1),rt=gt[14]/(gt[10]+1),Rt=(gt[9]+1)/gt[5],Ct=(gt[9]-1)/gt[5],Ot=(gt[8]-1)/gt[0],Ht=(Ut[8]+1)/Ut[0],yt=ie*Ot,ne=ie*Ht,ft=zt/(-Ot+Ht),Se=ft*-Ot;if(at.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Se),Z.translateZ(ft),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),gt[10]===-1)Z.projectionMatrix.copy(at.projectionMatrix),Z.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let et=ie+ft,be=rt+ft,ye=yt-Se,H=ne+(zt-Se),R=Rt*rt/be*et,dt=Ct*rt/be*et;Z.projectionMatrix.makePerspective(ye,H,R,dt,et,be),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function j(Z,at){at===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(at.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let at=Z.near,pt=Z.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(pt=_.depthFar)),U.near=C.near=P.near=at,U.far=C.far=P.far=pt,(V!==U.near||Y!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),V=U.near,Y=U.far),U.layers.mask=Z.layers.mask|6,P.layers.mask=U.layers.mask&-5,C.layers.mask=U.layers.mask&-3;let zt=Z.parent,gt=U.cameras;j(U,zt);for(let Ut=0;Ut<gt.length;Ut++)j(gt[Ut],zt);gt.length===2?b(U,P,C):U.projectionMatrix.copy(P.projectionMatrix),S===null&&Z.isPerspectiveCamera&&(S={camera:Z,fov:Z.fov,zoom:Z.zoom}),it(Z,U,zt)};function it(Z,at,pt){pt===null?Z.matrix.copy(at.matrixWorld):(Z.matrix.copy(pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(at.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(at.projectionMatrix),Z.projectionMatrixInverse.copy(at.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ho*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(U)},this.getCameraTexture=function(Z){return g[Z]};let J=null;function vt(Z,at){if(u=at.getViewerPose(o||a),p=at,u!==null){let pt=u.views;d!==null&&(t.setRenderTargetFramebuffer(m,d.framebuffer),t.setRenderTarget(m));let zt=!1;pt.length!==U.cameras.length&&(U.cameras.length=0,zt=!0);for(let rt=0;rt<pt.length;rt++){let Rt=pt[rt],Ct=null;if(d!==null)Ct=d.getViewport(Rt);else{let Ht=f.getViewSubImage(h,Rt);Ct=Ht.viewport,rt===0&&(t.setRenderTargetTextures(m,Ht.colorTexture,Ht.depthStencilTexture),t.setRenderTarget(m))}let Ot=z[rt];Ot===void 0&&(Ot=new ai,Ot.layers.enable(rt),Ot.viewport=new _n,z[rt]=Ot),Ot.matrix.fromArray(Rt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Rt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),rt===0&&(U.matrix.copy(Ot.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),zt===!0&&U.cameras.push(Ot)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let rt=f.getDepthInformation(pt[0]);rt&&rt.isValid&&rt.texture&&_.init(rt,s.renderState)}if(gt&&gt.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let rt=0;rt<pt.length;rt++){let Rt=pt[rt].camera;if(Rt){let Ct=g[Rt];Ct||(Ct=new Sc,g[Rt]=Ct);let Ot=f.getCameraImage(Rt);Ct.sourceTexture=Ot}}}}for(let pt=0;pt<v.length;pt++){let zt=y[pt],gt=v[pt];zt!==null&&gt!==void 0&&gt.update(zt,at,o||a)}J&&J(Z,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),p=null}let Nt=new Um;Nt.setAnimationLoop(vt),this.setAnimationLoop=function(Z){J=Z},this.dispose=function(){}}},Hb=new pe,Vm=new Ie;Vm.set(-1,0,0,0,1,0,0,0,1);function Vb(n,t){function e(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function i(_,g){g.color.getRGB(_.fogColor.value,lf(n)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function s(_,g,A,E,m){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(_,g):g.isMeshLambertMaterial?(r(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(_,g),f(_,g)):g.isMeshPhongMaterial?(r(_,g),u(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(_,g),h(_,g),g.isMeshPhysicalMaterial&&d(_,g,m)):g.isMeshMatcapMaterial?(r(_,g),p(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),x(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&l(_,g)):g.isPointsMaterial?c(_,g,A,E):g.isSpriteMaterial?o(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,e(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===Xn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,e(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===Xn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,e(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,e(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);let A=t.get(g),E=A.envMap,m=A.envMapRotation;E&&(_.envMap.value=E,_.envMapRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(m)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Vm),_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,_.aoMapTransform))}function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform))}function l(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function c(_,g,A,E){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*A,_.scale.value=E*.5,g.map&&(_.map.value=g.map,e(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function o(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function u(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function f(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function h(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function d(_,g,A){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.retroreflectivity>0&&(_.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,g){g.matcap&&(_.matcap.value=g.matcap)}function x(_,g){let A=t.get(g).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Gb(n,t,e,i){let s={},r={},a=[],l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(m,v){let y=v.program;i.uniformBlockBinding(m,y)}function o(m,v){let y=s[m.id];y===void 0&&(_(m),y=u(m),s[m.id]=y,m.addEventListener("dispose",A));let w=v.program;i.updateUBOMapping(m,w);let M=t.render.frame;r[m.id]!==M&&(h(m),r[m.id]=M)}function u(m){let v=f();m.__bindingPointIndex=v;let y=n.createBuffer(),w=m.__size,M=m.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let m=0;m<l;m++)if(a.indexOf(m)===-1)return a.push(m),m;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){let v=s[m.id],y=m.uniforms,w=m.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let M=0,S=y.length;M<S;M++){let P=y[M];if(Array.isArray(P))for(let C=0,z=P.length;C<z;C++)d(P[C],M,C,w);else d(P,M,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(m,v,y,w){if(x(m,v,y,w)===!0){let M=m.__offset,S=m.value;if(Array.isArray(S)){let P=0;for(let C=0;C<S.length;C++){let z=S[C],U=g(z);p(z,m.__data,P),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(P+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(S,m.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,m.__data)}}function p(m,v,y){typeof m=="number"||typeof m=="boolean"?v[0]=m:m.isMatrix3?(v[0]=m.elements[0],v[1]=m.elements[1],v[2]=m.elements[2],v[3]=0,v[4]=m.elements[3],v[5]=m.elements[4],v[6]=m.elements[5],v[7]=0,v[8]=m.elements[6],v[9]=m.elements[7],v[10]=m.elements[8],v[11]=0):ArrayBuffer.isView(m)?v.set(new m.constructor(m.buffer,m.byteOffset,v.length)):m.toArray(v,y)}function x(m,v,y,w){let M=m.value,S=v+"_"+y;if(w[S]===void 0)return typeof M=="number"||typeof M=="boolean"?w[S]=M:ArrayBuffer.isView(M)?w[S]=M.slice():w[S]=M.clone(),!0;{let P=w[S];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return w[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(P.equals(M)===!1)return P.copy(M),!0}}return!1}function _(m){let v=m.uniforms,y=0,w=16;for(let S=0,P=v.length;S<P;S++){let C=Array.isArray(v[S])?v[S]:[v[S]];for(let z=0,U=C.length;z<U;z++){let V=C[z],Y=Array.isArray(V.value)?V.value:[V.value];for(let ct=0,T=Y.length;ct<T;ct++){let L=Y[ct],D=g(L),B=y%w,b=B%D.boundary,j=B+b;y+=b,j!==0&&w-j<D.storage&&(y+=w-j),V.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=D.storage}}}let M=y%w;return M>0&&(y+=w-M),m.__size=y,m.__cache={},this}function g(m){let v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(v.boundary=16,v.storage=m.byteLength):Ee("WebGLRenderer: Unsupported uniform value type.",m),v}function A(m){let v=m.target;v.removeEventListener("dispose",A);let y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function E(){for(let m in s)n.deleteBuffer(s[m]);a=[],s={},r={}}return{bind:c,update:o,dispose:E}}var Wb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vs=null;function qb(){return Vs===null&&(Vs=new Mc(Wb,16,16,Vr,$n),Vs.name="DFG_LUT",Vs.minFilter=oi,Vs.magFilter=oi,Vs.wrapS=Ns,Vs.wrapT=Ns,Vs.generateMipmaps=!1,Vs.needsUpdate=!0),Vs}var mu=class{constructor(t={}){let{canvas:e=om(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Vi}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let x=d,_=new Set([Ph,Ih,Ch]),g=new Set([Vi,Ps,bo,So,Th,Ah]),A=new Uint32Array(4),E=new Int32Array(4),m=new q,v=null,y=null,w=[],M=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,C=!1,z=null,U=null,V=null,Y=null;this._outputColorSpace=Hn;let ct=0,T=0,L=null,D=-1,B=null,b=new _n,j=new _n,it=null,J=new Qt(0),vt=0,Nt=e.width,Z=e.height,at=1,pt=null,zt=null,gt=new _n(0,0,Nt,Z),Ut=new _n(0,0,Nt,Z),ie=!1,rt=new go,Rt=!1,Ct=!1,Ot=new pe,Ht=new q,yt=new _n,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function Se(){return L===null?at:1}let et=i;function be(O,ht){return e.getContext(O,ht)}let ye,H,R,dt,ot,W,bt,At,ut,mt,F,X,G,lt,Bt,Gt,N,k,nt,Q,Ft,It,Mt;try{let O={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",xt,!1),et===null){let ht="webgl2";if(et=be(ht,O),et===null)throw be(ht)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}I()}catch(O){throw e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Ae("WebGLRenderer: "+O.message),O}function I(){ye=new J_(et),ye.init(),Ft=new Ob(et,ye),H=new V_(et,ye,t,Ft),R=new Ub(et,ye),H.reversedDepthBuffer&&h&&R.buffers.depth.setReversed(!0),U=et.createFramebuffer(),V=et.createFramebuffer(),Y=et.createFramebuffer(),dt=new eM(et),ot=new bb,W=new kb(et,ye,R,ot,H,Ft,dt),bt=new j_(P),At=new iv(et),It=new B_(et,At),ut=new Q_(et,At,dt,It),mt=new iM(et,ut,At,It,dt),k=new nM(et,H,W),Bt=new G_(ot),F=new Mb(P,bt,ye,H,It,Bt),X=new Vb(P,ot),G=new wb,lt=new Ib(ye),N=new z_(P,bt,R,mt,p,c),Gt=new Nb(P,mt,H),Mt=new Gb(et,dt,H,R),nt=new H_(et,ye,dt),Q=new tM(et,ye,dt),dt.programs=F.programs,P.capabilities=H,P.extensions=ye,P.properties=ot,P.renderLists=G,P.shadowMap=Gt,P.state=R,P.info=dt}x!==Vi&&(S=new rM(x,e.width,e.height,l,s,r));let tt=new Af(P,et);this.xr=tt,this.getContext=function(){return et},this.getContextAttributes=function(){return et.getContextAttributes()},this.forceContextLoss=function(){let O=ye.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=ye.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(O){O!==void 0&&(at=O,this.setSize(Nt,Z,!1))},this.getSize=function(O){return O.set(Nt,Z)},this.setSize=function(O,ht,Dt=!0){if(tt.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}Nt=O,Z=ht,e.width=Math.floor(O*at),e.height=Math.floor(ht*at),Dt===!0&&(e.style.width=O+"px",e.style.height=ht+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,O,ht)},this.getDrawingBufferSize=function(O){return O.set(Nt*at,Z*at).floor()},this.setDrawingBufferSize=function(O,ht,Dt){Nt=O,Z=ht,at=Dt,e.width=Math.floor(O*Dt),e.height=Math.floor(ht*Dt),this.setViewport(0,0,O,ht)},this.setEffects=function(O){if(x===Vi){Ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(O){for(let ht=0;ht<O.length;ht++)if(O[ht].isOutputPass===!0){Ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(O||[])},this.getCurrentViewport=function(O){return O.copy(b)},this.getViewport=function(O){return O.copy(gt)},this.setViewport=function(O,ht,Dt,St){O.isVector4?gt.set(O.x,O.y,O.z,O.w):gt.set(O,ht,Dt,St),R.viewport(b.copy(gt).multiplyScalar(at).round())},this.getScissor=function(O){return O.copy(Ut)},this.setScissor=function(O,ht,Dt,St){O.isVector4?Ut.set(O.x,O.y,O.z,O.w):Ut.set(O,ht,Dt,St),R.scissor(j.copy(Ut).multiplyScalar(at).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(O){R.setScissorTest(ie=O)},this.setOpaqueSort=function(O){pt=O},this.setTransparentSort=function(O){zt=O},this.getClearColor=function(O){return O.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(O=!0,ht=!0,Dt=!0){let St=0;if(O){let wt=!1;if(L!==null){let $=L.texture.format;wt=_.has($)}if(wt){let $=L.texture.type,Pt=g.has($),Lt=N.getClearColor(),$t=N.getClearAlpha(),Kt=Lt.r,_e=Lt.g,De=Lt.b;Pt?(A[0]=Kt,A[1]=_e,A[2]=De,A[3]=$t,et.clearBufferuiv(et.COLOR,0,A)):(E[0]=Kt,E[1]=_e,E[2]=De,E[3]=$t,et.clearBufferiv(et.COLOR,0,E))}else St|=et.COLOR_BUFFER_BIT}ht&&(St|=et.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Dt&&(St|=et.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),St!==0&&et.clear(St)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(O){O.setRenderer(this),z=O},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),N.dispose(),G.dispose(),lt.dispose(),ot.dispose(),bt.dispose(),mt.dispose(),It.dispose(),Mt.dispose(),F.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",de),tt.removeEventListener("sessionend",Jt),me.stop()};function st(O){O.preventDefault(),fc("WebGLRenderer: Context Lost."),C=!0}function K(){fc("WebGLRenderer: Context Restored."),C=!1;let O=dt.autoReset,ht=Gt.enabled,Dt=Gt.autoUpdate,St=Gt.needsUpdate,wt=Gt.type;I(),dt.autoReset=O,Gt.enabled=ht,Gt.autoUpdate=Dt,Gt.needsUpdate=St,Gt.type=wt}function xt(O){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function Vt(O){let ht=O.target;ht.removeEventListener("dispose",Vt),kt(ht)}function kt(O){Zt(O),ot.remove(O)}function Zt(O){let ht=ot.get(O).programs;ht!==void 0&&(ht.forEach(function(Dt){F.releaseProgram(Dt)}),O.isShaderMaterial&&F.releaseShaderCache(O))}this.renderBufferDirect=function(O,ht,Dt,St,wt,$){ht===null&&(ht=ne);let Pt=wt.isMesh&&wt.matrixWorld.determinantAffine()<0,Lt=fi(O,ht,Dt,St,wt);R.setMaterial(St,Pt);let $t=Dt.index,Kt=1;if(St.wireframe===!0){if($t=ut.getWireframeAttribute(Dt),$t===void 0)return;Kt=2}let _e=Dt.drawRange,De=Dt.attributes.position,ue=_e.start*Kt,Xe=(_e.start+_e.count)*Kt;$!==null&&(ue=Math.max(ue,$.start*Kt),Xe=Math.min(Xe,($.start+$.count)*Kt)),$t!==null?(ue=Math.max(ue,0),Xe=Math.min(Xe,$t.count)):De!=null&&(ue=Math.max(ue,0),Xe=Math.min(Xe,De.count));let cn=Xe-ue;if(cn<0||cn===1/0)return;It.setup(wt,St,Lt,Dt,$t);let $e,en=nt;if($t!==null&&($e=At.get($t),en=Q,en.setIndex($e)),wt.isMesh)St.wireframe===!0?(R.setLineWidth(St.wireframeLinewidth*Se()),en.setMode(et.LINES)):en.setMode(et.TRIANGLES);else if(wt.isLine){let zn=St.linewidth;zn===void 0&&(zn=1),R.setLineWidth(zn*Se()),wt.isLineSegments?en.setMode(et.LINES):wt.isLineLoop?en.setMode(et.LINE_LOOP):en.setMode(et.LINE_STRIP)}else wt.isPoints?en.setMode(et.POINTS):wt.isSprite&&en.setMode(et.TRIANGLES);if(wt.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))en.renderMultiDraw(wt._multiDrawStarts,wt._multiDrawCounts,wt._multiDrawCount);else{let zn=wt._multiDrawStarts,fe=wt._multiDrawCounts,Un=wt._multiDrawCount,He=$t?At.get($t).bytesPerElement:1,Hi=ot.get(St).currentProgram.getUniforms();for(let as=0;as<Un;as++)Hi.setValue(et,"_gl_DrawID",as),en.render(zn[as]/He,fe[as])}else if(wt.isInstancedMesh)en.renderInstances(ue,cn,wt.count);else if(Dt.isInstancedBufferGeometry){let zn=Dt._maxInstanceCount!==void 0?Dt._maxInstanceCount:1/0,fe=Math.min(Dt.instanceCount,zn);en.renderInstances(ue,cn,fe)}else en.render(ue,cn)};function Xt(O,ht,Dt,St){z!==null&&O.isNodeMaterial&&z.setObject(St,O),Rt===!0&&Bt.setState(O,Dt,!1),O.transparent===!0&&O.side===En&&O.forceSinglePass===!1?(O.side=Xn,O.needsUpdate=!0,Ms(O,ht,St),O.side=Or,O.needsUpdate=!0,Ms(O,ht,St),O.side=En):Ms(O,ht,St)}this.compile=function(O,ht,Dt=null){Dt===null&&(Dt=O),z!==null&&z.renderStart(O,ht,Dt),y=lt.get(Dt),y.init(ht),M.push(y),Dt.traverseVisible(function(wt){wt.isLight&&wt.layers.test(ht.layers)&&(y.pushLight(wt),wt.castShadow&&y.pushShadow(wt))}),O!==Dt&&O.traverseVisible(function(wt){wt.isLight&&wt.layers.test(ht.layers)&&(y.pushLight(wt),wt.castShadow&&y.pushShadow(wt))}),y.setupLights(),z!==null&&z.updateLights(y.state.lightsArray),Ct=this.localClippingEnabled,Rt=Bt.init(this.clippingPlanes,Ct),Rt===!0&&Bt.setGlobalState(this.clippingPlanes,ht),z!==null&&Gt.render(y.state.shadowsArray,Dt,ht);let St=new Set;return O.traverse(function(wt){if(!(wt.isMesh||wt.isPoints||wt.isLine||wt.isSprite))return;let $=wt.material;if($)if(Array.isArray($))for(let Pt=0;Pt<$.length;Pt++){let Lt=$[Pt];Xt(Lt,Dt,ht,wt),St.add(Lt)}else Xt($,Dt,ht,wt),St.add($)}),y=M.pop(),z!==null&&z.renderEnd(),St},this.compileAsync=function(O,ht,Dt=null){let St=this.compile(O,ht,Dt);return new Promise(wt=>{function $(){if(St.forEach(function(Pt){let $t=ot.get(Pt).currentProgram;($t===void 0||$t.isReady())&&St.delete(Pt)}),St.size===0){wt(O);return}setTimeout($,10)}ye.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let se=null;function ce(O){se&&se(O)}function de(){me.stop()}function Jt(){me.start()}let me=new Um;me.setAnimationLoop(ce),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(O){se=O,tt.setAnimationLoop(O),O===null?me.stop():me.start()},tt.addEventListener("sessionstart",de),tt.addEventListener("sessionend",Jt),this.render=function(O,ht){if(ht!==void 0&&ht.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;z!==null&&z.renderStart(O,ht);let Dt=tt.enabled===!0&&tt.isPresenting===!0,St=S!==null&&(L===null||Dt)&&S.begin(P,L);if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ht.parent===null&&ht.matrixWorldAutoUpdate===!0&&ht.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(ht),ht=tt.getCamera()),O.isScene===!0&&O.onBeforeRender(P,O,ht,L),y=lt.get(O,M.length),y.init(ht),y.state.textureUnits=W.getTextureUnits(),M.push(y),Ot.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),rt.setFromProjectionMatrix(Ot,Cs,ht.reversedDepth),Ct=this.localClippingEnabled,Rt=Bt.init(this.clippingPlanes,Ct),v=G.get(O,w.length),v.init(),w.push(v),tt.enabled===!0&&tt.isPresenting===!0){let Pt=P.xr.getDepthSensingMesh();Pt!==null&&he(Pt,ht,-1/0,P.sortObjects)}he(O,ht,0,P.sortObjects),v.finish(),z!==null&&z.updateLights(y.state.lightsArray),P.sortObjects===!0&&v.sort(pt,zt),ft=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,ft&&N.addToRenderList(v,O),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Rt===!0&&Bt.beginShadows();let wt=y.state.shadowsArray;if(Gt.render(wt,O,ht),Rt===!0&&Bt.endShadows(),(St&&S.hasRenderPass())===!1){let Pt=v.opaque,Lt=v.transmissive;if(y.setupLights(),ht.isArrayCamera){let $t=ht.cameras;if(Lt.length>0)for(let Kt=0,_e=$t.length;Kt<_e;Kt++){let De=$t[Kt];wn(Pt,Lt,O,De)}ft&&N.render(O);for(let Kt=0,_e=$t.length;Kt<_e;Kt++){let De=$t[Kt];qe(v,O,De,De.viewport)}}else Lt.length>0&&wn(Pt,Lt,O,ht),ft&&N.render(O),qe(v,O,ht)}L!==null&&T===0&&(W.updateMultisampleRenderTarget(L),W.updateRenderTargetMipmap(L)),St&&S.end(P),O.isScene===!0&&O.onAfterRender(P,O,ht),It.resetDefaultState(),D=-1,B=null,M.pop(),M.length>0?(y=M[M.length-1],W.setTextureUnits(y.state.textureUnits),Rt===!0&&Bt.setGlobalState(P.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?v=w[w.length-1]:v=null,z!==null&&z.renderEnd()};function he(O,ht,Dt,St){if(O.visible===!1)return;if(O.layers.test(ht.layers)){if(O.isGroup)Dt=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(ht);else if(O.isLightProbeGrid)y.pushLightProbeGrid(O);else if(O.isLight)y.pushLight(O),O.castShadow&&y.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||O.intersectsFrustum(rt)){St&&yt.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Ot);let Pt=mt.update(O),Lt=O.material;Lt.visible&&v.push(O,Pt,Lt,Dt,yt.z,null,ht)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||O.intersectsFrustum(rt))){let Pt=mt.update(O),Lt=O.material;if(St&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),yt.copy(O.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),yt.copy(Pt.boundingSphere.center)),yt.applyMatrix4(O.matrixWorld).applyMatrix4(Ot)),Array.isArray(Lt)){let $t=Pt.groups;for(let Kt=0,_e=$t.length;Kt<_e;Kt++){let De=$t[Kt],ue=Lt[De.materialIndex];ue&&ue.visible&&v.push(O,Pt,ue,Dt,yt.z,De,ht)}}else Lt.visible&&v.push(O,Pt,Lt,Dt,yt.z,null,ht)}}let $=O.children;for(let Pt=0,Lt=$.length;Pt<Lt;Pt++)he($[Pt],ht,Dt,St)}function qe(O,ht,Dt,St){let{opaque:wt,transmissive:$,transparent:Pt}=O;y.setupLightsView(Dt),Rt===!0&&Bt.setGlobalState(P.clippingPlanes,Dt),St&&R.viewport(b.copy(St)),wt.length>0&&ss(wt,ht,Dt),$.length>0&&ss($,ht,Dt),Pt.length>0&&ss(Pt,ht,Dt),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function wn(O,ht,Dt,St){if((Dt.isScene===!0?Dt.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[St.id]===void 0){let ue=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[St.id]=new In(1,1,{generateMipmaps:!0,type:ue?$n:Vi,minFilter:Hs,samples:Math.max(4,H.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let $=y.state.transmissionRenderTarget[St.id],Pt=St.viewport||b;$.setSize(Pt.z*P.transmissionResolutionScale,Pt.w*P.transmissionResolutionScale);let Lt=P.getRenderTarget(),$t=P.getActiveCubeFace(),Kt=P.getActiveMipmapLevel();P.setRenderTarget($),P.getClearColor(J),vt=P.getClearAlpha(),vt<1&&P.setClearColor(16777215,.5),P.clear(),ft&&N.render(Dt);let _e=P.toneMapping;P.toneMapping=Is;let De=St.viewport;if(St.viewport!==void 0&&(St.viewport=void 0),y.setupLightsView(St),Rt===!0&&Bt.setGlobalState(P.clippingPlanes,St),ss(O,Dt,St),W.updateMultisampleRenderTarget($),W.updateRenderTargetMipmap($),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Xe=0,cn=ht.length;Xe<cn;Xe++){let $e=ht[Xe],{object:en,geometry:zn,material:fe,group:Un}=$e;if(fe.side===En&&en.layers.test(St.layers)){let He=fe.side;fe.side=Xn,fe.needsUpdate=!0,rs(en,Dt,St,zn,fe,Un),fe.side=He,fe.needsUpdate=!0,ue=!0}}ue===!0&&(W.updateMultisampleRenderTarget($),W.updateRenderTargetMipmap($))}P.setRenderTarget(Lt,$t,Kt),P.setClearColor(J,vt),De!==void 0&&(St.viewport=De),P.toneMapping=_e}function ss(O,ht,Dt){let St=ht.isScene===!0?ht.overrideMaterial:null;for(let wt=0,$=O.length;wt<$;wt++){let Pt=O[wt],{object:Lt,geometry:$t,group:Kt}=Pt,_e=Pt.material;_e.allowOverride===!0&&St!==null&&(_e=St),Lt.layers.test(Dt.layers)&&rs(Lt,ht,Dt,$t,_e,Kt)}}function rs(O,ht,Dt,St,wt,$){z!==null&&wt.isNodeMaterial&&z.setObject(O,wt),O.onBeforeRender(P,ht,Dt,St,wt,$),O.modelViewMatrix.multiplyMatrices(Dt.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),wt.onBeforeRender(P,ht,Dt,St,O,$),wt.transparent===!0&&wt.side===En&&wt.forceSinglePass===!1?(wt.side=Xn,wt.needsUpdate=!0,P.renderBufferDirect(Dt,ht,St,wt,O,$),wt.side=Or,wt.needsUpdate=!0,P.renderBufferDirect(Dt,ht,St,wt,O,$),wt.side=En):P.renderBufferDirect(Dt,ht,St,wt,O,$),O.onAfterRender(P,ht,Dt,St,wt,$)}function Ms(O,ht,Dt){ht.isScene!==!0&&(ht=ne);let St=ot.get(O),wt=y.state.lights,$=y.state.shadowsArray,Pt=wt.state.version,Lt=F.getParameters(O,wt.state,$,ht,Dt,y.state.lightProbeGridArray),$t=F.getProgramCacheKey(Lt),Kt=St.programs;St.environment=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?ht.environment:null,St.fog=ht.fog;let _e=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap;St.envMap=bt.get(O.envMap||St.environment,_e),St.envMapRotation=St.environment!==null&&O.envMap===null?ht.environmentRotation:O.envMapRotation,Kt===void 0&&(O.addEventListener("dispose",Vt),Kt=new Map,St.programs=Kt);let De=Kt.get($t);if(De!==void 0){if(St.currentProgram===De&&St.lightsStateVersion===Pt)return Js(O,Lt),De}else Lt.uniforms=F.getUniforms(O),z!==null&&O.isNodeMaterial&&z.build(O,Dt,Lt),O.onBeforeCompile(Lt,P),De=F.acquireProgram(Lt,$t),Kt.set($t,De),St.uniforms=Lt.uniforms;let ue=St.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(ue.clippingPlanes=Bt.uniform),Js(O,Lt),St.needsLights=Bi(O),St.lightsStateVersion=Pt,St.needsLights&&(ue.ambientLightColor.value=wt.state.ambient,ue.lightProbe.value=wt.state.probe,ue.sunLights.value=wt.state.sun,ue.sunLightShadows.value=wt.state.sunShadow,ue.directionalLights.value=wt.state.directional,ue.directionalLightShadows.value=wt.state.directionalShadow,ue.spotLights.value=wt.state.spot,ue.spotLightShadows.value=wt.state.spotShadow,ue.rectAreaLights.value=wt.state.rectArea,ue.ltc_1.value=wt.state.rectAreaLTC1,ue.ltc_2.value=wt.state.rectAreaLTC2,ue.pointLights.value=wt.state.point,ue.pointLightShadows.value=wt.state.pointShadow,ue.hemisphereLights.value=wt.state.hemi,ue.sunShadowMatrix.value=wt.state.sunShadowMatrix,ue.sunShadowCascade.value=wt.state.sunShadowCascade,ue.directionalShadowMatrix.value=wt.state.directionalShadowMatrix,ue.spotLightMatrix.value=wt.state.spotLightMatrix,ue.spotLightMap.value=wt.state.spotLightMap,ue.pointShadowMatrix.value=wt.state.pointShadowMatrix),St.lightProbeGrid=y.state.lightProbeGridArray.length>0,St.currentProgram=De,St.uniformsList=null,De}function js(O){if(O.uniformsList===null){let ht=O.currentProgram.getUniforms();O.uniformsList=To.seqWithValue(ht.seq,O.uniforms)}return O.uniformsList}function Js(O,ht){let Dt=ot.get(O);Dt.outputColorSpace=ht.outputColorSpace,Dt.batching=ht.batching,Dt.batchingColor=ht.batchingColor,Dt.instancing=ht.instancing,Dt.instancingColor=ht.instancingColor,Dt.instancingMorph=ht.instancingMorph,Dt.skinning=ht.skinning,Dt.morphTargets=ht.morphTargets,Dt.morphNormals=ht.morphNormals,Dt.morphColors=ht.morphColors,Dt.morphTargetsCount=ht.morphTargetsCount,Dt.numClippingPlanes=ht.numClippingPlanes,Dt.numIntersection=ht.numClipIntersection,Dt.vertexAlphas=ht.vertexAlphas,Dt.vertexTangents=ht.vertexTangents,Dt.toneMapping=ht.toneMapping}function bs(O,ht){if(O.length===0)return null;if(O.length===1)return O[0].texture!==null?O[0]:null;m.setFromMatrixPosition(ht.matrixWorld);for(let Dt=0,St=O.length;Dt<St;Dt++){let wt=O[Dt];if(wt.texture!==null&&wt.boundingBox.containsPoint(m))return wt}return null}function fi(O,ht,Dt,St,wt){ht.isScene!==!0&&(ht=ne),W.resetTextureUnits();let $=ht.fog,Pt=St.isMeshStandardMaterial||St.isMeshLambertMaterial||St.isMeshPhongMaterial?ht.environment:null,Lt=L===null?P.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ye.workingColorSpace,$t=St.isMeshStandardMaterial||St.isMeshLambertMaterial&&!St.envMap||St.isMeshPhongMaterial&&!St.envMap,Kt=bt.get(St.envMap||Pt,$t),_e=St.vertexColors===!0&&!!Dt.attributes.color&&Dt.attributes.color.itemSize===4,De=!!Dt.attributes.tangent&&(!!St.normalMap||St.anisotropy>0),ue=!!Dt.morphAttributes.position,Xe=!!Dt.morphAttributes.normal,cn=!!Dt.morphAttributes.color,$e=Is;St.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&($e=P.toneMapping);let en=Dt.morphAttributes.position||Dt.morphAttributes.normal||Dt.morphAttributes.color,zn=en!==void 0?en.length:0,fe=ot.get(St),Un=y.state.lights;if(Rt===!0&&(Ct===!0||O!==B)){let pn=O===B&&St.id===D;Bt.setState(St,O,pn)}let He=!1;St.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==Un.state.version||fe.outputColorSpace!==Lt||wt.isBatchedMesh&&fe.batching===!1||!wt.isBatchedMesh&&fe.batching===!0||wt.isBatchedMesh&&fe.batchingColor===!0&&wt._colorsTexture===null||wt.isBatchedMesh&&fe.batchingColor===!1&&wt._colorsTexture!==null||wt.isInstancedMesh&&fe.instancing===!1||!wt.isInstancedMesh&&fe.instancing===!0||wt.isSkinnedMesh&&fe.skinning===!1||!wt.isSkinnedMesh&&fe.skinning===!0||wt.isInstancedMesh&&fe.instancingColor===!0&&wt.instanceColor===null||wt.isInstancedMesh&&fe.instancingColor===!1&&wt.instanceColor!==null||wt.isInstancedMesh&&fe.instancingMorph===!0&&wt.morphTexture===null||wt.isInstancedMesh&&fe.instancingMorph===!1&&wt.morphTexture!==null||fe.envMap!==Kt||St.fog===!0&&fe.fog!==$||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==Bt.numPlanes||fe.numIntersection!==Bt.numIntersection)||fe.vertexAlphas!==_e||fe.vertexTangents!==De||fe.morphTargets!==ue||fe.morphNormals!==Xe||fe.morphColors!==cn||fe.toneMapping!==$e||fe.morphTargetsCount!==zn||!!fe.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(He=!0):(He=!0,fe.__version=St.version);let Hi=fe.currentProgram;He===!0&&(Hi=Ms(St,ht,wt),z&&St.isNodeMaterial&&z.onUpdateProgram(St,Hi,fe));let as=!1,Ss=!1,za=!1,ln=Hi.getUniforms(),kn=fe.uniforms;if(R.useProgram(Hi.program)&&(as=!0,Ss=!0,za=!0),St.id!==D&&(D=St.id,Ss=!0),fe.needsLights){let pn=bs(y.state.lightProbeGridArray,wt);fe.lightProbeGrid!==pn&&(fe.lightProbeGrid=pn,Ss=!0)}if(as||B!==O){R.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),ln.setValue(et,"projectionMatrix",O.projectionMatrix),ln.setValue(et,"viewMatrix",O.matrixWorldInverse);let Ar=ln.map.cameraPosition;Ar!==void 0&&Ar.setValue(et,Ht.setFromMatrixPosition(O.matrixWorld)),H.logarithmicDepthBuffer&&ln.setValue(et,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(St.isMeshPhongMaterial||St.isMeshToonMaterial||St.isMeshLambertMaterial||St.isMeshBasicMaterial||St.isMeshStandardMaterial||St.isShaderMaterial)&&ln.setValue(et,"isOrthographic",O.isOrthographicCamera===!0),B!==O&&(B=O,Ss=!0,za=!0)}if(fe.needsLights&&(Un.state.sunShadowMap.length>0&&ln.setValue(et,"sunShadowMap",Un.state.sunShadowMap,W),Un.state.directionalShadowMap.length>0&&ln.setValue(et,"directionalShadowMap",Un.state.directionalShadowMap,W),Un.state.spotShadowMap.length>0&&ln.setValue(et,"spotShadowMap",Un.state.spotShadowMap,W),Un.state.pointShadowMap.length>0&&ln.setValue(et,"pointShadowMap",Un.state.pointShadowMap,W)),wt.isSkinnedMesh){ln.setOptional(et,wt,"bindMatrix"),ln.setOptional(et,wt,"bindMatrixInverse");let pn=wt.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),ln.setValue(et,"boneTexture",pn.boneTexture,W))}wt.isBatchedMesh&&(ln.setOptional(et,wt,"batchingTexture"),ln.setValue(et,"batchingTexture",wt._matricesTexture,W),ln.setOptional(et,wt,"batchingIdTexture"),ln.setValue(et,"batchingIdTexture",wt._indirectTexture,W),ln.setOptional(et,wt,"batchingColorTexture"),wt._colorsTexture!==null&&ln.setValue(et,"batchingColorTexture",wt._colorsTexture,W));let Tr=Dt.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&k.update(wt,Dt,Hi),(Ss||fe.receiveShadow!==wt.receiveShadow)&&(fe.receiveShadow=wt.receiveShadow,ln.setValue(et,"receiveShadow",wt.receiveShadow)),(St.isMeshStandardMaterial||St.isMeshLambertMaterial||St.isMeshPhongMaterial)&&St.envMap===null&&ht.environment!==null&&(kn.envMapIntensity.value=ht.environmentIntensity),kn.dfgLUT!==void 0&&(kn.dfgLUT.value=qb()),Ss){if(ln.setValue(et,"toneMappingExposure",P.toneMappingExposure),fe.needsLights&&di(kn,za),$&&St.fog===!0&&X.refreshFogUniforms(kn,$),X.refreshMaterialUniforms(kn,St,at,Z,y.state.transmissionRenderTarget[O.id]),fe.needsLights&&fe.lightProbeGrid){let pn=fe.lightProbeGrid;kn.probesSH.value=pn.texture,kn.probesMin.value.copy(pn.boundingBox.min),kn.probesMax.value.copy(pn.boundingBox.max),kn.probesResolution.value.copy(pn.resolution)}To.upload(et,js(fe),kn,W)}if(St.isShaderMaterial&&St.uniformsNeedUpdate===!0&&(To.upload(et,js(fe),kn,W),St.uniformsNeedUpdate=!1),St.isSpriteMaterial&&ln.setValue(et,"center",wt.center),ln.setValue(et,"modelViewMatrix",wt.modelViewMatrix),ln.setValue(et,"normalMatrix",wt.normalMatrix),ln.setValue(et,"modelMatrix",wt.matrixWorld),St.uniformsGroups!==void 0){let pn=St.uniformsGroups;for(let Ar=0,Ba=pn.length;Ar<Ba;Ar++){let ip=pn[Ar];Mt.update(ip,Hi),Mt.bind(ip,Hi)}}return Hi}function di(O,ht){O.ambientLightColor.needsUpdate=ht,O.lightProbe.needsUpdate=ht,O.sunLights.needsUpdate=ht,O.sunLightShadows.needsUpdate=ht,O.directionalLights.needsUpdate=ht,O.directionalLightShadows.needsUpdate=ht,O.pointLights.needsUpdate=ht,O.pointLightShadows.needsUpdate=ht,O.spotLights.needsUpdate=ht,O.spotLightShadows.needsUpdate=ht,O.rectAreaLights.needsUpdate=ht,O.hemisphereLights.needsUpdate=ht}function Bi(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(O,ht,Dt){let St=ot.get(O);St.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,St.__autoAllocateDepthBuffer===!1&&(St.__useRenderToTexture=!1),ot.get(O.texture).__webglTexture=ht,ot.get(O.depthTexture).__webglTexture=St.__autoAllocateDepthBuffer?void 0:Dt,St.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,ht){let Dt=ot.get(O);Dt.__webglFramebuffer=ht,Dt.__useDefaultFramebuffer=ht===void 0},this.setRenderTarget=function(O,ht=0,Dt=0){L=O,ct=ht,T=Dt;let St=null,wt=!1,$=!1;if(O){let Lt=ot.get(O);if(Lt.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(et.FRAMEBUFFER,Lt.__webglFramebuffer),b.copy(O.viewport),j.copy(O.scissor),it=O.scissorTest,R.viewport(b),R.scissor(j),R.setScissorTest(it),D=-1;return}else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(O);else if(Lt.__hasExternalTextures)W.rebindTextures(O,ot.get(O.texture).__webglTexture,ot.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let _e=O.depthTexture;if(Lt.__boundDepthTexture!==_e){if(_e!==null&&ot.has(_e)&&(O.width!==_e.image.width||O.height!==_e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(O)}}let $t=O.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&($=!0);let Kt=ot.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(Kt[ht])?St=Kt[ht][Dt]:St=Kt[ht],wt=!0):O.samples>0&&W.useMultisampledRTT(O)===!1?St=ot.get(O).__webglMultisampledFramebuffer:Array.isArray(Kt)?St=Kt[Dt]:St=Kt,b.copy(O.viewport),j.copy(O.scissor),it=O.scissorTest}else b.copy(gt).multiplyScalar(at).floor(),j.copy(Ut).multiplyScalar(at).floor(),it=ie;if(Dt!==0&&(St=U),R.bindFramebuffer(et.FRAMEBUFFER,St)&&R.drawBuffers(O,St),R.viewport(b),R.scissor(j),R.setScissorTest(it),wt){let Lt=ot.get(O.texture);et.framebufferTexture2D(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,et.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Lt.__webglTexture,Dt)}else if($){let Lt=ht;for(let $t=0;$t<O.textures.length;$t++){let Kt=ot.get(O.textures[$t]);et.framebufferTextureLayer(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0+$t,Kt.__webglTexture,Dt,Lt)}}else if(O!==null&&Dt!==0){let Lt=ot.get(O.texture);et.framebufferTexture2D(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,et.TEXTURE_2D,Lt.__webglTexture,Dt)}D=-1};function ca(O){let ht=ot.get(O);return(ht.__readFormat!==O.format||ht.__readType!==O.type)&&(ht.__readFormat=O.format,ht.__readType=O.type,ht.__formatReadable=H.textureFormatReadable(O.format),ht.__typeReadable=H.textureTypeReadable(O.type)),ht}this.readRenderTargetPixels=function(O,ht,Dt,St,wt,$,Pt,Lt=0){if(!(O&&O.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=ot.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Pt!==void 0&&($t=$t[Pt]),$t){R.bindFramebuffer(et.FRAMEBUFFER,$t);try{let Kt=O.textures[Lt],_e=Kt.format,De=Kt.type;O.textures.length>1&&et.readBuffer(et.COLOR_ATTACHMENT0+Lt);let ue=ca(Kt);if(ue.__formatReadable===!1){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ue.__typeReadable===!1){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ht>=0&&ht<=O.width-St&&Dt>=0&&Dt<=O.height-wt&&et.readPixels(ht,Dt,St,wt,Ft.convert(_e),Ft.convert(De),$)}finally{let Kt=L!==null?ot.get(L).__webglFramebuffer:null;R.bindFramebuffer(et.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(O,ht,Dt,St,wt,$,Pt,Lt=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=ot.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Pt!==void 0&&($t=$t[Pt]),$t)if(ht>=0&&ht<=O.width-St&&Dt>=0&&Dt<=O.height-wt){R.bindFramebuffer(et.FRAMEBUFFER,$t);let Kt=O.textures[Lt],_e=Kt.format,De=Kt.type;O.textures.length>1&&et.readBuffer(et.COLOR_ATTACHMENT0+Lt);let ue=ca(Kt);if(ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=et.createBuffer();et.bindBuffer(et.PIXEL_PACK_BUFFER,Xe),et.bufferData(et.PIXEL_PACK_BUFFER,$.byteLength,et.STREAM_READ),et.readPixels(ht,Dt,St,wt,Ft.convert(_e),Ft.convert(De),0),et.bindBuffer(et.PIXEL_PACK_BUFFER,null);let cn=L!==null?ot.get(L).__webglFramebuffer:null;R.bindFramebuffer(et.FRAMEBUFFER,cn);let $e=et.fenceSync(et.SYNC_GPU_COMMANDS_COMPLETE,0);return et.flush(),await lm(et,$e,4),et.bindBuffer(et.PIXEL_PACK_BUFFER,Xe),et.getBufferSubData(et.PIXEL_PACK_BUFFER,0,$),et.bindBuffer(et.PIXEL_PACK_BUFFER,null),et.deleteBuffer(Xe),et.deleteSync($e),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,ht=null,Dt=0){let St=Math.pow(2,-Dt),wt=Math.floor(O.image.width*St),$=Math.floor(O.image.height*St),Pt=ht!==null?ht.x:0,Lt=ht!==null?ht.y:0;W.setTexture2D(O,0),et.copyTexSubImage2D(et.TEXTURE_2D,Dt,0,0,Pt,Lt,wt,$),R.unbindTexture()},this.copyTextureToTexture=function(O,ht,Dt=null,St=null,wt=0,$=0){let Pt,Lt,$t,Kt,_e,De,ue,Xe,cn,$e=O.isCompressedTexture?O.mipmaps[$]:O.image;if(Dt!==null)Pt=Dt.max.x-Dt.min.x,Lt=Dt.max.y-Dt.min.y,$t=Dt.isBox3?Dt.max.z-Dt.min.z:1,Kt=Dt.min.x,_e=Dt.min.y,De=Dt.isBox3?Dt.min.z:0;else{let kn=Math.pow(2,-wt);Pt=Math.floor($e.width*kn),Lt=Math.floor($e.height*kn),O.isDataArrayTexture?$t=$e.depth:O.isData3DTexture?$t=Math.floor($e.depth*kn):$t=1,Kt=0,_e=0,De=0}St!==null?(ue=St.x,Xe=St.y,cn=St.z):(ue=0,Xe=0,cn=0);let en=Ft.convert(ht.format),zn=Ft.convert(ht.type),fe;ht.isData3DTexture?(W.setTexture3D(ht,0),fe=et.TEXTURE_3D):ht.isDataArrayTexture||ht.isCompressedArrayTexture?(W.setTexture2DArray(ht,0),fe=et.TEXTURE_2D_ARRAY):(W.setTexture2D(ht,0),fe=et.TEXTURE_2D),R.activeTexture(et.TEXTURE0),R.pixelStorei(et.UNPACK_FLIP_Y_WEBGL,ht.flipY),R.pixelStorei(et.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),R.pixelStorei(et.UNPACK_ALIGNMENT,ht.unpackAlignment);let Un=R.getParameter(et.UNPACK_ROW_LENGTH),He=R.getParameter(et.UNPACK_IMAGE_HEIGHT),Hi=R.getParameter(et.UNPACK_SKIP_PIXELS),as=R.getParameter(et.UNPACK_SKIP_ROWS),Ss=R.getParameter(et.UNPACK_SKIP_IMAGES);R.pixelStorei(et.UNPACK_ROW_LENGTH,$e.width),R.pixelStorei(et.UNPACK_IMAGE_HEIGHT,$e.height),R.pixelStorei(et.UNPACK_SKIP_PIXELS,Kt),R.pixelStorei(et.UNPACK_SKIP_ROWS,_e),R.pixelStorei(et.UNPACK_SKIP_IMAGES,De);let za=O.isDataArrayTexture||O.isData3DTexture,ln=ht.isDataArrayTexture||ht.isData3DTexture;if(O.isDepthTexture){let kn=ot.get(O),Tr=ot.get(ht),pn=ot.get(kn.__renderTarget),Ar=ot.get(Tr.__renderTarget);R.bindFramebuffer(et.READ_FRAMEBUFFER,pn.__webglFramebuffer),R.bindFramebuffer(et.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let Ba=0;Ba<$t;Ba++)za&&(et.framebufferTextureLayer(et.READ_FRAMEBUFFER,et.COLOR_ATTACHMENT0,ot.get(O).__webglTexture,wt,De+Ba),et.framebufferTextureLayer(et.DRAW_FRAMEBUFFER,et.COLOR_ATTACHMENT0,ot.get(ht).__webglTexture,$,cn+Ba)),et.blitFramebuffer(Kt,_e,Pt,Lt,ue,Xe,Pt,Lt,et.DEPTH_BUFFER_BIT,et.NEAREST);R.bindFramebuffer(et.READ_FRAMEBUFFER,null),R.bindFramebuffer(et.DRAW_FRAMEBUFFER,null)}else if(wt!==0||O.isRenderTargetTexture||ot.has(O)){let kn=ot.get(O),Tr=ot.get(ht);R.bindFramebuffer(et.READ_FRAMEBUFFER,V),R.bindFramebuffer(et.DRAW_FRAMEBUFFER,Y);for(let pn=0;pn<$t;pn++)za?et.framebufferTextureLayer(et.READ_FRAMEBUFFER,et.COLOR_ATTACHMENT0,kn.__webglTexture,wt,De+pn):et.framebufferTexture2D(et.READ_FRAMEBUFFER,et.COLOR_ATTACHMENT0,et.TEXTURE_2D,kn.__webglTexture,wt),ln?et.framebufferTextureLayer(et.DRAW_FRAMEBUFFER,et.COLOR_ATTACHMENT0,Tr.__webglTexture,$,cn+pn):et.framebufferTexture2D(et.DRAW_FRAMEBUFFER,et.COLOR_ATTACHMENT0,et.TEXTURE_2D,Tr.__webglTexture,$),wt!==0?et.blitFramebuffer(Kt,_e,Pt,Lt,ue,Xe,Pt,Lt,et.COLOR_BUFFER_BIT,et.NEAREST):ln?et.copyTexSubImage3D(fe,$,ue,Xe,cn+pn,Kt,_e,Pt,Lt):et.copyTexSubImage2D(fe,$,ue,Xe,Kt,_e,Pt,Lt);R.bindFramebuffer(et.READ_FRAMEBUFFER,null),R.bindFramebuffer(et.DRAW_FRAMEBUFFER,null)}else ln?O.isDataTexture||O.isData3DTexture?et.texSubImage3D(fe,$,ue,Xe,cn,Pt,Lt,$t,en,zn,$e.data):ht.isCompressedArrayTexture?et.compressedTexSubImage3D(fe,$,ue,Xe,cn,Pt,Lt,$t,en,$e.data):et.texSubImage3D(fe,$,ue,Xe,cn,Pt,Lt,$t,en,zn,$e):O.isDataTexture?et.texSubImage2D(et.TEXTURE_2D,$,ue,Xe,Pt,Lt,en,zn,$e.data):O.isCompressedTexture?et.compressedTexSubImage2D(et.TEXTURE_2D,$,ue,Xe,$e.width,$e.height,en,$e.data):et.texSubImage2D(et.TEXTURE_2D,$,ue,Xe,Pt,Lt,en,zn,$e);R.pixelStorei(et.UNPACK_ROW_LENGTH,Un),R.pixelStorei(et.UNPACK_IMAGE_HEIGHT,He),R.pixelStorei(et.UNPACK_SKIP_PIXELS,Hi),R.pixelStorei(et.UNPACK_SKIP_ROWS,as),R.pixelStorei(et.UNPACK_SKIP_IMAGES,Ss),$===0&&ht.generateMipmaps&&et.generateMipmap(fe),R.unbindTexture()},this.initRenderTarget=function(O){ot.get(O).__webglFramebuffer===void 0&&W.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?W.setTextureCube(O,0):O.isData3DTexture?W.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?W.setTexture2DArray(O,0):W.setTexture2D(O,0),R.unbindTexture()},this.resetState=function(){ct=0,T=0,L=null,R.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ye._getUnpackColorSpace()}};function vi(n=1){let t=n>>>0,e={seed(i){t=i>>>0},next(){t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296},range(i,s){return i+(s-i)*e.next()},int(i,s){return i+Math.floor((s-i+1)*e.next())},pick(i){return i[Math.floor(e.next()*i.length)]},chance(i){return e.next()<i},get state(){return t}};return e}var Oe=vi(1),_t=vi(7);function le(n,t=0,e=0){let i=Math.imul(n|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,2147483647);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}var vu=new Map;function oe(n,t){let e=vu.get(n);return e||vu.set(n,e=[]),e.push(t),()=>Xb(n,t)}function Xb(n,t){let e=vu.get(n),i=e?e.indexOf(t):-1;i>=0&&e.splice(i,1)}function Pe(n,t){let e=vu.get(n);if(e)for(let i=0;i<e.length;i++)e[i](t)}var $b=n=>typeof matchMedia=="function"&&matchMedia(n).matches,Gm=typeof navigator>"u"?"":navigator.userAgent||"",Gr=$b("(pointer: coarse)")||/Android|iPhone|iPad|iPod|Mobile/i.test(Gm)||/Macintosh/.test(Gm)&&typeof navigator<"u"&&navigator.maxTouchPoints>1,Wm=76,qm=72,yu=(n,t)=>[Wm-n*Math.cos(t*Math.PI/180),qm+n*Math.sin(t*Math.PI/180)],Rf=[["musou","Surge",58,yu(152,118)],["dodge","Dodge",56,yu(86,86)],["jump","Jump",56,yu(86,137)],["charge","Charge",62,yu(86,188)],["attack","Attack",84,[Wm,qm]]],Ro={R:54,knob:44,rest:[118,132]},Cf=.12,Yb=.85,Kb=14,Zb=1.25,Gc="#f5c34e",jb=`
.g6t, .g6t-rot { -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; }
.g6t { position: fixed; inset: 0; z-index: 1; pointer-events: none; overflow: hidden; }
.g6t[hidden], .g6t-rot[hidden], .g6t [hidden], .g6t-rot [hidden] { display: none !important; }
.g6t-zone { position: absolute; top: 0; bottom: 0; pointer-events: auto; touch-action: none; }
.g6t-l { left: 0; width: 50%; }
.g6t-r { left: 50%; right: 0; }
.g6t-stick { position: absolute; width: calc(var(--R) * 2); height: calc(var(--R) * 2); margin: calc(var(--R) * -1) 0 0 calc(var(--R) * -1);
  border-radius: 50%; pointer-events: none; background: radial-gradient(closest-side, rgba(16,11,9,.12) 40%, rgba(16,11,9,.42));
  box-shadow: 0 0 0 2px rgba(8,5,4,.8), inset 0 0 0 1.5px rgba(244,234,216,.3); }
.g6t-stick b { position: absolute; left: 50%; top: 50%; width: var(--K); height: var(--K); margin: calc(var(--K) / -2) 0 0 calc(var(--K) / -2);
  border-radius: 50%; background: rgba(244,234,216,.5); box-shadow: 0 0 0 2px rgba(8,5,4,.88), 0 2px 6px rgba(0,0,0,.4); }
.g6t-live { left: 0; top: 0; will-change: transform; }
.g6t-live b { will-change: transform; }
.g6t-rest { opacity: .5; }
.g6t-b, .g6t-rest { transition: opacity .25s ease-out; }
.g6t.mu .g6t-b, .g6t.mu .g6t-rest { opacity: .25; }
.g6t-b { position: absolute; margin: 0; padding: 0; border: 0; border-radius: 50%; background: none; outline: none; color: #f4ead8;
  pointer-events: auto; touch-action: none; cursor: pointer; }
.g6t-b i { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; border-radius: 50%;
  font: 800 var(--fs)/1 "G6UI", "Avenir Next", "Helvetica Neue", sans-serif; font-style: normal; letter-spacing: .06em; text-transform: uppercase;
  background: rgba(16,11,9,.46); text-shadow: 0 1px 2px rgba(0,0,0,.9);
  box-shadow: 0 0 0 2px rgba(8,5,4,.9), inset 0 0 0 1.5px rgba(244,234,216,.32), 0 3px 10px rgba(0,0,0,.35);
  transition: transform 120ms ease-out, background-color 120ms ease-out; }
.g6t-b[data-a="attack"] i { background: rgba(16,11,9,.52); box-shadow: 0 0 0 2px rgba(8,5,4,.9), inset 0 0 0 2px rgba(244,234,216,.42), 0 3px 12px rgba(0,0,0,.4); }
.g6t-b.on i { transform: scale(.9); background: rgba(244,234,216,.32); transition: none; }   /* instant press, eased release */
.g6t-b[data-a="musou"] i { color: rgba(244,234,216,.6); }
.g6t-b[data-a="musou"].ready i { color: ${Gc}; background: rgba(46,30,6,.62);
  box-shadow: 0 0 0 2px rgba(8,5,4,.92), inset 0 0 0 2px ${Gc}, 0 0 14px 2px rgba(245,195,78,.65); animation: g6t-glow 1.1s ease-in-out infinite alternate; }
.g6t-b[data-a="musou"].ready.on i { background: rgba(245,195,78,.4); }
@keyframes g6t-glow { to { box-shadow: 0 0 0 2px rgba(8,5,4,.92), inset 0 0 0 2px #ffe092, 0 0 24px 6px rgba(245,195,78,.9); } }
.g6t-pause { position: absolute; left: 50%; top: calc(env(safe-area-inset-top, 0px) + 4px); width: 48px; height: 48px; margin: 0 0 0 -24px;
  padding: 0; border: 0; background: none; outline: none; pointer-events: auto; touch-action: none; cursor: pointer; }
.g6t-pause i { position: absolute; inset: 6px; border-radius: 50%; background: rgba(16,11,9,.46);
  box-shadow: 0 0 0 2px rgba(8,5,4,.9), inset 0 0 0 1.5px rgba(244,234,216,.32); }
.g6t-pause i::before, .g6t-pause i::after { content: ""; position: absolute; top: 11px; bottom: 11px; width: 4px; border-radius: 1px; background: #f4ead8;
  box-shadow: 0 0 0 1px rgba(8,5,4,.5); }
.g6t-pause i::before { left: 13px; } .g6t-pause i::after { right: 13px; }
.g6t-pause:active i { background: rgba(244,234,216,.32); }
.g6t-rot { position: fixed; inset: 0; z-index: 30; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px;
  padding: calc(env(safe-area-inset-top, 0px) + 24px) 28px calc(env(safe-area-inset-bottom, 0px) + 24px); text-align: center; touch-action: none;
  color: #f4ead8; background: radial-gradient(ellipse 90% 60% at 50% 42%, #2e2016, #120c09 72%); font-family: "G6UI", "Avenir Next", "Helvetica Neue", sans-serif; }
.g6t-rot svg { width: 112px; height: 112px; margin-bottom: 6px; overflow: visible; }
.g6t-rot .ph { transform-box: view-box; transform-origin: 60px 60px; animation: g6t-turn 2.8s cubic-bezier(.6,0,.3,1) infinite; }
@keyframes g6t-turn { 0%, 22% { transform: rotate(0); opacity: 1; } 48%, 86% { transform: rotate(-90deg); opacity: 1; } 96% { transform: rotate(-90deg); opacity: 0; } 100% { transform: rotate(0); opacity: 0; } }
.g6t-rot b { font: 900 38px/.98 "G6Display", "Barlow Condensed", "Arial Narrow", sans-serif; text-transform: uppercase; letter-spacing: .01em; max-width: 9em; }
.g6t-rot p { margin: 0; font-size: 15px; line-height: 1.45; font-weight: 500; color: rgba(244,234,216,.72); max-width: 22em; }
.g6t-rot button { margin-top: 10px; min-height: 48px; padding: 0 28px; border: 0; border-radius: 999px; background: ${Gc}; color: #1a120d;
  font: 800 16px/1 "G6UI", "Avenir Next", "Helvetica Neue", sans-serif; letter-spacing: .02em; box-shadow: 0 0 0 2px #0a0706, 0 6px 18px rgba(0,0,0,.45); cursor: pointer; }
.g6t-rot button:active { filter: brightness(.92); }
@media (prefers-reduced-motion: reduce) {
  .g6t-b[data-a="musou"].ready i, .g6t-rot .ph { animation: none; }
  .g6t-rot .ph { transform: rotate(-90deg); }
}
html.g6-touch, html.g6-touch body { overscroll-behavior: none; touch-action: none; }   /* no pull-to-refresh, double-tap or pinch zoom */`,Jb=`<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M22 50 A40 40 0 0 1 50 20" stroke-width="4" stroke="${Gc}"/><path d="M40 16 L51 20 L46 31" stroke-width="4" stroke="${Gc}"/>
  <g class="ph"><rect x="40" y="18" width="40" height="84" rx="9" stroke-width="5"/><path d="M55 27h10" stroke-width="4"/></g></svg>`;function Xm(n){let t=typeof document>"u"?null:document,e=null,i={get el(){return e},shown:!1,setMusouReady(){},reset(){}};if(!t)return i;let s=Gr,r=!1,a=!1,l=1,c,o,u,f,h,d,p,x={},_=new Map,g={},A=t.getElementById("menu"),E=(b,j,it)=>{let J=t.createElement(b);return j&&(J.className=j),it&&it.appendChild(J),J};function m(){if(r)return;r=!0;let b=E("style");b.id="g6-touch-css",b.textContent=jb,t.head.appendChild(b),e=E("div","g6t"),e.hidden=!0,o=E("div","g6t-zone g6t-l",e),u=E("div","g6t-zone g6t-r",e),f=E("div","g6t-stick g6t-rest",e),E("b","",f),h=E("div","g6t-stick g6t-live",e),d=E("b","",h),h.hidden=!0;for(let[J,vt]of Rf){let Nt=E("button","g6t-b",e);Nt.type="button",Nt.tabIndex=-1,Nt.dataset.a=J,Nt.setAttribute("aria-label",vt),E("i","",Nt).textContent=vt,x[J]=Nt}x.musou.classList.toggle("ready",a),p=E("button","g6t-pause",e),p.type="button",p.tabIndex=-1,p.setAttribute("aria-label","Pause"),E("i","",p),p.addEventListener("click",T),c=E("div","g6t-rot"),c.hidden=!0,c.setAttribute("role","dialog"),c.setAttribute("aria-label","Turn your phone sideways");let j=Math.min(screen.width,screen.height)>=600;c.innerHTML=`${Jb}<b>Turn your ${j?"tablet":"phone"} sideways</b><p>The battle plays in landscape.</p>`;let it=t.documentElement;if(it.requestFullscreen||it.webkitRequestFullscreen||screen.orientation&&screen.orientation.lock){let J=E("button","",c);J.type="button",J.textContent="Play in landscape",J.addEventListener("click",L)}e.addEventListener("pointerdown",P),e.addEventListener("pointermove",C);for(let J of["pointerup","pointercancel","lostpointercapture"])e.addEventListener(J,z);t.body.append(e,c),w()}let v=b=>`${(b*l).toFixed(1)}px`,y=(b,j)=>`calc(env(safe-area-inset-${b}, 0px) + ${v(j)})`;function w(){if(r){l=Math.min(1.3,Math.max(.82,innerHeight/390)),e.style.setProperty("--R",v(Ro.R)),e.style.setProperty("--K",v(Ro.knob)),f.style.left=y("left",Ro.rest[0]),f.style.top="auto",f.style.bottom=y("bottom",Ro.rest[1]-Ro.R),f.style.marginTop="0";for(let[b,,j,[it,J]]of Rf){let vt=x[b].style;vt.width=vt.height=v(j),vt.right=y("right",it-j/2),vt.bottom=y("bottom",J-j/2),vt.setProperty("--fs",`${Math.max(9,(b==="attack"?14:10.5)*l).toFixed(1)}px`)}}}function M(b,j){let it=null,J=1/0;for(let[vt]of Rf){let Nt=x[vt].getBoundingClientRect(),Z=Nt.width/2,at=Math.hypot(b-(Nt.left+Z),j-(Nt.top+Z))-Z;at<Kb*l&&at<J&&(J=at,it=vt)}return it}let S=b=>{for(let j of _.values())if(j.k===b)return!0;return!1};function P(b){if(b.pointerType==="mouse")return;let j=b.target,it=j.closest&&j.closest(".g6t-b"),J=null;if(it)J={k:"btn",a:it.dataset.a};else{if(b.pointerType!=="touch")return;if(j===o)J=S("stick")?null:{k:"stick",ox:b.clientX,oy:b.clientY};else if(j===u){let vt=M(b.clientX,b.clientY);J=vt?{k:"btn",a:vt}:S("look")?null:{k:"look",x:b.clientX}}}if(J){b.preventDefault();try{j.setPointerCapture(b.pointerId)}catch{}_.set(b.pointerId,J),J.k==="btn"?U(J.a,!0):J.k==="stick"&&(f.hidden=!0,h.hidden=!1,V(J,b.clientX,b.clientY))}}function C(b){let j=_.get(b.pointerId);j&&(j.k==="stick"?V(j,b.clientX,b.clientY):j.k==="look"&&(n.orbit((b.clientX-j.x)*Zb),j.x=b.clientX))}function z(b){let j=_.get(b.pointerId);j&&(_.delete(b.pointerId),j.k==="btn"?U(j.a,!1):j.k==="stick"&&Y())}function U(b,j){let it=(g[b]||0)+(j?1:-1);g[b]=Math.max(0,it),j&&it===1?(n.down(b),x[b].classList.add("on")):!j&&it<=0&&(n.up(b),x[b].classList.remove("on"))}function V(b,j,it){let J=Ro.R*l,vt=j-b.ox,Nt=it-b.oy,Z=Math.hypot(vt,Nt);Z>J&&(b.ox=j-vt/Z*J,b.oy=it-Nt/Z*J,vt=j-b.ox,Nt=it-b.oy,Z=J);let at=Z<=Cf*J?0:Math.min(1,.12+.88*(Z-Cf*J)/((Yb-Cf)*J));n.stick(at?vt/Z*at:0,at?-Nt/Z*at:0),h.style.transform=`translate3d(${b.ox.toFixed(1)}px, ${b.oy.toFixed(1)}px, 0)`,d.style.transform=`translate3d(${vt.toFixed(1)}px, ${Nt.toFixed(1)}px, 0)`}function Y(){n.stick(0,0),r&&(h.hidden=!0,f.hidden=!1,d.style.transform="")}function ct(){for(let b of _.values())b.k==="btn"&&U(b.a,!1);_.clear();for(let b in g)g[b]&&(g[b]=0,n.up(b),x[b]&&x[b].classList.remove("on"));Y()}function T(){for(let b of["keydown","keyup"])dispatchEvent(new KeyboardEvent(b,{key:"Escape",code:"Escape",bubbles:!0}))}async function L(){let b=t.documentElement;try{!t.fullscreenElement&&!t.webkitFullscreenElement&&(b.requestFullscreen?await b.requestFullscreen({navigationUI:"hide"}):b.webkitRequestFullscreen&&b.webkitRequestFullscreen())}catch{}try{await screen.orientation.lock("landscape")}catch{}}function D(){let b=Gr&&innerHeight>innerWidth;s&&m(),b&&s&&A&&A.hidden&&T();let j=s&&!b&&(!A||A.hidden);t.documentElement.classList.toggle("g6-touch",s),r&&(c.hidden=!b,e.hidden===j&&(e.hidden=!j)),!j&&i.shown&&ct(),i.shown=j}addEventListener("pointerdown",b=>{b.pointerType==="touch"&&!s?(s=!0,D()):b.pointerType==="mouse"&&s&&!Gr&&(s=!1,D())},!0),addEventListener("resize",()=>{w(),D()}),t.addEventListener("visibilitychange",()=>{t.hidden&&ct()}),A&&new MutationObserver(D).observe(A,{attributes:!0,attributeFilter:["hidden"]});let B=b=>()=>{r&&e.classList.toggle("mu",b)};return oe("musou:start",B(!0)),oe("musou:end",B(!1)),oe("scenario",B(!1)),D(),i.reset=ct,i.setMusouReady=b=>{b=!!b,b!==a&&(a=b,r&&x.musou.classList.toggle("ready",b))},i}var If=["attack","charge","jump","dodge","musou"],$m={KeyJ:"attack",KeyK:"charge",Space:"jump",KeyL:"dodge",ShiftLeft:"dodge",ShiftRight:"dodge",KeyI:"musou"},Qb={KeyW:[0,1],ArrowUp:[0,1],KeyS:[0,-1],ArrowDown:[0,-1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]},t3={0:"jump",2:"attack",3:"charge",1:"musou",5:"dodge",7:"dodge"};function Ym(){let n={held:{},latch:{},keys:new Set,orbitPx:0,pad:{},vheld:{},sx:0,sy:0,orbitK:1},t={mx:0,my:0,orbit:0,pressed:{},held:{}},e=Xm({down(l){If.includes(l)&&!n.vheld[l]&&(n.vheld[l]=!0,n.latch[l]=!0)},up(l){n.vheld[l]=!1},stick(l,c){n.sx=l,n.sy=c},orbit(l){n.orbitPx+=l}});addEventListener("keydown",l=>{(l.code==="Space"||l.code.startsWith("Arrow"))&&l.preventDefault(),n.keys.add(l.code);let c=$m[l.code];c&&!l.repeat&&(n.held[c]=!0,n.latch[c]=!0)}),addEventListener("keyup",l=>{n.keys.delete(l.code);let c=$m[l.code];c&&(n.held[c]=!1)}),addEventListener("blur",()=>{n.keys.clear();for(let l of If)n.held[l]=!1;e.reset()});let i=!1,s=0;addEventListener("contextmenu",l=>l.preventDefault()),addEventListener("pointerdown",l=>{if(l.pointerType==="touch"||l.target.closest&&l.target.closest("button,a,input"))return;let c=l.button===0?"attack":l.button===2?"charge":null;c&&(n.held[c]=!0,n.latch[c]=!0),i=!0,s=l.clientX}),addEventListener("pointerup",l=>{if(l.pointerType==="touch")return;let c=l.button===0?"attack":l.button===2?"charge":null;c&&(n.held[c]=!1),i=!1}),addEventListener("pointermove",l=>{l.pointerType!=="touch"&&i&&(n.orbitPx+=l.clientX-s,s=l.clientX)});function r(){let l=navigator.getGamepads?navigator.getGamepads():[],c=l&&l[0];if(!c)return null;for(let[o,u]of Object.entries(t3)){let f=!!(c.buttons[o]&&c.buttons[o].pressed);f&&!n.pad[o]&&(n.latch[u]=!0),n.pad[o]=f}return c}function a(){let l=n.sx,c=n.sy,o=0,u=r();for(let h of n.keys){let d=Qb[h];d&&(l+=d[0],c+=d[1])}if(u){let h=d=>Math.abs(d)<.18?0:d;l+=h(u.axes[0]||0),c-=h(u.axes[1]||0),o+=h(u.axes[2]||0)*.05}n.keys.has("KeyQ")&&(o+=.04),n.keys.has("KeyE")&&(o-=.04),o-=n.orbitPx*.006,n.orbitPx=0,o*=n.orbitK;for(let h of If)t.pressed[h]=!!n.latch[h],t.held[h]=!!n.held[h]||!!n.vheld[h],n.latch[h]=!1;let f=Math.hypot(l,c);return f>1&&(l/=f,c/=f),t.mx=l,t.my=c,t.orbit=o,t}return{sample:a,touch:e,setMusouReady(l){e.setMusouReady(l)},setOrbitScale(l){n.orbitK=l}}}var _u=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},e3=new kr(-1,1,1,-1,0,1),Pf=class extends hn{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}},n3=new Pf,Wr=class{constructor(t){this._mesh=new Re(n3,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,e3)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Mu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Km={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Co=class n extends _u{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new xe(t.x,t.y):new xe(256,256),this.clearColor=new Qt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new In(r,a,{type:$n,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new In(r,a,{type:$n,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let h=new In(r,a,{type:$n,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let l=Km;this.highPassUniforms=_a.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new xe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let o=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=o,this.bloomTintColors=[new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=_a.clone(Mu.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:Mu.vertexShader,fragmentShader:Mu.fragmentShader,premultipliedAlpha:!0,blending:ii,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qt,this._oldClearAlpha=1,this._basic=new an,this._fsQuad=new Wr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new xe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),l=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<t;a+=2){let l=e[a],c=a+1<t?e[a+1]:0,o=l+c;s.push((a*l+(a+1)*c)/o),r.push(o)}return new on({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new xe(.5,.5)},direction:{value:new xe(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new on({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Co.BlurDirectionX=new xe(1,0);Co.BlurDirectionY=new xe(0,1);var i3=54e4,Gn={exposure:1.22,tmContrast:3.3,tmShoulder:.97,tmMidIn:.11,tmMidOut:.1,tmMax:5,knee:.75,hotDesat:.25,sat:1.22,lift:.006,shadowTint:[.9,.93,1.12],highTint:[1.12,1,.74],tintLo:.02,tintHi:.4,hazeCool:[.1,.11,.17],hazeWarm:[.34,.2,.15],sunGlow:[.9,.6,.35],sunGlowGeo:.8,inscatter:[.02,.011,.005],sunBurst:[.1,.06,.025],inscatterDist:60,hazeStart:9,hazeDensity:.006,hazeMax:.06,skyHaze:.3,skyGain:.5,farGain:.45,nearBlur:26,farBlur:.6,bandNear:1.4,bandFar:5,bloom:.6,bloomRadius:.1,bloomThreshold:1.5,bloomKnee:.5,bloomCool:1.5,hdrClamp:2.5,sharpen:.35,streak:.05,rowNoise:.018,ca:1.3,grain:.03,levels:40,dither:.8,vignette:.18,bottom:.25},Zm=n=>"u"+n[0].toUpperCase()+n.slice(1),s3=()=>Object.fromEntries(Object.entries(Gn).map(([n,t])=>[Zm(n),{value:Array.isArray(t)?new q(...t):t}])),Lf=n=>{for(let t in Gn){let e=n[Zm(t)];Array.isArray(Gn[t])?e.value.set(...Gn[t]):e.value=Gn[t]}},r3="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",jm=`
  uniform float uFocus, uNearBlur, uNearScale, uFarBlur, uFarScale, uBandN, uBandF;
  float coc(float d) {
    float fn = max(uFocus - uBandN, 0.4), ff = uFocus + uBandF;
    return max(clamp((fn / d - 1.0) * uNearBlur * uNearScale, 0.0, 12.0), clamp((1.0 - ff / d) * uFarBlur * uFarScale, 0.0, 12.0));
  }`,a3=`
  uniform sampler2D tColor, tDepth; uniform mat4 uProjInv, uCamWorld; uniform vec3 uSunDir, uCamPos;
  uniform vec3 uHazeCool, uHazeWarm, uSunGlow, uInscatter, uSunBurst; uniform float uSunGlowGeo, uSkyGain, uFarGain, uHazeStart, uHazeDensity, uHazeMax, uSkyHaze, uHdrClamp, uInscatterDist;
  varying vec2 vUv;
  void main() {
    float z = texture2D(tDepth, vUv).x;
    vec4 v = uProjInv * vec4(vUv * 2.0 - 1.0, z * 2.0 - 1.0, 1.0); v.xyz /= v.w;
    vec3 dir = normalize(mat3(uCamWorld) * v.xyz);
    bool sky = z >= 0.99999;
    float dist = sky ? 5000.0 : length(v.xyz);
    // graduated exposure: fully fogged distance and sky sit a stop lower, so close-ups against the horizon read as a
    // sunset gradient instead of a white-out
    vec3 c = texture2D(tColor, vUv).rgb * (sky ? uSkyGain : mix(1.0, uFarGain, smoothstep(60.0, 250.0, dist)));
    float mu = dot(dir, uSunDir);
    vec3 hz = mix(uHazeCool, uHazeWarm, smoothstep(-0.4, 0.95, mu)) + uSunGlow * pow(max(mu, 0.0), 10.0) * (sky ? 1.0 : uSunGlowGeo);  // backlit walls stay silhouettes
    float wy = uCamPos.y + dir.y * min(dist, 400.0);                      // height of the hit point: dust hugs the ground
    float a = (1.0 - exp(-max(dist - uHazeStart, 0.0) * uHazeDensity)) * mix(0.6, 1.0, exp(-max(wy, 0.0) / 14.0));
    if (sky) a = uSkyHaze * (1.0 - smoothstep(0.0, 0.4, dir.y));
    c = mix(c, hz, a * uHazeMax * (1.0 - smoothstep(0.9, 2.0, max(c.r, max(c.g, c.b)))));   // fires stay fire through the haze
    // backlit dust: sunlight scattered forward by the air between the camera and the hit point (lifts the sun side
    // of the frame; additive and growing with distance, so near silhouettes stay readable)
    // (broad lift, plus a tight golden burst around the sun that only builds up over long distances: the concept's
    // glowing sky behind the castle, while the backlit wall itself stays a legible silhouette)
    float dd = min(dist, 400.0);
    c += uInscatter * pow(max(mu, 0.0), 4.0) * (1.0 - exp(-dd / uInscatterDist)) + uSunBurst * pow(max(mu, 0.0), 16.0) * (1.0 - exp(-dd / (3.0 * uInscatterDist)));
    // tame stacked additive fire before bloom; hue-preserving (scale, not per-channel clip) so flames stay orange
    float cm = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * min(1.0, uHdrClamp / max(cm, 1e-4)), dist);
  }`,o3=`
  uniform sampler2D tAtmos; uniform vec2 uTexel;
  varying vec2 vUv;
  ${jm}
  #define RAD_SCALE 0.85
  void main() {
    vec4 c0 = texture2D(tAtmos, vUv);
    float cSize = coc(c0.a);
    vec3 col = c0.rgb; float tot = 1.0, fg = 0.0, radius = RAD_SCALE;
    for (float ang = 0.0; radius < 12.0; ang += 2.39996323) {
      vec2 dv = vec2(cos(ang), sin(ang)); dv /= max(abs(dv.x), abs(dv.y));   // square bokeh: soft voxel blocks
      vec4 s = texture2D(tAtmos, vUv + dv * uTexel * radius);
      float sSize = coc(s.a);
      if (s.a > c0.a) sSize = clamp(sSize, 0.0, cSize * 2.0);
      float m = smoothstep(radius - 0.5, radius + 0.5, sSize);
      col += mix(col / tot, s.rgb, m); tot += 1.0;
      fg += s.a < c0.a - 0.5 ? m : 0.0;                                    // blurred foreground spilling over us
      radius += RAD_SCALE / radius;
    }
    gl_FragColor = vec4(col / tot, clamp(fg / tot * 4.0, 0.0, 1.0));
  }`,c3=`
  uniform sampler2D tSharp, tDof, tBloom; uniform vec2 uRes; uniform float uTime, uFlash;
  uniform float uExposure, uTmContrast, uTmShoulder, uTmB, uTmC, uKnee, uHotDesat, uSat, uLift, uTintLo, uTintHi, uSharpen, uStreak, uRowNoise, uCa, uGrain, uLevels, uDither, uVignette, uBottom;
  uniform vec3 uShadowTint, uHighTint;
  varying vec2 vUv;
  ${jm}
  float bayer4(vec2 p) {
    int i = int(mod(p.x, 4.0)) + int(mod(p.y, 4.0)) * 4;
    int m[16] = int[16](0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5);
    return (float(m[i]) + 0.5) / 16.0 - 0.5;
  }
  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  // scene colour at uv: full-res sharp where in focus (lightly unsharp-masked: crisp voxel edges), half-res bokeh where
  // the pixel's own depth is out of focus or a blurred foreground covers it; + bloom
  vec3 scene(vec2 uv) {
    vec2 t = 1.0 / uRes;
    vec4 s = texture2D(tSharp, uv);
    vec3 nb = texture2D(tSharp, uv + vec2(t.x, 0.0)).rgb + texture2D(tSharp, uv - vec2(t.x, 0.0)).rgb
            + texture2D(tSharp, uv + vec2(0.0, t.y)).rgb + texture2D(tSharp, uv - vec2(0.0, t.y)).rgb;
    vec3 sharp = max(s.rgb + (s.rgb - nb * 0.25) * uSharpen, 0.0);
    vec4 b = texture2D(tDof, uv);
    float k = max(smoothstep(0.3, 1.3, coc(s.a)), b.a);
    return mix(sharp, b.rgb, k) + texture2D(tBloom, uv).rgb;
  }
  void main() {
    vec2 d = vUv - 0.5;
    // light lateral chromatic fringe toward the edges
    vec2 ca = vec2(uCa * dot(d, d) * 4.0 / uRes.x, 0.0);
    vec3 c = vec3(scene(vUv + ca).r, scene(vUv).g, scene(vUv - ca).b);
    // faint horizontal streaks: highlights smear sideways (tape / anamorphic feel), plus low row-to-row jitter
    vec3 st = vec3(0.0);
    for (int i = 1; i <= 6; i++) {
      float o = (float(i * i) + 1.0) * 2.0 / uRes.x, w = 1.0 / float(i);
      st += (max(texture2D(tDof, vUv + vec2(o, 0.0)).rgb - 1.0, 0.0) + max(texture2D(tDof, vUv - vec2(o, 0.0)).rgb - 1.0, 0.0)) * w;
    }
    c += st * uStreak * vec3(1.0, 0.86, 0.7);
    c *= 1.0 + (hash(vec2(floor(gl_FragCoord.y * 0.5), floor(uTime * 12.0))) - 0.5) * uRowNoise;
    // golden-hour grade in scene-linear (before the curve, so its shoulder also rolls off the tinted highlights):
    // split tone \u2014 cool mauve-blue shade, peach-gold light; blue-dominant pixels (spear arc, tassel, teal trim) keep
    // their cool, the arc is the one cool light in the frame \u2014 then saturation
    c *= uExposure;
    float L = max(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1e-6);
    float cool = smoothstep(0.0, 0.25, (c.b - c.r) / max(c.b, 1e-4));
    // (emissive-hot light \u2014 musou burst, flashes \u2014 fades back to neutral so it still burns to white, not cream)
    c *= mix(mix(uShadowTint, mix(uHighTint, vec3(0.97, 1.0, 1.06), cool), smoothstep(uTintLo, uTintHi, L)), vec3(1.0), smoothstep(1.2, 3.0, L));
    L = max(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1e-6);
    c = max(mix(vec3(L), c, uSat), 0.0);
    // film response: a Lottes S-curve on luminance (steep mids = the concept's contrast, long shoulder) scales the
    // colour, so hue survives the top end; then a per-channel soft shoulder takes the overflow, so saturated light walks
    // orange \u2192 yellow \u2192 white like real fire (not peach-white) and white armour rolls off with its shading
    c *= pow(L, uTmContrast) / (pow(L, uTmContrast * uTmShoulder) * uTmB + uTmC) / L;
    float pk = max(c.r, max(c.g, c.b));
    c = min(c, uKnee) + (1.0 - uKnee) * (1.0 - exp(-max(c - uKnee, 0.0) / (1.0 - uKnee)));
    float pk2 = max(c.r, max(c.g, c.b));
    c = mix(c, vec3(pk2), 1.0 - 1.0 / (uHotDesat * max(pk - pk2, 0.0) + 1.0));   // only the hottest cores bleach
    c = uLift * vec3(1.0, 0.8, 0.75) + min(c, 1.0) * (1.0 - uLift);
    c = sRGBTransferOETF(vec4(max(c, 0.0), 1.0)).rgb;
    // lens: soft vignette + darker foreground band (concept: bottom third darker than the top)
    c *= (1.0 - uVignette * smoothstep(0.35, 0.95, length(d * vec2(1.6, 1.0)))) * (1.0 - uBottom * (1.0 - smoothstep(0.0, 0.42, vUv.y)));
    c = mix(c, vec3(1.0, 0.97, 0.9), uFlash);
    // grain on the screen grid (fine); dither + quantise on a 2 px grid (retro)
    c += (hash(gl_FragCoord.xy + fract(uTime * 7.31) * 97.0) - 0.5) * uGrain;
    c += bayer4(floor(gl_FragCoord.xy * 0.5)) * uDither / uLevels;
    c = floor(c * uLevels + 0.5) / uLevels;
    gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
  }`,Df=(n,t)=>new on({vertexShader:r3,fragmentShader:n,uniforms:{...s3(),...t},depthTest:!1,depthWrite:!1,toneMapped:!1}),Wc=n=>new q(...n);function Jm({canvas:n,enabled:t=!0,width:e,height:i}){let s=new mu({canvas:n,antialias:!t,powerPreference:"high-performance",preserveDrawingBuffer:!1});s.setPixelRatio(t?1:Math.min(devicePixelRatio,2)),s.shadowMap.enabled=!0,s.shadowMap.type=ma,s.toneMapping=Pc,s.toneMappingExposure=1,s.info.autoReset=!1;let r,a,l,c,o,u,f;if(t){r=new In(4,4,{type:$n,samples:4,depthTexture:new zs(4,4)}),a=new In(4,4,{type:$n,depthBuffer:!1,minFilter:sn,magFilter:sn}),l=new In(4,4,{type:$n,depthBuffer:!1}),c=new Co(new xe(320,180),Gn.bloom,Gn.bloomRadius,Gn.bloomThreshold),c.blendMaterial.visible=!1;let p=c.materialHighPassFilter;p.uniforms.uCool={value:0},p.fragmentShader=`
      uniform sampler2D tDiffuse; uniform float luminosityThreshold, smoothWidth, uCool;
      varying vec2 vUv;
      void main() {
        vec3 c = texture2D(tDiffuse, vUv).rgb;
        float cool = clamp((c.b - c.r) / max(c.b, 1e-3), 0.0, 1.0);
        float v = luminance(c) * (1.0 + uCool * cool);
        gl_FragColor = vec4(min(c, vec3(1.6)) * smoothstep(luminosityThreshold, luminosityThreshold + smoothWidth, v), 1.0);   // capped: stacked trails glow, never flare over the hero
      }`,c.bloomTintColors=[Wc([.95,1,1.08]),Wc([1,.97,.93]),Wc([.45,.42,.39]),Wc([.12,.11,.1]),Wc([.03,.026,.023])];let x={uFocus:{value:7},uNearScale:{value:1},uFarScale:{value:1},uBandN:{value:3},uBandF:{value:5}};o=new Wr(Df(a3,{tColor:{value:r.texture},tDepth:{value:r.depthTexture},uProjInv:{value:new pe},uCamWorld:{value:new pe},uSunDir:{value:new q(-.62,.2,.76).normalize()},uCamPos:{value:new q}})),u=new Wr(Df(o3,{tAtmos:{value:a.texture},uTexel:{value:new xe},...x})),f=new Wr(Df(c3,{tSharp:{value:a.texture},tDof:{value:l.texture},tBloom:{value:c.renderTargetsHorizontal[0].texture},uRes:{value:new xe(1280,720)},uTime:{value:0},uFlash:{value:0},uTmB:{value:1},uTmC:{value:1},...x}))}function h(p,x){let _=Gr?Math.min(1,Math.sqrt(i3/Math.max(1,p*x))):1;if(p=Math.max(1,Math.round(p*_)),x=Math.max(1,Math.round(x*_)),s.setSize(p,x,!1),!t)return;let g=Math.round(p/2),A=Math.round(x/2);r.setSize(p,x),a.setSize(p,x),l.setSize(g,A),c.setSize(g,A),f.material.uniforms.uRes.value.set(p,x),u.material.uniforms.uTexel.value.set(1/g,1/A)}h(e,i);let d=0;return{renderer:s,bloom:c,enabled:t,setSize:h,flash(p){d=p},render(p,x,_=0,g=null,A=null){if(s.info.reset(),!t){s.render(p,x);return}s.setRenderTarget(r),s.render(p,x);let E=o.material.uniforms;Lf(E),E.uProjInv.value.copy(x.projectionMatrixInverse),E.uCamWorld.value.copy(x.matrixWorld),E.uCamPos.value.copy(x.position),A&&E.uSunDir.value.copy(A),s.setRenderTarget(a),o.render(s);let m=g?x.position.distanceTo(g):7,v=u.material.uniforms;Lf(v),v.uFarScale.value=va.clamp(7/m,1,3),v.uNearScale.value=va.clamp(8/m,.25,1),v.uFocus.value=m,v.uBandN.value=Math.max(Gn.bandNear,m*.22),v.uBandF.value=Math.max(Gn.bandFar,m*.6),s.setRenderTarget(l),u.render(s),c.strength=Gn.bloom,c.radius=Gn.bloomRadius,c.threshold=Gn.bloomThreshold,c.highPassUniforms.smoothWidth.value=Gn.bloomKnee,c.highPassUniforms.uCool.value=Gn.bloomCool,c.render(s,null,l,1/60,!1);let y=f.material.uniforms;Lf(y),y.uTime.value=_,y.uFlash.value=d;let w=Gn.tmContrast,M=w*Gn.tmShoulder,S=Gn.tmMidIn,P=Gn.tmMidOut,C=Gn.tmMax,z=(C**M-S**M)*P;y.uTmB.value=(C**w*P-S**w)/z,y.uTmC.value=(C**M*S**w-C**w*S**M*P)/z,s.setRenderTarget(null),f.render(s)}}}var Ff=.05,Xc=.314,On=new q(Math.sin(Xc)*Math.cos(Ff),Math.sin(Ff),Math.cos(Xc)*Math.cos(Ff)),ji=n=>new Qt(n),Ii=(n,t=1)=>`vec3(${(n.r*t).toFixed(4)}, ${(n.g*t).toFixed(4)}, ${(n.b*t).toFixed(4)})`,$c=ji(10390680),Uf=ji(12358521),qc=ji(16175784),l3=ji(11112348),h3=ji(6118008),u3=ji(16760944),f3=ji(14195328),d3=ji(13018018),p3=ji(8285824),m3=ji(16769728),bu=[12,40,1,.16],g3=ji(14200970),x3=ji(7301762),Nf=[15,110,.75],v3=ji(9079984),y3=.62,Qm=`
  vec3 dwHaze(vec3 d, vec3 base) {
    float s = max(dot(d, vec3(${On.x.toFixed(4)}, ${On.y.toFixed(4)}, ${On.z.toFixed(4)})), 0.0);
    // warm lobe \u2248 \xB115\xB0 around the sun (a wider lobe floods the watchtowers' patch of sky and they lose their silhouette)
    vec3 c = mix(base, ${Ii(Uf)}, 0.75 * pow(s, 24.0));
    return c + ${Ii(qc,.3)} * pow(s, 160.0);
  }`;function tg(n,t=new Qt){let e=Math.max(0,n.dot(On));t.copy($c).lerp(Uf,.75*Math.pow(e,24));let i=Math.pow(e,160)*.3;return t.r+=qc.r*i,t.g+=qc.g*i,t.b+=qc.b*i,t}function eg(){Fe.fog_pars_vertex=`#ifdef USE_FOG
	varying vec3 vFogDir;
#endif`,Fe.fog_vertex=`#ifdef USE_FOG
	vFogDir = transpose( mat3( viewMatrix ) ) * mvPosition.xyz;
#endif`,Fe.fog_pars_fragment=`#ifdef USE_FOG
    uniform vec3 fogColor; varying vec3 vFogDir;
    #ifdef FOG_EXP2
      uniform float fogDensity;
    #else
      uniform float fogNear; uniform float fogFar;
    #endif
    ${Qm}
  #endif`,Fe.fog_fragment=`#ifdef USE_FOG
    float fogDist = length( vFogDir );
    vec3 fogD = vFogDir / max( fogDist, 1e-3 );
    #ifdef FOG_EXP2
      float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDist * fogDist );
    #else
      float fogFactor = 1.0 - exp( - pow( max( fogDist - fogNear, 0.0 ) / fogFar, 1.6 ) );
    #endif
    float fogY = cameraPosition.y + vFogDir.y;
    fogFactor *= 1.0 - 0.4 * smoothstep( 6.0, 45.0, fogY );
    vec3 fogC = dwHaze( fogD, fogColor ) * ${y3.toFixed(2)};
    float fogSun = smoothstep( 0.0, 0.92, dot( fogD, vec3(${On.x.toFixed(4)}, ${On.y.toFixed(4)}, ${On.z.toFixed(4)}) ) );
    // chroma first: keep each pixel's luminance, move its hue toward the haze
    float apL = dot( gl_FragColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) );
    vec3 apC = mix( ${Ii(v3)}, ${Ii(Uf)}, fogSun * fogSun );
    vec3 apTint = apC / dot( apC, vec3( 0.2126, 0.7152, 0.0722 ) );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, apL * apTint, ${Nf[2].toFixed(2)} * smoothstep( ${Nf[0].toFixed(1)}, ${Nf[1].toFixed(1)}, fogDist ) );
    // then the ground dust: glowing peach toward the low sun (backlit), a thin mauve veil away from it
    float dustF = ${bu[3].toFixed(2)} * ( 1.0 - exp( - max( fogDist - ${bu[0].toFixed(1)}, 0.0 ) / ${bu[1].toFixed(1)} ) ) * exp( - max( fogY, 0.0 ) / ${bu[2].toFixed(1)} );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, mix( ${Ii(x3)}, ${Ii(g3)}, fogSun ), dustF * ( 0.6 + 0.4 * fogSun ) * ( 1.0 - fogFactor ) );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogC, fogFactor );
  #endif`}function ng(){let n=new on({side:Xn,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position.z = gl_Position.w; }`,fragmentShader:`
      uniform float uTime; varying vec3 vDir;
      ${Qm}
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float vnoise(vec2 p) {
        vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
      }
      float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.07 + vec2(17.1, 9.2); a *= 0.5; } return s; }
      void main() {
        vec3 d = normalize(vDir);
        float h = d.y;
        vec3 sun = vec3(${On.x.toFixed(4)}, ${On.y.toFixed(4)}, ${On.z.toFixed(4)});
        float s = max(dot(d, sun), 0.0);
        vec3 hz = dwHaze(normalize(vec3(d.x, 0.0, d.z) + vec3(0.0, sun.y, 0.0)), ${Ii($c)});
        vec3 up = mix(${Ii(l3)}, ${Ii(h3)}, smoothstep(0.18, 0.8, h));
        vec3 c = mix(hz, up, smoothstep(0.0, 0.32, h) * (1.0 - 0.75 * s * s * s * s));
        float az = max(dot(normalize(d.xz + vec2(1e-4)), normalize(sun.xz)), 0.0);
        c = mix(c, mix(${Ii(f3)}, ${Ii(u3,1.5)}, az * az), (1.0 - smoothstep(-0.02, 0.16, h)) * (0.55 + 0.45 * az));
        // blocky voxel clouds on a plane, dusty rose with a gold lining toward the sun
        if (h > 0.0) {
          vec2 uv = d.xz / (h + 0.1);
          uv = floor(uv * 9.0) / 9.0 + vec2(uTime * 0.004, 0.0);
          float n = fbm(uv * 0.55 + vec2(3.0, 7.0));
          float band = smoothstep(0.015, 0.09, h) * (1.0 - smoothstep(0.32, 0.62, h));
          float cov = smoothstep(0.40, 0.6, n) * band;
          float lit = smoothstep(0.5, 0.78, fbm(uv * 0.55 + vec2(3.0, 7.0) + normalize(sun.xz) * 0.12));   // lit where the cloud thins toward the sun
          vec3 cl = mix(${Ii(p3)}, ${Ii(d3)}, 1.0 - lit);
          cl = mix(cl, ${Ii(m3,.8)}, pow(s, 10.0) * (0.25 + 0.5 * (1.0 - lit)));   // gold-lit toward the sun (narrow: the
          // sun is in frame now, and a wide lit lobe greys out the watchtowers' patch of sky)
          c = mix(c, cl, cov * 0.92);
        }
        // sun: wide warm scatter, a tight halo and a small hot core (in frame now: a big HDR disc blooms and the DoF
        // smears it over the watchtowers, which must stay silhouettes)
        c += ${Ii(qc)} * (pow(s, 60.0) * 0.1 + pow(s, 1400.0) * 0.8);
        c = mix(c, vec3(4.2, 3.8, 3.0), smoothstep(0.99968, 0.99976, s));
        gl_FragColor = vec4(c, 1.0);
      }`}),t=new Re(new wc(900,48,24),n);return t.frustumCulled=!1,t.renderOrder=-1,t}function ig(n,t,e){let i=Math.floor(n),s=Math.floor(t),r=n-i,a=t-s,l=r*r*(3-2*r),c=a*a*(3-2*a),o=le(i,s,e),u=le(i+1,s,e),f=le(i,s+1,e),h=le(i+1,s+1,e);return o+(u-o)*l+(f-o)*c+(o-u-f+h)*l*c}var wu=(n,t,e=1)=>ig(n,t,e)*.62+ig(n*2.3+7,t*2.3+3,e+1)*.38;function sg(n,t,e){let i=Math.hypot(n,t),s=wu(n*.07,t*.07,5)*1.3-.62;s+=.8*(1-Math.min(1,Math.max(0,(i-12)/16))),t>0&&(s+=1.2*Math.max(0,1-Math.abs(n-e)/8));let r=wu(n*.15,t*.15,8);return s-=Math.max(0,Math.min(1,(r-.5)/.14))*1,Math.max(0,Math.min(1,s))}function _3(){let t=42.666666666666664,e=document.createElement("canvas");e.width=e.height=1024;let i=e.getContext("2d"),s=vi(99);i.fillStyle="#927c6c",i.fillRect(0,0,1024,1024);for(let a=0;a<160;a++){let l=s.int(0,1024),c=s.int(0,1024),o=s.range(30,110),u=s.chance(.55),f=i.createRadialGradient(l,c,0,l,c,o);f.addColorStop(0,u?"rgba(214,186,160,0.42)":"rgba(50,38,36,0.2)"),f.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=f,i.fillRect(l-o,c-o,o*2,o*2)}for(let a=0;a<9e3;a++){let l=s.range(.84,1.14),c=s.int(2,5);i.fillStyle=`rgb(${124*l|0},${106*l|0},${92*l|0})`,i.fillRect(s.int(0,1023),s.int(0,1023),c,c)}for(let a=0;a<220;a++){let l=s.range(.3,.8)*t,c=s.range(.25,.6)*t,o=s.int(0,1024),u=s.int(0,1024),f=s.range(.75,1.1);i.fillStyle=`rgb(${94*f|0},${84*f|0},${80*f|0})`,i.fillRect(o,u,l,c),i.fillStyle="rgba(255,236,214,0.22)",i.fillRect(o,u,l,2),i.fillStyle="rgba(25,14,12,0.4)",i.fillRect(o,u+c-3,l,3)}i.strokeStyle="rgba(40,26,22,0.35)",i.lineWidth=2;for(let a=0;a<60;a++){let l=s.int(0,1024),c=s.int(0,1024);i.beginPath(),i.moveTo(l,c);let o=s.range(0,6.28);for(let u=0;u<6;u++){o+=s.range(-.7,.7);let f=s.range(10,24);l+=Math.cos(o)*f,c+=Math.sin(o)*f,i.lineTo(l,c)}i.stroke()}let r=new cs(e);return r.wrapS=r.wrapT=oo,r.magFilter=sn,r.minFilter=Hs,r.colorSpace=Hn,r.anisotropy=8,r}function M3(n,t){let e=_3(),i=new Ai,s=220,r=176,a=new ni(s,s,r,r);a.rotateX(-Math.PI/2);let l=a.attributes.position,c=new Float32Array(l.count*3);for(let p=0;p<l.count;p++){let x=l.getX(p),_=l.getZ(p),A=1.04+(wu(x*.045+40,_*.045,9)-.5)*.85;A*=1-.28*sg(x,_,n);for(let[m,,v,y]of t)A*=1-.5*Math.exp(-((x-m)**2+(_-v)**2)/(9*y*y));let E=Math.min(1,Math.max(0,(Math.hypot(x,_)-80)/30));A=A*(1-E)+.98*E,c[p*3]=A*1.03,c[p*3+1]=A,c[p*3+2]=A*.96}a.setAttribute("color",new fn(c,3));let o=e.clone();o.needsUpdate=!0,o.repeat.set(s/24,s/24);let u=new Re(a,new Qe({map:o,vertexColors:!0,roughness:.96}));u.receiveShadow=!0,i.add(u);let f=new ni(1800,1800,8,8);f.rotateX(-Math.PI/2);let h=e.clone();h.needsUpdate=!0,h.repeat.set(1800/24,1800/24);let d=new Re(f,new Qe({map:h,color:15918816,roughness:.97}));return d.position.y=-.03,d.receiveShadow=!0,i.add(d),i}function b3(n){let t=vi(11),e=.42,i=224,s=i*e/2,r=new Uint8Array(i*i),a=[],l=new Qt(12101015),c=[6772304,6312011,7166804,5983047,7298388,6575182];for(let m=0;m<i;m++)for(let v=0;v<i;v++){if(r[m*i+v])continue;let y=-s+v*e,w=-s+m*e,M=sg(y+e/2,w+e/2,n);if(t.next()>(M-.36)*4.5){t.chance(.012)&&a.push([y+e/2,w+e/2,t.range(.18,.38),t.range(.18,.34),t.range(.04,.12),t.range(0,6.28),.85,0,0]);continue}let S=t.chance(.1),P=S||t.chance(.14)?2:1,C=S||t.chance(.14)?2:1;(v+P>i||r[m*i+v+1])&&(P=1),m+C>i&&(C=1);for(let Y=0;Y<C;Y++)for(let ct=0;ct<P;ct++)r[(m+Y)*i+v+ct]=1;let z=t.range(.06,.11),U=M<.5?1:0,V=t.chance(.1)?1:0;a.push([y+P*e/2+t.range(-.05,.05),w+C*e/2+t.range(-.05,.05),(P*e-z)*t.range(.88,1),(C*e-z)*t.range(.88,1),t.range(.03,.06)+(S&&t.chance(.3)?.05:0)+U*t.range(0,.02)+V*t.range(.03,.08),t.range(-.2,.2)+U*t.range(-.3,.3),1,V*t.range(-.09,.09),V*t.range(-.09,.09)])}let o=document.createElement("canvas");o.width=o.height=16;let u=o.getContext("2d");for(let m=0;m<16;m++)for(let v=0;v<16;v++){let y=v===0||m===0||v===15||m===15,w=(.86+le(v,m,3)*.18+(y?.07:0))*255;u.fillStyle=`rgb(${Math.min(255,w*1.02)|0},${Math.min(255,w)|0},${Math.min(255,w*.97)|0})`,u.fillRect(v,m,1,1)}let f=new cs(o);f.magFilter=sn,f.colorSpace=Hn;let h=new Qe({map:f,roughness:.93,flatShading:!0});h.onBeforeCompile=m=>{m.vertexShader=m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float cobbleD = distance((modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz, cameraPosition);
      float cobbleF = smoothstep(12.0, 34.0, cobbleD);
      transformed.y = mix(transformed.y, 0.5, cobbleF * 0.92);
      transformed.xz *= 1.0 + cobbleF * 0.25;                                   // close the dark gaps far away`),m.fragmentShader=m.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(${l.r.toFixed(3)}, ${l.g.toFixed(3)}, ${l.b.toFixed(3)}) * 0.62, smoothstep(12.0, 40.0, length(vViewPosition)) * 0.6);   // \u2192 the dirt plane's tone`)};let d=new Vn(new Ln(1,1,1),h,a.length);d.name="cobbles";let p=new pe,x=new je,_=new Pn,g=new Qt,A=new q,E=new q;return a.forEach(([m,v,y,w,M,S,P,C,z],U)=>{let V=M+.12;x.setFromEuler(_.set(C,S,z)),p.compose(A.set(m,M-V/2,v),x,E.set(y,V,w)),d.setMatrixAt(U,p),g.set(c[t.int(0,c.length-1)]).multiplyScalar(P*t.range(.8,1.1)),g.lerp(l,Math.min(1,Math.max(0,wu(m*.09+40,v*.09,9)-.3)*1.7*t.next())),t.chance(.07)&&g.lerp(l,.45),d.setColorAt(U,g)}),d.receiveShadow=!0,d}function S3(n){let t=vi(17),e=[],i=[8022624,7101782,8745574,6246473,9206380,3811874];for(let f=0;f<90;f++){let h=t.range(0,Math.PI*2),d=t.range(7,50),p=Math.sin(h)*d,x=Math.cos(h)*d;if(x>30&&Math.abs(p-n)<5)continue;let _=t.int(3,10),g=t.range(.6,1.6);for(let A=0;A<_;A++){let E=t.range(.1,.34)*(A===0?1.25:1),m=t.chance(.12),v=m?E*3:E*t.range(.8,1.3),y=m?.08:E*t.range(.6,1),w=m?.14:E*t.range(.8,1.3);e.push({p:[p+t.range(-g,g)*(A?1:.2),y/2-.01,x+t.range(-g,g)*(A?1:.2)],s:[v,y,w],r:[t.range(-.25,.25),t.range(0,3.14),t.range(-.25,.25)],c:m?i[5]:i[t.int(0,4)],v:t.range(.85,1.1)})}}let s=new Vn(new Ln(1,1,1),new Qe({roughness:.92,flatShading:!0}),e.length);s.name="rubble";let r=new pe,a=new je,l=new Pn,c=new q,o=new q,u=new Qt;return e.forEach((f,h)=>{s.setMatrixAt(h,r.compose(c.set(...f.p),a.setFromEuler(l.set(...f.r)),o.set(...f.s))),s.setColorAt(h,u.set(f.c).multiplyScalar(f.v))}),s.castShadow=!0,s.receiveShadow=!0,s}function Su(n,t){let e=vi(t),i=Array.from({length:n},()=>e.next());return s=>{let r=(s/(Math.PI*2)%1+1)%1*n,a=Math.floor(r),l=r-a,c=l*l*(3-2*l);return i[a%n]*(1-c)+i[(a+1)%n]*c}}function w3(){let n=[{r:360,lo:6,hi:36,col:5195093,haze:.3,seed:3},{r:500,lo:16,hi:62,col:5984618,haze:.44,seed:7},{r:690,lo:30,hi:112,col:6906755,haze:.58,seed:13}],t=[],e=[],i=420,s=new q(On.x,.6,On.z).normalize(),r=new Qt,a=new Qt,l=new Qt,c=new q,o=new q,u=new q,f=new q;for(let p of n){let x=Su(11,p.seed),_=Su(29,p.seed+1),g=Su(83,p.seed+2),A=Su(190,p.seed+3),E=y=>{let w=x(y)*.5+_(y)*.3+g(y)*.14+A(y)*.06,M=Math.atan2(Math.sin(y-Xc),Math.cos(y-Xc));return(p.lo+(p.hi-p.lo)*Math.pow(Math.max(0,w-.18)/.82,1.7))*(1-.8*Math.exp(-((M/.2)**2)))},m=[[-70,-.1,0],[-34,.42,.18],[0,1,0],[40,.66,.2],[110,.15,0]],v=(y,w)=>{let M=y/i*Math.PI*2,[S,P,C]=m[w],z=p.r+S+(le(y,w,p.seed)-.5)*16,U=E(M)*P+(le(y*3,w,p.seed+9)-.5)*C*(p.hi*.5);return[Math.sin(M)*z,U,Math.cos(M)*z]};l.set(p.col);for(let y=0;y<i;y++)for(let w=0;w<m.length-1;w++){let M=v(y,w),S=v(y+1,w),P=v(y+1,w+1),C=v(y,w+1);for(let z of[[M,S,P],[M,P,C]]){c.set(z[1][0]-z[0][0],z[1][1]-z[0][1],z[1][2]-z[0][2]),o.set(z[2][0]-z[0][0],z[2][1]-z[0][1],z[2][2]-z[0][2]),u.crossVectors(o,c).normalize(),u.y<0&&u.negate(),f.set((z[0][0]+z[1][0]+z[2][0])/3,(z[0][1]+z[1][1]+z[2][1])/3,(z[0][2]+z[1][2]+z[2][2])/3);let U=.55+.85*Math.max(0,u.dot(s)),V=Math.max(0,Math.min(1,f.y/p.hi));r.copy(l).multiplyScalar(U*(.9+V*.25)),tg(c.copy(f).normalize(),a),r.lerp(a,Math.min(1,p.haze+(1-V)*.22));for(let Y of z)t.push(Y[0],Y[1],Y[2]),e.push(r.r,r.g,r.b)}}}let h=new hn;h.setAttribute("position",new Ze(t,3)),h.setAttribute("color",new Ze(e,3)),h.computeBoundingSphere();let d=new Re(h,new an({vertexColors:!0,fog:!1,side:En}));return d.renderOrder=-.5,d}function rg(n,t,e){let i=vi(61),s=[...e];for(let r=0;r<10;r++){let a=i.range(0,6.28),l=i.range(14,42);s.push([Math.sin(a)*l,0,Math.cos(a)*l,i.range(.5,.9)])}n.add(M3(t,s),b3(t),S3(t),w3())}var qr=new Qt,ag=[{n:[1,0,0],v:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]]},{n:[-1,0,0],v:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{n:[0,1,0],v:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]},{n:[0,-1,0],v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{n:[0,0,1],v:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{n:[0,0,-1],v:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]]}];function og(){let n=[],t=[],e=[],i=[];return{quad(s,r,a,l,c){let o=n.length/3;for(let u of s)n.push(u[0],u[1],u[2]),t.push(r[0],r[1],r[2]),e.push(a,l,c);i.push(o,o+1,o+2,o,o+2,o+3)},build(){let s=new hn;return s.setAttribute("position",new Ze(n,3)),s.setAttribute("normal",new Ze(t,3)),s.setAttribute("color",new Ze(e,3)),s.setIndex(i),s.computeBoundingSphere(),s.computeBoundingBox(),s}}}function Dn(n){let t=og(),e=new pe,i=new je,s=new Pn,r=new q,a=new Ie,l=new q;for(let c of n){let[o,u,f]=c.s,[h,d,p]=c.p;qr.set(c.c),i.setFromEuler(s.set(...c.r||[0,0,0])),e.compose(r.set(h,d,p),i,new q(1,1,1)),a.getNormalMatrix(e),ag.forEach((x,_)=>{if(c.skip&&c.skip.includes(_))return;let g=x.v.map(E=>r.set((E[0]-.5)*o,(E[1]-.5)*u,(E[2]-.5)*f).applyMatrix4(e).toArray()),A=l.set(...x.n).applyMatrix3(a).normalize().toArray();t.quad(g,A,qr.r,qr.g,qr.b)})}return t.build()}function E3(n,t,e,i,s,r=[0,0,0]){let a=new Int32Array(n*t*e).fill(-1),l=(h,d,p)=>h<0||d<0||p<0||h>=n||d>=t||p>=e?-1:a[h+n*(d+t*p)];for(let h=0;h<e;h++)for(let d=0;d<t;d++)for(let p=0;p<n;p++){let x=s(p,d,h);x!=null&&x>=0&&(a[p+n*(d+t*h)]=x)}let c=og(),[o,u,f]=r;for(let h=0;h<e;h++)for(let d=0;d<t;d++)for(let p=0;p<n;p++){let x=l(p,d,h);if(!(x<0)){qr.set(x);for(let _ of ag){if(l(p+_.n[0],d+_.n[1],h+_.n[2])>=0)continue;let g=_.v.map(A=>[o+(p+A[0])*i,u+(d+A[1])*i,f+(h+A[2])*i]);c.quad(g,_.n,qr.r,qr.g,qr.b)}}}return c.build()}function kf(n){let t=new hn,e=0;for(let c of n)e+=c.attributes.position.count;let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*3),a=[],l=0;for(let c of n){i.set(c.attributes.position.array,l*3),s.set(c.attributes.normal.array,l*3),r.set(c.attributes.color.array,l*3);for(let o of c.index.array)a.push(o+l);l+=c.attributes.position.count}return t.setAttribute("position",new fn(i,3)),t.setAttribute("normal",new fn(s,3)),t.setAttribute("color",new fn(r,3)),t.setIndex(a),t.computeBoundingSphere(),t}function tn(n,t){let e=Math.min(255,Math.max(0,(n>>16&255)*t)),i=Math.min(255,Math.max(0,(n>>8&255)*t)),s=Math.min(255,Math.max(0,(n&255)*t));return e<<16|i<<8|s}function ba(n,t=.034,e=.09){let i=[1/0,1/0,1/0],s=[-1/0,-1/0,-1/0];for(let c of n)if(!c.paint&&c.c!==-1)for(let o=0;o<3;o++)i[o]=Math.min(i[o],c.a[o]),s[o]=Math.max(s[o],c.b[o]);let r=i.map(c=>Math.floor(c/t+1e-6)*t),a=s.map((c,o)=>Math.max(1,Math.ceil((c-r[o])/t-1e-6))),l=new Int32Array(a[0]*a[1]*a[2]).fill(-1);for(let c of n){let o=[0,0,0],u=[0,0,0];for(let f=0;f<3;f++)o[f]=Math.max(0,Math.round((c.a[f]-r[f])/t)),u[f]=Math.min(a[f],Math.max(o[f]+1,Math.round((c.b[f]-r[f])/t)));for(let f=o[2];f<u[2];f++)for(let h=o[1];h<u[1];h++)for(let d=o[0];d<u[0];d++){let p=d+a[0]*(h+a[1]*f);if(c.paint&&l[p]<0)continue;let x=typeof c.c=="function"?c.c(r[0]+(d+.5)*t,r[1]+(h+.5)*t,r[2]+(f+.5)*t,d,h,f):c.c;x!=null&&(l[p]=x)}}return E3(a[0],a[1],a[2],t,(c,o,u)=>{let f=l[c+a[0]*(o+a[1]*u)];return f<0?-1:tn(f,1-e/2+le(c,o,u)*e)},r)}var cg=()=>new Qe({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),lr=10255474,Eu=3023392,T3=3815487,Of=6051424,A3=8137501,Tu=4861730,Io=3022101;function zf(n,t,e,i,s,r,a,l=()=>!1){for(let o=s,u=0;o<r-.05;o+=.6,u++){let f=e-(u%2?.55:0);for(;f<i;){let h=Math.min(t.range(.9,1.6),i-f),d=f+h/2,p=o+.6/2,x=Math.min(.6,r-o);if(h>.2&&!l(d,p)){let _=t.range(.8,1.14)*(t.chance(.06)?.78:1)*(1-.12*Math.max(0,1-p/3));n.push({s:[h-.07,x-.07,.3],p:[d,p,a-.12+t.range(-.05,.05)],c:tn(t.chance(.25)?8874600:t.chance(.15)?10716522:lr,_),skip:[0,1,3,4]})}f+=h}}}function R3(n,t,e,i,s,r,a){for(let l=s,c=0;l<r-.05;l+=.6,c++)for(let o=e-(c%2?.55:0);o<i;){let u=Math.min(t.range(.9,1.6),i-o),f=Math.min(.6,r-l);u>.2&&n.push({s:[.3,f-.07,u-.07],p:[a+.12+t.range(-.05,.05),l+.3,o+u/2],c:tn(t.chance(.25)?8874600:lr,t.range(.8,1.14)),skip:[1,3,4,5]}),o+=u}}function Bf(n,t,e,i,s,r,a=.8){for(let l=e;l+1.1<=i;l+=2)n.push({s:[1.15,1.25,a],p:[l+.575,s+.62,r],c:tn(lr,t.range(.82,1.08))})}function Yc(n,t,e,i,s,r,a=2,l=1){let c=h=>{h.p=[h.p[0]+t,h.p[1]+e,h.p[2]+i],n.push(h)},o=0,u=s,f=r;for(let h=0;h<a;h++){let d=(h===0?3.4:2.6)*l;c({s:[u*.86,.3*l,f*.86],p:[0,o+.15*l,0],c:4930872}),c({s:[u*.78,d,f*.7],p:[0,o+d/2,0],c:Tu});let p=Math.max(3,Math.round(u/2.6));for(let g=0;g<p;g++){let A=-u*.4+g/(p-1)*u*.8;c({s:[.36*l,d,.36*l],p:[A,o+d/2,-f*.37],c:A3}),g<p-1&&c({s:[u*.8/(p-1)-.5*l,d*.42,.1],p:[A+u*.4/(p-1),o+d*.58,-f*.36],c:2364946})}c({s:[u*.84,.4*l,.3*l],p:[0,o+d-.2*l,-f*.38],c:5909020}),o+=d;let x=u*1.28,_=f*1.3;for(let g=0;g<4;g++){let A=1-g*.2;c({s:[x*A,.42*l,_*A],p:[0,o+.21*l+g*.4*l,0],c:g===0?Of:tn(T3,1-g*.05)})}for(let g of[-1,1])for(let A of[-1,1])c({s:[.8*l,.4*l,.8*l],p:[g*x*.47,o+.5*l,A*_*.47],c:Of}),c({s:[.5*l,.4*l,.5*l],p:[g*x*.52,o+.85*l,A*_*.52],c:Of});if(o+=1.6*l,h===a-1){c({s:[x*.5,.5*l,.6*l],p:[0,o+.1*l,0],c:2894384});for(let g of[-1,1])c({s:[.5*l,1.1*l,.5*l],p:[g*x*.25,o+.6*l,0],c:2894384})}u*=.72,f*=.72}}function C3(n,t,e,i=15,s=1.9){let r=u=>{u.p=[u.p[0]+t,u.p[1],u.p[2]+e],n.push(u)},a=s/1.9,l=5.6*a,c=s<1.9?.7:.42;for(let u of[-s,s])for(let f of[-s,s])r({s:[c,i,c],p:[u,i/2,f],r:[f*.012,0,-u*.012],c:Tu});for(let u=1.5;u<i-1;u+=3.2){for(let f of[-s,s])r({s:[2*s+.4,.26*c/.42,.26],p:[0,u,f],c:Io}),r({s:[.2*c/.42,4.6*a,.2],p:[0,u+1.6,f],r:[0,0,.86],c:Io}),r({s:[.2*c/.42,4.6*a,.2],p:[0,u+1.6,f],r:[0,0,-.86],c:Io});for(let f of[-s,s])r({s:[.26,.26*c/.42,2*s+.4],p:[f,u,0],c:Io}),r({s:[.2*c/.42,4.6*a,.2],p:[f,u+1.6,0],r:[.86,0,0],c:Io})}r({s:[l,.4,l],p:[0,i,0],c:Tu});let o=l/2-.1;for(let[u,f,h,d]of[[0,-o,l,.2],[0,o,l,.2],[-o,0,.2,l],[o,0,.2,l]])r({s:[h,1.3,d],p:[u,i+.85,f],c:Io});Yc(n,t,i+.2,e,5.2*a,5.2*a,1,.7)}var Hf={guard:{body:2763312,head:13079664,cap:2039074,band:1226850,legs:2236970,shaft:4862498,tip:12831184},horde:{body:5130802,head:8162926,cap:3025444,band:3814440,legs:3025446,shaft:5917248,tip:9077882}},Vf=(n=Hf.guard)=>Dn([{s:[.42,.55,.28],p:[0,1.15,0],c:n.body},{s:[.24,.25,.24],p:[0,1.56,0],c:n.head},{s:[.3,.14,.3],p:[0,1.72,0],c:n.cap},{s:[.32,.1,.3],p:[0,1.6,0],c:n.band},{s:[.36,.9,.24],p:[0,.45,0],c:n.legs},{s:[.06,2.6,.06],p:[.3,1.3,.1],c:n.shaft},{s:[.08,.26,.08],p:[.3,2.66,.1],c:n.tip}]);function lg(n,{wallZ:t,gateX:e}){let i=vi(21),s=[],r=10,a=9,l=-170,c=e+18,o=t,u=8,f=7.6,h=(U,V)=>Math.abs(U-e)<u/2+.2&&V<f+(Math.abs(U-e)<u/2-1.4?.9:0);s.push({s:[c-l,r,a],p:[(l+c)/2,r/2,o+a/2],c:Eu}),zf(s,i,l,c,0,r,o,h),s.push({s:[c-l,.9,.5],p:[(l+c)/2,.45,o-.35],c:tn(lr,.7),skip:[4]}),Bf(s,i,l,c,r,o+.4),s.push({s:[c-l,1,.6],p:[(l+c)/2,r+.5,o+a-.3],c:tn(lr,.8)});for(let U of[-114,-84,-54,-34]){s.push({s:[7,r+1,3.2+.5],p:[U,(r+1)/2,o-3.2/2+.25],c:Eu}),zf(s,i,U-7/2,U+7/2,0,r+1,o-3.2);for(let ct of[-1,1])for(let T=0;T<r+1;T+=.6)s.push({s:[.3,.53,3.2],p:[U+ct*(7/2+.05),T+.3,o-3.2/2],c:tn(lr,i.range(.7,.95))});Bf(s,i,U-7/2,U+7/2,r+1,o-3.2+.4)}s.push({s:[u,f+.9,.1],p:[e,(f+.9)/2,o-.03],c:1182730});for(let U of[-1,1]){let V=e+U*(u/4+.08);s.push({s:[u/2-.3,f-.3,.2],p:[V,(f-.3)/2,o-.12],c:4925978});for(let Y=1.1;Y<f-.4;Y+=1.55)s.push({s:[u/2-.4,.2,.1],p:[V,Y,o-.26],c:2827554});for(let Y=0;Y<4;Y++)s.push({s:[.14,f-.5,.06],p:[V-u/4+.5+Y*(u/2-1)/3,(f-.3)/2,o-.23],c:3809300})}for(let U=0;U<7;U++){let V=U/6,Y=f-.2+Math.sin(V*Math.PI)*.9;s.push({s:[1.3,.62,.45],p:[e-u/2+.3+V*(u-.6),Y+.3,o-.2],c:tn(lr,.9)})}s.push({s:[3.2,1.3,.3],p:[e,f+1.7,o-.3],c:1774610},{s:[2.8,.95,.35],p:[e,f+1.7,o-.33],c:7031324});let d=c+3,p=17;s.push({s:[11,p,12],p:[d,p/2,o+4],c:Eu}),zf(s,i,d-5.5,d+5.5,0,p,o-2);for(let U=0;U<p;U+=.6)s.push({s:[.3,.53,12],p:[d+5.6,U+.3,o+4],c:tn(lr,i.range(.72,.98))});Bf(s,i,d-5.5,d+5.5,p,o-1.6),Yc(s,d,p,o+4,9,8,2,.85);let x=70,_=d+5.5;s.push({s:[a,r,x],p:[_-a/2,r/2,o+10+x/2],c:Eu}),R3(s,i,o+10,o+10+x,0,r,_);for(let U=o+10;U+1.1<=o+10+x;U+=2)s.push({s:[.8,1.25,1.15],p:[_-.4,r+.62,U+.575],c:tn(lr,i.range(.82,1.08))});s.push({s:[22,.6,8.4],p:[e,r+.3,o+4.4],c:5917252}),Yc(s,e,r+.6,o+4.6,19,8,2,1.05),Yc(s,-54,r+1,o+1.2,6.5,5,1,.75),Yc(s,-114,r+1,o+1.2,6.5,5,1,.75);let g=[[e+45,o+14,6.5,1.5],[e+61,o+23,8,1.55],[e+68,o+2,6,1.45],[17,-69,5.5,1.45],[-20,-70,6,1.5]];for(let[U,V,Y,ct]of g)C3(s,U,V,Y,ct);for(let U of[-100,-70,-44,-24,4]){let Y=r/Math.cos(.3)+.6,ct=o-.3-Math.sin(.3)*Y/2,T=Math.cos(.3)*Y/2;for(let L of[-.45,.45])s.push({s:[.14,Y,.14],p:[U+L,T,ct],r:[-.3,0,0],c:4862498});for(let L=.6;L<Y-.3;L+=.55)s.push({s:[.9,.08,.08],p:[U,Math.cos(.3)*L,o-.3-Math.sin(.3)*L],c:3810840})}let A=o-4.2;s.push({s:[3.6,.35,6.4],p:[e,.9,A],c:4074012});for(let U of[-1,1])for(let V of[-2.4,2.4])s.push({s:[.3,1.4,1.4],p:[e+U*1.9,.7,A+V],c:2759700});for(let U of[-1,1])s.push({s:[.3,2.6,6.2],p:[e+U*1.6,2.2,A],c:tn(Tu,.9)});for(let U=0;U<4;U++)s.push({s:[4.4-U*1.1,.35,6.8],p:[e,3.5+U*.35,A],c:tn(5126698,1-U*.08)});s.push({s:[.7,.7,7.5],p:[e,1.8,A+1.2],c:5914152},{s:[.9,.9,.5],p:[e,1.8,A+4.9],c:3816e3});let E=new Re(Dn(s),cg());E.castShadow=!0,E.receiveShadow=!0,n.add(E);let m=Vf(),v=[];for(let U=l+30;U<c-1;U+=i.range(1.6,4.2))(Math.abs(U-e)>11.5||i.chance(.3))&&v.push([U,r,o+i.range(.9,1.6)]);for(let U of[-114,-84,-54,-34])for(let V=0;V<3;V++)v.push([U+i.range(-2.8,2.8),r+1,o-2.4+i.range(0,1)]);for(let U=0;U<5;U++)v.push([d+i.range(-4.5,4.5),p,o-.8+i.range(0,1)]);let y=new Vn(m,cg(),v.length);y.userData.spots=v.map(([U,V,Y])=>({x:U,y:V,z:Y,ph:i.range(0,6.28),yaw:Math.PI+i.range(-.4,.4)})),y.castShadow=!1,n.add(y);let w=new pe,M=new je,S=new Pn,P=new q,C=new q(1,1,1),z=U=>{y.userData.spots.forEach((V,Y)=>{M.setFromEuler(S.set(Math.sin(U*1.3+V.ph)*.05,V.yaw+Math.sin(U*.4+V.ph)*.25,0)),y.setMatrixAt(Y,w.compose(P.set(V.x,V.y+Math.max(0,Math.sin(U*2.1+V.ph))*.05,V.z),M,C))}),y.instanceMatrix.needsUpdate=!0};return z(0),{H:r,gateX:e,cornerX:d,towerH:p,x1:c,towers:g,fires:[[e-6.5,0,o-2.2,1.5],[e+7,0,o-1.8,1.3],[-30,r+.2,o+1.8,1.7],[-72,r+.2,o+2,1.5],[d-2,p+.2,o+1,1.2],[-45,0,o-3.2,1.3],[-63,0,o-2.6,1.5],[-93,0,o-3,1.2],[e+24,0,o-6,1.35],[-37,0,o-5,1.2],[3,0,o-8,1.1],[-124,0,o-3.5,1.4]],update(U){z(U)}}}var hr=new q(.75,0,.55).normalize(),Gf=()=>new Qe({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),Wf=n=>n-Math.floor(n);function qf(n,t,e,{w:i,h:s,wick:r,wickW:a=Math.max(2,Math.round(i/4)),fill:l,light:c,dark:o,ink:u,line:f=2}){let h=Math.round(t-i/2),d=Math.round(e-s/2),p=Math.round(t-a/2);n.fillStyle=u,n.fillRect(h-f,d-f,i+2*f,s+2*f),n.fillRect(p-f,d-r-f,a+2*f,s+2*r+2*f),n.fillStyle=l,n.fillRect(p,d-r,a,s+2*r),n.fillRect(h,d,i,s);let x=Math.max(1,Math.round(i/6)),_=Math.max(1,x>>1);n.fillStyle=c,n.fillRect(h,d,x,s),n.fillRect(h,d,i,_),n.fillStyle=o,n.fillRect(h+i-x,d+_,x,s-_),n.fillRect(h+x,d+s-_,i-x,_)}var I3={down:{fill:"#c0281a",light:"#e8553a",dark:"#7e160e",ink:"#140806"},up:{fill:"#09f875",light:"#b4ffd6",dark:"#049a48",ink:"#0c1410"}};function Xr(n,{bg:t,border:e,w:i=128,h:s=256,tatter:r=!0,seed:a=1}){let l=document.createElement("canvas");l.width=i,l.height=s;let c=l.getContext("2d"),o=vi(a);c.fillStyle=t,c.fillRect(0,0,i,s);for(let h=0;h<260;h++)c.fillStyle=o.chance(.5)?"rgba(255,225,190,0.06)":"rgba(0,0,0,0.09)",c.fillRect(o.int(0,i),o.int(0,s),o.int(2,10),o.int(1,4));if(e&&(c.strokeStyle=e,c.lineWidth=i*.09,c.strokeRect(i*.045,i*.045,i*.91,s*.86)),n){let h=Math.round(Math.min(s*.32,i*.62)),d=Math.round(h*.52);qf(c,i/2,s*(s>i?.42:.46),{w:d,h,wick:Math.round(h*.4),wickW:Math.max(3,Math.round(d*.24)),line:Math.max(3,Math.round(d*.14)),...I3[n]})}let u=c.createLinearGradient(0,0,0,s);if(u.addColorStop(.6,"rgba(20,8,6,0)"),u.addColorStop(1,"rgba(20,8,6,0.45)"),c.fillStyle=u,c.fillRect(0,0,i,s),r){c.globalCompositeOperation="destination-out";for(let h=0;h<i;h+=i/16)c.fillRect(h,s*.84+o.range(0,s*.14),i/16,s);for(let h=0;h<5;h++)c.fillRect(o.int(0,i),o.int(s*.3,s*.8),o.int(3,7),o.int(3,7))}let f=new cs(l);return f.colorSpace=Hn,f.magFilter=sn,f}function Kc(n,t,e,i,s){let r=new ni(t,e,i==="drape"?12:8,i==="flag"?6:14);r.translate(t/2,-e/2,0);let a=new Re(r,n);return a.castShadow=!0,a.userData={base:Float32Array.from(r.attributes.position.array),w:t,h:e,kind:i,ph:s},a}function Po(n,t){let{base:e,w:i,h:s,kind:r,ph:a}=n.userData,l=n.geometry.attributes.position.array;for(let c=0;c<l.length;c+=3){let o=e[c],u=e[c+1],f=Math.max(0,o/i),h=Math.max(0,-u/s),d=0,p=o,x=u;if(r==="hang"){d=Math.pow(f,.85)*(.35+.65*h)*i*.28*(Math.sin(t*2.6-f*4.2-h*2.4+a)*.72+Math.sin(t*4.3-f*7.5+h*1.3+a*1.7)*.28);let g=Math.sin(t*2.1+a-h*1.4)*.65+Math.sin(t*3.7+a*1.3-h*2.6)*.35;p=o-Math.abs(d)*.25+g*h*h*i*.42*(.3+.7*f),x=u+Math.sin(t*1.7+a+f*2)*.05*h*s*f}else r==="flag"?(d=f*s*.3*(Math.sin(t*6.5-f*7+a)*.8+Math.sin(t*9.1-f*11+a)*.2),x=u-f*f*s*.15):(d=Math.max(0,Math.pow(h,1.6)*(.55+.5*Math.sin(t*1.1+a+f*1.5))+Math.sin(t*2.4-f*7-h*2+a)*(.08+.32*h)),p=o+h*h*(Math.sin(t*1.3+a-h*1.4)*.8+Math.sin(t*2.7+a*2+f*2)*.25));l[c]=p,l[c+1]=x,l[c+2]=d}n.geometry.attributes.position.needsUpdate=!0}function P3(){let t=document.createElement("canvas");t.width=t.height=16;let e=t.getContext("2d"),i=e.createImageData(16,16),s=[[.5,.56,.36],[.33,.44,.24],[.66,.4,.26],[.48,.3,.22]];for(let l=0;l<16;l++)for(let c=0;c<16;c++){let o=(c+.5)/16,u=(l+.5)/16,f=9;for(let[x,_,g]of s)f=Math.min(f,Math.hypot(o-x,u-_)/g);let h=f<.7?1:f<.92?.6:f<1.08?.28:0,d=f>.7?1.25:1-.18*(u-.3),p=(l*16+c)*4;i.data[p]=i.data[p+1]=i.data[p+2]=Math.min(255,200*d),i.data[p+3]=h*255}e.putImageData(i,0,0);let r=new cs(t);r.magFilter=sn,r.minFilter=sn,r.generateMipmaps=!1;let a=new an({map:r,transparent:!0,opacity:.62,depthWrite:!1});return a.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <project_vertex>",`
      vec4 mvPosition = modelViewMatrix * vec4( instanceMatrix[3].xyz, 1.0 );
      mvPosition.xy += mat2( instanceMatrix[0].xy, instanceMatrix[1].xy ) * transformed.xy;
      gl_Position = projectionMatrix * mvPosition;`)},a}function L3(n,t){let e=vi(77),i=[],s=[],r=[];for(let[y,w,M,S,P=S>=1.3]of t){let C=Math.round(20*S);for(let z=0;z<C;z++)i.push({x:y,y:w,z:M,s:S,ph:e.next(),sp:e.range(1.1,2),ox:e.range(-.7,.7),oz:e.range(-.7,.7),h:e.range(1.4,3.2),sz:e.range(.32,.62),rot:e.range(0,6.28)});for(let z=0;z<Math.round(10*S);z++)s.push({x:y,y:w,z:M,s:S,ph:e.next(),sp:e.range(.18,.35),ox:e.range(-.8,.8),oz:e.range(-.8,.8),w:e.range(0,6.28)});if(P)for(let z=0;z<30;z++)r.push({x:y,y:w,z:M,s:S,ph:z/30+e.range(0,.02),sp:e.range(.075,.095),ox:e.range(-.8,.8),oz:e.range(-.8,.8),rot:e.range(0,6.28),v:e.range(.8,1.2)})}let a=new Ln(1,1,1),l=new an({color:16777215,blending:ii,transparent:!0,depthWrite:!1,fog:!1}),c=new Vn(a,l,i.length+s.length);c.frustumCulled=!1,c.instanceColor=new gi(new Float32Array((i.length+s.length)*3),3);let o=new Vn(new ni(1,1),P3(),r.length);o.frustumCulled=!1,o.instanceColor=new gi(new Float32Array(r.length*3),3),o.renderOrder=1,c.name="flames",o.name="smoke",n.add(c,o);let u=new pe,f=new je,h=new Pn,d=new q,p=new q,x=new Qt,_=new Qt(7,5.2,2.4),g=new Qt(5.5,2,.45),A=new Qt(1.4,.3,.08),E=new Qt(3812392),m=new Qt(8746624),v=new Qt(.9,.35,.08);return y=>{let w=0;for(let M of i){let S=Wf(y*M.sp+M.ph),P=M.s;d.set(M.x+M.ox*P*(1-S*.7)+hr.x*S*S*P*.9,M.y+.15+S*M.h*P,M.z+M.oz*P*(1-S*.7)+hr.z*S*S*P*.9);let C=M.sz*P*Math.pow(1-S,.7)*(.75+.25*Math.sin(y*17+M.rot));f.setFromEuler(h.set(0,M.rot+y*1.5,0)),c.setMatrixAt(w,u.compose(d,f,p.set(C,C*1.35,C))),S<.3?x.copy(_).lerp(g,S/.3):x.copy(g).lerp(A,(S-.3)/.7),c.setColorAt(w++,x.multiplyScalar(1-S*.5))}for(let M of s){let S=Wf(y*M.sp+M.ph),P=M.s;d.set(M.x+M.ox*P+hr.x*S*10*P+Math.sin(S*19+M.w)*.5,M.y+.8+S*13*P,M.z+M.oz*P+hr.z*S*10*P+Math.cos(S*15+M.w)*.5);let C=.09*(1-S*.6)*(Math.sin(y*23+M.w*5)>-.3?1:.25);c.setMatrixAt(w,u.compose(d,f.identity(),p.set(C,C,C))),c.setColorAt(w++,x.setRGB(8,3.4,.9).multiplyScalar(1-S))}c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,r.forEach((M,S)=>{let P=Wf(y*M.sp+M.ph),C=M.s,z=P*P*15*C;d.set(M.x+M.ox*C+hr.x*z,M.y+1.6*C+P*17*C,M.z+M.oz*C+hr.z*z);let U=C*M.v*(.7+3.6*P)*Math.min(1,P/.06)*(1-Math.max(0,(P-.78)/.22));f.setFromEuler(h.set(0,0,M.rot+y*.2*(M.v-1))),o.setMatrixAt(S,u.compose(d,f,p.set(U*1.3,U*1.3,1))),x.copy(E).lerp(m,Math.min(1,P*1.4));let V=Math.max(0,1-P/.18);x.r+=v.r*V,x.g+=v.g*V,x.b+=v.b*V,o.setColorAt(S,x)}),o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0}}function D3(n,t,e){let i=s=>Math.cos(s)<.45;for(let s=0;s<Math.PI*2;s+=.0105){if(!i(s)||t.chance(.07))continue;let r=64+Math.sin(s*5)*2.5,a=Math.sin(s)*r,l=Math.cos(s)*r,c=t.range(2.3,3.1);n.push({s:[.34,c,.34],p:[a,c/2,l],r:[t.range(-.08,.08),s,t.range(-.1,.1)],c:tn(5913898,t.range(.75,1.1))}),n.push({s:[.2,.35,.2],p:[a,c+.15,l],c:tn(7228468,t.range(.8,1.1))}),t.chance(.2)&&n.push({s:[.22,.22,2.2],p:[a,1.2,l],r:[0,s+Math.PI/2,0],c:4074013})}for(let s=0;s<16;s++){let r=Math.PI*(.62+t.range(-.36,.36)+(s%2?.5:-.5)*t.range(0,.4))+(s<8?0:Math.PI);if(!i(r))continue;let a=t.range(72,98),l=Math.sin(r)*a,c=Math.cos(r)*a,o=t.chance(.5)?9056293:11573884,u=t.range(4,6),f=t.range(4.5,7);for(let h=0;h<5;h++)n.push({s:[u*(1-h*.19),.7,f],p:[l,.35+h*.7,c],r:[0,r,0],c:tn(o,1-h*.04)});n.push({s:[.2,4.6,.2],p:[l,2.3,c],c:3810840})}for(let s=0;s<14;s++){let r=s/14*Math.PI*2+t.range(-.1,.1),a=Math.sin(r)*t.range(49,53),l=Math.cos(r)*t.range(49,53);if(l>30&&Math.abs(a-e)<14)continue;let c=r+Math.PI/2+t.range(-.3,.3);n.push({s:[5,.34,.34],p:[a,.55,l],r:[0,c,0],c:4862498});for(let o=0;o<5;o++){let u=(o-2)*1.1,f=a+Math.cos(c)*u,h=l-Math.sin(c)*u;n.push({s:[.16,2.2,.16],p:[f,.8,h],r:[.75,c,0],c:6177584},{s:[.16,2.2,.16],p:[f,.8,h],r:[-.75,c,0],c:6177584})}}for(let s=0;s<26;s++){let r=t.range(0,Math.PI*2);if(!i(r))continue;let a=t.range(55,62),l=Math.sin(r)*a,c=Math.cos(r)*a,o=t.range(.7,1.1);n.push({s:[o,o,o],p:[l,o/2,c],r:[0,t.range(0,3),0],c:tn(7229496,t.range(.8,1.1))}),t.chance(.5)&&n.push({s:[o*.8,o*.8,o*.8],p:[l+.2,o+o*.4,c],r:[0,t.range(0,3),0],c:tn(5914672,t.range(.8,1.1))})}}function hg(n,{wallZ:t,gateX:e,castle:i,fieldFires:s}){let r=vi(44),a=[],l=[],c=(L,D=!0)=>new Qe({map:L,emissiveMap:L,emissive:16777215,emissiveIntensity:.22,side:En,alphaTest:D?.5:0,roughness:.92,flatShading:!0}),o={horde:c(Xr("down",{bg:"#6a1c14",border:"#200c08",seed:3})),guard:c(Xr("up",{bg:"#ddd1b0",border:"#17261d",w:192,h:256,seed:5})),guardFlag:c(Xr("up",{bg:"#d2c5a2",border:"#17261d",w:128,h:96,tatter:!1,seed:6}),!1),red:c(Xr(null,{bg:"#a3321f",border:"#6a1c12",w:64,h:128,seed:7}))},u=(L,D,B,b,j,it,J,vt)=>{let Nt=Kc(L,D,B,b,r.range(0,6.28));return Nt.position.set(j,it,J),Nt.rotation.y=vt,n.add(Nt),l.push(Nt),Nt},f=(L,D,B=1,b=o.horde,j=8.5*B)=>{let it=2.3*B,J=4.3*B,vt=Math.atan2(-L,-D)+r.range(-.35,.35),Nt=Math.cos(vt),Z=-Math.sin(vt);a.push({s:[.2*B,j,.2*B],p:[L,j/2,D],c:3877406}),a.push({s:[it+.5,.16*B,.16*B],p:[L+Nt*(it/2),j-.3*B,D+Z*(it/2)],r:[0,vt,0],c:3877406}),a.push({s:[.14,.5,.14],p:[L+Nt*(it+.25),j-.3*B,D+Z*(it+.25)],c:7035434}),a.push({s:[.12,.8*B,.12],p:[L,j+.4*B,D],c:12103840}),u(b,it,J,"hang",L+Nt*.12,j-.4*B,D+Z*.12,vt)};for(let L=0;L<22;L++){let D=L/22*Math.PI*2+r.range(-.08,.08);if(Math.cos(D)>.62)continue;let B=L%2?r.range(47,52):r.range(58,62);f(Math.sin(D)*B,Math.cos(D)*B,r.range(.95,1.25),r.chance(.15)?o.red:o.horde)}for(let[L,D,B]of[[40,30,1.35],[47,22,1.2],[36,40,1.1],[52,34,1.25]])f(L,D,B);for(let[L,D,B,b]of[[-57,10,1.1],[-51,21,1.05],[-43,30,1,1],[-33,39,1.1],[-2,48,1.05],[8,49,1],[24.5,42,1.1],[36,33,1.05,1]])f(L,D,B,b?o.red:o.horde,7.3*B);for(let[L,D,B]of[[52,74,1.25],[62,58,1.2],[74,70,1.3]])f(L,D,B);u(o.guard,7.5,9.5,"drape",e-18+3.75,i.H-.3,t-.35,Math.PI),a.push({s:[8.6,.35,.35],p:[e-18,i.H-.15,t-.4],c:3877406});let h=(L,D,B,b=3.2,j=o.guardFlag)=>{a.push({s:[.12,b+1.4,.12],p:[L,D+(b+1.4)/2,B],c:3877406}),u(j,1.9,1.3,"flag",L,D+b+1.3,B,Math.atan2(-hr.z,hr.x))};for(let L=-150;L<i.x1-4;L+=16)Math.abs(L-e)>12&&h(L+r.range(-2,2),i.H,t+.8);h(e-7,i.H+.6,t+1,9),h(e+7,i.H+.6,t+1,9),h(i.cornerX+4,i.towerH,t-.5,4);for(let[L,D,B,b]of i.towers)h(L+1.4*b,B+1,D-1.4*b,3,D>0?o.guardFlag:o.red);let d=[];for(let L=0;L<26;L++){let D=r.range(0,Math.PI*2),B=r.range(76,170),b=Math.sin(D)*B,j=Math.cos(D)*B,it=Math.atan2(-b,-j);if(Math.cos(D)>.35&&b<i.x1+22)continue;let J=r.int(8,16),vt=r.int(5,10);for(let Nt=0;Nt<J;Nt++)for(let Z=0;Z<vt;Z++){let at=(Nt-J/2)*1.3+r.range(-.2,.2),pt=(Z-vt/2)*1.4+r.range(-.2,.2);d.push({x:b+at*Math.cos(it)+pt*Math.sin(it),z:j-at*Math.sin(it)+pt*Math.cos(it),yaw:it+r.range(-.2,.2),ph:r.range(0,6.28)})}r.chance(.6)&&f(b,j,r.range(1,1.3))}let p=new Vn(Vf(Hf.horde),Gf(),d.length);p.name="reserve-army",n.add(p);let x=new pe,_=new je,g=new q,A=new q(1,1,1),E=new q(0,1,0),m=L=>{d.forEach((D,B)=>p.setMatrixAt(B,x.compose(g.set(D.x,Math.max(0,Math.sin(L*2.2+D.ph))*.06,D.z),_.setFromAxisAngle(E,D.yaw),A))),p.instanceMatrix.needsUpdate=!0},v=new Qe({map:o.horde.map,color:10128e3,side:En,alphaTest:.5,roughness:.95});for(let L=0;L<7;L++){let D=r.range(0,6.28),B=r.range(12,42),b=Math.sin(D)*B,j=Math.cos(D)*B,it=r.range(0,6.28),J=new Re(new ni(2.3,4.3,3,4),v);J.rotation.set(-Math.PI/2,0,it),J.position.set(b,.14,j),J.receiveShadow=!0,n.add(J),a.push({s:[.2,.2,6],p:[b+Math.cos(it)*1.6,.12,j-Math.sin(it)*1.6],r:[0,it+.15,0],c:3877406})}let y=document.createElement("canvas");y.width=y.height=64;let w=y.getContext("2d"),M=w.createRadialGradient(32,32,0,32,32,32);M.addColorStop(0,"rgba(255,255,255,1)"),M.addColorStop(.5,"rgba(255,255,255,0.45)"),M.addColorStop(1,"rgba(255,255,255,0)"),w.fillStyle=M,w.fillRect(0,0,64,64);let S=new cs(y),P=[];for(let L=0;L<34;L++){let D=L<14,B=r.range(0,Math.PI*2),b=r.range(52,90),j=D?r.range(-80,i.x1):Math.sin(B)*b,it=D?t-r.range(3,12):Math.cos(B)*b;if(!D&&Math.cos(B)>.5)continue;let J=new _c(new mo({map:S,color:D?13147264:11570300,transparent:!0,opacity:D?r.range(.035,.07):r.range(.08,.16),depthWrite:!1})),vt=r.range(14,26);J.scale.set(vt,vt*r.range(.3,.45),1),J.position.set(j,vt*.12,it),J.userData={x:j,ph:r.range(0,6.28),sp:r.range(.2,.5)},n.add(J),P.push(J)}let C=[];D3(C,r,e);for(let L=0;L<26;L++){let D=r.range(0,6.28),B=r.range(8,44),b=Math.sin(D)*B,j=Math.cos(D)*B,it=r.range(.2,.5),J=r.range(-.4,.4)+2.5;for(let vt=0;vt<r.int(5,12);vt++){let Nt=b+r.range(-1.6,1.6),Z=j+r.range(-1.6,1.6);C.push({s:[.035,.85,.035],p:[Nt,.3,Z],r:[it,J,0],c:4863268},{s:[.09,.14,.02],p:[Nt+Math.sin(J)*Math.sin(it)*.4,.3+Math.cos(it)*.4,Z+Math.cos(J)*Math.sin(it)*.4],r:[it,J,0],c:14208960})}}for(let[L,,D,B]of s){let b=r.range(0,3);C.push({s:[1.6*B,.14,2.6*B],p:[L+.4,.55,D],r:[.35,b,.2],c:2759184});for(let j of[-1,1])C.push({s:[.16,1.1*B,1.1*B],p:[L+Math.cos(b)*j*.9*B,.5*B,D-Math.sin(b)*j*.9*B],r:[0,b,.4*j],c:2364944})}for(let L=0;L<90;L++){let D=r.range(-110,i.x1),B=r.range(.3,.9);Math.abs(D-e)<7||C.push({s:[B,B*r.range(.5,1),B],p:[D,B*.35,t-r.range(.6,3.5)],r:[r.range(-.3,.3),r.range(0,3),r.range(-.3,.3)],c:tn(6180428,r.range(.75,1.15))})}let z=new Re(Dn(a.concat(C)),Gf());z.castShadow=!0,z.receiveShadow=!0,n.add(z);let U=[...i.fires,...s],V=[];for(let[L,D,B,b]of U)V.push({s:[1.8*b,.32*b,.32*b],p:[L,D+.16*b,B],r:[0,.5,0],c:2364688},{s:[1.8*b,.32*b,.32*b],p:[L,D+.36*b,B],r:[0,-.7,0],c:3021840}),V.push({s:[.6*b,.12,.6*b],p:[L,D+.08,B],c:16751162});n.add(new Re(Dn(V),Gf()));let Y=[[-45,0,-112,3.2],[38,0,-150,3.6],[-100,0,-88,3],[-128,0,22,3.4],[112,0,-34,3.2],[-62,0,88,3.4]],ct=L3(n,U.concat(Y));return{fires:U.filter(L=>L[1]<1).map(([L,D,B])=>({position:new q(L,D,B)})),cloths:l,update(L){for(let D of l)Po(D,L);ct(L),m(L);for(let D of P)D.position.x=D.userData.x+Math.sin(L*.05*D.userData.sp+D.userData.ph)*4+hr.x*(L*D.userData.sp%8)}}}var yi=46,Pi=100,Ji=-10,ug=[[-40,0,24,1.3],[38,0,-24,1.2],[-22,0,-44,1.4],[30,0,36,1.1],[-47,0,-8,1],[50,0,10,1.3]],fg=new q(.5,.58,.64).normalize();eg();function dg(n){n.background=$c.clone(),n.fog=new mc($c.clone(),28,240);let t=ng();n.add(t);let e=new Tc(11446982,9337454,2);n.add(e);let i=new yo(16768192,3.5);i.castShadow=!0,i.shadow.mapSize.set(2048,2048);let s=i.shadow.camera;s.left=-28,s.right=28,s.top=28,s.bottom=-28,s.near=1,s.far=160,i.shadow.bias=-6e-4,i.shadow.normalBias=.03,n.add(i,i.target);let r=new yo(16756858,1.2);r.position.copy(On).multiplyScalar(100),n.add(r),rg(n,Ji,ug);let a=lg(n,{wallZ:Pi,gateX:Ji}),l=hg(n,{wallZ:Pi,gateX:Ji,castle:a,fieldFires:ug}),c=[[Ji-6.5,2.2,Pi-3.5],[Ji+7,2.2,Pi-3.5],[-40,2,24]].map(([f,h,d])=>{let p=new pa(16747066,30,11,2);return p.position.set(f,h,d),n.add(p),p}),o=new q,u=0;return{sun:i,hemi:e,fires:l.fires,banners:l.cloths,sunDir:On,lightDir:fg,update(f,h){u+=f;let d=56/2048;o.set(Math.round(h.x/d)*d,0,Math.round(h.z/d)*d),i.target.position.copy(o),i.position.copy(fg).multiplyScalar(70).add(o),t.material.uniforms.uTime.value=u,l.update(u),a.update(u),c.forEach((p,x)=>{p.intensity=28+Math.sin(u*(13+x*3.1)+x)*5+Math.sin(u*7.3+x*2)*4})}}}var An={thigh:.44,shin:.44,upper:.29,fore:.27,spine:.12,chest:.2,neck:.24,headUp:.04,shoulderX:.235,shoulderY:.2,hipX:.11,hipY:-.05,spearTip:1.95,spearButt:-.72,spearHead:1.6},Ls=1.08;function Mg(n){Ls=n}var Te={hips:0,hipsR:3,spine:6,chest:9,head:12,footL:15,footR:20,spear:25,gripR:31,gripL:32,lfree:33,armL:34,spin:38,plant:39},Wi=40,bg=[3,4,5,6,7,8,9,10,11,12,13,14,18,19,23,24,28,29,30,34,35,36,37,38],Sg=new Uint8Array(Wi);for(let n of bg)Sg[n]=1;var Kf=Math.PI/180,Cu={hips:[0,.9,0],hipsR:[0,-25,0],spine:[6,6,0],chest:[4,8,0],head:[2,6,0],footL:[.17,.08,.3,0,15],footR:[-.2,.08,-.26,0,-30],spear:[-.24,.98,0,30,30,0],gripR:0,gripL:.5,lfree:0,armL:[0,0,0,0],spin:0,plant:0};function ve(n={},t=Cu){let e={...t,...n},i=new Float32Array(Wi),s=(r,a)=>{for(let l=0;l<a.length;l++)i[r+l]=a[l]};s(Te.hips,e.hips),s(Te.hipsR,e.hipsR),s(Te.spine,e.spine),s(Te.chest,e.chest),s(Te.head,e.head),s(Te.footL,e.footL),s(Te.footR,e.footR),s(Te.spear,e.spear),i[Te.gripR]=e.gripR,i[Te.gripL]=e.gripL,i[Te.lfree]=e.lfree,s(Te.armL,e.armL),i[Te.spin]=e.spin,i[Te.plant]=e.plant||0;for(let r of bg)i[r]*=Kf;return i}function Mn(n,t,e,i=0,s=.9){let r=t*Kf,a=e*Kf,l=Math.sin(r)*Math.cos(a),c=Math.sin(a),o=Math.cos(r)*Math.cos(a);return[n[0]-l*s,n[1]-c*s,n[2]-o*s,t,e,i]}var F3={lin:n=>n,in:n=>n*n,out:n=>1-(1-n)*(1-n),io:n=>n*n*(3-2*n),snap:n=>1-Math.pow(1-n,4)};function Wn(n,t=!1,e=!1){return{keys:n.map(([i,s,r])=>({t:i,p:s,e:F3[r||"io"]})),loop:t,mono:e}}function pg(n,t,e,i,s){let r=i>0?(t-n)/i:0,a=s>0?(e-t)/s:0;if(r*a<=0)return 0;let l=(r+a)/2,c=3*Math.min(Math.abs(r),Math.abs(a));return Math.abs(l)>c?Math.sign(l)*c:l}function No(n,t,e){let i=n.keys,s=i.length;if(s===1)return e.set(i[0].p),e;n.loop?t-=Math.floor(t):t=Math.min(1,Math.max(0,t));let r=0;for(;r<s-2&&t>=i[r+1].t;)r++;let a=i[r],l=i[r+1],c=l.t>a.t?(t-a.t)/(l.t-a.t):1;c=l.e(Math.min(1,Math.max(0,c)));let o=i[r-1]||(n.loop?i[s-2]:a),u=i[r+2]||(n.loop?i[1]:l),f=o.p,h=u.p,d=a.p,p=l.p,x=c*c,_=x*c,g=a.t-o.t,A=l.t-a.t,E=u.t-l.t;for(let m=0;m<Wi;m++){let v,y;n.mono?(v=pg(f[m],d[m],p[m],g,A)*A,y=pg(d[m],p[m],h[m],A,E)*A):(v=(p[m]-f[m])*.5,y=(h[m]-d[m])*.5),e[m]=(2*_-3*x+1)*d[m]+(_-2*x+c)*v+(-2*_+3*x)*p[m]+(_-x)*y}return n.feet&&n.feet(t,e),e}function Jf(n,t,e,i){for(let s=0;s<Wi;s++){let r=t[s]-n[s];Sg[s]&&(r-=Math.round(r/(2*Math.PI))*2*Math.PI),i[s]=n[s]+r*e}return i}var Zc=n=>n-Math.round(n/(2*Math.PI))*2*Math.PI;function Zf(n,t,e){let i=n[Te.plant],s=n[Te.spin],r=Math.cos(s),a=Math.sin(s),l=n[t],c=n[t+2];return e[0]=l+(1-i)*(l*r+c*a-l),e[1]=c+(1-i)*(-l*a+c*r-c),e[2]=n[t+4]+(1-i)*Zc(s),e}var Lo=[0,0,0];function wg(n,t){let e=Math.cos(t),i=Math.sin(t);for(let s of[Te.footL,Te.footR])Zf(n,s,Lo),n[s]=Lo[0]*e+Lo[1]*i,n[s+2]=-Lo[0]*i+Lo[1]*e,n[s+4]=Lo[2]+t;return n[Te.plant]=1,n[Te.spin]+=t,n}var Au=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],Xf=[Te.footL,Te.footR];function Eg(n,t,e,i,s=0,r=0){for(let a=0;a<2;a++)Zf(n,Xf[a],Au[a]),Zf(t,Xf[a],Au[a+2]);Jf(n,t,e,i);for(let a=0;a<2;a++){let l=Xf[a],c=Au[a],o=Au[a+2],u=c[0]-s,f=c[1]-r,h=Math.hypot(o[0]-u,o[1]-f);i[l]=u+(o[0]-u)*e,i[l+2]=f+(o[1]-f)*e,i[l+4]=c[2]+Zc(o[2]-c[2])*e,h>.04&&(i[l+1]+=Math.sqrt(4*e*(1-e))*Math.min(.2,.45*h))}return i[Te.plant]=1,i}var N3=.03,U3=2,k3=.8;function Tg(n,t){let e=n[29],i=n[26]+(t-N3)/Ls;for(let[s,r]of[[k3,-1],[U3,1]]){let a=-i/s*r;if((r>0?Math.sin(e)>=a:Math.sin(e)<=a)||Math.abs(a)>=1)continue;let l=Math.asin(a),c=Zc(l-e),o=Zc(Math.PI-l-e);e+=Math.abs(c)<Math.abs(o)?c:o}return e}var fr=new q,jf=new q,mg=new q,gg=new q,fs=new q,Ru=new q,$f=new q,Qi=new q,Gi=new je,us=new je,xg=new pe,Fo=new Pn(0,0,0,"YXZ"),vg=new q,Sa=new q,Do=new q,Yf=new q,ur=new q;function yg(n,t,e){Sa.copy(t).normalize().negate(),Do.copy(e).addScaledVector(Sa,-e.dot(Sa)),Do.lengthSq()<1e-8&&Do.set(0,0,1).addScaledVector(Sa,-Sa.z),Do.normalize(),vg.crossVectors(Sa,Do),xg.makeBasis(vg,Sa,Do),Gi.setFromRotationMatrix(xg),n.parent.getWorldQuaternion(us),n.quaternion.copy(us.invert().multiply(Gi)),n.updateMatrixWorld(!0)}function _g(n,t,e,i,s,r,a){n.getWorldPosition(fs),ur.subVectors(e,fs);let l=ur.length(),c=(s+r)*.9995,o=Math.max(0,l-c);l=Math.min(Math.max(l,Math.abs(s-r)+.001),c),ur.normalize();let u=(s*s+l*l-r*r)/(2*s*l),f=Math.sqrt(Math.max(0,1-u*u));return Qi.copy(i).addScaledVector(ur,-i.dot(ur)),Qi.lengthSq()<1e-8&&Qi.set(0,-1,0).addScaledVector(ur,ur.y),Qi.normalize(),$f.copy(fs).addScaledVector(ur,s*u).addScaledVector(Qi,s*f),Ru.copy(fs).addScaledVector(ur,l),yg(n,gg.subVectors($f,fs),a||Qi),yg(t,gg.subVectors(Ru,$f),a||Qi),o}function O3(n,t,e,i,s){fr.subVectors(t,n);let r=fr.dot(e),a=fr.lengthSq()-s*s,l=r*r-a;if(l<0)return-r;let c=Math.sqrt(l);return Math.min(Math.max(i,-r-c),-r+c)}function Ag(){let n={},t=(f,h,d=0,p=0,x=0)=>{let _=new qn;return _.name=f,_.position.set(d,p,x),_.rotation.order="YXZ",h&&h.add(_),n[f]=_,_};t("root",null),t("hips",n.root,0,.9,0),t("spine",n.hips,0,.06,0),t("chest",n.spine,0,An.spine+.08,0),t("neck",n.chest,0,An.neck,0),t("head",n.neck,0,An.headUp,0);for(let[f,h]of[["R",-1],["L",1]])t("shoulder"+f,n.chest,h*An.shoulderX,An.shoulderY,-.01),t("upperArm"+f,n["shoulder"+f]),t("foreArm"+f,n["upperArm"+f],0,-An.upper,0),t("hand"+f,n["foreArm"+f],0,-An.fore,0),t("thigh"+f,n.hips,h*An.hipX,An.hipY,0),t("shin"+f,n["thigh"+f],0,-An.thigh,0),t("foot"+f,n["shin"+f],0,-An.shin,0);t("weapon",n.root);let e=(An.upper+An.fore)*.985,i=new q,s=new q,r=new q,a=new je,l=new je,c=new je,o=[new q,new q],u={joints:n,root:n.root,reachError:0,grips:{R:0,L:0},apply(f,h,d){let p=n.root;p.position.copy(h),p.rotation.set(0,d+f[38],0),n.hips.position.set(f[0],f[1],f[2]),n.hips.rotation.set(f[3],f[4],f[5]),n.spine.rotation.set(f[6],f[7],f[8]),n.chest.rotation.set(f[9],f[10],f[11]),n.head.rotation.set(f[12]-f[3]-f[6]-f[9],f[13]-f[4]-f[7]-f[10],f[14]),n.weapon.position.set(f[25],f[26],f[27]),n.weapon.rotation.set(-Tg(f,h.y),f[28],f[30]);for(let v of["R","L"])n["upperArm"+v].quaternion.identity(),n["foreArm"+v].quaternion.identity(),n["thigh"+v].quaternion.identity(),n["shin"+v].quaternion.identity();p.updateMatrixWorld(!0);let x=f[39],_=Math.cos(f[38]),g=Math.sin(f[38]),A=0;for(let v=0;v<2;v++){let y=v?20:15,w=f[y],M=f[y+2],S=o[v];S.set(w+x*(w*_-M*g-w),f[y+1],M+x*(w*g+M*_-M)).applyMatrix4(p.matrixWorld),n[v?"thighR":"thighL"].getWorldPosition(fs);let P=Math.hypot(S.x-fs.x,S.z-fs.z),C=(An.thigh+An.shin)*.995,z=fs.y-S.y;f[y+1]<.12&&P<C&&z>0&&P*P+z*z>C*C&&(A=Math.max(A,z-Math.sqrt(C*C-P*P)))}A>0&&(n.hips.position.y-=Math.min(.12,A),n.hips.updateMatrixWorld(!0)),p.getWorldQuaternion(a),n.chest.getWorldQuaternion(l),n.weapon.getWorldQuaternion(c),n.weapon.getWorldPosition(Yf),r.set(0,0,1).applyQuaternion(c);let E=0,m=f[33];for(let v of["R","L"]){let y=v==="R"?-1:1,w=n["upperArm"+v],M=n["foreArm"+v],S=n["hand"+v];w.getWorldPosition(fs);let P=v==="R"?f[31]:f[32],C=O3(fs,Yf,r,P,e);if(v==="L"){let z=u.grips.R;Math.abs(C-z)<.12&&(C=z+(P>=z?.12:-.12))}u.grips[v]=C,i.copy(Yf).addScaledVector(r,C),Qi.set(y*.7,-.6,-.5).applyQuaternion(l),v==="L"&&m>.001&&(Fo.set(f[34],f[35],f[36]),Gi.setFromEuler(Fo),us.copy(l).multiply(Gi),s.set(0,-An.upper,0).applyQuaternion(us).add(fs),Gi.setFromAxisAngle(jf.set(1,0,0),-f[37]),us.multiply(Gi),s.add(mg.set(0,-An.fore,0).applyQuaternion(us)),i.lerp(s,m),Qi.lerp(jf.set(y*.5,-.2,-.8).applyQuaternion(us),m)),E=Math.max(E,_g(w,M,i,Qi,An.upper,An.fore,mg.copy(Qi).negate())),M.getWorldQuaternion(us),Gi.copy(c),v==="L"&&m>.001&&Gi.slerp(us,m),S.quaternion.copy(us.invert().multiply(Gi)),S.updateMatrixWorld(!0)}u.reachError=E;for(let v of["L","R"]){let y=v==="L"?15:20,w=v==="L"?1:-1;Ru.copy(o[v==="L"?0:1]);let M=f[y+4]-x*Zc(f[38]);Qi.set(Math.sin(M)+w*.25,.05,Math.cos(M)).applyQuaternion(a),_g(n["thigh"+v],n["shin"+v],Ru,Qi,An.thigh,An.shin,null);let S=n["foot"+v];Fo.set(f[y+3],M,0),Gi.setFromEuler(Fo),Gi.premultiply(a),n["shin"+v].getWorldQuaternion(us),S.quaternion.copy(us.invert().multiply(Gi)),S.updateMatrixWorld(!0)}}};return u}function Rg(n,t,e,i,s,r,a){Fo.set(-Tg(n,t.y),n[28],n[30]),Gi.setFromEuler(Fo);let l=Math.cos(e+n[38]),c=Math.sin(e+n[38]);for(let[o,u]of[[i,r],[s,a]])fr.set(0,0,o).applyQuaternion(Gi).add(jf.set(n[25],n[26],n[27])).multiplyScalar(Ls),u.set(t.x+fr.x*l+fr.z*c,t.y+fr.y,t.z-fr.x*c+fr.z*l)}var jt={n1:{frames:35,next:"n2",charge:"c2",cancel:23,branch:11,dodgeCancel:11,steer:5,lunge:[[2,9,.3]],hits:[{f:[7,10],every:99,shape:"arc",range:2.5,ang:110,dir:-20,dmg:12,kb:"flinch",force:3,hitstop:3}]},n2:{frames:35,next:"n3",charge:"c3",cancel:25,branch:13,dodgeCancel:13,steer:4,lunge:[[0,9,.8]],hits:[{f:[9,12],sweep:1,shape:"arc",range:2.4,ang:130,dir:10,dmg:12,kb:"flinch",force:3,hitstop:3}]},n3:{frames:30,next:"n4",charge:"c4",cancel:20,branch:14,dodgeCancel:14,steer:5,lunge:[[7,12,.4]],hits:[{f:[10,13],sweep:1,shape:"arc",range:2.4,ang:170,dir:20,dmg:14,kb:"push",force:6,hitstop:3}]},n4:{frames:38,next:"n5",charge:"c5",cancel:28,branch:24,dodgeCancel:17,steer:6,lunge:[[0,14,1.3]],hits:[{f:[14,23],sweep:1,sweepN:5,shape:"arc",range:2.6,ang:160,dir:25,dmg:14,kb:"flinch",force:4,hitstop:3}]},n5:{frames:50,next:"n6",charge:"c6",cancel:32,branch:22,dodgeCancel:22,steer:4,lunge:[[8,12,.15],[16,20,.2]],hits:[{f:[12,14],every:99,shape:"line",len:2.3,width:1.2,dmg:10,kb:"flinch",force:3,hitstop:2},{f:[19,21],every:99,shape:"arc",range:2.2,ang:120,dir:-20,dmg:12,kb:"push",force:5,hitstop:3}]},n6:{frames:48,next:"n1",charge:"c1",cancel:38,dodgeCancel:19,steer:6,lunge:[[3,14,1.4]],armor:!0,hits:[{f:[15,18],sweep:-1,dir:-180,shape:"circle",range:2.4,dmg:26,kb:"blow",force:12,lift:6,hitstop:7,heavy:!0}]},c1:{frames:56,cancel:50,dodgeCancel:29,steer:12,lunge:[[22,28,.8]],armor:!0,hits:[{f:[25,29],every:99,shape:"arc",range:3.8,ang:170,dmg:18,kb:"launch",force:2,lift:10,hitstop:6,heavy:!0}]},c2:{frames:112,cancel:104,dodgeCancel:84,steer:10,lunge:[[4,16,.8],[26,80,2.4]],armor:!0,leap:[26,13],landFrame:84,anim:[[0,0],[24,.21428571428571427],[26,.1,"jatk"],[40,.2],[47,.42],[64,.8],[83,.9],[83,.8928571428571429,"c2"],[84,.9285714285714286],[104,.9285714285714286],[112,1]],hits:[{f:[16,19],every:99,shape:"line",len:4.4,width:2.4,dmg:18,kb:"launch",force:3,lift:11,hitstop:5,heavy:!0},{f:[46,58],every:6,shape:"circle",range:3.6,dmg:10,kb:"launch",force:3,lift:5,hitstop:2,yMax:5.5}]},c3:{frames:114,cancel:104,dodgeCancel:77,steer:12,lunge:[[11,43,1.4],[49,53,1]],armor:!0,hits:[{f:[13,43],shape:"line",len:4.2,width:2.4,dmg:6,kb:"flinch",force:1.5,hitstop:1,every:6},{f:[52,55],every:99,shape:"arc",range:3.6,ang:200,dmg:16,kb:"flinch",force:3,hitstop:6,heavy:!0},{f:[74,77],every:99,shape:"circle",range:3.8,dmg:26,kb:"launch",force:3,lift:10,hitstop:8,heavy:!0,pillars:9}]},c4:{frames:76,cancel:66,dodgeCancel:52,steer:16,lunge:[[22,38,.8]],armor:!0,hits:[{f:[24,52],shape:"circle",range:4.2,dmg:11,kb:"spin",force:6,lift:3,hitstop:3,every:10}]},c5:{frames:80,cancel:72,dodgeCancel:54,steer:12,lunge:[[14,40,2.4]],armor:!0,anim:[[0,0],[14,.15],[38,.275],[44,.55],[80,1]],hits:[{f:[24,27],every:99,shape:"circle",range:3.2,dmg:8,kb:"flinch",force:2,hitstop:2},{f:[50,54],every:99,shape:"circle",range:4.6,dmg:26,kb:"launch",force:5,lift:9,hitstop:8,heavy:!0}]},c6:{frames:130,cancel:120,dodgeCancel:95,steer:8,lunge:[[10,66,1.8],[72,82,.8]],armor:!0,leap:[72,11],plunge:[80,-26],landFrame:82,hits:[{f:[10,62],shape:"circle",range:3.6,dmg:5,kb:"flinch",force:.8,hitstop:1,every:10,yMax:4},{f:[82,85],every:99,shape:"circle",range:4.2,dmg:18,kb:"launch",force:3,lift:8,hitstop:6,heavy:!0,yMax:4},{f:[92,95],every:99,shape:"circle",range:5.2,dmg:30,kb:"blow",force:15,lift:7,hitstop:8,heavy:!0,yMax:4.5,rocks:18}]},dash:{frames:88,cancel:80,dodgeCancel:40,steer:3,lunge:[[0,43,6.1,"lin"],[43,56,2.2]],anim:[[0,.1,"n4"],[3,.3],[13,.72],[18,.72],[18,.3],[28,.72],[33,.72],[33,.3],[43,.72],[43,0,"dash"],[48,.18],[64,.45],[88,1]],hits:[{f:[5,8],every:99,shape:"circle",range:3.2,dmg:10,kb:"flinch",force:4,hitstop:2},{f:[20,23],every:99,shape:"circle",range:3.2,dmg:10,kb:"flinch",force:4,hitstop:2},{f:[35,38],every:99,shape:"circle",range:3.2,dmg:12,kb:"push",force:6,hitstop:2},{f:[47,52],every:99,shape:"line",len:4.2,width:2.2,dmg:20,kb:"blow",force:11,lift:4,hitstop:5,heavy:!0}]},jatk:{frames:22,air:!0,hover:2.6,next:"jatk",charge:"jc",cancel:12,dodgeCancel:99,steer:3,anim:[[0,0],[4,.2],[9,.42],[22,1]],hits:[{f:[5,9],every:99,shape:"arc",range:3.6,ang:220,dmg:12,kb:"flinch",force:3,hitstop:2,yMax:4.5}]},jc:{frames:56,air:!0,hover:3,landFrame:36,hang:[6,32],plunge:[32,-80],cancel:50,dodgeCancel:39,steer:12,armor:!0,hits:[{f:[36,39],every:99,shape:"circle",range:4.4,dmg:22,kb:"launch",force:5,lift:8,hitstop:7,heavy:!0}]}},Uo={attack:"n1",charge:"c1",dash:"dash",air:"jatk",airCharge:"jc"},Qf=10;for(let[n,t]of Object.entries(jt))if(t.id=n,t.clip=t.clip||n,t.lunge=t.lunge||[],t.tell=t.hits.length?t.hits[0].f[0]:0,t.anim){let e=t.clip,i=0;t.anim.forEach((s,r)=>{(r&&s[0]===t.anim[r-1][0]||r&&s[2]&&s[2]!==e)&&i++,e=s[2]=s[2]||e,s[3]=i})}function dr(n,t){let e=n.anim;if(!e)return[n.clip,t/n.frames,0];let i=0;for(;i<e.length-1&&e[i+1][0]<=t;)i++;let s=e[i],r=e[i+1];return!r||r[3]!==s[3]||t<=s[0]?[s[2],s[1],s[3]]:[s[2],s[1]+(r[1]-s[1])*(t-s[0])/(r[0]-s[0]),s[3]]}dr(jt.n1,7)[1]===7/jt.n1.frames&&dr(jt.dash,18).join()==="n4,0.3,1"&&dr(jt.dash,15)[1]===.72&&dr(jt.dash,43)[0]==="dash"&&dr(jt.c2,25).join()===`c2,${24/112},0`&&dr(jt.c2,90)[1]===104/112&&dr(jt.c5,44)[1]===44/80||console.error("moves.js: anim timing self-check failed");["n1","n2","n3","n4","n5"].every(n=>jt[n].branch>jt[n].hits.at(-1).f[1]&&jt[n].branch<=jt[n].cancel)||console.error("moves.js: charge branch self-check failed");var ed=Math.PI/180;function $r(n,t){let e=0;for(let[i,s,r,a]of jt[n].lunge||[]){let l=Math.min(1,Math.max(0,(t-i)/(s-i)));e+=r*(a==="lin"?l:1-(1-l)*(1-l))}return e}var bn=Cu,z3=[.17,.08,.3,0,15],Fg=[-.2,.08,-.26,0,-30],nd=(n,t={})=>{let e=$r(n,jt[n].frames);return{fL:[.17,.08,.3+e,0,15],fR:[-.2,.08,-.26+e,0,-30],...t}},qi=(n,t,e,i)=>{let s=e*ed,r=Math.cos(s),a=Math.sin(s);return[i[0]*r+i[2]*a,i[1],-i[0]*a+i[2]*r+$r(n,t),i[3]||0,i[4]+e]},re=(n,t,e)=>[n,{feet:1,fL:t,fR:e}],wa=.12,B3=.035,H3=.004,Cg=3,V3=10,td=(n,t)=>Math.hypot(n[0]-t[0],n[2]-t[2]);function Ig(n,t){let e=n.length,i=n.map(r=>r.slice()),s=null;for(let r=0;r<e;){let a=n[r];if(a[1]>=wa){s=null,r++;continue}if(!s||td(a,s)<=B3||t(r)&&r<e-Cg-1){s=s||a,i[r][0]=s[0],i[r][1]=s[1],i[r][2]=s[2],r++;continue}let l=r-1,c=r;for(;c-l<V3&&c+1<e&&n[c+1][1]<wa&&td(n[c+1],n[c])>H3;)c++;c=Math.min(e-1,Math.max(c,l+Cg));let o=n[c],u=td(o,s),f=Math.min(.24,Math.max(.07,.45*u));for(let h=r;h<=c;h++){let d=(h-l)/(c-l),p=d*d*(3-2*d),x=4*d*(1-d);i[h][0]=s[0]+(o[0]-s[0])*p,i[h][2]=s[2]+(o[2]-s[2])*p,i[h][1]=Math.max(n[h][1],s[1]+(o[1]-s[1])*p+f*x),i[h][3]=n[h][3]-.3*x}s=o[1]<wa?o:null,r=c+1}return i}var _i={},G3={n2:"n1",n3:"n2",n4:"n3",n5:"n4",n6:"n5",c2:"n1",c3:"n2",c4:"n3",c5:"n4",c6:"n5"},Pg=(n,t)=>[n[0],n[1],n[2],n[3]||0,n[4]==null?t:n[4]];function id(n,t,e){let i=jt[n].frames,s=[["fL",Te.footL,z3,15,0],["fR",Te.footR,Fg,-30,1]].map(([h,d,p,x,_])=>{let g=t.filter(([y,w])=>w[h]&&y>0).map(([y,w])=>[y,Pg(w[h],x)]);(!g.length||g[g.length-1][0]<i)&&g.push([i,Pg(nd(n)[h],x)]);let A=[[0,e?e[_]:p],...g].map(([y,w])=>[Math.min(1,y/i),ve({[h==="fL"?"footL":"footR"]:w}),"lin"]),E=Wn(A,!1,!0),m=new Float32Array(Wi),v=[];for(let y=0;y<=i;y++)No(E,y/i,m),v.push(Array.from(m.subarray(d,d+5)));return v}),r=Ig(s[0],h=>s[1][h][1]>=wa),a=Ig(s[1],h=>r[h][1]>=wa),l=new Float32Array(i+1),c=[1,.75,.4,.15];for(let h of[r,a])for(let d=1;d<=i;d++){if(h[d-1][1]<wa||h[d][1]>=wa)continue;let p=Math.min(1,(h[d-1][1]-h[d][1])/.06);c.forEach((x,_)=>{d+_<=i&&(l[d+_]=Math.min(l[d+_],-.04*p*x))})}let o=new Float32Array((i+1)*10);[r,a].forEach((h,d)=>h.forEach((p,x)=>{p[2]-=$r(n,x),o.set(p,x*10+d*5)}));let u=(h,d)=>{let p=Math.min(i,Math.max(0,h*i)),x=Math.min(i-1,Math.floor(p)),_=p-x;for(let g=0;g<10;g++)d[Te.footL+g]=o[x*10+g]+(o[x*10+10+g]-o[x*10+g])*_;d[Te.hips+1]+=l[x]+(l[x+1]-l[x])*_,d[Te.plant]=1},f=(h,d)=>{let p=o.subarray(h*10+d*5,h*10+d*5+5);return[p[0],p[1],p[2],p[3]/ed,p[4]/ed]};return{tab:o,feet:u,exit:[f(jt[n].cancel,0),f(jt[n].cancel,1)]}}function ds(n,t){let e=jt[n].frames,i=_i[G3[n]];t=t.slice().sort((r,a)=>r[0]-a[0]);let s=Wn(t.filter(([,r])=>!r.feet).map(([r,a,l])=>[Math.min(1,r/e),ve({...a,plant:1}),l]),!1,!0);return Object.assign(s,id(n,t,i&&i.exit)),_i[n]=s,s}var Li=(n,t=0)=>jt[n].hits[t].f,Pu=(n,t,e)=>({...bn,spear:[...bn.spear.slice(0,3),bn.spear[3]+360*n,bn.spear[4]+360*t,0],...e}),Iu=(n,t,e)=>[n,ve(t),e],W3={hips:[0,.8,.2],footL:[.2,.08,.66,0,10],footR:[-.24,.08,-.36,0,-60]},Lg=[1,ve()],Dg=(n,t=1.18,e=0,i=0,s={})=>({...W3,hipsR:[4,-70,0],spine:[6,-8,0],chest:[2,-6,0],head:[0,0,0],spear:[-.2,t,n,e,i,90],gripL:.32,...s}),sd={hipsR:[4,10,0],spine:[6,10,0],chest:[2,10,0],head:[0,0,0],spear:[-.02,1.08,.32,88,-4,0],gripL:.38};function q3(){let[n,t]=Li("n1"),e=jt.n1.frames,i=jt.n1.cancel,s={hips:[0,.9,-.03],hipsR:[-2,12,0],spine:[-4,10,0],chest:[-8,16,6],head:[0,6,0]},r={hips:[0,.78,.08],hipsR:[14,-30,0],spine:[8,-8,0],chest:[10,-12,-6],head:[10,-12,0]},a={...r,hips:[0,.8,.06],chest:[8,-14,-4],spear:[-.22,.98,.32,-30,-18,90],gripL:.52},l=[.24,.08,.84,0,20];return ds("n1",[[0,{...bn}],[n-5,{...s,spear:[-.14,1.6,-.04,-24,148,90],gripL:.4,fL:[.18,.2,.44,-12]},"out"],[n-3,{...s,chest:[-10,20,8],spear:[-.12,1.64,-.08,-24,156,90],gripL:.4,fL:[.2,.18,.64,-12]},"io"],[n-1,{hips:[0,.88,0],hipsR:[2,4,0],spine:[0,4,0],chest:[-2,6,4],head:[0,2,0],spear:[-.12,1.64,.1,-24,100,90],gripL:.44,fL:l,fR:Fg},"lin"],[n,{hips:[0,.84,.04],hipsR:[8,-12,0],spine:[4,-2,0],chest:[4,-4,-2],head:[4,-4,0],spear:[-.14,1.34,.3,-23,12,90],gripL:.48},"lin"],[n+2,{hips:[0,.8,.07],hipsR:[12,-24,0],spine:[7,-6,0],chest:[8,-9,-4],head:[8,-9,0],spear:[-.18,1.12,.36,-22,-8,90],gripL:.5,fR:[-.2,.1,-.26,16,-30]},"lin"],[t+2,{...r,spear:[-.2,1,.36,-22,-14,90],gripL:.52,fR:[-.2,.1,-.26,16,-40]},"out"],[t+5,{...a},"io"],re(t+6,null,[-.2,.08,-.26,0,-40]),re(t+9,null,[-.22,.08,.04,0,-40]),[i,{...a,hips:[0,.8,.05]},"io"],re(i,l,null),[e,{...bn}]])}function X3(){let[n,t]=Li("n2"),e=jt.n2.frames,i=jt.n2.cancel,s={hips:[0,.94,.34],hipsR:[-8,24,0],spine:[-6,12,0],chest:[-8,16,0],head:[-12,14,0]},r={hips:[0,.78,.2],hipsR:[12,-46,0],spine:[6,-12,0],chest:[6,-16,0],head:[4,-6,0]},a=_i.n1.exit[0],l=[-.22,.08,.74,0,-20];return ds("n2",[[0,{...bn}],re(1,null,[-.2,.1,-.2,20,-30]),[n-6,{hips:[0,.8,.06],hipsR:[10,-40,0],spine:[6,-10,0],chest:[6,-14,0],head:[4,-4,0],spear:[-.26,.94,.12,-55,-10,0],gripL:.34},"out"],re(2.5,null,[-.2,.26,.24,-20,-25]),[n-4,{...r,spear:[-.24,.92,.14,-84,-14,0],gripL:.3,fR:l},"io"],[n-2,{...r,hipsR:[14,-50,0],chest:[7,-19,0],spear:[-.25,.9,.1,-92,-15,0],gripL:.3},"io"],[n-1,{hips:[0,.82,.26],hipsR:[6,-24,0],spine:[2,-4,0],chest:[2,-6,0],head:[0,-4,0],spear:[-.2,.98,.3,-34,4,30],gripL:.36,fL:[a[0],.08,a[2],0,15]},"lin"],[n+1,{hips:[0,.9,.34],hipsR:[-2,4,0],spine:[-2,4,0],chest:[-4,6,0],head:[-6,6,0],spear:[-.08,1.18,.38,28,32,45],gripL:.4,fL:[.19,.22,.66,-20,10]},"lin"],[t+2,{...s,spear:[.06,1.38,.46,70,50,45],gripL:.4,fL:[.16,.46,.9,-30,10]},"out"],[t+5,{...s,hips:[0,.93,.34],spear:[.08,1.4,.44,74,54,45],gripL:.4,fL:[.16,.42,.94,-30,10]},"io"],[i,{...s,hips:[0,.86,.36],hipsR:[4,16,0],spear:[.06,1.3,.44,66,46,45],gripL:.4,fL:[.2,.08,1.34,0,15],fR:l},"out"],[e,{...bn}]])}function $3(){let[n,t]=Li("n3"),e=jt.n3.frames,i=jt.n3.cancel,s=(c,o)=>({hips:[0,.78,.04],hipsR:[8,c,0],spine:[6,c*.3,0],chest:[4,c*.4,0],head:[4,c*.4,0],...o}),r=_i.n2.exit[1],a=[.3,.08,.92,0,25],l={...s(44),hips:[0,.8,.08],spear:[.14,1.02,.26,112,-3,0],gripL:.42};return ds("n3",[[0,{...bn}],[n-5,{...s(-55),spear:[-.32,.94,.2,-92,-6,0],gripL:.42,fR:[r[0],.08,r[2],0,-60]},"out"],re(n-5,_i.n2.exit[0],null),[n-3,{...s(-62),spear:[-.34,.92,.18,-104,-8,0],gripL:.42,fL:[.28,.18,.58,-12,25]},"io"],[n-1,{...s(-30),hips:[0,.76,.1],spear:[-.3,.92,.22,-48,-14,0],gripL:.42,fL:a},"lin"],[n+1,{...s(5),hips:[0,.76,.1],spear:[-.12,.94,.34,26,-12,0],gripL:.42,fR:[r[0],.1,r[2],18,-50]},"lin"],[t+2,{...s(40),hips:[0,.78,.1],spear:[.12,1,.3,104,-5,0],gripL:.42},"out"],re(t+3,null,[r[0],.1,r[2],18,-45]),re(t+6,null,[-.26,.08,.14,0,-40]),[t+5,{...l},"io"],[i,{...l,hips:[0,.8,.07]},"io"],re(i,a,null),[e,{...bn}]])}function Y3(){let[n,t]=Li("n4"),e=jt.n4.frames,i=jt.n4.cancel,s={hipsR:[12,-8,0],spine:[2,0,0],chest:[-2,4,0],head:[-4,0,0]},r=(h,d)=>({hips:[0,.8,.12],hipsR:[6,h*.5,0],spine:[4,h*.3,0],chest:[2,h*.5,0],head:[0,h*.4,0],gripL:.5,lfree:1,armL:[40,0,70,10],...d}),[a,l]=_i.n3.exit,c=[.22,.08,1.82,0,20],o=[-.18,.08,.82,0,-10],u={...r(50),hips:[0,.84,.08],spear:[.32,1.3,.18,476,4,0],lfree:.5,armL:[30,0,50,30]},f=(h,d)=>{let p=h[3]*Math.PI/180,x=h[4]*Math.PI/180;return{spear:[h[0]+Math.sin(p)*Math.cos(x)*d,h[1]+Math.sin(x)*d,h[2]+Math.cos(p)*Math.cos(x)*d,h[3],h[4],h[5]],gripR:-d}};return ds("n4",[[0,{...bn}],re(1,null,[l[0],.12,l[2]+.02,20,-20]),[2,{...s,hips:[0,.9,.04],spear:[-.24,1.8,.02,94,3,0],gripL:.52},"out"],re(2.4,null,[-.17,.3,.26,-30,-10]),[n-10,{...s,hips:[0,.86,.06],spear:[-.24,1.84,.02,96,3,0],gripL:.52,fR:o,fL:[a[0],.12,a[2]+.02,22,15]},"io"],[n-7,{...s,hips:[0,.84,.1],spear:[-.22,1.84,.04,104,3,0],gripL:.52,fL:[.2,.3,1.3,-30,5]},"io"],[n-5,{...s,hips:[0,.82,.12],chest:[-4,-20,0],head:[-4,-10,0],spear:[-.3,1.74,0,190,4,0],gripL:.5,lfree:.6,armL:[0,0,60,30],fL:c},"lin"],[n-3,{...r(-34),hips:[0,.8,.12],...f([-.44,1.4,.14,262,3,0],.3)},"lin"],[n-1,{...r(-6),...f([-.26,1.32,.5,318,2,0],.5)},"lin"],[n+1,{...r(24),...f([.18,1.32,.54,390,2,0],.5)},"lin"],[n+4,{...r(56),hips:[0,.82,.1],...f([.42,1.34,.16,470,6,0],.4),armL:[50,0,70,10],fR:[o[0],.1,o[2],16,-40]},"out"],[t+2,u,"io"],[i,{...u,hips:[0,.84,.07]},"io"],re(i,c,[o[0],.08,o[2],0,-40]),[e,Pu(1,0)]])}function K3(){let[n,t]=Li("n5",0),[e,i]=Li("n5",1),s=jt.n5.frames,r=jt.n5.cancel,a=(d,p,x)=>[d,{hips:[0,.84,.06],hipsR:[6,-20,0],spine:[4,-6,0],chest:[2,-8,0],head:[0,-6,0],spear:Mn([-.08,1.34,.5],90,p,0,.62),gripR:.62,gripL:.62,lfree:1,armL:[10,0,70,20],...x},"lin"],l={hips:[0,.8,.04],hipsR:[8,-40,0],spine:[6,-10,0],chest:[4,-10,0],head:[0,-10,0],spear:Mn([-.3,1,.16],30,358,0,.62),gripR:.62,gripL:.9},[c,o]=_i.n4.exit,u=[.06,.08,.66],f=(d,p)=>re(d,[...u,0,p],null),h=(d,p,x)=>re(d,null,qi("n5",d,p,x));return ds("n5",[[0,{...bn}],[n-5,{hips:[0,.88,-.02],hipsR:[0,-35,0],spine:[-2,-10,0],chest:[-6,-22,0],head:[0,-6,0],spear:[-.26,1.52,.1,-12,152,90],gripL:-.34,fL:[c[0]-.06,.16,c[2]+.08,-10,15]},"out"],[n-3,{hips:[0,.88,-.02],hipsR:[0,-38,0],spine:[-2,-10,0],chest:[-8,-26,0],head:[0,-8,0],spear:[-.26,1.56,.06,-12,160,90],gripL:-.34,fL:[.1,.16,.6,-10,15]},"io"],[n-1,{hips:[0,.86,.02],hipsR:[4,-32,0],spine:[2,-8,0],chest:[0,-16,0],head:[2,-6,0],spear:[-.22,1.54,.2,-10,100,90],gripL:-.34},"lin"],[n,{hips:[0,.82,.08],hipsR:[8,-26,0],spine:[6,-6,0],chest:[6,-8,0],head:[6,-6,0],spear:[-.2,1.3,.34,-10,12,90],gripL:-.34,fL:[...u,0,15]},"lin"],re(n-1,null,[o[0],.08,o[2],0,-30]),re(n+2,null,[-.24,.2,-.24,-10,-30]),[t+1,{hips:[0,.8,.12],hipsR:[12,-20,0],spine:[8,-4,0],chest:[10,-6,0],head:[8,-6,0],spear:Mn([-.24,1.2,.5],-10,-20,90,.3),gripR:.3,gripL:0,fR:[-.26,.08,-.1,0,-30]},"out"],a(t+2,40,{}),a(e-2,150,{spin:-20}),a(e-1,260,{spin:-50}),[e,{hips:[0,.8,.1],hipsR:[8,-30,0],spine:[6,-8,0],chest:[4,-8,0],head:[0,-8,0],spin:-85,spear:Mn([.15,1.22,.4],90,360,0,.1),gripR:.1,gripL:.4,lfree:1,armL:[10,0,70,20]},"lin"],f(e,-70),h(e+1,-90,[-.24,.24,-.1,-10,-30]),[i+1,{...l,spin:-100,hipsR:[6,-30,0],spear:Mn([-.12,1.26,.44],90,360,0,.62),lfree:1,armL:[10,0,70,20]},"lin"],h(i+1,-100,[-.3,.08,-.36,0,-30]),f(i+1,-85),[r,{...l,spin:-170},"out"],f(r,-155),h(r+3,-210,[-.24,.22,-.2,-10,-30]),h(r+6,-250,[-.24,.08,-.26,0,-30]),f(r+7,-250),re(r+12,[...u,0,-330],null),h(r+13,-330,[-.22,.2,-.24,-10,-30]),h(r+16,-350,[-.2,.08,-.26,0,-30]),[s,Pu(0,1,{spin:-360})],re(s,[.17,.08,.3+$r("n5",s),0,-345],qi("n5",s,-360,[-.2,.08,-.26,0,-30]))])}function Z3(){let[n,t]=Li("n6"),e=jt.n6.frames,i=jt.n6.cancel,s=n-10,r=n-6,l={...{hips:[0,.66,.02],hipsR:[12,-48,0],spine:[8,-10,0],chest:[6,-12,0],head:[2,-20,0]},spear:[-.3,.86,.12,-14,-4,0],gripL:.52},c=(d,p,x,_)=>[d,{...sd,hips:[0,.8,.04],spin:p,spear:[-.02,1.1,.3,x,-4,0],gripL:.38,..._},"lin"],o=[.1,.08,1.6],u=[-.3,.08,.9,0,-420],f=[.14,.08,1.9,0,-350],h=(d,p)=>re(d,null,qi("n6",d,p,[-.24,.26,-.3,-20,-30]));return ds("n6",[[0,{...bn,spin:-180,spear:Mn([-.3,1,.16],-12,-2,0,.62),gripR:.62,gripL:.9}],[s-3,{hips:[0,.72,0],hipsR:[10,-30,0],spine:[6,-6,0],chest:[4,-8,0],head:[0,-6,0],spin:-250,spear:[-.24,.96,-.1,0,0,90],gripL:.44},"out"],[s,{hips:[0,1.04,.1],hipsR:[0,-40,0],spine:[0,-8,0],chest:[0,-10,0],head:[0,-6,0],spin:-320,spear:[-.24,1.08,-.26,0,2,90],gripL:.5,fL:[.12,.36,.9,-20,-300],fR:[-.04,.32,.4,20,-360]},"out"],re(s-2,[_i.n5.exit[0][0],.14,_i.n5.exit[0][2]+.1,10,-230],[_i.n5.exit[1][0],.14,_i.n5.exit[1][2]+.1,20,-230]),[r,{hips:[0,.7,.26],hipsR:[6,-70,0],spine:[6,-8,0],chest:[2,-6,0],head:[0,0,0],spin:-360,spear:[-.2,1.12,.64,0,0,90],gripL:.3,fL:f,fR:u},"snap"],[n-4,{hips:[0,.76,.2],hipsR:[4,-60,0],spine:[4,-6,0],chest:[0,-4,0],head:[0,0,0],spin:-366,spear:[-.18,1.2,.56,8,14,90],gripL:.3,fL:f,fR:u},"io"],re(n-3,[.12,.16,1.76,-12,-360],null),[n-2,{hips:[0,.84,.08],hipsR:[0,-30,0],spine:[-2,0,0],chest:[-6,10,0],head:[-4,0,0],spin:-390,spear:Mn([.02,1.8,.2],60,20,0,.5),gripL:.4},"in"],c(n-1,-430,70),c(n+1,-560,66),c(t+2,-680,40),re(n-2,[...o,0,-380],null),h(n-2,-390),h(n-1,-430),h(n,-490),h(n+1,-560),h(n+2,-620),re(t+2,[...o,0,-670],qi("n6",t+2,-680,[-.3,.2,-.4,-10,-30])),re(t+3,null,[-.4,.08,1.02,0,-770]),re(t+4,[.2,.16,1.76,-10,-700],null),re(t+7,[.34,.08,1.92,0,-690],null),[t+5,{...l,spin:-720},"out"],[i,{...l,hips:[0,.72,.02],spin:-720},"io"],re(i,[.34,.08,1.92,0,-690],[-.4,.08,1.02,0,-770]),[e,{...bn,spin:-720}],re(e,nd("n6").fL.map((d,p)=>p===4?d-720:d),nd("n6").fR.map((d,p)=>p===4?d-720:d))])}function j3(){let[n,t]=Li("c1"),e=jt.c1.frames,i=jt.c1.cancel,s={hips:[0,.72,-.14],hipsR:[8,-80,0],spine:[4,-6,0],chest:[0,-6,0],head:[2,4,0]},r={hips:[0,.7,.34],hipsR:[2,-80,0],spine:[8,-4,0],chest:[4,-2,0],head:[0,0,0]},a=[.26,.08,1.36,0,10],l=[-.28,.08,.35,0,-80];return ds("c1",[[0,{...bn}],re(3,[.24,.16,.42,-10,12],null),re(6,[.28,.08,.52,0,10],[-.25,.14,-.38,10,-60]),re(9,null,[-.28,.08,-.5,0,-80]),[n-6,{...s,spear:[-.34,.98,-.62,2,6,90],gripL:.62},"out"],[n-3,{...s,hips:[0,.7,-.18],hipsR:[12,-82,0],spear:[-.34,.96,-.72,2,8,90],gripL:.66},"io"],re(n-3,[.28,.08,.52,0,10],[-.28,.08,-.5,0,-80]),[n-1,{...s,hips:[0,.72,.06],hipsR:[8,-82,0],spine:[6,-6,0],spear:[-.26,1,-.5,2,6,90],gripL:.6,fL:[.27,.2,.96,-16,10],fR:[-.28,.14,-.4,24,-80]},"in"],[n+1,{...r,spear:[-.2,1.12,.74,2,2,90],gripL:.22,fL:a,fR:[-.28,.2,-.06,-10,-80]},"snap"],[t,{...r,hipsR:[-2,-78,0],chest:[-4,-2,0],spear:[-.2,1.2,.72,2,16,90],gripL:.22,fR:l},"out"],[i-4,{...r,hips:[0,.74,.3],hipsR:[0,-76,0],chest:[-2,-2,0],spear:[-.2,1.18,.68,2,12,90],gripL:.24},"io"],re(i,a,l),[e,{...bn}]])}function J3(){let[n,t]=Li("c2"),e=jt.c2.frames,i=jt.c2.cancel,s=jt.c2.landFrame,r=(f,h,d,p)=>({spear:[-.04,.84,.62,0,90,0],gripR:d,gripL:d-.22,...p}),[a,l]=_i.n1.exit,c=[.24,.08,1.1,0,20],o=[-.24,.08,.52,0,-50],u={hips:[0,.7,.24],hipsR:[16,-20,0],spine:[8,-6,0],chest:[6,-8,0],head:[4,-6,0],spear:[-.22,1.4,.36,-70,-2,0],gripL:-.46};return ds("c2",[[0,{...bn}],re(3,[a[0],.1,a[2],18,20],null),re(6,[.24,.24,.84,-16,20],null),re(7,null,[l[0],.1,l[2],18,-40]),re(9,c,null),re(11,null,[-.22,.24,.14,-10,-50]),[n-6,{hips:[0,.74,0],hipsR:[10,-40,0],spine:[8,-10,0],chest:[8,-10,0],head:[6,-6,0],spear:[-.26,.9,.2,-10,-32,0],gripL:.44},"out"],[n-1,{hips:[0,.72,.02],hipsR:[12,-44,0],spine:[8,-12,0],chest:[8,-12,0],head:[6,-8,0],spear:[-.28,.88,.16,-14,-36,0],gripL:.46,fR:o},"io"],[n+2,{hips:[0,.92,.3],hipsR:[-4,-16,0],spine:[-4,-4,0],chest:[-6,-4,0],head:[-8,0,0],spear:[-.16,1.2,.42,-6,36,90],gripL:.4,fL:c,fR:[o[0],.1,o[2],20,-40]},"lin"],[t,{hips:[0,1.02,.34],hipsR:[-10,-10,0],spine:[-8,0,0],chest:[-10,0,0],head:[-16,0,0],spear:[-.12,1.5,.36,-4,86,90],gripL:.36,fL:[.2,.2,1.4,-20,15],fR:[-.2,.3,.9,20,-30]},"out"],[t+4,{hips:[0,1.5,.3],hipsR:[-6,0,0],spine:[-4,0,0],chest:[-6,0,0],head:[-10,0,0],...r(0,0,1.2),fL:[.14,.9,1.7,-30,10],fR:[-.14,.8,1.4,-20,-10]},"out"],[t+9,{hips:[.04,2.3,.44],hipsR:[30,0,0],spine:[10,0,0],chest:[6,0,0],head:[10,0,0],...r(0,0,1.52),fL:[.14,2,1.6,-40,10],fR:[-.14,1.9,1.75,-40,-10]},"out"],[s-2,{hips:[0,1.3,.36],hipsR:[20,0,0],spine:[8,0,0],chest:[4,0,0],head:[4,0,0],spear:[-.22,2,.4,-80,4,0],gripL:-.46,fL:[.22,.36,2.5,-10,20],fR:[-.22,.3,1.9,10,-40]},"in"],[s,{...u,hips:[0,.66,.24],fL:[.26,.08,2.56,0,25],fR:[-.26,.08,1.96,0,-50]},"out"],[i,{...u},"io"],[e,{...bn}]])}function Q3(){let[n,t]=Li("c3",0),[e,i]=Li("c3",1),s=jt.c3.frames,r=jt.c3.cancel,a=(x,_)=>[x,{hips:[0,.84,.08],hipsR:[8,-26,0],spine:[4,-6,0],chest:[2,-8,0],head:[2,4,0],spear:Mn([-.46,1.42,.26],-4,_,90,.64),gripR:.64,gripL:.64,lfree:1,armL:[-30,0,40,30]},"lin"],[l,c]=_i.n2.exit,o=[["R",12,16,-.22,.46,-30],["L",17,21,.2,.94,15],["R",22,26,-.22,.84,-30],["L",27,31,.2,1.32,15]],u={L:[l[0],l[2]],R:[c[0],c[2]]},f=[];for(let[x,_,g,A,E,m]of o){let v=u[x],y=x==="L"?"fL":"fR";f.push([_,{feet:1,[y]:[v[0],.08,v[1],0,m]}],[(_+g)/2,{feet:1,[y]:[(v[0]+A)/2,.22,(v[1]+E)/2,-14,m]}],[g,{feet:1,[y]:[A,.08,E,0,m]}]),u[x]=[A,E]}let h=[[0,{...bn}],[n-4,{hips:[0,.84,.04],hipsR:[6,-26,0],spine:[4,-6,0],chest:[2,-8,0],head:[2,4,0],spear:Mn([-.46,1.42,.26],-4,110,90,.64),gripR:.64,gripL:.64,lfree:.6,armL:[-30,0,40,30]},"out"],...f],d=8,p=t-1-n+2;for(let x=0;x<=d;x++)h.push(a(n-2+Math.round(x*p/d),110-x*150));return h.push([e-6,{hips:[0,.9,.04],hipsR:[-4,-16,0],spine:[-4,-2,0],chest:[-6,0,0],head:[-4,0,0],spear:Mn([-.3,1.66,.1],-4,-1150,90,.32),gripR:.32,gripL:.6,lfree:.3,armL:[-30,0,40,30]},"lin"]),h.push([e-3,{hips:[0,.96,.02],hipsR:[-10,-10,0],spine:[-8,0,0],chest:[-12,4,0],head:[-6,0,0],spear:[-.1,1.9,0,-4,-1280,90],gripL:.42,fL:[.2,.08,1.32,0,15]},"out"],[e-1.5,{hips:[0,.98,0],hipsR:[-12,-8,0],spine:[-8,0,0],chest:[-14,6,0],head:[-8,0,0],spear:[-.1,1.94,-.04,-4,-1272,90],gripL:.42,fL:[.2,.2,1.6,-20,15]},"io"],[e+1,{hips:[0,.8,.12],hipsR:[10,-14,0],spine:[6,0,0],chest:[6,0,0],head:[4,0,0],spear:[-.26,1.5,.3,-4,-1380,90],gripL:.46,fL:[.22,.08,2.56,0,15]},"in"],re(e-2,null,[-.22,.1,.84,20,-40]),re(e,null,[-.24,.26,1.3,-10,-50]),re(e+2,null,[-.25,.14,1.72,0,-55]),[i,{hips:[0,.64,.16],hipsR:[26,-18,0],spine:[16,0,0],chest:[14,0,0],head:[8,0,0],spear:[-.3,1,.6,-4,-1474,90],gripL:.5,fL:[.26,.08,2.6,0,15],fR:[-.26,.08,1.8,0,-60]},"out"],[r,{hips:[0,.66,.14],hipsR:[24,-18,0],spine:[14,0,0],chest:[12,0,0],head:[6,0,0],spear:[-.3,1,.58,-4,-1476,90],gripL:.5,fL:[.26,.08,2.6,0,15],fR:[-.26,.08,1.8,0,-60]},"io"],[s,Pu(0,-4)]),ds("c3",h)}function tS(){let[n,t]=Li("c4"),e=jt.c4.frames,i=jt.c4.cancel,s={hips:[0,.86,0],hipsR:[-4,0,0],spine:[-4,0,0],chest:[-6,0,0],head:[-6,0,0],spear:[-.26,1.86,.04,90,0,0],gripL:.56},r=g=>Math.max(0,Math.min(1,(g-n+1)/3)),a=(g,A,E)=>A+(E-A)*g,l=(g,A)=>{let E=r(g),m=E*(2-E);return[g,{...sd,hips:[0,a(m,.82,.76),.04],spin:A,gripL:.34,spear:[a(m,-.24,.02),a(m,1.86,1.02),a(m,.06,.28),a(m,92,84),a(m,2,-6),0]},"lin"]},c={...sd,hips:[0,.68,.04],spin:720,spear:[-.02,1.04,.3,76,-4,0],gripL:.34},o=[[n-1,0],[n,30],[n+1,75],[n+2,125],[n+3,180],[n+4,230],[n+5,280],[n+6,325],[n+7,360],[n+8,400],[n+9,445],[n+10,490],[n+11,535],[n+12,575],[n+13,615],[n+14,650],[n+15,680],[n+16,702],[n+17,716]],u=new Map(o),[f,h]=_i.n3.exit,d=[.06,.08,.42],p=[-.3,.08,.32],x=[.45,.08,1.36,0,745],_=[[0,{...bn}],re(n-12,[f[0],.08,f[2],0,15],[h[0],.08,h[2],0,-40]),[n-6,s,"out"],re(n-8,[d[0],.08,d[2],0,10],null),[n-1,{...s,hips:[0,.82,0],spear:[-.26,1.9,.02,92,2,0]},"io"]];for(let[g,A]of o.slice(1))_.push(l(g,A));_.push(re(n-1,[...d,0,10],[h[0],.1,h[2],20,-40]),re(n+7,[...d,0,370],null),re(n+7,null,[...p,0,330]),re(n+16,null,[...p,0,672]),re(n+8,[d[0],.12,d[2],-10,400]),re(n+17,x,null),[n+18,c,"out"],[i,{...c,spear:[-.02,1.04,.3,72,-4,0],hips:[0,.74,.04]},"io"],re(i,x,[...p,0,690]),[e,{...bn,spin:720}],re(e,[.17,.08,.3+$r("c4",e),0,735],[-.2,.08,-.26+$r("c4",e),0,690]));for(let g=n;g<=n+6;g++)_.push(re(g,null,qi("c4",g,u.get(g),[-.26,g<n+6?.26:.16,-.22,-20,-40])));for(let g=n+9;g<=n+15;g+=2)_.push(re(g,qi("c4",g,u.get(g),[.26,.24,.16,-20,20]),null));return ds("c4",_)}function eS(){let[n,t]=Li("c5",1),e=jt.c5.frames,i=jt.c5.cancel,s=(u,f)=>({hips:[0,.56,.06],hipsR:[20,u*.5,0],spine:[10,u*.3,0],chest:[8,u*.4,0],head:[-8,u*.3,0],...f}),[r,a]=_i.n4.exit,l=[["R",13,17,-.34,.86,-60],["L",16,20,.36,1.42,30],["R",20,24,-.34,1.86,-60],["L",24,28,.34,2.3,30],["L",34,38,.3,2.62,25]],c={L:[.36,r[2]],R:[-.36,a[2]]},o=[re(6,[.36,.08,r[2],0,30],null),re(8,null,[-.36,.08,a[2],0,-60])];for(let[u,f,h,d,p,x]of l){let _=c[u],g=u==="L"?"fL":"fR";o.push([f,{feet:1,[g]:[_[0],.08,_[1],0,x]}],[(f+h)/2,{feet:1,[g]:[(_[0]+d)/2,.26,(_[1]+p)/2,-16,x]}],[h,{feet:1,[g]:[d,.08,p,0,x]}]),c[u]=[d,p]}return ds("c5",[[0,{...bn}],...o,[8,s(-50,{spear:[-.34,.74,.3,-80,-8,0],gripL:.42}),"out"],[12,s(-56,{spear:[-.36,.72,.36,-96,-8,0],gripL:.42}),"io"],[17,s(-10,{hips:[0,.54,.14],spear:[-.24,.74,.5,-20,-10,0],gripL:.42}),"lin"],[22,s(40,{hips:[0,.56,.12],spear:[.12,.76,.42,80,-8,0],gripL:.42}),"out"],[n-6,s(46,{hips:[0,.6,.1],spear:[.16,.8,.4,96,-18,0],gripL:.42}),"io"],[n-3,{hips:[0,.76,.16],hipsR:[4,20,0],spine:[0,10,0],chest:[-2,10,0],head:[-8,10,0],spear:[.04,1,.36,60,40,0],gripR:.05,gripL:.4},"lin"],[n,{hips:[0,.93,.2],hipsR:[-8,0,0],spine:[-6,0,0],chest:[-10,0,0],head:[-14,0,0],spear:[-.06,1.3,.42,30,88,0],gripR:.1,gripL:.36},"out"],re(n-4,null,[-.34,.08,1.86,0,-50]),re(n-1,null,[-.32,.2,1.92,-10,-45]),re(n+1,null,[-.3,.1,1.98,20,-40]),[t+3,{hips:[0,.9,.2],hipsR:[-4,-10,0],spine:[-4,0,0],chest:[-6,-4,0],head:[-10,0,0],spear:[-.1,1.24,.4,20,90,0],gripR:.1,gripL:.34},"io"],re(t+3,null,[-.3,.08,1.98,0,-40]),[i,{hips:[0,.88,.2],hipsR:[-2,-12,0],spine:[-2,0,0],chest:[-4,-4,0],head:[-6,0,0],spear:[-.1,1.2,.4,20,88,0],gripR:.1,gripL:.34},"io"],re(i,[.3,.08,2.62,0,25],[-.3,.08,1.98,0,-40]),[e,{...bn}]])}function nS(){let[n,t]=Li("c6",0),[e,i]=Li("c6",1),s=jt.c6.frames,r=jt.c6.cancel,a=(g,A,E)=>[g,{hips:[0,.86+E%2*.03,.04],hipsR:[-4,0,0],spine:[-4,0,0],chest:[-6,0,0],head:[-6,0,0],spin:-(A-60)*360/1320,spear:Mn([-.08,2.02,.12],A,4,0,.62),gripR:.62,gripL:.62,lfree:1,armL:[0,0,80,10]},"lin"],[l,c]=_i.n5.exit,o=[[0,{...bn}],[3,{hips:[0,.78,.04],hipsR:[10,-40,0],spine:[6,-10,0],chest:[6,-14,0],head:[4,-6,0],spear:[-.28,.9,.1,-70,-14,0],gripL:.4},"out"],[n-2,{hips:[0,.96,.12],hipsR:[-8,20,0],spine:[-6,10,0],chest:[-8,14,0],head:[-12,10,0],spear:[.02,1.4,.3,60,56,45],gripL:.4},"lin"],re(2,[l[0],.14,l[2],10,-60],null),re(5,[.2,.08,.2,0,10],[c[0],.08,c[2],0,-60]),re(8,null,[-.2,.2,0,-10,-40]),re(10,null,[-.24,.08,-.14,0,-30])],u=12,f=t-n+2,h=[];for(let g=0;g<=u;g++){let A=n-1+Math.round(g*f/u),E=60+g*110;h.push([A,-(E-60)*360/1320]),o.push(a(A,E,g))}let d={L:[.22,.08,.28,0,15],R:[-.24,.08,-.16,0,-30]},p={L:[.2,.08,.2,0,10],R:[-.24,.08,-.14,0,-30]};for(let g=2;g<h.length;g+=2){let A=g/2%2?"L":"R",E=A==="L"?"fL":"fR",[m,v]=h[g],[y,w]=h[g-1],M=qi("c6",m,v,[d[A][0],.08,d[A][2]+.14,0,d[A][4]]),S=qi("c6",y,w,[d[A][0],.22,d[A][2],-14,d[A][4]]);o.push([m-6,{feet:1,[E]:p[A]}],[m-3,{feet:1,[E]:S}],[m,{feet:1,[E]:M}]),p[A]=M}let x=1440,_=$r("c6",e);return o.push(re(59,qi("c6",59,-360,[.2,.2,.34,-20,15]),qi("c6",59,-360,[-.22,.16,-.16,20,-30])),[e-7,{hips:[0,1.7,.2],hipsR:[-10,0,0],spine:[-6,0,0],chest:[-8,0,0],head:[8,0,0],spin:-360,spear:[-.3,2.2,.2,x,-40,90],gripL:.36,fL:qi("c6",e-7,-360,[.18,.9,.35,-40,10]),fR:qi("c6",e-7,-360,[-.2,.8,.1,-30,-20])},"out"],[e-3,{hips:[0,1.76,.26],hipsR:[-2,0,0],spine:[2,0,0],chest:[4,0,0],head:[14,0,0],spin:-360,spear:[-.3,2.28,.26,x,-64,90],gripL:.34,fL:qi("c6",e-3,-360,[.18,.84,.45,-40,10]),fR:qi("c6",e-3,-360,[-.2,.8,.15,-30,-20])},"io"],[e,{hips:[0,.6,.3],hipsR:[30,-10,0],spine:[16,0,0],chest:[14,0,0],head:[16,0,0],spin:-360,spear:[-.3,1.18,.56,x,-58,90],gripL:.3,fL:[.28,.08,_+.36,0,-340],fR:[-.28,.08,_-.34,0,-410]},"in"],[r,{hips:[0,.62,.28],hipsR:[28,-12,0],spine:[14,0,0],chest:[12,0,0],head:[12,0,0],spin:-360,spear:[-.3,1.16,.54,x,-60,90],gripL:.3,fL:[.28,.08,_+.36,0,-340],fR:[-.28,.08,_-.34,0,-410]},"io"],[s,Pu(4,0,{spin:-360})],re(s,[.17,.08,_+.3,0,-345],[-.2,.08,_-.26,0,-390])),ds("c6",o)}var Lu={n1:q3(),n2:X3(),n3:$3(),n4:Y3(),n5:K3(),n6:Z3(),c1:j3(),c2:J3(),c3:Q3(),c4:tS(),c5:eS(),c6:nS(),dash:Wn([[0,ve({hips:[0,.84,.05],hipsR:[16,-40,0],chest:[10,-10,0],spear:[-.3,1.06,-.3,4,6,90],gripL:.5})],Iu(.18,Dg(.66,1.1,0,-4,{hips:[0,.76,.3],footL:[.2,.08,.78,0,10],footR:[-.26,.12,-.44,30,-60]}),"snap"),Iu(.45,Dg(.62,1.1,0,-4,{hips:[0,.78,.28],footL:[.2,.08,.72,0,10]})),Lg]),jatk:Wn([[0,ve({hips:[0,.95,0],footL:[.16,.36,.2,-20,10],footR:[-.18,.3,-.12,20,-20],spear:[-.2,1.2,-.1,30,30,0]})],Iu(.2,{hips:[0,.98,0],hipsR:[-4,-50,0],chest:[-6,-20,0],footL:[.16,.4,.2,-20,10],footR:[-.18,.34,-.12,20,-20],spear:[-.3,1.4,-.1,-90,45,0],gripL:.42},"out"),Iu(.42,{hips:[0,.95,.06],hipsR:[10,30,0],chest:[12,20,0],footL:[.16,.34,.24,-10,10],footR:[-.18,.3,-.14,20,-20],spear:[.05,1,.3,60,-42,0],gripL:.45},"in"),[1,ve({hips:[0,.95,.04],hipsR:[6,10,0],footL:[.16,.34,.22,-10,10],footR:[-.18,.3,-.14,20,-20],spear:[-.04,1,.24,40,-30,0]})]]),jc:(()=>{let n=jt.jc.landFrame,t=jt.jc.frames,e=Math.max(7,jt.jc.plunge?jt.jc.plunge[0]:7),i={hips:[0,1,.04],hipsR:[-10,-10,0],spine:[-6,0,0],chest:[-8,0,0],head:[10,0,0],footL:[.16,.5,.14,-30,10],footR:[-.18,.42,-.12,20,-20],spear:[-.1,1.78,.24,0,-74,90],gripL:.34},s={...i,hips:[0,.96,.1],hipsR:[16,-10,0],chest:[10,0,0],head:[16,0,0],footL:[.16,.36,0,-10,10],footR:[-.18,.4,-.2,20,-20],spear:[-.06,1.3,.42,0,-78,90]},r={hips:[0,.6,.18],hipsR:[30,-16,0],spine:[16,0,0],chest:[14,0,0],head:[16,0,0],footL:[.3,.08,.5,0,25],footR:[-.3,.08,-.3,0,-50],spear:[-.06,1.2,.56,0,-46,90],gripL:.3};return Wn([[0,ve({hips:[0,.95,0],footL:[.16,.36,.2,-20,10],footR:[-.18,.3,-.12,20,-20],spear:[-.2,1.2,-.1,30,30,0]})],[4/t,ve(i),"out"],[6/t,ve({...i,spear:[-.1,1.84,.2,0,-70,90]}),"io"],[(e-1)/t,ve({...i,spear:[-.1,1.84,.2,0,-70,90]})],[(e+2)/t,ve(s),"in"],[(n-1)/t,ve(s)],[n/t,ve(r),"snap"],[(n+8)/t,ve({...r,hips:[0,.62,.16]}),"io"],[jt.jc.cancel/t,ve({...r,hips:[0,.7,.12],hipsR:[20,-16,0],spear:[-.1,1.14,.46,0,-40,90]}),"io"],Lg],!1,!0)})()},rd={dash:(()=>{let[[,n],[t,e]]=jt.dash.lunge,i=x=>$r("dash",x),s=[],r=i(jt.dash.frames),a=(x,_,g)=>re(_,x?null:g,x?g:null),l=[[.17,.3],[-.2,-.26]],c=[.16,-.16],o=[5,-5],u=3,f=1;for(;u<n;u+=5,f^=1){let x=i(u)+.3,_=l[f];s.push(a(f,u-4.5,[_[0],.1,_[1],20,o[f]]),a(f,u-2.5,[c[f],.3,(_[1]+x)/2,-20,o[f]]),a(f,u,[c[f],.08,x,0,o[f]])),l[f]=[c[f],x]}let h=[.2,.08,r+.45,0,10],d=[-.24,.08,r-.45,0,-60],p=t+Math.round((e-t)*.3);return s.push(re(t-1,[l[0][0],.12,l[0][1],20,5],[l[1][0],.12,l[1][1],20,-20]),re(p,[.2,.4,i(p)+.3,-20,10],[-.22,.3,i(p)-.1,-10,-40]),re(t+8,h,null),re(t+9,null,d),re(jt.dash.cancel,h,d)),id("dash",s).feet})(),c5:Lu.c5.feet,jc:(()=>{let n=jt.jc.landFrame,t=Math.max(7,jt.jc.plunge?jt.jc.plunge[0]:7),e=jt.jc.cancel,i=[.3,.08,.5,0,25],s=[-.3,.08,-.3,0,-50];return id("jc",[re(1,[.16,.36,.2,-20,10],[-.18,.3,-.12,20,-20]),re(4,[.16,.5,.14,-30,10],[-.18,.42,-.12,20,-20]),re(t-1,[.16,.5,.14,-30,10],[-.18,.42,-.12,20,-20]),re(t+2,[.16,.36,0,-10,10],[-.18,.4,-.2,20,-20]),re(n-1,[.2,.2,.3,-10,20],[-.22,.2,-.24,10,-40]),re(n,i,s),re(e,i,s)],[[.16,.36,.2,-20,10],[-.18,.3,-.12,20,-20]]).feet})()};var Ne={runSpeed:8.5,accel:150,decel:60,turnRate:36,turnSlow:.3,dashAfter:14,dodgeFrames:24,dodgeDist:4.6,dodgeIFrames:[0,16],dodgeAttackCancel:14,dodgeRedodge:16,dodgeRunCancel:20,jumpV:12.6,gravity:28,airControl:14,hoverG:.3,hoverSink:.1,landFrames:8,landRunCancel:4,hurtFrames:20},Mi=1/60,iS=Math.PI*2,sS=13,rS=jt.dash&&jt.dash.lunge[1]?jt.dash.lunge[1][0]+8:-1,Ng=n=>Math.atan2(Math.sin(n),Math.cos(n)),Ug=(n,t,e)=>Math.max(t,Math.min(e,n));function ad(n){return 2.2+.365*n}var aS=(()=>{let n=Ne.dodgeFrames,t=[];for(let i=0;i<n;i++)t.push(Math.min(1,(i+1)/3.5)*Math.pow(1-i/n,1.2)+.02);let e=t.reduce((i,s)=>i+s,0);return t.map(i=>i/e)})();function pr(n,t){let e=Math.hypot(n.mx,n.my);if(e<.1)return[0,0,0];let i=Math.sin(t),s=Math.cos(t),r=i*n.my-s*n.mx,a=s*n.my+i*n.mx,l=Math.hypot(r,a);return[r/l,a/l,Math.min(1,e)]}function ko(n,t,e){let i=t-n.yaw;i=Math.atan2(Math.sin(i),Math.cos(i)),n.yaw+=Math.max(-e,Math.min(e,i))}function bi(n,t){n.state!==t&&(n.state=t,n.stateT=0)}function oS(n,t){let e=Ug(t*60*n.speed*.02,-.42,.42);n.anim.lean+=(e-n.anim.lean)*.35}function kg(n,t,e){let[i,s,r]=pr(t,e);if(n.state==="dodge")return cS(n,r);if(n.state==="hurt"){n.vx*=.85,n.vz*=.85,n.anim.lean*=.7,n.stateT>=Ne.hurtFrames&&bi(n,"idle");return}if(n.state==="land")if(n.stateT>=Ne.landFrames||r&&n.stateT>=Ne.landRunCancel)bi(n,r?"run":"idle");else{n.vx*=.75,n.vz*=.75,n.speed=Math.hypot(n.vx,n.vz),n.anim.lean*=.7;return}if(!n.grounded){let f=i*Ne.runSpeed*r,h=s*Ne.runSpeed*r;r&&(n.vx+=Math.max(-Ne.airControl*Mi,Math.min(Ne.airControl*Mi,f-n.vx)),n.vz+=Math.max(-Ne.airControl*Mi,Math.min(Ne.airControl*Mi,h-n.vz)),ko(n,Math.atan2(i,s),Ne.turnRate*.5*Mi)),n.anim.lean*=.8;return}let a=n.yaw,l=Math.hypot(n.vx,n.vz),c;if(r){let f=Math.atan2(i,s);l<1.5&&n.state!=="run"?n.yaw=f:ko(n,f,Ne.turnRate*Mi);let h=Math.abs(Ng(f-n.yaw)),d=Ne.runSpeed*r*(1-Ne.turnSlow*h/Math.PI);c=l+Ug(d-l,-Ne.decel*Mi,Ne.accel*Mi),n.vx=Math.sin(n.yaw)*c,n.vz=Math.cos(n.yaw)*c,bi(n,"run"),n.runT++}else{let f=Ne.decel*Mi;l>f?(n.vx-=n.vx/l*f,n.vz-=n.vz/l*f):n.vx=n.vz=0,c=Math.max(0,l-f),n.runT=0,n.state==="run"&&c<1.5&&bi(n,"idle")}n.speed=c,oS(n,Ng(n.yaw-a));let o=n.runPhase,u=o+Math.PI*ad(c)*Mi;if(n.state==="run"&&c>2.5&&Math.floor(u/Math.PI)>Math.floor(o/Math.PI)){let f=Math.floor(u/Math.PI)%2===0,h=Math.sin(n.yaw),d=Math.cos(n.yaw),p=f?.11:-.11;Pe("footstep",{x:n.x+h*.35+d*p,y:0,z:n.z+d*.35-h*p,foot:f?"L":"R",speed:c})}n.runPhase=u%(iS*64)}function od(n,t,e){let[i,s,r]=pr(t,e);r||(i=Math.sin(n.yaw),s=Math.cos(n.yaw)),n.yaw=Math.atan2(i,s),n.dodgeX=i,n.dodgeZ=s,n.move=null,n.state="dodge",n.stateT=0,n.dodgeSeq=(n.dodgeSeq||0)+1,n.iframes=Ne.dodgeIFrames[1],n.vx=n.vz=0,n.speed=0,n.runT=0,Pe("dodge",{x:n.x,y:n.y,z:n.z,dx:i,dz:s})}function cS(n,t){let e=n.stateT;if(e<Ne.dodgeFrames){let i=Ne.dodgeDist*aS[e];n.x+=n.dodgeX*i,n.z+=n.dodgeZ*i}if(n.anim.lean*=.7,e===sS&&Pe("footstep",{x:n.x,y:0,z:n.z,foot:"R",speed:7,kick:1}),e>=Ne.dodgeFrames||t&&e>=Ne.dodgeRunCancel){let i=t?Ne.runSpeed*.6:0;n.vx=n.dodgeX*i,n.vz=n.dodgeZ*i,n.speed=i,bi(n,"idle")}}function cd(n){n.vy=Ne.jumpV,n.grounded=!1,n.airAttack=!1,n.airHold=!1,bi(n,"jump"),Pe("jump",{x:n.x,y:n.y,z:n.z})}function Og(n){if(n.state!=="dodge"&&(n.x+=n.vx*Mi,n.z+=n.vz*Mi),n.move==="dash"&&n.moveT===rS&&n.grounded&&Pe("footstep",{x:n.x+Math.sin(n.yaw)*.4,y:0,z:n.z+Math.cos(n.yaw)*.4,foot:"L",speed:Ne.runSpeed,kick:1}),n.grounded)return!1;let t=n.state==="attack"&&n.move&&jt[n.move];if(t&&t.air&&!t.landFrame?!n.airHold&&n.vy>0?n.vy-=Ne.gravity*Mi:(n.airHold=!0,n.vy=Math.min(-Ne.hoverSink,n.vy*.7)):t&&t.air&&n.vy<=0&&n.vy>-8?n.vy=Math.max(-1.5,n.vy*.85-Ne.gravity*Ne.hoverG*Mi):n.vy-=Ne.gravity*Mi,n.y+=n.vy*Mi,n.y<=0){let e=n.vy<-15;return n.y=0,n.vy=0,n.grounded=!0,n.airHold=!1,n.airN&&(n.buf=null),Pe("land",{x:n.x,y:0,z:n.z,hard:e}),!0}return!1}var Ws=Math.PI/180,jc=Math.PI*2,Bg=(n,t,e)=>{let i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)},Yr={hips:[0,.84,.03],hipsR:[16,0,0],spine:[6,0,0],chest:[4,0,0],head:[2,0,0],footL:[.13,.08,.2,0,5],footR:[-.13,.1,-.22,20,-5],spear:Mn([-.3,1,.05],222,-22,0,.5),gripR:.5,gripL:.5,lfree:1,armL:[10,0,14,85]},lS=ve(Yr),zg={hips:[0,.95,0],hipsR:[-10,0,0],spine:[-6,0,0],chest:[-8,0,0],head:[16,0,0],footL:[.16,.36,.16,20,12],footR:[-.17,.26,-.12,30,-15],spear:Mn([-.66,1.36,.05],-115,8,0,0),gripR:0,gripL:.3,lfree:1,armL:[0,0,100,14]},ld={idle:Wn([[0,ve()],[.5,ve({hips:[0,.885,.005],chest:[6,8,0],spine:[7,6,0],spear:[-.24,.97,.01,30,31.5,0]})],[1,ve()]],!0),dodge:Wn([[0,ve({...Yr,hips:[0,.8,.08],hipsR:[24,0,0],footL:[.12,.08,.16,10,0],footR:[-.12,.14,-.3,40,0]})],[.1,ve({...Yr,hips:[0,.72,.12],hipsR:[38,0,0],spine:[16,0,0],chest:[12,0,0],head:[34,0,0],footL:[.12,.1,.02,45,0],footR:[-.12,.42,-.45,75,0],armL:[-95,0,15,15]}),"out"],[.22,ve({...Yr,hips:[0,.5,-.02],hipsR:[62,0,0],spine:[32,0,0],chest:[28,0,0],head:[150,0,0],footL:[.14,.16,.14,70,0],footR:[-.14,.2,.08,70,0],armL:[-55,0,10,115]})],[.44,ve({...Yr,hips:[0,.52,-.02],hipsR:[58,0,0],spine:[30,0,0],chest:[24,0,0],head:[140,0,0],footL:[.14,.1,.14,40,0],footR:[-.15,.14,.02,45,0],armL:[-50,0,10,110]})],[.58,ve({...Yr,hips:[0,.56,0],hipsR:[38,0,0],spine:[12,0,0],chest:[10,0,0],head:[14,0,0],footL:[.16,.08,.26,-5,8],footR:[-.15,.1,-.2,40,-8],armL:[-35,0,25,50]}),"out"],[.76,ve({...Yr,hips:[0,.66,.04],hipsR:[28,0,0],spine:[8,0,0],chest:[6,0,0],head:[6,0,0],footL:[.15,.08,.24,-5,6],footR:[-.14,.08,-.2,25,-6],armL:[-10,0,20,70]})],[1,ve(Yr)]]),air:Wn([[0,ve({hips:[0,.98,0],hipsR:[-6,-10,0],spine:[-4,0,0],chest:[-6,5,0],head:[-6,0,0],footL:[.13,0,.02,55,10],footR:[-.14,.05,-.14,60,-15],spear:[-.24,1.12,0,30,46,0]})],[.22,ve({hips:[0,.95,0],hipsR:[8,-15,0],spine:[8,0,0],chest:[4,5,0],head:[2,0,0],footL:[.15,.5,.22,20,10],footR:[-.16,.36,-.02,40,-15],spear:[-.24,1.15,-.02,30,38,0]}),"out"],[.55,ve({hips:[0,.95,0],hipsR:[6,-18,0],spine:[6,0,0],chest:[4,5,0],head:[2,0,0],footL:[.15,.42,.2,10,10],footR:[-.16,.3,-.06,30,-15],spear:[-.23,1.12,-.01,30,32,0]})],[1,ve({hips:[0,.95,0],hipsR:[4,-20,0],chest:[6,5,0],footL:[.16,.12,.22,-5,10],footR:[-.18,.16,-.2,15,-20],spear:[-.22,1.05,0,30,22,0]})]]),airFall:Wn([[.5,ve(zg)],[1,ve({...zg,hips:[0,.97,0],footL:[.17,.14,.16,5,12],footR:[-.18,.18,-.14,15,-15],armL:[0,0,110,8],spear:Mn([-.7,1.42,.02],-112,16,0,0)})]]),land:Wn([[0,ve({hips:[0,.6,.06],hipsR:[30,-20,0],spine:[10,4,0],chest:[10,6,0],head:[8,0,0],footL:[.22,.08,.3,-5,15],footR:[-.22,.08,-.22,10,-30],spear:[-.26,.78,.1,22,-22,0],gripL:.45})],[.4,ve({hips:[0,.64,.05],hipsR:[26,-20,0],spine:[9,4,0],chest:[8,6,0],head:[6,0,0],footL:[.22,.08,.3,-5,15],footR:[-.22,.08,-.22,10,-30],spear:[-.26,.8,.1,22,-20,0],gripL:.45}),"out"],[1,ve()]]),hurt:Wn([[0,ve()],[.25,ve({hips:[0,.86,-.12],hipsR:[-16,-30,6],spine:[-12,0,0],chest:[-10,0,0],head:[-18,0,0],spear:[-.22,1.08,-.1,50,30,0]}),"out"],[1,ve()]])};function Hg(n,t,e,i=0){e.set(lS);let s=t*Ne.runSpeed,r=2/ad(s),a=.5-.2*t,l=s*a*r,c=.04,o=0,u=0;for(let[g,A,E,m]of[[Te.footL,0,.11,1],[Te.footR,.5,-.11,-1]]){let v=n/jc+A;v-=Math.floor(v);let y,w,M;if(v<a){let S=v/a;y=c+l*(.5-S),w=.08,M=-.15+.75*S*S}else{let S=(v-a)/(1-a),P=S*S*(3-2*S);y=c+l*(P-.5)-.2*t*Math.sin(Math.PI*S)*(1-S),w=.08+(.08+.34*t)*Math.sin(Math.PI*Math.pow(S,.75)),M=.9*(1-P)-.25*P}e[g]=E,e[g+1]=w,e[g+2]=y,e[g+3]=M*(.4+.6*t),e[g+4]=m*5*Ws,m>0?o=y:u=y}let f=n/Math.PI-Math.floor(n/Math.PI),h=-Math.cos(jc*(f-a)),d=Math.abs(i),p=Math.max(.2,l*.5),x=Math.cos(n-Math.PI*a);e[Te.hips]=i*.18+x*.035*t,e[Te.hips+1]=.86-.06*t+h*.05*t-d*.2,e[Te.hipsR]=(10+14*t+d*20)*Ws+h*.04*t;let _=(u-o)*.3;return e[Te.hipsR+1]=_,e[Te.hipsR+2]=-i-x*4*t*Ws,e[Te.spine+1]=-.5*_,e[Te.chest+1]=-.8*_,e[Te.chest]=(4+4*t)*Ws,e[Te.chest+2]=x*6*t*Ws,e[Te.head+2]=i*.5,e[Te.armL]=o/p*(30+35*t)*Ws,e[Te.armL+3]=(80+15*t)*Ws,e[Te.spear]+=x*.03*t,e[Te.spear+1]+=h*.04*t,e[Te.spear+2]-=u/p*.14*t,e[Te.spear+4]-=h*3*t*Ws,e}var Fu=[0,.48,.1];function Vg(n){return jc*Bg(.02,.54,n)}var Du=new Float32Array(Wi);function Gg(n,t){No(ld.dodge,n,t);let e=Vg(n),i=-(e>Math.PI?e-jc:e)/Ws,s=Mn([-.34,Fu[1],Fu[2]],186,i,0,.55);Du.set(t);for(let r=0;r<6;r++)Du[Te.spear+r]=r<3?s[r]:s[r]*Ws;return Du[Te.gripR]=0,Jf(Du,t,Bg(.5,.92,n),t),t}function hS(n){let t=0;if(n.id==="air"&&n.t<.22)return 1+.15*(1-n.t/.22);if(n.id==="land")t=.17*(1-n.t)*(1-n.t)-.05*Math.sin(Math.PI*n.t);else if(n.id==="jc"){let e=(n.t*jt.jc.frames-jt.jc.landFrame)/10;e>=0&&e<1&&(t=.22*(1-e)*(1-e)-.05*Math.sin(Math.PI*e))}return 1-t}function Wg(n,t){let e=n.root,i=hS(t);if(i!==1){let h=1/Math.sqrt(i);e.scale.set(h*Ls,i*Ls,h*Ls),e.updateMatrixWorld(!0)}let s=t.id==="dodge"?Vg(t.t):0;if(s<=0||s>=jc)return;let r=e.rotation.y,a=Fu[1],l=Fu[2],c=Math.cos(s),o=Math.sin(s),u=(a-(a*c-l*o))*Ls,f=(l-(a*o+l*c))*Ls;e.position.x+=Math.sin(r)*f,e.position.y+=u,e.position.z+=Math.cos(r)*f,e.rotation.x=s,e.updateMatrixWorld(!0)}function qg(n,t,e=[7334108,4774088,15269883]){let i=Object.values(t.meshes).filter(S=>S&&S.isMesh),s=.24,r=4,a=new an({colorWrite:!1,transparent:!0}),l=[],c=0,o=0,u=new q,f=new q,h=(S,P,C,z)=>{let U=new Re(S,P);return U.matrixAutoUpdate=!1,U.visible=!1,U.frustumCulled=!1,U.renderOrder=C,z&&(U.onBeforeRender=(V,Y,ct)=>{let T=l[z];u.set(T.x,.9,T.z).applyMatrix4(ct.matrixWorldInverse),f.set(c,.9,o).applyMatrix4(ct.matrixWorldInverse);let L=Math.max(.5,-u.z),D=Math.max(.5,-f.z),B=Math.max(Math.abs(u.x/L-f.x/D)/(.45/L+.45/D),Math.abs(u.y/L-f.y/D)/(.95/L+.95/D));T.mat.opacity=T.alpha*Math.min(1,Math.max(0,(B-.6)/.4))}),n.add(U),U};for(let S=0;S<r;S++){let P=new an({color:S?e[1]:e[0],transparent:!0,opacity:0,blending:S?zr:ii,depthWrite:!1}),C=i.map(z=>h(z.geometry,P,3,S));if(S)for(let z of i)C.push(h(z.geometry,a,2));l.push({mat:P,meshes:C,age:s,peak:0,alpha:0,x:0,z:0})}let d=S=>{for(let P=0;P<S.meshes.length;P++)S.meshes[P].matrix.copy(i[P%i.length].matrixWorld),S.meshes[P].matrixWorldNeedsUpdate=!0},p=(S,P)=>{for(let C of S.meshes)C.visible=P},x=new pe,_=new pe,g=(S,P,C,z,U)=>{x.makeTranslation(C,z,U).multiply(_.makeScale(P,P,P)).multiply(_.makeTranslation(-C,-z,-U));for(let V=0;V<S.meshes.length;V++)S.meshes[V].matrix.multiplyMatrices(x,i[V].matrixWorld),S.meshes[V].matrixWorldNeedsUpdate=!0},A=new an({color:e[2],side:Xn,transparent:!0,opacity:0,depthWrite:!1}),E={mat:A,meshes:i.map(S=>h(S.geometry,A,3,0))},m=Ne.dodgeIFrames[1],v=jt.jc,y=-1,w=0,M=1;return{hide(){for(let S of l)S.age=s,p(S,!1);p(E,!1)},update(S,P,C){let z=l[0],U=S.state==="dodge";c=S.x,o=S.z,U&&(S.dodgeSeq!==y||S.stateT<w)&&(y=S.dodgeSeq,w=-9);let V=0,Y=1.06,ct=0,T=1.1;if(U&&S.stateT<m){let D=S.stateT;V=D<3?.12-.02*D:.05+.03*Math.cos(D*Math.PI/2),ct=D<3?.9:.5+.2*Math.cos(D*Math.PI/2),Y=1.05,T=D<3?1.09:1.07,z.mat.color.setHex(D<3?e[2]:e[0]),A.color.setHex(D<3?e[2]:e[1])}else if(S.move==="jc"&&S.moveT>=v.hang[0]-3&&S.moveT<v.plunge[0]+2){let D=S.moveT,B=S.vy>.5?.35:Math.min(1,(D-v.hang[0]+3)/6),b=D>=v.plunge[0]-4?1.6:1;V=B*b*(.12+.05*Math.sin(D*.7)),ct=Math.min(1,B*b*(.6+.2*Math.sin(D*.7))),Y=1.06,T=1.1+.02*Math.sin(D*.7)+(b>1?.03:0),z.mat.color.setHex(e[1]),A.color.setHex(e[0])}let L=U&&S.stateT-w>=4&&S.stateT<=9;if((V>0||L)&&P.root.updateMatrixWorld(!0),V>0&&(g(z,Y,S.x,S.y+.9,S.z),z.mat.opacity=V),ct>0&&(g(E,T,S.x,S.y+.9,S.z),A.opacity=ct),p(z,V>0),p(E,ct>0),L){let D=l[M];M=M%(r-1)+1,d(D),D.age=0,D.peak=S.stateT<2?.5:.38,D.x=S.x,D.z=S.z,w=S.stateT}for(let D=1;D<r;D++){let B=l[D];B.age+=C;let b=1-B.age/s;b>0&&(B.alpha=B.peak*b*Math.min(1,Math.hypot(S.x-B.x,S.z-B.z)/1.2)),p(B,b>0)}}}}var Ea=.025,hd=.0175,uS=[{n:[1,0,0],v:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]]},{n:[-1,0,0],v:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{n:[0,1,0],v:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]},{n:[0,-1,0],v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{n:[0,0,1],v:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{n:[0,0,-1],v:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]]}],Nu=new Qt;function si(n,t=Ea,{off:e=[0,0,0],jitter:i=.05,ao:s=.42}={}){let r=[1e9,1e9,1e9],a=[-1e9,-1e9,-1e9];for(let E of n)if(!E.paint&&E.c!==-1)for(let m=0;m<3;m++)r[m]=Math.min(r[m],E.a[m]),a[m]=Math.max(a[m],E.b[m]);let l=r.map(E=>E-1),c=a.map((E,m)=>E-r[m]+2),o=new Int32Array(c[0]*c[1]*c[2]).fill(-1),u=(E,m,v)=>E+c[0]*(m+c[1]*v);for(let E of n)for(let m=Math.max(E.a[2],l[2]);m<Math.min(E.b[2],l[2]+c[2]);m++)for(let v=Math.max(E.a[1],l[1]);v<Math.min(E.b[1],l[1]+c[1]);v++)for(let y=Math.max(E.a[0],l[0]);y<Math.min(E.b[0],l[0]+c[0]);y++){let w=u(y-l[0],v-l[1],m-l[2]);if(E.paint&&o[w]<0)continue;let M=typeof E.c=="function"?E.c(y,v,m):E.c;M!=null&&(o[w]=M)}let f=(E,m,v)=>E>=0&&m>=0&&v>=0&&E<c[0]&&m<c[1]&&v<c[2]&&o[u(E,m,v)]>=0?1:0,h=[],d=[],p=[],x=[],_=[1-s,1-s*.6,1-s*.25,1],g=[0,0,0,0];for(let E=1;E<c[2]-1;E++)for(let m=1;m<c[1]-1;m++)for(let v=1;v<c[0]-1;v++){let y=o[u(v,m,E)];if(!(y<0)){Nu.set(tn(y,1-i/2+le(v+l[0],m+l[1],E+l[2])*i));for(let w of uS){let[M,S,P]=w.n;if(f(v+M,m+S,E+P))continue;let C=w.n[0]?[1,2]:w.n[1]?[0,2]:[0,1],z=h.length/3;w.v.forEach((U,V)=>{let Y=[v+M,m+S,E+P],ct=[...Y],T=[...Y];ct[C[0]]+=U[C[0]]?1:-1,T[C[1]]+=U[C[1]]?1:-1;let L=[...ct];L[C[1]]+=U[C[1]]?1:-1;let D=f(...ct),B=f(...T);g[V]=D&&B?0:3-D-B-f(...L),h.push((v+l[0]+U[0]+e[0])*t,(m+l[1]+U[1]+e[1])*t,(E+l[2]+U[2]+e[2])*t),d.push(M,S,P);let b=_[g[V]];p.push(Nu.r*b,Nu.g*b,Nu.b*b)}),g[0]+g[2]<g[1]+g[3]?x.push(z,z+1,z+3,z+1,z+2,z+3):x.push(z,z+1,z+2,z,z+2,z+3)}}}let A=new hn;return A.setAttribute("position",new Ze(h,3)),A.setAttribute("normal",new Ze(d,3)),A.setAttribute("color",new Ze(p,3)),A.setIndex(x),A.computeBoundingSphere(),A}var Wt=(n,t,e,i)=>({a:n,b:t,c:e,paint:i}),Je=(n,t,e)=>({a:n,b:t,c:e,paint:!0}),Fn=(n,t)=>(n%t+t)%t,Kr=(n,t,e=0)=>t>0?n:{...n,a:[e-n.b[0],n.a[1],n.a[2]],b:[e-n.a[0],n.b[1],n.b[2]]};function Ta(n,t,e,i){let s=[],r=0;for(let o=0;o<n.length-1;o++){let u=n[o],f=n[o+1],h=[f[0]-u[0],f[1]-u[1],f[2]-u[2]],d=Math.hypot(...h)||1e-6;s.push({a:u,d:h,l:d,s:r}),r+=d}let a=[1e9,1e9,1e9],l=[-1e9,-1e9,-1e9],c=Math.max(t,e);for(let o of n)for(let u=0;u<3;u++)a[u]=Math.min(a[u],Math.floor(o[u]-c-1)),l[u]=Math.max(l[u],Math.ceil(o[u]+c+1));return Wt(a,l,(o,u,f)=>{let h=o+.5,d=u+.5,p=f+.5,x=1e9,_=0;for(let g of s){let A=((h-g.a[0])*g.d[0]+(d-g.a[1])*g.d[1]+(p-g.a[2])*g.d[2])/(g.l*g.l);A=A<0?0:A>1?1:A;let E=Math.hypot(g.a[0]+g.d[0]*A-h,g.a[1]+g.d[1]*A-d,g.a[2]+g.d[2]*A-p),m=(g.s+A*g.l)/r,v=E-(t+(e-t)*m);v<x&&(x=v,_=m)}return x<=0?i(_,o,u,f):null})}function Aa(n,t=.4,e=.9){return n.onBeforeCompile=i=>{i.uniforms.uHeroFill={value:t},i.uniforms.uHeroRim={value:e},i.fragmentShader=`uniform float uHeroFill, uHeroRim;
`+i.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      float heroNdv = abs(dot(normal, normalize(vViewPosition)));
      float heroFl = max(dot(normal, normalize(vec3(-0.4, 0.55, 0.75))), 0.0) * 0.8 + 0.2;
      vec3 heroExtra = diffuseColor.rgb * (uHeroFill * heroFl * vec3(0.78, 0.84, 1.0)
        + uHeroRim * pow(1.0 - heroNdv, 2.5) * vec3(1.0, 0.7, 0.45));`).replace("#include <opaque_fragment>",`
      outgoingLight += heroExtra * (1.0 - smoothstep(0.2, 0.85, dot(outgoingLight, vec3(0.2126, 0.7152, 0.0722))));
      #include <opaque_fragment>`)},n.customProgramCacheKey=()=>`hero-look-${t}-${e}`,n}var qt={fur:3880241,furH:5130049,furD:2564895,furT:6050893,muz:5919309,muzL:7234912,nose:4865595,nos:1512467,lip:3813420,horn:15391922,hornM:14204806,hornD:11110992,hornT:16248792,gold:14462532,goldD:10714154,iris:13123610,scl:15786696,earIn:9068112,vest:7433020,vestD:5591084,vestH:9077844,stitch:4209698,lea:7161385,leaD:4730908,brass:13212236,wrap:13193754,wrapD:9845778,wrapH:14577714,pants:6249802,pantsD:4868153,pantsH:7499865,boot:3156006,bootD:2038041,sole:1380625,lace:7758926,shaft:2827297,shaftH:3945262},ts=(n,t,e)=>{let i=le(n*3+11,t*7+5,e*5+3);return i<.1?qt.furD:i>.94?qt.furT:Fn(n+t*2+e,7)===0?qt.furH:qt.fur},Uu=(n,t,e)=>Fn(t,6)===0?qt.pantsD:le(n,t,e)>.9?qt.pantsH:qt.pants,Zr=(n,t,e)=>Fn(t,5)===0?qt.vestD:le(n+3,t,e)>.92?qt.vestH:qt.vest,ud=(n,t,e)=>Fn(t*2+n+e,5)===0?qt.wrapD:Fn(t+e*2,7)===0?qt.wrapH:qt.wrap,Xg=(n,t)=>Fn(t,4)===0?qt.bootD:qt.boot;function fS(){let n={};n.hips=[Wt([-7,-6,-5],[7,3,5],Uu),Wt([-8,1,-6],[8,4,6],(t,e,i)=>Fn(t,5)===0?qt.leaD:qt.lea),Wt([-2,1,6],[2,4,7],qt.brass),Je([-1,2,6],[1,3,7],qt.leaD),Wt([7,-4,-3],[10,2,2],qt.lea),Wt([7,0,-3],[10,2,2],qt.leaD),Je([8,0,1],[9,1,2],qt.brass),Wt([-10,-3,0],[-7,2,4],qt.lea),Wt([-10,1,0],[-7,2,4],qt.leaD)],n.spine=[Wt([-6,-3,-4],[6,9,5],(t,e,i)=>i>=4?t===-1||t===0||Fn(e,3)===0?qt.furD:qt.furH:ts(t,e,i)),Wt([-7,-3,-5],[7,9,-1],Zr),Wt([-7,-3,-1],[-4,9,6],Zr),Wt([4,-3,-1],[7,9,6],Zr),Je([-7,-3,-5],[7,-2,6],qt.stitch)],n.chest=[Wt([-8,-2,-5],[8,10,6],ts),Wt([-7,2,6],[-1,8,7],qt.furH),Wt([1,2,6],[7,8,7],qt.furH),Je([-7,2,6],[7,3,7],qt.furD),Wt([-6,9,-5],[6,12,3],ts),Wt([-4,11,-4],[4,14,1],ts),Wt([-9,-2,-6],[9,10,-2],Zr),Wt([-9,-2,-2],[-5,9,7],Zr),Wt([5,-2,-2],[9,9,7],Zr),Wt([-9,8,-6],[-4,11,3],Zr),Wt([4,8,-6],[9,11,3],Zr),Wt([-6,6,6],[-4,10,8],qt.vestH),Wt([4,6,6],[6,10,8],qt.vestH),Wt([-9,1,7],[-6,5,8],qt.vestD),Wt([6,1,7],[9,5,8],qt.vestD),Je([-8,4,7],[-7,5,8],qt.brass),Je([7,4,7],[8,5,8],qt.brass),Wt([2,-2,7],[4,10,8],qt.lea),Wt([1,4,8],[5,6,9],qt.brass),Je([2,4,8],[4,5,9],qt.leaD)],n.neck=[Wt([-4,-1,-4],[4,5,3],ts)];for(let[t,e]of[["R",-1],["L",1]])n["upperArm"+t]=[Wt([-3,-12,-3],[3,2,3],ts),Wt([-4,-5,-4],[4,3,4],ts),Wt([-2,-10,3],[2,-4,4],qt.furH)],n["foreArm"+t]=[Wt([-3,-6,-3],[3,1,3],ts),Wt([-3,-11,-3],[3,-5,3],ud),Wt([-4,-11,-4],[4,-9,4],ud)],n["hand"+t]=[Wt([-3,-3,-3],[3,3,3],(i,s,r)=>s<=-2?qt.furD:ud(i,s,r))],n["thigh"+t]=[Wt([-4,-18,-4],[4,1,4],Uu),Wt([-5,-8,-5],[5,0,5],Uu),Kr(Wt([4,-12,-2],[6,-5,3],qt.pantsD),e),Kr(Wt([4,-6,-2],[7,-5,3],qt.pantsH),e),Kr(Je([5,-6,0],[7,-5,1],qt.brass),e),...e<0?[Wt([-5,-7,-5],[5,-5,5],qt.lea),Wt([-7,-12,-3],[-5,-5,2],qt.leaD)]:[]],n["shin"+t]=[Wt([-4,-10,-4],[4,1,4],Uu),Wt([-4,-12,-4],[4,-9,4],qt.pantsD),Wt([-3,-17,-3],[3,-11,4],Xg),Je([-1,-16,3],[1,-11,4],(i,s)=>Fn(s,2)?qt.lace:qt.bootD),Wt([-4,-2,3],[4,2,5],qt.pantsH)],n["foot"+t]=[Wt([-4,-2,-3],[4,1,7],Xg),Wt([-4,-2,5],[4,0,8],qt.bootD),Wt([-5,-3,-4],[5,-2,9],qt.sole),Je([-1,0,1],[1,1,6],qt.lace)];return n}var $g=(n,t,e,i)=>n<.32&&Fn(Math.round(n*30),3)===0||n<.14?qt.hornD:n<.42?qt.hornM:n<.86?qt.horn:qt.hornT,fd=.021;function dS(){let n=[[6.5,14,0],[10,15.5,.5],[14,17,1],[17.5,20,1.5],[19,24,2],[18,28,2.5],[15.5,31,3]],t=n.map(([r,a,l])=>[1-r,a,l]),e=(r,a,l,c,o)=>(u,f,h)=>(u===r||u===a-1)&&(f===l||f===c-1)&&h>=o?null:1,i=e(-5,6,0,8,8),s=e(-4,5,1,7,10);return[Wt([-7,6,-5],[8,16,5],ts),Wt([-6,3,-4],[7,10,5],ts),Wt([-5,0,3],[6,8,10],(r,a,l)=>i(r,a,l)?a>=6?qt.furH:le(r,a,l)>.8?qt.muzL:qt.muz:null),Wt([-4,1,10],[5,7,11],(r,a,l)=>s(r,a,l)?qt.nose:null),Je([-3,3,10],[-1,5,11],qt.nos),Je([2,3,10],[4,5,11],qt.nos),Wt([-4,-1,2],[5,1,9],qt.lip),Je([-4,1,8],[5,2,10],qt.lip),Je([2,2,8],[5,3,10],qt.lip),Je([3,9,4],[6,11,5],qt.scl),Je([-5,9,4],[-2,11,5],qt.scl),Je([3,9,4],[4,11,5],qt.iris),Je([-3,9,4],[-2,11,5],qt.iris),Je([3,9,4],[4,10,5],qt.nos),Je([-3,9,4],[-2,10,5],qt.nos),Wt([-7,11,5],[8,13,7],r=>Math.abs(r)<=1?qt.furD:qt.fur),Wt([-2,10,5],[3,11,7],qt.furD),Wt([-12,9,-2],[-7,12,1],ts),Je([-12,9,0],[-8,11,1],qt.earIn),Wt([8,9,-2],[13,12,1],ts),Je([9,9,0],[13,11,1],qt.earIn),Wt([-4,16,-3],[5,19,3],(r,a,l)=>le(r+7,a,l)<.35?null:qt.furT),Ta(n,3,.8,$g),Ta(t,3,.8,$g),Wt([-1,0,11],[2,1,12],qt.gold),Wt([-2,1,11],[-1,3,12],qt.gold),Wt([2,1,11],[3,3,12],qt.gold)]}function pS(){let t=p=>p>=-6&&p<8||p>=18&&p<34,e=si([Wt([-1,-1,-36],[1,1,75],(p,x,_)=>t(_)?Fn(_*2+p+x,5)===0?qt.wrapD:qt.wrap:_>>1&1?qt.shaftH:qt.shaft),...[-34,9,17,35,70].map(p=>Wt([-2,-2,p],[2,2,p+1],qt.brass)),Wt([-2,-2,-38],[2,2,-35],qt.brass),Wt([-1,-1,-41],[1,1,-38],qt.goldD)],.02,{jitter:.04,ao:.3}),i=.012,s=[[3,0,128],[10,0,131],[17,0,138],[20,0,148],[19,0,158],[14,0,167],[8,0,172]],r=s.map(([p,x,_])=>[-p,x,_]),a=p=>p<.12?qt.goldD:p<.8?qt.hornM:qt.hornT,l=si([Wt([-3,-3,116],[3,3,126],qt.gold),Wt([-4,-4,121],[4,4,124],qt.goldD),Wt([-6,-3,125],[6,4,133],(p,x,_)=>x===3&&Fn(p,2)?qt.goldD:qt.gold),Wt([-3,1,131],[-1,3,133],qt.nos),Wt([1,1,131],[3,3,133],qt.nos),Ta(s,3.4,.9,a),Ta(r,3.4,.9,a)],i,{jitter:.05,ao:.35}),c=.011,o=Math.round(1.58/c),u=Math.round(1.98/c),f=u-o,h=[];for(let p=o;p<u;p++){let x=(p-o)/f,_=Math.max(1,Math.round(5*Math.pow(Math.sin(Math.PI*Math.min(1,x*1.2+.12)),.7)*(1-x*.35)));h.push(Wt([-_,-1,p],[_,1,p+1],g=>Math.abs(g+.5)<1?9407108:Math.abs(g+.5)>=_-1?16774890:14735564))}let d=si(h,c,{jitter:.03,ao:.2});return{shaft:e,head:l,point:d}}function mS(n,t){if(n===t-1)return si([Wt([-3,-9,-3],[3,0,3],(s,r,a)=>r<-6&&le(s,r,a)<.45?null:le(s+3,r,a)>.7?qt.furT:qt.furD)],hd,{jitter:.06,ao:.3});let i=n<2?2:1;return si([Wt([-i,-5,-i],[i,0,i],ts)],hd,{jitter:.06,ao:.3})}function gS(n,t){let e=n===t-1;return si([Wt([-1,-6,0],[2,0,1],(i,s)=>e&&s<=-5&&i===1?null:i===-1?qt.wrapD:qt.wrap)],.012,{off:[0,0,-.5],jitter:.04,ao:.15})}function xS(n,t){let e=n===t-1;return si([Wt([-2,-7,0],[2,0,1],(i,s)=>e&&s<=-6&&(i===-1||i===0)?null:i===-2?qt.wrapD:Fn(s,3)===0?qt.wrapH:qt.wrap)],.012,{off:[0,0,-.5],jitter:.03,ao:.15})}function Yg(n){let t=[{joint:n.hips,anchor:[0,-.03,-.14],rest:[0,-1,-.55],n:7,len:.075,stiff:.1,drag:.12,wind:.6,cone:110,sway:.25,seg:mS,hit:["hips",["thighL",.02],["thighR",.02],"kneeL","kneeR"]}];for(let i of["L","R"])t.push({joint:n["foreArm"+i],anchor:[0,-.24,-.08],rest:[0,-1,-.4],n:4,len:.055,stiff:.04,drag:.07,wind:1.8,cone:120,sway:.4,seg:gS,hit:[]});for(let i=0;i<3;i++){let s=i*2.094,r=Math.cos(s)*.02,a=Math.sin(s)*.02;t.push({joint:n.weapon,anchor:[r,a,1.4],rest:[r*10,a*4-1,-.3],n:4,len:.07,stiff:.04+i*.006,drag:.1,wind:1.2,cone:130,sway:.2,face:[1,0,0],seg:xS,hit:[]})}let e={head:[n.head,[0,8*fd,0],9*fd],chest:[n.chest,[0,.1,0],.24],hips:[n.hips,[0,-.06,0],.19],thighL:[n.thighL,[0,-.22,0],.12],thighR:[n.thighR,[0,-.22,0],.12],kneeL:[n.shinL,[0,-.02,0],.11],kneeR:[n.shinR,[0,-.02,0],.11]};return{list:t,cols:e}}function Kg(n,t,e){let i=fS();for(let[r,a]of Object.entries(i))t(n.joints[r],si(a,Ea),r);t(n.joints.head,si(dS(),fd,{off:[-.5,0,0],jitter:.05}),"head");let s=pS();t(n.joints.weapon,s.shaft,"shaft"),t(n.joints.weapon,s.head,"weaponHead",Aa(new Qe({vertexColors:!0,roughness:.34,metalness:.5,flatShading:!0}),.25,.6)),t(n.joints.weapon,s.point,"blade",new Qe({vertexColors:!0,roughness:.22,metalness:.65,flatShading:!0,emissive:16767152,emissiveIntensity:.28}))}var Me={gold:12089354,goldH:15249461,goldD:9854988,goldE:8015370,bolt:5913098,scratch:10906636,cream:15853256,creamD:13944484,teal:3108465,tealD:2051152,tealH:4624524,glove:15657439,gloveD:13354166,shorts:13802020,shortsD:11039768,boot:6044455,bootD:4139033,bootH:7622714,sole:2825493,buckle:13280082,brass:13214034,brassD:9136689,brassH:15190396,patina:6130803},Zg={x:.4,y:.14},mr=(n,t,e)=>Fn(t,4)===0?Me.tealD:le(n,t+9,e)>.9?Me.tealH:Me.teal,dd=(n,t,e)=>Fn(n+e,5)===0?Me.shortsD:Me.shorts,Ra=18,vS=4.5;function Jc(n,t){let e=Math.abs(n);if(t>=9&&t<=11.5)return e>=3&&e<=9.5;if(t>=-1&&t<9)return e>=4&&e<=8.5;if(t<-1){let i=Math.hypot(n,t+1);return i>=4&&i<=8.5}return!1}function yS(n,t,e){let i=n+.5,s=t+.5-vS,r=Math.hypot(i,s);if(r>Ra)return null;if(r>Ra-2.6){if(r>Ra-1)return Fn(Math.round(Math.atan2(s,i)/Math.PI*48),2)?Me.goldE:Me.goldD;let c=Math.atan2(s,i)/(Math.PI*2)*12;return Math.abs(c-Math.round(c))<.09?Me.bolt:Me.goldH}let a=e>=2||e<-2,l=Jc(i,s);return!l&&a?null:l?a?Me.cream:Me.gold:e===1||e===-2?(Jc(i-1,s+1)||Jc(i+1,s)||Jc(i,s-1))&&!Jc(i,s)?Me.goldE:r>Ra-5&&r<Ra-3.6?Me.cream:le(Math.floor(i*.5+s*.25),Math.floor(s*.5),e)>.93?Me.scratch:Me.gold:Me.gold}function _S(){let n={};n.hips=[Wt([-8,-6,-5],[8,3,5],dd),Wt([-8,1,-6],[8,3,6],Me.shortsD),Wt([7,-13,-3],[10,2,4],mr),Wt([-10,-13,-3],[-7,2,4],mr),Je([7,-13,-3],[10,-12,4],Me.tealD),Je([-10,-13,-3],[-7,-12,4],Me.tealD)],n.chest=[Wt([-Ra,-14,-3],[Ra,23,3],yS)],n.coat=[Wt([14,1,-4],[19,8,4],mr),Wt([-19,1,-4],[-14,8,4],mr),Je([14,7,-4],[19,8,4],Me.tealH),Je([-19,7,-4],[-14,8,4],Me.tealH),Wt([-13,-14,-5],[13,-6,-3],mr),Wt([10,17,-3],[14,21,4],mr),Je([11,18,3],[13,20,4],Me.tealD)];for(let[t,e]of[["R",-1],["L",1]])n["upperArm"+t]=[Wt([-3,-12,-3],[3,2,3],mr),Wt([-4,-3,-4],[4,2,4],mr)],n["foreArm"+t]=[Wt([-3,-8,-3],[3,1,3],mr),Wt([-4,-11,-4],[4,-6,4],Me.tealH),Je([-4,-8,-4],[4,-7,4],Me.tealD),Kr(Je([3,-10,0],[4,-9,1],Me.buckle),e),Kr(Je([3,-8,0],[4,-7,1],Me.buckle),e)],n["hand"+t]=[Wt([-3,-3,-3],[3,3,3],(i,s,r)=>Fn(i+s,5)===0?Me.gloveD:Me.glove),Wt([-2,-3,-3],[2,-2,3],Me.gloveD)],n["thigh"+t]=[Wt([-4,-16,-4],[4,1,4],dd),Wt([-5,-16,-5],[5,-12,5],dd),Je([-5,-16,-5],[5,-15,5],Me.shortsD)],n["shin"+t]=[Wt([-3,-17,-3],[3,0,3],(i,s)=>Fn(s,5)===0?Me.bootD:Me.boot),Wt([-4,-5,-4],[4,-1,4],Me.bootH),Wt([-4,-11,-4],[4,-9,4],Me.bootD),Kr(Wt([3,-11,-1],[5,-8,2],Me.buckle),e)],n["foot"+t]=[Wt([-4,-2,-3],[4,1,7],(i,s)=>s===0?Me.bootH:Me.boot),Wt([-4,-2,5],[4,0,8],Me.bootD),Wt([-5,-3,-4],[5,-2,9],Me.sole)];return n}function MS(){let e=si([Wt([-1,-1,-34],[1,1,80],(l,c,o)=>{let u=le(l+5,c,o);return u>.93?Me.patina:u<.12?Me.brassD:Fn(o,9)===0?Me.brassH:Me.brass}),Ta([[.5,.5,-33],[.5,-1.5,-37.5],[.5,-4.5,-39],[.5,-7,-37.5],[.5,-7.5,-34.5]],1.2,1.1,()=>Me.brass),Wt([-2,-2,78],[2,2,82],Me.brassD)],.02,{jitter:.04,ao:.3}),i=.012,s=150,r=12.5,a=si([Wt([-13,-13,136],[13,2,164],(l,c,o)=>{let u=Math.hypot(l+.5,c+.5,o+.5-s);if(u>r||u<10.8||c>0)return null;if(c===0)return Me.brassH;let f=le(l,c+3,o);return u<11.8?f>.9?Me.patina:Me.brassD:f>.94?Me.patina:f<.15?Me.brassD:Me.brass}),Wt([-1,-1,133],[1,1,139],Me.brass)],i,{jitter:.05,ao:.35});return{handle:e,bowl:a}}function bS(n,t){let e=Math.round(9+n*2/Math.max(1,t-1)),i=n===t-1,s=(r,a)=>i&&a===-5&&le(r,n,5)<.5||i&&a===-4&&le(r,n,9)<.25?null:r===-e||r===e-1||Fn(r,6)===0?Me.tealD:le(r,a,n)>.92?Me.tealH:Me.teal;return si([Wt([-e,-5,0],[e,0,1],s),Wt([-e,-5,-1],[e,0,0],(r,a)=>r===-e||r===e-1?s(r,a):null)],Ea,{off:[0,0,-.5],jitter:.04,ao:.18})}function SS(n,t){let e=n===t-1;return si([Wt([-2,-7,0],[2,0,1],(i,s)=>e&&s<=-6&&(i===-1||i===0)?null:i===-2?Me.tealD:Me.teal)],.014,{off:[0,0,-.5],jitter:.04,ao:.15})}function wS(n,t){let e=n===t-1;return si([Wt([-2,-6,0],[1,0,1],(i,s)=>e&&s<=-5&&i===0?null:i===-2?Me.tealD:Me.tealH)],.012,{off:[0,0,-.5],jitter:.04,ao:.15})}function jg(n){let t=[{joint:n.chest,anchor:[0,-.24,-.13],rest:[0,-1,-.2],n:5,len:.13,stiff:.15,drag:.2,wind:1.1,cone:80,sway:.2,seg:bS,hit:["hips","thighL","thighR","kneeL","kneeR"]}];for(let i of[0,1])t.push({joint:n.chest,anchor:[.3+i*.03,.47,-.03],rest:[.35,-.8,-.6],n:5,len:.09,stiff:.035,drag:.06,wind:2.2,cone:110,sway:.5,seg:SS,hit:["chest"]});for(let i of[0,1])t.push({joint:n.weapon,anchor:[i?.02:-.02,0,1.6],rest:[i?.3:-.3,-1,-.3],n:3,len:.07,stiff:.05,drag:.1,wind:1,cone:130,sway:.2,face:[1,0,0],seg:wS,hit:[]});let e={chest:[n.chest,[0,.11,0],.22],hips:[n.hips,[0,-.06,0],.17],thighL:[n.thighL,[0,-.22,0],.11],thighR:[n.thighR,[0,-.22,0],.11],kneeL:[n.shinL,[0,-.02,0],.1],kneeR:[n.shinR,[0,-.02,0],.1]};return{list:t,cols:e}}function Jg(n,t,e){for(let[l,c]of[["R",-1],["L",1]])n.joints["shoulder"+l].position.set(c*Zg.x,Zg.y,-.01);let i=_S(),s=Aa(new Qe({vertexColors:!0,roughness:.45,metalness:.3,flatShading:!0,color:new Qt(.74,.74,.74)}),.22,.5);for(let[l,c]of Object.entries(i))l==="coat"?t(n.joints.chest,si(c,Ea),"coat"):t(n.joints[l],si(c,Ea),l,l==="chest"?s:e);let r=MS(),a=Aa(new Qe({vertexColors:!0,roughness:.36,metalness:.55,flatShading:!0}),.25,.6);t(n.joints.weapon,r.handle,"shaft",a),t(n.joints.weapon,r.bowl,"blade",a)}var Qg={ansem:[Kg,Yg],useless:[Jg,jg]};function t1(n,t="ansem"){let e=Aa(new Qe({color:new Qt(.8,.8,.8),vertexColors:!0,roughness:.62,metalness:.06,flatShading:!0})),i={},s=(l,c,o,u=e)=>{let f=new Re(c,u);return f.castShadow=!0,f.receiveShadow=!0,l.add(f),i[o]=f,f},[r,a]=Qg[t]||Qg.ansem;return r(n,s,e),{meshes:i,material:e,chains:a(n.joints)}}var Qc=new q,qs=new q,Di=new q,el=new je,e1=new q,tl=new q,pd=new q,n1=new pe,Ca=new q,i1=new q;function ES(n,t,e,{anchor:i,rest:s,n:r,len:a,seg:l,stiff:c=.12,drag:o=.08,grav:u=1,wind:f=1,face:h=[0,0,-1],hit:d=[],cone:p=100,sway:x=0}){let _=[];for(let P=0;P<r;P++){let C=new Re(l(P,r),t);C.castShadow=!0,C.matrixAutoUpdate=!1,n.add(C),_.push(C)}let g=Array.from({length:r+1},()=>new q),A=Array.from({length:r+1},()=>new q),E=new q(...i),m=new q(...s).normalize(),v=new q(...h),y=Math.cos(p*Math.PI/180),w=Math.sin(p*Math.PI/180),M=!1,S=i[0]*7+i[1]*3+r;return{meshes:_,p:g,reset(){M=!1},update(P,C,z,U){if(e.updateWorldMatrix(!0,!1),e.getWorldQuaternion(el),Qc.copy(E).applyMatrix4(e.matrixWorld),qs.copy(m).applyQuaternion(el),x){let ct=.55+.3*Math.sin(C*1.7+S)+.15*Math.sin(C*3.7+S*2);qs.addScaledVector(U,x*ct),qs.x+=x*.5*Math.sin(C*1.1+S),qs.z+=x*.5*Math.cos(C*.8+S),qs.normalize()}if(!M||g[0].distanceToSquared(Qc)>4){for(let ct=0;ct<=r;ct++)g[ct].copy(Qc).addScaledVector(qs,a*ct),A[ct].copy(g[ct]);M=!0}let V=P>0?Math.max(1,Math.min(6,Math.round(P*120))):0,Y=V?P/V:0;for(let ct=0;ct<V;ct++){g[0].lerpVectors(A[0],Qc,(ct+1)/V);for(let T=1;T<=r;T++){Di.subVectors(g[T],A[T]).multiplyScalar(1-o),A[T].copy(g[T]),g[T].add(Di),g[T].y-=9.8*u*Y*Y;let L=.75+.45*Math.sin(C*1.7+T*.6)+.25*Math.sin(C*4.3+T*1.3),D=f*L*5*Y*Y*T/r;g[T].addScaledVector(U,D),g[T].x+=Math.sin(C*1.1+T*.4)*D*.35}for(let T=0;T<2;T++)for(let L=1;L<=r;L++){Di.copy(g[L-1]).addScaledVector(qs,a),g[L].lerp(Di,c),Di.subVectors(g[L],g[L-1]).normalize();let D=Di.dot(qs);D<y&&(Ca.copy(Di).addScaledVector(qs,-D),Ca.lengthSq()<1e-8&&Ca.set(1,0,0),Di.copy(qs).multiplyScalar(y).addScaledVector(Ca.normalize(),w)),g[L].copy(g[L-1]).addScaledVector(Di,a);for(let B of d){let[b,j]=Array.isArray(B)?B:[B,0],it=z[b],J=it.r+j;Ca.subVectors(g[L],it.c);let vt=Ca.length();vt<J&&g[L].copy(it.c).addScaledVector(Ca,J/(vt||1e-6))}}}A[0].copy(Qc),pd.copy(v).applyQuaternion(el);for(let ct=0;ct<r;ct++)tl.subVectors(g[ct],g[ct+1]).normalize(),Di.copy(pd).addScaledVector(tl,-pd.dot(tl)),Di.lengthSq()<1e-6&&Di.set(1,0,0),Di.normalize(),e1.crossVectors(tl,Di),n1.makeBasis(e1,tl,Di).setPosition(g[ct]),_[ct].matrix.copy(n1),_[ct].matrixWorldNeedsUpdate=!0}}}function s1(n,t,e,i){let s=t.joints,r=i.list.map(({joint:f,...h})=>ES(n,e,f,h)),a={};for(let f of Object.keys(i.cols))a[f]={c:new q,r:0};let l=new q,c=new je,o=new q(0,-1,0),u=0;return{chains:r,meshes:r.flatMap(f=>f.meshes),reset(){for(let f of r)f.reset()},update(f){u+=f;for(let h of["L","R"]){let d=s["pauldron"+h];d&&(i1.set(0,-1,0).applyQuaternion(s["upperArm"+h].quaternion),el.setFromUnitVectors(o,i1),d.quaternion.identity().slerp(el,.5))}s.root.updateMatrixWorld(!0);for(let[h,[d,[p,x,_],g]]of Object.entries(i.cols))a[h].c.set(p,x,_).applyMatrix4(d.matrixWorld),a[h].r=g;l.set(0,.15,-1).applyQuaternion(s.root.getWorldQuaternion(c));for(let h of r)h.update(f,u,a,l)}}}var Et={OFF:0,IDLE:1,ADVANCE:2,GUARD:3,ATTACK:4,HURT:5,KNOCK:6,AIR:7,DOWN:8,GETUP:9,DEAD:10},TS=n=>n>=Et.HURT&&n<=Et.GETUP;var ci={SPEAR:0,SWORD:1,CAPTAIN:2,BEARER:3,OFFICER:4},Oo=1,md=2,r1=3,jr=4,gd=5;var ee={officers:4,walk:2.4,run:4.8,march:3,charge:5,turn:7,radius:.48,heroR:.8,bands:[[1.9,2.8],[3.4,5.6],[6.5,10]],share:[.4,.85],bandMin:[14,20],bandMax:[18,30],aggro:9,officerAggro:16,tokens:3,attackRange:1.7,maxStrikers:2,strikeGap:[[40,90],[30,80]],grace:[150,240],rally:[3,5],rallyTime:44,windup:40,strike:40,recover:24,cooldown:[110,260],officerCd:[40,90],dmg:10,officerDmg:22,hp:30,captainHp:80,officerHp:520,deadTime:210,fieldR:62,engaged:84,transit:72,halt:15,haltFrames:36,fold:7.5,wave:[8,15],waveEvery:[45,110],waveDist:[28,38],squadAggro:8,siegeR:[2.4,3.6],fleeRun:4.6},Jr=1/60,nl=1.2,gr=128,ku=gr*nl/2,ps=64;function a1(n,t=300){let e=t+ee.officers,i=(T=e)=>new Float64Array(T),s=(T=e)=>new Int32Array(T),r={N:e,grunts:t,x:i(),z:i(),y:i(),vx:i(),vz:i(),vy:i(),yaw:i(),hp:i(),hpMax:i(),st:s(),stT:s(),type:s(),kind:s(),token:s(),cd:s(),hs:s(),flash:s(),rx:i(),rxV:i(),spinV:i(),pref:i(),band:s(),aggro:i(),phase:i(),hurtDur:s(),bounce:s(),lastHit:s(),strafe:i(),kod:s(),tokT:s(),ang:i(),seated:s(),squad:s(),slotX:i(),slotZ:i(),form:s(),sq:{x:i(ps),z:i(ps),face:i(ps),st:s(ps),t:s(ps),n:0,tx:i(ps),tz:i(ps),tgt:s(ps),pin:s(ps),tag:s(ps)},flee:s(),fx:i(),fz:i(),fleeV:i(),dmgK:i(),invuln:s(),autoWaves:!0,officerWaves:!0,raiseF:s(),feint:s(),wind:s(),waveT:0,tokensUsed:0,strikeF:0,gap:0,graceF:0,heroHp:0,wavesOn:!1,engaged:0},a=new Int32Array(gr*gr),l=new Int32Array(e),c=new Float64Array(e),o=new Float64Array(e),u=new Int32Array(ps),f=!1;function h(T,L,D,B,b){let j=T>=t;j&&(b=ci.OFFICER),r.x[T]=L,r.z[T]=Math.min(D,Pi-2.5),r.y[T]=0,r.vx[T]=r.vz[T]=r.vy[T]=0,r.yaw[T]=Math.atan2(n.hero.x-L,n.hero.z-D),r.type[T]=j?1:0,r.kind[T]=b,r.hpMax[T]=r.hp[T]=j?ee.officerHp:b===ci.CAPTAIN?ee.captainHp:ee.hp,r.st[T]=B?Et.ADVANCE:Et.IDLE,r.stT[T]=Oe.int(0,60),r.token[T]=0,r.cd[T]=Oe.int(0,120),r.hs[T]=0,r.flash[T]=0,r.raiseF[T]=0,r.feint[T]=0,r.wind[T]=0,r.flee[T]=0,r.dmgK[T]=1,r.invuln[T]=0,r.rx[T]=r.rxV[T]=r.spinV[T]=0,r.bounce[T]=0,r.lastHit[T]=-1,r.kod[T]=0;let it=Oe.next();b===ci.BEARER?(r.band[T]=2,r.pref[T]=Oe.range(7,11)):d(T,j||it<ee.share[0]?0:it<ee.share[1]?1:2),r.aggro[T]=j?ee.officerAggro:ee.aggro,r.phase[T]=Oe.range(0,6.28),r.strafe[T]=Oe.chance(.5)?1:-1,r.squad[T]=-1,r.form[T]=0}function d(T,L){r.band[T]=L,r.pref[T]=Oe.range(ee.bands[L][0],ee.bands[L][1]),r.seated[T]=0}let p=()=>{let T=Oe.next();return T<.05?ci.CAPTAIN:T<.42?ci.SWORD:ci.SPEAR};r.reset=()=>{r.st.fill(Et.OFF),r.token.fill(0),r.tokensUsed=0,r.strikeF=0,r.gap=0,r.graceF=0,r.heroHp=n.hero.hp,r.waveT=0,r.sq.n=0,r.wavesOn=!1,r.flee.fill(0),r.autoWaves=!0,r.officerWaves=!0};function x(T){let L=[],[D,B]=T?[t,e]:[0,t];for(let b=D;b<B;b++)r.st[b]===Et.OFF&&L.push(b);return L}function _(T,L,D,B,b,j){let it=-1;for(let Z=0;Z<r.sq.n;Z++)if(!r.sq.st[Z]){it=Z;break}if(it<0){if(r.sq.n>=ps)return-1;it=r.sq.n++}r.sq.x[it]=L,r.sq.z[it]=D,r.sq.face[it]=B,r.sq.st[it]=j,r.sq.t[it]=0,r.sq.tgt[it]=0,r.sq.pin[it]=0,r.sq.tag[it]=-1;let J=Math.sin(B),vt=Math.cos(B),Nt=Math.ceil((T.length-1)/b);return T.forEach((Z,at)=>{let pt,zt,gt;if(at===0)pt=0,zt=1.5,gt=ci.BEARER;else{let Ut=at-1,ie=Math.floor(Ut/b);pt=(Ut%b-(b-1)/2)*1.15+Oe.range(-.12,.12),zt=-ie*1.15+Oe.range(-.12,.12)+(Nt-1)*.3,gt=Ut===0?ci.CAPTAIN:p(),gt===ci.CAPTAIN&&Ut!==0&&(gt=ci.SPEAR)}h(Z,L+pt*vt+zt*J,D-pt*J+zt*vt,!1,gt),r.squad[Z]=it,r.slotX[Z]=pt,r.slotZ[Z]=zt,r.form[Z]=1,r.yaw[Z]=B,j!==Oo&&(r.st[Z]=Et.ADVANCE)}),it}r.cap=t,r.spawnArmy=(T=t,L=0,D=0,B=7,b=!0)=>{r.wavesOn=!0,r.cap=Math.min(T,t);let j=x(!1).slice(0,T),it=n.cam.yaw,J=0,vt=0;for(;J<j.length;){let Nt=vt===0&&j.length>=120,Z=Math.min(j.length-J,Nt?Oe.int(50,60):Oe.int(18,30)),at=Nt?it+Oe.range(-.25,.25):vt%3===2?it+Math.PI+Oe.range(-1.4,1.4):it+Oe.range(-1.8,1.8),pt=Nt?Oe.range(24,28):Oe.range(B+4,34),zt=L+Math.sin(at)*pt,gt=D+Math.cos(at)*pt;gt=Math.min(gt,Pi-6);let Ut=Math.atan2(L-zt,D-gt);_(j.slice(J,J+Z),zt,gt,Ut,Nt?10:Math.max(4,Math.round(Math.sqrt(Z*1.6))),Oo),J+=Z,vt++}if(b)for(let Nt of x(!0)){let Z=Oe.range(0,Math.PI*2),at=Oe.range(12,30);h(Nt,L+Math.cos(Z)*at,D+Math.sin(Z)*at,!1)}},r.spawnRing=(T,L)=>{r.wavesOn=!0;let D=x(!1).slice(0,T),B=n.hero.x,b=n.hero.z;D.forEach((j,it)=>{let J=Math.floor(it/24),vt=it%24/24*Math.PI*2+J*.13,Nt=L+J*1.1+Oe.range(-.2,.2);h(j,B+Math.cos(vt)*Nt,b+Math.sin(vt)*Nt,!0,it%23===11?ci.BEARER:p())})},r.clear=()=>{r.st.fill(Et.OFF),r.token.fill(0),r.tokensUsed=0,r.sq.n=0},r.aliveGrunts=()=>{let T=0;for(let L=0;L<t;L++)r.st[L]!==Et.OFF&&r.st[L]!==Et.DEAD&&T++;return T},r.spawnOfficer=(T,L,D,{hp:B=0,aggro:b=ee.officerAggro,face:j=null}={})=>{let it=t+T;return h(it,L,D,!1),B&&(r.hp[it]=r.hpMax[it]=B),r.aggro[it]=b,j!=null&&(r.yaw[it]=j),r.wavesOn=!0,it},r.wake=T=>{r.st[T]===Et.IDLE&&(A(T,Et.ADVANCE),r.aggro[T]=ee.officerAggro)},r.spawnSquad=(T,L,D,{state:B="hold",target:b=null,pin:j=!1,tag:it=-1,cols:J=0,captainHp:vt=0,face:Nt=null,officer:Z=-1,officerHp:at=0,force:pt=!1}={})=>{let zt=pt?T:r.cap-r.aliveGrunts(),gt=x(!1).slice(0,Math.max(0,Math.min(T,zt)));if(gt.length<2)return null;Z>=0&&r.st[t+Z]===Et.OFF&&gt.splice(2,0,t+Z);let Ut=b?b.x:n.hero.x,ie=b?b.z:n.hero.z,rt=Nt??Math.atan2(Ut-L,ie-D),Rt=B==="hold"?Oo:B==="charge"?jr:md,Ct=_(gt,L,D,rt,J||Math.max(3,Math.round(Math.sqrt(gt.length*1.6))),Rt);if(Ct<0)return null;r.sq.pin[Ct]=j?1:0,r.sq.tag[Ct]=it,b&&(r.sq.tgt[Ct]=1,r.sq.tx[Ct]=b.x,r.sq.tz[Ct]=b.z);let Ot=-1;return gt.length>1&&(Ot=gt[1],vt&&(r.hp[Ot]=r.hpMax[Ot]=vt)),Z>=0&&at&&(r.hp[t+Z]=r.hpMax[t+Z]=at),r.wavesOn=!0,{q:Ct,members:gt,captain:Ot}},r.squadAlive=T=>{let L=0;for(let D=0;D<e;D++)r.form[D]&&r.squad[D]===T&&r.st[D]!==Et.DEAD&&r.st[D]!==Et.OFF&&L++;return L},r.nearest=(T,L,D,B=0,b=Math.PI)=>{let j=-1,it=D*D;for(let J=0;J<e;J++){let vt=r.st[J];if(vt===Et.OFF||vt===Et.DEAD)continue;let Nt=r.x[J]-T,Z=r.z[J]-L,at=Nt*Nt+Z*Z;if(!(at>=it)){if(b<Math.PI){let pt=Math.atan2(Nt,Z)-B;if(pt=Math.atan2(Math.sin(pt),Math.cos(pt)),Math.abs(pt)>b)continue}it=at,j=J}}return j},r.counts=()=>{let T=0,L=0;for(let D=0;D<e;D++){let B=r.st[D];B===Et.OFF||B===Et.DEAD||(T++,B!==Et.IDLE&&L++)}return{alive:T,active:L}};function g(T){r.token[T]&&(r.token[T]=0,r.tokensUsed--)}r.releaseToken=g;function A(T,L){r.st[T]=L,r.stT[T]=0}r.step=()=>{let T=n.hero,L=n.freeze>0;n.freeze>0&&n.freeze--,L||w(T),T.hp<r.heroHp&&(r.graceF=n.frame+Oe.int(ee.grace[0],ee.grace[1])),r.heroHp=T.hp;let D=0;for(let b=0;b<e;b++)r.st[b]===Et.ATTACK&&r.stT[b]<ee.strike&&D++;let B=T.state==="attack";for(let b=0;b<e;b++){let j=r.st[b];if(j===Et.OFF)continue;if(r.flash[b]>0&&r.flash[b]--,r.hs[b]>0){r.hs[b]--;continue}if(L)continue;if(r.stT[b]++,j===Et.DEAD){r.stT[b]>ee.deadTime&&(r.st[b]=Et.OFF,g(b));continue}if(TS(j)){r.wind[b]&&(r.wind[b]=0,r.strikeF=Math.min(r.strikeF,n.frame-r.gap+20)),g(b),r.form[b]=0;continue}r.cd[b]>0&&r.cd[b]--;let it=T.x-r.x[b],J=T.z-r.z[b],vt=Math.hypot(it,J)||1e-6,Nt=Math.atan2(it,J),Z=0,at=0;if(r.flee[b]&&j!==Et.ATTACK){let pt=r.fx[b]-r.x[b],zt=r.fz[b]-r.z[b],gt=Math.hypot(pt,zt);gt>.3?(Z=pt/gt*r.fleeV[b],at=zt/gt*r.fleeV[b],y(b,Math.atan2(Z,at),ee.turn)):y(b,Nt,2),j!==Et.ADVANCE&&A(b,Et.ADVANCE),g(b)}else if(r.form[b]){let pt=r.squad[b],zt=r.sq.face[pt],gt=Math.sin(zt),Ut=Math.cos(zt),ie=r.sq.st[pt]===gd,rt=ie?r.sq.x[pt]+r.slotX[b]:r.sq.x[pt]+r.slotX[b]*Ut+r.slotZ[b]*gt,Rt=ie?r.sq.z[pt]+r.slotZ[b]:r.sq.z[pt]-r.slotX[b]*gt+r.slotZ[b]*Ut,Ct=rt-r.x[b],Ot=Rt-r.z[b],Ht=Math.hypot(Ct,Ot),yt=r.sq.st[pt]===jr?ee.charge*1.15:ee.run;if(Ht>.06){let ne=Math.min(yt,Ht*4);Z=Ct/Ht*ne,at=Ot/Ht*ne}y(b,ie?Math.atan2(r.sq.x[pt]-r.x[b],r.sq.z[pt]-r.z[b]):zt,3),ie&&Ht<.5&&(n.frame+b*13)%50===0&&Oe.chance(.5)&&(r.raiseF[b]=n.frame+ee.rallyTime),j===Et.IDLE&&r.sq.st[pt]>Oo?A(b,Et.ADVANCE):j===Et.IDLE&&vt<r.aggro[b]&&(r.sq.st[pt]=jr,r.sq.tgt[pt]=0)}else if(j===Et.IDLE)vt<r.aggro[b]&&A(b,Et.ADVANCE),y(b,Nt,1.5);else if(j===Et.ATTACK){let pt=r.stT[b];y(b,Nt,pt<ee.windup-8?ee.turn:0),pt===ee.strike&&(r.wind[b]=0,r.feint[b]?Pe("enemy:attack",{i:b,x:r.x[b],y:1.1,z:r.z[b],officer:r.type[b]===1,feint:1}):n.combat.enemyStrike(b));let zt=r.feint[b]?2.45:ee.attackRange-.2;if(pt<ee.windup-6&&vt>zt?(Z=it/vt*ee.walk,at=J/vt*ee.walk):r.feint[b]&&pt<ee.windup+8&&vt<zt-.3&&(Z=-it/vt*1.2,at=-J/vt*1.2),pt>=ee.windup+ee.recover){let gt=r.type[b]?ee.officerCd:ee.cooldown;A(b,Et.GUARD),g(b),r.cd[b]=Oe.int(gt[0],gt[1])}}else if(r.kind[b]===ci.BEARER){let pt=n.cam.yaw+r.strafe[b]*(.25+1.05*(b*.618034%1)+.12*Math.sin(n.frame*.004+b)),zt=T.x+Math.sin(pt)*r.pref[b]-r.x[b],gt=T.z+Math.cos(pt)*r.pref[b]-r.z[b],Ut=Math.hypot(zt,gt);if(Ut>.6){let ie=Ut>5?ee.run:ee.walk;Z=zt/Ut*ie,at=gt/Ut*ie,j!==Et.ADVANCE&&A(b,Et.ADVANCE)}else j!==Et.GUARD&&A(b,Et.GUARD);y(b,Nt,ee.turn)}else{let pt=Math.sin(n.frame*.021+r.phase[b]*3)*.4,zt=r.token[b]?ee.attackRange*.85:r.pref[b]+pt-(n.frame<r.raiseF[b]?.55:0),gt=it,Ut=J,ie=vt-zt,rt=NaN;if(r.token[b]||(!r.band[b]&&r.seated[b]&&vt<zt+3?rt=r.ang[b]:r.band[b]===2&&vt<zt+6&&(rt=n.cam.yaw+r.strafe[b]*(.15+1.35*(b*.618034%1)))),rt===rt){let Ct=Math.atan2(-it,-J),Ot=rt-Ct;Ot=Math.atan2(Math.sin(Ot),Math.cos(Ot));let Ht=Ct+Math.max(-.45,Math.min(.45,Ot));gt=T.x+Math.sin(Ht)*zt-r.x[b],Ut=T.z+Math.cos(Ht)*zt-r.z[b],ie=Math.hypot(gt,Ut)}let Rt=Nt;if(ie>.35){let Ct=ie>1.2?ee.run:ee.walk*(r.type[b]?.9:1),Ot=Math.hypot(gt,Ut)||1e-6;Z=gt/Ot*Ct,at=Ut/Ot*Ct,Ct===ee.run&&(Rt=Math.atan2(Z,at)),j!==Et.ADVANCE&&A(b,Et.ADVANCE)}else{let Ct=Math.sin(n.cam.yaw),Ot=Math.cos(n.cam.yaw);if(vt<zt-.45)Z=-it/vt*1.3,at=-J/vt*1.3;else if(r.band[b]&&(-it*Ct-J*Ot)/vt<(r.band[b]===2?-.1:-.75)){let Ht=J/vt,yt=-it/vt;Ht*Ct+yt*Ot<0&&(Ht=-Ht,yt=-yt),Z=Ht*1.5,at=yt*1.5}else(r.stT[b]+b*7)%240<70&&(Z=-J/vt*.9*r.strafe[b],at=it/vt*.9*r.strafe[b]);j!==Et.GUARD&&A(b,Et.GUARD)}if(r.token[b]&&vt<=ee.attackRange+.9&&r.cd[b]===0&&!T.y&&D<ee.maxStrikers&&T.state!=="hurt"&&n.frame-r.strikeF>=(r.type[b]?r.gap>>1:r.gap)){A(b,Et.ATTACK),r.wind[b]=1,r.feint[b]=n.frame<r.graceF?1:0,D++;let Ct=ee.strikeGap[B?1:0];r.strikeF=n.frame,r.gap=Oe.int(Ct[0],Ct[1]),v(b)}y(b,Rt,ee.turn)}r.vx[b]=Z,r.vz[b]=at,r.x[b]+=Z*Jr,r.z[b]+=at*Jr,r.phase[b]+=Math.hypot(Z,at)*Jr*3.2}if(!L){for(let b=0;b<e;b++)r.token[b]&&r.st[b]!==Et.ATTACK&&++r.tokT[b]>180&&(g(b),r.cd[b]=60);n.frame%6===0&&U(T),V(T),Y(T),ct(T)}};let E=new Int32Array(8),m=new Float64Array(8);function v(T){let L=Oe.int(ee.rally[0],ee.rally[1]),D=0;for(let B=0;B<e;B++){if(B===T||r.st[B]!==Et.GUARD||r.token[B]||r.form[B]||r.kind[B]===ci.BEARER)continue;let b=(r.x[B]-r.x[T])**2+(r.z[B]-r.z[T])**2;if(b>30||D===L&&b>=m[D-1])continue;let j=D<L?D++:D-1;for(;j>0&&m[j-1]>b;)m[j]=m[j-1],E[j]=E[j-1],j--;m[j]=b,E[j]=B}for(let B=0;B<D;B++)r.raiseF[E[B]]=n.frame+ee.rallyTime-B*3}function y(T,L,D){let B=L-r.yaw[T];B=Math.atan2(Math.sin(B),Math.cos(B));let b=D*Jr;r.yaw[T]+=Math.max(-b,Math.min(b,B))}function w(T){let L=r.sq;for(let J=0;J<L.n;J++)L.t[J]++;let D=u.fill(0),B=0,b=0;for(let J=0;J<e;J++){let vt=r.st[J];vt===Et.OFF||vt===Et.DEAD||(r.form[J]?D[r.squad[J]]++:(vt===Et.ADVANCE||vt===Et.GUARD||vt===Et.ATTACK)&&B++)}for(let J=0;J<L.n;J++)L.st[J]>Oo&&(b+=D[J]);B+=b*.35;let j=-1,it=1/0;for(let J=0;J<L.n;J++){if(!L.st[J])continue;if(!D[J]){L.st[J]=0;continue}let vt=Math.hypot(T.x-L.x[J],T.z-L.z[J]);L.tgt[J]&&vt<ee.squadAggro&&(L.tgt[J]=0,L.st[J]=jr,L.t[J]=0);let Nt=(L.tgt[J]?L.tx[J]:T.x)-L.x[J],Z=(L.tgt[J]?L.tz[J]:T.z)-L.z[J],at=Math.hypot(Nt,Z)||1e-6;if(L.st[J]===Oo){!L.pin[J]&&at<it&&(it=at,j=J);continue}if(L.st[J]===gd)continue;let pt=Math.atan2(Nt,Z)-L.face[J];pt=Math.atan2(Math.sin(pt),Math.cos(pt)),L.face[J]+=Math.max(-1.1*Jr,Math.min(1.1*Jr,pt));let zt=0;if(L.tgt[J]){if(zt=ee.march*1.15,at<3.2){L.st[J]=gd,L.t[J]=0,L.x[J]=L.tx[J],L.z[J]=L.tz[J];let gt=0,Ut=D[J];for(let ie=0;ie<e;ie++){if(!r.form[ie]||r.squad[ie]!==J||r.st[ie]===Et.DEAD||r.st[ie]===Et.OFF)continue;let rt=gt/Ut*Math.PI*2+J*.7,Rt=ee.siegeR[gt%2];r.slotX[ie]=Math.sin(rt)*Rt,r.slotZ[ie]=Math.cos(rt)*Rt,gt++}continue}}else L.st[J]===md?(zt=ee.march,at<ee.halt&&(L.st[J]=r1,L.t[J]=0)):L.st[J]===r1?L.t[J]>ee.haltFrames&&(L.st[J]=jr):zt=ee.charge;if(Math.abs(pt)>.9&&(zt*=.4),L.x[J]+=Math.sin(L.face[J])*zt*Jr,L.z[J]+=Math.cos(L.face[J])*zt*Jr,L.st[J]===jr&&!L.tgt[J]&&at<ee.fold){L.st[J]=0;for(let gt=0;gt<e;gt++)r.form[gt]&&r.squad[gt]===J&&(r.form[gt]=0,r.st[gt]===Et.IDLE&&A(gt,Et.ADVANCE))}}n.frame%20===0&&j>=0&&B<ee.engaged&&b<ee.transit&&it<55&&(L.st[j]=it<ee.halt+5?jr:md,L.t[j]=0),r.engaged=B,f=j>=0&&it<ee.waveDist[1]}let M=16,S=new Int32Array(M),P=T=>Math.min(M-1,Math.floor((T+Math.PI)/(2*Math.PI)*M)),C=T=>(T+.5)/M*2*Math.PI-Math.PI;function z(T,L,D=-1){if(D<0){let B=P(Math.atan2(r.x[T]-L.x,r.z[T]-L.z));D=B;for(let b=1;b<=M/2;b++){let j=(B+b)%M,it=(B-b+M)%M;S[j]<S[D]&&(D=j),S[it]<S[D]&&(D=it)}}S[D]++,r.seated[T]=1,r.ang[T]=C(D)+Oe.range(-.12,.12)}function U(T){let L=D=>{let B=r.st[D];return(B===Et.ADVANCE||B===Et.GUARD||B===Et.ATTACK)&&!r.form[D]&&!r.flee[D]};S.fill(0);for(let D=0;D<e;D++)!r.band[D]&&r.seated[D]&&L(D)&&S[P(Math.atan2(Math.sin(r.ang[D]),Math.cos(r.ang[D])))]++;for(let D=0;D<e;D++)!r.band[D]&&!r.seated[D]&&L(D)&&z(D,T);for(let D=0,B=0;D<e&&B<4&&S.includes(0);D++){if(r.band[D]||!r.seated[D]||!L(D)||r.token[D])continue;let b=P(Math.atan2(Math.sin(r.ang[D]),Math.cos(r.ang[D])));S[b]<2||(S[b]--,z(D,T),B++)}for(let D=0;D<2;D++){let B=0;for(let b=0;b<e;b++)r.band[b]===D&&L(b)&&B++;for(let b=ee.bandMin[D]-B;b>0;b--){let j=-1,it=T.x,J=T.z;if(!D){j=0;for(let pt=1;pt<M;pt++)S[pt]<S[j]&&(j=pt);let Z=C(j),at=(ee.bands[0][0]+ee.bands[0][1])/2;it+=Math.sin(Z)*at,J+=Math.cos(Z)*at}let vt=-1,Nt=1/0;for(let Z=0;Z<e;Z++){if(r.band[Z]<=D||r.kind[Z]===ci.BEARER||!L(Z))continue;let at=(r.x[Z]-it)**2+(r.z[Z]-J)**2;at<Nt&&(Nt=at,vt=Z)}if(vt<0)break;d(vt,D),D||z(vt,T,j),B++}for(;B>ee.bandMax[D];B--){let b=-1,j=-1;for(let it=0;it<e;it++){if(r.band[it]!==D||r.token[it]||!L(it))continue;let J=(r.x[it]-T.x)**2+(r.z[it]-T.z)**2;J>j&&(j=J,b=it)}if(b<0)break;d(b,D+1)}}}function V(T){if(n.frame%6!==0||r.tokensUsed>=ee.tokens)return;let L=n.cam.yaw,D=Math.sin(L),B=Math.cos(L),b=Math.sin(T.yaw),j=Math.cos(T.yaw),it=T.state==="attack",J=-1,vt=1/0,Nt=Oe.int(0,e-1);for(let Z=0;Z<e;Z++){let at=(Nt+Z)%e,pt=r.st[at];if(pt!==Et.GUARD&&pt!==Et.ADVANCE||r.token[at]||r.cd[at]>0||r.form[at]||r.flee[at]||r.kind[at]===ci.BEARER)continue;let zt=r.x[at]-T.x,gt=r.z[at]-T.z,Ut=Math.hypot(zt,gt);if(Ut>4.5)continue;let ie=(zt*D+gt*B)/(Ut||1),rt=Ut+(1-ie)*1.2+(ie>.92?1.2:0)+(it&&(zt*b+gt*j)/(Ut||1)>-.2?3:0);rt<vt&&(vt=rt,J=at)}J>=0&&(r.token[J]=1,r.tokensUsed++,r.tokT[J]=0)}function Y(T){a.fill(-1);for(let b=0;b<e;b++){let j=r.st[b];if(j===Et.OFF||j===Et.DEAD||j===Et.DOWN||r.y[b]>.6)continue;let it=Math.floor((r.x[b]+ku)/nl),J=Math.floor((r.z[b]+ku)/nl);if(it<0||J<0||it>=gr||J>=gr)continue;let vt=it+J*gr;l[b]=a[vt],a[vt]=b}let L=ee.radius*2,D=ee.heroR+ee.radius;for(let b=0;b<e;b++){c[b]=0,o[b]=0;let j=r.st[b];if(j===Et.OFF||j===Et.DEAD||j===Et.DOWN||r.y[b]>.6)continue;let it=Math.floor((r.x[b]+ku)/nl),J=Math.floor((r.z[b]+ku)/nl);for(let at=-1;at<=1;at++)for(let pt=-1;pt<=1;pt++){let zt=it+pt,gt=J+at;if(!(zt<0||gt<0||zt>=gr||gt>=gr))for(let Ut=a[zt+gt*gr];Ut>=0;Ut=l[Ut]){if(Ut===b)continue;let ie=r.x[b]-r.x[Ut],rt=r.z[b]-r.z[Ut],Rt=ie*ie+rt*rt;if(Rt>=L*L)continue;let Ct=r.token[b]?-1:r.band[b],Ot=r.token[Ut]?-1:r.band[Ut],Ht=Math.sqrt(Rt)||1e-4,yt=(L-Ht)*(Ct>Ot?.9:Ct<Ot?.1:.5);c[b]+=Rt>1e-8?ie/Ht*yt:b<Ut?yt:-yt,o[b]+=Rt>1e-8?rt/Ht*yt:0}}let vt=r.x[b]-T.x,Nt=r.z[b]-T.z,Z=Math.hypot(vt,Nt);if(Z<D&&!T.y){let at=(D-Z)/(Z||1e-4);c[b]+=vt*at,o[b]+=Nt*at}}let B=ee.fieldR;for(let b=0;b<e;b++){if(!c[b]&&!o[b])continue;r.x[b]+=Math.max(-.2,Math.min(.2,c[b]*.6)),r.z[b]+=Math.max(-.2,Math.min(.2,o[b]*.6));let j=Math.hypot(r.x[b],r.z[b]);j>B&&(r.x[b]*=B/j,r.z[b]*=B/j),r.z[b]>Pi-2&&(r.z[b]=Pi-2)}}function ct(T){if(!r.wavesOn||!r.autoWaves||++r.waveT<ee.waveEvery[r.engaged<ee.engaged/2?0:1]||r.engaged>=ee.engaged||f)return;let L=x(!1),D=r.cap-(t-L.length);if(D<ee.wave[0]||(L=L.slice(0,D),L.length<ee.wave[0]))return;r.waveT=0;let B=Math.min(L.length,Oe.int(ee.wave[0],ee.wave[1])),b=n.cam.yaw+Oe.range(-1.1,1.1),j=Oe.range(ee.waveDist[0],ee.waveDist[1]),it=T.x+Math.sin(b)*j,J=T.z+Math.cos(b)*j,vt=Math.hypot(it,J);if(vt>ee.fieldR-4&&(it*=(ee.fieldR-4)/vt,J*=(ee.fieldR-4)/vt),J=Math.min(J,Pi-4),_(L.slice(0,B),it,J,Math.atan2(T.x-it,T.z-J),3,jr),r.officerWaves)for(let Nt of x(!0)){h(Nt,it+Oe.range(-2,2),J+Oe.range(-2,2),!0);break}Pe("crowd:wave",{count:B,x:it,z:J})}return r}var l1=14,xd=40,AS=8;function h1(n,t){let e=n.move&&jt[n.move];if(e&&n.move[0]==="c"&&n.moveT<e.cancel-l1)return o1(n,t);t.pressed.attack?(n.buf="attack",n.bufT=0,n.bufW=0):t.pressed.charge&&(n.buf="charge",n.bufT=0,n.bufW=0),o1(n,t)}function o1(n,t){t.pressed.dodge&&(n.dodgeBuf=8,n.dodgeW=0,n.buf=null),t.pressed.jump&&(n.jumpBuf=8,n.jumpW=0)}function vd(n,t,e){let i=t.armor||t.air?0:Math.min(AS,e.frame-n.moveF0-n.moveT);return n.moveT+i>=t.cancel}var u1=(n,t,e)=>n.buf==="charge"&&t.branch?n.moveT>=t.branch:vd(n,t,e),f1=(n,t)=>n.moveT<t.tell||n.moveT>=t.dodgeCancel||!t.armor&&!t.air&&!t.hits.some(({f:e})=>n.moveT>=e[0]&&n.moveT<=e[1]);function RS(n,t){let e=n.move&&jt[n.move];if(n.state==="hurt")return;let i=n.state==="dodge",s=e?vd(n,e,t):!i||n.stateT>=Ne.dodgeAttackCancel;n.buf&&((e?u1(n,e,t):s)?++n.bufT>l1:++n.bufW>xd)&&(n.buf=null),n.dodgeBuf>0&&((e?f1(n,e):!i||n.stateT>=Ne.dodgeRedodge)?n.dodgeBuf--:++n.dodgeW>xd&&(n.dodgeBuf=0)),n.jumpBuf>0&&(s?n.jumpBuf--:++n.jumpW>xd&&(n.jumpBuf=0))}var d1=n=>(n=Math.min(1,Math.max(0,n)),1-(1-n)*(1-n)),p1=n=>Math.min(1,Math.max(0,n));function Ou(n,t,e,i){let s=jt[t];n.move=t,n.moveT=0,n.moveSeq++,n.moveF0=i.frame,n.moveAir=!n.grounded,bi(n,"attack"),n.buf=null,s.air?(n.vx*=.4,n.vz*=.4,n.vy=Math.max(n.vy,s.hover??2),n.airAttack=!0,n.airN=(n.airN||0)+1):(n.vx=0,n.vz=0);let[r,a,l]=pr(e,i.cam.yaw);if(l)n.yaw=Math.atan2(r,a);else{let c=IS(n,s,i.crowd);c>=0&&(n.yaw=Math.atan2(i.crowd.x[c]-n.x,i.crowd.z[c]-n.z))}Pe("attack:start",{move:t,x:n.x,y:n.y,z:n.z,yaw:n.yaw,charge:t[0]==="c"||t==="jc",tell:s.tell})}function CS(n,t,e){if(n.shape==="circle")return!0;if(n.shape==="line")return t>0&&Math.abs(e)<n.width/2;let i=Math.atan2(e,t)*180/Math.PI-(n.dir||0);return i=(i+540)%360-180,Math.abs(i)<n.ang/2-15}function IS(n,t,e){let i=t.hits[0],s=Math.sin(n.yaw),r=Math.cos(n.yaw),a=t.lunge.reduce((u,[f,h,d,p])=>u+d*(p==="lin"?p1:d1)((t.tell-f)/(h-f)),0),l=-1,c=-1,o=!1;for(let u=0;u<e.N;u++){let f=e.stT[u];if(e.st[u]!==Et.ATTACK||f+t.tell>=ee.strike)continue;let h=e.x[u]-n.x,d=e.z[u]-n.z;if(!(h*h+d*d>3.2*3.2)){if(i&&CS(i,h*s+d*r-a,h*r-d*s)){o=!0;continue}f>c&&(c=f,l=u)}}return l>=0||o?l:e.nearest(n.x,n.z,5.5,n.yaw,1.9)}function PS(n){n.move=null,bi(n,n.grounded?"idle":"jump")}function LS(n,t){let e=n.moveT;if(t.leap&&e===t.leap[0]&&(n.vy=t.leap[1],n.grounded=!1),n.grounded||(n.moveAir=!0),!(t.hang&&e===t.hang[0]&&n.vy>0&&!n.grounded)){if(t.hang&&e>=t.hang[0]&&e<t.hang[1]&&!n.grounded&&(n.vy=0),t.plunge&&e===t.plunge[0]&&!n.grounded&&(n.vy=t.plunge[1]),!t.landFrame){n.moveT++;return}n.moveAir&&n.grounded&&e<t.landFrame?n.moveT=t.landFrame:(n.moveT++,!n.grounded&&n.moveT>=t.landFrame&&(n.moveT=t.landFrame-1))}}function m1(n,t,e){RS(n,e),n.grounded&&!n.move&&(n.airN=0);let i=n.move&&jt[n.move];if(i){if(n.moveT<i.steer){let[s,r,a]=pr(t,e.cam.yaw);a&&ko(n,Math.atan2(s,r),.35)}for(let[s,r,a,l]of i.lunge)if(n.moveT>=s&&n.moveT<r){let c=l==="lin"?p1:d1,o=a*(c((n.moveT+1-s)/(r-s))-c((n.moveT-s)/(r-s)));n.x+=Math.sin(n.yaw)*o,n.z+=Math.cos(n.yaw)*o}if(LS(n,i),n.buf&&u1(n,i,e)&&(i.air?!n.grounded&&n.airN<Qf:n.grounded)){let s=n.buf==="attack"?i.next:i.charge;if(s)return Ou(n,s,t,e),!0}return n.dodgeBuf&&f1(n,i)&&n.grounded?(n.dodgeBuf=0,od(n,t,e.cam.yaw),!0):n.jumpBuf&&vd(n,i,e)&&n.grounded&&!i.air?(n.jumpBuf=0,n.move=null,cd(n),!1):i.air&&n.grounded&&!i.landFrame?(n.move=null,bi(n,"land"),!1):n.moveT>=i.frames?(PS(n),c1(n,t,e)):!0}return c1(n,t,e)}function c1(n,t,e){let i=n.state;if(i==="hurt")return!1;let s=n.grounded&&(i!=="dodge"||n.stateT>=Ne.dodgeRedodge);if(n.dodgeBuf&&s&&i!=="land")return n.dodgeBuf=0,od(n,t,e.cam.yaw),!1;let r=i!=="dodge"||n.stateT>=Ne.dodgeAttackCancel;if(n.buf&&r){if(n.grounded){let a=n.runT>=Ne.dashAfter&&(i==="run"||i==="land"&&pr(t,e.cam.yaw)[2]>0);return n.buf==="attack"?Ou(n,a?Uo.dash:Uo.attack,t,e):Ou(n,Uo.charge,t,e),!0}else if(n.airN<Qf&&(n.vy>=0||n.y>1))return Ou(n,n.buf==="attack"?Uo.air:Uo.airCharge,t,e),!0}return n.jumpBuf&&n.grounded&&r&&(n.jumpBuf=0,cd(n)),!1}var un={ansem:{id:"ansem",name:"Ansem",title:"The Black Bull",role:"Juggernaut",weapon:"Horn Glaive",blurb:"The black bull does not carry a gun. Wades into the horde and cleaves it apart with a glaive of gold horns.",passive:{name:"Thick Hide",text:"Takes 20% less damage."},stats:{power:5,health:5,speed:3,reach:4},hp:480,hurtK:.8,musouK:1,scale:1.14,emblem:"horns",disc:"art/ansem-disc.webp",ui:{main:"#e0452b",light:"#ffb27a",dark:"#3a140c",ink:"#1c0c08"},musou:{name:"Red Candle Rage",theme:"candle",rgb:[1,.3,.14]},portrait:"art/ansem-portrait.webp",lines:{start:["The horde wants a red day. I brought the horns.","Gates are sealed. Good. Nobody leaves early."],musou:["Green candles only.","That is what a bull run looks like."],officer:["Next.","Sit down.","Too slow."],wave:["More of them. More for me."]}},useless:{id:"useless",name:"Useless",title:"Loose Change",role:"Scrapper",weapon:"Brass Ladle",blurb:"A coin with boots and no useful qualifications. Swings a very large ladle anyway.",passive:{name:"Bad Investment",text:"The Surge gauge fills 25% faster."},stats:{power:4,health:4,speed:4,reach:5},hp:420,hurtK:1,musouK:1.25,scale:1.06,emblem:"coin",disc:"art/useless-disc.webp",ui:{main:"#f5c34e",light:"#fff0b0",dark:"#163532",ink:"#0c1c1a"},musou:{name:"Total Waste",theme:"coin",rgb:[1,.78,.22]},portrait:"art/useless-portrait.webp",lines:{start:["No useful qualifications. Plenty of ladle.","I was told to stand here. So I will stand here."],musou:["Total waste. Worth it.","Nobody asked for that. You are welcome."],officer:["Oops.","That one was on purpose.","Refund denied."],wave:["Oh no. More people."]}}},ms=["ansem","useless"],yd="ansem",g1=n=>({life:n.hp/600,surge:.6*n.musouK,attack:.8,defense:.6/n.hurtK}),Si=n=>un[n&&n.fighter]||un[yd];var zu={...Lu,...ld};function y1(n){let t={x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:0,hp:400,hpMax:400,musou:0,musouMax:100,state:"idle",stateT:0,move:null,moveT:0,moveSeq:0,grounded:!0,airAttack:!1,iframes:0,speed:0,runT:0,runPhase:0,combo:0,comboT:0,kos:0,buf:null,bufT:0,dodgeBuf:0,jumpBuf:0,musouBuf:0,dodgeX:0,dodgeZ:1,musouClip:null,musouT:0,airN:0,moveAir:!1,dodgeSeq:0,anim:{id:"idle",t:0,k:0,seq:-1,pid:null,pt:0,pk:0,blendF:1,blendN:1,from:new Float32Array(Wi),yaw:0,lean:0,fx:0,fz:0,px:0,pz:0,mf:null,mt:0}};return t.reset=({x:e=0,z:i=0,yaw:s=0}={})=>{t.hpMax=Si(n).hp,Object.assign(t,{x:e,y:0,z:i,vx:0,vy:0,vz:0,yaw:s,hp:t.hpMax,musou:0,state:"idle",stateT:0,move:null,moveT:0,moveSeq:0,grounded:!0,airAttack:!1,iframes:0,speed:0,runT:0,runPhase:0,combo:0,comboT:0,kos:0,buf:null,bufT:0,dodgeBuf:0,jumpBuf:0,musouBuf:0,musouClip:null,musouT:0,airN:0,moveAir:!1,dodgeSeq:0}),Object.assign(t.anim,{id:"idle",t:0,k:0,seq:-1,pid:null,pt:0,pk:0,blendF:1,blendN:1,yaw:s,lean:0,fx:e,fz:i,px:e,pz:i,mf:null,mt:0})},t.hurt=(e,i,s,r)=>{if(t.iframes>0||t.state==="musou"||t.state==="dodge")return!1;e*=Si(n).hurtK,t.hp=Math.max(0,t.hp-e),t.musou=Math.min(t.musouMax,t.musou+e*.15);let a=!!t.move&&(!r||jt[t.move].armor);if(Pe("hero:hurt",{dmg:e,hp:t.hp,x:t.x,y:t.y+1.2,z:t.z,armored:a}),a)return!0;let l=t.x-i,c=t.z-s,o=Math.hypot(l,c)||1;return t.move=null,bi(t,"hurt"),t.vx=l/o*3.5,t.vz=c/o*3.5,t.iframes=40,t.combo=0,t.comboT=0,!0},t.step=e=>{if(h1(t,e),e.pressed.musou&&(t.musouBuf=8),n.hitstop>0){n.hitstop--;return}t.stateT++,t.iframes>0&&t.iframes--,t.comboT>0&&--t.comboT===0&&(t.combo=0),t.musouBuf>0&&t.musouBuf--,t.state==="musou"?n.musou.stepHero(e):t.musouBuf&&n.musou.ready()&&t.grounded&&t.state!=="hurt"?(t.musouBuf=0,n.musou.start(e)):m1(t,e,n)||kg(t,e,n.cam.yaw),Og(t)&&t.state==="jump"&&bi(t,"land");let i=Math.hypot(t.x,t.z);i>yi&&(t.x*=yi/i,t.z*=yi/i),t.z>Pi-3&&(t.z=Pi-3),FS(t)},t}function DS(n){switch(n.state){case"attack":{let t=dr(jt[n.move],n.moveT);return[t[0],t[1],0,n.moveSeq*16+t[2]]}case"musou":return[n.musouClip,n.musouT,0,-2];case"run":return["run",n.runPhase,Math.min(1,n.speed/Ne.runSpeed),-1];case"dodge":return["dodge",n.stateT/Ne.dodgeFrames,0,-100-n.dodgeSeq];case"jump":return[n.airN?"airFall":"air",Math.min(1,Math.max(0,.5-n.vy/(2*Ne.jumpV))),0,-1];case"land":return["land",n.stateT/Ne.landFrames,0,-1];case"hurt":return["hurt",n.stateT/Ne.hurtFrames,0,-1];default:return["idle",n.stateT%150/150,0,-1]}}var x1=new Float32Array(Wi);function FS(n){let t=n.anim,[e,i,s,r]=DS(n);e!==t.id||r!==t.seq?(Bu(n,x1),t.from.set(x1),wg(t.from,t.yaw-n.yaw),t.fx=t.px,t.fz=t.pz,t.pid=t.id,t.pt=t.t,t.pk=t.k,t.blendN=Lu[e]?5:e==="dodge"?3:e==="run"?6:8,t.blendF=1,t.id=e,t.seq=r):t.blendF<t.blendN&&t.blendF++,t.t=i,t.k=s,t.yaw=n.yaw,t.px=n.x,t.pz=n.z,t.mf=n.state==="attack"&&rd[n.move]?n.move:null,t.mt=n.moveT}function NS(n,t,e,i,s=0){return n==="run"?Hg(t,e,i,s):n==="dodge"?Gg(t,i):No(zu[n]||zu.idle,t,i)}function Bu(n,t){let e=n.anim;if(NS(e.id,e.t,e.k,t,e.lean),e.mf&&rd[e.mf](e.mt/jt[e.mf].frames,t),e.blendF<e.blendN){let i=e.blendF/e.blendN,s=n.x-e.fx,r=n.z-e.fz;s*s+r*r>9&&(s=r=0);let a=Math.cos(n.yaw),l=Math.sin(n.yaw);Eg(e.from,t,i*i*(3-2*i),t,s*a-r*l,s*l+r*a)}return t}var v1={ansem:[16753258,16742972,16773344],useless:[16769162,16106318,16776168]};function _1(n,t,e="ansem"){let i=Ag();n.add(i.root);let s=t1(i,e),r=s1(n,i,s.material,s.chains),a=qg(n,s,v1[e]||v1.ansem),l=new Float32Array(Wi),c=new q,o=!0;return{rig:i,model:s,pose:l,secondary:r,id:e,setActive(u){o=u,i.root.visible=u;for(let f of r.meshes)f.visible=u;u?r.reset():a.hide()},get active(){return o},update(u){o&&(Bu(t,l),i.root.scale.set(1,1,1),i.apply(l,c.set(t.x,t.y,t.z),t.yaw),i.root.scale.setScalar(Ls),i.root.updateMatrixWorld(!0),Wg(i,t.anim),a.update(t,i,u),r.update(u))},reset(){r.reset()},spearTip(u){return i.joints.weapon.localToWorld(u.set(0,0,An.spearTip))}}}var we={enemyR:.4,yMaxDefault:2.4,gravity:24,groundFriction:.86,airDrag:.985,floatV:1.8,floatK:.5,bounceMin:3,bounceK:.28,bounceMax:2.8,hurtFrames:16,downFrames:108,getupFrames:24,comboWindow:150,tintFrames:12,stopPer:5,stopMax:4,stopHeavy:[6,8],victimStopMax:3,koLift:7.5,koForce:9.5,koFlip2:.4,otgLift:3.4,lensCut:.8,pileAhead:2.2,pileGather:.8,pileMaxV:3.5,launchMaxV:2.5,heavyBlow:[.65,1.2],juggleY:2.4,musouPerHit:.3,musouPerKO:.55,flinchKick:1.6,flinchDamp:.85,knockLift:1.7,knockK:.7},wi=1/60,zo=Math.PI/2,US=n=>-zo+Math.floor((n+zo+1e-6)/Math.PI)*Math.PI;function M1(n){let t={},e={count:0,x:0,y:0,z:0,move:"",hitstop:0,heavy:!1,kos:0},i={i:0,x:0,y:0,z:0,bounce:!1,v:0},s=new Uint8Array(n.crowd.N),r=new Float64Array(n.crowd.N),a=new Int32Array(n.crowd.N),l=n.crowd.hitHeavy=new Uint8Array(n.crowd.N),c=-1,o=null,u=null;t.reset=()=>{c=-1,o=null,u=null};function f(m,v,y,w,M){let S=n.crowd;if(S.y[m]>(v.yMax??we.yMaxDefault))return!1;let P=S.x[m]-y,C=S.z[m]-w,z=we.enemyR,U=Math.sin(M),V=Math.cos(M),Y=P*U+C*V,ct=P*V-C*U;if(v.shape==="line"){let B=v.off||0;return Y>=B-z&&Y<=B+v.len+z&&Math.abs(ct)<=v.width/2+z}let T=P*P+C*C,L=v.range+z;if(T>L*L)return!1;if(v.shape==="circle"||T<1)return!0;let D=Math.atan2(ct,Y)-(v.dir||0)*Math.PI/180;return D=Math.atan2(Math.sin(D),Math.cos(D)),Math.abs(D)<=v.ang*Math.PI/360}function h(m,v,y,w){let M=m.hitstop||0;if(!M||!jt[y])return M;if(m.sweep){if(w===u)return 0;u=w}return m.heavy&&w!==o?(o=w,Math.max(we.stopHeavy[0],Math.min(we.stopHeavy[1],M))):Math.min(we.stopMax,1+Math.floor((v-1)/we.stopPer))}t.strike=(m,v,y,w,M,S,P)=>{let C=n.crowd,z=0,U=0,V=0,Y=0,ct=0;for(let T=0;T<C.N;T++){let L=C.st[T];L===Et.OFF||L===Et.DEAD||!S&&C.lastHit[T]===M||f(T,m,v,y,w)&&(C.lastHit[T]=M,x(T,m,v,y,w,P)&&U++,a[z++]=T,V+=C.x[T],Y+=C.y[T],ct+=C.z[T])}if(z){let T=h(m,z,P,M),L=jt[P]?Math.min(Math.max(T,m.sweep?2:0),we.victimStopMax):T;for(let D=0;D<z;D++)C.hs[a[D]]=L;n.hitstop=Math.max(n.hitstop,T),Object.assign(e,{count:z,x:V/z,y:Y/z+1.1,z:ct/z,move:P,hitstop:T,heavy:!!m.heavy,kos:U}),Pe("hits",e)}return z};function d(m,v,y){let w=0;for(;w<300&&(v-=(y&&Math.abs(v)<we.floatV?we.gravity*we.floatK:we.gravity)*wi,m+=v*wi,w++,!(m<=0&&v<0)););return w}function p(m,v,y,w,M,S,P,C,z=1){let U=n.crowd;U.st[m]=Et.AIR,U.stT[m]=0,U.bounce[m]=0,s[m]=S?1:0,U.y[m]=Math.max(U.y[m],.02),U.vy[m]=v,U.vx[m]=w*y,U.vz[m]=M*y;let V=d(U.y[m],v,S);r[m]=US(U.rx[m]-P),U.rxV[m]=(r[m]-U.rx[m])/(Math.max(1,V*z)*wi),U.spinV[m]=C}function x(m,v,y,w,M,S){let P=n.crowd,C=n.hero,z=P.type[m]===1,U=P.x[m]-y,V=P.z[m]-w,Y=Math.hypot(U,V)||1;U/=Y,V/=Y,v.shape==="line"&&(U=U*.35+Math.sin(M)*.65,V=V*.35+Math.cos(M)*.65);let ct=Math.hypot(U,V)||1;U/=ct,V/=ct,P.invuln[m]||(P.hp[m]-=v.dmg),P.flash[m]=P.flash[m]>we.tintFrames/2?we.tintFrames-2:we.tintFrames+(v.heavy?3:0),l[m]=v.heavy?1:0,n.crowd.releaseToken(m);let T=v.kb,L=v.force||0,D=v.lift||0,B=P.hp[m]<=0&&!P.kod[m],b=P.st[m],j=b===Et.AIR,it=b===Et.DOWN||b===Et.GETUP;z&&!v.heavy&&!B&&((T==="launch"||T==="blow"||T==="spin")&&(T="push"),L*=.4);let J=!1;B&&(P.kod[m]=1,T==="flinch"||T==="push"?(T="blow",J=!0,D=Math.max(D,we.koLift),L=Math.max(L*1.6,we.koForce)):T==="spin"&&(D=Math.max(D,we.koLift*.7),L*=1.4));let vt=le(m,71)<.5?-1:1,Nt=le(m,13),Z=U,at=V,pt=-Math.sin(n.cam.yaw),zt=-Math.cos(n.cam.yaw),gt=U*pt+V*zt;if(jt[S]&&gt>.3){let Ut=U*zt-V*pt,ie=Ut>0?1:Ut<0?-1:vt,rt=(gt-.3)/.7*we.lensCut;Z=U*(1-rt)+zt*ie*rt,at=V*(1-rt)-pt*ie*rt;let Rt=Math.hypot(Z,at)||1;Z/=Rt,at/=Rt}if(j){let Ut=Math.min(1,Math.max(.25,1-(P.y[m]-we.juggleY)/1.2)),ie=Math.max(P.vy[m],(D?D*.8:4.2)*Ut);p(m,ie,Math.max(1.2,L*.5),U,V,s[m]||T==="launch",.6,P.spinV[m]*.6+vt*1.5)}else if(it&&(T==="flinch"||T==="push"))p(m,we.otgLift,L*.4,U,V,!1,0,vt*2);else if(T==="flinch")P.st[m]=Et.HURT,P.stT[m]=0,P.hurtDur[m]=we.hurtFrames,P.yaw[m]=Math.atan2(-U,-V),P.vx[m]=U*L*we.flinchKick,P.vz[m]=V*L*we.flinchKick;else if(T==="push"&&!z)P.yaw[m]=Math.atan2(-U,-V),p(m,we.knockLift,L*we.knockK,U,V,!1,1.2,0);else if(T==="push")P.yaw[m]=Math.atan2(-U,-V),P.st[m]=Et.KNOCK,P.stT[m]=0,P.vx[m]=U*L,P.vz[m]=V*L;else if(T==="launch"){let Ut=(D||9)*(.94+.12*Nt),ie=le(m,29)<.25?1.2+Math.PI:1.2,rt=.4+.35*le(m,5);if(v.shape!=="circle"){let Rt=d(P.y[m],Ut,!0)*wi,Ct=y+Math.sin(M)*we.pileAhead-P.x[m],Ot=w+Math.cos(M)*we.pileAhead-P.z[m],Ht=Math.hypot(Ct,Ot)||1,yt=Math.min(we.pileMaxV,Ht*we.pileGather/Rt);p(m,Ut,yt,Ct/Ht,Ot/Ht,!0,ie,vt*(.8+1.6*Nt),rt)}else p(m,Ut,Math.min(L,we.launchMaxV),U,V,!0,ie,vt*(.8+1.6*Nt),rt)}else if(T==="spin")p(m,D||3,L,Z,at,!1,1.2,vt*(15+5*Nt));else if(J&&!v.heavy){let Ut=le(m,37)<we.koFlip2?2*Math.PI:Math.PI;p(m,D*(.94+.12*Nt),L*(.92+.16*le(m,41)),Z,at,!1,1.2+Ut,vt*(3+3*Nt))}else{let Ut=v.heavy?Nt<.35?2*Math.PI:Math.PI:0,ie=v.heavy&&jt[S]?we.heavyBlow:[1,1];p(m,(D||4)*ie[1],L*ie[0],Z,at,!1,1.2+Ut,vt*(v.heavy?4+4*Nt:2.5))}return C.combo++,C.comboT=we.comboWindow,C.state!=="musou"&&(C.musou=Math.min(C.musouMax,C.musou+(we.musouPerHit+(B?we.musouPerKO:0))*Si(n).musouK)),Pe("hit",{i:m,x:P.x[m],y:P.y[m]+1.1,z:P.z[m],dx:U,dz:V,dmg:v.dmg,kb:T,move:S,combo:C.combo,killed:B,officer:z,heavy:!!v.heavy}),B&&(C.kos++,Pe("ko",{i:m,x:P.x[m],y:P.y[m]+.9,z:P.z[m],dx:U,dz:V,type:P.type[m],total:C.kos,officer:z})),B}function _(){let m=n.hero;if(m.state!=="attack"||n.hitstop>0)return;let v=m.moveSeq*1e3+m.moveT;if(v===c)return;c=v;let y=jt[m.move];for(let w=0;w<y.hits.length;w++){let M=y.hits[w],S=m.moveT;if(S<M.f[0]||S>M.f[1])continue;S===M.f[0]&&Pe("attack:swing",{move:m.move,win:w,x:m.x,y:m.y+1.2,z:m.z,yaw:m.yaw,heavy:!!M.heavy});let P=S-M.f[0];if(M.sweep){let C=M.sweepN||M.f[1]-M.f[0]+1,z=M.shape==="circle"?360:M.ang;if(P>=C)continue;let U=z*(P+1)/C,V=(M.dir||0)-M.sweep*(z-U)/2;t.strike({...M,shape:"arc",ang:U,dir:V},m.x,m.z,m.yaw,m.moveSeq*16+w,!1,m.move);continue}M.every&&P%M.every!==0||t.strike(M,m.x,m.z,m.yaw,m.moveSeq*16+w,!!M.every,m.move)}}function g(m,v,y){let w=n.crowd;Object.assign(i,{i:m,x:w.x[m],y:0,z:w.z[m],bounce:v,v:y}),Pe("enemy:land",i)}function A(){let m=n.crowd;if(!(n.freeze>0))for(let v=0;v<m.N;v++){let y=m.st[v];if(!(y<Et.HURT||y>Et.DEAD||m.hs[v]>0)){if(y===Et.HURT)m.x[v]+=m.vx[v]*wi,m.z[v]+=m.vz[v]*wi,m.vx[v]*=we.flinchDamp,m.vz[v]*=we.flinchDamp,m.stT[v]>=m.hurtDur[v]&&(m.st[v]=Et.GUARD,m.stT[v]=0);else if(y===Et.KNOCK)m.x[v]+=m.vx[v]*wi,m.z[v]+=m.vz[v]*wi,m.vx[v]*=we.groundFriction,m.vz[v]*=we.groundFriction,m.stT[v]>=22&&(m.st[v]=Et.GUARD,m.stT[v]=0);else if(y===Et.AIR){let w=s[v]&&!m.bounce[v]&&Math.abs(m.vy[v])<we.floatV;if(m.vy[v]-=(w?we.gravity*we.floatK:we.gravity)*wi,m.x[v]+=m.vx[v]*wi,m.y[v]+=m.vy[v]*wi,m.z[v]+=m.vz[v]*wi,m.yaw[v]+=m.spinV[v]*wi,m.vx[v]*=we.airDrag,m.vz[v]*=we.airDrag,m.bounce[v]?E(v,.3):m.rx[v]=Math.max(r[v],m.rx[v]+m.rxV[v]*wi),m.y[v]<=0&&m.vy[v]<0){let M=-m.vy[v];m.y[v]=0,m.rx[v]=Math.atan2(Math.sin(m.rx[v]),Math.cos(m.rx[v])),M>we.bounceMin&&!m.bounce[v]?(m.bounce[v]=1,m.vy[v]=Math.min(we.bounceMax,M*we.bounceK),m.vx[v]*=.5,m.vz[v]*=.5,m.spinV[v]*=.3,g(v,!0,M)):(m.st[v]=m.hp[v]<=0?Et.DEAD:Et.DOWN,m.stT[v]=0,m.rxV[v]=0,m.spinV[v]=0,m.vy[v]=0,m.vx[v]*=.4,m.vz[v]*=.4,g(v,!1,M))}}else if(y===Et.DOWN||y===Et.DEAD)m.x[v]+=m.vx[v]*wi,m.z[v]+=m.vz[v]*wi,m.vx[v]*=.8,m.vz[v]*=.8,E(v,.35),y===Et.DOWN&&m.stT[v]>=we.downFrames&&(m.st[v]=Et.GETUP,m.stT[v]=0);else if(y===Et.GETUP){let w=Math.min(1,m.stT[v]/we.getupFrames);m.rx[v]=(m.rx[v]<0?-zo:zo)*(1-w*w*(3-2*w)),m.stT[v]>=we.getupFrames&&(m.st[v]=Et.GUARD,m.stT[v]=0,m.rx[v]=0)}(m.st[v]===Et.HURT||m.st[v]===Et.KNOCK)&&m.hp[v]<=0&&p(v,1.5,0,0,0,!1,1.2,0)}}}function E(m,v){let y=n.crowd;y.rx[m]+=((y.rx[m]<0?-zo:zo)-y.rx[m])*v}return t.enemyStrike=m=>{let v=n.crowd,y=n.hero,w=v.type[m]===1;Pe("enemy:attack",{i:m,x:v.x[m],y:1.1,z:v.z[m],officer:w});let M=y.x-v.x[m],S=y.z-v.z[m];if(Math.hypot(M,S)>(w?2.3:1.9)||y.y>1.2)return;let C=Math.atan2(M,S)-v.yaw[m];C=Math.atan2(Math.sin(C),Math.cos(C)),!(Math.abs(C)>1.1)&&y.hurt((w?22:10)*(v.dmgK[m]||1),v.x[m],v.z[m],w)},t.step=()=>{_(),A()},t}function b1(n){let t=n.onBeforeCompile,e=n.customProgramCacheKey()+"|hitfx3";n.customProgramCacheKey=()=>e,n.onBeforeCompile=function(i,s){t.call(this,i,s),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aHit;
varying vec3 vHit;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vHit = aHit;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vHit;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float hitA = max(vHit.r, max(vHit.g, vHit.b));
        float hitRim = 1.0 - abs(dot(normal, normalize(vViewPosition)));
        if (hitA > 1.01) {                                            // contact frame: white-hot edges, lifted body
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), 0.15);
          totalEmissiveRadiance += (vHit - 1.0) * (0.1 + 1.3 * hitRim * hitRim);
        } else if (hitA > 0.0) {
          vec3 hitC = vHit / hitA;
          float hitL = dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11));
          // lit wash: albedo toward the tint, brighter where the albedo is brighter (skin, plates), so shading stays
          diffuseColor.rgb = mix(diffuseColor.rgb, hitC * (0.33 + 1.3 * hitL), 0.22 * hitA);
          // red tints (killing blow, KO ember) also glow flat, so thrown bodies fly as embers over the crowd
          float hitFlat = 0.04 + 0.2 * clamp((0.45 - hitC.g) * 4.0, 0.0, 1.0);
          totalEmissiveRadiance += hitC * hitA * (hitFlat + 0.9 * hitRim * hitRim * hitRim);
        }`)}}function S1(n){let t=new gi(new Float32Array(Math.max(1,n)*3),3);return t.setUsage(Ci),t}var _d=[1.55,1.53,1.5],kS=[1,.6,.12],OS=[1,.4,.07],zS=[1,.25,.12],BS=.45;function w1(n,t,e){let i=n.flash[t],s=n.kod[t]&&n.st[t]===Et.AIR?BS:0;if(i<=0&&!s)return e[0]=e[1]=e[2]=0,e;let r=n.hitHeavy?n.hitHeavy[t]:0,a=we.tintFrames-1+(r?3:0);if(i>=a)return e[0]=_d[0],e[1]=_d[1],e[2]=_d[2],e;let l=Math.min(1,i/(a-1)),c=Math.max(s,l*l),o=n.kod[t]?zS:r?OS:kS;return e[0]=o[0]*c,e[1]=o[1]*c,e[2]=o[2]*c,e}var HS=[{TO:[-.78,0,.06],HE:[-.75,0,0],AR:[-2.4,.2,-.95],AL:[-2.3,-.2,1],TR:[.32,0,-.14],TL:[-.6,0,.2],SR:.2,SL:1,WR:[1.1,0,0],WL:[.5,0,0]},{TO:[-.62,.55,.2],HE:[-.65,-.35,.1],AR:[-2.85,0,-.35],AL:[-.95,0,1.35],TR:[.4,0,-.18],TL:[-.35,0,.3],SR:.35,SL:.7,WR:[1.3,0,0],WL:[.3,0,0]},{TO:[.72,0,.1],HE:[.2,.25,0],AR:[-1.35,0,-.75],AL:[-1.25,0,.8],TR:[-.55,0,-.2],TL:[-.2,0,.18],SR:1.1,SL:.8,WR:[.9,0,0],WL:[.4,0,0]}];function E1(n,t,e,i,s,r,a){let l=s===Et.KNOCK;if(r>=(l?16:12))return 0;let o=le(i,97),u=HS[o<.5?0:o<.82?1:2],f=.88+.24*le(i,98),h=a,d=Math.min(r,8)*.03,p=(x,_,g=0)=>{n[x]=(_[0]-g)*f,n[x+1]=_[1]*f*h,n[x+2]=_[2]*f*h};if(p(t.TO,u.TO,d),p(t.HE,u.HE),p(h>0?t.AR:t.AL,u.AR,d),p(h>0?t.AL:t.AR,u.AL,d),p(h>0?t.TR:t.TL,u.TR),p(h>0?t.TL:t.TR,u.TL),n[h>0?t.SR:t.SL]=u.SR,n[h>0?t.SL:t.SR]=u.SL,n[t.WR]=u.WR[0],n[t.WL]=u.WL[0],l){let x=Math.sin(r*.5)*.35;n[t.TL]+=x,n[t.TR]-=x}return r<2?55+45*le(i,99):16}var Rn={uA:{value:new xe},uB:{value:new xe},uOn:{value:0},uCutA:{value:new xe},uCutB:{value:new xe},uCutR:{value:0},uCutE:{value:.01},uAsp:{value:16/9}},VS="2.2",GS=(n,t)=>`#include <project_vertex>
  vCutP = gl_Position.xyw;
  {
  #ifdef USE_INSTANCING
    vec2 fo = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
  #else
    vec2 fo = (modelMatrix * vec4(${t?"transformed":"vec3(0.0)"}, 1.0)).xz;
  #endif
    vec2 ab = uFadeB - uFadeA; float L = max(length(ab), 1e-3);
    float front = L - dot(fo - uFadeA, ab / L);                                  // metres in front of the hero
    vCamFade = uFadeOn * smoothstep(${n.toFixed(2)}, ${(n+.6).toFixed(2)}, front) * step(0.0, L - front);
    // lens clear: a soldier/prop standing close to the lens drops out (DW: the near crowd never walls off the frame).
    // A clean per-instance cut, no dither band (a ring sits in any band for good and read as a mosaic under the DoF).
    // The radius scales with the rig, so pull-outs and Musou shots follow.
    vLensFade = uFadeOn * step(length(fo - uFadeA), ${VS});
  }`,WS=`
  if (vLensFade > 0.5) discard;
  if (vCamFade > 0.0) {
    vec2 cp = (vCutP.xy / vCutP.z - uCutA) * vec2(uAsp, 1.0), cb = (uCutB - uCutA) * vec2(uAsp, 1.0);
    float cd = length(cp - cb * clamp(dot(cp, cb) / max(dot(cb, cb), 1e-8), 0.0, 1.0));
    float cr = uCutR * vCamFade;                                               // the window opens as he steps in front
    float cut = 1.0 - smoothstep(cr - uCutE, cr, cd);
    vec2 bq = floor(gl_FragCoord.xy), bh = floor(bq * 0.5);
    float b = fract(dot(bh, vec2(0.5, bh.y * 0.75))) * 0.25 + fract(dot(bq, vec2(0.5, bq.y * 0.75))) + 0.03;   // 4x4 Bayer
    if (cut > b) discard;
  }`;function Bo(n,t=.5,e=!1){let i=n.onBeforeCompile,s=n.customProgramCacheKey()+"|camCut"+t+(e?"v":"");return n.onBeforeCompile=function(r,a){i.call(this,r,a),Object.assign(r.uniforms,{uFadeA:Rn.uA,uFadeB:Rn.uB,uFadeOn:Rn.uOn,uCutA:Rn.uCutA,uCutB:Rn.uCutB,uCutR:Rn.uCutR,uCutE:Rn.uCutE,uAsp:Rn.uAsp}),r.vertexShader=r.vertexShader.replace("void main() {",`uniform vec2 uFadeA, uFadeB; uniform float uFadeOn; varying float vCamFade, vLensFade; varying vec3 vCutP;
void main() {`).replace("#include <project_vertex>",GS(t,e)),r.fragmentShader=r.fragmentShader.replace("void main() {",`uniform vec2 uCutA, uCutB; uniform float uCutR, uCutE, uAsp; varying float vCamFade, vLensFade; varying vec3 vCutP;
void main() {`+WS)},n.customProgramCacheKey=()=>s,n.needsUpdate=!0,n}var Md={hide:1/0,show:1/0},bd=[];function T1(n,t,e,i=0){let s=Rn.uA.value,r=Rn.uB.value,a=r.x-s.x,l=r.y-s.y,c=Math.hypot(a,l);if(!Rn.uOn.value||c<.001||Md.hide===1/0)return bd[n]=!1;let o=c-((t-s.x)*a+(e-s.y)*l)/c;return bd[n]=o>(bd[n]?Md.show:Md.hide)+i}function A1(n,t=2){let e=n.onBeforeCompile,i=n.customProgramCacheKey()+"|lens"+t;return n.onBeforeCompile=function(s,r){e.call(this,s,r),s.vertexShader=s.vertexShader.replace("void main() {",`varying float vLensD;
void main() {`).replace("#include <project_vertex>",`#include <project_vertex>
  vLensD = -mvPosition.z;`),s.fragmentShader=s.fragmentShader.replace("void main() {",`varying float vLensD;
void main() {
  if (vLensD < ${t.toFixed(2)}) discard;`)},n.customProgramCacheKey=()=>i,n.needsUpdate=!0,n}var hi=.042,R1=(n,t,e,i)=>({a:n,b:t,c:e,paint:i}),ri=n=>n<<16|n<<8|n,Tt=(n,t,e,i,s,r,a,l)=>({a:[n*hi,t*hi,e*hi],b:[i*hi,s*hi,r*hi],paint:l,c:typeof a=="function"?(c,o,u)=>a(Math.floor(c/hi),Math.floor(o/hi),Math.floor(u/hi)):a}),ki=(n,t,e,i=0)=>le(n+64,t+64+i*131,e+64),es=(n,t,e,i,s=.18,r=.9)=>(a,l,c)=>{let o=ki(a,l,c,n);return o<s?e:o>r?i:t},k1={skin:7505786,skinD:5465690,skinL:8821387,rot:5132864,eye:16769610,mouth:2888978,tooth:12103046,claw:3484192,belt:4862754,rope:8810572,buckle:9202234,burlap:8022088,burlapD:5786163,strap:4074012,wrap:10392184,wrapD:7234640,rag:ri(138),ragD:ri(106),ragL:ri(162),pants:ri(92),pantsD:ri(72),pantsL:ri(110),hood:ri(128),hoodD:ri(94),hoodL:ri(152),hair:ri(80),rust:6636596,rustD:4599850,rustL:8016440,visor:16757802,plume:ri(128),plumeD:ri(96)},Fi={...k1,plate:ri(132),plateD:ri(94),plateL:ri(168),plateE:ri(112),plateH:ri(192),cloth:2893604,leather:4074527,leatherD:2760213,brass:12094012,brassD:9069608,iron:4012610,ironL:6249316,ironD:2499626,soot:1446420,hat:2498846,hatBand:5905430,lens:16765498,violet:11816191,ember:16756784,void:1708560,hazard:13146652,sack:7232062,sackD:5127980,coin:13935666,coinD:10648098,gemR:11016220,gemG:1474618},li={waist:.04,neck:.5,shX:.235,shY:.43,hipX:.095,hipY:-.02,knee:.42,hand:.5},C1=6176036,I1=3810328,Sd=5918022,Hu=4076592,Vu=8014382,Ho=5583651,Qr=10000015,il=13025974,sl=8810572,qS=8285260,P1=10496540,rl=4867660;function O1(n){let t=es(1,n.skin,n.skinD,n.skinL,.14,.92);return[Tt(-3,3,2,3,7,3,t),Tt(-3,6,2,-2,7,3,-1),Tt(2,6,2,3,7,3,-1),Tt(-2,0,-2,2,3,3,t),Tt(-2,0,2,2,1,3,n.skinD,!0),Tt(-2,1,2,2,2,3,e=>e===0?n.tooth:n.mouth,!0),Tt(-2,2,2,2,3,3,e=>e===-2||e===1?n.tooth:n.mouth,!0),Tt(-1,3,2,1,4,3,n.skinD,!0),Tt(-3,4,2,3,5,3,e=>e===-1||e===0?n.skinD:n.eye,!0),Tt(-3,5,2,3,6,3,e=>e===-1||e===0?n.skin:n.skinD,!0)]}function XS(n){let t=es(2,n.skin,n.skinD,n.skinL,.12,.9);return[Tt(-3,3,-3,3,7,2,(e,i,s)=>ki(e,i,s,7)<.06?n.rot:t(e,i,s)),Tt(-3,6,-3,-2,7,2,-1),Tt(2,6,-3,3,7,2,-1),Tt(-2,6,-3,2,7,-2,-1),Tt(-4,4,-1,-3,6,1,n.skinD),Tt(3,4,-1,4,6,1,n.skinD),Tt(-2,6,-2,2,7,1,(e,i,s)=>(e+s+8)%3===0?n.hair:null,!0),Tt(-3,3,-3,3,6,-2,(e,i)=>(e+12+2*i)%4===0?n.hair:null,!0),Tt(-3,5,-2,-2,6,1,n.hair,!0),Tt(2,5,-2,3,6,1,n.hair,!0)]}function $S(n){let t=(e,i,s)=>s>=2||i>=9?n.hoodL:i<=2||ki(e,i,s,3)<.16?n.hoodD:n.hood;return[Tt(-3,3,-3,3,8,2,t),Tt(-3,6,2,-2,7,3,t),Tt(2,6,2,3,7,3,t),Tt(-3,7,2,3,8,4,t),Tt(-3,1,-4,3,7,-3,t),Tt(-2,8,-3,2,9,1,t),Tt(-1,9,-4,1,10,0,t),Tt(-1,10,-5,1,11,-2,t)]}function YS(n){let t=es(16,n.rust,n.rustD,n.rustL,.18,.82),e=(i,s,r)=>ki(i,s,r,17)<.3?n.plumeD:n.plume;return[Tt(-4,2,-4,4,9,4,t),Tt(-4,8,-4,-3,9,4,-1),Tt(3,8,-4,4,9,4,-1),Tt(-3,8,-4,3,9,-3,-1),Tt(-3,8,3,3,9,4,-1),Tt(-4,2,-4,4,3,4,n.rustD,!0),Tt(-3,4,3,3,5,4,n.visor,!0),Tt(-1,5,3,1,9,4,n.rustD,!0),Tt(-4,7,-4,4,8,4,(i,s,r)=>i+r&1?null:n.rustD,!0),Tt(-1,9,-4,1,11,3,e),Tt(-1,6,-5,1,10,-4,e)]}function KS(n){let t=(s,r,a)=>{let l=ki(s,r,a,4);return l<.2||r%4===0?n.ragD:l>.9?n.ragL:n.rag},e=es(5,n.skin,n.skinD,n.skinL,.2,.92),i=[];for(let s=0;s<10;s++){let r=3-Math.round(s*7/9);i.push(Tt(r,s,1,r+1,s+1,4,n.strap,!0),Tt(r,s,-5,r+1,s+1,-1,n.strap,!0))}return[Tt(-3,-1,-2,3,4,3,t),Tt(-4,4,-3,4,10,3,t),Tt(-5,8,-2,5,11,2,t),Tt(-3,7,-4,3,11,-3,t),Tt(-1,10,-1,1,13,1,e),Tt(-3,-1,-2,3,0,3,(s,r,a)=>ki(s,0,a,8)<.5?n.ragD:null,!0),Tt(-2,9,2,2,10,3,e,!0),Tt(1,5,2,3,6,3,e,!0),Tt(2,6,2,3,7,3,e,!0),Tt(0,4,2,1,5,3,n.skinD,!0),Tt(-3,1,2,-1,3,3,(s,r,a)=>r===2?n.skinD:e(s,r,a),!0),Tt(-2,5,-3,0,7,-2,e,!0),Tt(1,1,-2,3,2,-1,e,!0),...i]}function ZS(n){let t=es(10,n.pants,n.pantsD,n.pantsL,.2,.95);return[Tt(-4,-3,-2,4,1,2,t),Tt(-4,0,-3,4,2,4,(e,i,s)=>i===1&&(e+s+30)%3===0?n.rope:n.belt),Tt(-1,0,4,1,2,5,n.buckle),Tt(1,-5,4,4,1,5,(e,i)=>i===-5&&e!==2?-1:i<-3?n.burlapD:n.burlap),Tt(-3,-2,-4,-1,1,-3,n.strap)]}function jS(n){let t=es(6,n.rag,n.ragD,n.ragL,.22,.9),e=es(7,n.skin,n.skinD,n.skinL,.18,.9);return[Tt(-1,-5,-1,1,1,1,t),Tt(-1,-5,-1,1,-4,1,(i,s,r)=>ki(i,s,r,9)<.5?n.ragD:null,!0),Tt(-1,-11,-1,1,-5,1,e),Tt(-1,-10,-1,1,-8,1,(i,s,r)=>i+s+r&1?n.wrap:n.wrapD,!0),Tt(-1,-13,-1,1,-11,1,n.skinD),Tt(-1,-13,0,1,-12,1,n.claw,!0)]}function JS(n){let t=es(11,n.pants,n.pantsD,n.pantsL,.2,.95),e=es(12,n.skin,n.skinD,n.skinL,.2,.9);return[Tt(-2,-10,-2,2,1,2,(i,s,r)=>s===-4?n.pantsD:t(i,s,r)),Tt(-1,-9,1,1,-7,2,e,!0),Tt(-2,-6,1,0,-4,2,n.pantsD,!0)]}function QS(n){let t=es(13,n.pants,n.pantsD,n.pantsL,.2,.95),e=es(14,n.skin,n.skinD,n.skinL,.2,.9);return[Tt(-2,-5,-2,2,1,2,t),Tt(-2,-5,-2,2,-4,2,(i,s,r)=>ki(i,s,r,15)<.45?n.pantsD:null,!0),Tt(-1,-9,-1,1,-5,1,e),Tt(-2,-10,-1,2,-8,2,e),Tt(-2,-10,1,2,-9,2,i=>i===-2||i===0?n.claw:n.skinD,!0),Tt(-2,-10,-1,2,-9,1,n.skinD,!0)]}function tw(n){let t=h=>es(h,n.plate,n.plateD,n.plateL,.1,.93),e=es(20,n.skin,n.skinD,n.skinL,.14,.92),i=(h,d,p)=>d===6||d===9?(h+p+20)%2?n.plateD:n.plateE:(h===-4||h===3)&&(d===4||d===8||d===10)?n.brass:t(21)(h,d,p),s=(h,d,p)=>d===11?n.plateL:d===8?n.plateD:d===9?n.plateE:t(22)(h,d,p),r=(h,d,p)=>d%3===-2?n.plateD:d===-1?n.plateE:t(23)(h,d,p),a={};a.torso=[Tt(-4,-1,-3,4,3,3,(h,d,p)=>d===1?n.plateD:t(24)(h,d,p)),Tt(-5,3,-3,5,11,4,i),Tt(-3,11,-2,3,12,3,n.plateL),Tt(-1,11,-1,1,13,1,e),Tt(-7,8,-3,-4,12,3,s),Tt(4,8,-3,7,12,3,s),Tt(-6,10,2,-5,11,3,n.brass,!0),Tt(5,10,2,6,11,3,n.brass,!0)],a.hips=[Tt(-4,-3,-3,4,1,3,n.cloth),Tt(-5,0,-4,5,2,4,(h,d,p)=>(h+p+40)%4===0&&d===1?n.brassD:n.leather),Tt(-1,0,4,1,2,5,n.brass),Tt(-4,-6,4,4,0,5,r),Tt(-4,-6,-5,4,0,-4,r)],a.arm=[Tt(-2,-6,-2,2,1,2,(h,d,p)=>d===-2?n.plateD:t(25)(h,d,p)),Tt(-2,-11,-2,2,-6,2,(h,d,p)=>d===-6?n.plateE:t(26)(h,d,p)),Tt(-2,-10,-2,2,-7,2,(h,d,p)=>(d-h-p+30)%3===0?n.iron:null,!0),Tt(-2,-14,-2,2,-11,2,(h,d,p)=>p===1&&d===-12?n.plateL:n.plateD)],a.thigh=[Tt(-2,-10,-2,2,1,2,n.cloth),Tt(-2,-8,2,2,0,3,(h,d,p)=>d===-4?n.plateD:t(27)(h,d,p)),Tt(-2,-11,2,2,-8,3,n.plateL)],a.shin=[Tt(-2,-7,-2,2,1,2,t(28)),Tt(-1,-7,2,1,0,3,n.plateL),Tt(-2,-10,-2,2,-7,3,(h,d,p)=>d===-10?n.leatherD:p===2&&d===-9?n.iron:n.leather)];let l=h=>[Tt(-4,0,-4,4,9,4,(d,p,x)=>p===0?n.plateD:t(h)(d,p,x)),Tt(-4,8,-4,-3,9,4,-1),Tt(3,8,-4,4,9,4,-1),Tt(-3,8,-4,3,9,-3,-1),Tt(-3,8,3,3,9,4,-1)],c=(h,d,p)=>{let x=ki(h,d,p,29);return(h+d*2+p*3+60)%5===0?n.plateD:x>.88?n.plateH:x<.14?n.plateE:n.plate},o=(h,d,p,x,_,g)=>Tt(h,d,p,x,_,g,c);a.headV=[[...l(30),Tt(-4,0,-4,4,9,4,(h,d,p)=>ki(h,d,p,31)<.07?n.plateD:null,!0),Tt(-4,7,-4,4,8,3,(h,d,p)=>h+p&1?n.plateE:n.brassD,!0),Tt(-4,7,3,4,8,4,n.plateE,!0),Tt(-3,4,3,3,5,4,n.visor,!0),Tt(-2,1,3,2,3,4,h=>h&1?n.ironD:n.plateD,!0)],[...O1(n),Tt(-3,3,-3,3,7,2,e),Tt(-3,6,2,-2,7,3,e),Tt(2,6,2,3,7,3,e),Tt(-4,7,-4,4,8,3,n.hat),Tt(-3,8,-3,3,11,2,n.hat),Tt(-3,8,-3,3,9,2,n.hatBand,!0),Tt(-3,10,-3,-2,11,2,-1),Tt(2,10,-3,3,11,2,-1),Tt(-2,10,-3,2,11,-2,-1),Tt(-2,10,1,2,11,2,-1),Tt(-4,4,3,4,5,4,h=>h===-4||h===3||h===-1||h===0?n.brass:n.lens),Tt(-3,5,3,-1,6,4,n.brass),Tt(1,5,3,3,6,4,n.brass),Tt(-3,3,3,-1,4,4,n.brassD),Tt(1,3,3,3,4,4,n.brassD)],[...l(32),Tt(-3,4,3,3,5,4,n.violet,!0),Tt(-1,2,3,1,8,4,n.brass,!0),Tt(-4,7,3,4,8,4,n.brass,!0),Tt(-1,9,-5,1,11,3,t(33)),Tt(-1,5,-6,1,11,-4,t(33))],[o(-4,0,-4,4,9,4),Tt(-4,8,-4,-3,9,4,-1),Tt(3,8,-4,4,9,4,-1),Tt(-3,3,3,3,6,4,n.void,!0),Tt(-3,4,3,-1,5,4,n.ember,!0),Tt(1,4,3,3,5,4,n.ember,!0),o(-4,6,4,4,7,5),Tt(-3,9,-3,3,10,3,n.plateH),Tt(-3,10,2,-2,12,3,n.plateH),Tt(-1,10,2,1,12,3,n.plateH),Tt(2,10,2,3,12,3,n.plateH),Tt(-3,10,-3,-2,11,-2,n.plateH),Tt(2,10,-3,3,11,-2,n.plateH),Tt(-1,9,2,0,10,3,n.gemR,!0),Tt(0,9,2,1,10,3,n.gemG,!0)]];let u=[];for(let h=6;h<11;h++){let d=Math.round((h-6)*.75);u.push(Tt(-1-d,h,4,-d,h+1,5,n.brass),Tt(d,h,4,d+1,h+1,5,n.brass))}let f=h=>Tt(h,8,-5,h+2,17,-3,(d,p)=>p===16?n.rustL:p===13||p===10?n.rustD:n.iron);return a.torsoV=[[Tt(1,7,4,3,9,5,(h,d)=>h===2&&d===8?n.buckle:n.brass),f(-6),f(4),Tt(-4,3,4,4,6,5,(h,d)=>(h+d+40)%4<2?n.hazard:n.soot),Tt(-6,16,-5,-4,17,-3,(h,d,p)=>h===-5&&p===-4?n.soot:null,!0),Tt(4,16,-5,6,17,-3,(h,d,p)=>h===4&&p===-4?n.soot:null,!0)],[...u,Tt(-1,3,4,1,6,5,(h,d)=>d===4&&h===-1?n.ironD:n.brass),Tt(0,4,-7,6,14,-3,(h,d,p)=>(h===0||h===5)+(d===4||d===13)+(p===-7||p===-4)>=2?-1:ki(h,d,p,38)<.2?n.sackD:n.sack),Tt(2,14,-6,4,16,-4,n.rope),Tt(1,13,-6,5,14,-4,(h,d,p)=>ki(h,d,p,39)<.5?n.coin:null),Tt(1,14,-6,3,15,-5,h=>h===1?n.coinD:n.coin),Tt(0,6,-7,2,8,-6,n.sackD,!0)],[Tt(-4,-8,-4,4,11,-3,(h,d,p)=>d===-8&&ki(h,d,p,40)<.5?-1:d%4===0?n.plateD:n.plateE),Tt(-6,9,-4,-4,11,-2,n.brass),Tt(4,9,-4,6,11,-2,n.brass),Tt(6,-2,0,7,0,2,n.ironL),Tt(6,-6,0,7,-2,1,n.brass),Tt(6,-5,1,7,-2,2,n.brassD)],[o(-5,9,-4,5,13,0),Tt(-5,11,-4,5,12,0,(h,d,p)=>ki(h,d,p,42)<.06?n.gemR:ki(h,d,p,43)<.06?n.gemG:null,!0),Tt(-3,3,4,3,9,5,(h,d)=>(h===-3||h===2)&&(d===3||d===8)?n.ironL:n.iron),Tt(-2,4,5,2,8,6,(h,d)=>(h===-2||h===1)&&(d===4||d===7)?null:(h===-1||h===0)&&(d===5||d===6)?n.ironD:n.ironL)]],a}var ge=(n,t,e)=>({s:n,p:t,c:e});function ew(){let n=Dn([ge([.045,.045,1.95],[0,0,.37],Sd),ge([.066,.066,.07],[0,0,-.6],Hu),ge([.062,.062,.06],[0,0,.62],Vu),ge([.062,.062,.06],[0,0,1.12],Ho),ge([.062,.062,.22],[0,0,.02],qS),ge([.072,.072,.08],[0,0,1.36],sl),ge([.026,.11,.3],[0,0,1.53],Qr),ge([.028,.03,.3],[0,-.045,1.53],il),ge([.026,.06,.1],[0,0,1.72],Qr),ge([.028,.03,.05],[0,.03,1.46],Vu)]),t=Dn([ge([.045,.05,.22],[0,0,-.03],I1),ge([.05,.056,.03],[0,0,.04],Ho),ge([.05,.056,.03],[0,0,-.1],Ho),ge([.05,.1,.05],[0,.015,.11],Ho),ge([.022,.12,.64],[0,.03,.45],Qr),ge([.024,.03,.64],[0,.09,.45],Vu),ge([.024,.02,.6],[0,-.035,.46],il),ge([.022,.15,.1],[0,.045,.79],Qr),ge([.024,.04,.05],[0,.07,.7],Ho)]),e=u=>ge([.05,.05,2.3],[0,0,.45],u),i=[[e(I1),ge([.08,.08,.06],[0,0,1.56],sl),ge([.08,.08,.05],[0,0,1.88],sl),ge([.028,.3,.34],[0,.17,1.72],Vu),ge([.03,.05,.36],[0,.33,1.72],il),ge([.028,.12,.05],[0,-.08,1.74],Ho),ge([.03,.03,.36],[0,0,2.05],Qr),ge([.12,.12,.1],[0,0,1.46],P1)],[e(Sd),ge([.07,.07,.07],[0,0,.9],Hu),ge([.07,.07,.07],[0,0,1.5],Hu),ge([.045,.045,.42],[0,0,1.82],rl),ge([.045,.32,.045],[0,.14,2.03],rl),ge([.045,.045,.2],[0,.28,1.93],rl),ge([.05,.05,.05],[0,.28,1.82],il),ge([.02,.05,.08],[0,-.04,1.62],Qr),ge([.02,.05,.08],[0,-.07,1.54],Qr),ge([.02,.05,.08],[0,-.1,1.46],Qr)],[e(C1),ge([.12,.12,.08],[0,0,1.62],sl),ge([.2,.2,.06],[0,0,1.68],Fi.sackD),ge([.32,.3,.26],[0,0,1.83],Fi.sack),ge([.26,.24,.08],[0,0,2],Fi.sackD),ge([.1,.02,.08],[.04,.155,1.84],Fi.coin),ge([.02,.08,.08],[-.165,-.03,1.8],Fi.coinD),ge([.08,.08,.03],[.05,.06,2.05],Fi.coin)],[e(2760752),ge([.075,.075,.06],[0,0,1.55],Fi.brass),ge([.075,.075,.05],[0,0,1.95],Fi.brass),ge([.028,.3,.4],[0,.17,1.76],4864606),ge([.03,.05,.42],[0,.33,1.76],Fi.brass),ge([.028,.14,.06],[0,-.09,1.76],Fi.brass),ge([.09,.09,.22],[0,0,2.1],Fi.violet)],[e(rl),ge([.22,.36,.14],[0,0,1.72],Fi.coin),ge([.2,.3,.12],[0,0,1.85],14727248),ge([.16,.26,.1],[0,0,1.96],Fi.coinD),ge([.08,.08,.06],[0,0,1.6],Fi.brass)]],s=kf(i.map((u,f)=>z1(Dn(u),f+1))),r=Dn([ge([.055,.055,3.5],[0,0,.9],C1),ge([1,.045,.045],[.45,0,2.55],Sd),ge([.07,.07,.08],[0,0,2.55],sl),ge([.055,.055,.1],[.95,0,2.55],Hu),ge([.035,.035,.3],[0,0,2.8],rl),ge([.02,.02,.1],[0,0,2.98],il),ge([.14,.14,.12],[0,0,2.66],P1)]),a=.29,l=.12,c=(u,f)=>u>=-2&&u<=1&&f>=-3&&f<=2||(u===-1||u===0)&&f>=-5&&f<=4,o=ba([R1([-a,l-a,.07],[a,l+a,.13],(u,f,h)=>{let d=Math.hypot(u,f-l);if(d>a||h<.1&&d>a-.06)return null;let p=Math.floor(u/hi),x=Math.floor((f-l)/hi),_=Math.atan2(u,f-l),g=le(p+40,x+40,7);if(d>a-.05)return g<.12?null:(Math.round(_/(Math.PI/6))*(Math.PI/6)-_)**2<.02?12627082:g<.35?4864560:8281156;if(h<.1)return 4076592;if(c(p,x))return p===-2?14700604:p===1&&x>=-3&&x<=2?10492946:14166042;for(let E=-1;E<=1;E++)for(let m=-1;m<=1;m++)if(c(p+E,x+m))return 1314832;let A=Math.floor((_+Math.PI)/(Math.PI*2/5)+(d>.17?.5:0));return Math.abs(d-.17)<.022?3024418:[7229504,5917764,8016438,5129792,6703674][A%5]}),R1([-.07,.1,.13],[.07,.15,.17],3813936)],hi,.1);return{spear:n,sword:t,glaive:s,pole:r,shield:o}}function z1(n,t){let e=n.attributes.color.array;for(let i=0;i<e.length;i+=3)e[i]+=2*t;return n}function wd(n,t,e){let i=n.length?[ba(n,hi,e)]:[];return t.forEach((s,r)=>i.push(z1(ba(s,hi,e),r+1))),kf(i)}function nw(){let n={},t=k1,e=O1(t),i={hips:ZS(t),torso:KS(t),arm:jS(t),thigh:JS(t),shin:QS(t)};for(let l of["hips","torso","arm","thigh","shin"])n[l]=ba(i[l],hi,.12);n.head=wd(e,[XS(t),$S(t)],.12),n.crest=ba(YS(t),hi,.12);let s=tw(Fi);for(let l of["hips","arm","thigh","shin"])n["o_"+l]=ba(s[l],hi,.1);n.o_torso=wd(s.torso,s.torsoV,.1),n.o_head=wd([],s.headV,.1);let r=(l,c=0)=>l.filter(o=>!o.paint&&o.c!==-1).map(o=>({s:o.b.map((u,f)=>Math.max(.01,u-o.a[f]-.016)),p:o.a.map((u,f)=>(u+o.b[f])/2+(f===1?c:0)),c:0}));n.shadow_trunk=Dn([...r(i.hips.slice(0,2),-li.waist),...r(i.torso.slice(0,5)),...r([...e,Tt(-3,3,-3,3,7,2,0)],li.neck)]),n.shadow_arm=Dn(r([i.arm[0],i.arm[2]])),n.shadow_thigh=Dn(r(i.thigh.slice(0,1))),n.shadow_shin=Dn(r([i.shin[0],i.shin[3]])),Object.assign(n,ew());let a=[];for(let l=0;l<4;l++)for(let c=0;c<7-l*2;c++){let o=(c-(6-l*2)/2)*.075,u=c===0||c===6-l*2||l===0;a.push(ge([.075,.075,.09],[o,-l*.075,0],u?16765040:14690840))}return n.marker=Dn(a),n.glint=Dn([ge([1,.12,.12],[0,0,0],16777215),ge([.12,1,.12],[0,0,0],16777215),ge([.12,.12,1],[0,0,0],16777215)]),n}function iw(){let n=document.createElement("canvas");n.width=64,n.height=112;let t=n.getContext("2d");t.fillStyle="#7a1e14",t.fillRect(0,0,64,112);for(let i=0;i<90;i++){let s=le(i,3,9),r=le(i,5,2);t.fillStyle=s<.5?"rgba(255,200,170,0.07)":"rgba(0,0,0,0.12)",t.fillRect(r*64|0,le(i,8,1)*112|0,2+(s*6|0),1+(r*3|0))}t.fillStyle="#1a0a08",t.fillRect(0,0,64,5),t.fillRect(0,0,4,112),t.fillRect(60,0,4,112),qf(t,32,44,{w:18,h:34,wick:10,wickW:4,fill:"#c8301c",light:"#ec5a3c",dark:"#861a10",ink:"#140806",line:3}),t.globalCompositeOperation="destination-out",t.beginPath(),t.moveTo(14,112),t.lineTo(32,88),t.lineTo(50,112),t.fill();let e=new cs(n);return e.colorSpace=Hn,e.magFilter=sn,e}var Zn=0,gs=3,Ve=6,Sn=9,Ni=12,Ui=15,xs=18,vs=19,Cn=20,ys=23,al=26,sw={TO:Zn,HE:gs,AR:Ve,AL:Sn,TR:Ni,TL:Ui,SR:xs,SL:vs,WR:Cn,WL:ys},L1=[0,1,2,3,2],rw=[1.72,.86,2.25,2.7],Ed=(n,t=0)=>((n+1)*2654435761+t*40503>>>0)/4294967296,D1=(n,t,e)=>(.42*Math.cos(n)+.42*Math.cos(n+t))*Math.cos(e),F1=n=>n<=0?0:n>=1?1:n*n*(3-2*n);function Td(n,t,e){n.customProgramCacheKey=()=>`crowd-fade-${t}-${!!e}`,n.onBeforeCompile=i=>{e&&e(i),i.vertexShader=`varying vec3 vCrowdWP;
`+i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
      vec4 cwp = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        cwp = instanceMatrix * cwp;
      #endif
      vCrowdWP = (modelMatrix * cwp).xyz;`),i.fragmentShader=`varying vec3 vCrowdWP;
`+i.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      // camera part (r3): a clean cut at \u22481.3 \xD7 near with a thin dithered rim, not a wide screen-door band (under the
      // DoF a wide per-pixel dissolve turned near soldiers and banners into a coarse mosaic)
      float cfade = smoothstep(${(t*1.27).toFixed(2)}, ${(t*1.33).toFixed(2)}, distance(vCrowdWP, cameraPosition));
      if (cfade < 1.0 && cfade < fract(52.9829189 * fract(dot(floor(gl_FragCoord.xy), vec2(0.06711056, 0.00583715))))) discard;`)}}var Ia=(n,t)=>{let e=new Qt(n),i=new Qt(ri(t));return[e.r/i.r,e.g/i.g,e.b/i.b]},aw=[6183994,8616542,6177842,6054998,9735804,6961704,7234624,4871760].map(n=>Ia(n,138)),ow=[3552306,4470312,7629392,4342318,5394508,4994086].map(n=>Ia(n,92)),cw=[9316892,9842206,6168598,5914672,5393966,3552306,7629392].map(n=>Ia(n,128)),lw=[2235930,3811870,6183510,5123102,6715498,6715498].map(n=>Ia(n,80)),hw=Ia(5913124,138),uw=Ia(11020314,128),Ad=[1,1,1],N1=[6967360,7217696,5387888,8018978].map(n=>Ia(n,132)),xr=(n,t,e,i)=>n.setRGB(t[0]+8*i,t[1]+8*Math.round(e*100),t[2]),fw=2.4,dw=`#include <color_vertex>
  vCrowdGlow = 0.0;
  #if defined( USE_COLOR ) && defined( USE_INSTANCING_COLOR )
  {
    float cPart = floor(color.r * 0.5);
    vec3 vc = vec3(color.r - 2.0 * cPart, color.gb);
    vec3 ih = floor(instanceColor * 0.125);
    if (ih.g > 0.5) {
      vec3 dye = instanceColor - 8.0 * ih;
      float isDye = 1.0 - step(1e-5, abs(vc.r - vc.g) + abs(vc.g - vc.b));
      vColor.rgb = vc * (ih.g * 0.01) * mix(vec3(1.0), dye, isDye);
    } else vColor.rgb = vc * instanceColor;
    vCrowdGlow = step(0.8, max(vc.r, max(vc.g, vc.b))) * step(min(vc.r, min(vc.g, vc.b)), 0.1);
  }
  #endif`,U1=`
  #if defined( USE_COLOR ) && defined( USE_INSTANCING_COLOR )
  { float cPart = floor(color.r * 0.5); if (cPart > 0.5 && abs(cPart - floor(instanceColor.r * 0.125)) > 0.5) transformed = vec3(0.0); }
  #endif`;function B1(n,t){let e=t.crowd,i=e.N,s=nw(),r=new Qe({vertexColors:!0,roughness:.78,metalness:.06,flatShading:!0});Td(r,2.4,W=>{W.vertexShader=`varying float vCrowdGlow;
`+W.vertexShader.replace("#include <color_vertex>",dw).replace("#include <begin_vertex>","#include <begin_vertex>"+U1),W.fragmentShader=`varying float vCrowdGlow;
`+W.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      #ifdef USE_COLOR
        float cRed = smoothstep(0.3, 0.5, vColor.r - max(vColor.g, vColor.b));
        totalEmissiveRadiance += vColor.rgb * (0.08 + cRed * 0.32 + vCrowdGlow * ${fw.toFixed(2)});
      #endif`)}),b1(r),Bo(r);let a=new xo({vertexColors:!0});a.onBeforeCompile=W=>{W.vertexShader=W.vertexShader.replace("#include <begin_vertex>","#include <begin_vertex>"+U1)},a.customProgramCacheKey=()=>"crowd-variant-depth";let l=[],c=new an({colorWrite:!1,depthWrite:!1}),o=[],u=(W,bt,At=r,ut=!0)=>{let mt=new Vn(W,At,Math.max(1,bt));if(mt.instanceMatrix.setUsage(Ci),mt.instanceColor=new gi(new Float32Array(Math.max(1,bt)*3).fill(1),3),mt.instanceColor.setUsage(Ci),mt.castShadow=ut===!0,mt.receiveShadow=!0,mt.frustumCulled=!1,mt.count=0,At===r&&mt.geometry.setAttribute("aHit",S1(bt)),n.add(mt),l.push(mt),ut&&ut!==!0){let F=new Vn(ut,c,Math.max(1,bt));F.instanceMatrix=mt.instanceMatrix,F.castShadow=!0,F.frustumCulled=!1,F.count=0,n.add(F),o.push([F,mt])}return mt},f=e.grunts,h=ee.officers,d={hips:u(s.hips,f,r,!1),torso:u(s.torso,f,r,s.shadow_trunk),head:u(s.head,f,r,!1),crest:u(s.crest,f),arm:u(s.arm,f*2,r,s.shadow_arm),thigh:u(s.thigh,f*2,r,s.shadow_thigh),shin:u(s.shin,f*2,r,s.shadow_shin),spear:u(s.spear,f),sword:u(s.sword,f),shield:u(s.shield,f),glaive:u(s.glaive,f+h),pole:u(s.pole,f),o_hips:u(s.o_hips,h),o_torso:u(s.o_torso,h),o_head:u(s.o_head,h),o_arm:u(s.o_arm,h*2),o_thigh:u(s.o_thigh,h*2),o_shin:u(s.o_shin,h*2)};for(let W of[d.glaive,d.o_torso,d.o_head])W.customDepthMaterial=a;let p={hips:d.hips,torso:d.torso,head:d.head,arm:d.arm,thigh:d.thigh,shin:d.shin},x={hips:d.o_hips,torso:d.o_torso,head:d.o_head,arm:d.o_arm,thigh:d.o_thigh,shin:d.o_shin},_={value:0},g=new ni(.9,1.5,4,6).rotateX(Math.PI/2).translate(.5,0,1.78),A=iw(),E=new Qe({map:A,emissiveMap:A,emissive:16777215,emissiveIntensity:.24,side:En,alphaTest:.5,roughness:.9});Td(E,3.2,W=>{W.uniforms.uTime=_,W.vertexShader=`uniform float uTime;
`+W.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float fph = instanceMatrix[3].x * 1.3 + instanceMatrix[3].z * 0.7;
      float fu = clamp((position.x - 0.05) / 0.9, 0.0, 1.0);
      transformed.y += (sin(uTime * 3.6 + position.x * 3.2 - position.z * 1.4 + fph) * 0.1 + sin(uTime * 6.1 + position.z * 2.3 + fph) * 0.03) * fu;`)}),Bo(E,.3),d.flag=u(g,f,E,!1);let m=new an({vertexColors:!0,color:new Qt(.85,.8,.75),fog:!1});Td(m,5),d.marker=u(s.marker,h,m,!1),d.glint=u(s.glint,32,new an({color:new Qt(2.6,2.2,1.6),transparent:!0,blending:ii,depthWrite:!1,depthTest:!1,fog:!1}),!1),d.glint.renderOrder=7,d.flare=u(s.glint,32,new an({color:new Qt(.48,.01,.005),depthTest:!1,fog:!1}),!1),d.flare.renderOrder=6;let v=new Float32Array(i*al),y=new Float32Array(al),w=new Float32Array(al),M=new Uint8Array(i),S=new Float32Array(i),P=new Float32Array(i),C=new Float32Array(i);for(let W=0;W<i;W++)S[W]=.86+Ed(W)*.28,P[W]=Ed(W,1)<.5?1:-1,C[W]=.96+Ed(W,2)*.08;let z=0,U=[],V=[],Y=[],ct=new Uint8Array(i);for(let W=0;W<i;W++){let bt=(At,ut)=>At[Math.floor(le(W,ut,77)*At.length)];U[W]=bt(aw,1),V[W]=bt(ow,2),ct[W]=le(W,3,77)<.3?1:0,Y[W]=ct[W]?bt(cw,4):bt(lw,5)}let T=(W,bt,At,ut)=>{y[W]=bt,y[W+1]=At,y[W+2]=ut};function L(W,bt,At,ut,mt){let F=P[W],X=e.phase[W];y.fill(0);let G=ut>.35,lt=!mt&&!e.token[W]&&(At===Et.GUARD||At===Et.ADVANCE)&&t.frame<e.raiseF[W];if(At===Et.GUARD||At===Et.ATTACK||lt){let N=Math.sin(z*4.2+W*1.3)*.07,k=Math.sin(z*2.6+W)*.03;if(T(Zn,.16+k,-.28*F,0),T(gs,-.06,.25*F,0),T(Ui,-.42,0,.14),T(Ni,.22,0,-.14),y[vs]=.62+N,y[xs]=.42+N,G&&(y[Ui]+=-.32*Math.sin(X*1.6),y[Ni]+=.32*Math.sin(X*1.6),y[vs]+=.25*Math.max(0,Math.cos(X*1.6)),y[xs]+=.25*Math.max(0,-Math.cos(X*1.6))),lt){let Q=Math.sin(z*11+W*.7)*.22;T(Zn,-.14,-.12*F,0),T(gs,-.36,.1*F,0),bt===1?(T(Ve,-2.75+Q,0,-.25),y[Cn]=-3.7-y[Ve],T(Sn,-1.5,0,.3),y[ys]=1.2):bt===3?(T(Ve,-.9,0,-.1),y[Cn]=-1.57-y[Ve]+Q,T(Sn,-2.6,0,.3)):(T(Ve,-2.5+Q,0,-.3),y[Cn]=-1.15-y[Ve],T(Sn,-2.4-Q,0,.35));return}let nt=!e.token[W]&&At===Et.GUARD&&(t.frame+W*53)%720<30;bt===1?(T(Ve,nt?-2.6:-.95,0,-.3),y[Cn]=(nt?-3.3:-.85)-y[Ve],T(Sn,-1.15,0,.22),y[ys]=1.1,T(Zn,.16+k,.22*F,0)):bt===3?(T(Ve,-.62,0,-.08),y[Cn]=-1.57-y[Ve]+(nt?.25*Math.sin(z*9):0),T(Sn,-.8,0,-.35),T(Zn,.06,0,0)):(T(Ve,nt?-1.3:-.42,0,-.26),y[Cn]=(nt?-1.5:-.5)-y[Ve],T(Sn,-1.12,.1,-.3),y[ys]=0),nt&&(y[gs]=-.25);return}let Bt=Math.min(.26,.03+ut*.045);if(T(Zn,Bt+Math.sin(z*1.7+W)*.015,0,0),T(gs,-Bt*.5,0,0),T(Ui,0,0,.04),T(Ni,0,0,-.04),y[vs]=y[xs]=.04,G){let N=Math.min(.8,.28+ut*.1),k=.35+ut*.13;y[Ui]=-N*Math.sin(X),y[Ni]=N*Math.sin(X),y[vs]=.12+k*Math.max(0,Math.cos(X)),y[xs]=.12+k*Math.max(0,-Math.cos(X)),y[Zn+1]=.12*Math.sin(X)}let Gt=G?Math.min(.7,.2+ut*.1)*Math.sin(X):0;if(bt===1){let N=G&&!mt;T(Ve,N?-1+Gt*.3:-.15+Gt*.5,0,-.14),y[Cn]=(N?-1.6:.9)-y[Ve],T(Sn,N?-.85:-.35-Gt*.5,0,.16),y[ys]=-y[Sn]}else bt===3?(T(Ve,-.6,0,-.06),y[Cn]=-1.57-y[Ve]+Gt*.08,T(Sn,-.78,0,-.36)):G&&!mt?(T(Ve,-.42,0,-.22),y[Cn]=-.55-y[Ve],T(Sn,-1+Gt*.15,.1,-.3)):(T(Ve,-.32,0,-.1),y[Cn]=-1.5-y[Ve],T(Sn,Gt*.8+.02,0,.1))}function D(W,bt,At){let ut=L1[e.kind[W]],mt=P[W],F=Math.hypot(e.vx[W],e.vz[W]);if(bt<=Et.ATTACK){if(L(W,ut,bt,F,e.form[W]&&e.sq.st[e.squad[W]]!==5),bt!==Et.ATTACK)return 12;let X=ee.windup;if(At<X-3){let G=At>=X-14,lt=(G?Math.sin(At*2.3)*.09:Math.sin(At*1.9)*.04)*F1(At/12);return ut===0?(T(Zn,-.22,-.45,0),T(gs,-.2,.4,0),T(Ve,-2.75,0,-.35),y[Cn]=-.2-y[Ve]+lt,T(Sn,-1.9,.2,.2)):ut===1?(T(Zn,-.24,.3,0),T(Ve,-3,0,-.2),y[Cn]=-4-y[Ve]+lt,T(Sn,-1.35,0,.3),y[ys]=1.2):(T(Zn,-.24,-.55,0),T(gs,-.1,.45,0),T(Ve,-2.7,0,-.5),y[Cn]=-3.4-y[Ve]+lt,T(Sn,-2.4,0,.45)),T(Ui,-.62,0,.18),T(Ni,.45,0,-.18),y[vs]=.75,y[xs]=.5,9}return At<X+10?(ut===0?(T(Zn,.36,.35,0),T(Ve,-1.4,0,-.08),y[Cn]=-.04-y[Ve],T(Sn,-1.45,0,-.2)):ut===1?(T(Zn,.42,-.12,0),T(Ve,-.62,0,-.1),y[Cn]=.62-y[Ve],T(Sn,-.8,0,.3),y[ys]=.8):(T(Zn,.36,.55,0),T(Ve,-.9,0,.25),y[Cn]=.35-y[Ve],T(Sn,-.8,0,-.3)),T(Ui,-.85,0,.12),T(Ni,.55,0,-.12),y[vs]=.9,y[xs]=.12,42):7}if(y.fill(0),bt===Et.HURT||bt===Et.KNOCK){let X=E1(y,sw,e,W,bt,At,mt);return X||(L(W,ut,Et.GUARD,0,0),8)}return bt===Et.AIR?(T(Zn,-.3+Math.sin(At*.3)*.2,0,Math.sin(At*.23)*.2),T(gs,-.6,0,0),T(Ve,-2.4+Math.sin(At*.5)*.5,0,-.9),T(Sn,-2.2+Math.cos(At*.5)*.5,0,.9),y[Cn]=.8,y[ys]=.6,T(Ui,-.85,0,.25),T(Ni,-.2,0,-.3),y[vs]=1.2,y[xs]=.5,16):bt===Et.GETUP?F1(At/26)>.55?(L(W,ut,Et.GUARD,0,0),10):(T(Zn,.5,0,0),T(Ve,-.5,0,-.45),T(Sn,-.5,0,.45),y[Cn]=.3,T(Ui,-1.3,0,.2),T(Ni,-1.1,0,-.2),y[vs]=1.6,y[xs]=1.5,12):(T(gs,-.25,.4*mt,0),T(Ve,-.25,0,-1.4),T(Sn,-.45,0,1.2),y[Cn]=.9,y[ys]=.5,T(Ui,-.1,0,.3),T(Ni,-.55,0,-.18),y[vs]=.1,y[xs]=.85,bt===Et.DOWN&&(y[Zn]=Math.sin(z*5+W)*.03),14)}let B=new pe,b=new pe,j=new pe,it=new Pn(0,0,0,"YXZ"),J=new pe,vt=new pe,Nt=new pe,Z=new pe,at=new pe,pt=new pe,zt=new pe,gt=new Qt,Ut=new Qt,ie=new Qt,rt=new Qt,Rt=new q,Ct=new pe,Ot=new Qt(.55,.55,.55),Ht=[0,0,0],yt=(W,bt,At,ut,mt,F,X,G)=>(j.makeRotationFromEuler(it.set(F,X,G)).setPosition(At,ut,mt),W.multiplyMatrices(bt,j)),ne=16,ft=new Array(i*ne),Se=new Float32Array(i*ne*16),et=new Float32Array(i*ne*3),be=new Uint8Array(i),ye=0,H=(W,bt,At)=>{let ut=W.count++,mt=ye*ne+be[ye]++;bt.toArray(W.instanceMatrix.array,ut*16),bt.toArray(Se,mt*16),ft[mt]=W,At?(At.toArray(W.instanceColor.array,ut*3),At.toArray(et,mt*3)):(W.instanceColor.array.fill(1,ut*3,ut*3+3),et.fill(1,mt*3,mt*3+3));let F=W.geometry.attributes.aHit;F&&F.array.set(Ht,ut*3)},R=W=>{for(let bt=0;bt<be[W];bt++){let At=W*ne+bt,ut=ft[At],mt=ut.count++;ut.instanceMatrix.array.set(Se.subarray(At*16,At*16+16),mt*16),ut.instanceColor.array.set(et.subarray(At*3,At*3+3),mt*3);let F=ut.geometry.attributes.aHit;F&&F.array.fill(0,mt*3,mt*3+3)}},dt=0;function ot(W,bt,At){let ut=e.stT[W],mt=W*al,F=e.type[W]===1,X=e.kind[W],G=L1[X],lt=D(W,bt,ut),Bt=M[W]?1-Math.exp(-lt*At):1;M[W]=1,ye=W,be[W]=0;for(let kt=0;kt<al;kt++)v[mt+kt]+=(y[kt]-v[mt+kt])*Bt,w[kt]=v[mt+kt];let Gt=-li.hipY+Math.max(D1(w[Ui],w[vs],w[Ui+2]),D1(w[Ni],w[xs],w[Ni+2])),N=X===ci.CAPTAIN,k=(F?1.16:N?1.06:1)*C[W],nt=e.rx[W],Q=e.y[W]+Gt*k;if(bt>=Et.AIR&&bt<=Et.DEAD){let kt=Math.abs(Math.sin(nt));Q=e.y[W]+Gt*k*(1-kt)+.14*kt,bt===Et.DEAD&&ut>ee.deadTime-50&&(Q-=(ut-(ee.deadTime-50))/50*.5)}let Ft=e.hs[W]>0?Math.sin(e.hs[W]*2.7)*.05:0;B.makeRotationFromEuler(it.set(nt,e.yaw[W],0)).setPosition(e.x[W]+Ft,Q,e.z[W]),B.multiply(Ct.makeScale(k,k,k));let It=S[W];w1(e,W,Ht);let Mt=bt===Et.ATTACK&&!e.feint[W]&&ut>=ee.windup-14&&ut<ee.windup,I,tt,st,K,xt;if(F){let kt=(W-e.grunts)%N1.length,Zt=N1[kt];I=x,tt=K=xr(gt,Zt,It,0),st=xt=xr(Ut,Zt,It,kt+1),xr(rt,Ad,It,kt+2)}else I=p,tt=xr(gt,V[W],It,0),st=K=xr(Ut,N?hw:U[W],It,0),xt=N?xr(ie,Ad,It,0):xr(ie,Y[W],It,ct[W]?2:1),xr(rt,Ad,It,N?1:0);H(I.hips,J.copy(B),tt),yt(vt,J,0,li.waist,0,w[Zn],w[Zn+1],w[Zn+2]),H(I.torso,vt,st),H(I.head,yt(pt,vt,0,li.neck,0,w[gs],w[gs+1],w[gs+2]),xt),N&&H(d.crest,pt,xr(ie,uw,It,0)),yt(Nt,vt,-li.shX,li.shY,0,w[Ve],w[Ve+1],w[Ve+2]),H(I.arm,Nt,K),yt(Z,vt,li.shX,li.shY,0,w[Sn],w[Sn+1],w[Sn+2]),H(I.arm,Z,K),yt(at,J,-li.hipX,li.hipY,0,w[Ni],w[Ni+1],w[Ni+2]),H(I.thigh,at,tt),H(I.shin,yt(pt,at,0,-li.knee,0,w[xs],0,0),tt),yt(at,J,li.hipX,li.hipY,0,w[Ui],w[Ui+1],w[Ui+2]),H(I.thigh,at,tt),H(I.shin,yt(pt,at,0,-li.knee,0,w[vs],0,0),tt),Ht[0]=Ht[1]=Ht[2]=0,yt(zt,Nt,0,-li.hand,0,w[Cn],w[Cn+1],w[Cn+2]);let Vt=G===0?d.spear:G===1?d.sword:G===2?d.glaive:d.pole;if(H(Vt,zt,rt),G===3&&H(d.flag,zt,null),G===1&&H(d.shield,yt(pt,Z,0,-li.hand,0,w[ys],w[ys+1],w[ys+2]),rt),bt===Et.ATTACK&&ut>=3&&ut<ee.windup&&d.glint.count<32){let kt=Mt?.46+.16*Math.abs(Math.sin(ut*.9)):.2+.12*Math.abs(Math.sin(ut*.33))+(ut<10?(10-ut)*.025:0);b.makeRotationFromEuler(it.set(ut*.07,ut*.11,.6)).scale(Rt.set(kt,kt,kt)),b.setPosition(Rt.set(0,0,rw[G]).applyMatrix4(zt)),Mt&&(H(d.flare,b,null),b.scale(Rt.set(.45,.45,.45))),H(d.glint,b,Ot)}F&&bt!==Et.DEAD&&!((e.x[W]-t.hero.x)**2+(e.z[W]-t.hero.z)**2<(t.hudTagR||0)**2)&&(b.makeRotationY(z*2.2).scale(Rt.set(.7,.7,.7)).setPosition(e.x[W],Q+1.35*k+.62+Math.sin(z*3+W)*.06,e.z[W]),H(d.marker,b,null))}return{update(W){z+=W,_.value=z,dt++;for(let At of l)At.count=0;let bt=Rn.uA.value;for(let At=0;At<i;At++){let ut=e.st[At];if(ut===Et.OFF||ut===Et.AIR&&Rn.uOn.value&&e.y[At]>1&&(e.x[At]-bt.x)**2+(e.z[At]-bt.y)**2<9){M[At]=0;continue}if(T1(At,e.x[At],e.z[At],e.type[At]?1/0:e.token[At]||ut===Et.ATTACK?3:ut===Et.HURT||ut===Et.KNOCK||e.flash[At]?2.5:0)){M[At]=0;continue}ut===Et.IDLE&&M[At]&&e.type[At]===0&&!e.flash[At]&&dt+At&3?R(At):ot(At,ut,(ut===Et.IDLE?4:1)*W)}for(let At of l)At.instanceMatrix.needsUpdate=!0,At.instanceColor&&(At.instanceColor.needsUpdate=!0),At.geometry.attributes.aHit&&(At.geometry.attributes.aHit.needsUpdate=!0);for(let At of l)At.visible=At.count>0;for(let[At,ut]of o)At.count=ut.count,At.visible=ut.visible}}}var vn={closeup:30,pullback:88,chase:100,contact:132,finisher:176,end:200,aura:{r0:5.2,k:.35,frames:5},chaseSpeed:10,chaseTurn:2.4,rushDist:2.4,waveR:12,waveFrames:18,contactHit:{shape:"sector",range:9.5,ang:210,dmg:12,kb:"blow",force:6.5,lift:8.2,hitstop:3,yMax:5},front:{frames:24,r0:4,r1:15,ang:180},backHit:{shape:"circle",range:3.2,dmg:12,kb:"launch",force:5,lift:7,hitstop:0,yMax:5},dragonHit:{shape:"circle",range:2.7,dmg:16,kb:"launch",force:5.5,lift:6,hitstop:0,yMax:1.9},heroHit:{shape:"circle",range:3,dmg:7,kb:"launch",force:4.5,lift:5,hitstop:0,yMax:1.7},waveHit:{shape:"circle",range:0,dmg:60,kb:"blow",force:7.5,lift:9.5,hitstop:0,heavy:!0,yMax:6},cost:1/3},ns=[[-.08,0,1.25,.4],[0,0,1.4,1.9],[.08,.5,2.1,5.6],[.16,2.4,2.5,8.4],[.25,5.6,2.4,8.4],[.34,7.2,2.6,3.4],[.43,5.6,3.6,.6],[.52,3.2,5.4,.4],[.6,1.4,6,2.2],[.67,.6,4.2,3.6]];{let n=vn.finisher-vn.contact,t=vn.rushDist;for(let e=0;e<=24;e++){let i=n/60+e*.03,s=e*.03*13,r=1.7+e*.03*.9;ns.push([i,r*Math.sin(s),1.1+e*.03*14,t+r*Math.cos(s)])}}var pw=(n,t,e,i,s)=>.5*(2*t+(e-n)*s+(2*n-5*t+4*e-i)*s*s+(3*t-n-3*e+i)*s*s*s);function mw(n,t){let e=0;for(;e<ns.length-2&&n>=ns[e+1][0];)e++;let i=ns[Math.max(0,e-1)],s=ns[e],r=ns[e+1],a=ns[Math.min(ns.length-1,e+2)],l=Math.min(1,Math.max(0,(n-s[0])/(r[0]-s[0])));for(let c=1;c<4;c++)t[c-1]=pw(i[c],s[c],r[c],a[c],l);return t}var Yu=ns[0][0],Ku=1/480,La=Math.ceil((ns[ns.length-1][0]-Yu)/Ku)+1,Pa=new Float32Array(La*3),Xi=new Float32Array(La);{let n=[0,0,0];for(let t=0;t<La;t++)mw(Yu+t*Ku,n),Pa.set(n,t*3),Xi[t]=t?Xi[t-1]+Math.hypot(n[0]-Pa[t*3-3],n[1]-Pa[t*3-2],n[2]-Pa[t*3-1]):0}var Ld=Xi[Math.round(-Yu/Ku)],Z5={arcMax:Xi[La-1]-Ld,life:ns[ns.length-1][0]};function Dd(n){let t=Math.min(La-1,Math.max(0,(n-Yu)/Ku)),e=Math.floor(t),i=t-e;return(e+1<La?Xi[e]+(Xi[e+1]-Xi[e])*i:Xi[e])-Ld}function Vo(n,t){n+=Ld;let e=0,i=La-1;for(;i-e>1;){let r=e+i>>1;Xi[r]<n?e=r:i=r}let s=Xi[i]>Xi[e]?Math.min(1,Math.max(0,(n-Xi[e])/(Xi[i]-Xi[e]))):0;for(let r=0;r<3;r++)t[r]=Pa[e*3+r]+(Pa[i*3+r]-Pa[e*3+r])*s;return t}var Fd={footL:[.24,.08,.14,0,20],footR:[-.24,.08,-.14,0,-20]},H1={...Fd,hips:[0,.94,0],hipsR:[-4,-8,0],spine:[-6,0,0],chest:[-10,0,0],head:[-14,0,0],spear:Mn([0,1.98,.1],90,24,0,.9),gripR:.64,gripL:1.18},V1={...Fd,hips:[0,.92,0],hipsR:[0,-12,0],spine:[-2,-4,0],chest:[-5,-6,0],head:[-6,-18,0],spear:Mn([-.36,1.55,.18],6,86,0,.9),gripR:.72,lfree:1,armL:[-30,0,55,25]},Gu={...Fd,hips:[0,.9,0],hipsR:[0,-24,0],spine:[2,-6,0],chest:[0,-8,0],head:[2,-22,0],spear:Mn([.02,1.38,.3],62,52,0,.9),gripR:.48,gripL:1.02},Id={hips:[0,.74,.08],hipsR:[20,-38,0],spine:[8,-6,0],chest:[4,-8,0],head:[0,0,0],footL:[.2,.08,.46,0,10],footR:[-.22,.1,-.42,30,-40],spear:[-.2,1,-.22,4,-4,90],gripR:.12,gripL:.64},gw={hips:[0,.76,.26],hipsR:[8,-72,0],spine:[6,-8,0],chest:[2,-6,0],head:[0,0,0],footL:[.2,.08,.74,0,10],footR:[-.24,.08,-.42,20,-60],spear:[-.04,1.2,.68,0,3,90],gripL:.3},xw={hips:[0,.78,.06],footL:[.32,.08,.36,0,25],footR:[-.32,.08,-.28,0,-50]},Wu=(n,t,e)=>({...xw,hipsR:[6,n,0],spine:[8,n*.25,0],chest:[4,n*.35,0],head:[0,0,0],spear:[n>0?.08:-.3,1.1,.26,t,-4,0],gripL:.44,...e}),G1={hips:[0,.6,.22],hipsR:[30,-12,0],spine:[16,0,0],chest:[12,0,0],head:[-6,0,0],footL:[.3,.08,.5,0,20],footR:[-.3,.1,-.4,30,-40],spear:Mn([-.02,.62,.9],0,-58,90,.55),gripR:.2,gripL:.62},vw=n=>{let t=n*Math.PI*2,e=Math.sin(t),i=(s,r)=>{let a=Math.sin(t+r),l=Math.cos(t+r);return[s,.08+Math.max(0,l)*.3,a*.62+.06,-l*30,0]};return[n,ve({...Id,hips:[0,.8+Math.abs(Math.cos(t))*.05,.1],hipsR:[24,-30+e*8,0],chest:[4,-8-e*10,0],footL:i(.12,0),footR:i(-.12,Math.PI),spear:[-.2,1.02-e*.03,-.08,5,-3,90]}),"lin"]};Object.assign(zu,{mu_act:Wn([[0,ve()],[.35,ve(V1),"out"],[1,ve({...V1,hips:[0,.93,0],chest:[-7,-4,0],spear:Mn([-.36,1.62,.18],4,87,0,.9),armL:[-35,0,62,20]})]]),mu_face:Wn([[0,ve(Gu)],[.5,ve({...Gu,chest:[-2,-9,0],spear:Mn([.02,1.4,.3],60,55,0,.9)})],[1,ve(Gu)]]),mu_charge:Wn([[0,ve(Gu)],[1,ve(Id),"out"]]),mu_run:Wn([0,.25,.5,.75,1].map(vw),!0),mu_rush:Wn([[0,ve(Id)],[.1,ve(gw),"snap"],[.3,ve(Wu(-60,-110)),"in"],[.46,ve(Wu(40,100)),"out"],[.62,ve({...Wu(10,88),spin:180}),"in"],[.8,ve({...Wu(10,88),spin:360}),"out"],[1,ve({...H1,spin:360})]]),mu_fin:Wn([[0,ve(H1)],[.1,ve(G1),"snap"],[.62,ve({...G1,hips:[0,.64,.2],chest:[10,0,0]})],[1,ve(),"io"]])});var Rd=1/60,yw=n=>(n-vn.contact)/60,qu=n=>1-(1-n)*(1-n),W1=n=>(n=Math.min(1,Math.max(0,n)),n*n*(3-2*n)),Pd=n=>Math.atan2(Math.sin(n),Math.cos(n)),$u=Math.atan2(On.x,On.z),q1=1.05,Xu=n=>{let t=Pd(n-$u);return Math.abs(t)>=q1?n:$u+(t<0?-1:1)*q1},Cd=1.15;function X1(n){let t={active:!1,t:0,wasReady:!1,yaw0:0,ax:0,az:0,ayaw:0,side:1,waveR:0,seq:0},e={id:0,yaw:0,dist:0,pitch:0,fov:50,height:1.2,side:0,shake:1},i=[],s=0;t.reset=()=>{t.active=!1,t.t=0,t.wasReady=!1,t.waveR=0,t.side=1,i.length=0},t.toWorld=(c,o)=>{let u=Math.sin(t.ayaw),f=Math.cos(t.ayaw),h=c[0]*t.side;return o[0]=t.ax+h*f+c[2]*u,o[1]=c[1],o[2]=t.az-h*u+c[2]*f,o},t.start=c=>{let o=n.hero,u=n.crowd,[f,h,d]=pr(c,n.cam.yaw);d&&(o.yaw=Math.atan2(f,h)),t.active=!0,t.t=0,t.waveR=0,t.seq++,t.yaw0=t.ayaw=o.yaw,t.ax=o.x,t.az=o.z,s=o.musou,o.move=null,o.vx=o.vz=0,bi(o,"musou"),o.musouClip="mu_act",o.musouT=0,o.iframes=vn.end+30,n.freeze=2;let{r0:p,k:x}=vn.aura,_=p/(1-x);i.length=0;for(let g=0;g<u.N;g++){let A=u.st[g];if(A===Et.OFF||A===Et.DEAD||u.y[g]>.3)continue;let E=u.x[g]-o.x,m=u.z[g]-o.z,v=Math.hypot(E,m);if(v>=_||v<.001)continue;let y=(p+v*x)/v;i.push([g,u.x[g],u.z[g],o.x+E*y,o.z+m*y]),u.releaseToken(g),u.st[g]=Et.KNOCK,u.stT[g]=0,u.vx[g]=u.vz[g]=0}Pe("musou:start",{x:o.x,y:o.y,z:o.z,yaw:o.yaw,frame:n.frame,dur:vn.end,activation:vn.closeup,burstAt:vn.finisher,contact:vn.contact,pushed:i.length})};let r=(c,o,u,f,h,d)=>n.combat.strike(c,o,u,f,h-t.seq%1e3*1e5,d,"musou"),a=[0,0,0],l=[0,0,0];return t.stepHero=c=>{let o=n.hero,u=n.crowd,f=++t.t,h=vn;if(o.iframes=Math.max(o.iframes,2),o.vx=o.vz=0,o.musou=Math.max(0,s-o.musouMax*h.cost*Math.min(1,f/h.contact)),f<h.contact&&(n.freeze=Math.max(n.freeze,2)),f<=h.aura.frames){let A=qu(f/h.aura.frames);for(let[E,m,v,y,w]of i)u.st[E]===Et.KNOCK&&(u.x[E]=m+(y-m)*A,u.z[E]=v+(w-v)*A)}if(f<h.closeup){o.musouClip="mu_act",o.musouT=f/h.closeup;return}if(f<h.pullback){o.musouClip="mu_face",o.musouT=(f-h.closeup)/(h.pullback-h.closeup);return}if(f<h.chase){o.musouClip="mu_charge",o.musouT=(f-h.pullback)/(h.chase-h.pullback);return}if(f<h.contact){let[A,E,m]=pr(c,t.yaw0);m&&ko(o,Math.atan2(A,E),h.chaseTurn*Rd);let v=h.chaseSpeed*Math.min(1,(f-h.chase)/6);o.x+=Math.sin(o.yaw)*v*Rd,o.z+=Math.cos(o.yaw)*v*Rd,o.musouClip="mu_run",o.musouT=(f-h.chase)/17;return}if(f===h.contact){t.ax=o.x,t.az=o.z,t.ayaw=o.yaw,t.side=Math.abs(Pd(o.yaw+Cd-$u))>=Math.abs(Pd(o.yaw-Cd-$u))?1:-1;let A=r(h.contactHit,o.x,o.z,o.yaw,-2e3,!1)+r(h.backHit,o.x,o.z,o.yaw,-2e3,!1);Pe("musou:hit",{count:A,x:o.x+Math.sin(o.yaw)*2.5,y:1.3,z:o.z+Math.cos(o.yaw)*2.5,stage:"contact",yaw:o.yaw,n:0})}let d=f-h.contact,p=h.front;if(d>0&&d<=p.frames&&d%2===0){let A=p.r0+(p.r1-p.r0)*qu(d/p.frames),E=r({...h.contactHit,range:A,ang:p.ang,hitstop:0,force:5.5+A*.2,lift:7.4+A*.12},t.ax,t.az,t.ayaw,-2e3,!1);E&&Pe("musou:hit",{count:E,x:t.ax+Math.sin(t.ayaw)*A*.8,y:1.2,z:t.az+Math.cos(t.ayaw)*A*.8,stage:"front",yaw:t.ayaw,n:d})}let x=yw(f),_=h.rushDist*qu(Math.min(1,x/.6));if(o.x=t.ax+Math.sin(t.ayaw)*_,o.z=t.az+Math.cos(t.ayaw)*_,o.yaw=t.ayaw,f<h.finisher){o.musouClip="mu_rush",o.musouT=(f-h.contact)/(h.finisher-h.contact);let A=f-h.contact;if(t.toWorld(Vo(Dd(x),a),l),A>0&&A%2===0&&l[1]<4.2){let E=r(h.dragonHit,l[0],l[2],t.ayaw,-2100-f,!0);Pe("musou:hit",{count:E,x:l[0],y:l[1],z:l[2],stage:"dragon",yaw:t.ayaw,n:A})}if(A>0&&A%3===0){let E=r(h.heroHit,o.x,o.z,o.yaw,-2200-f,!0);Pe("musou:hit",{count:E,x:o.x,y:1.1,z:o.z,stage:"rush",yaw:o.yaw,n:A})}return}o.musouClip="mu_fin",o.musouT=(f-h.finisher)/(h.end-h.finisher);let g=f-h.finisher;if(g<=h.waveFrames){let A=g/h.waveFrames;t.waveR=h.waveR*(1-(1-A)*(1-A)*(1-A))+1;let E={...h.waveHit,range:t.waveR,lift:h.waveHit.lift-4*A,hitstop:g===0?4:0,heavy:g<2},m=r(E,o.x,o.z,o.yaw,-3e3,!1);if(g===0)Pe("musou:burst",{count:m,x:o.x,y:.2,z:o.z,frame:n.frame});else if(m){let v=g*2.4,y=t.waveR*.9;Pe("musou:hit",{count:m,x:o.x+Math.sin(v)*y,y:.4,z:o.z+Math.cos(v)*y,stage:"wave",yaw:v,n:g})}}f>=h.end&&(t.active=!1,o.musou=Math.max(0,s-o.musouMax*h.cost),o.iframes=30,bi(o,"idle"),Pe("musou:end",{frame:n.frame}))},t.shot=()=>{if(!t.active)return null;let c=t.t,o=vn,u=n.hero,f=e,h=(d,p,x)=>d+(p-d)*(x*x*(3-2*x));if(f.shake=.3,f.side=0,c<o.closeup){let d=c/o.closeup;Object.assign(f,{id:1,yaw:Xu(t.yaw0+Math.PI*.8),dist:4.1-.6*d,pitch:.36,fov:46,height:1,side:.1})}else if(c<o.chase){let d=Math.min(1,(c-o.closeup)/(o.pullback-o.closeup)),p=Math.max(0,(c-o.pullback)/(o.chase-o.pullback));Object.assign(f,{id:2,yaw:Xu(t.yaw0+Math.PI*.88),dist:h(1.85,1.6,d)+1.8*p*p,pitch:.16+.12*p,fov:32+10*p,height:1.52-.3*p,side:-.16*(1-p)})}else if(c<o.contact)Object.assign(f,{id:3,yaw:u.yaw,dist:2.7,pitch:.08,fov:54,height:.95});else if(c>=o.finisher-10){let d=W1((c-o.finisher+10)/(o.end-o.finisher+10));Object.assign(f,{id:4,yaw:Xu(t.ayaw+t.side*.32),dist:8.2+1.3*d,pitch:-.03+.07*d,fov:58-4*d,height:1.5+.3*d,side:0,shake:.6})}else{let d=c-o.contact,p=qu(Math.min(1,d/9)),x=W1((d-34)/22),_=t.side*Cd*p;Object.assign(f,{id:3,yaw:Xu(t.ayaw+_*(1-.2*x)),dist:2.7+2.5*p+.5*Math.min(1,d/40)+3*x,pitch:.08-.05*p+.12*x,fov:54+6*p,height:.95+.15*p+.5*x,side:t.side*1.5*p*(1-.8*x),shake:.5})}return f},t.ready=()=>n.hero.musou>=n.hero.musouMax*vn.cost-1e-6,t.step=()=>{let c=t.ready()&&n.hero.state!=="musou";c&&!t.wasReady&&Pe("musou:ready",{}),t.wasReady=c},t}var Da=new pe,is=new pe,jn=new je,vr=new q,Ge=new q,Oi=new q,Go=new q,Xs=new q,zi=new q,_r=new Qt,$s=new pe().makeScale(0,0,0),Zu=new q(0,1,0),ju=new q(0,0,1),Wo=n=>Math.min(1,Math.max(0,n)),dn=(n,t,e)=>Wo((n-t)/(e-t)),_w=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],Mw=[0,1.2,3.5],bw=[0,1.3,2.2],Sw="uniform float uDepth; varying vec2 vUv; void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, uDepth, 1.0); }";function ww(n,t,e,i){let s=new hn;s.setAttribute("position",new Ze([-1,-1,0,3,-1,0,-1,3,0],3));let r=new Re(s,new on({uniforms:t,vertexShader:Sw,fragmentShader:n,depthTest:!0,depthWrite:!1,transparent:!0,fog:!1,...e}));return r.frustumCulled=!1,r.renderOrder=i,r.visible=!1,r}function Nd(n=1,t=.42,e=.72,i=.86){let s=new Ln(1,1,1),r=s.attributes.normal,a=new Float32Array(r.count*3);for(let l=0;l<r.count;l++){let c=r.getY(l)>.5?n:r.getY(l)<-.5?t:Math.abs(r.getX(l))>.5?e:i;a[l*3]=a[l*3+1]=a[l*3+2]=c}return s.setAttribute("color",new fn(a,3)),s}function Ju(n,t,e,i){let s=new Vn(t,e,i);s.instanceMatrix.setUsage(Ci),s.frustumCulled=!1,s.visible=!1;for(let r=0;r<i;r++)s.setMatrixAt(r,$s),s.setColorAt(r,_r.setRGB(1,1,1));return n.add(s),s}var Ud={candle:{id:"candle",dim:[[232,164,132],[176,102,76],[124,56,40]],tint:[246,206,184],flash:"#fff3ea",wash:"rgba(255,244,232,1) 0%, rgba(255,196,150,.75) 30%, rgba(236,122,72,.35) 100%",rays:[1.3,.44,.14],light:16738870,serpLight:3,mote:[1.45,.5,.14],rib:[[1.6,.42,.1],[1.55,.82,.16],[1.2,.2,.08]],aura:[.95,.3,.08],ring:[1.5,.48,.11],chips:[[.56,.085,.03],[.62,.26,.05],[.4,.05,.02]],flat:1,scrap:0},coin:{id:"coin",dim:[[216,174,116],[158,108,60],[100,66,30]],tint:[240,214,172],flash:"#fffbea",wash:"rgba(255,251,236,1) 0%, rgba(255,232,166,.75) 30%, rgba(236,184,86,.35) 100%",rays:[1.3,.95,.38],light:16757828,serpLight:2.6,mote:[1.35,1,.4],rib:[[1.45,1.02,.3],[1.5,.72,.18],[1.35,1.2,.62]],aura:[.92,.68,.2],ring:[1.45,1.02,.3],chips:[[.4,.22,.04],[.55,.38,.1],[.26,.13,.03]],flat:.35,scrap:1}},Y1={NS:38,SP:.38,NECK:1.25,HEAD:2.2},Ew=[14,15,24,31],Jn={red:[.5,.06,.022],green:[.03,.2,.07],wick:[3.1,1.85,.4],wickG:[.05,.32,.1],hide:[.22,.028,.012],skull:[.36,.045,.018],brow:[.55,.08,.025],muzzle:[.12,.05,.035],eye:[3.2,2.2,.5],nostril:[.56,.12,.03],ring:[.9,.6,.14],horn0:[.45,.24,.05],horn1:[.9,.74,.4]};function Tw(){let n=[],t=[1],e=(a,l,c,o,u)=>n.push(Object.assign({seg:a,off:l,size:c,col:o},u)),{NS:i,SP:s}=Y1;for(let a=0;a<i;a++){let l=a<3?.86+a*.05:.3+.7*Math.pow(1-(a-3)/(i-3),.8),c=Ew.includes(a),o=l*(.45+.85*le(a,41)),u=l*(.2*Math.sin(a*.8+.6)+.18*(le(a,45)-.5)),f=l*(.1+.4*le(a,42)),h=l*(.08+.32*le(a,43)),d=.05+.035*l;e(a,[0,u,0],[.28+.3*l,o,s*(.5+.18*l)],c?Jn.green:Jn.red),e(a,[0,u+(f-h)/2,0],[d,o+f+h,d],c?Jn.wickG:Jn.wick),t.push(l)}let r=-1;e(r,[0,.02,-.46],[.62,.58,.5],Jn.hide),e(r,[0,.38,-.3],[.44,.14,.34],Jn.hide),e(r,[0,.08,-.04],[.62,.5,.56],Jn.skull),e(r,[0,.12,.25],[.56,.4,.1],Jn.brow),e(r,[0,.31,.06],[.3,.12,.26],Jn.hide),e(r,[0,0,.37],[.36,.12,.34],Jn.skull),e(r,[0,-.17,.42],[.46,.32,.42],Jn.muzzle),e(r,[0,-.36,.34],[.4,.1,.4],Jn.muzzle,{dyn:"jaw"});for(let a of[1,-1]){e(r,[a*.11,-.1,.635],[.07,.05,.04],Jn.nostril),e(r,[a*.27,.12,.27],[.1,.075,.1],Jn.eye),e(r,[a*.24,.21,.2],[.22,.06,.12],Jn.brow,{rz:a*.38}),e(r,[a*.42,.1,-.14],[.24,.07,.14],Jn.skull,{rz:-a*.4});let l=[[.26,.22,0],[.5,.29,.03],[.7,.39,.13],[.8,.53,.31],[.79,.65,.5],[.67,.72,.68]];for(let c=0;c<l.length-1;c++){let o=l[c],u=l[c+1],f=c/(l.length-2),h=.16-.1*f;e(r,[a*(o[0]+u[0])/2,(o[1]+u[1])/2,(o[2]+u[2])/2],[h,h,1.25*Math.hypot(u[0]-o[0],u[1]-o[1],u[2]-o[2])],_w(Jn.horn0,Jn.horn1,f),{dir:[a*(u[0]-o[0]),u[1]-o[1],u[2]-o[2]]})}}for(let a=0;a<6;a++){let l=a/6*Math.PI*2,c=.1;e(r,[0,-.25+c*Math.sin(l),.68+c*Math.cos(l)],[.035,.035,c*1.25],Jn.ring,{dir:[0,Math.cos(l),-Math.sin(l)]})}return{parts:n,g:t}}var K1={NS:16,SP:.8,NECK:1.75,HEAD:1.3},yr={face:[[.38,.2,.03],[.3,.15,.03],[.44,.27,.06]],rim:[[.26,.13,.03],[.2,.1,.025],[.32,.17,.04]],hFace:[.4,.22,.04],hRim:[.26,.13,.03],cream:[.5,.45,.36],rag:[.04,.17,.16],knot:[.028,.115,.115]};function $1(n,t,e,i,s,r){n(t,[0,0,0],[1.42,1.42,s],e,{rz:0,glint:1});for(let a=0;a<8;a++){let l=a*Math.PI/4;n(t,[.85*Math.cos(l),.85*Math.sin(l),0],[.83,.3,r],i,{rz:l+Math.PI/2})}}function Aw(){let n=[],t=[1],e=(c,o,u,f,h)=>n.push(Object.assign({seg:c,off:o,size:u,col:f},h)),{NS:i}=K1;for(let c=0;c<i;c++){let o=le(c,51),u=o<.2?1:o>.86?2:0;$1(e,c,yr.face[u],yr.rim[u],.12,.2),t.push(.62*(c<2?.92:.4+.55*Math.pow(1-(c-2)/(i-2),.8)))}let s=-1;$1(e,s,yr.hFace,yr.hRim,.2,.34);for(let c=0;c<8;c++){let o=c*Math.PI/4;e(s,[.6*Math.cos(o),.6*Math.sin(o),.11],[.5,.055,.04],yr.cream,{rz:o+Math.PI/2})}for(let[c,o,u,f]of[[-.22,.05,.16,.58],[.21,.05,.12,.58],[-.015,-.29,.57,.1],[-.02,-.38,.44,.08],[-.22,.37,.3,.07],[.21,.37,.26,.07]])e(s,[c,o,.135],[u,f,.07],yr.cream,{rz:0});let r=.5,a=.9*Math.cos(r),l=.9*Math.sin(r);return e(s,[a,l,0],[.34,.3,.46],yr.knot,{rz:r+Math.PI/2}),e(s,[a+.14,l-.36,.2],[.2,.6,.05],yr.rag,{dyn:"rag",pivot:[a+.06,l-.04,.2],ph:0}),e(s,[a+.3,l-.26,.2],[.15,.48,.05],yr.rag,{dyn:"rag",pivot:[a+.14,l,.2],ph:1.7}),{parts:n,R:t}}function Z1(n,t,e){let i=t.musou,s=t.hero,r=()=>new an({color:16777215,blending:ii,transparent:!0,depthWrite:!1,fog:!1}),a=Ud.candle,l={uC:{value:new xe(.5,.5)},uRays:{value:0},uTime:{value:0},uAspect:{value:16/9},uDepth:{value:-1},uCol:{value:new Qt(...a.rays)}},c=ww(`
    uniform vec2 uC; uniform float uRays, uTime, uAspect; uniform vec3 uCol; varying vec2 vUv;
    void main() {
      vec2 p = vUv - uC; p.x *= uAspect;
      float r = length(p), a = atan(p.y, p.x + 1e-5);                      // (pow bases clamped: pow(<0) is NaN \u2192 bloom smears it)
      float ray = pow(max(0.0, 0.5 + 0.5 * sin(a * 19.0 + uTime * 0.9)), 6.0) + 0.8 * pow(max(0.0, 0.5 + 0.5 * sin(a * 31.0 - uTime * 1.6 + 1.7)), 9.0)
                + 0.6 * pow(max(0.0, 0.5 + 0.5 * sin(a * 7.0 + 2.3 + uTime * 0.3)), 4.0);
      float core = exp(-r * r * 60.0);
      float rays = ray * smoothstep(0.05, 0.3, r) * (1.0 - 0.45 * clamp(r, 0.0, 1.0)) + core * 0.8;
      gl_FragColor = vec4(uCol * uRays * rays, 1.0);
    }`,l,{blending:ii},1000001);n.add(c);let o=F=>{let X=document.createElement("div");return X.style.cssText=`position:fixed;inset:0;pointer-events:none;opacity:0;mix-blend-mode:${F}`,X},u=o("multiply"),f=o("screen");(document.getElementById("c")||document.body.firstChild).after(u,f);let h=220,d=72,p=48,x=144,_=h,g=h+d,A=g+p,E=Ju(n,new Ln(1,1,1),Object.assign(r(),{depthWrite:!0}),A+x),m=new an({vertexColors:!0,fog:!1}),v=700,y={m:Ju(n,Nd(),m,v),next:0,x:new Float32Array(v*3),v:new Float32Array(v*3),life:new Float32Array(v),max:new Float32Array(v),size:new Float32Array(v),rot:new Float32Array(v),flat:new Float32Array(v)},w=(F,X,G,lt,Bt,Gt,N,k,nt,Q,Ft,It=1)=>{let Mt=y.next;y.next=(y.next+1)%v,y.x[Mt*3]=F,y.x[Mt*3+1]=X,y.x[Mt*3+2]=G,y.v[Mt*3]=lt,y.v[Mt*3+1]=Bt,y.v[Mt*3+2]=Gt,y.life[Mt]=y.max[Mt]=N,y.size[Mt]=k,y.rot[Mt]=_t.range(0,6.3),y.flat[Mt]=It,y.m.setColorAt(Mt,_r.setRGB(nt,Q,Ft)),y.m.instanceColor.needsUpdate=!0,y.m.visible=!0},M=(F,X,G,lt,Bt,Gt,N,k)=>{let nt=_t.next(),Q=a.chips[nt<.58?0:nt<.86?1:2],Ft=_t.range(.88,1.1);w(F,X,G,lt,Bt,Gt,N,k,Q[0]*Ft,Q[1]*Ft,Q[2]*Ft,a.flat)},S=(F,X,G,lt,Bt,Gt,N)=>{for(let k=0;k<lt;k++){let nt=_t.range(0,6.283),Q=Bt*_t.range(.3,1);M(F,X,G,Math.cos(nt)*Q,_t.range(.2,1)*Gt,Math.sin(nt)*Q,_t.range(.35,.8),N*_t.range(.5,1.3))}},P=64,C={m:Ju(n,new Ln(1,1,1),new Qe({color:16777215,roughness:.55,metalness:.25,flatShading:!0}),P),next:0,x:new Float32Array(P*3),v:new Float32Array(P*3),size:new Float32Array(P*3),life:new Float32Array(P),rot:new Float32Array(P),spin:new Float32Array(P)},z=(F,X,G,lt,Bt,Gt,N)=>{let k=C.next,nt=k*3;C.next=(C.next+1)%P,C.x[nt]=F,C.x[nt+1]=X,C.x[nt+2]=G,C.v[nt]=lt,C.v[nt+1]=Bt,C.v[nt+2]=Gt;let Q=_t.chance(.6);C.size[nt]=N*_t.range(.8,1.5),C.size[nt+1]=N*(Q?_t.range(.18,.35):_t.range(.6,1)),C.size[nt+2]=N*_t.range(.6,1.2),C.life[k]=_t.range(.9,1.5),C.rot[k]=_t.range(0,6.3),C.spin[k]=_t.range(6,14);let Ft=_t.range(.3,.52);C.m.setColorAt(k,_r.setRGB(Ft,Ft*.97,Ft*.93)),C.m.instanceColor.needsUpdate=!0,C.m.visible=!0},U=(F,X,G,lt,Bt,Gt)=>{for(let N=0;N<lt;N++){let k=_t.range(0,6.283),nt=Bt*_t.range(.4,1);z(F,X,G,Math.cos(k)*nt,_t.range(.4,1)*Gt,Math.sin(k)*nt,_t.range(.1,.2))}},V=F=>(F.rz!==void 0?jn.setFromAxisAngle(ju,F.rz):jn.setFromUnitVectors(ju,F.dir?zi.set(F.dir[0],F.dir[1],F.dir[2]).normalize():ju),new pe().compose(Ge.set(F.off[0],F.off[1],F.off[2]),jn,vr.set(F.size[0],F.size[1],F.size[2])));function Y(F,X,G){let{parts:lt}=X,Bt=Ju(n,G,m,lt.length);lt.forEach((N,k)=>Bt.setColorAt(k,_r.setRGB(N.col[0],N.col[1],N.col[2]))),Bt.instanceColor.needsUpdate=!0;let Gt=Object.assign({mesh:Bt,parts:lt,local:lt.map(V),head:new q,bases:Array.from({length:F.NS+1},()=>new pe),vis:new Uint8Array(F.NS+1),born:new Uint8Array(F.NS+1)},F,X);return Gt.glints=[],lt.forEach((N,k)=>{N.glint&&N.seg>=0&&Gt.glints.push({i:k,j:N.seg+1,col:N.col})}),Gt}let ct={candle:Y({id:"candle",...Y1},Tw(),Nd(1,.6,.84,.92)),coin:Y({id:"coin",...K1},Aw(),Nd(1,.42,.72,.86))},T=[ct.candle,ct.coin],L=ct.candle,D=[0,0,0],B=[0,0,0],b=[0,0,0],j=[0,0,0],it=new pa(a.light,0,20,1.4);n.add(it);let J=document.createElement("style");J.textContent=`
    .mu-cut { position: fixed; inset: 0; pointer-events: none; z-index: 5; opacity: 0; display: none; --u: min(1vh, .5625vw); }
    .mu-cut .card { position: absolute; left: 5vw; bottom: 25vh; }
    .mu-cut .who { font: 900 calc(3.4 * var(--u))/1 "G6Display", "Arial Narrow", sans-serif; letter-spacing: .32em; color: var(--light);
      margin: 0 0 calc(.9 * var(--u)) calc(.3 * var(--u));
      text-shadow: .12em .12em 0 var(--ink), -.06em .12em 0 var(--ink), .12em -.06em 0 var(--ink), -.06em -.06em 0 var(--ink), .2em .24em 0 var(--ink); }
    .mu-cut .who i { display: inline-block; width: calc(4.4 * var(--u)); height: calc(.8 * var(--u)); margin-right: calc(1.2 * var(--u));
      vertical-align: calc(.8 * var(--u)); background: var(--main); transform: skewX(-30deg); box-shadow: calc(.3 * var(--u)) calc(.35 * var(--u)) 0 var(--ink); }
    .mu-cut .title { position: relative; isolation: isolate; white-space: nowrap; letter-spacing: .01em; transform-origin: 0 85%;
      font: 900 calc(9.8 * var(--u))/.9 "G6Display", "Arial Narrow", sans-serif; }
    .mu-cut .title span { color: transparent; background: linear-gradient(#fffdf6 0 42%, var(--light)); -webkit-background-clip: text; background-clip: text; }
    .mu-cut .title::before, .mu-cut .title::after { content: attr(data-t); position: absolute; left: 0; top: 0; }
    .mu-cut .title::before { z-index: -1; color: var(--ink); -webkit-text-stroke: .15em var(--ink); }
    .mu-cut .title::after { z-index: -2; color: var(--main); -webkit-text-stroke: .15em var(--main); transform: translate(.07em, .085em);
      text-shadow: 0 0 .45em var(--glow); }
    .mu-cut .bar { height: calc(1.1 * var(--u)); margin: calc(1.5 * var(--u)) 0 0 calc(.4 * var(--u)); transform-origin: 0 50%;
      background: linear-gradient(90deg, var(--main) 0 55%, transparent); }`,document.head.appendChild(J);let vt={},Nt=[];for(let F of ms){let X=un[F],G=(X.musou&&X.musou.rgb||[1,1,1]).map(Q=>Math.round(Wo(Q)*255)).join(","),lt=document.createElement("div"),Bt=document.createElement("div"),Gt=document.createElement("div"),N=document.createElement("div"),k=document.createElement("span"),nt=document.createElement("div");lt.className="mu-cut",Bt.className="card",Gt.className="who",N.className="title",nt.className="bar",lt.style.cssText=`--main:${X.ui.main};--light:${X.ui.light};--ink:${X.ui.ink};--glow:rgba(${G},.55)`,Gt.append(document.createElement("i"),X.name.toUpperCase()),N.dataset.t=k.textContent=X.musou.name.toUpperCase(),N.append(k),Bt.append(Gt,N,nt),lt.append(Bt),document.body.appendChild(lt),Nt.push(vt[F]={el:lt,who:Gt,title:N,bar:nt})}let Z=Nt[0];try{document.fonts.load("900 64px G6Display").catch(()=>{})}catch{}let at=(F,X,G)=>{F.style[X]!==G&&(F.style[X]=G)},pt=(F,X)=>{at(F,"display",X>0?"block":"none"),at(F,"opacity",X.toFixed(3))};function zt(){let F=Si(t),X=Ud[F.musou&&F.musou.theme]||Ud.candle;L!==ct[X.id]&&(L.mesh.visible=!1),a=X,L=ct[X.id],l.uCol.value.setRGB(a.rays[0],a.rays[1],a.rays[2]),it.color.setHex(a.light);let G=vt[F.id]||Nt[0];G!==Z&&(pt(Z.el,0),Z=G)}zt();let gt=-1,Ut=0,ie=0,rt=0,Rt=-99,Ct=-99;oe("fighter",()=>{gt<0&&zt()}),oe("musou:start",F=>{zt(),gt=0,ie=F.x,rt=F.z}),oe("musou:hit",F=>{F.stage==="contact"&&(Rt=t.frame,S(F.x,F.y,F.z,45,11,7,.12),a.scrap&&U(F.x,F.y,F.z,6,8,6))}),oe("musou:burst",F=>{Ct=t.frame,S(F.x,.6,F.z,30,18,9,.12),a.scrap&&U(F.x,.8,F.z,8,10,7)}),oe("ko",F=>{if(i.active)for(let X=0;X<2;X++)M(F.x,F.y,F.z,F.dx*5+_t.range(-2,2),_t.range(2,7),F.dz*5+_t.range(-2,2),_t.range(.3,.55),_t.range(.08,.14))}),oe("scenario",()=>{gt=-1,y.life.fill(0),C.life.fill(0);for(let F=0;F<v;F++)y.m.setMatrixAt(F,$s);for(let F=0;F<P;F++)C.m.setMatrixAt(F,$s);y.m.instanceMatrix.needsUpdate=C.m.instanceMatrix.needsUpdate=!0});function Ot(){c.visible=E.visible=!1;for(let F=0;F<T.length;F++)T[F].mesh.visible=!1;it.intensity=0;for(let F=0;F<Nt.length;F++)pt(Nt[F].el,0);pt(u,0),pt(f,0)}function Ht(F){let X=!1;for(let G=0;G<v;G++){if(y.life[G]<=0)continue;if(y.life[G]-=F,y.life[G]<=0){y.m.setMatrixAt(G,$s);continue}X=!0;let lt=G*3,Bt=Math.max(0,1-2.2*F);y.v[lt+1]-=6*F,y.v[lt]*=Bt,y.v[lt+2]*=Bt,y.x[lt]+=y.v[lt]*F,y.x[lt+1]=Math.max(.05,y.x[lt+1]+y.v[lt+1]*F),y.x[lt+2]+=y.v[lt+2]*F,y.rot[G]+=F*9;let Gt=y.size[G]*Math.min(1,y.life[G]/y.max[G]*2.5);jn.setFromAxisAngle(zi.set(.5,1,.3).normalize(),y.rot[G]),y.m.setMatrixAt(G,Da.compose(Ge.set(y.x[lt],y.x[lt+1],y.x[lt+2]),jn,vr.set(Gt,Gt*y.flat[G],Gt)))}y.m.instanceMatrix.needsUpdate=!0,X||(y.m.visible=!1)}function yt(F){let X=!1;for(let G=0;G<P;G++){if(C.life[G]<=0)continue;if(C.life[G]-=F,C.life[G]<=0){C.m.setMatrixAt(G,$s);continue}X=!0;let lt=G*3,Bt=C.size[lt+1]*.5,Gt=Math.max(0,1-.6*F);C.v[lt+1]-=9.8*F,C.v[lt]*=Gt,C.v[lt+2]*=Gt,C.x[lt]+=C.v[lt]*F,C.x[lt+1]+=C.v[lt+1]*F,C.x[lt+2]+=C.v[lt+2]*F,C.x[lt+1]<Bt&&(C.x[lt+1]=Bt,C.v[lt+1]<0&&(C.v[lt+1]*=-.3),C.v[lt]*=.6,C.v[lt+2]*=.6,C.spin[G]*=.5),C.rot[G]+=F*C.spin[G];let N=Math.min(1,C.life[G]/.25);jn.setFromAxisAngle(zi.set(le(G,61)-.5,1,le(G,62)-.5).normalize(),C.rot[G]),C.m.setMatrixAt(G,Da.compose(Ge.set(C.x[lt],C.x[lt+1],C.x[lt+2]),jn,vr.set(C.size[lt]*N,C.size[lt+1]*N,C.size[lt+2]*N)))}C.m.instanceMatrix.needsUpdate=!0,X||(C.m.visible=!1)}function ne(F,X,G){i.toWorld(Vo(F,D),b),i.toWorld(Vo(F+.08,B),j),Xs.set(j[0]-b[0],j[1]-b[1],j[2]-b[2]).normalize(),i.toWorld(Vo(F-.08,B),j),Xs.add(zi.set(b[0]-j[0],b[1]-j[1],b[2]-j[2]).normalize()).normalize(),Oi.crossVectors(Zu,Xs),Oi.lengthSq()<1e-6&&Oi.set(1,0,0),Oi.normalize(),Go.crossVectors(Xs,Oi);let lt=Math.cos(X),Bt=Math.sin(X);zi.copy(Oi).multiplyScalar(lt).addScaledVector(Go,Bt),Go.multiplyScalar(lt).addScaledVector(Oi,-Bt),Oi.copy(zi),G.makeBasis(Oi,Go,Xs).setPosition(b[0],b[1],b[2])}function ft(F,X,G,lt,Bt){if(F.id==="candle"){ne(G,X?Math.sin(X*.45-Ut*9)*.16:0,Bt),X?Bt.multiply(is.makeTranslation(0,.13*F.g[X]*Math.sin(Ut*13-X*.55),0)):Bt.multiply(is.makeRotationX(.22)).multiply(is.makeScale(lt,lt,lt));return}if(!X){i.toWorld(Vo(G,D),b);let nt=e.position;Xs.set(nt.x-b[0],nt.y-b[1],nt.z-b[2]).normalize(),Oi.crossVectors(Zu,Xs),Oi.lengthSq()<1e-6&&Oi.set(1,0,0),Oi.normalize(),Go.crossVectors(Xs,Oi),Bt.makeBasis(Oi,Go,Xs).setPosition(b[0],b[1],b[2]),Bt.multiply(is.makeRotationY(.38+.12*Math.sin(Ut*4.3))).multiply(is.makeRotationZ(.2*Math.sin(Ut*6.1))).multiply(is.makeScale(lt,lt,lt));return}ne(G,0,Bt);let Gt=X-1,N=F.R[X],k=Gt*2.4+Ut*7.5;Bt.multiply(is.makeTranslation(.36*N*Math.cos(k),.36*N*Math.sin(k),0)),Bt.multiply(is.makeRotationZ(.55*Math.sin(Gt*1.9+Ut*3))),Bt.multiply(is.makeRotationY(Math.PI/2+.95*Math.sin(Ut*5.2+Gt*1.3))),Bt.multiply(is.makeRotationZ(Gt-G/N)),Bt.multiply(is.makeScale(N,N,N))}function Se(F,X){let G=L,lt=(F-vn.contact)/60;if(lt<0||lt>1.2){G.mesh.visible=!1,G.headOn=0;return}G.mesh.visible=!0;let Bt=Dd(lt),Gt=G.NS,N=dn(lt,1,(vn.end-vn.contact)/60),k=Math.round((Gt+1)*(1-N)),nt=G.HEAD*(.5+.5*dn(lt,.04,.22));for(let st=0;st<=Gt;st++){let K=st?Bt-G.NECK-(st-1)*G.SP:Bt;G.born[st]=K>=0,G.vis[st]=G.born[st]&&st<k,G.born[st]&&ft(G,st,K,nt,G.bases[st])}G.headOn=G.vis[0],G.head.setFromMatrixPosition(G.bases[0]),G.head.y+=.6;let Q=G.id==="coin",Ft=Math.round(X*60*7);for(let st=0;st<Ft;st++){let K=_t.int(0,Gt);if(!G.vis[K])continue;Ge.setFromMatrixPosition(G.bases[K]);let xt=Q?K?G.R[K]:1:.3;if(Q&&_t.chance(.08)){z(Ge.x,Ge.y,Ge.z,_t.range(-2,2),_t.range(0,2),_t.range(-2,2),_t.range(.07,.14));continue}M(Ge.x+_t.range(-xt,xt),Ge.y+_t.range(-xt,xt),Ge.z+_t.range(-xt,xt),_t.range(-1,1),_t.range(0,1.5),_t.range(-1,1),_t.range(.25,.55),_t.range(.04,.1)*(Q?1.3:1))}if(N>0){for(let st=k;st<Math.min(Gt+1,k+3);st++)if(G.born[st]){Ge.setFromMatrixPosition(G.bases[st]);for(let K=0;K<2;K++)M(Ge.x,Ge.y,Ge.z,_t.range(-4,4),_t.range(0,5),_t.range(-4,4),_t.range(.3,.55),_t.range(.08,.16));Q&&_t.chance(.5)&&z(Ge.x,Ge.y,Ge.z,_t.range(-3,3),_t.range(1,4),_t.range(-3,3),_t.range(.08,.16))}}let It=.18+.22*Math.max(0,Math.sin(Ut*7)),{parts:Mt,local:I,mesh:tt}=G;for(let st=0;st<Mt.length;st++){let K=Mt[st],xt=K.seg+1;if(!G.vis[xt]){tt.setMatrixAt(st,$s);continue}let Vt=I[st];K.dyn==="jaw"?(jn.setFromAxisAngle(zi.set(1,0,0),It),Vt=is.compose(Ge.set(K.off[0],K.off[1]-It*.12,K.off[2]),jn,vr.set(K.size[0],K.size[1],K.size[2]))):K.dyn==="rag"&&(jn.setFromAxisAngle(ju,.2+.28*Math.sin(Ut*9+K.ph)),Ge.set(K.off[0]-K.pivot[0],K.off[1]-K.pivot[1],K.off[2]-K.pivot[2]).applyQuaternion(jn).add(zi.set(K.pivot[0],K.pivot[1],K.pivot[2])),Vt=is.compose(Ge,jn,vr.set(K.size[0],K.size[1],K.size[2]))),tt.setMatrixAt(st,Da.multiplyMatrices(G.bases[xt],Vt))}if(tt.instanceMatrix.needsUpdate=!0,G.glints.length){let st=e.position;for(let K=0;K<G.glints.length;K++){let xt=G.glints[K];if(!G.vis[xt.j])continue;let Vt=G.bases[xt.j];Ge.setFromMatrixPosition(Vt),zi.set(st.x-Ge.x,st.y-Ge.y,st.z-Ge.z).normalize().add(On).normalize();let kt=1+2*Math.pow(Math.abs(Xs.setFromMatrixColumn(Vt,2).normalize().dot(zi)),48);tt.setColorAt(xt.i,_r.setRGB(xt.col[0]*kt,xt.col[1]*kt,xt.col[2]*kt))}tt.instanceColor.needsUpdate=!0}}let et=(F,X,G)=>{let lt=e.position;return Math.hypot(F-lt.x,X-lt.y,G-lt.z)},be=(F,X,G)=>dn(et(F,X,G),.9,2.2);function ye(F){let X=vn,G=a,lt=!1,Bt=F>=X.closeup&&F<X.chase?0:dn(F,1,5)*(1-dn(F,X.chase+4,X.chase+20)),Gt=dn(F,X.chase,X.chase+6)*7,N=e.position,k=s.yaw,nt=F<X.chase;for(let xt=0;xt<h;xt++){if(Bt<=0){E.setMatrixAt(xt,$s);continue}let Vt=.6+7.5*Math.pow(le(xt,11),1.6),kt=le(xt,12)*6.283,Zt=(le(xt,13)*3.8+Ut*(.12+.1*le(xt,14)))%3.8+.1,Xt=ie+Math.cos(kt)*Vt+Math.sin(Ut*.7+xt)*.15,se=rt+Math.sin(kt)*Vt,ce=(nt?.018+.012*le(xt,15):.025+.03*le(xt,15))*Bt*dn(et(Xt,Zt,se),2.5,4.5);jn.setFromAxisAngle(Zu,k),E.setMatrixAt(xt,Da.compose(Ge.set(Xt,Zt,se),jn,vr.set(ce,ce,ce*(1+Gt))));let de=nt?.55+.25*le(xt,16):.6+.7*le(xt,16);E.setColorAt(xt,_r.setRGB(G.mote[0]*de,G.mote[1]*de,G.mote[2]*de)),lt=!0}let Q=dn(F,2,8)*(1-dn(F,X.closeup-6,X.closeup));for(let xt=0;xt<d;xt++){let Vt=xt%3,kt=xt/3|0,Zt=(kt/24+Ut*.7)%1;if(Q<=0){E.setMatrixAt(_+xt,$s);continue}let Xt=Vt*2.094+Zt*7+Ut*2.5,se=.8-.25*Zt,ce=s.x+Math.cos(Xt)*se,de=.1+Zt*2.6,Jt=s.z+Math.sin(Xt)*se,me=.036*Q*(1-Zt*.6)*be(ce,de,Jt);E.setMatrixAt(_+xt,Da.compose(Ge.set(ce,de,Jt),jn.identity(),vr.set(me,me*3.2,me)));let he=.62*(1.2-Zt),qe=G.rib[Vt];E.setColorAt(_+xt,_r.setRGB(qe[0]*he,qe[1]*he,qe[2]*he)),lt=!0}let Ft=dn(F,X.closeup,X.closeup+3)*(1-dn(F,X.pullback+4,X.chase)),It=Math.floor(F/2);for(let xt=0;xt<p;xt++){if(!(Ft>0&&le(xt,It,3)<.55)){E.setMatrixAt(g+xt,$s);continue}let kt=xt%2?1:-1,Zt=Math.atan2(N.x-s.x,N.z-s.z)+kt*Math.PI*(.46+.14*le(xt,It,4)),Xt=1.05+le(xt,It,5)*.95,se=(Xt>1.75?.12:.34)+le(xt,It,6)*.22,ce=s.x+Math.sin(Zt)*se,de=s.z+Math.cos(Zt)*se,Jt=(.008+.008*le(xt,It,7))*be(ce,Xt,de);jn.setFromAxisAngle(zi.set(Math.sin(Zt+1.571),(le(xt,It,8)-.5)*.6,Math.cos(Zt+1.571)).normalize(),(le(xt,It,9)-.5)*2.4),E.setMatrixAt(g+xt,Da.compose(Ge.set(ce,Xt,de),jn,vr.set(Jt,Jt*(5+8*le(xt,It,10)),Jt)));let me=.85+.3*le(xt,It,11);E.setColorAt(g+xt,_r.setRGB(G.aura[0]*me,G.aura[1]*me,G.aura[2]*me)),lt=!0}let Mt=F-X.finisher,I=Mt>=0?1-dn(Mt,X.waveFrames*.7,X.waveFrames+10):0,tt=i.waveR||1,st=6.283*tt/x*1.15,K=Math.floor(F/2);for(let xt=0;xt<x;xt++){if(I<=0){E.setMatrixAt(A+xt,$s);continue}let Vt=xt/x*6.283,kt=s.x+Math.cos(Vt)*tt,Zt=s.z+Math.sin(Vt)*tt,Xt=dn(Math.hypot(kt-N.x,Zt-N.z),2.5,6),se=.78+.16*(le(xt,K,22)-.5)+.1*Math.sin(Vt*7+F*.5);jn.setFromAxisAngle(Zu,-Vt),E.setMatrixAt(A+xt,Da.compose(Ge.set(kt,se,Zt),jn,vr.set(.09*Xt,.09*Xt,st*Xt)));let ce=I*(.35+.65*dn(tt,2,7))*(.75+.5*le(xt,K,23));E.setColorAt(A+xt,_r.setRGB(G.ring[0]*ce,G.ring[1]*ce,G.ring[2]*ce)),lt=!0}E.visible=lt,E.instanceMatrix.needsUpdate=!0,E.instanceColor&&(E.instanceColor.needsUpdate=!0)}let H=0,R=0,dt=(F,X)=>Math.round(255*(1-H*(1-F/255))*(1-R*(1-X/255))),ot=F=>`rgb(${dt(F[0],a.tint[0])},${dt(F[1],a.tint[1])},${dt(F[2],a.tint[2])})`,W=[255,255,255];function bt(F){let X=vn;if(H=(F<1?.45:F<2?.8:1)*(1-dn(F,X.chase+4,X.contact)),R=.45*dn(F,X.chase+4,X.contact)*(1-dn(F,X.contact+8,X.contact+30)),pt(u,H+R>.003?1:0),H>.003){Ge.set(s.x,F<X.closeup?1.1:1.5,s.z).project(e);let st=(Wo(Ge.x*.5+.5)*100).toFixed(1),K=((1-Wo(Ge.y*.5+.5))*100).toFixed(1);at(u,"background",`radial-gradient(ellipse 30% 58% at ${st}% ${K}%, ${ot(a.dim[0])} 0%, ${ot(a.dim[1])} 55%, ${ot(a.dim[2])} 100%)`)}else R>.003&&at(u,"background",ot(W));let G=F-X.contact,lt=F-X.finisher,Bt=t.frame-Rt<2,Gt=t.frame-Ct<2,N=G>=0&&Bt?.35:0,k=lt>=0&&Gt?.3:0,nt=F<1?.09:0,Q=Math.max(nt,N,k);lt>=0?Ge.set(s.x,1.4,s.z):(i.toWorld(bw,b),Ge.set(b[0],b[1],b[2])),Ge.project(e);let Ft=Wo(Ge.x*.5+.5),It=Wo(Ge.y*.5+.5);pt(f,Q),Q>0&&at(f,"background",nt?a.flash:`radial-gradient(ellipse at ${(Ft*100).toFixed(1)}% ${((1-It)*100).toFixed(1)}%, ${a.wash})`);let Mt=l;Mt.uRays.value=G>=0?.1*(1-dn(G,4,28)):0,c.visible=Mt.uRays.value>.002,c.visible&&(Mt.uC.value.set(Ft,It),Mt.uAspect.value=e.aspect,Mt.uTime.value=Ut,e.getWorldDirection(zi),Ge.set(b[0],b[1],b[2]).addScaledVector(zi,3.5).project(e),Mt.uDepth.value=Math.min(.99999,Ge.z));let I=G>=0&&lt<0?1-dn(G,2,16):0,tt=L.headOn?dn(G,3,12)*(1-dn(G,vn.end-vn.contact-8,vn.end-vn.contact)):0;it.intensity=Math.max(5*I,a.serpLight*tt),it.intensity>0&&(i.toWorld(Mw,b),zi.set(b[0],b[1],b[2]),it.position.lerpVectors(zi,e.position,.3),it.position.y=3.2,tt>0&&it.position.lerp(L.head,dn(G,6,16)))}function At(F){let X=vn,G=Z,lt=dn(F,X.closeup,X.closeup+4)*(1-dn(F,X.pullback+2,X.pullback+10));if(pt(G.el,lt),lt<=0)return;let Bt=F-X.closeup,Gt=dn(Bt,0,5),N=dn(Bt,5,11),k=dn(Bt,3,12);at(G.title,"transform",`translateX(${(-.035*Bt).toFixed(2)}vw) scale(${(1.5-.5*Gt*Gt).toFixed(3)}) skewX(-7deg)`),at(G.who,"opacity",N.toFixed(3)),at(G.who,"transform",`translateX(${(-3*(1-N)*(1-N)).toFixed(2)}vw)`),at(G.bar,"transform",`skewX(-35deg) scaleX(${k.toFixed(3)})`)}let ut=2,mt=!1;return{update(F){if(Ut+=F,ut>0&&gt<0){ut--,l.uRays.value=0,c.visible=E.visible=y.m.visible=C.m.visible=!0;for(let X=0;X<T.length;X++)T[X].mesh.visible=!0;return}if(i.active?gt=i.t:gt>=0&&(gt+=F*60,gt>vn.end+50&&(gt=-1)),y.m.visible&&Ht(F),C.m.visible&&yt(F),gt<0){mt||Ot(),mt=!0;return}mt=!1,Se(gt,F),bt(gt),ye(gt),At(gt)}}}var ol=Math.PI/180,kd=.45,Ce={dist:10.2,height:1.35,pitch:17.5*ol,fov:46,zoom:1,follow:18,followY:20,airLift:.7,airTilt:.03,yawLerp:12,drift:1.1,driftMax:1.2,fightDrift:.7,fightMax:.6,seekR:10,seekShare:.35,seekShareLost:.08,seekIn:30*ol,seekMax:.6,seekAcc:1.2,seekBrake:5,seekCool:45,seekW:[2.5,5],lookHold:150,lockTol:.35,crowdR:10,crowdPull:.12,crowdPitch:-2.5*ol,biasR:8,biasMax:.18,leadYMax:2,leadYRate:45,cutR:.62,cutEdgePx:5,kickMaxPx:4,cutJump:40},Mr=n=>Math.atan2(Math.sin(n),Math.cos(n)),ll=(n,t,e)=>n<t?t:n>e?e:n,cl=(n,t,e)=>{let i=ll((e-n)/(t-n),0,1);return i*i*(3-2*i)},j1=(n,t,e,i)=>n.set(-Math.sin(t)*Math.cos(e)*i,Math.sin(e)*i,-Math.cos(t)*Math.cos(e)*i),Ys=24,Od=2*Math.PI/Ys,zd=new Float64Array(Ys);function Rw(n,t){let e=n.crowd,i=n.hero,s=Ce.seekR,r=0;zd.fill(0);for(let u=0;u<e.N;u++){let f=e.st[u];if(f===Et.OFF||f===Et.DEAD||f===Et.DOWN)continue;let h=e.x[u]-i.x,d=e.z[u]-i.z;if(h>s||h<-s||d>s||d<-s)continue;let p=Math.sqrt(h*h+d*d);if(p>=s)continue;let x=(1-p/s)*(e.type[u]?4:1);zd[(Math.round(Mr(Math.atan2(h,d)-t)/Od)+Ys)%Ys]+=x,r+=x}let a=0,l=0,c=0,o=u=>{let f=0;for(let h=-3;h<=3;h++)f+=zd[(u+h+Ys)%Ys]*(h===3||h===-3?.5:1);return f};for(let u=0;u<Ys;u++)a=Math.max(a,o(u));l=o(0);for(let u=0;u<=Ys/2;u++){if(o(u)>=.85*a){c=u*Od;break}if(o((Ys-u)%Ys)>=.85*a){c=-u*Od;break}}return[r,l,a,c]}function J1(){let n={yaw:0,ctrl:0,manualT:0,lockAng:null,hx:null,hz:null,look:!1,eng:!1,seek:!1,seekTo:0,seekV:0,seekCd:0};return n.reset=(t=0)=>{n.yaw=n.ctrl=t,n.manualT=0,n.lockAng=null,n.hx=n.hz=null,n.look=!1,n.eng=n.seek=!1,n.seekTo=n.seekV=n.seekCd=0},n.step=(t,e)=>{let i=t.hero,s=Math.hypot(e.mx,e.my)>=.1,r=n.hx==null?0:Math.hypot(i.x-n.hx,i.z-n.hz)*60;if(n.hx=i.x,n.hz=i.z,(i.state==="run"||i.state==="dodge"||i.state==="jump")&&(n.look=!1),(e.pressed.attack||e.pressed.charge)&&(n.eng=!s),n.seekCd>0&&n.seekCd--,e.orbit)n.yaw+=e.orbit,n.ctrl+=e.orbit,n.manualT=90,n.look=!0,n.seek=!1,n.seekV=0,n.seekCd=Ce.lookHold;else if(n.manualT>0)n.manualT--;else if(i.state==="musou")n.yaw+=Mr(i.yaw-n.yaw)*.08,n.seek=!1,n.seekV=0;else{let c=i.state==="attack"&&!n.look,[o,u,f,h]=c?Rw(t,n.yaw):[0,0,0,0],d=cl(Ce.seekW[0],Ce.seekW[1],o),p=u<(n.eng&&!s?Ce.seekShare:Ce.seekShareLost)*f;!n.seek&&c&&!n.seekCd&&d>.5&&p&&Math.abs(h)>=Ce.seekIn&&r<4&&(n.seek=!0,n.seekTo=Mr(n.yaw+h));let x=0,_=Ce.seekBrake;if(n.seek){let g=Mr(n.seekTo-n.yaw);!c||Math.abs(g)<.01&&Math.abs(n.seekV)<.15?(n.seek=!1,n.seekCd=Ce.seekCool):(x=Math.sign(g)*Math.min(Ce.seekMax,Math.sqrt(2*Ce.seekAcc*Math.abs(g))),_=Ce.seekAcc)}if(n.seekV+=ll(x-n.seekV,-_/60,_/60),n.yaw+=n.seekV/60,i.state==="run"||i.state==="attack"&&!n.look){let g=i.state==="run",A=Mr(i.yaw-n.yaw),E=cl(2.6,2,Math.abs(A))*(g?Math.min(1,i.speed/5):1-d),m=g?Ce.driftMax:Ce.fightMax;n.yaw+=ll(A*(g?Ce.drift:Ce.fightDrift),-m,m)*E/60}}n.yaw=Mr(n.yaw);let a=s?Math.atan2(e.mx,e.my):0;(!s||n.lockAng===null||Math.abs(Mr(a-n.lockAng))>Ce.lockTol)&&(n.ctrl=n.yaw,n.lockAng=s?a:null);let l=Mr(n.yaw-n.ctrl);if(s&&l){let c=Math.cos(l),o=Math.sin(l),u=e.mx,f=e.my;e.mx=u*c+f*o,e.my=f*c-u*o}},n}function Q1(n,t,e){let i=new ai(Ce.fov,t/e,.1,1200),s=new q,r=new q,a=new q,l=0,c=!0,o=0,u=!1,f=null,h=0,d=0,p=0,x=e,_=0,g=0,A=new q,E=[],m=(w,M,S,P)=>{let C=E[E.length-1];C&&n.frame-C.f<3&&C.px>=w||(E.push({f:n.frame,px:w,dirX:M,dirY:S,len:P}),E.length>4&&E.shift())};oe("hits",w=>{w.heavy&&m(Math.min(3,1.6+w.count*.12),.25,1,6)}),oe("hero:hurt",w=>m(w.armored?.6:1.5,1,.3,w.armored?4:6)),oe("land",w=>w.hard&&m(2,0,1,6)),oe("musou:burst",()=>m(4,.3,1,10)),oe("musou:start",w=>{f={kind:"musou",start:n.frame,act:w.activation,burst:w.burstAt,dur:w.dur,yaw:w.yaw,phase:-1}}),oe("musou:end",()=>{f=null,o=kd}),oe("scenario",()=>{c=!0,f=null,o=0,h=d=p=0,E.length=0});function v(w,M,S){let P=n.crowd,C=Ce.crowdR*Ce.crowdR,z=0,U=0,V=0;for(let Y=0;Y<P.N;Y++){let ct=P.st[Y];if(ct===Et.OFF||ct===Et.DEAD||ct===Et.DOWN)continue;let T=P.x[Y]-w.x,L=P.z[Y]-w.z,D=T*T+L*L;if(D>C)continue;z++;let B=Math.sqrt(D);if(B<Ce.biasR){let b=1-B/Ce.biasR;U+=b,V+=b*(T*M+L*S)}}return[z,U>.5?V/U:0]}let y={camera:i,frame:null,snap(){c=!0},resize(w,M){i.aspect=w/M,i.updateProjectionMatrix(),x=M},update(w){let M=n.hero;Math.hypot(M.x-_,M.z-g)>Math.max(1,Ce.cutJump*w)&&(c=!0),_=M.x,g=M.z;let S=Ce,P=n.cam.yaw,C=S.dist,z=S.pitch,U=S.fov,V=S.height,Y=0,ct=1,T=f&&n.musou.shot&&n.musou.shot();!T&&y.frame&&({dist:C,pitch:z,fov:U,height:V}=y.frame),T&&(T.id!==f.phase&&(f.phase=T.id,c=!0),{yaw:P,dist:C,pitch:z,fov:U,height:V,side:Y,shake:ct}=T);let L=1-Math.exp(-S.yawLerp*w);l=c?P:l+Mr(P-l)*L;let D=-Math.cos(l),B=Math.sin(l);if(!T&&!y.frame&&(C*=Ce.zoom),!f){let[gt,Ut]=v(M,D,B),ie=c?1:1-Math.exp(-1.2*w),rt=c?1:1-Math.exp(-1.5*w);h+=(cl(18,42,gt)*Ce.crowdPull-h)*ie,d+=(ll(Ut*.2,-Ce.biasMax,Ce.biasMax)-d)*rt,C*=1+h,z+=h/Ce.crowdPull*Ce.crowdPitch-M.y*Ce.airTilt}let b=1;if(o>0){let gt=cl(0,kd,o);o=Math.max(0,o-w),b=gt>0?1-cl(0,kd,o)/gt:1}let j=T?Y:d,it=T?0:1/S.follow,J=T?.6:Ce.airLift,vt=T||M.grounded?0:ll(M.vy*J/S.followY,-Ce.leadYMax,Ce.leadYMax);p=c?vt:p+(vt-p)*(1-Math.exp(-Ce.leadYRate*w)),s.set(M.x+D*j+M.vx*it,M.y*J+V+p,M.z+B*j+M.vz*it);let Nt=c?1:1-Math.exp(-S.follow*w),Z=c?1:1-Math.exp(-S.followY*w);c?y.focus.copy(s):(y.focus.x+=(s.x-y.focus.x)*Nt,y.focus.z+=(s.z-y.focus.z)*Nt,y.focus.y+=(s.y-y.focus.y)*Z),j1(r,l,z,C).add(y.focus),c?(a.copy(r),i.fov=U):(a.lerp(r,b),i.fov+=(U-i.fov)*(b<1?b:1-Math.exp(-8*w))),c=!1,Number.isFinite(a.x+a.y+a.z+y.focus.x+y.focus.y+y.focus.z+i.fov)||(u||(u=!0,console.error("camera: non-finite rig state, snapped to the default follow pose",{yaw:l,bk:b,pull:h,bias:d})),l=n.cam.yaw,h=d=o=0,y.focus.set(M.x,M.y*Ce.airLift+Ce.height,M.z),j1(a,l,Ce.pitch,Ce.dist).add(y.focus),i.fov=Ce.fov),i.position.copy(a),i.lookAt(y.focus),Rn.uA.value.set(a.x,a.z),Rn.uB.value.set(M.x,M.z),Rn.uOn.value=y.frame&&!T?0:1;let at=0,pt=0;for(let gt=E.length-1;gt>=0;gt--){let Ut=E[gt],ie=n.frame-Ut.f;if(ie>Ut.len){E.splice(gt,1);continue}let rt=Ut.px*Math.exp(-ie*3/Ut.len)*Math.cos(ie*Math.PI/3);at+=rt*Ut.dirX,pt+=rt*Ut.dirY}at*=ct,pt*=ct;let zt=Math.hypot(at,pt);if(zt>Ce.kickMaxPx&&(at*=Ce.kickMaxPx/zt,pt*=Ce.kickMaxPx/zt),zt>0){let gt=i.fov*ol/720;i.rotateX(pt*gt),i.rotateY(at*gt)}i.updateProjectionMatrix(),i.updateMatrixWorld(),A.set(M.x,M.y+.35,M.z).project(i),Rn.uCutA.value.set(A.x,A.y),A.set(M.x,M.y+1.55,M.z).project(i),Rn.uCutB.value.set(A.x,A.y),A.set(M.x,M.y+.95,M.z).applyMatrix4(i.matrixWorldInverse),Rn.uCutR.value=Ce.cutR/(Math.max(.5,-A.z)*Math.tan(i.fov*ol/2)),Rn.uCutE.value=2*Ce.cutEdgePx/x,Rn.uAsp.value=i.aspect},focus:new q};return y}function ex(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},l=n[0].morphTargetsRelative,c=new hn,o=0;for(let u=0;u<n.length;++u){let f=n[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(l!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(o,d,u),o+=d}}if(e){let u=0,f=[];for(let h=0;h<n.length;++h){let d=n[h].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+u);u+=n[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=tx(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let x=0;x<a[u].length;++x)d.push(a[u][x][h]);let p=tx(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}}return c}function tx(n){let t,e,i,s=-1,r=0;for(let o=0;o<n.length;++o){let u=n[o];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),l=new fn(a,e,i),c=0;for(let o=0;o<n.length;++o){let u=n[o];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,d=u.count;h<d;h++)for(let p=0;p<e;p++){let x=u.getComponent(h,p);l.setComponent(h+f,p,x)}}else a.set(u.array,c);c+=u.count*e}return s!==void 0&&(l.gpuType=s),l}var ux=new pe,qo=new je,Hd=new q,Xo=new q,Ks=new q,Cw=new q(0,0,1),br=new Qt,ta=new pe().makeScale(0,0,0);function Iw(){let n=[],t=[1,.8,.93,.74,1.06,.86,.96],e=0;for(let i of[-.25,.25])for(let s of[-.25,.25])for(let r of[-.25,.25]){if(i>0&&s>0&&r>0)continue;let a=new Ln(.5,.5,.5).translate(i,s,r),l=t[e++];a.setAttribute("color",new Ze(new Array(a.attributes.position.count*3).fill(l),3)),n.push(a)}return ex(n)}var Le=(n,t=1)=>(br.set(n),[br.r*t,br.g*t,br.b*t]),nx=[Le(7505786),Le(5465690),Le(6183994),Le(8616542),Le(8616542),Le(3552306),Le(3552306),Le(9316892),Le(6636596),Le(4867660)],fx=[6967360,7217696,5387888,8018978],ix=fx.map(n=>[Le(n),Le(n),Le(n,1.25),Le(12094012),Le(4012610),Le(7505786)]),Pw=[[Le(7505786),.27,.31,.45],[Le(8616542),.34,.4,0],[Le(3552306),.27,.32,-.1],[Le(9316892),.13,.17,.5]],Lw=fx.map(n=>[[Le(n),.3,.34,.45],[Le(n,1.15),.4,.46,0],[Le(4012610),.32,.38,-.1],[Le(12094012),.16,.2,.5]]),Dw=[Le(6374729),Le(8018504),Le(9071184),Le(5521466),Le(12290405)],sx=[Le(8018504),Le(9071184),Le(10256488),Le(12098172),Le(11046e3),Le(7230534)],rx=[Le(2760474),Le(3877666),Le(1905938),Le(4863014)],hl=[Le(12290405,1.05),Le(13212278,1),Le(15252893,.9),Le(11041372,1.1)],ax=[...hl,Le(9400416),Le(7757903),Le(10123876)],Bd=[[.36,.07,.012],[.4,.12,.02],[.45,.2,.04],[1.6,1.2,.6]],ul=[[1.2,1.9,2.8],[1.7,2.2,2.8],[.6,1.4,2.6]],dx=[.06,.2,.45],px=[[.06,.2,.45],[.1,.3,.55],[.15,.4,.7],[1.2,1.6,2]],ox=[.38,.08,.015],$o=[.8,1.5,2.6],t0=[.35,1.6,2.2],cx={ansem:{needle:[[2.4,1.3,.35],[2.2,1.6,.6],[2.6,.9,.25]],burst:[.45,.14,.03],hot:[[.45,.14,.03],[.55,.2,.05],[.7,.3,.08],[2,1.5,.9]],flash:[2.6,1.4,.6],teal:[2.2,.8,.25],star:[2.8,1.6,.6],shard:[2.4,1.1,.3],beam:[2.4,1.5,.6],ray1:[1.15,.45,.12],ray2:[1.1,.95,.8],shard2:[1.5,.8,.25],mote:[2.6,1.3,.45]},useless:{needle:[[2.4,1.9,.6],[2.6,2.2,1],[2.2,1.5,.35]],burst:[.42,.3,.06],hot:[[.42,.3,.06],[.5,.38,.08],[.6,.46,.12],[2,1.8,1.1]],flash:[2.6,2.1,.9],teal:[2.2,1.7,.5],star:[2.8,2.3,.9],shard:[2.4,1.8,.5],beam:[2.4,2,.8],ray1:[1.15,.9,.25],ray2:[1.1,1.05,.85],shard2:[1.5,1.2,.4],mote:[2.6,2.1,.8]}},_s={star:[0,0,0],shard:[0,0,0],beam:[0,0,0],ray1:[0,0,0],ray2:[0,0,0],shard2:[0,0,0],mote:[0,0,0]};function lx(n){let t=cx[n]||cx.ansem,e=(i,s)=>{for(let r=0;r<s.length;r++)i[r]=Array.isArray(s[r])?[...s[r]]:s[r]};e(ul,t.needle),e(dx,t.burst),e(px,t.hot),e($o,t.flash),e(t0,t.teal);for(let i of Object.keys(_s))e(_s[i],t[i])}var Fw=`
  attribute float aFade;
  varying vec3 vCol; varying float vA; varying vec2 vP; varying float vSteps; varying float vSeed;
  #include <fog_pars_vertex>
  void main() {
    vec4 mvPosition = viewMatrix * vec4(instanceMatrix[3].xyz, 1.0);
    float w = length(instanceMatrix[0].xyz);
    mvPosition.xy += position.xy * w;
    vP = position.xy; vCol = instanceColor;
    vA = aFade * smoothstep(2.0, 4.5, -mvPosition.z);              // a puff at the lens fades instead of filling the frame
    vSteps = clamp(w * 6.0, 6.0, 16.0);                            // \u2248 8 cm dust "pixels" whatever the puff size
    vSeed = fract(sin(float(gl_InstanceID) * 12.9898) * 43758.5453) * 6.2832 + 2.0 * atan(instanceMatrix[0].z, instanceMatrix[0].x);
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }`,Nw=`
  varying vec3 vCol; varying float vA; varying vec2 vP; varying float vSteps; varying float vSeed;
  #include <fog_pars_fragment>
  void main() {
    vec2 p = floor(vP * vSteps + 0.5) / vSteps;
    float r = length(p), th = atan(p.y, p.x);
    float edge = 0.8 + 0.12 * sin(3.0 * th + vSeed) + 0.07 * sin(5.0 * th - 1.7 * vSeed);
    float a = vA * (1.0 - smoothstep(edge - 0.35, edge, r));
    if (a < 0.01) discard;
    vec2 q = p / edge;
    vec3 n = vec3(q, sqrt(max(0.0, 1.0 - dot(q, q))));
    float sh = 0.58 + 0.55 * max(0.0, dot(n, vec3(0.28, 0.82, 0.5)));   // sunlit crown, shaded underside
    gl_FragColor = vec4(vCol * sh, a);
    #include <fog_fragment>
  }`,Uw=`
  uniform vec3 uHeroA, uHeroB;            // hero feet / head in view space
  attribute vec4 aT; varying vec4 vT; varying float vNear; varying vec3 vView; varying float vVeil;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vT = aT; vView = mv.xyz;
    vNear = smoothstep(1.8, 4.4, -mv.z);   // near-camera fade: a sweep past the lens must not white out (or bokeh into fog)
    // slide 3.5 m toward the camera along the view ray (same pixels, nearer depth): the slash reads over the ranks it
    // cuts through instead of vanishing inside a dense ring (a low sweep runs at knee height through 2-3 ranks). Where
    // the ray passes the hero's body axis and the ribbon is behind him, it stops 0.4 m behind it (never paints his back).
    float d = length(mv.xyz);
    vec3 dir = mv.xyz / d, u = uHeroB - uHeroA;
    float b = dot(u, dir), e = dot(dir, uHeroA);
    float s = clamp((b * e - dot(u, uHeroA)) / max(dot(u, u) - b * b, 1e-6), 0.0, 1.0);
    vec3 q = uHeroA + u * s;                                        // closest point of the body axis to the ray
    float t = dot(q, dir), miss = length(q - dir * t);
    float pull = mix(clamp(d - t - 0.4, 0.0, 3.5), 3.5, max(step(d, t), smoothstep(0.45, 0.9, miss)));
    // r4: body of the ribbon (veil + core, not the rim) thins where it crosses in front of the hero's body and inside
    // \u2248 5 m of the lens, so a C4 disc sweeping past his legs / the camera stays a translucent band under a bright rim
    vVeil = (1.0 - 0.7 * (1.0 - smoothstep(0.3, 0.85, miss)) * step(d, t - 0.1)) * (0.45 + 0.55 * smoothstep(2.2, 5.5, d));
    mv.xyz *= max(0.3, (d - pull) / d);
    gl_Position = projectionMatrix * mv;
  }`,kw=`
  uniform float uEdge; uniform vec3 uHeroA, uHeroB; uniform mat4 projectionMatrix;
  uniform vec3 uTintW, uTintF, uTintH;                             // Game 06: the fighter's arc (veil/core, fringe, rim)
  varying vec4 vT; varying float vNear; varying vec3 vView; varying float vVeil;
  float h1(float n) { return fract(sin(n * 91.7) * 43758.5453); }
  void main() {
    float age = clamp(vT.x, 0.0, 1.0), v = clamp(vT.y, 0.0, 1.0), g = vT.z * vNear, hue = vT.w;
    vec3 nrm = cross(dFdx(vView), dFdy(vView));
    float facing = abs(dot(nrm, normalize(vView))) / max(length(nrm), 1e-20);
    float graze = 1.0 - smoothstep(0.25, 0.7, facing);            // 0 face-on arc .. 1 flat spin seen edge-on
    float life = 1.0 - pow(age, 1.0 + 1.3 * graze);                // a spin holds its whole turn: the benchmark's full disc
    float band = floor(v * 14.0);                                  // voxel-stepped bands across the ribbon
    float vq = (band + 0.5) / 14.0;
    float lq = floor(life * 6.0 + 0.999) / 6.0;                    // stepped fade along the ribbon
    float r1 = h1(band * 1.7 + 3.0), r2 = h1(band * 3.1 + 11.0);
    float head = smoothstep(0.7, 1.0, life);
    vec3 white = mix(uTintW, uTintW * 1.08, hue);
    vec3 blue = mix(uTintF, uTintF * 1.15, hue);
    float rimLo = 12.5 - graze;                                    // flat spin: the rim takes 2 bands
    vec4 o;
    if (uEdge > 0.5) {
      // core: bold near-white band under the rim on the newest part of the arc, blue fringe beneath it, HDR rim on top
      float coreLo = 8.5 - 2.0 * graze;
      float core = step(coreLo, band) * (1.0 - step(rimLo, band)) * smoothstep(0.25, 0.6, life);
      float fringe = step(coreLo - 1.0, band) * (1.0 - step(coreLo, band)) * step(0.4, life);
      float rim = step(rimLo, band) * step(age, 0.8) * pow(life, 0.5);
      float aC = core * mix(0.5, 0.4, graze) * (0.55 + 0.45 * head) * (0.8 + 0.2 * r1) * vVeil;   // r4: flat disc translucent (DW8 C4 mid-grey), bright rim
      vec3 hot = mix(uTintH, uTintH * 1.1, hue);
      o = vec4(white * aC + blue * fringe * 0.5 * vVeil + hot * rim * (0.75 + 0.35 * head), aC + fringe * 0.4 * vVeil + rim) * g;
      #ifdef DEPTH_PASS
        if (o.a < 0.3) discard;
        float d = length(vView), hd = length(mix(uHeroA, uHeroB, 0.55));
        float zv = vView.z * clamp(d, hd - 1.2, hd + 4.0) / d;
        gl_FragDepth = 0.5 + 0.5 * (projectionMatrix[2][2] * zv + projectionMatrix[3][2]) / -zv;
        gl_FragColor = vec4(0.0);
        return;
      #endif
    } else {
      // translucent veil, densest toward the outer edge, plus sparse speed lines that each trail for their own length
      float alive = step(age, (0.3 + 0.6 * r2) * (0.4 + 0.6 * vq));
      float lines = step(mix(0.45, 0.15, graze), r1) * (0.4 + 0.6 * r1) * alive * lq * (1.0 - step(rimLo, band));
      float veil = pow(vq, 1.4) * lq * mix(0.12, 0.22, graze) * vVeil;
      float aL = lines * mix(0.26, 0.32, graze) * vVeil;
      o = vec4(white * (veil * 0.85 + aL * 1.1) + blue * veil * 0.12, veil + aL) * g;
    }
    if (o.a < 0.015) discard;                                      // hard, stepped silhouette
    gl_FragColor = o;
  }`,Ow=`
  attribute vec3 aF; varying vec2 vUv; varying vec3 vF; varying vec3 vCol; varying float vNear;
  void main() {
    vec3 start = instanceMatrix[3].xyz, axis = instanceMatrix[2].xyz;
    float w = length(instanceMatrix[0].xyz);
    vec3 p = start + axis * position.y;
    vec3 side = cross(axis, cameraPosition - p);
    float sl = length(side);
    side = sl > 1e-5 ? side / sl : vec3(1.0, 0.0, 0.0);
    p += side * position.x * w * 0.5;
    vUv = vec2(position.x, position.y); vF = aF; vCol = instanceColor;
    vec4 mv = viewMatrix * vec4(p, 1.0);
    vNear = 0.3 + 0.7 * smoothstep(2.0, 5.0, -mv.z);
    gl_Position = projectionMatrix * mv;
  }`,zw=`
  varying vec2 vUv; varying vec3 vF; varying vec3 vCol; varying float vNear;
  void main() {
    float u = vF.x, k = vF.z;
    float y = floor(vUv.y * 16.0 + 0.5) / 16.0;
    float x = abs(vUv.x);
    float along;
    if (k < 0.5) along = pow(y, 1.3) * (1.0 - smoothstep(0.93, 1.0, y) * 0.6);          // thrust streak: hot head
    else if (k < 1.5) along = pow(1.0 - y, 0.8) * smoothstep(0.0, 0.08, y);              // ray: hot base
    else if (k < 2.5) along = pow(1.0 - y, 1.7) * smoothstep(0.0, 0.04, y);              // pillar: hot at the ground
    else along = smoothstep(0.0, 0.3, y) * pow(1.0 - y, 1.1);                             // shaft: the fan's roots don't stack
    // across profile per kind: streak = bold lance, ray = thin needle of light, pillar = soft column
    float c0 = k < 0.5 ? 0.12 : k < 1.5 ? 0.08 : 0.14, c1 = k < 0.5 ? 0.3 : k < 1.5 ? 0.26 : 0.42;
    float core = 1.0 - smoothstep(c0, c1, x);
    float glow = (1.0 - x) * (1.0 - x) * (k < 0.5 ? 0.45 : k < 1.5 ? 0.22 : 0.45);
    float gain = k < 0.5 ? 1.0 : k < 1.5 ? 0.6 : 0.75;
    float fade = (1.0 - u) * (1.0 - u);
    vec3 col = vCol * glow + mix(vCol, vec3(1.8, 1.95, 2.1), k > 1.5 ? 0.1 : 0.6) * core;   // columns keep their hue (gold / ice), no cream wash
    if (k > 2.5) col *= 0.45 + 0.55 * fract(sin((floor(vUv.x * 4.0) + vF.y * 17.0) * 91.7) * 43758.5);   // shaft: streaky, voxel-stepped
    gl_FragColor = vec4(col * along * fade * gain * vNear, 1.0);
  }`,Bw=`
  attribute vec3 aF; varying vec2 vP; varying vec3 vF; varying vec3 vCol;
  void main() {
    vec4 mv = viewMatrix * vec4(instanceMatrix[3].xyz, 1.0);
    float s = length(instanceMatrix[0].xyz);
    mv.xy += position.xy * s;
    // pull toward the camera: never buried in a body (a contact burst clears the victim and the rank in front of him)
    mv.z += aF.z > 0.5 ? min(1.3, 0.8 * s) : min(0.7, s);
    vP = position.xy; vF = aF; vCol = instanceColor;
    gl_Position = projectionMatrix * mv;
  }`,Hw=`
  varying vec2 vP; varying vec3 vF; varying vec3 vCol;
  float h1(float n) { return fract(sin(n * 91.7) * 43758.5453); }
  void main() {
    float u = vF.x, a = vF.y * 6.2832;
    if (vF.z > 0.5) {
      // contact burst (benchmark DW8XL f372: 1-2 H radial explosion round a white core, gone in \u2248 8 sf): 13 seeded
      // spikes of random length, white-hot at the root and red-orange at the tip, shooting out and detaching from the
      // core as they age, over a short red-orange fireball; pixel-stepped so it stays a crisp retro sprite under bloom
      vec2 p = floor(vP * 18.0 + 0.5) / 18.0;
      float r = length(p), th = atan(p.y, p.x) + a;
      const float N = 13.0;
      float sec = floor(th / 6.2832 * N + 64.0);
      float ang = (sec + 0.5 + (h1(sec + vF.y * 7.0) - 0.5) * 0.5) / N * 6.2832;
      float dth = abs(mod(th - ang + 3.1416, 6.2832) - 3.1416);
      float len = mix(0.42, 1.0, h1(sec * 1.37 + vF.y * 13.0)) * (0.7 + 0.3 * min(1.0, u * 4.0));
      float rl = r / len;
      float w = 0.05 * (1.0 - rl) + 0.01;                        // spike: thick root, needle tip
      float spike = step(rl, 1.0) * step(r * dth, w) * step(0.55 * u * u + 0.06 * u, rl);   // tail detaches outward
      float core = (1.0 - step(0.03 + 0.13 * (1.0 - u) * (1.0 - u), r)) * step(u, 0.4);   // 1-2 sf white pop, then gone
      float ball = max(0.0, 1.0 - r / (0.34 - 0.14 * u));
      float fade = 1.0 - u * u, fb = (1.0 - u) * (1.0 - u);
      // premultiplied "over": the spikes replace the sand behind them instead of adding to it, so red-orange stays
      // red-orange on a bright frame (additive washed it to peach) and a cluster of bursts never sums to white
      // the grade bleaches anything far over its knee (post.js hotDesat), so the hue lives in near-display values:
      // white-hot root \u2192 yellow \u2192 vCol (orange, \u2248 0.5 linear) \u2192 dark-red tip (DW8XL flame edge); only the core blooms
      vec3 hot = vec3(2.4, 2.2, 1.9), yel = vCol * vec3(1.1, 2.0, 2.0);
      vec3 sc = mix(mix(hot, yel, smoothstep(0.02, 0.14, rl)), vCol, smoothstep(0.14, 0.4, rl));
      sc = mix(sc, vCol * vec3(0.8, 0.6, 0.6), smoothstep(0.7, 1.0, rl));
      float aS = spike * fade * 0.9, aB = ball * fb * 0.45, aC = core * fb * fb;
      vec3 col = sc * aS + vCol * aB * (1.0 - aS) + hot * aC;
      float al = max(max(aS, aB), aC);
      if (al < 0.01) discard;
      gl_FragColor = vec4(col, al);
      return;
    }
    vec2 p = floor(vP * 12.0 + 0.5) / 12.0;
    vec2 q = mat2(cos(a), -sin(a), sin(a), cos(a)) * p;
    vec2 d = vec2(q.x + q.y, q.x - q.y) * 0.7071;
    float r = length(p);
    // hard pixel core + long thin streaks: a big flash stays a crisp star under bloom instead of a glow blob
    float core = 1.0 - step(0.06 + 0.07 * (1.0 - u), r);
    float s1 = max(max(0.0, 1.0 - abs(q.x) * 14.0) * (1.0 - abs(q.y)), max(0.0, 1.0 - abs(q.y) * 14.0) * (1.0 - abs(q.x)));
    float s2 = max(max(0.0, 1.0 - abs(d.x) * 18.0) * max(0.0, 1.0 - abs(d.y) * 1.4), max(0.0, 1.0 - abs(d.y) * 18.0) * max(0.0, 1.0 - abs(d.x) * 1.4));
    float fade = (1.0 - u) * (1.0 - u);
    vec3 col = vCol * (s1 * 1.1 + s2 * 0.6) + vec3(2.2, 2.1, 2.0) * core;
    gl_FragColor = vec4(col * fade, 0.0);                          // alpha 0 = additive (premultiplied blend)
  }`,Vw="varying vec2 vUv; void main() { vUv = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Gw=`
  uniform float uU; uniform vec3 uColor; varying vec2 vUv;
  void main() {
    float r = floor(length(vUv) * 40.0 + 0.5) / 40.0;               // voxel-stepped radius
    float front = 0.3 + 0.7 * (1.0 - (1.0 - uU) * (1.0 - uU));
    float band = smoothstep(front - 0.14, front, r) * (1.0 - step(front, r));
    float edge = smoothstep(front - 0.04, front, r) * (1.0 - step(front, r));
    float fade = (1.0 - uU) * (1.0 - uU);
    gl_FragColor = vec4(uColor * (band * 0.22 + edge * 0.9) * fade, 1.0);
  }`;function Qu(n,t,e,i,{castShadow:s=!1,fade:r=!1,geo:a=new Ln(1,1,1)}={}){let l=new Vn(a,e,t);l.instanceMatrix.setUsage(Ci),l.frustumCulled=!1,l.castShadow=s;for(let h=0;h<t;h++)l.setMatrixAt(h,ta),l.setColorAt(h,br.setRGB(1,1,1));n.add(l);let c=()=>new Float32Array(t),o={mesh:l,n:t,next:0,x:c(),y:c(),z:c(),vx:c(),vy:c(),vz:c(),life:c(),max:c(),size:c(),kind:new Uint8Array(t),rot:c(),rv:c(),a:c(),last:c()},u=null;r&&(u=new gi(new Float32Array(t),1).setUsage(Ci),l.geometry.setAttribute("aFade",u)),o.spawn=(h,d,p,x,_,g,A,E,m,v,y,w,M=1)=>{let S=o.next;o.next=(o.next+1)%t,o.x[S]=h,o.y[S]=d,o.z[S]=p,o.vx[S]=x,o.vy[S]=_,o.vz[S]=g,o.life[S]=A,o.max[S]=A,o.size[S]=E,o.kind[S]=m,o.rot[S]=_t.range(0,6.3),o.rv[S]=_t.range(-12,12)*(m===1?Math.min(1,.16/E):1),o.a[S]=M,o.last[S]=i(),l.setColorAt(S,br.setRGB(v,y,w)),l.instanceColor.needsUpdate=!0};function f(h,d){let p=o.kind[h];if(p===0){o.vy[h]-=9*d;let x=1-7*d;o.vx[h]*=x,o.vy[h]*=x,o.vz[h]*=x}else if(p===1){o.vy[h]-=22*d;let x=o.size[h]*.5;if(o.y[h]<x)if(o.y[h]=x,o.vy[h]<-1.5)o.vy[h]*=-.32,o.vx[h]*=.55,o.vz[h]*=.55,o.rv[h]*=.5;else{o.vy[h]=0;let _=1-8*d;o.vx[h]*=_,o.vz[h]*=_,o.rv[h]*=_}}else if(p===2){let x=1-2.6*d;o.vx[h]*=x,o.vz[h]*=x,o.vy[h]*=1-1.8*d}else if(p===3)o.vx[h]+=(.7+Math.sin(o.life[h]*2.3+h)*.9)*d,o.vz[h]+=Math.cos(o.life[h]*1.7+h)*.6*d,o.vy[h]*=1-.3*d;else{o.vy[h]-=6*d;let x=1-2.5*d;o.vx[h]*=x,o.vz[h]*=x}o.x[h]+=o.vx[h]*d,o.y[h]+=o.vy[h]*d,o.z[h]+=o.vz[h]*d,o.rot[h]+=o.rv[h]*d}return o.clear=()=>{o.life.fill(0);for(let h=0;h<t;h++)l.setMatrixAt(h,ta);l.instanceMatrix.needsUpdate=!0},o.update=()=>{let h=i(),d=-1;for(let p=0;p<t;p++){if(o.life[p]<=0)continue;let x=Math.max(0,(h-o.last[p])/60);if(o.last[p]=h,o.life[p]<=x){o.life[p]=0,l.setMatrixAt(p,ta);continue}if(d=p,x>0){let A=Math.ceil(x/.03333333333333333),E=x/A;for(let m=0;m<A;m++)f(p,E);o.life[p]-=x}let _=o.kind[p],g=o.life[p]/o.max[p];if(Hd.set(o.x[p],o.y[p],o.z[p]),_===0){Ks.set(o.vx[p],o.vy[p],o.vz[p]);let A=Ks.length();qo.setFromUnitVectors(Cw,A>1e-4?Ks.multiplyScalar(1/A):Ks.set(0,1,0));let E=o.size[p]*(.35+.65*g);Xo.set(E,E,Math.max(E,A*.065*o.a[p]))}else if(_===2){qo.setFromAxisAngle(Ks.set(0,1,0),o.rot[p]*.15);let A=o.size[p]*(.6+(1-g)*.9);Xo.set(A,A*.8,A),u&&(u.array[p]=.8*o.a[p]*Math.min(1,g*1.4)*Math.min(1,(1-g)*12+.25))}else if(_===3){qo.setFromAxisAngle(Ks.set(.6,1,.3).normalize(),o.rot[p]);let A=o.size[p]*Math.min(1,g*3)*(.65+.35*Math.sin(o.life[p]*23+p));Xo.set(A,A,A)}else{qo.setFromAxisAngle(Ks.set(.6,1,.3).normalize(),o.rot[p]);let A=o.size[p]*(_===1?Math.min(1,g*6):g);Xo.set(A,A,A)}l.setMatrixAt(p,ux.compose(Hd,qo,Xo))}l.count=d+1,l.instanceMatrix.needsUpdate=!0,u&&(u.needsUpdate=!0)},o}function hx(n,t,e,i,s,r=!1){let a=new gi(new Float32Array(t*3),3).setUsage(Ci);e.setAttribute("aF",a);let l=new on({vertexShader:i,fragmentShader:s,transparent:!0,depthWrite:!1,side:En,...r?{blending:Cc,blendSrc:Ic,blendDst:Mo}:{blending:ii}}),c=new Vn(e,l,t);c.instanceMatrix.setUsage(Ci),c.frustumCulled=!1;for(let o=0;o<t;o++)c.setMatrixAt(o,ta),c.setColorAt(o,br.setRGB(1,1,1));return n.add(c),{mesh:c,aF:a,n:t,next:0}}function mx(n,t,e){let i=()=>t.frame,s=Qu(n,700,new an({color:16777215,transparent:!0,opacity:.92,depthWrite:!1,fog:!1}),i),r=Qu(n,1400,new an({color:16777215,blending:ii,transparent:!0,depthWrite:!1,fog:!1}),i),a=Qu(n,2e3,A1(new Qe({roughness:.85,flatShading:!0,vertexColors:!0}),2.8),i,{castShadow:!0,geo:Iw()}),l=Qu(n,900,new on({vertexShader:Fw,fragmentShader:Nw,transparent:!0,depthWrite:!1,fog:!0,uniforms:_a.clone(ae.fog)}),i,{fade:!0,geo:new ni(2,2)}),c=[],o=new ni(2,2).rotateX(-Math.PI/2);for(let I=0;I<8;I++){let tt=new Re(o,new on({vertexShader:Vw,fragmentShader:Gw,uniforms:{uU:{value:0},uColor:{value:new Qt}},transparent:!0,depthWrite:!1,blending:ii,side:En}));tt.visible=!1,tt.frustumCulled=!1,tt.userData={t:0,dur:.4,r:3},n.add(tt),c.push(tt)}let u=0,f=(I,tt,st,K,xt)=>{let Vt=c[u];u=(u+1)%c.length,Vt.position.set(I,.06,tt),Vt.userData={f0:i(),dur:K,r:st},Vt.visible=!0,Vt.scale.setScalar(st),Vt.material.uniforms.uColor.value.setRGB(xt[0],xt[1],xt[2]),Vt.material.uniforms.uU.value=0},h=new hn;h.setAttribute("position",new Ze([-1,0,0,1,0,0,1,1,0,-1,1,0],3)),h.setIndex([0,1,2,0,2,3]);let d=hx(n,160,h,Ow,zw),p=d.n,x={sx:new Float32Array(p),sy:new Float32Array(p),sz:new Float32Array(p),dx:new Float32Array(p),dy:new Float32Array(p),dz:new Float32Array(p),len:new Float32Array(p),wid:new Float32Array(p),t:new Float32Array(p),dur:new Float32Array(p),kind:new Uint8Array(p),on:new Uint8Array(p)},_=0,g=1,A=2,E=3,m=(I,tt,st,K,xt,Vt,kt,Zt,Xt,se,ce,de=0)=>{let Jt=d.next;d.next=(d.next+1)%p;let me=Math.hypot(xt,Vt,kt)||1;x.sx[Jt]=tt,x.sy[Jt]=st,x.sz[Jt]=K,x.dx[Jt]=xt/me,x.dy[Jt]=Vt/me,x.dz[Jt]=kt/me,x.len[Jt]=Zt,x.wid[Jt]=Xt,x.t[Jt]=i()+de*60,x.dur[Jt]=se,x.kind[Jt]=I,x.on[Jt]=1,d.aF.array[Jt*3+1]=_t.next(),d.aF.array[Jt*3+2]=I,d.mesh.setColorAt(Jt,br.setRGB(ce[0],ce[1],ce[2])),d.mesh.instanceColor.needsUpdate=!0},v=new q,y=new q,w=new q,M=()=>{let I=d.mesh.instanceMatrix.array,tt=i();for(let st=0;st<p;st++){if(!x.on[st])continue;let K=(tt-x.t[st])/60/x.dur[st];if(K>=1){x.on[st]=0,d.mesh.setMatrixAt(st,ta);continue}if(K<0){d.mesh.setMatrixAt(st,ta);continue}let xt=0,Vt=1,kt=x.wid[st];x.kind[st]===_?(Vt=.25+.75*Math.min(1,1-(1-Math.min(1,K/.3))**3),xt=Math.max(0,(K-.3)/.7)**1.3*.85,kt*=1-.5*K):(Vt=Math.min(1,1-(1-Math.min(1,K/.22))**3),kt*=x.kind[st]>=A?.7+.5*Math.min(1,K*4)-.4*K:1-.7*K);let Zt=x.len[st];v.set(x.dx[st],x.dy[st],x.dz[st]),w.set(x.sx[st],x.sy[st],x.sz[st]).addScaledVector(v,Zt*xt),v.multiplyScalar(Zt*Math.max(.01,Vt-xt)),y.set(0,1,0).cross(v),y.lengthSq()<1e-8&&y.set(1,0,0),y.setLength(kt);let Xt=st*16;I[Xt]=y.x,I[Xt+1]=y.y,I[Xt+2]=y.z,I[Xt+3]=0,I[Xt+4]=0,I[Xt+5]=0,I[Xt+6]=0,I[Xt+7]=0,I[Xt+8]=v.x,I[Xt+9]=v.y,I[Xt+10]=v.z,I[Xt+11]=0,I[Xt+12]=w.x,I[Xt+13]=w.y,I[Xt+14]=w.z,I[Xt+15]=1,d.aF.array[st*3]=K}d.mesh.instanceMatrix.needsUpdate=!0,d.aF.needsUpdate=!0},S=hx(n,72,new ni(2,2),Bw,Hw,!0),P=S.n,C={x:new Float32Array(P),y:new Float32Array(P),z:new Float32Array(P),size:new Float32Array(P),t:new Float32Array(P),dur:new Float32Array(P),on:new Uint8Array(P)};S.next=1;let z=(I,tt,st,K,xt,Vt,kt=-1,Zt=0)=>{let Xt=kt>=0?kt:S.next;kt<0&&(S.next=S.next+1>=P?1:S.next+1),C.x[Xt]=I,C.y[Xt]=tt,C.z[Xt]=st,C.size[Xt]=K,C.t[Xt]=i(),C.dur[Xt]=xt,C.on[Xt]=1,S.aF.array[Xt*3+1]=_t.next(),S.aF.array[Xt*3+2]=Zt,S.mesh.setColorAt(Xt,br.setRGB(Vt[0],Vt[1],Vt[2])),S.mesh.instanceColor.needsUpdate=!0},U=()=>{let I=i();for(let tt=0;tt<P;tt++){if(!C.on[tt])continue;let st=(I-C.t[tt])/60/C.dur[tt];if(st>=1){C.on[tt]=0,S.mesh.setMatrixAt(tt,ta);continue}tt===0&&(C.x[0]=rt.x,C.y[0]=rt.y,C.z[0]=rt.z);let K=C.size[tt]*(tt===0?.6+.4*Math.sin(st*Math.PI):S.aF.array[tt*3+2]?Math.min(1,.8+st*3):Math.min(1,.45+st*4)*(1-.3*st));S.mesh.setMatrixAt(tt,ux.compose(Hd.set(C.x[tt],C.y[tt],C.z[tt]),qo.identity(),Xo.set(K,K,K))),S.aF.array[tt*3]=tt===0?st*.6:st}S.mesh.instanceMatrix.needsUpdate=!0,S.aF.needsUpdate=!0},V=8,Y=4,ct=56,T=ct*Y*2+16,L=new hn,D=new Float32Array(T*3),B=new Float32Array(T*4);L.setAttribute("position",new fn(D,3).setUsage(Ci)),L.setAttribute("aT",new fn(B,4).setUsage(Ci));let b=[];for(let I=0;I<T/2-1;I++){let tt=I*2;b.push(tt,tt+1,tt+2,tt+1,tt+3,tt+2)}L.setIndex(b);let j={value:new q(0,-1,-5)},it={value:new q(0,1,-5)},J={ansem:[[.96,.8,.66],[1,.3,.06],[1.6,1.2,.9]],useless:[[.95,.88,.64],[1,.62,.08],[1.6,1.45,1]]},vt={value:new Qt},Nt={value:new Qt},Z={value:new Qt},at=I=>{let tt=J[I]||J.ansem;vt.value.setRGB(...tt[0]),Nt.value.setRGB(...tt[1]),Z.value.setRGB(...tt[2])};at(t.fighter),lx(t.fighter),oe("fighter",I=>{at(I.id),lx(I.id)});for(let I of[0,1,2]){let tt=new Re(L,new on({vertexShader:Uw,fragmentShader:kw,uniforms:{uEdge:{value:I},uHeroA:j,uHeroB:it,uTintW:vt,uTintF:Nt,uTintH:Z},defines:I===2?{DEPTH_PASS:1}:{},transparent:!0,depthWrite:I===2,colorWrite:I!==2,side:En,blending:Cc,blendSrc:Ic,blendDst:Mo}));tt.frustumCulled=!1,tt.renderOrder=I?9+I:0,I||(tt.onBeforeRender=(st,K,xt)=>{zt.copy(xt.position);let Vt=t.hero;j.value.set(Vt.x,Vt.y+.05,Vt.z).applyMatrix4(xt.matrixWorldInverse),it.value.set(Vt.x,Vt.y+1.85,Vt.z).applyMatrix4(xt.matrixWorldInverse)}),n.add(tt)}let pt=[],zt=new q(0,1e3,0),gt=0,Ut=new Float32Array(Wi),ie=new q,rt=new q,Rt=new q,Ct={flash:0,sparks:r,debris:a,dust:l},Ot=0,Ht=2.2,yt=(I,tt=0,st=2.2)=>{I>=Ct.flash&&(Ct.flash=I,Ot=tt,Ht=st)},ne=I=>!!I&&(I[0]==="c"||I==="jc"||I==="n6");function ft(I){if(I.state==="musou")return I.stateT>30;if(I.state!=="attack")return!1;for(let tt of jt[I.move].hits)if(I.moveT>=tt.f[0]-3&&I.moveT<=tt.f[1]+2)return!0;return!1}let Se=(I,tt,st,K,xt,Vt,kt,Zt,Xt=.045,se=1,ce=r)=>{for(let de=0;de<K;de++){let Jt=_t.range(0,6.283),me=_t.range(-.35,1),he=kt*_t.range(.55,1),qe=Zt[_t.int(0,Zt.length-1)];ce.spawn(I,tt,st,(Math.cos(Jt)*.8+xt*.7)*he,me*he*.75+1,(Math.sin(Jt)*.8+Vt*.7)*he,_t.range(.11,.2),Xt*_t.range(.8,1.2),0,qe[0],qe[1],qe[2],se)}},et=(I,tt,st,K,xt=.5,Vt=.15,kt=.5)=>{xt*=.6;for(let Zt=0;Zt<st*2;Zt++){let Xt=_t.range(0,6.283),se=_t.range(.4,1)*K,ce=hl[_t.int(0,hl.length-1)];l.spawn(I+Math.cos(Xt)*.25,Vt+_t.range(0,.25),tt+Math.sin(Xt)*.25,Math.cos(Xt)*se,_t.range(.3,1.3),Math.sin(Xt)*se,_t.range(.6,1.2),xt*_t.range(.7,1.3),2,ce[0],ce[1],ce[2],kt*_t.range(.7,1))}},be=(I,tt,st,K,xt,Vt,kt=.55)=>{Vt*=.6,st*=2;for(let Zt=0;Zt<st;Zt++){let Xt=Zt/st*6.283+_t.range(-.15,.15),se=hl[_t.int(0,hl.length-1)],ce=xt*_t.range(.75,1.1);l.spawn(I+Math.cos(Xt)*K,.15+_t.range(0,.3),tt+Math.sin(Xt)*K,Math.cos(Xt)*ce,_t.range(.4,1.6),Math.sin(Xt)*ce,_t.range(.7,1.3),Vt*_t.range(.7,1.3),2,se[0],se[1],se[2],kt*_t.range(.7,1))}},ye=(I,tt,st,K,xt,Vt,kt,Zt,Xt=.08,se=.18,ce=[2,4.5],de=[1.4,2.2])=>{let Jt=zt.x-I,me=zt.z-st,he=Math.hypot(Jt,me)||1,qe=Jt/he,wn=me/he;for(let ss=0;ss<K;ss++){let rs=Zt[_t.int(0,Zt.length-1)],Ms=_t.range(0,6.283),js=kt*_t.range(.3,1),Js=(Math.cos(Ms)*.6+xt)*js,bs=(Math.sin(Ms)*.6+Vt)*js,fi=Js*qe+bs*wn;fi>0&&(Js-=1.6*fi*qe,bs-=1.6*fi*wn),a.spawn(I+_t.range(-.2,.2),tt+_t.range(-.4,.4),st+_t.range(-.2,.2),Js,_t.range(ce[0],ce[1]),bs,_t.range(de[0],de[1]),_t.range(Xt,se),1,rs[0],rs[1],rs[2])}},H=(I,tt,st,K,xt,Vt,kt=.08)=>{for(let Zt=0;Zt<K;Zt++){let Xt=_t.range(0,6.283),se=xt*_t.range(.4,1);r.spawn(I,tt,st,Math.cos(Xt)*se,_t.range(2,8),Math.sin(Xt)*se,_t.range(.35,.7),kt*_t.range(.6,1.3),4,Vt[0]*_t.range(.7,1.1),Vt[1]*_t.range(.8,1.1),Vt[2])}},R=(I,tt,st,K,xt,Vt=[2.4,.95,.28])=>{for(let kt=0;kt<K;kt++)r.spawn(I+_t.range(-xt,xt),tt+_t.range(0,.6),st+_t.range(-xt,xt),_t.range(-1.2,1.2),_t.range(1.2,3.5),_t.range(-1.2,1.2),_t.range(.9,2),_t.range(.03,.06),3,Vt[0],Vt[1],Vt[2])},dt=(I,tt,st,K,xt,Vt,kt=[.35,1],Zt=.42,Xt=.55,se=null)=>{for(let ce=0;ce<K;ce++){let de=se?se[0]+(ce/Math.max(1,K-1)-.5)*se[1]+_t.range(-.08,.08):ce/K*6.283+_t.range(-.2,.2),Jt=_t.range(kt[0],kt[1]),me=Math.cos(Jt);m(g,I+Math.sin(de)*.3,tt,st+Math.cos(de)*.3,Math.sin(de)*me,Math.sin(Jt),Math.cos(de)*me,xt*_t.range(.7,1.15),Xt*_t.range(.7,1.2),Zt*_t.range(.85,1.15),Vt,_t.range(0,.04))}},ot=(I,tt,st)=>{let K=zt.x-I,xt=zt.z-tt,Vt=Math.hypot(K,xt)||1;return(Math.cos(st)*K+Math.sin(st)*xt)/Vt>.5?st+Math.PI:st},W=(I,tt,st,K,xt,Vt,kt,Zt)=>{for(let Xt=0;Xt<st;Xt++){let se=ot(I,tt,_t.range(0,6.283)),ce=K*Math.sqrt(_t.range(.04,1)),de=Zt*_t.range(.35,1),Jt=_t.range(xt,Vt),me=sx[_t.int(0,sx.length-1)];a.spawn(I+Math.cos(se)*ce,Jt*.5+.05,tt+Math.sin(se)*ce,Math.cos(se)*de,_t.range(kt[0],kt[1]),Math.sin(se)*de,_t.range(2.6,3.8),Jt,1,me[0],me[1],me[2])}},bt=(I,tt,st,K,xt,Vt,kt=[.9,1.3],Zt=.72)=>{for(let Xt=0;Xt<st;Xt++){let se=ot(I,tt,_t.range(0,6.283)),ce=_t.range(K,xt),de=ax[_t.int(0,ax.length-1)],Jt=_t.range(.3,1),me=_t.range(1.4,3.2)*Vt/4.6;l.spawn(I+Math.cos(se)*ce,.3+(Vt*.62-.3)*Jt*Jt,tt+Math.sin(se)*ce,Math.cos(se)*_t.range(.8,2.6),me,Math.sin(se)*_t.range(.8,2.6),_t.range(1,1.5),_t.range(kt[0],kt[1]),2,de[0],de[1],de[2],Zt*_t.range(.8,1))}},At=(I,tt,st)=>{let K=Math.cos(I.yaw),xt=-Math.sin(I.yaw),Vt=Math.sin(I.yaw),kt=Math.cos(I.yaw),Zt=2.5;for(let Xt=-1;Xt<=1;Xt+=2)for(let se=0;se<4;se++){let ce=Math.PI/2+Xt*(tt+(st-tt)*(se+_t.next())/4)*Math.PI/2,de=rx[_t.int(0,rx.length-1)],Jt=Math.cos(ce)*Zt,me=.25+Math.sin(ce)*Zt*1.05;l.spawn(I.x+K*Jt+Vt*.6,me,I.z+xt*Jt+kt*.6,K*Math.cos(ce)*.6,.3+Math.sin(ce)*.4,xt*Math.cos(ce)*.6,_t.range(.28,.36),_t.range(.3,.42),2,de[0],de[1],de[2],.9)}},ut=(I,tt,st,K,xt,Vt,kt,Zt,Xt=.05,se=0,ce=A)=>{for(let de=0;de<st;de++){let Jt=ot(I,tt,se+de/st*6.283+_t.range(-.2,.2)),me=Xt*_t.range(.7,1.3),he=Math.cos(Jt),qe=Math.sin(Jt);m(ce,I+he*K,0,tt+qe*K,he*Math.sin(me),Math.cos(me),qe*Math.sin(me),xt*_t.range(.85,1.15),Vt*_t.range(.8,1.2),kt*_t.range(.9,1.1),Zt,de%3*.017)}},mt=-1,F=0,X=-1;oe("hit",I=>{t.frame!==mt&&(mt=t.frame,F=0),F++;let tt=I.heavy||I.move==="musou",st=tt?ul:Bd,K=I.move==="musou";if(K)Se(I.x,I.y,I.z,F<=3?2:0,I.dx,I.dz,16,st,.05),(F<=2||F%10===0)&&z(I.x,I.y,I.z,.8*_t.range(.9,1.1),.1,$o);else{let xt=F<=5?0:F<=12?1:2,Vt=zt.x-I.x,kt=zt.y-I.y,Zt=zt.z-I.z,Xt=Math.hypot(Vt,kt,Zt)||1,se=.45/Xt,ce=I.x+Vt*se,de=I.y+kt*se,Jt=I.z+Zt*se,me=Math.min(1,Math.max(.35,(Xt-1)/5)),he=Math.round((xt===0?I.heavy?16:14:xt===1?5:F%2)*me);Se(ce,de,Jt,he,I.dx,I.dz,(I.heavy?20:16)*me,tt?px:Bd,(I.heavy?.065:.055)*(xt?.8:1)*me,xt?1.1:1.5,s),xt<2?z(I.x,I.y,I.z,(I.heavy?1.8:1.6)*(xt?.55:1)*me*_t.range(.85,1.15),I.heavy?.15:.13,tt?dx:ox,-1,1):F%3===0&&z(I.x,I.y,I.z,.6*_t.range(.9,1.1),.1,tt?$o:ox)}_t.chance(K?.08:I.heavy?.7:.35)&&ye(I.x,I.y-.2,I.z,1,I.dx,I.dz,3,I.officer?ix[I.i-t.crowd.grunts&3]:nx,.07,.14,[2,5],[1,1.6])}),oe("ko",I=>{let tt=I.officer?ix[I.i-t.crowd.grunts&3]:nx,st=t.hero.state==="musou"&&!I.officer,K=Math.min(1,Math.max(.45,Math.hypot(zt.x-I.x,zt.y-I.y,zt.z-I.z)/5));if(ye(I.x,I.y,I.z,Math.round((I.officer?14:st?4:9)*K),I.dx,I.dz,4.2,tt,(st?.08:.11)*K,(st?.13:.22)*K,[1.8,4.2],[1.2,2]),!st&&K>.7)for(let[xt,Vt,kt,Zt]of I.officer?Lw[I.i-t.crowd.grunts&3]:Pw)ye(I.x,I.y+Zt,I.z,1,I.dx,I.dz,3.4,[xt],Vt*K,kt*K,[2.2,4],[1.1,1.6]);Se(I.x,I.y,I.z,3,I.dx,I.dz,9,Bd,.05),_t.chance(.5)&&R(I.x,I.y-.4,I.z,2,.3),et(I.x,I.z,2,1.4,.55,.15,.4)}),oe("enemy:land",I=>{et(I.x,I.z,I.bounce?2:3,1.6,.46,.1,.5),I.bounce||ye(I.x,.1,I.z,2,0,0,1.8,Dw,.08,.16,[1.5,3.5],[1.4,2.2])}),oe("dodge",I=>{et(I.x-I.dx*.4,I.z-I.dz*.4,7,2.8,.5,.08,.5)}),oe("footstep",I=>I.kick?et(I.x,I.z,6,2.2,.46,.06,.5):et(I.x,I.z,I.speed>6?3:1,I.speed>6?1.1:.6,I.speed>6?.36:.22,.05,.42)),oe("jump",I=>et(I.x,I.z,4,1.8,.42,.06,.45)),oe("land",I=>{et(I.x,I.z,I.hard?9:5,2.4,.4),be(I.x,I.z,I.hard?12:9,.35,I.hard?4.5:3.2,.42,.5)}),oe("hero:hurt",I=>I.armored?z(I.x,I.y,I.z,.45,.06,[1.6,.5,.3]):z(I.x,I.y,I.z,.9,.1,[2.4,.5,.3]));let G=[1.5,.72,.2],lt=[.28,.52,.92],Bt=(jt.c3&&(jt.c3.hits.find(I=>I.pillars)||jt.c3.hits.find(I=>I.heavy))||{f:[0]}).f[0];oe("attack:swing",I=>{let tt=jt[I.move],st=tt&&tt.hits[I.win],K=t.hero;if(!tt||(!tt.air&&K.y<.3&&et(K.x+Math.sin(I.yaw)*.4,K.z+Math.cos(I.yaw)*.4,I.heavy?4:2,1.8,.34,.08,.4),!st||!I.heavy))return;let xt=Math.sin(I.yaw),Vt=Math.cos(I.yaw),kt=st.range||st.len||4,Zt=I.move[0]==="c"||I.move==="jc";if(st.rocks)W(K.x,K.z,22,3.2,.18,.42,[5.5,10.5],3.2),W(K.x,K.z,4,2.2,.45,.58,[6,9],2.2),W(K.x,K.z,18,3.6,.1,.2,[4,9],5),bt(K.x,K.z,24,1.2,3.6,4.8,[.9,1.3],.66),bt(K.x,K.z,10,.2,1.4,2.6,[.7,1],.45),be(K.x,K.z,26,.8,kt*1.8,.7,.6),f(K.x,K.z,kt*1.2,.45,[1.9,1.3,.7]),z(K.x,.5,K.z,1.6,.14,[2.2,1.6,1]),yt(.14);else if(st.pillars)ut(K.x,K.z,st.pillars,2.6,6.2,1,.62,G,.04,I.yaw),f(K.x,K.z,kt*1.2,.45,[2,1.3,.5]),be(K.x,K.z,22,.5,kt*1.6,.6,.6),bt(K.x,K.z,12,1.6,3.2,3.2,[.8,1.1],.55),W(K.x,K.z,14,2.8,.14,.34,[4,8],3.5),yt(.12);else if(I.move==="c5")ut(K.x,K.z,9,.7,5.2,.95,.3,lt,.62,I.yaw,E),dt(K.x,.15,K.z,4,kt*.9,$o,[.8,1.3],.3,.35),f(K.x,K.z,kt*1.2,.4,[.7,1.2,2]),be(K.x,K.z,20,.5,kt*1.7,.55,.6),W(K.x,K.z,16,2.2,.12,.32,[4.5,9],4),H(K.x,.6,K.z,12,7,[1,1.7,2.6]),yt(.12);else if(st.shape==="circle")Zt&&I.move!=="jc"&&dt(K.x,.15,K.z,10,kt*.9,$o,[.75,1.35],.38,.45),f(K.x,K.z,kt*1.25,.4,[.7,1.2,2]),be(K.x,K.z,22,.5,kt*1.9,.55,.6),bt(K.x,K.z,10,.8,2.4,2.4,[.7,1],.55),W(K.x,K.z,14,2.2,.13,.32,[4,8],3.5),Zt&&H(K.x,.6,K.z,14,7,[1,1.7,2.6]),yt(.12);else if(st.shape==="line"){for(let Xt=0;Xt<4;Xt++){let se=(st.off||0)+1+Xt*(st.len-1)/3.2,ce=K.x+xt*se+_t.range(-.3,.3),de=K.z+Vt*se+_t.range(-.3,.3);m(A,ce,0,de,_t.range(-.05,.05),1,_t.range(-.05,.05),_t.range(5,6.5),_t.range(.9,1.2),.55,[2.4,1.3,.4],Xt*.03),et(ce,de,3,2.2,.5,.1,.55)}f(K.x+xt*2.5,K.z+Vt*2.5,3.2,.35,[1.8,1.3,.7]),W(K.x+xt*2.5,K.z+Vt*2.5,12,1.8,.13,.3,[4,8],3),yt(.1)}else{let Xt=(st.ang||180)*Math.PI/180,se=I.yaw+(st.dir||0)*Math.PI/180;Zt&&dt(K.x,.4,K.z,7,kt*.8,$o,[.35,.9],.34,.4,[se,Xt]),f(K.x,K.z,kt*1.15,.35,[.8,1.2,1.9]),be(K.x,K.z,14,.5,kt*1.5,.5,.55),W(K.x+xt,K.z+Vt,10,1.6,.12,.28,[4,7.5],3)}R(K.x,.3,K.z,8,1.5)}),oe("attack:start",I=>{I.move==="dash"&&et(I.x,I.z,4,2.2,.36,.08,.45),I.move&&(I.move[0]==="c"||I.move==="jc")&&z(rt.x,rt.y,rt.z,.7,.2,[1.1,1.8,2.8],0),I.charge&&f(I.x,I.z,2.4,Math.max(.2,I.tell/60),[.7,1.1,2])}),oe("musou:start",I=>{f(I.x,I.z,7,.5,t0),z(rt.x,rt.y,rt.z,1,.5,_s.star,0),H(I.x,1,I.z,20,4,_s.shard,.06),be(I.x,I.z,16,.4,5,.45,.45)}),oe("musou:hit",I=>{let tt=t.hero,st=Math.sin(I.yaw),K=Math.cos(I.yaw),xt=(I.n%2?1:-1)*.25,Vt=Math.min(1.8,Math.max(.8,rt.y));if(!(I.stage==="contact"||I.stage==="rush"&&I.n%6===0)){Se(I.x,I.y,I.z,3,st,K,12,ul,.05);return}m(_,tt.x+K*xt+st*.6,Vt,tt.z-st*xt+K*.6,st,0,K,6,.4,.2,t0),m(_,tt.x-K*xt*2+st*.9,Vt+.3,tt.z+st*xt*2+K*.9,st,.02,K,4.2,.3,.16,_s.beam,.02),m(_,tt.x+K*xt*3+st*.9,Vt-.3,tt.z-st*xt*3+K*.9,st,-.02,K,3.6,.26,.15,_s.beam,.04),Se(I.x,I.y,I.z,5,st,K,12,ul,.05),I.n%3===0&&et(tt.x,tt.z,2,2.5,.4,.1,.45)}),oe("musou:burst",I=>{yt(.12,0,4),dt(I.x,.2,I.z,12,10,_s.ray1,[.2,1.3],.8,.45),dt(I.x,.2,I.z,4,7,_s.ray2,[.9,1.45],.6,.4),f(I.x,I.z,5.5,.4,t0),Se(I.x,1,I.z,24,0,0,20,ul,.07),H(I.x,1,I.z,16,10,_s.shard2,.1),be(I.x,I.z,28,.8,7,.7,.35),W(I.x,I.z,18,3,.16,.4,[5,11],8),bt(I.x,I.z,8,2,5,4.6,[.9,1.3],.4)}),oe("scenario",()=>{r.clear(),s.clear(),a.clear(),l.clear(),pt.length=0;for(let I of c)I.visible=!1;x.on.fill(0),C.on.fill(0),Ct.flash=0,Ot=0,X=-1;for(let I of[d,S]){for(let tt=0;tt<I.n;tt++)I.mesh.setMatrixAt(tt,ta);I.mesh.instanceMatrix.needsUpdate=!0}}),Ct.afterStep=()=>{let I=t.hero;(t.hitstop===0||t.hitstop%2===0)&&gt++,Bu(I,Ut),ie.set(I.x,I.y,I.z);let tt=I.state==="musou",st=tt||I.state==="attack"&&ne(I.move);if(Rg(Ut,ie,I.yaw,st?1.05:1.25,2.18,Rt,rt),I.state==="attack"&&t.hitstop===0){let se=I.moveSeq*1e3+I.moveT;if(se!==X){X=se;let ce=jt[I.move],de=I.moveT;for(let Jt of ce.hits){if(Jt.shape!=="line"||de<Jt.f[0]||de>Jt.f[1]||(Jt.every?(de-Jt.f[0])%Jt.every!==0:de!==Jt.f[0]))continue;let me=Math.sin(I.yaw),he=Math.cos(I.yaw),qe=(Jt.off||0)+.4,wn=Math.min(1.7,Math.max(.7,rt.y)),ss=Jt.heavy?[1.2,1.9,2.8]:[.8,1.3,2.4],rs=Jt.every?_t.range(-.35,.35):0;m(_,I.x+me*qe+he*rs,wn,I.z+he*qe-me*rs,me,0,he,Jt.len,Jt.heavy?.9:.62,Jt.every?.16:.22,ss),Jt.every||(m(_,I.x+me*qe+he*.45,wn+.3,I.z+he*qe-me*.45,me,.03,he,Jt.len*.7,.2,.16,[1.4,1.8,2.4],.03),m(_,I.x+me*qe-he*.5,wn-.25,I.z+he*qe+me*.5,me,-.02,he,Jt.len*.6,.18,.15,[1.4,1.8,2.4],.05))}if(I.move==="c3"&&Bt>12){let Jt=de-(Bt-12);Jt>=0&&Jt<8&&At(I,Jt/8,(Jt+1)/8)}if(!ce.air&&I.y<.2&&de%4===0){for(let[Jt,me]of ce.lunge)if(de>=Jt&&de<=me){et(I.x,I.z,2,1.4,.3,.05,.4);break}}}}if(!ft(I)){pt.length&&!pt[pt.length-1].brk&&pt.push({brk:!0,c:gt});return}let K=pt.length>ct?pt.shift():null,xt=K&&!K.brk?K:{b:new q,t:new q,rt:new q};xt.rt.copy(rt),xt.c=gt,xt.brk=!1,xt.g=st?1.15:1,xt.hue=tt?1:0;let Vt=pt[pt.length-1],kt=Vt&&!Vt.brk?Vt:null;if(kt&&kt.rt.distanceToSquared(rt)<1e-6){kt.c=gt;return}xt.g*=va.smoothstep(kt?kt.rt.distanceTo(rt):0,.08,.3);let Zt=kt?kt.flat:0;if(kt){Ks.subVectors(rt,kt.rt).cross(y.subVectors(rt,Rt));let se=Ks.length();se>1e-4&&(Zt=kt.flat*.4+.6*Math.abs(Ks.y)/se)}xt.flat=Zt;let Xt=xt.fk=va.smoothstep(Zt,.55,.85);y.subVectors(rt,Rt).normalize(),xt.t.copy(rt).addScaledVector(y,1.2*Xt),xt.b.copy(Rt).addScaledVector(y,-.45*Xt),pt.push(xt)};let Gt=(I,tt,st,K,xt,Vt)=>{let kt=xt*xt,Zt=kt*xt;return Vt.set(.5*(2*tt.x+(-I.x+st.x)*xt+(2*I.x-5*tt.x+4*st.x-K.x)*kt+(-I.x+3*tt.x-3*st.x+K.x)*Zt),.5*(2*tt.y+(-I.y+st.y)*xt+(2*I.y-5*tt.y+4*st.y-K.y)*kt+(-I.y+3*tt.y-3*st.y+K.y)*Zt),.5*(2*tt.z+(-I.z+st.z)*xt+(2*I.z-5*tt.z+4*st.z-K.z)*kt+(-I.z+3*tt.z-3*st.z+K.z)*Zt))},N=new q,k=new q;function nt(){for(;pt.length&&gt-pt[0].c>V;)pt.shift();let I=0,tt=(kt,Zt,Xt,se,ce,de=!1,Jt=0)=>{if(I>=T-1)return;let me=Math.min(1,Math.max(0,Xt/V)),he=.82*me**1.25*(1-.75*Jt),qe=I*3,wn=I*4;D[qe]=kt.x+(Zt.x-kt.x)*he,D[qe+1]=kt.y+(Zt.y-kt.y)*he,D[qe+2]=kt.z+(Zt.z-kt.z)*he,B[wn]=de?1:me,B[wn+1]=0,B[wn+2]=de?0:se,B[wn+3]=ce,I++,qe+=3,wn+=4,D[qe]=Zt.x,D[qe+1]=Zt.y,D[qe+2]=Zt.z,B[wn]=de?1:me,B[wn+1]=1,B[wn+2]=de?0:se,B[wn+3]=ce,I++},st=[],K=0,xt=0;for(let kt=0;kt<pt.length;kt++)!pt[kt].brk&&(kt===0||pt[kt-1].brk)&&xt++;let Vt=()=>{let kt=++K<xt?.4:1;if(st.length>=2){tt(st[0].b,st[0].t,V,0,0,!0);for(let Xt=0;Xt<st.length-1;Xt++){let se=st[Math.max(0,Xt-1)],ce=st[Xt],de=st[Xt+1],Jt=st[Math.min(st.length-1,Xt+2)];for(let me=0;me<Y;me++){let he=me/Y;Gt(se.b,ce.b,de.b,Jt.b,he,N),Gt(se.t,ce.t,de.t,Jt.t,he,k),tt(N,k,gt-(ce.c+(de.c-ce.c)*he),ce.g*kt,ce.hue,!1,ce.fk)}}let Zt=st[st.length-1];tt(Zt.b,Zt.t,gt-Zt.c,Zt.g*kt,Zt.hue,!1,Zt.fk),tt(Zt.b,Zt.t,V,0,0,!0)}st=[]};for(let kt of pt)kt.brk?st.length&&Vt():st.push(kt);st.length&&Vt(),L.setDrawRange(0,Math.max(0,(I/2-1)*6)),L.attributes.position.needsUpdate=!0,L.attributes.aT.needsUpdate=!0}let Q=e&&e.fires||[],Ft=0,It=0,Mt=0;return Ct.update=I=>{for(Ft+=I*30;Ft>1&&Q.length;){Ft--;let st=Q[_t.int(0,Q.length-1)].position;r.spawn(st.x+_t.range(-.6,.6),.8,st.z+_t.range(-.6,.6),_t.range(-.4,.4),_t.range(1.2,2.6),_t.range(-.4,.4),_t.range(1.5,3.5),_t.range(.03,.06),3,2,.8,.2)}let tt=t.hero;for(It+=I*9;It>1;){It--;let st=_t.range(0,6.283),K=_t.range(2,13);r.spawn(tt.x+Math.cos(st)*K,_t.range(.2,2.5),tt.z+Math.sin(st)*K,_t.range(-.2,.6),_t.range(.3,1.1),_t.range(-.3,.3),_t.range(2.2,4),_t.range(.028,.05),3,2.3,.85,.22)}if(tt.state==="musou"&&tt.stateT<34)for(Mt+=I*70;Mt>1;){Mt--;let st=_t.range(0,6.283),K=_t.range(.5,2.2);r.spawn(tt.x+Math.cos(st)*K,_t.range(0,1.2),tt.z+Math.sin(st)*K,-Math.sin(st)*1.5,_t.range(1.5,3.5),Math.cos(st)*1.5,_t.range(.5,.9),_t.range(.04,.07),3,_s.mote[0],_s.mote[1],_s.mote[2])}r.update(),s.update(),a.update(),l.update(),M(),U();for(let st of c){if(!st.visible)continue;let K=(i()-st.userData.f0)/60/st.userData.dur;if(K>=1){st.visible=!1;continue}st.material.uniforms.uU.value=K}Ot>0?Ot-=I:Ct.flash=Math.max(0,Ct.flash-I*Ht),nt()},Ct}var $i={story:{id:"story",coin:"Story",title:"Story Mode",play:!0,icon:"scroll",text:"Five battles of one siege. Break the vanguard, take the camps, hold the standard and face what wakes in the Vault.",goal:"Follow the battle orders"},battle:{id:"battle",coin:"Battle",title:"Free Battle",play:!0,icon:"swords",text:"The horde is at the gates. Bring down all four enforcers to win the battle.",goal:"Defeat the four enforcers"},endless:{id:"endless",coin:"Endless",title:"Endless Mode",play:!0,icon:"infinity",text:"No objective and no clock. The horde never stops coming. Fight until you fall.",goal:"Survive as long as you can"},challenge:{id:"challenge",coin:"100 K.O.",title:"Challenge: 100 K.O.",play:!0,icon:"clock",text:"Knock out 100 of the horde as fast as you can. Best times save on this device.",goal:"100 knockouts against the clock",target:100},database:{id:"database",coin:"Database",title:"Database",icon:"book",text:"The fighters, the four enforcers and the horde."},options:{id:"options",coin:"Options",title:"Options",icon:"gear",text:"Army size, sound, camera distance and camera speed. Saved on this device."},exit:{id:"exit",coin:"Exit",title:"Back to Gamescool",icon:"door",text:"Leave the battlefield and return to the game shelf."}},Yo=["story","battle","endless","challenge","database","options","exit"],gx=[{name:"Iron Bailiff",home:"Dead Rail Yards",art:"art/boss-bailiff.webp",frames:1,text:"Bronze riot plate, a visor helm and a repo hook. The Bailiff comes from the rail yards to collect what is owed."},{name:"The Collector",home:"Night Market",art:"art/boss-collector.webp",frames:1,text:"A crimson coat, a padlocked gold chain and a sack of coins swung like a mace. Every debt in the market ends up in that sack."},{name:"The Gatekeeper",home:"Exchange Citadel",art:"art/boss-gatekeeper.webp",frames:1,text:"Keeper of the Exchange gates: violet armour, a keyring and a halberd with a glowing crystal."},{name:"The Hoard",home:"The Vault",art:"art/boss-hoard.webp",frames:1,text:"A golem of gold coins that woke up in the Vault, crowned and crusted with treasure, swinging a gold-bar maul."}],xx=[{name:"The Horde",home:"Everywhere",art:"art/enemy-runner.webp",frames:1,text:"Green-grey, glowing-eyed and endless. Militia with rusty pipe spears or cleavers and scrap shields march in squads; rust-helmed captains with halberds take more hits; standard-bearers carry the red down-candle banners and hang back behind the fight. When a squad falls, another column runs in."}];var ea={captain:{name:"Gate Captain",sub:"The city watch",side:"ally",art:"art/captain-portrait.webp",pos:"46% 10%",zoom:2.5},bailiff:{name:"Iron Bailiff",sub:"Dead Rail Yards",side:"foe",art:"art/boss-bailiff.webp",pos:"42% 8%",zoom:2.2},collector:{name:"The Collector",sub:"Night Market",side:"foe",art:"art/boss-collector.webp",pos:"44% 10%",zoom:2.1},gatekeeper:{name:"The Gatekeeper",sub:"Exchange Citadel",side:"foe",art:"art/boss-gatekeeper.webp",pos:"58% 6%",zoom:2.4},hoard:{name:"The Hoard",sub:"The Vault",side:"foe",art:"art/boss-hoard.webp",pos:"48% 14%",zoom:2},narr:{name:"",side:"narr"},captains:{name:"Camp Captains",sub:"Horde officers",side:"foe",art:"art/enemy-runner.webp",pos:"50% 12%",zoom:2.2},escorts:{name:"Escorts",sub:"The Collector\u2019s guard",side:"foe",art:"art/enemy-runner.webp",pos:"50% 12%",zoom:2.2}},mn={bailiff:0,collector:1,gatekeeper:2,hoard:3},fl=(n,t)=>typeof n=="string"?n:n[t]||n.ansem,yn=[{n:1,id:"gates",title:"The Horde at the Gates",place:"The plaza below the city gate",time:"Dusk",intro:[["narr","The city had flown the green candle for a hundred days. Tonight the Horde came to take it down."],["captain","Whoever you are, you picked a bad night to visit. Their vanguard holds the plaza, and our gate will not take another ram."],["hero",{ansem:"I am not visiting. Open a lane and point me at the biggest one.",useless:"I was told this was the way in. Nobody mentioned the army."}],["captain","Break the vanguard and their commander will have to come out himself. Then break him too."],["hero",{ansem:"Fine. Red candles close tonight.",useless:"Break the army, then the man. Got it. Probably."}]],brief:"The Horde\u2019s vanguard holds the plaza below the city gate. Cut through it until its commander, the Iron Bailiff, comes out to collect.",win:["Defeat 40 of the vanguard","Defeat the Iron Bailiff"],lose:["You fall"],battle:{start:["captain","The plaza is theirs. Take it back!"],half:["captain","They are breaking on the left! Keep pushing!"],boss:["bailiff","Everyone pays the Horde. You are late on your payments."],bossReply:["hero",{ansem:"Come and collect, then.",useless:"I don\u2019t have payments. I have a ladle."}],bossHurt:["bailiff","Hold still. The paperwork says I take the gate as well."],won:["captain","The vanguard is running! The plaza is ours!"]},outro:[["captain","The Bailiff dragged himself back to the rail yards. You bought us one night."],["captain","But look at the plain. Three new fires. They are making camp."],["hero",{ansem:"Camps mean supplies. Supplies burn.",useless:"Fires mean food, right? Can I go to the camps?"}],["captain","At dawn, then. We will open the gate for you."]],par:{time:210,kos:140},foes:[["bailiff","Commands the vanguard"]],map:{hero:[0,-6],boss:[[mn.bailiff,-10,38]]}},{n:2,id:"camps",title:"Red Camps",place:"The plain, three Horde camps",time:"Morning",intro:[["narr","By morning three Horde camps ringed the plain, each flying the red down-candle and sending fresh columns at the walls."],["captain","Every column that hits our gate marches out of those camps. Take the camps and the columns stop."],["collector","Those camps are my investment. Every tent, every spear, every soldier is on my books."],["hero",{ansem:"Then I am about to turn your books very red.",useless:"I have never been an investment. I am more of a loss."}],["collector","Break my camps and I will come to collect the difference. In person."]],brief:"Three Horde camps on the plain keep sending columns into the fight. Defeat each camp\u2019s captain to take the camp. When the last camp falls, the Collector comes for his losses.",win:["Take the three camps","Defeat the Collector"],lose:["You fall"],battle:{start:["captain","West, east and south. Each camp has a captain under its banner."],first:["hero",{ansem:"One down. The bull is just warming up.",useless:"I took a camp. Nobody tell my family, they won\u2019t believe it."}],boss:["collector","Three camps. Do you know what those cost me?"],bossHurt:["collector","Everything has a price. Yours is coming due."],won:["captain","The plain is clear! The columns have stopped!"]},outro:[["captain","The camps are ash, and the Collector crawled away with an empty sack."],["captain","But our scouts saw the Gatekeeper\u2019s columns turn for the plaza. He wants our rally standard."],["hero",{ansem:"The green candle stays up. Where do I stand?",useless:"I am good at standing next to things. Put me next to the flag."}],["captain","Right in front of it. Let nobody through."]],par:{time:330,kos:170},foes:[["captains","One under each camp banner"],["collector","Comes when the camps fall"]],camps:[{name:"West Camp",x:31,z:14},{name:"East Camp",x:-31,z:10},{name:"South Camp",x:2,z:-33}],map:{hero:[0,0],boss:[[mn.collector,0,-42]]}},{n:3,id:"hold",title:"Hold the Line",place:"The plaza, under the rally standard",time:"Noon",intro:[["narr","The defenders planted their great green-candle standard in the plaza. While it flies, the city keeps fighting."],["gatekeeper","Every gate has a key. Every standard has a pole. I break both."],["captain","His columns will march straight for the standard. Meet them before they reach it."],["hero",{ansem:"Nobody touches the green candle.",useless:"So I guard the flag. Flags don\u2019t hit back. I like this job."}],["gatekeeper","Hold it if you can. I will come for it myself when your arms are tired."]],brief:"The Gatekeeper\u2019s columns march straight for the rally standard. Stop each column before it cuts the pole down. Hold out for 2:30 and the Gatekeeper leads the last assault himself.",win:["Protect the standard for 2:30","Defeat the Gatekeeper"],lose:["The standard falls","You fall"],battle:{start:["captain","Here they come! Watch every road into the plaza!"],hurt:["captain","The standard is taking hits! Get back to it!"],crack:["captain","The pole is cracking! Don\u2019t let it fall!"],boss:["gatekeeper","Enough waiting. I will open this myself."],bossHurt:["gatekeeper","Every lock gives in the end."],won:["captain","The standard stands! The line held!"],lost:["gatekeeper","Down it comes. Open the gate."]},outro:[["captain","The standard still flies. And the Gatekeeper left his keyring in the dirt."],["captain","Those are our treasury keys. The Collector! He slipped in during the assault!"],["collector","A debt is a debt, and your treasury was overdue. Pleasure doing business."],["hero",{ansem:"Nobody outruns the bull.",useless:"He took the money? Some of that was mine. About a coin\u2019s worth."}]],par:{time:230,kos:150},foes:[["gatekeeper","Leads the last assault"]],standard:{x:-10,z:28,hp:100},hold:150,map:{hero:[-10,12],boss:[[mn.gatekeeper,0,-44]]}},{n:4,id:"chase",title:"The Collector Runs",place:"The plain, the south road",time:"Afternoon",intro:[["narr","The Collector ran for the south road with the city\u2019s treasury chest on his back and his last escorts around him."],["captain","If he reaches the road, the treasury is gone for good. Run him down!"],["collector","Run, run! The Horde always gets paid in the end!"],["hero",{ansem:"Keep running. It only makes the hit harder.",useless:"Chasing a man with a sack of money. For once I am on the right side of this."}]],brief:"The Collector is fleeing across the plain toward the south road with the city treasury. Catch him and knock him out before he escapes. His escorts will try to slow you down.",win:["Defeat the Collector before he escapes"],lose:["The Collector escapes","You fall"],battle:{start:["captain","He is heading for the south road! Go!"],hit:["collector","Hands off the merchandise!"],half:["captain","He is past the camps! Faster!"],cornered:["collector","Take the coins, just let me go! No? Worth a try."],won:["captain","The treasury is back! Bring it home!"],lost:["collector","Pleasure doing business!"]},outro:[["captain","The treasury is back behind our walls. The Collector won\u2019t be counting anything for a while."],["narr","Then the ground began to shake."],["hoard","Gold remembers every hand that ever spent it. I am here to take it all back."],["captain","Something just walked out of the Vault, and the whole Horde is marching behind it."],["hero",{ansem:"Good. I was hoping for a big one.",useless:"It is made of coins. Is that\u2026 my family?"}]],par:{time:75,kos:50},foes:[["collector","Carries the treasury"],["escorts","Wait along the road"]],route:[[0,12],[20,4],[27,-14],[8,-25],[-16,-20],[-26,-34],[-6,-44]],map:{hero:[-8,34],boss:[[mn.collector,0,12]]}},{n:5,id:"vault",title:"The Vault Wakes",place:"Before the city gate",time:"Night",intro:[["narr","Everything the Horde had left marched on the gate behind the Hoard, a golem of gold coins that woke up in the Vault."],["hoard","Bailiff. Collector. Gatekeeper. Hold the champion. I will open the gate myself."],["bailiff","Payment is due."],["captain","Three enforcers stand between you and that thing, and the walls won\u2019t hold much longer. This is it."],["hero",{ansem:"Last candle of the night. We close it green.",useless:"No useful qualifications. Plenty of ladle. Let\u2019s go."}]],brief:"The Hoard is marching on the city gate. The Iron Bailiff, the Collector and the Gatekeeper guard its approach. Defeat all three, and the Hoard will face you itself.",win:["Defeat the three enforcers","Defeat the Hoard"],lose:["You fall"],battle:{start:["captain","For the green candle! Everyone who can hold a spear, to the walls!"],shrug:["hoard","Not yet, champion. Get through my enforcers first."],boss:["hoard","So the champion is still standing. Then I will spend you."],rush:["hoard","Every coin I lose, I take back twice!"],low:["hoard","No\u2026 the Vault\u2026 is empty\u2026"],won:["captain","It is falling apart! The Horde is running!"]},outro:[["narr","The Hoard broke apart into a hill of coins, and the Horde ran for the hills with nothing."],["captain","The gate held. The green candle still flies. The city owes you everything."],["hero",{ansem:"Keep the candle green. That is payment enough.",useless:"Everything? Could I have some of those coins? The small ones."}],["captain","Take a whole wagon. You earned it."],["narr","The End."]],par:{time:300,kos:180},foes:[["bailiff","Guards the east"],["collector","Guards the west"],["gatekeeper","Guards the south"],["hoard","Waits before the gate"]],guards:[[mn.bailiff,-27,14],[mn.collector,27,16],[mn.gatekeeper,0,-30]],boss:[mn.hoard,-10,38],map:{hero:[0,-2],boss:[[mn.bailiff,-27,14],[mn.collector,27,16],[mn.gatekeeper,0,-30],[mn.hoard,-10,38]]}}];function vx(n,{time:t,kos:e,hp:i,extra:s=1}){let r=Math.max(0,Math.min(1,(n.par.time*1.8-t)/(n.par.time*1.2))),a=Math.min(1,e/n.par.kos),l=Math.round(100*(.35*r+.25*a+.25*i+.15*s));return{score:l,rank:l>=85?"S":l>=70?"A":l>=50?"B":"C"}}var na=[["Iron Bailiff","DEAD RAIL YARDS"],["The Collector","NIGHT MARKET"],["The Gatekeeper","EXCHANGE CITADEL"],["The Hoard","THE VAULT"]],Vd=(n,t)=>n[t%n.length];function yx(n,t,{camera:e=null}={}){t.hudTagR=44.7,n.innerHTML=`
    <div class="h-intro"><div class="zh"></div><div class="en"></div>
      <div class="keys"><kbd>WASD</kbd> move \xB7 <kbd>J</kbd> attack \xB7 <kbd>K</kbd> charge \xB7 <kbd>Space</kbd> jump<br>
        <kbd>L</kbd> dodge \xB7 <kbd>I</kbd> Surge \xB7 <kbd>Q</kbd><kbd>E</kbd> camera \xB7 <kbd>H</kbd> help</div>
      <div class="goal"></div></div>
    <div class="h-clock"><b>0:00.0</b><small>K.O. 0 / 100</small></div>
    <div class="h-std"><small>Rally standard</small><div class="bar"><em></em><i></i></div></div>
    <div class="h-obj"><h4>Objectives</h4><ol></ol></div>
    <div class="h-pins">${'<div class="pin"><i></i><b></b><span></span></div>'.repeat(4)}</div>
    <div class="h-heal"></div>
    <div class="h-target"><i class="seal">BOSS</i><b></b><span></span><div class="bar"><em></em><i></i></div><strong>DOWN</strong></div>
    <div class="h-map"><div class="morale"><i></i><span>YOU</span><span>HORDE</span></div><canvas width="200" height="200"></canvas><div class="bosses"></div></div>
    <div class="h-offs">${na.map(([F,X])=>`<div class="off"><i class="ld"></i><div class="mk">\u25BC\u25BC</div><div class="bd"><b>${F}</b><span>${X}</span><div class="bar"><em></em><i></i></div></div></div>`).join("")}${'<div class="off cap"><i class="ld"></i><div class="mk">\u25BC</div><div class="bd"><b></b><span></span><div class="bar"><em></em><i></i></div></div></div>'.repeat(3)}</div>
    <div class="h-chain"><div class="num"><b class="dig" data-t="0"><span>0</span></b><u></u><u></u><u></u></div><small>HIT CHAIN</small></div>
    <div class="h-mile"><b class="dig" data-t="50"><span>50</span></b><i class="seal">K.O.</i></div>
    <div class="h-band"><p></p><small></small></div>
    <div class="h-dlg"><i class="face"></i><div><b><span></span></b><p></p><small></small></div></div>
    <div class="h-player"><div class="badge"><img alt=""></div><div class="name"></div>
      <div class="bar hp"><em></em><i></i></div>
      <div class="mu"><div><i></i></div><div><i></i></div><div><i></i></div><span>SURGE</span></div></div>
    <div class="h-ko"><div class="num"><b class="dig" data-t="0"><span>0</span></b><u></u></div><small>K.O.</small></div>`;let i=F=>n.querySelector(F),s=F=>[...n.querySelectorAll(F)],r=i(".h-intro"),a=i(".h-player"),l=i(".hp i"),c=i(".hp em"),o=s(".mu i"),u=i(".mu"),f=i(".h-ko"),h=i(".h-ko b"),d=i(".h-ko u"),p=i(".h-chain"),x=i(".h-chain b"),_=s(".h-chain u").map(F=>({el:F,f:-99})),g=i(".h-mile"),A=i(".h-mile b"),E=i(".h-mile .seal"),m=i(".h-band"),v=i(".h-band p"),y=i(".h-band small"),w=i(".h-dlg"),M=i(".h-dlg p"),S=i(".h-dlg small"),P=i(".h-dlg b span"),C=i(".h-dlg .face"),z=i(".h-std"),U=i(".h-std .bar i"),V=i(".h-std .bar em"),Y=i(".h-obj"),ct=i(".h-obj ol"),T=i(".h-heal"),L=s(".h-pins .pin").map(F=>({el:F,b:F.querySelector("b"),s:F.querySelector("span")})),D=i(".h-intro .zh"),B=i(".h-intro .en"),b=i(".h-player .name"),j=i(".badge img"),it=i(".h-map .bosses"),J=i(".h-intro .goal"),vt=i(".h-clock"),Nt=i(".h-clock b"),Z=i(".h-clock small");it.innerHTML=na.map(([F])=>`<i title="${F}"></i>`).join("");let at=[...it.children],pt=i(".h-target"),zt=i(".h-target b"),gt=i(".h-target span"),Ut=i(".h-target .bar i"),ie=i(".h-target .bar em"),rt=s(".off").map(F=>({el:F,bd:F.querySelector(".bd"),mk:F.querySelector(".mk"),ld:F.querySelector(".ld"),bar:F.querySelector(".bar i"),lagEl:F.querySelector(".bar em"),lag:1,name:F.querySelector("b"),sub:F.querySelector("span")})),Rt=F=>{let X=F?F.art:"hero";if(C.dataset.k===X)return;C.dataset.k=X;let G=Si(t);F?(C.style.backgroundImage=`url(${F.art})`,C.style.backgroundSize=`${(F.zoom||2)*100}%`,C.style.backgroundPosition=F.pos||"50% 10%"):(C.style.backgroundImage=`url(${G.portrait.replace("-portrait","-disc")})`,C.style.backgroundSize="cover",C.style.backgroundPosition="50% 50%")},Ct=i(".morale i"),Ot=i(".h-map"),Ht=i(".h-map canvas"),yt=Ht.getContext("2d");oe("fighter",()=>{let F=Si(t),X=F.portrait.replace("-portrait","-disc");W(D,F.name),W(B,`${F.title} \xB7 ${F.weapon}`),W(b,F.name),W(P,F.name),j.getAttribute("src")!==X&&(j.src=X),C.dataset.k="",Rt(null),n.style.setProperty("--fc",F.ui.main),n.style.setProperty("--fcl",F.ui.light)});let ft={},Se=()=>Object.assign(ft,{lastCombo:0,shownChain:0,chainF:-99,chainQ:[],ghostN:0,shownKo:0,koF:-99,mile:0,mileF:-99,mileTop:33,mileDim:1,lagHp:1,lastF:0,hurtF:-99,actF:0,band:null,bandQ:[],dlg:null,waveF:-999,tgt:-1,tgtF:-999,tgtKoF:-999,musouF:-999,musouEnd:-999,waves:[],introCut:0,startF:0,clockF:0,objF:{},healF:-999,objSig:""});Se();let et=(F,X)=>{X=String(X),F.dataset.t!==X&&(F.dataset.t=X,F.firstChild.textContent=X)},be=()=>{et(h,0),d.textContent="0"},ye=null,H=(F,X,G=150)=>{ft.bandQ.length<3&&ft.bandQ.push({html:F,en:X,dur:G})},R=(F,X="",G=300,lt=null)=>{ft.dlg={zh:F,en:X,f:t.frame,dur:G,who:lt}},dt=0;oe("scenario",F=>{Se(),be();for(let G of at)G.className="";ft.startF=t.frame;let X=F.name==="story"&&t.story.ch;if(n.classList.toggle("story",!!X),X){let G=t.story.ch;W(D,G.title),W(B,`Chapter ${G.n} \xB7 ${G.place}`),W(J,G.win[0])}else{let G=Si(t);W(D,G.name),W(B,`${G.title} \xB7 ${G.weapon}`),W(J,($i[t.mode]||$i.battle).goal)}if(r.classList.toggle("chapter",!!X),it.style.display=t.mode==="battle"?"":"none",ct.innerHTML="",ft.objSig="",F.name==="crowd"||F.name==="arena"){let G=Si(t).lines;ft.dlg={zh:Vd(G.start,dt++),en:"",f:t.frame+185,dur:300}}}),oe("story:say",F=>{let X=F.who==="hero"?null:ea[F.who];R(fl(F.text,t.fighter),"",280,X&&X.side!=="narr"?X:null),ft.dlg.name=X?X.name:Si(t).name}),oe("story:banner",F=>H(F.title,F.sub,170)),oe("story:obj",F=>{ft.objF[F.k]=t.frame}),oe("story:heal",()=>{ft.healF=t.frame}),oe("crowd:wave",F=>{!F.quiet&&t.frame-ft.waveF>600&&(ft.waveF=t.frame,H("<em>Horde</em> reinforcements",F.from?`A column marches out of the ${F.from}`:"More of them are pouring through the camp.",130)),ft.waves.push({x:F.x,z:F.z,f:t.frame})}),oe("hit",F=>{ft.actF=t.frame,F.officer&&(ft.tgt=F.i,ft.tgtF=t.frame)}),oe("attack:start",()=>{ft.actF=t.frame}),oe("ko",F=>{if(!F.officer||t.mode==="story")return;let X=(F.i-t.crowd.grunts)%na.length,[G]=na[X],lt=at.filter(Bt=>!Bt.className).length-(at[X].className?0:1);at[X].className="down",H(`<em>${G}</em> is down`,lt>0?`${lt} enforcer${lt>1?"s":""} left`:"All four enforcers are down",150),R(Vd(Si(t).lines.officer,t.frame),"",180),ft.tgt=F.i,ft.tgtKoF=t.frame}),oe("musou:start",()=>{ft.musouF=ft.actF=t.frame,ft.band=null,ft.dlg=null}),oe("musou:end",()=>{ft.musouEnd=t.frame,R(Vd(Si(t).lines.musou,t.frame)),ft.dlg.f+=20}),oe("hero:hurt",()=>{ft.hurtF=ft.actF=t.frame}),addEventListener("keydown",F=>{F.code==="KeyH"&&(ye=!(ye??!0))});let ot=(F,X,G)=>{F.style[X]!==G&&(F.style[X]=G)},W=(F,X)=>{X=String(X),F.textContent!==X&&(F.textContent=X)},bt=F=>Math.max(0,Math.min(1,F)),At=F=>F<50?F>=25?25:0:Math.floor(F/50)*50,ut=F=>1-bt((F-ft.actF-240)/40),mt=new q;return{update(){let F=t.hero,X=t.frame,G=t.crowd,lt=n.clientWidth,Bt=n.clientHeight,Gt=Math.max(0,X-ft.lastF);ft.lastF=X;let N=F.state==="musou",k=ye===!1||ft.musouF>=0?0:bt((180-(X-ft.startF))/30)*(1-ft.introCut);ot(r,"opacity",(ye?1:k).toFixed(2));let nt=t.mode==="story"&&t.story.ch?t.story:null;if(nt&&nt.clock){let $=Math.ceil(nt.clock.t);W(Nt,`${Math.floor($/60)}:${String($%60).padStart(2,"0")}`),W(Z,nt.clock.label),ot(vt,"opacity","1"),vt.classList.toggle("urgent",!1)}else if(nt&&nt.runner&&!nt.runner.cornered&&!nt.result)W(Nt,`${Math.max(0,Math.round(nt.runner.left))} m`),W(Z,"The Collector \xB7 to the south road"),ot(vt,"opacity","1"),vt.classList.toggle("urgent",nt.runner.left<nt.runner.total*.3);else if(t.mode==="challenge"){let $=$i.challenge.target;F.kos>=$||(ft.clockF=X);let Lt=(ft.clockF-ft.startF)/60;W(Nt,`${Math.floor(Lt/60)}:${String(Math.floor(Lt%60)).padStart(2,"0")}.${Math.floor(Lt*10%10)}`),W(Z,`K.O. ${Math.min(F.kos,$)} / ${$}`),ot(vt,"opacity","1")}else ot(vt,"opacity","0");let Q=nt&&nt.standard;if(Q){let $=bt(Q.hp/Q.max);ot(z,"opacity","1"),ot(U,"transform",`scaleX(${$.toFixed(4)})`),ft.stdLag=ft.stdLag==null||ft.stdLag<$?$:Math.max($,ft.stdLag-.002*Gt),ot(V,"transform",`scaleX(${ft.stdLag.toFixed(4)})`),z.classList.toggle("hit",X-Q.hitF<8),z.classList.toggle("low",$<.3)}else ot(z,"opacity","0");if(nt){let $=nt.obj.map(Pt=>`${Pt.state}${Pt.n??""}`).join("|");$!==ft.objSig&&(ft.objSig=$,ct.innerHTML=nt.obj.map((Pt,Lt)=>`<li class="${Pt.state}" data-k="${Lt}"><i></i><span>${Pt.state==="wait"?"? ? ?":Pt.text}</span>${Pt.of&&Pt.state==="active"?`<b>${Pt.n||0}/${Pt.of}</b>`:""}</li>`).join(""));for(let Pt of ct.children)Pt.classList.toggle("flash",X-(ft.objF[Pt.dataset.k]??-999)<70);ot(Y,"opacity",(.55+.45*ut(X)).toFixed(2))}else ot(Y,"opacity","0");ot(T,"opacity",bt(1-(X-ft.healF)/50).toFixed(2));let Ft=1-.45*bt((X-ft.actF-240)/40)*(t.musou.ready()?0:1);ot(a,"opacity",Ft.toFixed(2)),ot(Ot,"opacity",Ft.toFixed(2));let It=F.hp/F.hpMax;ft.lagHp=X-ft.hurtF<20?ft.lagHp:Math.max(It,ft.lagHp-.008*Gt),ft.lagHp<It&&(ft.lagHp=It),ot(l,"transform",`scaleX(${It.toFixed(4)})`),ot(c,"transform",`scaleX(${ft.lagHp.toFixed(4)})`),a.classList.toggle("low",It<.3),a.classList.toggle("hurt",X-ft.hurtF<12);let Mt=F.musou/F.musouMax*3;o.forEach(($,Pt)=>ot($,"transform",`scaleX(${(Math.floor(bt(Mt-Pt)*32)/32).toFixed(4)})`));let I=t.musou.ready()&&!N;if(u.classList.toggle("full",I),I){u.style.setProperty("--p",(.5+.5*Math.sin(X*.12)).toFixed(2));let $=X%90/50*3.6-.3;o.forEach((Pt,Lt)=>Pt.style.setProperty("--s",`${(($-Lt)*100).toFixed(1)}%`))}if(u.classList.toggle("active",N),F.combo<ft.shownChain&&(ft.shownChain=0,ft.chainF=-99,ft.chainQ.length=0),F.combo!==ft.lastCombo&&(F.combo>ft.lastCombo&&ft.chainQ.push([X,F.combo]),ft.lastCombo=F.combo),F.combo>ft.shownChain&&X-ft.chainF>=2){let $=ft.shownChain,Pt=Math.floor((F.combo-$)*.3);for(let[$t,Kt]of ft.chainQ)Pt=Math.max(Pt,Math.ceil((Kt-$)/Math.max(1,($t+10-X>>1)+1)));for(ft.shownChain=Math.min(F.combo,$+Math.max(1,Pt));ft.chainQ.length&&ft.chainQ[0][1]<=ft.shownChain;)ft.chainQ.shift();ft.chainF=X,et(x,ft.shownChain);let Lt=_[ft.ghostN++%_.length];W(Lt.el,ft.shownChain%10),Lt.f=X}let tt=X-ft.chainF;if(ot(p,"opacity",F.combo>1?Math.min(1,F.comboT/24).toFixed(2):"0"),ot(x,"transform",`scale(${(1+.14*bt(1-tt/4)).toFixed(3)})`),_.forEach(($,Pt)=>{let Lt=(X-$.f)/6,$t=Lt<1?1-Lt*Lt:0,Kt=Pt===(ft.ghostN-1)%_.length;ot($.el,"opacity",(.95*$t*(Kt?1:.35)).toFixed(2)),ot($.el,"transform",`translate(${($t*.52).toFixed(3)}em, ${(-$t*.3).toFixed(3)}em) scale(${(1+.45*$t).toFixed(3)})`)}),F.kos<ft.shownKo&&(ft.shownKo=F.kos),F.kos>ft.shownKo&&X-ft.koF>=4){let $=F.kos-ft.shownKo;ft.shownKo+=$<=10?$:Math.max(10,Math.ceil($/10)*5),ft.koF=X,et(h,ft.shownKo),W(d,ft.shownKo)}let st=At(F.kos);if(st<ft.mile&&(ft.mile=st),st>ft.mile&&N&&st===25&&(ft.mile=st),st>ft.mile){if(ft.mile=st,ft.mileF=X,et(A,st),ft.shownKo=F.kos,ft.koF=X,et(h,F.kos),W(d,F.kos),ft.mileTop=33,ft.mileDim=1,e){mt.set(F.x,F.y+2.05,F.z).project(e);let $=(mt.x+1)/2,Pt=(1-mt.y)/2,Lt=mt.z<1;mt.set(F.x,F.y,F.z).project(e);let $t=(1-mt.y)/2,Kt=Math.max(.03,($t-Pt)*.35*Bt/lt);Lt&&$-Kt<.62&&$+Kt>.41&&Pt<.53&&$t>.36&&(ft.mileTop=Math.max(8,Math.round((Pt-.21)*100)),Pt-.21<.08&&(ft.mileDim=.4))}ot(g,"top",`${ft.mileTop}%`)}let K=X-ft.koF,xt=bt(1-K/7);ot(h,"transform",`scale(${(1+1.9*xt*xt).toFixed(3)})`),ot(h,"opacity",(K<3?.45+K*.2:1).toFixed(2));let Vt=K>=5&&K<20?(K-5)/15:1;ot(d,"opacity",((1-Vt)*.55).toFixed(2)),ot(d,"transform",`scale(${(1+Vt*.9).toFixed(3)})`),ot(f,"opacity",ft.shownKo===0?"0":Math.min(Ft,X-ft.koF>300?.7:1).toFixed(2));let kt=X-ft.mileF;if(kt<19){let $=bt(1-kt/3),Pt=bt(1-kt/5);ot(g,"opacity",((kt<11?1:1-(kt-11)/7)*ft.mileDim).toFixed(2)),ot(g,"transform",`translate(${(kt<11?0:-(kt-11)*.36).toFixed(2)}rem, 0) scale(${(1+.7*$*$).toFixed(3)})`),ot(g,"filter",Pt>0?`brightness(${(1+.9*Pt).toFixed(2)})`:"none");let Lt=kt-2;ot(E,"opacity",Lt<0?"0":"1"),ot(E,"transform",`rotate(-6deg) scale(${(1+.5*bt(1-Lt/2)).toFixed(3)})`)}else ot(g,"opacity","0");(!ft.band||X-ft.band.f>=ft.band.dur)&&ft.bandQ.length&&!N&&(ft.band={...ft.bandQ.shift(),f:X});let Zt=ft.band,Xt=Zt?X-Zt.f:1e9;Zt&&Xt<Zt.dur?(v.innerHTML!==Zt.html&&(v.innerHTML=Zt.html,W(y,Zt.en)),ot(m,"opacity",Math.min(1,Xt/6,(Zt.dur-Xt)/18).toFixed(2)),ot(m,"transform",`scaleY(${Math.min(1,.3+Xt/6).toFixed(3)})`)):ot(m,"opacity","0");let se=ft.dlg,ce=se?X-se.f:-1,de=se&&ce>=0&&ce<se.dur?Math.min(1,ce/8,(se.dur-ce)/16):0;de>0?(W(M,se.zh),W(S,se.en),Rt(se.who),W(P,se.name||Si(t).name),w.dataset.side=se.who?se.who.side:"hero",ot(w,"opacity",de.toFixed(2)),ot(w,"transform",`translateX(${(-Math.max(0,1-ce/8)*2).toFixed(2)}rem)`)):ot(w,"opacity","0");let Jt=ft.tgt>=0&&G.st[ft.tgt]!==Et.OFF&&(X-ft.tgtF<600||X-ft.tgtKoF<70)?ft.tgt:-1;if(Jt<0&&nt&&nt.boss>=0&&G.st[nt.boss]!==Et.OFF&&G.st[nt.boss]!==Et.DEAD&&!G.invuln[nt.boss]&&(G.st[nt.boss]!==Et.IDLE||G.flee[nt.boss])&&(Jt=nt.boss),Jt<0){let $=81;for(let Pt=G.grunts;Pt<G.N;Pt++){if(G.st[Pt]===Et.OFF||G.st[Pt]===Et.DEAD)continue;let Lt=(G.x[Pt]-F.x)**2+(G.z[Pt]-F.z)**2;Lt<$&&($=Lt,Jt=Pt)}}let me=Jt>=0&&X-ft.tgtKoF<70&&Jt===ft.tgt;if(ot(pt,"opacity",Jt>=0&&k<.5?(me?bt((70-(X-ft.tgtKoF))/20):1).toFixed(2):"0"),Jt>=0){let[$,Pt]=Jt>=G.grunts?na[(Jt-G.grunts)%na.length]:["Captain",""];W(zt,$),W(gt,Pt);let Lt=bt(G.hp[Jt]/G.hpMax[Jt]);ot(Ut,"transform",`scaleX(${Lt.toFixed(4)})`),ot(ie,"transform",`scaleX(${Math.max(Lt,1-bt((X-ft.tgtF)/40)*(1-Lt)).toFixed(4)})`),pt.classList.toggle("ko",me)}let he=Bt/72,qe=[],wn=!1,ss=lt*.976-22.5*he,rs=26*he,Ms=[];Jt>=0&&k<.5&&Ms.push([2.6*he+lt*.36+2*he,8.5*he]),de>0&&Ms.push([w.offsetLeft+w.offsetWidth-4*he,w.offsetTop+w.offsetHeight+he]);let js=$=>{$.bx=Math.max($.tw/2+he,Math.min(lt-$.tw/2-he,$.bx)),$.bx+$.tw/2>ss&&$.by-$.th<rs&&($.bx=ss-$.tw/2-.5*he);let Pt=1.5*he;for(let[Lt,$t]of Ms)$.bx-$.tw/2>=Lt||($t+$.th>$.ay-$.mkH+he?$.bx=Lt+$.tw/2+.5*he:Pt=Math.max(Pt,$t));return $.by=Math.min(Bt*.8,Math.max($.by,Pt+$.th)),Pt};rt.forEach(($,Pt)=>{let Lt=G.grunts+Pt;if(Pt>=na.length){let $e=nt&&nt.tags[Pt-na.length];Lt=$e?$e.i:-1,$e&&(W($.name,$e.name),W($.sub,$e.sub))}if($.show=!1,!e||Lt<0||Lt>=G.N||G.st[Lt]===Et.OFF||G.st[Lt]===Et.DEAD)return;let $t=Math.hypot(G.x[Lt]-F.x,G.z[Lt]-F.z);if($t>=t.hudTagR)return;let Kt=G.st[Lt],_e=Kt===Et.HURT||Kt===Et.KNOCK?1.7:Kt===Et.AIR?1.3:Kt===Et.DOWN||Kt===Et.GETUP?1.1:2.3;$.hy=$.hy==null||Gt>30?_e:$.hy+(_e-$.hy)*(1-.7**Gt),mt.set(G.x[Lt],G.y[Lt]+$.hy,G.z[Lt]);let De=Math.max(.7,Math.min(1,14/mt.distanceTo(e.position)));mt.project(e);let ue=(mt.x+1)/2,Xe=(1-mt.y)/2;if(mt.z>=1||ue<.02||ue>.98||Xe<-.3||Xe>.9)return;Object.assign($,{show:!0,k:De,ax:ue*lt,ay:Xe*Bt,mkH:1.6*he*De,tw:22*he*De,th:5.5*he*De,a:bt((45-$t)/5)*(kt<19?.25:1)}),$.bx=$.ax,$.by=$.ay-$.mkH,$.ax-$.tw/2<50*he&&$.by-$.th<21*he&&(wn=!0),js($),qe.push($);let cn=bt(G.hp[Lt]/G.hpMax[Lt]);$.lag=cn>$.lag?cn:Math.max(cn,$.lag-.006*Gt),ot($.bar,"transform",`scaleX(${cn.toFixed(4)})`),ot($.lagEl,"transform",`scaleX(${$.lag.toFixed(4)})`)}),(X-ft.tgtF<600||X-ft.tgtKoF<70)&&(wn=!0),ft.introCut=bt(ft.introCut+(wn?.15:-.05)*Gt),qe.sort(($,Pt)=>Pt.ay-$.ay);for(let $=1;$<qe.length;$++)for(let Pt=0,Lt=0;Pt<$&&Lt<12;Pt++){let $t=qe[$],Kt=qe[Pt];if(Math.abs($t.bx-Kt.bx)<($t.tw+Kt.tw)/2&&$t.by-$t.th<Kt.by&&Kt.by-Kt.th<$t.by){let _e=Kt.by-Kt.th-.3*he;_e-$t.th>=js({...$t,by:_e})?$t.by=_e:$t.bx=Kt.bx+($t.bx<Kt.bx?-1:1)*(($t.tw+Kt.tw)/2+.5*he),js($t),Pt=-1,Lt++}}for(let $ of rt){if(ot($.el,"opacity",$.show?$.a.toFixed(2):"0"),!$.show)continue;ot($.el,"transform",`translate(${$.ax.toFixed(1)}px, ${$.ay.toFixed(1)}px)`),ot($.bd,"transform",`translate(${($.bx-$.ax).toFixed(1)}px, ${($.by-$.ay).toFixed(1)}px) scale(${$.k.toFixed(3)})`);let Pt=$.ax>lt*.976-20.5*he&&$.ay<rs||$.ay<0;ot($.mk,"opacity",Pt?"0":"1"),ot($.mk,"transform",`translateX(-50%) scale(${$.k.toFixed(3)})`);let Lt=$.bx-$.ax,$t=$.by-($.ay-$.mkH),Kt=Math.hypot(Lt,$t);ot($.ld,"opacity",Kt>he&&!Pt?"1":"0"),Kt>he&&ot($.ld,"transform",`translate(0, ${(-$.mkH).toFixed(1)}px) rotate(${Math.atan2(Lt,-$t).toFixed(3)}rad) scaleY(${Kt.toFixed(1)})`)}L.forEach(($,Pt)=>{let Lt=nt&&nt.pins[Pt];if(!Lt||Lt.done||!e){ot($.el,"opacity","0");return}let $t=Math.hypot(Lt.x-F.x,Lt.z-F.z);mt.set(Lt.x,Lt.kind==="standard"?13:Lt.kind==="camp"?11:4,Lt.z).project(e);let Kt=(mt.x+1)/2*lt,_e=(1-mt.y)/2*Bt,De=mt.z>1;De&&(Kt=lt-Kt,_e=Bt-_e);let ue=12*he,Xe=8*he,cn=Bt-22*he,$e=De||Kt<ue||Kt>lt-ue||_e<Xe||_e>cn,en=0;if($e){let zn=lt/2,fe=Bt/2,Un=Kt-zn,He=_e-fe;en=Math.atan2(He,Un);let Hi=Un?((Un>0?lt-ue:ue)-zn)/Un:1/0,as=He?((He>0?cn:Xe)-fe)/He:1/0,Ss=Math.min(Math.abs(Hi),Math.abs(as));Kt=zn+Un*Ss,_e=fe+He*Ss}if(Kt>lt-26*he&&_e<44*he&&(Kt=lt-26*he),Math.abs(Kt-lt/2)<20*he&&_e<14*he&&(_e=14*he),Kt<52*he&&_e<20*he&&ft.dlg&&X-ft.dlg.f<ft.dlg.dur&&(_e=20*he),(Lt.kind==="standard"||Lt.kind==="boss")&&!$e){ot($.el,"opacity","0");return}$.el.className=`pin ${Lt.kind}${$e?" off":""}`,ot($.el,"opacity",$t<7?bt(($t-4)/3).toFixed(2):"1"),ot($.el,"transform",`translate(${Kt.toFixed(1)}px, ${_e.toFixed(1)}px)`),ot($.el.firstChild,"transform",$e?`rotate(${en.toFixed(3)}rad)`:"none"),W($.b,Lt.label),W($.s,`${Math.round($t)} m`)});let Js=0;for(let $=0;$<G.N;$++)G.st[$]!==Et.OFF&&G.st[$]!==Et.DEAD&&Js++;ot(Ct,"transform",`scaleX(${(.3+.65*F.kos/(F.kos+Js+1)).toFixed(4)})`);let bs=30,fi=100/bs,di=$=>100-($-F.x)*fi,Bi=$=>100-($-F.z)*fi;yt.clearRect(0,0,200,200),yt.fillStyle="rgba(18,12,9,0.66)",yt.fillRect(0,0,200,200),yt.fillStyle="rgba(214,184,130,0.08)",yt.beginPath(),yt.arc(di(0),Bi(0),yi*fi,0,7),yt.fill(),yt.strokeStyle="rgba(214,184,130,0.12)",yt.lineWidth=1,yt.beginPath();for(let $=Math.ceil((F.x-bs)/10)*10;$<=F.x+bs;$+=10)yt.moveTo(di($)+.5,0),yt.lineTo(di($)+.5,200);for(let $=Math.ceil((F.z-bs)/10)*10;$<=F.z+bs;$+=10)yt.moveTo(0,Bi($)+.5),yt.lineTo(200,Bi($)+.5);yt.stroke(),yt.strokeStyle="rgba(214,184,130,0.45)",yt.lineWidth=1.5,yt.beginPath(),yt.arc(di(0),Bi(0),yi*fi,0,7),yt.stroke();let ca=Bi(Pi);if(ca>0)yt.fillStyle="rgba(236,214,172,0.8)",yt.fillRect(0,ca-7*fi,200,7*fi),yt.fillStyle="rgba(18,12,9,0.8)",yt.fillRect(di(Ji+4.5),ca-7*fi,9*fi,7*fi),yt.fillStyle="#d0a040",yt.fillRect(di(Ji+4.5),ca-2,9*fi,2);else{let $=Math.max(16,Math.min(184,di(Ji)));yt.fillStyle="#d0a040",yt.beginPath(),yt.moveTo($,3),yt.lineTo($-5,10),yt.lineTo($+5,10),yt.fill(),yt.font='800 13px "G6UI", sans-serif',yt.textAlign="center",yt.fillStyle="rgba(236,214,172,0.9)",yt.fillText("GATE",$,26)}ft.waves=ft.waves.filter($=>X-$.f<120);for(let $ of ft.waves){let Pt=(X-$.f)/120;yt.strokeStyle=`rgba(255,80,55,${(1-Pt).toFixed(2)})`,yt.lineWidth=2,yt.beginPath(),yt.arc(di($.x),Bi($.z),5+Pt*22,0,7),yt.stroke()}let O=t.cam.yaw,ht=yt.createRadialGradient(100,100,0,100,100,70);ht.addColorStop(0,"rgba(200,240,255,0.3)"),ht.addColorStop(1,"rgba(200,240,255,0)"),yt.fillStyle=ht,yt.beginPath(),yt.moveTo(100,100),yt.arc(100,100,70,-Math.PI/2-O-.5,-Math.PI/2-O+.5),yt.fill(),yt.fillStyle="#e0412c";for(let $=0;$<G.grunts;$++){let Pt=G.st[$];if(Pt===Et.OFF||Pt===Et.DEAD)continue;let Lt=di(G.x[$]),$t=Bi(G.z[$]);Lt>-2&&Lt<202&&$t>-2&&$t<202&&yt.fillRect(Lt-1.5,$t-1.5,3,3)}for(let $=G.grunts;$<G.N;$++){if(G.st[$]===Et.OFF||G.st[$]===Et.DEAD)continue;let Pt=Math.max(5,Math.min(195,di(G.x[$]))),Lt=Math.max(5,Math.min(195,Bi(G.z[$])));yt.fillStyle="#1a0d08",yt.fillRect(Pt-5,Lt-5,10,10),yt.fillStyle=$===Jt?"#ffe08a":"#ff5a3a",yt.fillRect(Pt-3.5,Lt-3.5,7,7)}if(nt){nt.runner&&nt.ch.route&&(yt.setLineDash([5,5]),yt.strokeStyle="rgba(255,120,90,0.7)",yt.lineWidth=2,yt.beginPath(),nt.ch.route.slice(nt.runner.wp-1).forEach(([$,Pt],Lt)=>Lt?yt.lineTo(di($),Bi(Pt)):yt.moveTo(di($),Bi(Pt))),yt.stroke(),yt.setLineDash([]));for(let $ of nt.pins){let Pt=Math.max(8,Math.min(192,di($.x))),Lt=Math.max(8,Math.min(192,Bi($.z))),$t=$.kind==="standard"?"#09f875":$.kind==="boss"?"#f2c14e":$.done?"#09f875":"#ff5a3a";yt.fillStyle="#1a0d08",yt.fillRect(Pt-2,Lt-12,4,15),yt.fillRect(Pt-1,Lt-12,13,10),yt.fillStyle=$t,yt.fillRect(Pt,Lt-11,11,8)}for(let $ of nt.tags){if(G.st[$.i]===Et.OFF||G.st[$.i]===Et.DEAD)continue;let Pt=Math.max(5,Math.min(195,di(G.x[$.i]))),Lt=Math.max(5,Math.min(195,Bi(G.z[$.i])));yt.fillStyle="#1a0d08",yt.fillRect(Pt-4,Lt-4,8,8),yt.fillStyle="#ffb49a",yt.fillRect(Pt-2.5,Lt-2.5,5,5)}}let Dt=F.yaw,St=($,Pt)=>100-Math.sin($)*Pt,wt=($,Pt)=>100-Math.cos($)*Pt;yt.fillStyle="rgba(8,30,38,0.85)",yt.beginPath(),yt.arc(100,100,8,0,7),yt.fill(),yt.fillStyle="#9ff4ff",yt.beginPath(),yt.moveTo(St(Dt,9),wt(Dt,9)),yt.lineTo(St(Dt+2.5,7),wt(Dt+2.5,7)),yt.lineTo(St(Dt-2.5,7),wt(Dt-2.5,7)),yt.fill()}}}var Yt=(n,t)=>n+(t-n)*Math.random(),Na=n=>n[Math.floor(Math.random()*n.length)],e0=null;function Xd(){if(!e0){e0=new AudioBuffer({length:48e3*3,sampleRate:48e3,numberOfChannels:1});let n=e0.getChannelData(0);for(let t=0;t<n.length;t++)n[t]=Math.random()*2-1}return e0}function Ex(n=1.6,t=3.2,e=48e3){let i=Math.floor(n*e),s=new AudioBuffer({length:i,sampleRate:e,numberOfChannels:2});for(let r=0;r<2;r++){let a=s.getChannelData(r),l=0;for(let c=0;c<i;c++){let o=c/i,u=.75-.6*o;l+=u*(Math.random()*2-1-l),a[c]=l*Math.exp(-t*o*n)*(c<e*.012?c/(e*.012):1)}}return s}function ui(n,t,e,i){n.setValueAtTime(e[0][1],t+e[0][0]);for(let s=1;s<e.length;s++)i?n.exponentialRampToValueAtTime(Math.max(1e-4,e[s][1]),t+e[s][0]):n.linearRampToValueAtTime(e[s][1],t+e[s][0])}function We(n,t,e,i=1){let s=n.createBufferSource();return s.buffer=Xd(),s.loop=!0,s.playbackRate.value=i,s.start(t,Yt(0,2.5)),s.stop(t+e),s}function Nn(n,t,e,i,s){let r=n.createOscillator();return r.type=t,s&&(r.frequency.value=s),r.start(e),r.stop(e+i),r}function Ue(n,t,e,i=.707){let s=n.createBiquadFilter();return s.type=t,s.frequency.value=e,s.Q.value=i,s}function Ei(n,t){let e=n.createGain();return e.gain.value=t,e}function dl(n,t,e){let i=n.createGain();return i.gain.value=0,ui(i.gain,t,e),i}function ze(n,t,e,i,s=1){let r=n.createGain();return r.gain.value=0,r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(s,t+e),r.gain.setTargetAtTime(0,t+e,i/4),r}function pl(n,t,e,i){let s=n.createGain(),r=new Float32Array(256);for(let a=0;a<256;a++)r[a]=i(a/255);return s.gain.setValueCurveAtTime(r,t,e),s}function Sr(n,t){let e=n.createWaveShaper(),i=new Float32Array(1024);for(let s=0;s<1024;s++){let r=s/511.5-1;i[s]=Math.tanh(r*t)/Math.tanh(t)}return e.curve=i,e}function Ds(n,t){let e=n.createStereoPanner();return e.pan.value=t,e}function qd(n,t,e,i,s,r,a){let l=n.createBufferSource();l.buffer=e,l.playbackRate.value=s,l.connect(Ei(n,r)).connect(Ds(n,a)).connect(t),l.start(i)}async function gn(n,t,e=1,i=.9,s=!0,r=48e3){let a=new OfflineAudioContext(e,Math.ceil(n*r),r);t(a,a.destination);let l=await a.startRendering(),c=0;for(let p=0;p<e;p++){let x=l.getChannelData(p);for(let _=0;_<x.length;_++)c=Math.max(c,Math.abs(x[_]))}let o=c>0?i/c:1,u=Math.floor(r*.006),f=0;if(!s)f=l.length-1;else for(let p=0;p<e;p++){let x=l.getChannelData(p);for(let _=x.length-1;_>f;_--)if(Math.abs(x[_])*o>5e-4){f=_;break}}let h=Math.min(l.length,f+u+1),d=new AudioBuffer({length:h,sampleRate:r,numberOfChannels:e});for(let p=0;p<e;p++){let x=d.getChannelData(p);x.set(l.getChannelData(p).subarray(0,h));for(let _=0;_<h;_++)x[_]*=o;for(let _=0;_<u;_++)x[h-1-_]*=_/u}return d}async function Gd(n,t,e,i,s=24e3){let r=await gn(n+t,e,2,i,!1,s),a=Math.floor(n*s),l=new AudioBuffer({length:a,sampleRate:s,numberOfChannels:2});for(let c=0;c<2;c++){let o=r.getChannelData(c),u=l.getChannelData(c);u.set(o.subarray(0,a));for(let f=a;f<o.length;f++)u[f-a]+=o[f]}return l}var Ww=(n,t)=>(e,i=0)=>pl(e,i,n+t,s=>{let r=s*(n+t);return r<t?Math.sin(Math.PI/2*r/t):r>n?Math.cos(Math.PI/2*(r-n)/t):1}),_x={a:[820,1220,2700,3500],A:[660,1180,2550,3400],e:[540,1820,2550,3450],i:[340,2250,3e3,3700],o:[590,930,2550,3400],u:[390,820,2350,3300]},qw=[95,120,170,260],Xw=[1,.8,.42,.22];function i0(n,t,e){let i=e.t||0,s=e.k||1,r=e.fk||1,a=e.amp[e.amp.length-1][0]+.03,l=i+a,c=e.f0.map(([E,m])=>[E,m*s]),o=dl(n,i,e.amp),u=Nn(n,"sawtooth",i,a);ui(u.frequency,i,c,!0);let f=Ei(n,c[0][1]*(e.jit??.035));We(n,i,a).connect(Ue(n,"lowpass",28)).connect(f).connect(u.frequency);let h=Nn(n,"sine",i,a,Yt(5,7)),d=Ei(n,c[0][1]*.014);h.connect(d).connect(u.frequency),u.connect(o);let p=o;if(e.growl){let E=Ei(n,1-e.growl*.5),m=Nn(n,"sine",i,a),v=Ei(n,e.growl*.5);ui(m.frequency,i,c.map(([y,w])=>[y,w*.5]),!0),m.connect(v).connect(E.gain),o.connect(E),p=E}let x=dl(n,i,e.asp||[[0,0],[.01,0]]);We(n,i,a).connect(x);let _=Ei(n,e.gain??1),g=e.breath??.35,A=dl(n,i,e.amp.map(([E,m])=>[E,m*g*2.5]));We(n,i,a).connect(A);for(let E=0;E<4;E++){let m=Ue(n,"bandpass",1e3,_x[e.vow[0][1]][E]*r/qw[E]);ui(m.frequency,i,e.vow.map(([y,w])=>[y,_x[w][E]*r]));let v=Ei(n,Xw[E]);p.connect(m),x.connect(m),A.connect(m),m.connect(v).connect(_)}if(We(n,i,a).connect(Ue(n,"bandpass",3200,.6)).connect(dl(n,i,e.amp.map(([E,m])=>[E,m*g*.22]))).connect(_),p.connect(Ue(n,"lowpass",380)).connect(Ei(n,.35)).connect(_),e.fric){let[E,m,v,y]=e.fric;We(n,i,a).connect(Ue(n,"highpass",y||3800,.9)).connect(dl(n,i,[[0,0],[E,0],[E+.006,v],[E+m,0]])).connect(_)}return _.connect(t),l}var $w={ha:{f0:[[0,220],[.06,268],[.14,250],[.24,185]],vow:[[0,"A"],[.07,"a"],[.24,"a"]],amp:[[0,0],[.035,.08],[.065,1],[.15,.75],[.25,0]],asp:[[0,0],[.012,.9],[.05,.5],[.085,0]],growl:.15},hah:{f0:[[0,230],[.07,282],[.18,262],[.3,190]],vow:[[0,"A"],[.08,"a"],[.24,"a"],[.3,"A"]],amp:[[0,0],[.035,.1],[.07,1],[.2,.8],[.31,0]],asp:[[0,0],[.012,1],[.05,.5],[.09,0]],growl:.25},sei:{f0:[[.05,252],[.1,292],[.24,238]],vow:[[.05,"e"],[.13,"e"],[.21,"i"]],amp:[[0,0],[.055,0],[.085,1],[.17,.8],[.26,0]],fric:[0,.07,.7,4200],growl:.12},toh:{f0:[[.02,245],[.06,278],[.21,200]],vow:[[.02,"o"],[.21,"o"]],amp:[[0,0],[.022,0],[.042,1],[.14,.7],[.22,0]],fric:[0,.022,1,2400],growl:.18},tah:{f0:[[.02,255],[.06,290],[.2,215]],vow:[[.02,"a"],[.2,"A"]],amp:[[0,0],[.022,0],[.042,1],[.13,.75],[.21,0]],fric:[0,.02,1,2600],growl:.15},hyah:{f0:[[0,240],[.08,305],[.18,275],[.3,200]],vow:[[0,"i"],[.05,"i"],[.11,"a"],[.3,"a"]],amp:[[0,0],[.03,.2],[.06,1],[.2,.8],[.31,0]],asp:[[0,0],[.01,.8],[.04,.3],[.07,0]],growl:.2},seiya:{f0:[[.06,250],[.12,288],[.19,250],[.23,272],[.32,335],[.46,305],[.62,205]],vow:[[.06,"e"],[.15,"i"],[.22,"i"],[.29,"a"],[.62,"a"]],amp:[[0,0],[.06,0],[.085,.9],[.18,.7],[.205,.3],[.25,1],[.46,.85],[.63,0]],fric:[0,.065,.7,4200],growl:.3},uora:{f0:[[0,200],[.1,252],[.3,282],[.4,318],[.72,220]],vow:[[0,"u"],[.1,"o"],[.3,"o"],[.37,"a"],[.72,"a"]],amp:[[0,0],[.05,.8],[.3,.9],[.335,.45],[.38,1],[.6,.8],[.73,0]],growl:.3},haa:{f0:[[0,232],[.08,292],[.4,312],[.62,228]],vow:[[0,"A"],[.08,"a"],[.62,"a"]],amp:[[0,0],[.04,.12],[.08,1],[.45,.85],[.63,0]],asp:[[0,0],[.012,.9],[.06,.4],[.1,0]],growl:.3}},Yw={musou:{f0:[[0,205],[.12,262],[.6,300],[.95,338],[1.2,250]],vow:[[0,"A"],[.12,"a"],[1.2,"a"]],amp:[[0,0],[.05,.15],[.14,.9],[.8,1],[1.05,.8],[1.22,0]],asp:[[0,0],[.015,.9],[.08,.4],[.14,0]],growl:.4},hurt:{f0:[[0,205],[.04,215],[.2,140]],vow:[[0,"A"],[.1,"u"]],amp:[[0,0],[.018,1],[.1,.6],[.21,0]],fric:[0,.018,.9,1400],growl:.45},hup:{f0:[[0,228],[.06,250],[.1,235]],vow:[[0,"A"]],amp:[[0,0],[.02,.8],[.08,.8],[.11,0]],asp:[[0,0],[.01,.8],[.03,0]],growl:.1}};function Kw(n,t,e=0,i=Yt(118,168)){let s=Yt(.12,.22),r=Na(["A","u","o","a"]);return i0(n,t,{t:e,f0:[[0,i],[.03,i*1.12],[s,i*.72]],vow:[[0,r],[s,r]],amp:[[0,0],[.018,1],[s*.6,.6],[s,0]],fric:Math.random()<.5?[0,.016,.8,1300]:null,asp:[[0,0],[.01,.6],[.03,0]],growl:Yt(.3,.6),fk:Yt(.9,1)})}function Wd(n,t,e=0,i=Yt(135,215),s=1){let r=Yt(.38,.7),a=Na([["u","a","a"],["a","a","o"],["A","a","A"],["o","a","a"],["i","a","A"]]);return i0(n,t,{t:e,gain:s,f0:[[0,i],[.07,i*1.28],[.2,i*1.18],[r,i*.62]],vow:[[0,a[0]],[.08,a[1]],[r,a[2]]],amp:[[0,0],[.03,.9],[.1,1],[r*.7,.7],[r,0]],fric:Math.random()<.5?[0,.02,.8,1500]:null,asp:[[0,0],[.012,.5],[.04,0]],growl:Yt(.35,.65),jit:.05,fk:Yt(.88,1.02)})}function Zw(n,t,e,i=Yt(140,260),s=Yt(.5,1.4),r=1){let a=Na(["a","o","A","a","e"]);return i0(n,t,{t:e,gain:r,f0:[[0,i*.9],[.15,i*1.1],[s*.7,i*1.05],[s,i*.8]],vow:[[0,Na(["u","o","A"])],[.14,a],[s,a]],amp:[[0,0],[.12,1],[s*.75,.85],[s,0]],growl:Yt(.2,.5),jit:.05,fk:Yt(.9,1.05)})}function ia(n,t,{dur:e=.25,lo:i=500,hi:s=2200,pk:r=.45,q:a=1.4,tear:l=.4,whistle:c=.2,sub:o=0,pulses:u=0}){let f=p=>{let x=p<r?(p/r)**1.3:(1-(p-r)/(1-r))**1.7;return u&&(x*=.3+.7*Math.sin(Math.PI*p*u)**2),x},h=[[0,i],[e*r,s],[e,i*1.25]],d=Ue(n,"bandpass",i,a);if(ui(d.frequency,0,h,!0),We(n,0,e).connect(d).connect(pl(n,0,e,f)).connect(t),l&&We(n,0,e).connect(Ue(n,"highpass",3600)).connect(pl(n,0,e,p=>f(p)**3*l)).connect(t),c){let p=Ue(n,"bandpass",i*2,16);ui(p.frequency,0,h.map(([x,_])=>[x,_*1.9]),!0),We(n,0,e).connect(p).connect(pl(n,0,e,x=>f(x)*c*4)).connect(t)}if(o){let p=Nn(n,"sine",0,e);ui(p.frequency,0,[[0,120],[e,52]],!0),p.connect(pl(n,0,e,x=>f(x)*o)).connect(t)}}function n0(n,t,e=0,i=Yt(700,1500),s=1,r=Yt(.12,.3)){[1,2.76,5.4,8.93].forEach((a,l)=>{i*a>18e3||Nn(n,"sine",e,r*2,i*a*Yt(.985,1.015)).connect(ze(n,e,.001,r/(1+l*.6),s/(1+l*.8))).connect(t)}),We(n,e,.01).connect(Ue(n,"highpass",3e3)).connect(ze(n,e,5e-4,.008,s*.6)).connect(t)}function ml(n,t,e,i,s,r,a){for(let l=0;l<s;l++){let c=e+Math.random()*i;We(n,c,.03).connect(Ue(n,"bandpass",Yt(600,r),1.2)).connect(ze(n,c,8e-4,Yt(.008,.025),a*Yt(.5,1))).connect(t)}}function Mx(n,t,{heavy:e=!1,metal:i=0}){let s=e?1:.4;We(n,0,.012).connect(Ue(n,"highpass",1800)).connect(ze(n,0,5e-4,.007,1)).connect(t),We(n,0,.15).connect(Ue(n,"bandpass",Yt(2400,4300),.9)).connect(ze(n,0,.001,Yt(.045,.08),.8)).connect(t);let r=Ue(n,"bandpass",6500,1.6);ui(r.frequency,0,[[0,Yt(5500,7500)],[.07,Yt(1800,2600)]],!0),We(n,0,.12).connect(r).connect(ze(n,0,.0015,Yt(.06,.09),e?.9:1.1)).connect(t);let a=Yt(.008,.016);We(n,a,.08).connect(Ue(n,"bandpass",Yt(1200,1900),1.1)).connect(ze(n,a,.001,Yt(.03,.05),.75)).connect(t);let l=Nn(n,"sine",0,s);if(ui(l.frequency,0,[[0,e?Yt(115,135):Yt(150,195)],[e?.28:.1,e?36:56]],!0),l.connect(ze(n,0,.002,e?.5:.11,1)).connect(Sr(n,e?3.5:1.8)).connect(Ei(n,e?1:.6)).connect(t),We(n,0,.12).connect(Ue(n,"bandpass",Yt(420,680),1.3)).connect(ze(n,.001,.002,e?.09:.05,e?1.1:.9)).connect(t),We(n,0,.2).connect(Ue(n,"lowpass",e?900:1300)).connect(ze(n,0,.002,e?.16:.08,.9)).connect(t),ml(n,t,.004,e?.12:.06,e?12:6,e?2600:3400,.7),i&&n0(n,t,.002,Yt(800,1500),i*.5),e){let c=Nn(n,"sine",0,s);ui(c.frequency,0,[[0,70],[.6,30]],!0),c.connect(ze(n,.005,.004,.7,.9)).connect(t),We(n,0,.8).connect(Ue(n,"bandpass",380,.8)).connect(ze(n,.01,.005,.35,.5)).connect(t)}}function jw(n,t){We(n,0,.01).connect(Ue(n,"highpass",2e3)).connect(ze(n,0,5e-4,.006,.8)).connect(t);let e=Nn(n,"sine",0,.12);ui(e.frequency,0,[[0,Yt(190,260)],[.06,75]],!0),e.connect(ze(n,0,.001,.06,.8)).connect(Sr(n,2)).connect(t),ml(n,t,.002,.04,4,3200,.8)}function Jw(n,t){for(let i=0;i<5;i++){let s=i?Yt(.004,.03):0;We(n,s,.06).connect(Ue(n,"bandpass",Yt(1300,3800),1.1)).connect(ze(n,s,8e-4,Yt(.02,.045),i?Yt(.4,.75):1)).connect(Ds(n,i?Yt(-.6,.6):0)).connect(t)}let e=Nn(n,"sine",0,.22);ui(e.frequency,0,[[0,Yt(105,140)],[.09,46]],!0),e.connect(ze(n,0,.002,.13,1)).connect(Sr(n,3)).connect(Ei(n,.8)).connect(t),We(n,0,.12).connect(Ue(n,"lowpass",1200)).connect(ze(n,0,.002,.07,.8)).connect(t),We(n,0,.1).connect(Ue(n,"bandpass",Yt(380,620),1.2)).connect(ze(n,.002,.002,.06,.9)).connect(t),ml(n,t,.008,.05,6,3e3,.45)}function bx(n,t,e){let i=Nn(n,"sine",0,.3);ui(i.frequency,0,[[0,e?95:120],[.12,42]],!0),i.connect(ze(n,0,.002,.15,1)).connect(Sr(n,2)).connect(t),We(n,0,.25).connect(Ue(n,"lowpass",900)).connect(ze(n,0,.002,.12,.8)).connect(t),ml(n,t,.01,.12,6,4500,.35),Math.random()<.6&&n0(n,t,Yt(.01,.05),Yt(1100,2e3),.25,.08)}function Qw(n,t,e,i,s,r){[1,2,2.76,3.9,5.4].forEach((a,l)=>Nn(n,"sine",e,r*2,i*a).connect(ze(n,e,.002,r/(1+l*.5),s/(1+l*.9))).connect(t))}function Sx(n,t,e,i,s,r,a,l){for(let c=0;c<5;c++){let o=s*(r/s)**Math.random();Nn(n,"sine",e,.5,o).connect(ze(n,e,.002,Yt(.2,.4),a/5)).connect(Ds(n,Yt(-.6,.6))).connect(t)}for(let c=0;c<i*3;c++){let o=e+l*Math.random()**1.8;We(n,o,.04).connect(Ue(n,"bandpass",Yt(s*2,r),4)).connect(ze(n,o,.001,Yt(.015,.04),a*Yt(.3,.8))).connect(Ds(n,Yt(-.8,.8))).connect(t)}}function Fa(n,t,e,i=1,s=1){let r=Nn(n,"sine",e,1.2);ui(r.frequency,e,[[0,98*s],[.05,62*s],[.6,52*s]],!0),r.connect(ze(n,e,.002,.55,i)).connect(Sr(n,1.8)).connect(t),We(n,e,.1).connect(Ue(n,"lowpass",520)).connect(ze(n,e,.001,.05,i*.8)).connect(t),We(n,e,.01).connect(Ue(n,"highpass",2400)).connect(ze(n,e,5e-4,.006,i*.3)).connect(t)}function Tx(n,t,e,i){Nn(n,"sine",e,.08,Yt(1700,1900)).connect(ze(n,e,5e-4,.03,i*.5)).connect(t),We(n,e,.03).connect(Ue(n,"bandpass",2600,5)).connect(ze(n,e,5e-4,.02,i)).connect(t)}function wx(n,t,e,i,s,r,a,l){let c=Ei(n,.3);for(let[h,d]of[[1,0],[1.4983,4],[2,-5]]){let p=Nn(n,"sawtooth",e,s+.4,i*h);p.detune.value=d+l,p.connect(c)}let o=Ue(n,"highpass",120,.7),u=Ue(n,"peaking",1500,.8),f=Ue(n,"lowpass",r?1300:4e3,.8);u.gain.value=4,c.connect(Sr(n,10)).connect(o).connect(u).connect(f).connect(ze(n,e,.003,r?.16:s*1.6,a)).connect(t)}function tE(n,t){let e=[["D","O.xxO.xx"],["D","O.xxOxOx"],["A#","O.xxO.xx"],["C","O.xxOOxx"],["D","O.xxO.xx"],["F","O.xxO.xx"],["G","O.xxOxOx"],["A","O.O.OOOO"]],i={D:146.83,F:174.61,G:196,A:220,"A#":116.54,C:130.81},s=Ds(n,-.75),r=Ds(n,.75);s.connect(t),r.connect(t);let a=Ue(n,"lowpass",420,1.1);a.connect(t),e.forEach(([l,c],o)=>[...c].forEach((u,f)=>{if(u===".")return;let h=o*2+f*.25,d=i[l],p=u==="O",x=p&&c[f+1]==="."?.45:.22;wx(n,s,h,d,x,!p,p?.5:.36,-6),wx(n,r,h+Yt(.006,.014),d*1.002,x,!p,p?.5:.36,7);let _=Nn(n,"sawtooth",h,x+.1,d/2),g=Nn(n,"sine",h,x+.1,d/4),A=ze(n,h,.004,p?.35:.2,.55);_.connect(A),g.connect(A),A.connect(a)}))}async function Ax(n={}){let t=(c,o)=>Promise.all(Array.from({length:c},o)),e=(c,o)=>gn(c.amp.at(-1)[0]+.1,(u,f)=>i0(u,f,{...c,k:o})),i=(c,o)=>Promise.all(o).then(u=>c.forEach((f,h)=>{n[f]=u[h]}));await i(["slash","thrust","spin","heavy","hit","hitHeavy","crunch","clank","crowd","mass"],[t(6,()=>gn(.3,(c,o)=>ia(c,o,{dur:Yt(.2,.27),lo:Yt(420,560),hi:Yt(2e3,2800),pk:Yt(.4,.5),q:1.3,tear:.45,whistle:Yt(.15,.3)}))),t(6,()=>gn(.2,(c,o)=>ia(c,o,{dur:Yt(.12,.16),lo:Yt(800,1e3),hi:Yt(3400,4400),pk:.35,q:1.1,tear:.8,whistle:Yt(.2,.35)}))),t(4,()=>gn(.5,(c,o)=>ia(c,o,{dur:Yt(.38,.46),lo:Yt(320,420),hi:Yt(1700,2200),pk:.5,q:1.4,tear:.35,whistle:.25,pulses:2}))),t(4,()=>gn(.5,(c,o)=>ia(c,o,{dur:Yt(.36,.44),lo:Yt(230,290),hi:Yt(1400,1800),pk:.5,q:1.2,tear:.35,whistle:.15,sub:.9}))),t(14,(c,o)=>gn(.45,(u,f)=>Mx(u,f,{metal:o%3===0?1:0}))),t(5,()=>gn(1.1,(c,o)=>Mx(c,o,{heavy:!0,metal:Math.random()<.5?1:0}))),t(8,()=>gn(.14,(c,o)=>jw(c,o))),t(6,()=>gn(.4,(c,o)=>n0(c,o,0,Yt(650,1500),1,Yt(.12,.3)))),t(12,()=>gn(1.5,(c,o)=>Zw(c,o,0,Yt(130,270),Yt(.4,1.3)))),t(6,()=>gn(.3,(c,o)=>Jw(c,o),2))]);let s=eE(n),r=await Promise.all(Object.entries($w).flatMap(([c,o])=>[.95,1.05].map(async u=>[c,await e(o,u*Yt(.97,1.03))]))),a={};for(let[c,o]of r)(a[c]=a[c]||[]).push(o);n.kiai=a,await i(["grunt","cry","officerCry","fall","blow","enemySwing","dodge"],[t(8,()=>gn(.3,(c,o)=>Kw(c,o))),t(10,()=>gn(.8,(c,o)=>Wd(c,o))),t(3,()=>gn(.8,(c,o)=>Wd(c,o,0,Yt(95,120)))),t(5,(c,o)=>gn(.35,(u,f)=>bx(u,f,o<2))),t(3,()=>gn(.6,(c,o)=>ia(c,o,{dur:.5,lo:180,hi:900,pk:.18,q:.9,tear:.2,whistle:0,sub:.7}))),t(3,()=>gn(.25,(c,o)=>ia(c,o,{dur:.2,lo:600,hi:2e3,pk:.45,q:1.2,tear:.2,whistle:.05}))),t(3,()=>gn(.35,(c,o)=>{ia(c,o,{dur:.28,lo:300,hi:1300,pk:.4,q:.8,tear:.12,whistle:0});for(let u of[.01,.19])We(c,u,.06).connect(Ue(c,"bandpass",Yt(2500,3800),.9)).connect(ze(c,u,.002,.04,.5)).connect(o);n0(c,o,.03,Yt(3500,4500),.12,.06)}))]);let l=Yw;return await i(["hurt","hup","musouKiai","land"],[t(3,()=>e(l.hurt,Yt(.95,1.05))),t(2,()=>e(l.hup,Yt(.97,1.03))),e(l.musou,1),t(2,()=>gn(.4,(c,o)=>{bx(c,o,!0)}))]),await i(["ready","flash","boom","screams","call","roar"],[gn(2.2,(c,o)=>{Qw(c,o,0,1046,.6,1.6),[1568,2093,2637,3136].forEach((u,f)=>Nn(c,"triangle",.05+f*.06,.8,u).connect(ze(c,.05+f*.06,.002,.5,.25)).connect(o)),We(c,0,.8).connect(Ue(c,"highpass",6e3)).connect(ze(c,0,.01,.5,.2)).connect(o)},2),gn(2,(c,o)=>{We(c,0,.6).connect(Ue(c,"highpass",1500)).connect(ze(c,0,.001,.35,.9)).connect(o),Sx(c,o,0,14,1200,8e3,.9,1.3);let u=Nn(c,"sine",0,1.4);ui(u.frequency,0,[[0,78],[.9,30]],!0),u.connect(ze(c,0,.004,1,1)).connect(Sr(c,3)).connect(o),ia(c,o,{dur:.7,lo:300,hi:5e3,pk:.15,q:.9,tear:.5,whistle:.2})},2),gn(3.4,(c,o)=>{We(c,0,.3).connect(Ue(c,"highpass",1200)).connect(ze(c,0,8e-4,.15,1.4)).connect(o),We(c,0,.5).connect(Ue(c,"bandpass",700,.7)).connect(ze(c,0,.002,.3,1.2)).connect(Sr(c,2.5)).connect(o);let u=Nn(c,"sine",0,3);ui(u.frequency,0,[[0,66],[2.2,22]],!0),u.connect(ze(c,0,.004,2.2,.9)).connect(Sr(c,4)).connect(o);for(let f of[-.6,.6]){let h=Ue(c,"lowpass",9e3,.9);ui(h.frequency,0,[[0,9e3],[2.4,160]],!0),We(c,0,3.2).connect(h).connect(ze(c,0,.003,1.8,1.3)).connect(Ds(c,f)).connect(o)}Sx(c,o,.02,18,1800,9e3,.6,1.6),We(c,0,3.2,.2).connect(Ue(c,"lowpass",110)).connect(ze(c,.05,.1,2.6,1.4)).connect(o),ml(c,o,.05,1.2,60,3500,.35)},2),gn(1.6,(c,o)=>{for(let u=0;u<12;u++){let f=Ds(c,Yt(-.85,.85));f.connect(o),Wd(c,f,Yt(0,.5),Yt(120,230),Yt(.4,1))}},2),gn(1.8,(c,o)=>{Fa(c,o,0,.8,.9),Fa(c,o,.26,.8,.95),Fa(c,o,.6,1.25,.7),Tx(c,o,.6,.5)},2),gn(2.8,(c,o)=>{for(let u=0;u<18;u++)qd(c,o,Na(n.crowd),Yt(0,.9),Yt(.8,1.05),Yt(.4,1),Yt(-.9,.9))},2)]),await s,n}function eE(n){return Promise.all([Gd(8,1.2,(t,e)=>{let i="D..dD.d.D..dDdD.",s="..k...k...k.k..k";for(let r=0;r<2;r++)for(let a=0;a<16;a++){let l=r*4+a*.25,c=i[a];if(c==="D"){let o=Ds(t,a%4?.15:-.1);o.connect(e),Fa(t,o,l,1)}c==="d"&&Fa(t,e,l,.5,1.15),s[a]==="k"&&Tx(t,e,l+(r?.01:0),.35)}Fa(t,e,0,1.3,.6),Fa(t,e,4,1.3,.6)},.9),Gd(16,2,(t,e)=>{let i=Ue(t,"lowpass",3400);i.connect(e);for(let h=0;h<52;h++)qd(t,i,Na(n.crowd),Yt(0,16),Yt(.85,1.15),Yt(.25,1),Yt(-1,1));for(let h=0;h<34;h++)qd(t,i,Na(n.clank),Yt(0,16),Yt(.6,1.3),Yt(.12,.4),Yt(-1,1));let s=Ww(16,2),r=Ue(t,"lowpass",500,.8),a=Nn(t,"sine",0,18,1/8),l=Ei(t,220);a.connect(l).connect(r.frequency),We(t,0,18).connect(r).connect(s(t)).connect(Ei(t,.5)).connect(e),We(t,0,18,.25).connect(Ue(t,"lowpass",95)).connect(s(t)).connect(Ei(t,.45)).connect(e);for(let h=0;h<400;h++){let d=Yt(0,16);We(t,d,.014).connect(Ue(t,"bandpass",Yt(3500,9e3),2)).connect(ze(t,d,5e-4,Yt(.004,.014),Yt(.03,.11))).connect(Ds(t,Yt(-.9,.9))).connect(e)}let c=Ue(t,"highpass",4200,.7),o=Nn(t,"sine",0,18,1/4),u=Ei(t,.09),f=Ei(t,.04);o.connect(f).connect(u.gain),We(t,0,18).connect(c).connect(s(t)).connect(u).connect(e);for(let h=0;h<90;h++){let d=Yt(0,16);We(t,d,.01).connect(Ue(t,"bandpass",Yt(2500,5e3),1.2)).connect(ze(t,d,5e-4,Yt(.003,.01),Yt(.08,.25))).connect(Ds(t,Yt(-.5,.5))).connect(e)}},.9),Gd(16,1,(t,e)=>tE(t,e),.9)]).then(([t,e,i])=>{n.drums=t,n.bed=e,n.music=i})}var Be=(n,t)=>n+(t-n)*Math.random(),$d=(n,t,e)=>Math.max(t,Math.min(e,n)),nE={thrust:7,slash:9,spin:11,heavy:12},iE=7,Rx=n=>n.heavy?"heavy":n.shape==="circle"?"spin":n.shape==="line"?"thrust":"slash",Cx={n1:[["ha","hah"]],n2:[["sei","hah"]],n3:[["toh","tah"]],n4:[["hyah"]],n5:[["sei","ha"],["tah"]],n6:[["seiya"]],c1:[["hyah","haa"]],c2:[["tah","toh"]],c3:[["hah"],["seiya"]],c4:[["uora"]],c5:[["haa"]],c6:[["uora"],["seiya"]],dash:[["hyah"]],jatk:[["ha","sei"]],jc:[["haa"]]},sE=.8,rE=.72,aE={ansem:.8,useless:1.2},Ix=.66,gl=.9,Px=[.16,.4],Lx=[.06,.7],Dx=[.18,.46],Fx=[.3,.5,.45,.5],oE=[.25,.4,.55,.4];function Nx(n){let t=()=>aE[n.fighter]||1,e=1,i=null,s,r,a,l,c,o,u,f,h,d,p,x=0,_,g=[],A=-1,E=null,m=new URLSearchParams(location.search).get("music")==="0"?0:1,v=0,y=performance.now(),w=null,M=!1,S=0,P={sfx:1,vox:rE},C=new Map,z=new Map,U={};Ax(U).then(it,rt=>console.warn("audio bank",rt));function V(){if(i){i.state!=="running"&&i.resume();return}i=new AudioContext({latencyHint:"interactive"});let rt=i.createDynamicsCompressor();rt.threshold.value=-6,rt.knee.value=6,rt.ratio.value=2,rt.attack.value=.025,rt.release.value=.12;let Rt=i.createWaveShaper(),Ct=new Float32Array(2048);for(let ne=0;ne<Ct.length;ne++){let ft=ne/(Ct.length-1)*2-1,Se=Math.abs(ft);Ct[ne]=Math.sign(ft)*(Se<.7?Se:.7+.09*Math.tanh((Se-.7)/.09))}Rt.curve=Ct,Rt.oversample="2x",s=i.createGain(),s.gain.value=Ix*e,r=i.createGain(),r.gain.value=gl;let Ot=[["lowshelf",140,.7,-4],["peaking",260,1,-1],["peaking",560,.9,2.5],["peaking",3600,.7,3.5],["highshelf",12e3,.7,-3]].map(([ne,ft,Se,et])=>{let be=i.createBiquadFilter();return be.type=ne,be.frequency.value=ft,be.Q.value=Se,be.gain.value=et,be});a=Rt,Ot.reduce((ne,ft)=>ne.connect(ft),s).connect(rt).connect(r).connect(Rt).connect(i.destination),l=i.createGain(),l.connect(s),g=Fx.map(()=>i.createGain()),_=i.createGain(),_.connect(g[0]).connect(l),c=i.createGain(),c.gain.value=P.vox,c.connect(g[2]).connect(s);let Ht=i.createConvolver();Ht.buffer=Ex(1.5,3.4,i.sampleRate),f=i.createGain(),f.connect(Ht),Ht.connect(g[3]).connect(s),u=i.createGain(),u.connect(s),o=i.createGain(),o.connect(g[1]).connect(u);let yt=i.createGain();yt.gain.value=.4,u.connect(yt).connect(f),it()}addEventListener("pointerdown",V),addEventListener("keydown",V),addEventListener("touchend",V),V();let Y=()=>i&&i.state==="running",ct=()=>{s&&(s.gain.value=Ix*e)};oe("options",rt=>{rt&&rt.volume!=null&&(e=rt.volume,ct())}),oe("ui",rt=>{!Y()||!e||(rt.kind==="move"&&U.clank?T(L(U.clank),{gain:.16,rate:Be(1.7,1.9),send:.05,prio:1}):rt.kind==="ok"&&U.ready?T(U.ready,{gain:.32,rate:1.1,send:.2,prio:1}):rt.kind==="back"&&U.dodge?T(L(U.dodge),{gain:.3,rate:1.3,send:.1,prio:1}):rt.kind==="go"?(U.kiai&&T(L(U.kiai.hyah),{gain:.7,rate:t(),bus:c,send:.25,prio:1}),U.boom&&T(U.boom,{gain:.45,send:.3,prio:1})):rt.kind==="start"&&(U.boom&&T(U.boom,{gain:.6,send:.4,prio:1}),U.call&&T(U.call,{gain:.5,send:.4,prio:1,delay:.12})))});function T(rt,{gain:Rt=1,rate:Ct=1,pan:Ot=0,delay:Ht=0,send:yt=.12,bus:ne=l,prio:ft=0}={}){if(!rt||x>56&&ft<1)return null;let Se=i.currentTime+Ht,et=i.createBufferSource();et.buffer=rt,et.playbackRate.value=Ct;let be=i.createGain();be.gain.value=Rt;let ye=i.createStereoPanner();if(ye.pan.value=$d(Ot,-1,1),et.connect(be).connect(ye).connect(ne),yt){let H=i.createGain();H.gain.value=yt,ye.connect(H).connect(f)}return x++,et.onended=()=>{x--},et.start(Se),et}function L(rt){if(!Array.isArray(rt))return rt;let Rt=Math.floor(Math.random()*rt.length);return rt.length>1&&Rt===z.get(rt)&&(Rt=(Rt+1)%rt.length),z.set(rt,Rt),rt[Rt]}function D(rt,Rt){let Ct=performance.now();return Ct-(C.get(rt)||-1e9)<Rt?!1:(C.set(rt,Ct),!0)}function B(rt,Rt){let Ct=n.hero,Ot=n.cam.yaw,Ht=rt-Ct.x,yt=Rt-Ct.z,ne=-Ht*Math.cos(Ot)+yt*Math.sin(Ot);return{pan:$d(ne/7,-.8,.8),att:1/(1+Math.max(0,Math.hypot(Ht,yt)-4)/7)}}function b(rt,Rt,Ct=0){let Ot=i.currentTime,Ht=Rt?oE:Fx,yt=Ct||(Rt?.025:Math.min(.1,.05+.01*(rt-1)));g.forEach(({gain:ne},ft)=>{ne.cancelScheduledValues(Ot),ne.setValueAtTime(ne.value,Ot),ne.linearRampToValueAtTime(Ht[ft],Ot+.004),ne.setValueAtTime(Ht[ft],Ot+.004+yt),ne.setTargetAtTime(1,Ot+.004+yt,Rt?.05:.08)})}function j(rt,Rt,Ct=.18){let Ot=u.gain,Ht=i.currentTime;Ot.cancelScheduledValues(Ht),Ot.setValueAtTime(Ot.value,Ht),Ot.linearRampToValueAtTime(rt,Ht+.015),Ot.setTargetAtTime(1,Ht+.015+Rt,Ct)}function it(){if(M||!i||!U.bed)return;M=!0;let rt=i.currentTime+.03,Rt=Ct=>{let Ot=i.createBufferSource();Ot.buffer=Ct,Ot.loop=!0;let Ht=i.createGain();return Ht.gain.value=0,Ot.connect(Ht).connect(o),Ot.start(rt),Ht};h=Rt(U.bed),d=Rt(U.drums),p=Rt(U.music)}let J=-1,vt=-1,Nt="";function Z(rt,Rt){rt.hits.forEach((Ct,Ot)=>{let Ht=nE[Rx(Ct)],yt=Math.max(0,Ct.f[0]-Ht);if(Rt===yt&&at(rt,Ct,Ot,0,Math.max(0,Math.min(Ht,Ct.f[0])-iE)/60),!Ct.every||Ct.every>=99)return;let ne=Ct.shape==="line",ft=ne?Math.max(Ct.every,4):Math.max(Ct.every*2,10),Se=Ct.f[0]-3;Rt>yt+(ne?6:18)&&Rt<=Ct.f[1]-3&&(Rt-Se)%ft===0&&at(rt,Ct,Ot,(Rt-Se)/ft)})}function at(rt,Rt,Ct,Ot,Ht=0){let yt=U[Rx(Rt)];if(T(L(yt),{gain:Ot?.3:.85,rate:Be(.94,1.06)*(Ot?Be(1,1.12):1),pan:Be(-.12,.12),send:Ot?.06:.14,bus:_,prio:1}),Ot)return;let ne=Cx[rt.id]&&(Cx[rt.id][Ct]||null);if(!ne||!Rt.heavy&&rt.id[0]==="n"&&rt.id!=="n6"&&Math.random()>sE)return;let ft=ne[Math.floor(Math.random()*ne.length)];ft===Nt&&ne.length>1&&(ft=ne[(ne.indexOf(ft)+1)%ne.length]),Nt=ft,U.kiai&&T(L(U.kiai[ft]),{gain:Rt.heavy?.9:.72,rate:Be(.97,1.03)*t(),send:.2,bus:c,prio:1,delay:Ht})}function pt(){requestAnimationFrame(pt);let rt=performance.now(),Rt=Math.min(.1,(rt-y)/1e3);if(y=rt,!Y())return;ie();let Ct=n.hero,Ot=Ct.state==="attack"&&Ct.move&&jt[Ct.move];if(Ot){Ct.moveSeq!==J&&(J=Ct.moveSeq,vt=-1);for(let ne=vt+1;ne<=Ct.moveT;ne++)Z(Ot,ne);vt=Math.max(vt,Ct.moveT)}v*=Math.exp(-Rt/2);let Ht=1-Math.exp(-v/60),yt=i.currentTime;h&&(h.gain.setTargetAtTime(Px[0]+Px[1]*Ht,yt,.3),d.gain.setTargetAtTime(Lx[0]+Lx[1]*Ht,yt,.6),p.gain.setTargetAtTime((Dx[0]+Dx[1]*Ht)*m,yt,.8)),U.crowd&&rt>S&&(S=rt+Be(1e3,3e3)/(.5+Ht),T(L(U.crowd),{gain:Be(.14,.24)*(.6+.6*Ht),rate:Be(.9,1.1),pan:Be(-.8,.8),send:.35,bus:c}))}requestAnimationFrame(pt),oe("attack:start",rt=>{let Rt=n.hero,Ct=jt[rt.move];J=Rt.moveSeq,vt=0,Y()&&Ct&&Z(Ct,0)}),oe("hits",rt=>{if(!Y())return;let Rt=rt.count,{pan:Ct,att:Ot}=B(rt.x,rt.z);if(v+=rt.move==="musou"?Rt*.15:Rt,rt.move==="musou"){if(n.frame===A)return;A=n.frame;let H=E?$d((n.musou.t-E.C)/(E.F-E.C),0,1):1,R=.7+.45*H;if(!D("muHit",70)){T(L(U.hit),{gain:Be(.4,.5)*R,rate:Be(1.25,1.5),pan:Ct*.6+Be(-.3,.3),send:.03});return}b(Rt,!0,.05),T(L(U.hit),{gain:.9*R,rate:Be(1.05,1.25),pan:Ct*.6,send:.08,prio:1}),Rt>=4&&T(L(U.mass),{gain:.5*R,rate:Be(1,1.2),pan:Ct*.6,send:.06});return}let Ht=n.hero,yt=rt.move===Ht.move&&jt[Ht.move],ne=yt&&yt.hits.find(H=>H.every&&H.every<99&&Ht.moveT>=H.f[0]&&Ht.moveT<=H.f[1]),ft=!!ne&&Ht.moveT+ne.every<=ne.f[1],Se=!!ne&&!ft&&Ht.moveT>ne.f[0],et=ne?Se?1.25:Ht.moveT===ne.f[0]&&ne.shape==="circle"?.65:.9:1,be=Math.min(1.4,.5+Math.log2(Rt+1)*.2)*et;b(Rt,!1,ft?(ne.every+rt.hitstop)/60+.03:0),rt.heavy?(T(L(U.hitHeavy),{gain:1.15*be,rate:Be(.92,1.06),pan:Ct*.5,send:.3,prio:1}),j(.4,.12+rt.hitstop/60,.25),rt.hitstop>=5&&T(L(U.blow),{delay:rt.hitstop/60,gain:.55,pan:Ct*.5,send:.2})):(T(L(U.hit),{gain:.9*be*(.7+.3*Ot),rate:Be(.9,1.12),pan:Ct,send:.12,prio:1}),Math.random()<.35&&T(L(U.clank),{gain:.3*be,rate:Be(.85,1.2),pan:Ct+Be(-.2,.2),send:.15})),(Rt>=3||Se)&&T(L(U.mass),{gain:Math.min(.8,.3+Rt*.035)*(Se?1.3:1),rate:Be(.9,1.1),pan:Ct*.6,send:.1,prio:1});let ye=Math.min(6,Rt-1);for(let H=0;H<ye;H++)T(L(U.crunch),{gain:Be(.25,.4),rate:Be(.8,1.25),pan:Ct+Be(-.45,.45),delay:.004+H*Be(.003,.005),send:.06})}),oe("hit",rt=>{if(!Y()||rt.killed||rt.move==="musou"||Math.random()>.3||!D("grunt",180))return;let{pan:Rt,att:Ct}=B(rt.x,rt.z);T(L(U.grunt),{gain:.3*Ct,rate:Be(.9,1.1),pan:Rt,delay:Be(.02,.06),send:.15,bus:c})}),oe("ko",rt=>{if(!Y())return;let{pan:Rt,att:Ct}=B(rt.x,rt.z);if(rt.officer){T(L(U.officerCry),{gain:.6,pan:Rt,delay:.04,send:.25,bus:c,prio:1});return}Math.random()>.55||!D("cry",130)||T(L(U.cry),{gain:Be(.3,.42)*Ct,rate:Be(.9,1.1),pan:Rt,delay:Be(.03,.09),send:.22,bus:c})}),oe("enemy:land",rt=>{if(!Y()||!D("fall",rt.bounce?110:80))return;let{pan:Rt,att:Ct}=B(rt.x,rt.z);T(L(U.fall),{gain:(rt.bounce?.18:.28)*Ct,rate:Be(.85,1.15)*(rt.bounce?1.15:1),pan:Rt,send:.08,bus:_})}),oe("dodge",()=>Y()&&T(L(U.dodge),{gain:.7,rate:Be(.95,1.05),send:.1,prio:1})),oe("jump",()=>{Y()&&(T(L(U.dodge),{gain:.35,rate:Be(1.1,1.25)}),Math.random()<.6&&T(L(U.hup),{gain:.4,bus:c,send:.1}))}),oe("land",rt=>Y()&&T(L(U.land),{gain:rt.hard?.75:.4,rate:Be(.95,1.1),send:.08,prio:1})),oe("hero:hurt",rt=>{if(Y()){if(rt.armored){T(L(U.clank),{gain:.5,rate:Be(.8,1),send:.15});return}T(L(U.hit),{gain:.6,rate:Be(.75,.85),send:.1,prio:1}),D("hurtVox",400)&&T(L(U.hurt),{gain:.6,bus:c,delay:.02,send:.12,prio:1})}}),oe("enemy:attack",rt=>{if(!Y()||!D("eswing",140))return;let{pan:Rt,att:Ct}=B(rt.x,rt.z);T(L(U.enemySwing),{gain:.3*Ct,rate:Be(.85,1.1),pan:Rt,send:.1,bus:_}),(rt.officer||Math.random()<.25)&&T(L(U.grunt),{gain:.25*Ct,rate:Be(1.05,1.2),pan:Rt,bus:c,send:.15})}),oe("musou:ready",()=>Y()&&T(U.ready,{gain:.5,send:.3,prio:1}));function zt(){let rt=i.currentTime;for(let[Rt,Ct]of[[l,P.sfx],[c,P.vox],[r,gl]]){let Ot=Rt.gain;Ot.cancelScheduledValues(rt),Ot.setValueAtTime(Ot.value,rt),Ot.linearRampToValueAtTime(Ct,rt+.004)}}function gt(rt=0){if(!w)return;let Rt=i.currentTime;if(rt&&E&&E.g)for(let Ct of[E.g.g,E.g.rg])Ct.cancelScheduledValues(Rt),Ct.setTargetAtTime(0,Rt,rt/3);for(let Ct of w)try{Ct.stop(Rt+rt)}catch{}w=null}function Ut(rt,Rt){let Ct=i.currentTime;rt.cancelScheduledValues(Ct),rt.setValueAtTime(rt.value,Ct);for(let[Ot,Ht]of Rt)rt.linearRampToValueAtTime(Ht,Ct+Ot)}oe("musou:start",rt=>{if(!Y())return;E={A:rt.activation,C:rt.contact,F:rt.burstAt,inhaled:!1,hushed:!1,spins:0,g:null},T(U.flash,{gain:.8,send:.4,prio:1}),T(U.musouKiai,{gain:1,delay:.06,bus:c,send:.3,prio:1}),Ut(u.gain,[[.02,.3]]),gt();let Rt=i.currentTime,Ct=i.createGain(),Ot=i.createBiquadFilter(),Ht=i.createGain();Ct.gain.value=0,Ot.type="lowpass",Ot.Q.value=3,Ot.frequency.value=200,Ht.gain.value=.7;let yt=[55,55.4,82.6,110.3].map(ye=>{let H=i.createOscillator();return H.type="sawtooth",H.frequency.value=ye,H.connect(Ot),H}),ne=i.createOscillator();ne.frequency.value=6;let ft=i.createGain();ft.gain.value=.3,ne.connect(ft).connect(Ht.gain),Ot.connect(Ht).connect(Ct).connect(s),Ct.connect(f);let Se=i.createBiquadFilter();Se.type="bandpass",Se.Q.value=1.5,Se.frequency.value=400;let et=i.createGain();et.gain.value=0;let be=i.createBufferSource();be.buffer=Xd(),be.loop=!0,be.connect(Se).connect(et).connect(a);for(let ye of[...yt,ne,be])ye.start(Rt);w=[...yt,ne,be],E.g={g:Ct.gain,lp:Ot.frequency,lfo:ne.frequency,rg:et.gain,rbp:Se.frequency}});function ie(){let rt=n.musou;if(!E||!rt.active)return;let Rt=rt.t,Ct=i.currentTime,Ot=(Ht,yt,ne=.03)=>Ht.setTargetAtTime(yt,Ct,ne);if(!E.hushed&&Rt>=E.A){E.hushed=!0,Ut(u.gain,[[.35,.07]]);for(let Ht of[l,c])Ut(Ht.gain,[[.3,(Ht===c?P.vox:P.sfx)*.3]])}if(w&&E.g&&Rt<E.C){let Ht=Math.max(0,(Rt-(E.C-33))/33),yt=Ht*Ht;Ot(E.g.g,Rt<E.A?.015*Rt/E.A:.018+.13*yt),Ot(E.g.lp,Rt<E.A?200+500*Rt/E.A:1100*(5e3/1100)**Ht),Ot(E.g.lfo,6+12*Rt/E.C,.1),Ot(E.g.rg,.3*yt),Ot(E.g.rbp,400*(7e3/400)**Ht)}for(let[Ht,yt,ne]of[[0,28,.55],[1,14,.7]])E.spins===Ht&&Rt>=E.F-yt&&(E.spins++,T(L(U.spin),{gain:ne,rate:Be(.88,.96),send:.25,bus:_,prio:1}))}return oe("musou:hit",rt=>{if(Y()){if(rt.stage==="contact"){gt(.06);for(let Rt of[l,c])Ut(Rt.gain,[[.004,Rt===c?P.vox:P.sfx]]);Ut(u.gain,[[.01,.2],[.4,.3]]),T(L(U.hitHeavy),{gain:1,rate:Be(.95,1.02),send:.3,prio:1}),T(L(U.blow),{gain:.6,delay:.05,send:.25,prio:1}),U.kiai&&T(L(U.kiai.hyah),{gain:.85,rate:t(),bus:c,send:.25,prio:1});return}rt.stage==="rush"&&D("muSwing",130)&&T(L(U.thrust),{gain:.16,rate:Be(1,1.15),pan:Be(-.2,.2),send:.1,bus:_,prio:1}),E&&!E.inhaled&&rt.stage!=="wave"&&rt.n>=E.F-E.C-9&&(E.inhaled=!0,Ut(r.gain,[[.1,gl*.2],[.4,gl*.2],[.45,gl]])),U.kiai&&rt.stage==="rush"&&D("muKiai",280)&&T(L(U.kiai[Math.random()<.5?"ha":"tah"]),{gain:.55,rate:Be(1,1.08)*t(),bus:c,send:.2})}}),oe("musou:burst",rt=>{Y()&&(gt(),zt(),T(U.boom,{gain:1.2,send:.45,prio:1}),U.kiai&&T(L(U.kiai.seiya),{gain:.8,rate:t(),bus:c,send:.35,prio:1}),rt.count>3&&T(U.screams,{gain:.55,delay:.1,bus:c,send:.3,prio:1}),j(.35,.6,.6))}),oe("crowd:wave",rt=>{if(!Y())return;let{pan:Rt}=B(rt.x,rt.z);rt.quiet||T(U.call,{gain:.45,pan:Rt*.6,send:.35}),T(U.roar,{gain:.4,pan:Rt*.5,delay:.6,bus:c,send:.4})}),oe("story:banner",()=>Y()&&U.call&&T(U.call,{gain:.55,send:.35,prio:1})),oe("story:obj",rt=>{let Rt=n.story&&n.story.obj[rt.k];Y()&&Rt&&Rt.state==="done"&&U.ready&&T(U.ready,{gain:.45,rate:.9,send:.3,prio:1})}),oe("story:heal",()=>Y()&&U.ready&&T(U.ready,{gain:.3,rate:1.25,send:.25,prio:1})),oe("scenario",()=>{i&&(gt(),zt()),v=0,J=-1,E=null,A=-1}),{enabled:!0,get context(){return i}}}var cE=["Iron Bailiff","Collector","Gatekeeper","The Hoard"],lE='"G6UI", "Avenir Next", sans-serif',hE='"G6Display", Impact, sans-serif';function Yd(n,t,{locked:e=!1}={}){let i=n.getContext("2d"),s=n.width,r=n.height,a=s/112,l=s/2,c=r*.54,o=p=>l-p*a,u=p=>c-p*a;i.clearRect(0,0,s,r);let f=i.createRadialGradient(l,c,s*.1,l,c,s*.75);f.addColorStop(0,"#3b2a1f"),f.addColorStop(1,"#140c09"),i.fillStyle=f,i.fillRect(0,0,s,r),i.fillStyle="rgba(214,184,130,0.13)",i.beginPath(),i.arc(o(0),u(0),yi*a,0,7),i.fill(),i.strokeStyle="rgba(214,184,130,0.12)",i.lineWidth=1,i.beginPath();for(let p=-50;p<=50;p+=10)i.moveTo(o(p)+.5,0),i.lineTo(o(p)+.5,r),i.moveTo(0,u(p)+.5),i.lineTo(s,u(p)+.5);i.stroke(),i.strokeStyle="rgba(214,184,130,0.55)",i.lineWidth=2,i.beginPath(),i.arc(o(0),u(0),yi*a,0,7),i.stroke(),i.fillStyle="rgba(214,184,130,0.1)",i.fillRect(o(Ji)-5*a,0,10*a,u(20)),i.fillStyle="#c9ab7c",i.fillRect(0,0,s,r*.07),i.fillStyle="#6d5238";for(let p=0;p<s;p+=s/28)i.fillRect(p,r*.07,s/56,r*.012);if(i.fillStyle="#140c09",i.fillRect(o(Ji)-4.5*a,0,9*a,r*.07),Ua(i,"City gate",o(Ji),r*.105,"#f2c14e",13*s/480,"center"),e){i.fillStyle="rgba(10,6,4,0.72)",i.fillRect(0,0,s,r),i.font=`900 ${Math.round(s*.2)}px ${hE}`,i.textAlign="center",i.textBaseline="middle",i.fillStyle="rgba(239,227,207,0.25)",i.fillText("?",l,r/2);return}let h=s/480,d=t.map||{};if(t.id==="gates"&&(sa(i,o(2),u(20),26*a,10*a,h),sa(i,o(-18),u(-18),12*a,9*a,h),sa(i,o(22),u(-10),10*a,8*a,h),Ua(i,"Vanguard",o(2),u(20),"#ffd9c8",13*h,"center")),t.id==="camps")for(let p of t.camps)Ux(i,o(p.x),u(p.z),"#e0412c",h),Ua(i,p.name,o(p.x),u(p.z)+26*h,"#ffd9a8",13*h,"center");if(t.id==="hold"){let p=t.standard;for(let x of[Math.PI,Math.PI*.72,-Math.PI*.72,Math.PI*.5,-Math.PI*.5]){let A=p.x+Math.sin(x)*40,E=p.z+Math.cos(x)*40,m=Math.hypot(A,E),v=m>yi-2?(yi-2)/m:1;uE(i,o(A*v),u(E*v),o(p.x+Math.sin(x)*11),u(p.z+Math.cos(x)*11),"#e0412c",h)}Ux(i,o(p.x),u(p.z),"#09f875",h),Ua(i,"Rally Standard",o(p.x),u(p.z)+26*h,"#b4ffd6",13*h,"center")}if(t.id==="chase"){i.setLineDash([7*h,6*h]),i.strokeStyle="rgba(255,120,90,0.85)",i.lineWidth=3*h,i.beginPath(),t.route.forEach(([_,g],A)=>A?i.lineTo(o(_),u(g)):i.moveTo(o(_),u(g))),i.stroke(),i.setLineDash([]);let[p,x]=t.route[t.route.length-1];i.fillStyle="#e0412c",i.fillRect(o(p)-9*h,u(x)-4*h,18*h,8*h),Ua(i,"South road",o(p),u(x)+20*h,"#ff8a70",13*h,"center"),sa(i,o(24),u(-4),8*a,6*a,h),sa(i,o(0),u(-22),8*a,6*a,h),sa(i,o(-24),u(-30),7*a,6*a,h)}t.id==="vault"&&(sa(i,o(-16),u(-18),10*a,8*a,h),sa(i,o(18),u(-14),10*a,8*a,h));for(let[p,x,_]of d.boss||[])fE(i,o(x),u(_),p,h);if(d.hero){let[p,x]=d.hero,_=t.id==="chase"?Math.PI:0,g=o(p),A=u(x),E=-_;i.fillStyle="rgba(8,30,38,0.9)",i.beginPath(),i.arc(g,A,11*h,0,7),i.fill(),i.fillStyle="#9ff4ff",i.beginPath(),i.moveTo(g+Math.sin(E)*12*h,A-Math.cos(E)*12*h),i.lineTo(g+Math.sin(E+2.5)*9*h,A-Math.cos(E+2.5)*9*h),i.lineTo(g+Math.sin(E-2.5)*9*h,A-Math.cos(E-2.5)*9*h),i.fill(),Ua(i,"You",g,A+24*h,"#9ff4ff",12*h,"center")}i.font=`800 ${Math.round(12*h)}px ${lE}`,i.fillStyle="rgba(239,227,207,0.6)",i.textAlign="right",i.textBaseline="bottom",i.fillText("N \u25B2",s-10*h,r-8*h)}function Ua(n,t,e,i,s,r,a="left"){n.font=`800 ${Math.round(r)}px "G6UI", "Avenir Next", sans-serif`,n.textAlign=a,n.textBaseline="middle";let l=t.toUpperCase();n.lineWidth=Math.max(2,r*.28),n.strokeStyle="rgba(10,6,4,0.9)",n.strokeText(l,e,i),n.fillStyle=s,n.fillText(l,e,i)}function sa(n,t,e,i,s,r){n.save(),n.beginPath(),n.rect(t-i/2,e-s/2,i,s),n.clip(),n.fillStyle="rgba(224,65,44,0.22)",n.fillRect(t-i/2,e-s/2,i,s),n.strokeStyle="rgba(224,65,44,0.7)",n.lineWidth=2*r,n.beginPath();for(let a=-s;a<i;a+=7*r)n.moveTo(t-i/2+a,e+s/2),n.lineTo(t-i/2+a+s,e-s/2);n.stroke(),n.restore()}function Ux(n,t,e,i,s){n.fillStyle="#140c09",n.fillRect(t-2.5*s,e-22*s,5*s,26*s),n.fillStyle="#3b2a1e",n.fillRect(t-1.5*s,e-21*s,3*s,24*s),n.fillStyle="#140c09",n.fillRect(t,e-22*s,20*s,14*s),n.fillStyle=i,n.fillRect(t+1.5*s,e-20.5*s,17*s,11*s)}function uE(n,t,e,i,s,r,a){let l=Math.atan2(s-e,i-t);n.strokeStyle=r,n.lineWidth=4*a,n.setLineDash([9*a,6*a]),n.beginPath(),n.moveTo(t,e),n.lineTo(i-Math.cos(l)*8*a,s-Math.sin(l)*8*a),n.stroke(),n.setLineDash([]),n.fillStyle=r,n.beginPath(),n.moveTo(i,s),n.lineTo(i-Math.cos(l-.5)*14*a,s-Math.sin(l-.5)*14*a),n.lineTo(i-Math.cos(l+.5)*14*a,s-Math.sin(l+.5)*14*a),n.fill()}function fE(n,t,e,i,s){let r=i===mn.hoard,a=(r?13:10)*s;n.fillStyle="#1a0d08",n.fillRect(t-a-3*s,e-a-3*s,2*a+6*s,2*a+6*s),n.fillStyle=r?"#f2c14e":"#ff5a3a",n.fillRect(t-a,e-a,2*a,2*a),n.fillStyle="#1a0d08",n.font=`900 ${Math.round(a*1.5)}px "G6Display", Impact, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(r?"\u2605":"!",t,e+1),Ua(n,cE[i],t,e+a+13*s,r?"#ffd98a":"#ff9a80",12.5*s,"center")}var Zs=(n,t="")=>`<svg viewBox="0 0 24 24" aria-hidden="true" ${t}>${n}</svg>`,Kd={swords:Zs('<path d="M4 3l9.5 9.5-2 2L2 5V3h2zm16 0h2v2l-9.5 9.5-2-2L20 3zM3 17l4 4 2-2-1.2-1.2 3-3-1.6-1.6-3 3L5 15l-2 2zm18 0l-2-2-1.2 1.2-3-3-1.6 1.6 3 3L17 19l2 2 2-4z"/>'),infinity:Zs('<path d="M7 7a5 5 0 100 10c2.2 0 3.6-1.6 5-3.5C13.4 15.4 14.8 17 17 17a5 5 0 100-10c-2.2 0-3.6 1.6-5 3.5C10.6 8.6 9.2 7 7 7zm0 3c1.1 0 2 1 3.2 2-1.2 1-2.1 2-3.2 2a2 2 0 010-4zm10 0a2 2 0 010 4c-1.1 0-2-1-3.2-2 1.2-1 2.1-2 3.2-2z"/>'),clock:Zs('<path d="M9 1h6v2H9zM12 4a9 9 0 110 18 9 9 0 010-18zm0 3a6 6 0 100 12 6 6 0 000-12zm-1 2h2v4l3 2-1 1.6-4-2.6z"/>'),book:Zs('<path d="M4 3h7a3 3 0 013 3v15a2 2 0 00-2-2H4zm16 0h-4a3 3 0 00-1 .2V20a2 2 0 011-.3h4zM6 6v2h5V6zm0 4v2h5v-2z"/>'),gear:Zs('<path d="M10 2h4l.6 3 2.2 1.2 2.8-1.3 2 3.4-2.3 2 .1 2.4 2.3 2-2 3.4-2.8-1.3-2.2 1.2-.7 3h-4l-.6-3-2.2-1.2-2.8 1.3-2-3.4 2.3-2V10L2.2 8l2-3.4L7 5.9 9.3 4.7zM12 9a3 3 0 100 6 3 3 0 000-6z"/>'),door:Zs('<path d="M5 2h11v2H7v16h9v2H5zm12 5l5 5-5 5v-3.5h-7v-3h7z"/>'),lock:Zs('<path d="M7 10V7a5 5 0 0110 0v3h1v11H6V10zm3 0h4V7a2 2 0 00-4 0z"/>'),scroll:Zs('<path d="M6 3h11a3 3 0 013 3v1h-3v11a3 3 0 01-3 3H5a3 3 0 01-3-3v-2h3V6a3 3 0 011-3zm2 4v2h7V7zm0 4v2h7v-2zm0 4v2h5v-2z"/>')},dE={horns:Zs('<path d="M3 4c0 5 3 8 6 8.6V15l3 5 3-5v-2.4C18 12 21 9 21 4c-2 2.4-4 3.4-6 3.6C14 6.4 13 6 12 6s-2 .4-3 1.6C7 7.4 5 6.4 3 4z"/>'),coin:Zs('<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M8 6h3v7a1 1 0 002 0V6h3v7a4 4 0 01-8 0z"/>')},xl=[{label:"Light",n:100},{label:"Standard",n:150},{label:"Large",n:300},{label:"Huge",n:500}],kx=[{label:"Off",k:0},{label:"Low",k:.35},{label:"Medium",k:.65},{label:"High",k:1}],Ox=[{label:"Slow",k:.6},{label:"Normal",k:1},{label:"Fast",k:1.5}],zx=[{label:"Close",k:.7},{label:"Normal",k:1},{label:"Far",k:1.25}],ka={get(n,t){try{let e=localStorage.getItem(n);return e?{...t,...JSON.parse(e)}:t}catch{return t}},set(n,t){try{localStorage.setItem(n,JSON.stringify(t))}catch{}}},Oa=n=>`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}.${Math.floor(n*10%10)}`;function Bx(n,{fighter:t,mobile:e=!1,onScreen:i,onPick:s,onStart:r,onResume:a,onOptions:l,onExit:c,onPreview:o}){let u=e?2:3,f=ka.get("g6-options",{army:e?1:2,volume:3,camera:1,view:1});f.army=Math.min(f.army,u);let h=ka.get("g6-best",{}),d=ka.get("g6-story",{}),p=N=>d[N]=d[N]||{open:1,best:{}},x={scr:null,menu:0,spin:0,picked:t,mode:"battle",running:null,dbTab:0,dbSel:0,opt:0,pauseSel:0,resSel:0,result:null,chap:0,chapter:1,scene:null},_=N=>Pe("ui",{kind:N});n.innerHTML=`
  <section class="f-scr f-title" data-scr="title">
    <picture class="f-art"><source media="(max-width: 1000px)" srcset="art/title-1280.webp"><img src="art/title.webp" alt=""></picture>
    <div class="f-shade"></div><div class="f-embers">${"<i></i>".repeat(22)}</div>
    <div class="f-logo"><small>Gamescool presents</small><b data-t="Meme"><span>Meme</span></b><b data-t="Warrior"><span>Warrior</span></b><em>The Horde at the Gates</em></div>
    <button class="f-press" type="button">${e?"Tap to start":"Press start"}</button>
    <div class="f-legal">\xA9 2026 Gamescool \xB7 built on Voxel Musou by BubuAi (MIT) \xB7 fighters from Meme Surge</div>
    <a class="f-back" href="/" target="_top">\u2039 Gamescool</a>
  </section>
  <section class="f-scr f-menu" data-scr="menu">
    <picture class="f-art dim"><source media="(max-width: 1000px)" srcset="art/title-1280.webp"><img src="art/title.webp" alt=""></picture>
    <div class="f-orbit-rings"><i></i><i></i><i></i></div>
    <div class="f-orbit">${Yo.map(N=>`<button class="f-coin" type="button" data-id="${N}"><span class="f-coin-face">${Kd[$i[N].icon]}</span><b>${$i[N].coin}</b></button>`).join("")}</div>
    <div class="f-sil"></div>
    <div class="f-panel"><h2></h2><p></p></div>
    <div class="f-top"><b>Meme Warrior</b><span class="f-top-f"></span></div>
    <div class="f-hint">${e?"Tap a coin \xB7 tap again to enter":"\u25C0 \u25B6 Choose \xB7 Enter Select \xB7 Esc Title"}</div>
  </section>
  <section class="f-scr f-select" data-scr="select">
    <div class="f-sel-vig"></div>
    <div class="f-plate"><b>Character</b><b>Select</b></div>
    <div class="f-modetag"><b></b><span>${e?"Tap Confirm":"Press Enter"}</span></div>
    <svg class="f-ring" viewBox="0 0 1000 260" preserveAspectRatio="none" aria-hidden="true">
      <ellipse cx="500" cy="130" rx="492" ry="122" class="r1"/><ellipse cx="500" cy="130" rx="470" ry="112" class="r2"/>
      <ellipse cx="500" cy="130" rx="440" ry="100" class="r3"/></svg>
    <div class="f-socks"></div>
    <div class="f-who"><i class="f-emblem"></i><div><b></b><em></em><small></small></div></div>
    <div class="f-stats"></div>
    <div class="f-hint">${e?"Tap a fighter \xB7 Confirm to fight":"\u25C0 \u25B6 Select \xB7 Enter Confirm \xB7 Esc Back"}</div>
    <button class="f-confirm" type="button">Confirm</button>
    <button class="f-backbtn" type="button">\u2039 Back</button>
  </section>
  <section class="f-scr f-db" data-scr="database">
    <picture class="f-art dim"><source media="(max-width: 1000px)" srcset="art/title-1280.webp"><img src="art/title.webp" alt=""></picture>
    <div class="f-db-head"><h2>Database</h2><div class="f-tabs"><button type="button" data-t="0">Fighters</button><button type="button" data-t="1">Enforcers</button><button type="button" data-t="2">The Horde</button></div></div>
    <div class="f-db-list"></div>
    <div class="f-db-card"><img alt=""><div><small></small><b></b><p></p></div></div>
    <div class="f-hint">${e?"Tap an entry \xB7 \u2039 Back":"\u25B2 \u25BC Entry \xB7 \u25C0 \u25B6 Tab \xB7 Esc Back"}</div>
    <button class="f-backbtn" type="button">\u2039 Back</button>
  </section>
  <section class="f-scr f-opts" data-scr="options">
    <picture class="f-art dim"><source media="(max-width: 1000px)" srcset="art/title-1280.webp"><img src="art/title.webp" alt=""></picture>
    <div class="f-box"><h2>Options</h2><div class="f-rows"></div><p class="f-note">Saved on this device. The army size applies to the next battle.</p></div>
    <div class="f-hint">${e?"Tap \u25C0 \u25B6 to change \xB7 \u2039 Back":"\u25B2 \u25BC Choose \xB7 \u25C0 \u25B6 Change \xB7 Esc Back"}</div>
    <button class="f-backbtn" type="button">\u2039 Back</button>
  </section>
  <section class="f-scr f-chap" data-scr="chapters">
    <div class="f-chap-vig"></div>
    <div class="f-chap-head"><small>Story Mode</small><b>The Horde at the Gates</b><span class="f-chap-f"></span></div>
    <div class="f-chap-list"></div>
    <div class="f-chap-card"><canvas class="f-map" width="480" height="480"></canvas><div class="f-chap-txt"><small></small><b></b><p></p><ul class="f-goals"></ul><div class="f-chap-best"></div></div></div>
    <div class="f-hint">${e?"Tap a chapter \xB7 tap again to play":"\u25B2 \u25BC Chapter \xB7 Enter Play \xB7 Esc Back"}</div>
    <button class="f-backbtn" type="button">\u2039 Back</button>
  </section>
  <section class="f-scr f-story" data-scr="story">
    <div class="f-story-vig"></div>
    <div class="f-por l"><i></i></div><div class="f-por r"><i></i></div>
    <div class="f-story-top"><small></small><b></b></div>
    <div class="f-story-box"><div class="f-story-name"><b></b><small></small></div><p></p><i class="f-story-next">\u25BC</i></div>
    <button class="f-skip" type="button">Skip \u25B8\u25B8</button>
  </section>
  <section class="f-scr f-brief" data-scr="briefing">
    <div class="f-brief-vig"></div>
    <div class="f-brief-panel">
      <div class="f-brief-head"><small></small><b></b></div>
      <div class="f-brief-body"><canvas class="f-map" width="560" height="560"></canvas>
        <div class="f-brief-txt"><p></p><h3>Victory</h3><ul class="f-goals win"></ul><h3>Defeat</h3><ul class="f-goals lose"></ul>
          <h3>Enemy commanders</h3><div class="f-foes"></div></div></div>
    </div>
    <button class="f-go" type="button">Begin battle</button>
    <div class="f-hint">${e?"Tap Begin battle \xB7 \u2039 Back":"Enter Begin battle \xB7 Esc Back"}</div>
    <button class="f-backbtn" type="button">\u2039 Back</button>
  </section>
  <section class="f-scr f-pause" data-scr="pause">
    <div class="f-box"><small class="f-kick"></small><h2>Paused</h2><div class="f-list"></div>
      <div class="f-keys">${e?"":"<span><kbd>WASD</kbd> Move</span><span><kbd>J</kbd> Attack</span><span><kbd>K</kbd> Charge</span><span><kbd>Space</kbd> Jump</span><span><kbd>L</kbd> Dodge</span><span><kbd>I</kbd> Surge</span><span><kbd>Q</kbd><kbd>E</kbd> Camera</span>"}</div></div>
  </section>
  <section class="f-scr f-results" data-scr="results">
    <div class="f-box"><small class="f-kick"></small><h2></h2><p class="f-sub"></p><div class="f-res"></div><i class="f-rank"></i><div class="f-list"></div></div>
  </section>`;let g=(N,k=n)=>k.querySelector(N),A=(N,k=n)=>[...k.querySelectorAll(N)];A(".f-embers i",n).forEach((N,k)=>{let nt=Ft=>(Math.sin(k*127.1+Ft*311.7)*43758.5453%1+1)%1;N.style.left=`${(nt(1)*100).toFixed(1)}%`,N.style.animationDuration=`${(7+nt(2)*9).toFixed(1)}s`,N.style.animationDelay=`${(-nt(3)*14).toFixed(1)}s`;let Q=(.3+nt(4)*.9).toFixed(2);N.style.width=N.style.height=`${Q}rem`});let E=Object.fromEntries(A(".f-scr").map(N=>[N.dataset.scr,N])),m=A(".f-coin");function v(N){if(x.scr!==N){x.scr=N,n.hidden=!1,document.documentElement.classList.add("g6-front");for(let[k,nt]of Object.entries(E))nt.classList.toggle("on",k===N);n.dataset.scr=N,N==="menu"&&P(!0),N==="select"&&L(),N==="database"&&ye(),N==="options"&&dt(),N==="chapters"&&Nt(),N==="briefing"&&Se(),i&&i(N)}}function y(){x.scr=null,n.hidden=!0,document.documentElement.classList.remove("g6-front");for(let N of Object.values(E))N.classList.remove("on");i&&i(null)}let w=()=>{let N=un[x.picked];n.style.setProperty("--f",N.ui.main),n.style.setProperty("--fl",N.ui.light)},M=()=>{_("start"),v("menu")};E.title.addEventListener("click",N=>{N.target.closest("a")||M()});let S=0;function P(N){let k=$i[Yo[x.menu]];g(".f-panel h2",E.menu).innerHTML=k.title.replace(" ","<br>"),g(".f-panel p",E.menu).textContent=k.text,g(".f-top-f",E.menu).textContent=`Fighter: ${un[x.picked].name}`,g(".f-sil",E.menu).style.setProperty("--sil",`url(${un[x.picked].portrait})`),m.forEach((nt,Q)=>nt.classList.toggle("sel",Q===x.menu)),S=x.menu,N&&(x.spin=x.menu,C())}function C(){let N=m.length;m.forEach((k,nt)=>{let Q=((nt-x.spin)%N+N)%N;Q>N/2&&(Q-=N);let Ft=Q*(2*Math.PI/N),It=Math.cos(Ft),Mt=50+Math.sin(Ft)*40,I=50+It*30,tt=.62+.38*(It+1)/2;k.style.transform=`translate(-50%, -50%) translate(${Mt.toFixed(2)}cqw, ${I.toFixed(2)}cqh) scale(${tt.toFixed(3)})`,k.style.zIndex=String(10+Math.round(It*10)),k.style.filter=`brightness(${(.55+.45*(It+1)/2).toFixed(3)})`})}let z=N=>{x.menu=(x.menu+N+Yo.length)%Yo.length,_("move"),P(!1)};function U(){let N=$i[Yo[x.menu]];_("ok"),N.play?(x.mode=N.id,v("select")):N.id==="exit"?c():v(N.id)}m.forEach((N,k)=>N.addEventListener("click",()=>{k===x.menu?U():(x.menu=k,_("move"),P(!1))}));let V=[...ms,...Array(8-ms.length).fill(null)];g(".f-socks",E.select).innerHTML=V.map(N=>N?`<button class="f-sock" type="button" data-id="${N}"><img src="${un[N].disc}" alt="${un[N].name}"><i></i></button>`:`<span class="f-sock locked">${Kd.lock}</span>`).join("");let Y=A(".f-sock",E.select),ct=0,T=0;function L(){let N=un[x.picked],k=g1(N),nt=$i[x.mode];w(),g(".f-modetag b",E.select).textContent=nt.title,g(".f-emblem",E.select).innerHTML=dE[N.emblem],g(".f-who b",E.select).textContent=N.name,g(".f-who em",E.select).textContent=N.title,g(".f-who small",E.select).textContent=`${N.role} \xB7 ${N.weapon}`,g(".f-stats",E.select).innerHTML=[["Life",k.life,"life"],["Surge",k.surge,"surge"],["Attack",k.attack,"attack"],["Defense",k.defense,"defense"]].map(([Q,Ft,It])=>`<div class="f-bar ${It}"><span>${Q}</span><i><em style="--v:${Math.min(1,Ft).toFixed(3)}"></em></i></div>`).join("")+`<p class="f-passive"><em>${N.passive.name}.</em> ${N.passive.text}</p>`,Y.forEach(Q=>Q.classList.toggle("sel",Q.dataset&&Q.dataset.id===x.picked)),T=V.indexOf(x.picked)}function D(){let N=Y.length;Y.forEach((k,nt)=>{let Q=((nt-ct)%N+N)%N;Q>N/2&&(Q-=N);let Ft=Q*(2*Math.PI/N),It=Math.cos(Ft),Mt=50+Math.sin(Ft)*47,I=50+It*38,tt=.55+.45*(It+1)/2;k.style.transform=`translate(-50%, -50%) translate(${Mt.toFixed(2)}cqw, ${I.toFixed(2)}cqh) scale(${tt.toFixed(3)})`,k.style.zIndex=String(10+Math.round(It*10)),k.style.opacity=(It<0?.18+.5*(It+1):.68+.32*It).toFixed(3)})}function B(N){!un[N]||N===x.picked||(x.picked=N,_("move"),L(),s(N))}let b=N=>B(ms[(ms.indexOf(x.picked)+N+ms.length)%ms.length]);function j(){if(x.mode==="story"){_("ok"),x.running=x.picked,x.chap=Math.min(p(x.picked).open,yn.length)-1,v("chapters");return}_("go"),x.running=x.picked,x.result=null,r({mode:x.mode,fighter:x.picked})}Y.forEach(N=>N.dataset.id&&N.addEventListener("click",()=>{N.dataset.id===x.picked?j():B(N.dataset.id)})),g(".f-confirm",E.select).addEventListener("click",j);let it=E.chapters;g(".f-chap-list",it).innerHTML=yn.map((N,k)=>`<button type="button" data-k="${k}"><i>${N.n}</i><span><b>${N.title}</b><small>${N.place}</small></span><em></em></button>`).join("");let J=A(".f-chap-list button",it),vt=["C","B","A","S"];function Nt(){let N=un[x.picked],k=p(x.picked),nt=yn[x.chap];w(),g(".f-chap-f",it).textContent=`${N.name} \xB7 ${Math.min(k.open-1,yn.length)} of ${yn.length} cleared`,J.forEach((It,Mt)=>{let I=Mt<k.open,tt=k.best[Mt+1];It.classList.toggle("sel",Mt===x.chap),It.classList.toggle("locked",!I),g("em",It).innerHTML=I?tt?`<u class="r-${tt.rank}">${tt.rank}</u>`:"":Kd.lock,g("b",It).textContent=I?yn[Mt].title:"? ? ?",g("small",It).textContent=I?yn[Mt].place:"Clear the chapter before it"});let Q=x.chap<k.open,Ft=k.best[nt.n];g(".f-chap-txt small",it).textContent=`Chapter ${nt.n} \xB7 ${nt.time}`,g(".f-chap-txt b",it).textContent=Q?nt.title:"Locked",g(".f-chap-txt p",it).textContent=Q?nt.brief:`Clear chapter ${nt.n-1} with ${N.name} to open this battle.`,g(".f-goals",it).innerHTML=Q?nt.win.map(It=>`<li>${It}</li>`).join(""):"",g(".f-chap-best",it).innerHTML=Ft?`Best <u class="r-${Ft.rank}">${Ft.rank}</u> \xB7 ${Oa(Ft.time)}`:Q?"Not cleared yet":"",Yd(g(".f-map",it),nt,{locked:!Q}),o&&o(Q?nt.n:0)}let Z=N=>{x.chap=(x.chap+N+yn.length)%yn.length,_("move"),Nt()};function at(){if(x.chap>=p(x.picked).open){_("back"),J[x.chap].classList.remove("shake"),J[x.chap].offsetWidth,J[x.chap].classList.add("shake");return}_("ok"),x.chapter=yn[x.chap].n,Ht(yn[x.chap],"intro",()=>v("briefing"))}g(".f-chap-list",it).addEventListener("click",N=>{let k=N.target.closest("button");if(!k)return;let nt=+k.dataset.k;nt===x.chap?at():(x.chap=nt,_("move"),Nt())});let pt=E.story,zt=g(".f-por.l",pt),gt=g(".f-por.r",pt),Ut=g(".f-story-box",pt),ie=g(".f-story-name b",pt),rt=g(".f-story-name small",pt),Rt=g(".f-story-box p",pt);function Ct(N){if(N==="hero"){let k=un[x.picked];return{name:k.name,sub:k.title,side:"hero",art:k.portrait}}return ea[N]||ea.narr}function Ot(N,k){let nt=g("i",N);N.dataset.kind=k.side==="foe"?"foe":"tall",nt.dataset.src!==k.art&&(nt.style.backgroundImage=`url(${k.art})`,nt.dataset.src=k.art)}function Ht(N,k,nt){let Q=N[k];x.scene={ch:N,lines:Q,k:-1,done:nt,t0:0,n:0,right:null},g(".f-story-top small",pt).textContent=`Chapter ${N.n} \xB7 ${k==="intro"?N.place:"After the battle"}`,g(".f-story-top b",pt).textContent=N.title;let Ft=Q.find(([It])=>It!=="hero"&&It!=="narr");x.scene.right=Ft?Ft[0]:"captain",Ot(zt,Ct("hero")),Ot(gt,Ct(x.scene.right)),zt.classList.remove("on","in"),gt.classList.remove("on","in"),w(),v("story"),yt()}function yt(){let N=x.scene;if(!N)return;if(N.k>=0&&N.n<N.full.length){N.n=N.full.length,Rt.textContent=N.full,Ut.classList.add("done");return}if(N.k++,N.k>=N.lines.length){let Mt=N.done;x.scene=null,Mt&&Mt();return}let[k,nt]=N.lines[N.k],Q=Ct(k),Ft=k==="narr",It=!Ft&&k!=="hero";N.full=fl(nt,x.picked),N.n=0,N.t0=performance.now(),It&&k!==N.right&&(N.right=k,Ot(gt,Q),gt.classList.remove("in"),gt.offsetWidth),zt.classList.add("in"),gt.classList.add("in"),zt.classList.toggle("on",k==="hero"),gt.classList.toggle("on",It),pt.classList.toggle("narr",Ft),Ut.dataset.side=Ft?"narr":It?"r":"l",Ut.classList.toggle("ally",It&&Q.side==="ally"),Ut.classList.remove("done"),ie.textContent=Q.name||"",rt.textContent=Q.sub||"",Rt.textContent="",_("move")}function ne(){let N=x.scene;N&&(_("back"),x.scene=null,N.done&&N.done())}pt.addEventListener("click",N=>{N.target.closest(".f-skip")?ne():yt()});let ft=E.briefing;function Se(){let N=yn[x.chapter-1];w(),g(".f-brief-head small",ft).textContent=`Chapter ${N.n} \xB7 ${N.place}`,g(".f-brief-head b",ft).textContent=N.title,g(".f-brief-txt p",ft).textContent=N.brief,g(".f-goals.win",ft).innerHTML=N.win.map(k=>`<li>${k}</li>`).join(""),g(".f-goals.lose",ft).innerHTML=N.lose.map(k=>`<li>${k}</li>`).join(""),g(".f-foes",ft).innerHTML=N.foes.map(([k,nt])=>{let Q=ea[k];return`<div class="f-foe"><i style="background-image:url(${Q.art});background-size:${(Q.zoom||2)*100}%;background-position:${Q.pos||"50% 10%"}"></i><span><b>${Q.name}</b><small>${nt}</small></span></div>`}).join(""),Yd(g(".f-map",ft),N,{})}function et(){_("go"),x.result=null,r({mode:"story",fighter:x.running||x.picked,chapter:x.chapter})}g(".f-go",ft).addEventListener("click",et);let be=[ms.map(N=>({name:un[N].name,kick:`${un[N].title} \xB7 ${un[N].weapon}`,art:un[N].portrait,text:`${un[N].blurb} ${un[N].passive.name}: ${un[N].passive.text}`})),gx.map(N=>({name:N.name,kick:N.home,art:N.art,text:N.text})),xx.map(N=>({name:N.name,kick:N.home,art:N.art,text:N.text}))];function ye(){let N=be[x.dbTab];x.dbSel=Math.min(x.dbSel,N.length-1),A(".f-tabs button",E.database).forEach((Q,Ft)=>Q.classList.toggle("sel",Ft===x.dbTab)),g(".f-db-list",E.database).innerHTML=N.map((Q,Ft)=>`<button type="button" class="${Ft===x.dbSel?"sel":""}" data-k="${Ft}"><b>${Q.name}</b><small>${Q.kick}</small></button>`).join("");let k=N[x.dbSel],nt=g(".f-db-card",E.database);g("img",nt).src=k.art,g("small",nt).textContent=k.kick,g("b",nt).textContent=k.name,g("p",nt).textContent=k.text}A(".f-tabs button",E.database).forEach(N=>N.addEventListener("click",()=>{x.dbTab=+N.dataset.t,x.dbSel=0,_("move"),ye()})),g(".f-db-list",E.database).addEventListener("click",N=>{let k=N.target.closest("button");k&&(x.dbSel=+k.dataset.k,_("move"),ye())});let H=[{k:"army",name:"Army size",vals:xl.slice(0,u+1).map(N=>`${N.label} \xB7 ${N.n}`)},{k:"volume",name:"Sound",vals:kx.map(N=>N.label)},{k:"view",name:"Camera distance",vals:zx.map(N=>N.label)},{k:"camera",name:"Camera speed",vals:Ox.map(N=>N.label)},{k:"reset",name:"Best times",action:!0}],R=()=>({army:xl[f.army].n,volume:kx[f.volume].k,camera:Ox[f.camera].k,view:zx[f.view??1].k});function dt(){g(".f-rows",E.options).innerHTML=H.map((N,k)=>`<div class="f-row${k===x.opt?" sel":""}" data-k="${k}"><span>${N.name}</span>${N.action?`<button type="button" class="f-act">${Object.keys(h).length?"Clear records":"No records yet"}</button>`:`<button type="button" class="l" aria-label="Less">\u25C0</button><b>${N.vals[f[N.k]]}</b><button type="button" class="r" aria-label="More">\u25B6</button>`}</div>`).join("")}function ot(N,k=x.opt){let nt=H[k];if(nt.action){if(N===0&&Object.keys(h).length){for(let Q of Object.keys(h))delete h[Q];ka.set("g6-best",h),_("ok")}dt();return}N&&(f[nt.k]=(f[nt.k]+N+nt.vals.length)%nt.vals.length,ka.set("g6-options",f),_("move"),dt(),l(R()))}g(".f-rows",E.options).addEventListener("click",N=>{let k=N.target.closest(".f-row");k&&(x.opt=+k.dataset.k,N.target.closest(".l")?ot(-1):N.target.closest(".r")?ot(1):N.target.closest(".f-act")?ot(0):dt())});let W={pause:()=>x.mode==="story"?[["resume","Resume"],["restart","Restart battle"],["chapters","Chapter select"],["menu","Main menu"]]:[["resume","Resume"],["restart","Restart"],["fighter","Change fighter"],["menu","Main menu"]],results:()=>x.mode==="story"?x.result&&x.result.kind==="story-win"?[["continue","Continue"],["restart","Fight again"],["chapters","Chapter select"],["menu","Main menu"]]:[["restart","Try again"],["chapters","Chapter select"],["menu","Main menu"]]:[...x.result&&x.result.kind==="win"?[["keep","Keep fighting"]]:[],["restart","Play again"],["fighter","Change fighter"],["menu","Main menu"]]};function bt(N){let k=N==="pause"?x.pauseSel:x.resSel,nt=W[N]();g(".f-list",E[N]).innerHTML=nt.map(([Q,Ft],It)=>`<button type="button" data-act="${Q}" class="${It===k?"sel":""}">${Ft}</button>`).join("")}function At(N){if(_(N==="resume"||N==="keep"?"back":"ok"),N==="resume"||N==="keep")y(),a();else if(N==="restart")y(),r({mode:x.mode,fighter:x.running||x.picked,chapter:x.chapter});else if(N==="fighter")v("select");else if(N==="menu")v("menu");else if(N==="chapters")x.chap=x.chapter-1,v("chapters");else if(N==="continue"){let k=yn[x.chapter-1];Ht(k,"outro",()=>{x.chap=Math.min(k.n,yn.length-1),v("chapters")})}}for(let N of["pause","results"])E[N].addEventListener("click",k=>{let nt=k.target.closest("[data-act]");nt&&At(nt.dataset.act)});A(".f-backbtn").forEach(N=>N.addEventListener("click",()=>ut()));function ut(){_("back"),x.scr==="menu"?v("title"):x.scr==="select"||x.scr==="database"||x.scr==="options"?v("menu"):x.scr==="chapters"?v("select"):x.scr==="briefing"?v("chapters"):x.scr==="pause"&&(y(),a())}function mt(N){let k=x.scr;if(!k)return!1;let nt=N==="ArrowLeft"||N==="KeyA",Q=N==="ArrowRight"||N==="KeyD",Ft=N==="ArrowUp"||N==="KeyW",It=N==="ArrowDown"||N==="KeyS",Mt=N==="Enter"||N==="NumpadEnter"||N==="Space"||N==="KeyJ",I=N==="Escape"||N==="Backspace"||N==="KeyK";if(k==="title")return Mt&&M(),Mt;if(k==="story"){if(Mt||N==="Space")yt();else if(I)ne();else return!1;return!0}if(I)return k==="results"||ut(),!0;if(k==="chapters"){if(Ft||nt)Z(-1);else if(It||Q)Z(1);else if(Mt)at();else return!1;return!0}if(k==="briefing"){if(Mt)et();else return!1;return!0}if(k==="menu"){if(nt||Ft)z(-1);else if(Q||It)z(1);else if(Mt)U();else return!1;return!0}if(k==="select"){if(nt||Ft)b(-1);else if(Q||It)b(1);else if(Mt)j();else return!1;return!0}if(k==="database"){if(nt||Q)x.dbTab=(x.dbTab+(Q?1:-1)+be.length)%be.length,x.dbSel=0;else if(Ft||It)x.dbSel=(x.dbSel+(It?1:-1)+be[x.dbTab].length)%be[x.dbTab].length;else return!1;return _("move"),ye(),!0}if(k==="options"){if(Ft||It)x.opt=(x.opt+(It?1:-1)+H.length)%H.length,_("move"),dt();else if(nt||Q)ot(Q?1:-1);else if(Mt)ot(H[x.opt].action?0:1);else return!1;return!0}if(k==="pause"||k==="results"){let tt=W[k](),st=k==="pause"?"pauseSel":"resSel";if(Ft||nt)x[st]=(x[st]-1+tt.length)%tt.length;else if(It||Q)x[st]=(x[st]+1)%tt.length;else return Mt?(At(tt[x[st]][0]),!0):!1;return _("move"),bt(k),!0}return!1}addEventListener("keydown",N=>{n.hidden||N.repeat&&!/Arrow/.test(N.code)||mt(N.code)&&(N.preventDefault(),N.g6front=!0)},!0);let F={12:"ArrowUp",13:"ArrowDown",14:"ArrowLeft",15:"ArrowRight",0:"Enter",9:"Enter",1:"Escape"},X={},G=0,lt="";function Bt(N){let k=navigator.getGamepads&&navigator.getGamepads()[0];if(!k||n.hidden)return;for(let[It,Mt]of Object.entries(F)){let I=!!(k.buttons[It]&&k.buttons[It].pressed);I&&!X[It]&&mt(Mt),X[It]=I}let nt=k.axes[0]||0,Q=k.axes[1]||0,Ft=nt<-.6?"ArrowLeft":nt>.6?"ArrowRight":Q<-.6?"ArrowUp":Q>.6?"ArrowDown":"";Ft&&(Ft!==lt||N-G>260)&&(mt(Ft),G=N),lt=Ft}function Gt(N){if(requestAnimationFrame(Gt),n.hidden)return;if(Bt(N),x.scr==="menu"){let nt=m.length,Q=S-x.spin;Q-=Math.round(Q/nt)*nt,Math.abs(Q)>.001&&(x.spin+=Q*.18,C())}if(x.scr==="select"){let nt=Y.length,Q=T-ct;Q-=Math.round(Q/nt)*nt,(Math.abs(Q)>.001||!D.done)&&(ct+=Q*.16,D(),D.done=!0)}let k=x.scene;x.scr==="story"&&k&&k.full&&k.n<k.full.length&&(k.n=Math.min(k.full.length,Math.floor((N-k.t0)*.055)),Rt.textContent=k.full.slice(0,k.n),k.n>=k.full.length&&Ut.classList.add("done"))}return requestAnimationFrame(Gt),w(),{get screen(){return x.scr},get picked(){return x.picked},get mode(){return x.mode},options:R,show:v,hide:y,pause(){x.pauseSel=0,g(".f-kick",E.pause).textContent=x.mode==="story"?`Chapter ${x.chapter} \xB7 ${yn[x.chapter-1].title}`:`${$i[x.mode].title} \xB7 ${un[x.running||x.picked].name}`,bt("pause"),v("pause")},results(N){x.result=N,x.resSel=0;let k=un[x.running||x.picked],nt=$i[x.mode],Q=g(".f-rank",E.results);if(Q.className="f-rank",Q.textContent="",N.kind==="story-win"||N.kind==="story-lose"){x.mode="story",x.chapter=N.chapter;let I=yn[N.chapter-1],tt=N.kind==="story-win",st="";if(tt){let xt=p(k.id),Vt=xt.best[I.n];xt.open=Math.max(xt.open,Math.min(yn.length,I.n+1)+(I.n===yn.length?1:0)),(!Vt||N.score.score>Vt.score||N.score.score===Vt.score&&N.time<Vt.time)&&(xt.best[I.n]={rank:N.score.rank,score:N.score.score,time:N.time},st=Vt?"New record":""),ka.set("g6-story",d),Q.textContent=N.score.rank,Q.classList.add("on",`r-${N.score.rank}`)}g(".f-kick",E.results).textContent=`Chapter ${I.n} \xB7 ${I.title} \xB7 ${k.name}`,g("h2",E.results).textContent=tt?"Victory":"Defeat",g(".f-sub",E.results).textContent=tt?`${fl(I.battle.won[1],k.id)}${st?` ${st}!`:""}`:`${N.reason}.`;let K=[["Time",Oa(N.time)],["Knockouts",N.kos],["Best chain",N.chain],["Health left",`${Math.round(N.hp*100)}%`],...tt?[["Score",N.score.score]]:[]];g(".f-res",E.results).innerHTML=K.map(([xt,Vt])=>`<span>${xt}</span><b>${Vt}</b>`).join(""),bt("results"),v("results");return}let Ft="";if(N.kind==="clear"){let I=h[k.id];(!I||N.time<I)&&(h[k.id]=N.time,ka.set("g6-best",h),Ft=I?"New best time":"First record"),N.best=h[k.id]}let It={win:["Battle won","All four enforcers are down. The gates hold."],lose:["Defeated","The horde broke through. Pick yourself up and go again."],clear:["Challenge clear",Ft?`${Ft}! 100 knockouts in ${Oa(N.time)}.`:`100 knockouts in ${Oa(N.time)}. Best: ${Oa(N.best)}.`]}[N.kind];g(".f-kick",E.results).textContent=`${nt.title} \xB7 ${k.name}`,g("h2",E.results).textContent=It[0],g(".f-sub",E.results).textContent=It[1];let Mt=[["Knockouts",N.kos],["Best chain",N.chain],...x.mode==="battle"?[["Enforcers down",`${N.bosses} / 4`]]:[],["Time",Oa(N.time)],...N.kind==="clear"?[["Best time",Oa(N.best)]]:[]];g(".f-res",E.results).innerHTML=Mt.map(([I,tt])=>`<span>${I}</span><b>${tt}</b>`).join(""),bt("results"),v("results")}}}var ra=n=>Math.round(n*60),pE=["Iron Bailiff","The Collector","The Gatekeeper","The Hoard"],vl=(n,t)=>t>=0&&n.st[t]!==Et.OFF&&n.st[t]!==Et.DEAD,Hx=(n,t)=>{let e=Math.atan2(-n,t),i=Math.round(e/(Math.PI/4));return["north","north-east","east","south-east","south","south-west","west","north-west","north"][(i+8)%8]};function Vx(n){let t={ch:null,obj:[],pins:[],tags:[],camps:[],standard:null,runner:null,clock:null,boss:-1,result:null,reason:"",f0:0,phase:0,extra:1,hurtTaken:0},e=[],i={},s=()=>n.crowd,r=()=>n.hero,a=()=>(n.frame-t.f0)/60,l=(m,v)=>e.push({f:n.frame+ra(m),fn:v}),c=(m,v=0)=>{m&&l(v,()=>Pe("story:say",{who:m[0],text:m[1]}))},o=(m,v="")=>Pe("story:banner",{title:m,sub:v}),u=(m,v,y)=>{let w=t.obj[m];w&&(w.state=v,y!=null&&(w.n=y),Pe("story:obj",{k:m}))},f=m=>{let v=r();v.hp<=0||(v.hp=Math.min(v.hpMax,v.hp+v.hpMax*m),Pe("story:heal",{k:m}))},h=(m=0)=>{t.result||l(m,()=>{t.result||(t.result="win")})},d=m=>{t.result||(t.result="lose",t.reason=m)},p=(m,v=.5)=>{let y=n.cam.yaw+Oe.range(-v,v),w=r(),M=w.x+Math.sin(y)*m,S=w.z+Math.cos(y)*m,P=Math.hypot(M,S),C=yi-4;return P>C&&(M*=C/P,S*=C/P),[M,S]},x=m=>s().grunts+m;oe("ko",m=>{t.ch&&!t.result&&_[t.ch.id].ko&&_[t.ch.id].ko(m)}),oe("hit",m=>{t.ch&&!t.result&&_[t.ch.id].hit&&_[t.ch.id].hit(m)}),oe("hero:hurt",m=>{t.ch&&(t.hurtTaken+=m.dmg)});let _={gates:{setup(m){g(0,-6,0),s().autoWaves=!0,s().spawnArmy(Math.min(s().cap,260),0,-6,7,!1),t.obj=[{text:m.win[0],state:"active",n:0,of:40},{text:m.win[1],state:"wait"}],c(m.battle.start,3.2)},step(m){let v=t.obj[0],y=r().kos;if(t.phase===0){if(v.n!==Math.min(40,y)&&(v.n=Math.min(40,y)),y>=20&&!i.half&&(i.half=1,c(m.battle.half)),y>=40){t.phase=1,u(0,"done"),u(1,"active");let[w,M]=p(24,.35),S=s().spawnSquad(14,w,M,{state:"charge",officer:mn.bailiff,officerHp:700,force:!0});t.boss=x(mn.bailiff),S||s().wake(s().spawnOfficer(mn.bailiff,w,M,{hp:700})),o("The <em>Iron Bailiff</em> has entered the field","Defeat him to take the plaza"),c(m.battle.boss,1.2),c(m.battle.bossReply,5.6)}}else if(t.phase===1){let w=t.boss,M=s();vl(M,w)&&M.hp[w]<M.hpMax[w]*.5&&!i.hurt&&(i.hurt=1,c(m.battle.bossHurt))}},ko(m){m.officer&&m.i===t.boss&&t.phase===1&&(u(1,"done"),o("<em>Iron Bailiff</em> defeated","The vanguard breaks"),c(t.ch.battle.won,1.4),h(1))},extra:()=>1},camps:{setup(m){g(0,2,0),s().autoWaves=!1,t.camps=m.camps.map((v,y)=>{let w=Math.atan2(-v.x,-v.z),M=s().spawnSquad(18,v.x,v.z,{state:"hold",pin:!0,captainHp:380,face:w,tag:y});return s().spawnSquad(10,v.x+Math.sin(w+1.6)*5,v.z+Math.cos(w+1.6)*5,{state:"hold",pin:!0,face:w,tag:y}),{...v,captain:M?M.captain:-1,taken:!1,colF:n.frame+ra(14+y*7)}});for(let[v,y]of[[-14,22],[14,26],[18,-16],[-20,-12]])s().spawnSquad(20,v,y,{state:"hold"});t.tags=t.camps.filter(v=>v.captain>=0).map(v=>({i:v.captain,name:"Camp Captain",sub:v.name})),t.pins=t.camps.map(v=>({x:v.x,z:v.z,label:v.name,kind:"camp",done:!1})),t.obj=[{text:m.win[0],state:"active",n:0,of:3},{text:m.win[1],state:"wait"}],c(m.battle.start,3.2)},step(){for(let m of t.camps){if(m.taken||n.frame<m.colF||(m.colF=n.frame+ra(Oe.range(22,30)),s().aliveGrunts()>s().cap-12))continue;let v=s().spawnSquad(Oe.int(8,12),m.x,m.z,{state:"march"});v&&Pe("crowd:wave",{count:v.members.length,x:m.x,z:m.z,from:m.name})}if(t.phase===1){let m=t.boss,v=s();vl(v,m)&&v.hp[m]<v.hpMax[m]*.5&&!i.hurt&&(i.hurt=1,c(t.ch.battle.bossHurt))}},ko(m){let v=t.camps.find(y=>!y.taken&&y.captain===m.i);if(v){v.taken=!0;let y=t.pins.find(S=>S.label===v.name);y&&(y.done=!0),t.tags=t.tags.filter(S=>S.i!==m.i);let w=t.camps.filter(S=>S.taken).length,M=3-w;u(0,w===3?"done":"active",w),o(`<em>${v.name}</em> taken`,M?`${M} camp${M>1?"s":""} left \xB7 health restored`:"All three camps are ours \xB7 health restored"),f(.15),w===1&&c(t.ch.battle.first,1.6),w===3&&(t.phase=1,u(1,"active"),l(3.5,()=>{let[S,P]=p(26,.4),C=s().spawnSquad(16,S,P,{state:"charge",officer:mn.collector,officerHp:760,force:!0});t.boss=x(mn.collector),C||s().wake(s().spawnOfficer(mn.collector,S,P,{hp:760})),o("<em>The Collector</em> has entered the field","He wants his losses back"),c(t.ch.battle.boss,1.2)}))}else m.officer&&m.i===t.boss&&t.phase===1&&(u(1,"done"),o("<em>The Collector</em> defeated","The columns have stopped"),c(t.ch.battle.won,1.4),h(1))},extra:()=>1},hold:{setup(m){let v=m.standard;g(v.x,v.z-16,0),s().autoWaves=!1,t.standard={x:v.x,z:v.z,hp:v.hp,max:v.hp,hitF:-99,down:!1},t.pins=[{x:v.x,z:v.z,label:"Rally Standard",kind:"standard",done:!1}],t.obj=[{text:m.win[0],state:"active"},{text:m.win[1],state:"wait"}],t.clock={label:"Hold the line",t:m.hold},t.colF=n.frame+ra(4),t.dirs=[Math.PI,Math.PI*.72,-Math.PI*.72,Math.PI*.5,-Math.PI*.5],t.colN=0,E(12,-Math.PI*.62),c(m.battle.start,3.2)},step(m){let v=t.standard,y=s();if(t.phase===0){if(t.clock.t=Math.max(0,m.hold-a()),t.clock.t<=0){t.phase=1,t.clock=null,u(0,"done"),u(1,"active");let M=Math.PI+Oe.range(-.4,.4),[S,P]=A(M),C=y.spawnSquad(16,S,P,{state:"march",target:{x:v.x,z:v.z},officer:mn.gatekeeper,officerHp:820,force:!0});t.boss=x(mn.gatekeeper),C||y.wake(y.spawnOfficer(mn.gatekeeper,S,P,{hp:820})),o("<em>The Gatekeeper</em> has entered the field",`He marches on the standard from the ${Hx(S-v.x,P-v.z)}`),c(m.battle.boss,1.2),t.colF=n.frame+ra(12)}}else{let M=t.boss;vl(y,M)&&y.hp[M]<y.hpMax[M]*.5&&!i.hurt&&(i.hurt=1,c(m.battle.bossHurt))}if(n.frame>=t.colF){let M=Math.min(1,a()/m.hold);t.colF=n.frame+ra(t.phase?16:15-5*M),y.aliveGrunts()<y.cap-10&&E(Oe.int(9,13)+Math.round(M*3),t.dirs[t.colN++%t.dirs.length]+Oe.range(-.3,.3))}let w=0;for(let M=0;M<y.N;M++)!y.form[M]||y.sq.st[y.squad[M]]!==5||y.st[M]===Et.OFF||y.st[M]===Et.DEAD||(y.x[M]-v.x)**2+(y.z[M]-v.z)**2<25&&w++;w&&(v.hp=Math.max(0,v.hp-w*.1/60),v.hitF=n.frame),v.hp<v.max*.6&&!i.hurtS&&(i.hurtS=1,c(m.battle.hurt)),v.hp<v.max*.3&&!i.crack&&(i.crack=1,c(m.battle.crack)),v.hp<=0&&!v.down&&(v.down=!0,t.pins[0].done=!0,u(t.phase,"fail"),o("The <em>rally standard</em> has fallen",""),c(m.battle.lost,.4),d("The rally standard fell"))},ko(m){m.officer&&m.i===t.boss&&t.phase===1&&(u(1,"done"),o("<em>The Gatekeeper</em> defeated","The standard still flies"),c(t.ch.battle.won,1.4),h(1))},extra:()=>t.standard?t.standard.hp/t.standard.max:0},chase:{setup(m){g(-8,34,Math.PI),s().autoWaves=!1;let[v,y]=m.route[0],w=s().spawnOfficer(mn.collector,v,y,{hp:640,aggro:0}),M=s();M.flee[w]=1,M.fleeV[w]=0,M.fx[w]=v,M.fz[w]=y,t.boss=w;let S=0;for(let C=1;C<m.route.length;C++)S+=Math.hypot(m.route[C][0]-m.route[C-1][0],m.route[C][1]-m.route[C-1][1]);t.runner={i:w,wp:1,left:S,total:S,pauseF:n.frame+ra(1.2),cornered:!1};let P=m.route[m.route.length-1];t.pins=[{x:P[0],z:P[1],label:"South Road",kind:"exit",done:!1}],t.obj=[{text:m.win[0],state:"active"}],M.spawnSquad(12,2,22,{state:"charge"});for(let[C,z,U]of[[24,-4,14],[0,-22,14],[-24,-30,12],[12,-34,10]])M.spawnSquad(U,C,z,{state:"hold",pin:!0});for(let[C,z]of[[-24,8],[30,20]])M.spawnSquad(16,C,z,{state:"hold"});c(m.battle.start,1)},step(m){let v=t.runner,y=s(),w=v.i,M=r();if(!vl(y,w)||v.cornered)return;let S=m.route;if(n.frame<v.pauseF)y.fleeV[w]=0;else{let z=Math.hypot(M.x-y.x[w],M.z-y.z[w])<6;y.fleeV[w]=z?4.7:4;let[U,V]=S[v.wp];if(y.fx[w]=U,y.fz[w]=V,Math.hypot(U-y.x[w],V-y.z[w])<1.4){if(v.wp===S.length-1){t.obj[0].state="fail",Pe("story:obj",{k:0}),o("<em>The Collector</em> escaped","The treasury is gone"),c(m.battle.lost,.2),y.st[w]=Et.OFF,d("The Collector escaped with the treasury");return}v.wp++,(v.wp===3||v.wp===5)&&(v.pauseF=n.frame+ra(2.2))}}let P=Math.hypot(S[v.wp][0]-y.x[w],S[v.wp][1]-y.z[w]);for(let z=v.wp+1;z<S.length;z++)P+=Math.hypot(S[z][0]-S[z-1][0],S[z][1]-S[z-1][1]);v.left=P;let C=1-P/v.total;C>.5&&!i.half&&(i.half=1,c(m.battle.half)),C>.8&&!i.late&&(i.late=1,o("<em>The Collector</em> is almost at the road",`${Math.round(P)} m to go`)),y.hp[w]<y.hpMax[w]*.34&&(v.cornered=!0,y.flee[w]=0,y.dmgK[w]=1.2,y.wake(w),o("<em>The Collector</em> is cornered","Finish him"),c(m.battle.cornered,.3))},hit(m){m.i===t.runner.i&&!i.hit&&(i.hit=1,c(t.ch.battle.hit))},ko(m){m.i===t.runner.i&&(t.pins[0].done=!0,u(0,"done"),o("<em>The Collector</em> defeated","The treasury is safe"),c(t.ch.battle.won,1.4),h(1))},extra:()=>t.runner?Math.min(1,t.runner.left/t.runner.total*1.6):0},vault:{setup(m){g(0,-2,0);let v=s();v.autoWaves=!0;for(let[P,C,z]of m.guards){let U=Math.atan2(-C,-2-z);v.spawnOfficer(P,C,z,{hp:640,aggro:13,face:U}),v.spawnSquad(16,C-Math.sin(U)*2.5,z-Math.cos(U)*2.5,{state:"hold",pin:!0,face:U})}let[y,w,M]=m.boss,S=v.spawnOfficer(y,w,M,{hp:1900,aggro:0,face:Math.PI});v.dmgK[S]=1.4,v.invuln[S]=1,t.boss=S,t.hoardGuard=v.spawnSquad(22,w,M-5,{state:"hold",pin:!0,face:Math.PI});for(let[P,C]of[[-16,-18],[18,-14]])v.spawnSquad(18,P,C,{state:"hold"});t.pins=[{x:w,z:M,label:"The Hoard",kind:"boss",done:!1}],t.obj=[{text:m.win[0],state:"active",n:0,of:3},{text:m.win[1],state:"wait"}],t.downed=new Set,c(m.battle.start,3.2)},step(m){let v=s(),y=t.boss;if(!(t.phase!==1||!vl(v,y))){if(v.hp[y]<v.hpMax[y]*.6&&!i.rush){i.rush=1,c(m.battle.rush);for(let w of[1.2,-1.2]){let[M,S]=p(28,0),P=n.cam.yaw+w,C=r().x+Math.sin(P)*26,z=r().z+Math.cos(P)*26,U=v.spawnSquad(12,Math.max(-40,Math.min(40,C)),Math.max(-40,Math.min(40,z)),{state:"charge"});U&&Pe("crowd:wave",{count:U.members.length,x:M,z:S})}}v.hp[y]<v.hpMax[y]*.25&&!i.low&&(i.low=1,c(m.battle.low))}},ko(m){if(!m.officer)return;let v=m.i-s().grunts;if(m.i===t.boss&&t.phase===1){u(1,"done"),o("<em>The Hoard</em> defeated","The Horde is breaking"),c(t.ch.battle.won,1.4),h(1.2);return}if(v===mn.hoard||t.downed.has(v))return;t.downed.add(v);let y=t.downed.size;u(0,y===3?"done":"active",y),o(`<em>${pE[v]}</em> defeated`,y<3?`${3-y} left \xB7 health restored`:"Health restored"),f(.2),y===3&&(t.phase=1,u(1,"active"),l(2.5,()=>{let w=s();w.invuln[t.boss]=0,w.wake(t.boss),t.hoardGuard&&(w.sq.st[t.hoardGuard.q]=4,w.sq.tgt[t.hoardGuard.q]=0),t.pins[0].done=!0,o("<em>The Hoard</em> is on the move","Bring it down"),c(t.ch.battle.boss,1)}))},hit(m){m.i===t.boss&&t.phase===0&&!i.shrug&&(i.shrug=1,c(t.ch.battle.shrug),o("<em>The Hoard</em> cannot be hurt yet","Defeat its three enforcers first"))},extra:()=>1}};function g(m,v,y){n.hero.reset({x:m,z:v,yaw:y}),n.cam.reset(y)}function A(m){let v=yi-3;return[Math.sin(m)*v,Math.cos(m)*v]}function E(m,v){let y=t.standard,w=y.x+Math.sin(v)*44,M=y.z+Math.cos(v)*44,S=Math.hypot(w,M),P=yi-2;S>P&&(w*=P/S,M*=P/S);let C=s().spawnSquad(m,w,M,{state:"march",target:{x:y.x,z:y.z}});C&&(Pe("crowd:wave",{count:C.members.length,x:w,z:M,quiet:!0}),o("A column marches on the <em>standard</em>",`From the ${Hx(w-y.x,M-y.z)}`))}return t.reset=m=>{let v=yn[m-1];Object.assign(t,{ch:v,obj:[],pins:[],tags:[],camps:[],standard:null,runner:null,clock:null,boss:-1,result:null,reason:"",f0:n.frame,phase:0,extra:1,hurtTaken:0}),e=[],i={};let y=s();y.officerWaves=!1,_[v.id].setup(v)},t.off=()=>{t.ch=null,e=[]},t.step=()=>{if(t.ch){for(let m=0;m<e.length;m++)if(n.frame>=e[m].f){let v=e[m].fn;e.splice(m--,1),v()}t.result||_[t.ch.id].step(t.ch)}},t.score=()=>{let m=r();return vx(t.ch,{time:a(),kos:m.kos,hp:m.hp/m.hpMax,extra:_[t.ch.id].extra()})},t.time=a,t.speakers=ea,t}var Gx=()=>new Qe({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),Zd=()=>Bo(Gx(),.4,!0),s0=4862498,mE=5913898,jd=3877406;function Wx(n,t){let e=vi(606),i=f=>new Qe({map:f,emissiveMap:f,emissive:16777215,emissiveIntensity:.22,side:En,alphaTest:.5,roughness:.92,flatShading:!0}),s=i(Xr("down",{bg:"#6a1c14",border:"#200c08",seed:61})),r=i(Xr("up",{bg:"#ddd1b0",border:"#17261d",w:192,h:256,seed:62})),a=i(Xr("up",{bg:"#d2c5a2",border:"#17261d",w:128,h:96,tatter:!1,seed:63})),l=new an({color:new Qt(3.2,1.3,.35),fog:!1}),c={};function o(f,h,d,p,x,_,g,A){h.push({s:[.24,x,.24],p:[d,x/2,p],c:jd}),h.push({s:[_+.5,.18,.18],p:[d+_/2,x-.3,p],c:jd}),h.push({s:[.14,.9,.14],p:[d,x+.45,p],c:12103840});let E=Kc(A,_,g,"hang",e.range(0,6.28));return E.position.set(d+.12,x-.4,p),E.castShadow=!0,f.add(E),E}{let f=new Ai,h=[];for(let d of yn[1].camps){let p=new Ai,x=[],_=Math.atan2(-d.x,-d.z);p.position.set(d.x,0,d.z),p.rotation.y=_;for(let m=0;m<Math.PI*2;m+=.085){let v=Math.atan2(Math.sin(m),Math.cos(m));if(Math.abs(v)<.5||Math.abs(Math.abs(v)-Math.PI)<.18||e.chance(.06))continue;let y=6.5+e.range(-.15,.15),w=Math.sin(m)*y,M=Math.cos(m)*y,S=e.range(1.2,1.7);x.push({s:[.24,S,.24],p:[w,S/2,M],r:[e.range(-.08,.08),m,e.range(-.1,.1)],c:tn(mE,e.range(.75,1.1))}),x.push({s:[.14,.26,.14],p:[w,S+.1,M],c:tn(7228468,e.range(.8,1.1))}),e.chance(.25)&&x.push({s:[.18,.18,1.9],p:[w,.8,M],r:[0,m+Math.PI/2,0],c:4074013})}for(let m of[-1,1]){let v=m*.55,y=Math.sin(v)*6.5,w=Math.cos(v)*6.5;x.push({s:[.42,3.4,.42],p:[y,1.7,w],c:s0},{s:[.3,.3,.3],p:[y,3.55,w],c:2759184});let M=new Re(new Ln(.24,.34,.24),l);M.position.set(y,3.85,w),p.add(M)}for(let[m,v,y,w,M]of[[-3.1,-3,3,3.4,9056293],[3,-3.2,2.8,3.2,11573884],[.2,-4.9,2.6,2.6,9056293]]){let S=e.range(-.25,.25);for(let P=0;P<4;P++)x.push({s:[y*(1-P*.22),.5,w],p:[m,.25+P*.5,v],r:[0,S,0],c:tn(M,1-P*.05)});x.push({s:[.14,2.6,.14],p:[m,1.3,v],c:3810840})}x.push({s:[1.5,.3,.3],p:[0,.15,2.6],r:[0,.5,0],c:2364688},{s:[1.5,.3,.3],p:[0,.32,2.6],r:[0,-.7,0],c:3021840});for(let m=0;m<8;m++){let v=m/8*Math.PI*2;x.push({s:[.34,.26,.34],p:[Math.sin(v)*.95,.13,2.6+Math.cos(v)*.95],c:tn(6180428,e.range(.8,1.1))})}let g=new Re(new Ln(.7,.14,.7),l);g.position.set(0,.1,2.6),p.add(g);for(let[m,v,y]of[[-4.4,1.5,.9],[-4.9,.6,.7],[4.6,1.2,1],[4.1,2.2,.75]])x.push({s:[y,y,y],p:[m,y/2,v],r:[0,e.range(0,3),0],c:tn(7229496,e.range(.8,1.1))});for(let m of[-1,1]){let v=m*2.6,y=3.6;x.push({s:[2.2,.14,.14],p:[v,1.2,y],c:s0});for(let w=0;w<5;w++)x.push({s:[.06,2.4,.06],p:[v-.8+w*.4,1.2,y+.1],r:[.18,0,0],c:7035450})}let A=o(p,x,0,0,10,2.8,5.2,s),E=new Re(Dn(x),Zd());E.castShadow=!0,E.receiveShadow=!0,p.add(E),f.add(p),h.push(A)}n.add(f),c.camps={group:f,update(d,p){h.forEach((x,_)=>{let g=p.camps[_];x.material=g&&g.taken?r:s,Po(x,d)})}}}{let{x:f,z:h}=yn[2].standard,d=new Ai,p=new Ai,x=[],_=[];d.position.set(f,0,h),d.add(p);for(let y=0;y<14;y++){let w=y/14*Math.PI*2,M=1.5;_.push({s:[.9,.42,.55],p:[Math.sin(w)*M,.21,Math.cos(w)*M],r:[0,w,0],c:tn(11047538,e.range(.85,1.1))}),y%2&&_.push({s:[.85,.4,.5],p:[Math.sin(w+.22)*M,.6,Math.cos(w+.22)*M],r:[0,w+.22,0],c:tn(10126438,e.range(.85,1.1))})}x.push({s:[2.2,.3,2.2],p:[0,.15,0],c:6970450});let g=o(p,_,0,0,12,3.4,6.2,r),A=[];for(let y of[-1,1]){x.push({s:[.1,4.6,.1],p:[y*1.9,2.3,-1.2],c:jd});let w=Kc(a,1.6,1.1,"flag",e.range(0,6.28));w.position.set(y*1.9,4.5,-1.2),w.rotation.y=y>0?0:Math.PI,d.add(w),A.push(w)}let E=new Re(Dn(x),Zd());E.castShadow=E.receiveShadow=!0,d.add(E);let m=new Re(Dn(_),Zd());m.castShadow=m.receiveShadow=!0,p.add(m);for(let y of[g,...A])y.material=Bo(y.material.clone(),.4,!0);n.add(d);let v=0;c.hold={group:d,update(y,w,M){Po(g,y);for(let z of A)Po(z,y);let S=w.standard;if(!S){p.rotation.set(0,0,0),v=0;return}let P=t.frame-S.hitF<6;S.down?v=Math.min(1,v+M*1.4):v=0;let C=v*v;p.rotation.x=C*1.45,p.rotation.z=P&&!S.down?Math.sin(y*47)*.02*(1-S.hp/S.max+.3):0}}}{let f=yn[3].route,[h,d]=f[f.length-1],[p,x]=f[f.length-2],_=new Ai,g=[];_.position.set(h,0,d),_.rotation.y=Math.atan2(h-p,d-x);for(let m of[-1,1]){g.push({s:[.55,5.6,.55],p:[m*3.2,2.8,0],c:s0},{s:[.8,.5,.8],p:[m*3.2,5.7,0],c:2759184});let v=new Re(new Ln(.3,.4,.3),l);v.position.set(m*3.2,6.1,0),_.add(v)}g.push({s:[7.4,.4,.4],p:[0,5.2,0],c:s0});for(let m=0;m<16;m++)g.push({s:[e.range(.7,1.2),.12,e.range(.6,1)],p:[e.range(-2.2,2.2),.05,-m*1.2+3],r:[0,e.range(0,3),0],c:tn(6971480,e.range(.8,1.1))});let A=Kc(s,2.6,3.6,"hang",1.3);A.position.set(-1.3,5,.1),_.add(A);let E=new Re(Dn(g),Gx());E.castShadow=E.receiveShadow=!0,_.add(E),n.add(_),c.chase={group:_,update(m){Po(A,m)}}}for(let f of Object.values(c))f.group.visible=!1;let u=0;return{update(f){u+=f;let h=t.story,d=h&&h.ch?h.ch.id:null;for(let[p,x]of Object.entries(c))x.group.visible=p===d,p===d&&x.update(u,h,f)}}}var Zo=new URLSearchParams(location.search),Kx=Zo.get("enemies")?Math.max(0,Math.min(2e3,Number(Zo.get("enemies"))|0)):null,gE=Kx??(Gr?xl[2].n:xl[3].n),xE=document.getElementById("c"),_l=innerWidth,Ml=innerHeight,a0=Jm({canvas:xE,width:_l,height:Ml}),oa=new gc,Qd=dg(oa),te={frame:0,hitstop:0,freeze:0,fighter:un[Zo.get("fighter")]?Zo.get("fighter"):yd,mode:"battle"};te.cam=J1();te.hero=y1(te);te.crowd=a1(te,gE);te.combat=M1(te);te.musou=X1(te);te.story=Vx(te);te.chapter=1;var wr=Ym(),o0=Object.fromEntries(ms.map(n=>[n,_1(oa,te.hero,n)])),h0=o0[te.fighter],Zx=B1(oa,te),Qn=Q1(te,_l,Ml),tp=mx(oa,te,Qd),jx=Wx(oa,te),Jx=Z1(oa,te,Qn.camera),Qx=yx(document.getElementById("hud"),te,{camera:Qn.camera});Nx(te);function c0(n){if(un[n]){te.fighter=n,Mg(un[n].scale);for(let[t,e]of Object.entries(o0))e.setActive(t===n);h0=o0[n],te.hero.hpMax=un[n].hp,te.hero.hp=Math.min(te.hero.hp,te.hero.hpMax),Pe("fighter",{id:n})}}var Jd={mx:0,my:0,orbit:0,pressed:{},held:{}};function vE(){let n=wr.sample();if(ti==="attract"){te.cam.yaw+=ep,te.cam.ctrl=te.cam.yaw,te.cam.step(te,Jd),te.hero.step(Jd),te.frame++;return}ke.over&&(n=Jd),te.cam.step(te,n),te.hero.step(n),te.combat.step(),te.crowd.step(),te.musou.step(),te.mode==="story"&&te.story.step(),te.frame++,tp.afterStep(),ti==="play"&&yE()}var qx=0;function aa(){let n=Math.min(10,Math.max(0,(te.frame-qx)/60));qx=te.frame,h0.update(Math.min(n,.1)),Zx.update(n),tp.update(n),Qn.update(n),Qd.update(n,Qn.focus),jx.update(n),Jx.update(n),a0.flash(tp.flash),a0.render(oa,Qn.camera,te.frame/60,Qn.focus,Qd.sunDir),Qx.update(),wr.setMusouReady(te.musou.ready())}function Ko(){Oe.seed(1),_t.seed(7936),Object.assign(ke,{f0:te.frame,chain:0,bosses:new Set,over:null,overF:0,won:!1,reason:"",score:null,t:0}),te.hero.reset(),te.crowd.reset(),te.combat.reset(),te.musou.reset(),te.cam.reset(0);let n=Math.min(Kx??Er.options().army,te.crowd.grunts);te.mode==="story"?(te.crowd.cap=n,te.story.reset(te.chapter)):(te.story.off(),te.crowd.spawnArmy(n)),h0.reset(),Pe("scenario",{name:te.mode==="story"?"story":"arena",chapter:te.chapter})}addEventListener("resize",()=>{_l=innerWidth,Ml=innerHeight,a0.setSize(_l,Ml),Qn.resize(_l,Ml),aa()});var ke={f0:0,chain:0,bosses:new Set,over:null,overF:0,won:!1};oe("ko",n=>{n.officer&&ti==="play"&&ke.bosses.add((n.i-te.crowd.grunts)%4)});function yE(){let n=te.hero;if(ke.chain=Math.max(ke.chain,n.combo),te.mode==="story"){let t=te.story;if(!ke.over&&t.result?Object.assign(ke,{over:t.result,overF:te.frame,reason:t.reason,t:t.time(),score:t.score()}):!ke.over&&n.hp<=0&&Object.assign(ke,{over:"lose",overF:te.frame,reason:"You fell in battle",t:t.time()}),ke.over&&te.frame-ke.overF>(ke.over==="win"?150:100)){let e=ke.over==="win";ti="frozen",bl.hidden=!0,wr.sample(),Er.results({kind:e?"story-win":"story-lose",chapter:te.chapter,kos:n.kos,chain:ke.chain,time:ke.t,hp:n.hp/n.hpMax,score:ke.score,reason:ke.reason})}return}if(!ke.over&&n.hp<=0&&(ke.over="lose",ke.overF=te.frame),!ke.over&&!ke.won&&te.mode==="battle"&&ke.bosses.size>=4&&(ke.won=!0,ke.over="win",ke.overF=te.frame),!ke.over&&!ke.won&&te.mode==="challenge"&&n.kos>=$i.challenge.target&&(ke.won=!0,ke.over="clear",ke.overF=te.frame,ke.t=(te.frame-ke.f0)/60),ke.over&&te.frame-ke.overF>(ke.over==="lose"?80:100)){let t=ke.over;t==="win"&&(ke.over=null),ti="frozen",bl.hidden=!0,wr.sample(),Er.results({kind:t,kos:n.kos,chain:ke.chain,bosses:ke.bosses.size,time:t==="clear"?ke.t:(te.frame-ke.f0)/60})}}var _E=document.getElementById("menu"),bl=document.getElementById("hud"),ti="front",Xx={dist:5.6,height:1.2,pitch:4*Math.PI/180,fov:36},$x={dist:34,height:2,pitch:24*Math.PI/180,fov:42},ME=new Set(["chapters","story","briefing"]),ep=.0045,Er=Bx(_E,{fighter:te.fighter,mobile:Gr,onScreen(n){bl.hidden=!0,n==="select"?((ti!=="attract"||Qn.frame!==Xx)&&(te.mode==="story"&&(te.mode="battle"),r0=0,Ko(),te.cam.reset(Math.PI)),ti="attract",ep=.0045,Qn.frame=Xx,Qn.snap(),aa()):ME.has(n)?(Qn.frame!==$x&&(Qn.frame=$x,Qn.snap()),ti="attract",ep=.0011,aa()):n==="pause"||n==="results"?ti="frozen":n&&(ti="front",Qn.frame=null),wr.sample()},onPick:n=>{c0(n),Ko(),te.cam.reset(Math.PI),Qn.snap(),aa()},onStart:({mode:n,fighter:t,chapter:e})=>{te.mode=n,e&&(te.chapter=e),c0(t),Ko(),Qn.frame=null,Qn.snap(),l0()},onPreview:n=>{!n||n===r0||(r0=n,te.mode="story",te.chapter=n,Ko(),te.cam.reset(te.cam.yaw+.6),Qn.snap(),aa())},onResume:()=>l0(),onOptions:n=>t2(n),onExit:()=>{try{(window.top||window).location.href="/"}catch{location.href="/"}}}),r0=0;function t2(n){wr.setOrbitScale(n.camera),Ce.zoom=n.view||1,Pe("options",n)}function l0(){ti="play",r0=0,Er.hide(),bl.hidden=!1,wr.sample()}var np=n=>{n&&ti==="play"?(ti="frozen",bl.hidden=!0,Er.pause()):!n&&ti==="frozen"&&Er.screen==="pause"&&l0()};addEventListener("keydown",n=>{n.code!=="Escape"||n.g6front||ti==="play"&&np(!0)});addEventListener("blur",()=>{ti==="play"&&np(!0)});var yl=0,Yx=performance.now(),e2=n=>{if(requestAnimationFrame(e2),yl+=Math.min(.1,Math.max(0,(n-Yx)/1e3)),Yx=n,ti==="frozen"||ti==="front"){yl=0,wr.sample();return}let t=0;for(;yl>=1/60&&t<4;)vE(),yl-=1/60,t++;t===4&&(yl=0),aa()};Zo.has("debug")&&(window.__g6={CAM:Ce,storyProps:jx,game:te,setFighter:c0,input:wr,render:aa,post:a0,scene:oa,heroViews:o0,get heroView(){return h0},crowdView:Zx,camRig:Qn,musouView:Jx,hud:Qx,start:Ko,setPaused:np,front:Er,run:ke,get mode(){return ti},play:l0});c0(te.fighter);t2(Er.options());Ko();Er.show(Zo.get("screen")||"title");aa();requestAnimationFrame(e2);
