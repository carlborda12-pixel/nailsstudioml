/* ============ Páginas ============ */
const side = n => n % 2 ? 'l' : 'r';

const LM_L = 'M52 44H104V457H357V500H52Z';
const LM_M = 'M117 115H175L342 335L510 115H568V580H515V195L342 412L165 195V362H117Z';
const logoSVG = () => `<svg class="logo" viewBox="52 44 516 536" role="img" aria-label="${STUDIO.name1} ${STUDIO.name2}"><path d="${LM_L}" fill="currentColor"/><path d="${LM_M}" fill="currentColor"/></svg>`;

const coverHTML = () => `<div class="cover-bg" aria-hidden="true"></div><div class="cover-inner">${logoSVG()}<h1 class="brand">${STUDIO.sub}</h1><span class="cover-rule" aria-hidden="true"></span><p class="tagline">${STUDIO.tagline}</p></div>`;

// En Gloock el $ y el + son muy finos ("$20.000" se lee "S20.000"): esos signos van en Lora
const sym = s => s.replace(/[$+]/g, c => `<span class="sym">${c}</span>`);

const backHTML = () => `<div class="cover-bg back-bg" aria-hidden="true"></div><div class="back-inner"><div>${logoSVG()}<p class="brand">${STUDIO.sub}</p><p class="city">${STUDIO.city}</p></div></div>`;

const welcomeHTML = n => `<div class="pg ${side(n)} prose"><h2 class="p-title welcome">¡Bienvenida a nuestro espacio de belleza!&nbsp;<svg class="spark end" viewBox="0 0 25 24" aria-hidden="true"><path d="M12 2C12.8 8.6 15.4 11.2 22 12C15.4 12.8 12.8 15.4 12 22C11.2 15.4 8.6 12.8 2 12C8.6 11.2 11.2 8.6 12 2Z"/><path d="M21 .8C21.3 3 21.9 3.7 24 4C21.9 4.3 21.3 5 21 7.2C20.7 5 20.1 4.3 18 4C20.1 3.7 20.7 3 21 .8Z"/></svg></h2><p>${hy('Antes de co·no·cer nues·tros ser·vi·cios, que·re·mos con·tar·te un po·qui·to sobre no·so·tras y nues·tra forma de tra·ba·jar.')}</p><p>${hy('Con·ta·mos con un home studio, un es·pa·cio pre·pa·ra·do para brin·dar·te una aten·ción per·so·na·li·za·da, có·mo·da y de·di·ca·da. Cada turno es una opor·tu·ni·dad para que dis·fru·tes de un mo·men·to para vos, en un am·bien·te tran·qui·lo y agra·da·ble.')}</p><p>${hy('Tra·ba·ja·mos con pro·duc·tos de ca·li·dad y prio·ri·za·mos las bue·nas prác·ti·cas de hi·gie·ne, la pre·pa·ra·ción ade·cua·da de la uña na·tu·ral y la co·rrec·ta apli·ca·ción de cada sis·te·ma. Bus·ca·mos que cada ser·vi·cio se adap·te a tus ne·ce·si·da·des, cui·dan·do tanto la es·té·ti·ca como la salud de tus uñas.')}</p><span class="folio">${n}</span></div>`;

const introHTML = n => `<div class="pg ${side(n)} prose"><h2 class="p-title welcome"><svg class="spark" viewBox="0 0 25 24" aria-hidden="true"><path d="M12 2C12.8 8.6 15.4 11.2 22 12C15.4 12.8 12.8 15.4 12 22C11.2 15.4 8.6 12.8 2 12C8.6 11.2 11.2 8.6 12 2Z"/><path d="M21 .8C21.3 3 21.9 3.7 24 4C21.9 4.3 21.3 5 21 7.2C20.7 5 20.1 4.3 18 4C20.1 3.7 20.7 3 21 .8Z"/></svg>Tu experiencia es nuestra prioridad</h2><p>${hy('Más allá de un lindo re·sul·ta·do, que·re·mos que te sien·tas có·mo·da, es·cu·cha·da y con·for·me con el ser·vi·cio re·ci·bi·do. Nues·tro ob·je·ti·vo es que dis·fru·tes cada vi·si·ta, te lle·ves un re·sul·ta·do que te en·can·te y eli·jas volver a con·fiar en no·so·tras.')}</p><span class="folio">${n}</span></div>`;

