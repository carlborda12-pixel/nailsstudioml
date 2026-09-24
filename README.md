# Catálogo de diseños · Mayra López Nails Studio

Catálogo web en formato libro, con páginas que se doblan desde la punta (mouse y táctil).

Es un sitio estático de un solo archivo: `index.html`. No necesita instalación ni build.

## Editar contenido

Todo está al principio del `<script>` en `index.html`:

- `STUDIO`: nombre, temporada, lema, ciudad, WhatsApp y horarios.
- `SERVICES`: lista de servicios base y precios.
- `DESIGNS`: los diseños del catálogo (nombre, descripción, técnica, tiempos, precio y colores).

El índice y la numeración de páginas se recalculan solos.

## Ver en local

Abrí `index.html` en el navegador.

## Publicar cambios

```bash
git add .
git commit -m "Actualizo precios"
git push
```

Vercel vuelve a publicar solo después de cada `push`.
