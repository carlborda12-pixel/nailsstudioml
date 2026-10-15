/* =====================================================================
   DATOS DEL CATÁLOGO: este es el único archivo que hace falta editar
   para cambiar precios, textos, horarios, el WhatsApp o las fotos.
   Fotos: van en la carpeta img/. Si reemplazás una foto, subila con un
   NOMBRE NUEVO y cambiá el nombre acá (así nadie ve la foto vieja guardada).
   ===================================================================== */
const STUDIO = {
  name1: 'Mayra', name2: 'López', sub: 'Nails Studio',
  season: 'Primavera 2026',
  tagline: 'Tu destino favorito para el cuidado y la belleza de tus uñas',
  city: 'Posadas, Misiones',
  whatsapp: '+54 9 376 551-1199', // el link de WhatsApp se arma solo con este número
  hours: 'Lunes a sábado, de 9 a 20 h'
};
STUDIO.waLink = 'https://wa.me/' + STUDIO.whatsapp.replace(/\D/g, '');
const waHref = text => `${STUDIO.waLink}?text=${encodeURIComponent(text)}`;

const hy = s => s.replace(/·/g, '­'); // "·" → guion opcional (solo aparece si la palabra se corta)

/* ============ Servicios: una página cada uno ============
   script: título en letra manuscrita (segunda parte opcional, va abajo)
   desc: un texto o una lista de párrafos
   photos: dos fotos [archivo, descripción, encuadre opcional como '50% 22%'] (opcional) */
const SERVICES = [
  {
    name: 'Capping gel con Base Rubber',
    script: ['Capping gel', 'con Base Rubber'],
    lead: 'Refuerzo, protección y naturalidad para tus uñas ✨',
    // Los "·" marcan dónde se puede cortar la palabra con guion al justificar
    desc: hy('El Capping Gel con Base Rubber es un ser·vi·cio de re·fuer·zo de la uña na·tu·ral que con·sis·te en apli·car una capa de pro·duc·to que apor·ta es·truc·tu·ra, fle·xi·bi·li·dad y re·sis·ten·cia, sin ne·ce·si·dad de rea·li·zar ex·ten·sio·nes.'),
    time: '1 h 15 min', price: '$20.000',
    photos: [['img/capping-rubber-1.webp', 'Uñas cortas con capping rubber nude, flores pintadas a mano y puntitos'], ['img/capping-rubber-2.webp', 'Uñas con capping rubber en verde pistacho con brillo perlado']]
  },
  {
    name: 'Capping con Poly Gel',
    script: ['Capping', 'con Poly Gel'],
    lead: 'Resistencia, estructura y versatilidad para tus uñas ✨',
    desc: hy('Ofre·ce ma·yor con·sis·ten·cia para crear es·truc·tu·ra y rea·li·zar pe·que·ñas o me·dia·nas ex·ten·sio·nes, según la téc·ni·ca. Apor·ta re·sis·ten·cia y es·truc·tu·ra a la uña.'),
    time: '2 h', price: '$22.000',
    photos: [['img/capping-polygel-1.webp', 'Uñas almendra con francesita blanca, efecto perlado y apliques plateados'], ['img/capping-polygel-2.webp', 'Uñas almendra en turquesa con flores secas y efecto nácar']]
  },
  {
    name: 'Soft Gel',
    script: ['Soft Gel'],
    lead: 'Elegancia, extensión y un acabado delicado ✨',
    desc: [
      hy('El Soft Gel es un sis·te·ma de ex·ten·sión de uñas que uti·li·za tips de gel pre·via·men·te es·truc·tu·ra·dos, los cua·les se ad·hie·ren a la uña na·tu·ral me·dian·te un pro·duc·to es·pe·cí·fi·co y se curan en lám·pa·ra LED/UV.'),
      hy('Este sis·te·ma per·mi·te ob·te·ner uñas con una forma de·fi·ni·da, una es·truc·tu·ra uni·for·me y un aca·ba·do pro·li·jo. Es una ex·ce·len·te op·ción para quie·nes de·sean lucir uñas más lar·gas sin rea·li·zar una cons·truc·ción tra·di·cio·nal desde cero.')
    ],
    time: '2 h', price: '$25.000',
    photos: [['img/soft-gel-1.webp', 'Uñas cuadradas cortas con soft gel y francesita blanca fina'], ['img/soft-gel-2.webp', 'Uñas almendra largas con soft gel color terracota y lunares blancos']]
  },
  {
    name: 'Spa de Pies',
    script: ['Spa de Pies'],
    lead: 'Cuidado, belleza y bienestar en cada detalle ✨',
    desc: [
      hy('El Spa de Pies es un ser·vi·cio de cui·da·do es·té·ti·co que com·bi·na la pre·pa·ra·ción de las uñas, el cui·da·do de la zona pe·riun·gueal y el es·mal·ta·do se·mi·per·ma·nen·te para lograr una apa·rien·cia pro·li·ja, de·li·ca·da y du·ra·de·ra.'),
      hy('El ser·vi·cio in·clu·ye la pre·pa·ra·ción ade·cua·da de las uñas na·tu·ra·les, el tra·ba·jo de cu·tí·cu·las según las ne·ce·si·da·des de cada clien·ta y la apli·ca·ción de es·mal·te se·mi·per·ma·nen·te.'),
      hy('Si al·gu·na uña ne·ce·si·ta re·cu·pe·rar su forma o pre·sen·ta una lon·gi·tud in·su·fi·cien·te, se puede rea·li·zar una cons·truc·ción pun·tual con Poly Gel, adap·ta·da a la ana·to·mía de la uña y a las ne·ce·si·da·des es·té·ti·cas del pie.')
    ],
    time: '2 h', price: '$28.000',
    photos: [['img/spa-pies-1.webp', 'Pies en el baño de agua tibia del spa', '50% 22%'], ['img/spa-pies-2.webp', 'Pies con esmaltado semipermanente y francesita blanca']]
  }
];