/* Servicio con fotos: todo en una sola página (título arriba; texto y datos a la izquierda, fotos a la derecha) */
const serviceHTML = (d, n) => `<div class="pg ${side(n)}"><p class="d-num">Nuestros servicios</p><h2 class="d-name script"><span class="s1">${d.script[0]}</span>${d.script[1] ? ` <span class="s2">${d.script[1]}</span>` : ''}</h2><div class="svc-body${d.photos ? '' : ' solo'}"><div class="svc-text"><p class="d-lead">${d.lead}</p>${[].concat(d.desc).map(p => `<p class="d-desc">${p}</p>`).join('')}<dl class="mini"><div><dt>Tiempo aproximado</dt><dd>${d.time}</dd></div><div class="price"><dt>Precio</dt><dd>${sym(d.price)}</dd></div></dl></div>${d.photos ? `<figure class="photos">${d.photos.map(([src, alt, focus], i) => `<img class="ph ph${i + 1}" src="${src}" alt="${alt}"${focus ? ` style="object-position:${focus}"` : ''} draggable="false">`).join('')}</figure>` : ''}</div><a class="want" href="${waHref(`¡Hola ${STUDIO.name1}! 💗 Vi en el catálogo el servicio *${d.name}* (${d.price}) y me gustaría reservar un turno. ¿Qué días y horarios tenés disponibles?`)}" target="_blank" rel="noopener">Quiero este servicio</a><span class="folio">${n}</span></div>`;

// Hoja final de agradecimiento
const thanksHTML = n => `<div class="pg ${side(n)} prose thanks"><h2 class="th-title">¡Gracias por elegirme! <span class="heart">♡</span></h2><p>${hy('Gra·cias por con·fiar en Nails·Stu·dio.ML y per·mi·tir·me ser parte de tu cui·da·do y be·lle·za. Para mí, cada ser·vi·cio es una opor·tu·ni·dad.')}</p><p>${hy('Este pro·yec·to crece día a día gra·cias a tu con·fian·za y a cada per·so·na que elige mi tra·ba·jo. Por eso, me en·can·ta·ría se·guir me·jo·ran·do, apren·dien·do y cre·cien·do para ofre·cer·te siem·pre lo mejor.')}</p><p>${hy('Tu opi·nión es muy im·por·tan·te para mí. Cada su·ge·ren·cia, co·men·ta·rio o re·co·men·da·ción me ayuda a per·fec·cio·nar mi tra·ba·jo y a se·guir cre·cien·do tanto per·so·nal como pro·fe·sio·nal·men·te.')}</p><p>${hy('Si dis·fru·tas·te tu ex·pe·rien·cia, me haría muy feliz que me com·par·tie·ras tu opi·nión. Tu apoyo sig·ni·fi·ca mu·chí·si·mo para mí y me mo·ti·va a se·guir ha·cien·do lo que amo.')}</p><p class="th-quote">✨ Gracias por ser parte de este sueño y por confiar en mis manos.</p><div class="th-sign"><span>Con mucho cariño,</span><strong>NailsStudio.ML <span class="heart">♡</span></strong></div><span class="folio">${n}</span></div>`;

// Hoja de cortesía: completa la doble página en la compu (en el celular no se muestra)
const fillerHTML = () => `<svg class="ghost" viewBox="0 0 1000 1380" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><g transform="translate(298 487) scale(.65)" fill="#EBD5DC"><path d="${LM_L}"/><path d="${LM_M}"/></g></svg>`;

const P = [];
const add = (label, html, kind = 'paper', extra = {}) => P.push({ kind, label, html, ...extra });
// Las dobles páginas tienen que empezar a la izquierda (posición impar); si no, va una hoja de cortesía
const toLeft = () => { if (P.length % 2 === 0) add(P[P.length - 1].label, fillerHTML(), 'paper', { spreadOnly: true }); };
add('Tapa', coverHTML(), 'cover');
add('Bienvenida', welcomeHTML(1));
add('Bienvenida', introHTML(2));
SERVICES.forEach(d => add(d.name, serviceHTML(d, P.length)));
add('Gracias', thanksHTML(P.length));
toLeft(); // la contratapa tiene que caer a la izquierda
add('Contratapa', backHTML(), 'cover');
P.forEach((p, i) => { p.idx = i; });

/* ============ Bonsái de sombra ============
   Un solo árbol que recorre todas las hojas interiores: la maceta y el tronco en la primera,
   y una rama larga que sigue de hoja en hoja con ramitas y copas. Se dibuja una vez en un
   lienzo (a baja resolución, así queda difuso como una sombra vista a través del papel)
   y cada hoja muestra su pedazo. */
const BONSAI = { pw: 1000, ph: 1380, pages: P.length - 2 };

