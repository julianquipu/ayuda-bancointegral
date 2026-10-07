# Centro de ayuda Banco Integral × Quipu Score (PWA de autogestión)

Ayuda para que el asesor de Banco Integral resuelva en campo, en segundos, las dudas del cliente con la app Quipu Score durante la Fase 0 del piloto (meta: 2.000 descargas con el proceso completo). Si no lo resuelve, reporta por WhatsApp con el mensaje ya armado.

- **Gratis y liviana:** HTML, CSS y JavaScript sin librerías ni compilación. Se aloja en GitHub Pages.
- **Offline:** después de la primera visita abre sin señal (service worker).
- **Mantenible sin programar:** todo el contenido vive en `data.js`. Ver **[CONTENIDO.md](CONTENIDO.md)**.
- **Base:** réplica de la ayuda de CFA (v0.7) con la marca de Banco Integral y solo el alcance de Quipu Score.

## Estructura

```
index.html        estructura y estilos (diseño)          — rara vez se toca
data.js           CONTENIDO: preguntas, temas, imágenes  — ✏️ se edita seguido
app.js            buscador, navegación, WhatsApp, offline — rara vez se toca
sw.js             service worker (offline)               — no se toca
manifest.json     ficha de app instalable
assets/img/       capturas de pantalla (.webp + .png)    — ✏️ aquí van las imágenes
assets/           logo de Banco Integral e íconos de la app
CONTENIDO.md      cómo editar el contenido
```

## Probarla en tu computador

```bash
python -m http.server 8000
```

Abre `http://localhost:8000`. Para verla como en el celular: Chrome → F12 → ícono de celular → 360 px de ancho.

## Publicación

Repositorio público `julianquipu/ayuda-bancointegral`, rama `main`, GitHub Pages desde `main` / `(root)`:
**https://julianquipu.github.io/ayuda-bancointegral/**. Cada cambio que subes (`git push`) se publica solo en 1–2 minutos.

> ⚠️ Publica **solo esta carpeta**. Los archivos de trabajo de `12_pwa_ayuda/` (capturas originales, scripts, marca) son internos.

## Mensaje para fijar en el grupo de WhatsApp

> 📌 **Ayuda Quipu Score · Banco Integral**
> Si el cliente tiene una duda o algo falla en la visita, búscalo aquí primero: https://julianquipu.github.io/ayuda-bancointegral/
> Ábrelo una vez con señal y queda guardado para usarlo sin internet.
> Si no se resuelve, toca **Pedir ayuda**: se copia el mensaje y se abre este grupo; pégalo y envíalo.

## Enlaces directos

| Enlace | Abre |
|---|---|
| `…/` | Portada (Soluciones + Lo más frecuente) |
| `…/#quipu-score` · `#paso-a-paso` | Esa sección |
| `…/#instalacion` · `#registro` · `#permisos` · `#media` · `#resultado` · `#cliente` | Soluciones filtradas por esa categoría |
| `…/#video-como` · `#codigo-no-llega` · `#paso-5-datos` … | Esa respuesta o tema, abierto (el `id` está en `data.js`) |
| `…/?q=dui` | La ayuda con esa búsqueda ya hecha |

## Cómo funciona el offline

- La primera vez que se abre con señal, se guardan la app, el contenido y **todas las imágenes referenciadas en `data.js`**.
- Los textos se piden a la red primero; si no hay señal o tarda más de 3 segundos, se usa la copia guardada.
- Si reemplazas una imagen conservando el nombre, sube `VERSION` en `sw.js`, o mejor usa un nombre nuevo.
- Si cambias `app.js` o `index.html`, sube el `?v=` de las dos etiquetas `<script>` al final de `index.html` y `VERSION` en `sw.js`.

## Diseño

Variante **Quipu 2031 × Material 3** con la marca de Banco Integral:
- **Color:** azul `#003B71` como primario (texto, chips, navegación); naranja `#E97300` solo en el botón "Pedir ayuda" (con texto `#1C1C1C`, 5.61:1); gris `#63666A` para texto secundario. Solo modo claro, como la app.
- **Tipografía:** Poppins, la de la app co-brandeada.
- **Voz:** tuteo, también en "Qué decirle al cliente".
- **Accesibilidad:** contraste AA, objetivos táctiles ≥ 44 px, foco visible, respeta "reducir movimiento".

## Reporte por WhatsApp

Con `CONFIG.grupoWhatsApp` lleno, "Pedir ayuda" **copia el mensaje** (con la respuesta que el asesor tenía abierta) y **abre el grupo**; el asesor lo pega. El grupo tiene activo "Aprobar nuevos participantes". El mensaje no pide el DUI del cliente.

## Pendientes (ocultos en la versión publicada)

Las dudas abiertas están en `data.js` como `pendiente: "…"`. Se ven con `mostrarPendientes: true` (y las capturas faltantes con `mostrarImagenesPendientes: true`). Las principales: intentos del código antes del bloqueo, pantalla "No pudimos calcular tu score", si el cliente puede borrar la app, correo opcional, video desde galería y tiempo de subida, formato del DUI, QR que no se lee, "No quiero continuar" en SMS.

- Logo e íconos recortados del JPG del manual: reemplazar por el SVG oficial de Banco Integral.
- Capturas adaptadas a El Salvador (+503, 8 dígitos, DUI): validar contra el video de producción.
