# Catálogo de diseños · Mayra López Nails Studio

Catálogo web en formato libro, con hojas que se doblan desde la punta (mouse y táctil).
Es un sitio estático: no tiene servidor, base de datos ni formularios. No necesita instalación ni build.

## Archivos

| Archivo | Para qué es |
|---|---|
| `index.html` | La página y su diseño. |
| `datos.js` | **Lo único que hace falta editar:** WhatsApp, horarios, servicios, precios, textos y fotos. |
| `app.js` | El motor del libro (animaciones). No hace falta tocarlo. |
| `img/` | Fotos optimizadas en WebP. |
| `vercel.json` | Cabeceras de seguridad y caché que aplica Vercel. |

## Editar contenido

1. En GitHub abrí `datos.js` y tocá el lápiz ✏️.
2. Cambiá lo que necesites (precio, texto, número).
3. Tocá **Commit changes**. Vercel publica la versión nueva en uno o dos minutos.

### Cambiar una foto

Las fotos se guardan una semana en el celular de cada visitante para que la página cargue rápido.
Por eso, si reemplazás una foto, **subila con un nombre nuevo** (por ejemplo `soft-gel-3.webp`) a la
carpeta `img/` y cambiá el nombre en `datos.js`. Si la subís con el mismo nombre, algunas personas
seguirían viendo la vieja durante unos días.

Formato recomendado: WebP o JPG de 600 px de ancho.

## Seguridad

- `vercel.json` agrega una política de contenido (CSP) que solo permite ejecutar los scripts propios
  del sitio, impide que otra página meta el catálogo dentro de un marco (iframe) para engañar a
  alguien, y desactiva cámara, micrófono, ubicación y pagos.
- Si agregás algo externo (un video de YouTube, Google Analytics, un mapa), hay que habilitar su
  dominio en la línea `Content-Security-Policy` de `vercel.json`, o el navegador lo va a bloquear.
- El botón de WhatsApp abre `wa.me` directamente: tocarlo no genera carga en este sitio.