function drawBonsai() {
  const { pw, ph, pages } = BONSAI, S = .55, total = pages * pw;
  const cv = document.createElement('canvas');
  cv.width = Math.round(total * S); cv.height = Math.round(ph * S);
  const g = cv.getContext('2d');
  g.scale(S, S);
  g.fillStyle = g.strokeStyle = '#4A1426';
  g.lineCap = g.lineJoin = 'round';
  let seed = 11;
  const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const bez = (a, b, c, d, t) => { const u = 1 - t; return [u*u*u*a[0] + 3*u*u*t*b[0] + 3*u*t*t*c[0] + t*t*t*d[0], u*u*u*a[1] + 3*u*u*t*b[1] + 3*u*t*t*c[1] + t*t*t*d[1]]; };
  // Trazo que se afina de w0 a w1 a lo largo de los puntos
  const limb = (pts, w0, w1) => {
    for (let i = 1; i < pts.length; i++) {
      g.lineWidth = w0 + (w1 - w0) * i / (pts.length - 1);
      g.beginPath(); g.moveTo(...pts[i - 1]); g.lineTo(...pts[i]); g.stroke();
    }
  };
  const curve = (a, b, c, d, w0, w1, n = 24) => { const pts = []; for (let i = 0; i <= n; i++) pts.push(bez(a, b, c, d, i / n)); limb(pts, w0, w1); return pts; };
  // Copa: nube aplanada de hojitas, más densa arriba, con ramitas por dentro
  const pad = (cx, cy, w, h) => {
    g.globalAlpha = .9;
    for (let k = 0; k < 5; k++) {
      const ex = cx + (r() - .5) * w * .8, ey = cy - r() * h * .4;
      g.lineWidth = 2 + r() * 2;
      g.beginPath(); g.moveTo(cx + (r() - .5) * 20, cy + h * .2); g.quadraticCurveTo((cx + ex) / 2, cy + h * .1, ex, ey); g.stroke();
    }
    const n = Math.round(w * h / 70);
    for (let k = 0; k < n; k++) {
      const a = r() * Math.PI * 2, d = Math.sqrt(r());
      const x = cx + Math.cos(a) * d * w / 2, y = cy + Math.sin(a) * d * h / 2;
      if (y > cy + h * .18 && r() < .75) continue;
      g.globalAlpha = .35 + r() * .35;
      g.beginPath(); g.ellipse(x, y, 8 + r() * 6, 3.2 + r() * 1.8, r() * Math.PI, 0, Math.PI * 2); g.fill();
    }
    g.globalAlpha = 1;
  };

  // Maceta y raíces
  g.beginPath(); g.moveTo(170, 1232); g.lineTo(570, 1232); g.lineTo(540, 1300); g.lineTo(200, 1300); g.closePath(); g.fill();
  g.fillRect(150, 1210, 440, 24);
  g.fillRect(215, 1300, 40, 14); g.fillRect(485, 1300, 40, 14);
  curve([360, 1212], [320, 1200], [290, 1206], [255, 1211], 16, 4, 8);
  curve([390, 1212], [430, 1198], [470, 1204], [505, 1210], 14, 4, 8);

  // Tronco: sube retorcido
  const trunk = curve([370, 1212], [250, 1000], [520, 860], [420, 660], 74, 44, 30);
  const top = trunk[trunk.length - 1];

  // Rama principal: ondula de hoja en hoja hasta la última
  const end = total - 170;
  const yAt = x => 610 + 150 * Math.sin(x / 720) + 55 * Math.sin(x / 260 + 1.3);
  const main = [];
  for (let x = top[0]; x <= end; x += 18) main.push([x, x === top[0] ? top[1] : yAt(x)]);
  limb(main, 44, 5);
  const wAt = x => 44 - 39 * (x - top[0]) / (end - top[0]);

  // Copa sobre el tronco
  pad(330, 470, 420, 150); pad(560, 520, 260, 100);

  // Ramas secundarias con sus copas, a lo largo de toda la rama
  let up = true;
  for (let x0 = 720; x0 < end - 220; x0 += 230 + r() * 150) {
    const y0 = yAt(x0), dir = (up = !up) ? -1 : (r() < .35 ? -1 : 1);
    const len = 170 + r() * 210;
    const ex = x0 + 70 + r() * 170;
    const ey = Math.max(170, Math.min(1180, y0 + dir * len * .75));
    const mid = [x0 + (ex - x0) * .3, y0 + (ey - y0) * .75 + (r() - .5) * 60];
    const pts = curve([x0, y0], mid, [ex - 30, ey + dir * -20], [ex, ey], Math.max(4, wAt(x0) * .65), 3);
    pad(ex, ey - 12, 210 + r() * 170, 70 + r() * 60);
    if (r() < .6) { // ramita extra con una copa chica
      const p = pts[Math.round(pts.length * .5)], tx = p[0] - 40 - r() * 80, ty = p[1] + dir * (60 + r() * 60);
      curve(p, [p[0] - 10, p[1] + dir * 20], [tx + 20, ty], [tx, ty], 4, 2, 10);
      pad(tx, ty - 8, 120 + r() * 70, 45 + r() * 30);
    }
  }
  pad(end + 20, yAt(end) - 20, 200, 80); // copa de la punta

  // Algunas hojitas sueltas, como si se cayeran
  for (let k = 0; k < pages * 2; k++) {
    g.globalAlpha = .5;
    g.beginPath(); g.ellipse(300 + r() * (total - 400), 900 + r() * 380, 10, 4, r() * Math.PI, 0, Math.PI * 2); g.fill();
  }
  return new Promise(res => cv.toBlob(b => res(b ? URL.createObjectURL(b) : null)));
}

// Capa con el pedazo de bonsái que le toca a la hoja k (0 = primera hoja interior)
function bonsaiLayer(k) {
  const s = H / BONSAI.ph, x = -(k * BONSAI.pw * s) - (BONSAI.pw * s - W) / 2;
  return `<div class="bonsai" aria-hidden="true" style="background-position:${x.toFixed(1)}px 0"></div>`;
}

/* ============ Motor del libro ============ */
const book = document.getElementById('book');
const stage = document.getElementById('stage');
const where = document.getElementById('where');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const CORNER = 90;           // zona sensible de la punta, en px
const LEAVES = P.length / 2; // hojas en modo doble página
const PS = P.filter(p => !p.spreadOnly); // páginas en celular (sin la guarda)

book.insertAdjacentHTML('beforeend', `<svg class="shade" aria-hidden="true"><defs>
  <linearGradient id="gU" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2A0410" stop-opacity=".45"/><stop offset=".3" stop-color="#2A0410" stop-opacity=".14"/><stop offset="1" stop-color="#2A0410" stop-opacity="0"/></linearGradient>
  <linearGradient id="gF" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3A0718" stop-opacity=".24"/><stop offset=".09" stop-color="#FFFFFF" stop-opacity=".34"/><stop offset=".45" stop-color="#FFFFFF" stop-opacity="0"/><stop offset="1" stop-color="#3A0718" stop-opacity=".1"/></linearGradient>
</defs><polygon id="pU" fill="url(#gU)"/><polygon id="pF" fill="url(#gF)"/></svg>`);
const shade = book.querySelector('.shade');
const gU = shade.querySelector('#gU'), gF = shade.querySelector('#gF');
const pU = shade.querySelector('#pU'), pF = shade.querySelector('#pF');

let single = null, W = 0, H = 0, cur = 0, maxCur = 0, turn = null, queued = null, introDone = false, drag = null;

const EASE = {
  out: k => 1 - Math.pow(1 - k, 3),
  inout: k => k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2
};
const clamp01 = v => Math.max(0, Math.min(1, v));
const cssPoly = a => a.length < 3 ? 'polygon(0 0,0 0,0 0)' : `polygon(${a.map(p => `${p[0].toFixed(2)}px ${p[1].toFixed(2)}px`).join(',')})`;
const svgPts = a => a.map(p => p[0].toFixed(2) + ',' + p[1].toFixed(2)).join(' ');

function shiftFor(c) { return single ? 0 : c === 0 ? -W / 2 : c === maxCur ? W / 2 : 0; }
function setShift(v) { book.style.setProperty('--shift', v.toFixed(2) + 'px'); }

function makePage(i, side, extra = '') {
  const d = document.createElement('div'), src = single ? PS : P;
  if (i === null || i < 0 || i >= src.length) { d.className = 'page empty'; return d; }
  d.className = `page ${side} ${src[i].kind} ${extra}`;
  d.innerHTML = (src[i].kind === 'paper' ? bonsaiLayer(src[i].idx - 1) : '') + src[i].html;
  return d;
}
/* Si el texto no entra en la página (pantallas chicas, diseños nuevos), se achica solo esa página */
function fit(el) {
  const pg = el.querySelector('.pg');
  if (!pg) return;
  const folio = pg.querySelector('.folio');
  const limit = pg.clientHeight - parseFloat(getComputedStyle(pg).paddingBottom) + 1;
  const over = () => {
    let bottom = 0;
    for (const c of pg.children) if (c !== folio) bottom = Math.max(bottom, c.offsetTop + c.offsetHeight);
    return bottom > limit;
  };
  let f = 1;
  pg.style.fontSize = '';
  while (over() && f > .62) { f -= .04; pg.style.fontSize = f.toFixed(2) + 'em'; }
}
function place(el, x) { el.style.transform = `translate(${x}px,0)`; book.appendChild(el); fit(el); return el; }
function clearPages() { [...book.children].forEach(n => { if (n.classList.contains('page') || n.classList.contains('flap')) n.remove(); }); }

function label() {
  if (single) return PS[cur].label;
  if (cur === 0) return P[0].label;
  if (cur === maxCur) return P[P.length - 1].label;
  const a = P[2 * cur - 1].label, b = P[2 * cur].label;
  return a === b ? a : `${a} · ${b}`;
}

/* Estado en reposo: las dos páginas abiertas (o una en celular) */
function renderStatic() {
  clearPages();
  shade.style.display = 'none';
  if (single) place(makePage(cur, 'R'), 0);
  else {
    if (cur > 0) place(makePage(2 * cur - 1, 'L'), 0);
    if (cur < maxCur) place(makePage(2 * cur, 'R', !introDone && cur === 0 ? 'intro' : ''), W);
  }
  introDone = true;
  setShift(shiftFor(cur));
  const total = single ? PS.length - 1 : LEAVES;
  book.style.setProperty('--tr', ((maxCur - cur) / total * 7).toFixed(2) + 'px');
  book.style.setProperty('--tl', (cur / total * 7).toFixed(2) + 'px');
  book.classList.toggle('at-start', cur === 0);
  book.classList.toggle('at-end', cur === maxCur);
  book.classList.toggle('open', !single && cur > 0 && cur < maxCur);
  where.textContent = label();
}

/* Arma la hoja que se va a doblar.
   Coordenadas de "hoja": x = distancia al lomo, la punta en reposo está en (W, cy). */
function startTurn(dir, target, cy) {
  if (turn || target < 0 || target > maxCur || target === cur) return null;
  clearPages();
  const t = { dir, target, cy, s: 1, spine: 0, x0: W, x1: -W };
  let flat, flap, under = null, flatX = 0, underX = 0;
  if (single) {
    flap = document.createElement('div'); flap.className = 'page R verso';
    if (dir > 0) { flat = makePage(cur, 'R', 'flat'); under = makePage(target, 'R'); }
    else { flat = makePage(target, 'R', 'flat'); under = makePage(cur, 'R'); t.x0 = -W; t.x1 = W; }
  } else {
    t.spine = W;
    if (dir > 0) {
      if (cur > 0) place(makePage(2 * cur - 1, 'L'), 0);
      flat = makePage(2 * cur, 'R', 'flat'); flatX = W;
      flap = makePage(2 * target - 1, 'L');
      if (target < maxCur) { under = makePage(2 * target, 'R'); underX = W; }
    } else {
      t.s = -1;
      if (cur < maxCur) place(makePage(2 * cur, 'R'), W);
      flat = makePage(2 * cur - 1, 'L', 'flat');
      flap = makePage(2 * target, 'R');
      if (target > 0) under = makePage(2 * target - 1, 'L');
    }
  }
  if (under) place(under, underX);
  place(flat, flatX);
  const wrap = document.createElement('div');
  wrap.className = 'flap';
  wrap.appendChild(flap);
  book.appendChild(wrap);
  fit(flap);
  Object.assign(t, { flat, flap: wrap, flapInner: flap, corner: { x: t.x0, y: cy }, shift0: shiftFor(cur), shift1: shiftFor(target) });
  shade.style.display = 'block';
  turn = t;
  frame();
  return t;
}

/* La punta no puede alejarse del lomo más que el ancho y la diagonal de la hoja */
function clampCorner(p, cy) {
  let x = p.x, y = p.y;
  let d = Math.hypot(x, y - cy);
  if (d > W) { x *= W / d; y = cy + (y - cy) * W / d; }
  const oy = H - cy, D = Math.hypot(W, H);
  d = Math.hypot(x, y - oy);
  if (d > D) { x *= D / d; y = oy + (y - oy) * D / d; }
  return { x, y };
}

function clipHalf(poly, M, n, sign) {
  const out = [], f = p => sign * ((p[0] - M.x) * n.x + (p[1] - M.y) * n.y);
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length], fa = f(a), fb = f(b);
    if (fa >= 0) out.push(a);
    if ((fa >= 0) !== (fb >= 0)) { const k = fa / (fa - fb); out.push([a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k]); }
  }
  return out;
}

/* Dibuja un cuadro del doblez: la línea de pliegue es la mediatriz entre la punta original y la punta actual */
function frame() {
  const t = turn, s = t.s;
  const c = clampCorner(t.corner, t.cy);
  t.cc = c;
  const prog = clamp01((c.x - t.x0) / (t.x1 - t.x0));
  setShift(t.shift0 + (t.shift1 - t.shift0) * prog);
  const dx = W - c.x, dy = t.cy - c.y, len = Math.hypot(dx, dy);
  if (len < .5) {
    t.flat.style.clipPath = 'none';
    t.flap.style.visibility = 'hidden';
    shade.style.visibility = 'hidden';
    return;
  }
  t.flap.style.visibility = '';
  shade.style.visibility = '';
  const n = { x: dx / len, y: dy / len }, M = { x: (W + c.x) / 2, y: (t.cy + c.y) / 2 };
  const rect = [[0, 0], [W, 0], [W, H], [0, H]];
  const flatPoly = clipHalf(rect, M, n, -1), foldPoly = clipHalf(rect, M, n, 1);
  const refl = (x, y) => { const d = 2 * ((x - M.x) * n.x + (y - M.y) * n.y); return [x - d * n.x, y - d * n.y]; };
  const toBook = (x, y) => [t.spine + s * x, y];

  t.flat.style.clipPath = cssPoly(flatPoly.map(([x, y]) => [s > 0 ? x : W - x, y]));
  t.flapInner.style.clipPath = cssPoly(foldPoly.map(([x, y]) => [s > 0 ? W - x : x, y]));
  const map = (u, v) => { const r = refl(s > 0 ? W - u : u, v); return toBook(r[0], r[1]); };
  const o = map(0, 0), a = map(1, 0), b = map(0, 1);
  t.flap.style.transform = `matrix(${(a[0] - o[0]).toFixed(5)},${(a[1] - o[1]).toFixed(5)},${(b[0] - o[0]).toFixed(5)},${(b[1] - o[1]).toFixed(5)},${o[0].toFixed(2)},${o[1].toFixed(2)})`;

  const reach = Math.max(24, Math.min(len * .5, W * .5));
  const Mb = toBook(M.x, M.y), nb = [s * n.x, n.y];
  gU.setAttribute('x1', Mb[0]); gU.setAttribute('y1', Mb[1]);
  gU.setAttribute('x2', Mb[0] + nb[0] * reach * .8); gU.setAttribute('y2', Mb[1] + nb[1] * reach * .8);
  gF.setAttribute('x1', Mb[0]); gF.setAttribute('y1', Mb[1]);
  gF.setAttribute('x2', Mb[0] - nb[0] * reach); gF.setAttribute('y2', Mb[1] - nb[1] * reach);
  pU.setAttribute('points', svgPts(foldPoly.map(([x, y]) => toBook(x, y))));
  pF.setAttribute('points', svgPts(foldPoly.map(([x, y]) => { const r = refl(x, y); return toBook(r[0], r[1]); })));

  // En celular la hoja sale de pantalla por la izquierda: se desvanece al final
  const off = single ? clamp01((c.x + W) / (W * .4)) : 1;
  t.flap.style.opacity = off.toFixed(3);
  shade.style.opacity = (Math.min(1, len / 70) * off).toFixed(3);
}

function settle(commit, o = {}) {
  const t = turn;
  if (!t) return;
  t.mode = 'anim';
  const start = { ...(t.cc || t.corner) };
  const end = { x: commit ? t.x1 : t.x0, y: t.cy };
  const dist = Math.hypot(end.x - start.x, end.y - start.y);
  const dur = reduce ? 0 : (o.dur || 170 + 430 * Math.min(1, dist / (2 * W)));
  const bump = (o.bump != null ? o.bump : commit ? Math.min(H * .12, dist * .12) : 0) * (t.cy === 0 ? 1 : -1);
  const fn = EASE[o.ease || 'out'];
  const t0 = performance.now();
  const step = now => {
    if (turn !== t) return;
    const k = dur ? Math.min(1, (now - t0) / dur) : 1, e = fn(k);
    t.corner = { x: start.x + (end.x - start.x) * e, y: start.y + (end.y - start.y) * e + Math.sin(Math.PI * e) * bump };
    frame();
    if (k < 1) requestAnimationFrame(step); else endTurn(commit);
  };
  requestAnimationFrame(step);
}

function endTurn(commit) {
  if (commit && turn) cur = turn.target;
  turn = null;
  renderStatic();
  if (queued !== null) { const q = queued; queued = null; if (q !== cur) turnTo(q); }
}

/* Vuelta automática (botones, teclado, índice, toque) desde la punta inferior */
function turnTo(target) {
  target = Math.max(0, Math.min(maxCur, target));
  if (turn) {
    if (turn.mode === 'peek' && target === turn.target) { settle(true, { ease: 'inout', bump: H * .24 }); return; }
    if (turn.mode === 'peek') { turn = null; renderStatic(); }
    else { if (turn.mode === 'anim') queued = target; return; }
  }
  if (target === cur) return;
  if (!startTurn(target > cur ? 1 : -1, target, H)) return;
  settle(true, { ease: 'inout', bump: H * .28, dur: 820 });
}
function stepBy(d) {
  const base = turn && turn.mode === 'anim' ? (queued ?? turn.target) : cur;
  turnTo(base + d);
}

/* ¿Qué hoja hay bajo el puntero y qué tan cerca está de la punta? */
function bookPoint(e) { const r = book.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
function hit(pt) {
  if (pt.y < 0 || pt.y > H) return null;
  let dir, px;
  if (single) {
    if (pt.x < 0 || pt.x > W) return null;
    dir = pt.x > W / 2 ? 1 : -1;
    px = dir > 0 ? W - pt.x : pt.x;
  } else {
    const bx = pt.x - W;
    if (bx > 0 && bx <= W) { dir = 1; px = W - bx; }
    else if (bx <= 0 && bx >= -W) { dir = -1; px = W + bx; }
    else return null;
  }
  if ((dir > 0 && cur >= maxCur) || (dir < 0 && cur <= 0)) return null;
  const cy = pt.y < H / 2 ? 0 : H, py = cy === 0 ? pt.y : H - pt.y;
  return { dir, cy, near: px < CORNER && py < CORNER };
}

/* Con mouse: al pasar por la punta, la hoja se levanta un poco */
function hover(e) {
  const pt = bookPoint(e);
  if (turn && turn.mode === 'peek') {
    const px = turn.s * (pt.x - turn.spine);
    const far = Math.hypot(W - px, turn.cy - pt.y);
    if (far > CORNER * 1.8 || px > W + 40 || pt.y < -40 || pt.y > H + 40) { settle(false); return; }
    const x = Math.min(px, W - 8);
    const y = turn.cy === 0 ? Math.max(pt.y, 8) : Math.min(pt.y, H - 8);
    turn.corner = { x: Math.max(x, W - CORNER * 1.3), y: turn.cy === 0 ? Math.min(y, CORNER * 1.3) : Math.max(y, H - CORNER * 1.3) };
    frame();
    return;
  }
  if (turn) return;
  const h = hit(pt);
  book.classList.toggle('grab', !!(h && h.near));
  if (h && h.near && !(single && h.dir < 0) && startTurn(h.dir, cur + h.dir, h.cy)) {
    turn.mode = 'peek';
    hover(e);
  }
}

book.addEventListener('pointerdown', e => {
  if (e.button !== 0 || e.target.closest('a, button')) return;
  if (turn && turn.mode === 'anim') return;
  drag = { id: e.pointerId, sx: e.clientX, sy: e.clientY, lx: e.clientX, lt: performance.now(), vel: 0, moved: false, pending: null, start: null };
  if (turn && turn.mode === 'peek') {
    turn.mode = 'drag';
    drag.start = { ...turn.cc };
  } else {
    const h = hit(bookPoint(e));
    if (!h) { drag = null; return; }
    if (h.near && startTurn(h.dir, cur + h.dir, h.cy)) {
      // Tocar la punta: la hoja se dobla un poquito bajo el dedo
      turn.mode = 'drag';
      turn.corner = { x: turn.x0 + (turn.x1 > turn.x0 ? 46 : -30), y: h.cy === 0 ? 30 : H - 30 };
      frame();
      drag.start = { ...turn.cc };
    } else drag.pending = h;
  }
  try { book.setPointerCapture(e.pointerId); } catch (_) {}
  book.classList.add('grabbing');
});

window.addEventListener('pointermove', e => {
  if (drag) {
    if (e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
    if (drag.pending) {
      if (Math.hypot(dx, dy) < 8) return;
      const h = drag.pending;
      drag.pending = null;
      const dir = single ? (dx < 0 ? 1 : -1) : h.dir;
      if (!startTurn(dir, cur + dir, h.cy)) { drag = null; book.classList.remove('grabbing'); return; }
      turn.mode = 'drag';
      drag.start = { x: turn.x0, y: h.cy };
    }
    if (!turn || turn.mode !== 'drag') return;
    if (Math.hypot(dx, dy) > 6) drag.moved = true;
    const k = single ? (turn.x0 < 0 ? 2 : 1.6) : 1;
    turn.corner = { x: drag.start.x + turn.s * dx * k, y: drag.start.y + dy };
    const now = performance.now(), dt = Math.max(1, now - drag.lt);
    const toward = Math.sign(turn.x1 - turn.x0) * turn.s;
    drag.vel = drag.vel * .6 + .4 * ((e.clientX - drag.lx) / dt) * toward;
    drag.lx = e.clientX; drag.lt = now;
    frame();
    return;
  }
  if (e.pointerType === 'mouse' && !e.buttons) hover(e);
});

function release(e) {
  if (!drag || e.pointerId !== drag.id) return;
  const d = drag;
  drag = null;
  book.classList.remove('grabbing');
  if (d.pending) { if (e.type === 'pointerup') turnTo(cur + d.pending.dir); return; }
  if (!turn || turn.mode !== 'drag') return;
  if (e.type === 'pointercancel') { settle(false); return; }
  const prog = clamp01((turn.cc.x - turn.x0) / (turn.x1 - turn.x0));
  let commit = !d.moved || prog > .3 || d.vel > .35;
  if (d.moved && d.vel < -.35) commit = false;
  settle(commit, d.moved ? {} : { ease: 'inout', bump: H * .2 });
}
window.addEventListener('pointerup', release);
window.addEventListener('pointercancel', release);
book.addEventListener('pointerleave', e => {
  book.classList.remove('grab');
  if (!drag && turn && turn.mode === 'peek') settle(false);
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); stepBy(1); }
  else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); stepBy(-1); }
  else if (e.key === 'Home') { e.preventDefault(); turnTo(0); }
  else if (e.key === 'End') { e.preventDefault(); turnTo(maxCur); }
});

function layout() {
  turn = null; queued = null; drag = null;
  // Sin botones abajo: el libro usa casi todo el alto de la pantalla
  const vw = stage.clientWidth || window.innerWidth;
  const avH = document.querySelector('.desk').clientHeight - 70;
  const wasSingle = single;
  single = vw < 700;
  const ratio = single ? 1.5 : 1.38;
  const gutter = single ? 24 : 90;
  const pw = single ? Math.min(vw - gutter, avH / ratio, 520) : Math.min((vw - gutter) / 2, avH / ratio, 560);
  W = Math.max(150, Math.floor(pw));
  H = Math.round(W * ratio);
  if (wasSingle === true && !single) {
    const p = P.indexOf(PS[cur]);
    cur = p === 0 ? 0 : p === P.length - 1 ? LEAVES : (p % 2 === 0 ? p / 2 : (p + 1) / 2);
  }
  if (wasSingle === false && single) {
    let p = cur === 0 ? 0 : cur === LEAVES ? P.length - 1 : 2 * cur - 1;
    while (P[p].spreadOnly) p++;
    cur = PS.indexOf(P[p]);
  }
  maxCur = single ? PS.length - 1 : LEAVES;
  book.classList.toggle('single', single);
  const bw = single ? W : W * 2;
  book.style.width = bw + 'px';
  book.style.height = H + 'px';
  book.style.setProperty('--pw', W + 'px');
  book.style.setProperty('--ph', H + 'px');
  book.style.fontSize = Math.max(11, W * (single ? .04 : .034)).toFixed(2) + 'px';
  book.style.setProperty('--bonsai-size', `${(BONSAI.pages * BONSAI.pw * H / BONSAI.ph).toFixed(1)}px ${H}px`);
  shade.setAttribute('width', bw);
  shade.setAttribute('height', H);
  renderStatic();
}


let rt;
window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(layout, 120); });
layout();
// El bonsái se dibuja después de mostrar el libro, para no demorar la apertura
setTimeout(() => drawBonsai().then(url => { if (url) book.style.setProperty('--bonsai', `url(${url})`); }), 60);
// Las tipografías cambian las medidas del texto: al terminar de cargar se reajustan las páginas
// (las letras de los títulos de servicios se piden de entrada, porque la tapa no las usa)
if (document.fonts) Promise.all([
  document.fonts.load('1em "Great Vibes"'),
  document.fonts.load('italic 500 1em "Cormorant Garamond"'),
  document.fonts.ready
]).catch(() => {}).then(() => { if (!turn) renderStatic(); });

/* ============ Botón de WhatsApp ============
   Abrir WhatsApp no toca este sitio (va directo a wa.me), así que tocarlo mil veces no lo afecta.
   Esto solo evita que un doble toque nervioso abra dos pestañas o mande el mensaje dos veces. */
let lastWa = 0;
document.addEventListener('click', e => {
  const a = e.target.closest('a.want');
  if (!a) return;
  const now = Date.now();
  if (now - lastWa < 3000) { e.preventDefault(); return; }
  lastWa = now;
  a.setAttribute('aria-disabled', 'true');
  setTimeout(() => a.removeAttribute('aria-disabled'), 3000);
}, true);
