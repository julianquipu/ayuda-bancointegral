/* =====================================================================
   CONTENIDO DEL CENTRO DE AYUDA · Banco Integral × Quipu Score
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para cambiar textos,
   agregar preguntas o imágenes. Guía completa en CONTENIDO.md.

   Formato de texto (en cualquier campo de texto):
     **texto**   → se ve en negrita
     {PESO}      → se reemplaza por CONFIG.pesoMaximo

   Reglas rápidas:
     - Cada bloque { ... } va separado por una coma.
     - Los textos van entre comillas dobles "así".
     - Si el texto lleva comillas dobles adentro, usa “comillas curvas”.
   ===================================================================== */

/* ---------- 1. CONFIGURACIÓN GENERAL ---------- */
const CONFIG = {
  // Grupo de soporte en WhatsApp (enlace de invitación). Si está lleno, se usa este:
  // el botón copia el mensaje armado y abre el grupo para pegarlo.
  // (WhatsApp no permite precargar texto en un grupo, solo en un número.)
  // ⚠️ El sitio es público: pon aquí el enlace SOLO si el grupo tiene activo "Aprobar nuevos participantes".
  grupoWhatsApp: "https://chat.whatsapp.com/CgABlOosgYNFMWaFuyEEu0",

  // O un número directo (se usa solo si grupoWhatsApp está vacío).
  // Formato internacional, sin "+" ni espacios. Ej. El Salvador: "50370000000".
  whatsapp: "",

  // Peso máximo de foto/video. Pendiente: la app no lo indica y nadie lo ha confirmado.
  pesoMaximo: "",

  // true = muestra los recuadros punteados de "imagen pendiente" (útil mientras armas las capturas).
  // false = los oculta (úsalo cuando publiques para los asesores).
  mostrarImagenesPendientes: false,

  // true = muestra los recuadros punteados "Por confirmar" (dudas abiertas con Tech o con Banco Integral).
  // false = los oculta. Antes de publicar, resuelve o quita cada pendiente.
  mostrarPendientes: false,

  // Plantilla del mensaje de reporte por WhatsApp (una línea por elemento).
  // Sin el DUI del cliente: el grupo no es lugar para datos personales.
  mensajeWhatsApp: [
    "Hola 👋 Reporte de novedad:",
    "• Asesor (nombre y agencia): ",
    "• Cliente (nombre): ",
    "• Celular del cliente (marca y modelo): ",
    "• Qué pasó y en qué pantalla: ",
    "• Adjunto: (captura o video del problema)"
  ],

  // Búsquedas que se sugieren cuando una búsqueda no encuentra nada.
  sugerencias: ["logo", "código", "DUI", "SMS", "foto"],

  // Pie de página
  pie: "Banco Integral × Quipu Score",
  version: "v0.1.1 · piloto"
};

/* ---------- 2. INTRO (portada) ---------- */
const INTRO = {
  titulo: "Hola, ¿en qué te ayudamos?",
  subtitulo: "Resuelve en minutos las dudas del cliente con la app Quipu Score, entiende para qué sirve y repasa el paso a paso."
};

/* ---------- 3. CATEGORÍAS (la etiqueta de color de cada pregunta) ----------
   color: "marca" = Banco Integral / la app · "acento" = el cliente · "oro" = pide atención · "gris" = general
   icono: "descarga" | "codigo" | "permisos" | "camara" | "score" | "chat" | "kyc" | "check" (se usa en "Lo más frecuente") */
const CATEGORIAS = {
  instalacion: { nombre: "Instalación",       color: "marca",  icono: "descarga" },
  registro:    { nombre: "Registro",          color: "marca",  icono: "codigo" },
  permisos:    { nombre: "Permisos",          color: "marca",  icono: "permisos" },
  media:       { nombre: "Foto y video",      color: "marca",  icono: "camara" },
  resultado:   { nombre: "Resultado",         color: "marca",  icono: "score" },
  cliente:     { nombre: "Dudas del cliente", color: "acento", icono: "chat" }
};

/* Capturas del flujo aprobado por Banco Integral (Figma "Ban"), adaptadas a El Salvador. */
const CAP = (nombre, alt, cap) => ({
  src: "assets/img/" + nombre + ".webp", full: "assets/img/" + nombre + ".png",
  ancho: 414, alto: 896, alt: alt, cap: cap
});

/* ---------- 4. SOLUCIONES (casos frecuentes en campo) ----------
   Campos de cada pregunta:
     id        → nombre corto, único, sin espacios ni tildes (sirve para el enlace directo)
     cat       → una de las CATEGORIAS de arriba
     pregunta  → el título, como lo buscaría el asesor
     palabras  → palabras clave para el buscador (sin tildes, entre más mejor)
     respuesta → el texto principal
   Opcionales:
     rapido    → título corto (2–4 palabras) para mostrarla en "Lo más frecuente" (máx. 4–6 en total)
     aplica    → a qué equipos aplica (ej. "Samsung Galaxy · One UI")
     nota      → recuadro de "Importante"
     decir     → recuadro "Qué decirle al cliente"
     pasos     → lista numerada; cada paso puede ser un texto o { titulo, texto, subpasos:[...], img:[...] }
     img       → imágenes (ver CONTENIDO.md)
     cierre    → texto final, después de los pasos
     ver       → enlaces a otras respuestas: [{ id:"dns-privado", texto:"..." }] (también dentro de un paso: ver:{ id, texto })
     pendiente → recuadro punteado "Por confirmar" (se oculta con mostrarPendientes: false)
   En "pasos", final:true marca el último paso con ✓ en lugar de número.
   Imagen real:      CAP("bi_cobrand", "texto alternativo", "pie de foto")  o  { src, full, ancho, alto, alt, cap }
   Imagen pendiente: { pendiente:"IMG-01", describe:"qué debe mostrar", fuente:"de dónde sale" }
*/
const FAQ = [
  /* ================= Instalación ================= */
  {
    id: "celulares",
    cat: "instalacion",
    rapido: "¿En qué celulares funciona?",
    pregunta: "¿En qué celulares funciona Quipu Score?",
    palabras: "dispositivos celulares compatibles funciona android iphone apple ios play store google play tienda chino sin play store huawei requisitos internet version modelo",
    respuesta: "Quipu Score **solo funciona en Android** y, para instalarla, el celular necesita **Play Store (Google Play)** e **internet**. Eso deja por fuera los **iPhone** y algunos Android **sin Play Store**, como ciertos celulares chinos: en esos casos el cliente **no puede hacer el proceso**.",
    nota: "Confírmalo **antes de empezar**: pídele al cliente que te muestre que tiene **Play Store** en su celular. Se instala en **su** celular, el que usa a diario.",
    ver: [ { id: "qs-celular", texto: "¿En qué celular se instala?" } ],
    pendiente: "En CFA, con la misma app, funciona desde **Android 6.0**. Confirmar con Tech la versión mínima para Banco Integral."
  },
  {
    id: "qr-problemas",
    cat: "instalacion",
    rapido: "Problemas con el QR",
    pregunta: "No puedo leer el QR, o abre una app sin la marca de Banco Integral",
    palabras: "qr codigo no lee no escanea no abre camara enlace link redirecciona redirige otra app sin marca sin logo banco integral experiencia quipuscore play store",
    respuesta: "Son dos casos distintos:",
    pasos: [
      { titulo: "La cámara no lee el QR", texto: "Sube el **brillo** de tu pantalla y pídele al cliente que apunte la **cámara de su celular** al código." },
      { titulo: "Abre una app sin la marca de Banco Integral", texto: "No es la versión para Banco Integral: casi siempre es porque la app **no se abrió desde tu QR** o el celular tiene un **DNS privado**. No sigan con el registro hasta que aparezcan los dos logos.",
        ver: { id: "app-sin-logo-bi", texto: "Cómo lograr que aparezca el logo de Banco Integral" } }
    ],
    pendiente: "Si la cámara del cliente no lee el QR: ¿hay un enlace alternativo para enviarle (por ejemplo, por WhatsApp)?"
  },
  {
    id: "app-sin-logo-bi",
    cat: "instalacion",
    pregunta: "¿Cómo sé que instaló bien la app? (No sale el logo de Banco Integral)",
    palabras: "instalo bien correcta version logo banco integral marca no aparece no sale quipuscore quipubank play store tienda enlace link qr escanear reescanear instalar desinstalar dns cobranding primera pantalla asegurar",
    respuesta: "La app quedó bien instalada si en la **primera pantalla** se ven los logos de **Banco Integral y Quipu Score**. Esa versión solo aparece cuando el cliente abre la app **escaneando tu QR**. Si la busca por su cuenta en Play Store, la encuentra como “Quipuscore”, sin la marca del banco.",
    nota: "Si no se ven **los dos logos**, no es la versión para Banco Integral: no sigan con el registro hasta que aparezcan.",
    pasos: [
      { texto: "Cuando la app se abra, **revisa con el cliente la primera pantalla**: deben verse los logos de **Banco Integral y Quipu Score** y el título “Ingresa a Quipu Score (Aliado Banco Integral)”. Si aparecen, todo bien: continúa.",
        img: [ CAP("bi_cobrand", "Primera pantalla de Quipu Score con los logos de Banco Integral y Quipu Score, el título Ingresa a Quipu Score (Aliado Banco Integral) y el botón Comencemos",
                   "Así se ve la versión correcta: los dos logos") ] },
      { titulo: "¿No aparece? Que vuelva a escanear tu QR", texto: "Pídele al cliente que **vuelva a escanear tu QR**. Si instaló la app desde Play Store, que primero la **desinstale**." },
      { titulo: "¿Sigue sin aparecer? Revisa el DNS privado", texto: "En Android, un **DNS privado** (por ejemplo AdGuard) puede bloquear los datos del enlace, y Quipu Score no reconoce que viene de Banco Integral. Cámbialo a **Automático** o **Desactivado**.",
        ver: { id: "dns-privado", texto: "Cómo desactivar el DNS privado" } }
    ],
    cierre: "Si ya revisaste el DNS y el logo sigue sin aparecer, **escala el caso** con **Pedir ayuda**.",
    pendiente: "Los pasos 2 y 3 vienen de la ayuda de CFA (es la misma app). Confirmar con Tech que en Banco Integral funcionan igual, y si el score llega a Banco Integral cuando el cliente se registra sin el logo."
  },
  {
    id: "play-store-quipuscore",
    cat: "instalacion",
    pregunta: "El cliente buscó la app en Play Store y le aparece como “Quipuscore”",
    palabras: "play store google play tienda buscar busco quipuscore quipubank nombre otro nombre no dice banco integral descargar por su cuenta instalo",
    respuesta: "Es normal: en Play Store la app **siempre aparece como Quipubank o Quipuscore**, sin el nombre ni el logo de Banco Integral, y eso no se puede cambiar. La marca del banco aparece **después de abrirla desde tu QR**. Por eso el cliente **nunca la busca por su cuenta**.",
    pasos: [
      "Si ya la instaló desde Play Store, que la **desinstale**.",
      "Pídele que **escanee tu QR** e instale la app desde ahí.",
      { final: true, titulo: "Revisa la primera pantalla", texto: "Deben verse los logos de **Banco Integral y Quipu Score**." }
    ],
    decir: "En la tienda la app sale con el nombre de Quipu, que es la empresa que la hace. Al abrirla desde mi código vas a ver la marca de Banco Integral."
  },
  {
    id: "dns-privado",
    cat: "instalacion",
    aplica: "Android · guía con Samsung Galaxy (One UI) · 3 pasos, 2 minutos",
    pregunta: "El logo de Banco Integral sigue sin aparecer o la app no carga (bloqueo de DNS)",
    palabras: "logo banco integral no aparece reescanear no carga app error conexion dns adguard vpn bloqueo bloquea samsung galaxy android internet no abre dns privado desinstalar llave blokada nextdns intra dns66 publicidad sin respuesta no responde no funciona pagina",
    respuesta: "Pasa cuando el celular del cliente tiene un **DNS privado** o una app de bloqueo (como **AdGuard**): filtra publicidad, pero también **bloquea los datos del enlace de Banco Integral**. Por eso Quipu Score no reconoce que viene del banco (no aparece el logo) o la app no carga. En celulares **Samsung Galaxy**, revisa estos 3 pasos.",
    nota: "Las pantallas son ilustrativas: los nombres y la posición de los menús pueden cambiar un poco según el modelo. Si no encuentras una opción, usa la **lupa de Ajustes** y busca “DNS privado” o “VPN”.",
    pasos: [
      {
        titulo: "Desactiva el DNS privado",
        texto: "Abre **Ajustes → Conexiones → Más ajustes de conexión → DNS privado**. Si está en “Nombre de host del proveedor de DNS privado” (por ejemplo adguard, nextdns, cloudflare, family), ese es el bloqueo: cámbialo a **Automático** o **Desactivado** y toca **Guardar**.",
        subpasos: ["Toca **Conexiones**", "Baja hasta **Más ajustes de conexión**", "Toca **DNS privado**", "Elige **Automático** y toca **Guardar**"],
        img: [
          { src: "assets/img/dns_paso1.webp", full: "assets/img/dns_paso1.png", ancho: 760, alto: 392, ancha: true,
            alt: "Cuatro pantallas: Ajustes, Conexiones, Más ajustes de conexión y la ventana DNS privado con la opción Automático seleccionada",
            cap: "Toca la imagen para verla en grande" }
        ]
      },
      {
        titulo: "Revisa si hay una VPN activa",
        texto: "Si arriba de la pantalla ves una **llave**, hay una VPN o app de bloqueo encendida. En el mismo menú del paso 1 toca **VPN** → el engranaje de la app → apaga todo y toca **Desconectar**.",
        subpasos: ["Toca **VPN**", "Toca el engranaje de la app que aparezca", "Apaga todo y toca **Desconectar**"],
        img: [
          { src: "assets/img/dns_paso2.webp", full: "assets/img/dns_paso2.png", ancho: 760, alto: 390, ancha: true,
            alt: "Cuatro pantallas: la llave de VPN en la barra superior, el menú VPN, AdGuard conectado y el botón Desconectar",
            cap: "Toca la imagen para verla en grande" }
        ]
      },
      {
        titulo: "Pausa o desinstala la app de bloqueo",
        texto: "Si el cliente tiene **AdGuard, Blokada, DNS66, NextDNS, Intra** o similar: que la abra y apague la protección, o mantenga presionado su ícono → **Desinstalar**. Estas apps no vienen con el Samsung; si no la reconoce, es seguro quitarla."
      },
      {
        final: true,
        titulo: "Luego, prueba de nuevo",
        texto: "Apaga y prende el **Wi-Fi** o los **datos móviles** (o reinicia el celular) y pídele al cliente que **vuelva a escanear tu QR**."
      }
    ],
    cierre: "¿Sigue sin funcionar? Pide ayuda con una captura de **Ajustes → Conexiones → Más ajustes de conexión**.",
    pendiente: "Guía tomada de la ayuda de CFA (misma app, validada con Tech). Confirmar qué marcas de celular son más comunes entre los clientes de Banco Integral para sumar otras guías."
  },
  {
    id: "no-descarga",
    cat: "instalacion",
    pregunta: "La app no termina de descargar",
    palabras: "descargar instalar play store no baja conexion internet wifi datos senal lenta espacio almacenamiento lleno",
    respuesta: "Casi siempre es la **conexión**. Verifica que haya buena señal o Wi-Fi; si puedes, ayúdale a conectarse a una red estable o muévanse a un lugar con mejor señal. Revisa también que el celular tenga **espacio disponible**.",
    decir: "La app es liviana. Si quieres, liberamos un poco de espacio y la instalamos juntos."
  },
  {
    id: "app-en-blanco",
    cat: "instalacion",
    pregunta: "La app se queda cargando o en blanco",
    palabras: "cargando blanco pantalla congelada trabada no avanza reinstalar desinstalar sin respuesta no responde se queda pegada lenta se cierra",
    respuesta: "Pídele al cliente que **cierre la app, la desinstale y la vuelva a instalar escaneando tu QR**. Al abrirla de nuevo, el proceso suele funcionar con normalidad.",
    ver: [ { id: "dns-privado", texto: "Sigue sin cargar: puede ser el DNS privado" } ],
    pendiente: "Solución tomada de la ayuda de CFA. Confirmar con Tech si al reinstalar el cliente pierde lo que ya había llenado."
  },

  /* ================= Registro ================= */
  {
    id: "codigo-no-llega",
    cat: "registro",
    rapido: "No llega el código",
    pregunta: "El código de verificación no llega (¿cuántas veces se puede intentar?)",
    palabras: "codigo otp verificacion no llega no llego sms mensaje whatsapp reenviar intentos cuantas veces bloqueo bloquea bloqueado tiempo vencio cambiar numero 6 digitos celular telefono",
    respuesta: "El código de **6 dígitos** llega por el canal que eligió el cliente: **WhatsApp** o **SMS**. Tiene un **tiempo límite**, que la pantalla muestra en cuenta regresiva. Haz esto, en orden:",
    pasos: [
      "Revisa con el cliente que el **número** que escribió sea el correcto: los **8 dígitos** de su celular.",
      "Si eligió WhatsApp, que busque el código **en WhatsApp**; si eligió SMS, en sus **mensajes**.",
      "Si el tiempo se acabó o no llegó, toca **Reenviar código**.",
      "Si el número está mal, toca **Cambiar número de teléfono** y escríbelo de nuevo."
    ],
    img: [ CAP("bi_codigo", "Pantalla Ingresa el código que te hemos enviado, con el número +503, el tiempo restante, seis casillas y las opciones Reenviar código y Cambiar número de teléfono",
               "“Reenviar código” y “Cambiar número de teléfono”, debajo de las casillas") ],
    ver: [ { id: "codigo-dice-sms", texto: "Eligió WhatsApp, pero la pantalla dice “mensaje de texto”" } ],
    pendiente: "¿Cuántas veces se puede pedir el código antes de que se **bloquee**, y por cuánto tiempo? Confirmar también que llega bien por WhatsApp y por SMS con los operadores de El Salvador."
  },
  {
    id: "codigo-dice-sms",
    cat: "registro",
    pregunta: "Eligió WhatsApp, pero la pantalla dice “mensaje de texto”",
    palabras: "whatsapp mensaje de texto sms dice codigo canal equivocado confusion pantalla texto otp",
    respuesta: "Es un **texto fijo** de la pantalla: siempre dice “mensaje de texto”, aunque el cliente haya elegido WhatsApp. **El código llega por el canal que eligió**: si tocó WhatsApp, que lo busque en WhatsApp.",
    pendiente: "Error de texto encontrado en la prueba del 22 ago. Quitar esta respuesta cuando se corrija en la app."
  },
  {
    id: "numero-celular",
    cat: "registro",
    pregunta: "No acepta el número de celular",
    palabras: "numero celular telefono no acepta invalido digitos 8 503 prefijo pais el salvador indicativo error",
    respuesta: "Los celulares de El Salvador tienen **8 dígitos**. Revisa que el país sea **El Salvador (+503)** y que el cliente escriba **solo los 8 dígitos** de su número, sin el prefijo. Luego elige cómo recibir el código: **WhatsApp** o **SMS**.",
    img: [ CAP("bi_celular", "Pantalla Ingresa tu número de celular con el prefijo +503 de El Salvador, el aviso El número debe tener 8 dígitos y los botones Recibir código por WhatsApp y Recibir código por SMS",
               "País +503 y los 8 dígitos del celular") ],
    pendiente: "La captura se ajustó a +503 y 8 dígitos. Confirmar con el video de producción que la app ya valida así: en el Figma y en la prueba del 22 ago decía +57 y 10 dígitos."
  },
  {
    id: "correo",
    cat: "registro",
    pregunta: "¿Qué pasa si el cliente no tiene correo electrónico?",
    palabras: "correo email electronico no tiene no recuerda confirmar confirma no coincide opcional gmail saltar",
    respuesta: "**No pasa nada: el correo es opcional.** Si el cliente no tiene correo, puede seguir sin él. Si lo tiene, lo escribe **dos veces, igual** (si no coinciden, no deja continuar), y que sea uno **al que tenga acceso**: le puede servir para consultas futuras o para recuperar su cuenta.",
    img: [ CAP("bi_correo", "Pantalla Ingresa tu correo electrónico con el correo escrito y confirmado",
               "Opcional. Si tiene correo: el mismo en los dos campos") ],
    pendiente: "Confirmado: el correo es opcional. Falta la captura de cómo se salta en la app."
  },
  {
    id: "dui-no-avanza",
    cat: "registro",
    pregunta: "“Continuar” no se activa en Datos de contacto (DUI)",
    palabras: "dui documento identidad numero identificacion cedula tipo confirmar confirma no coincide continuar no se activa no avanza datos contacto nombres apellidos teclado",
    respuesta: "Revisa estos puntos con el cliente:",
    pasos: [
      "**Nombres** y **apellidos** completos.",
      "En **Tipo de identificación**, elige **DUI**.",
      "Escribe el **número de DUI** tal como aparece en el documento.",
      "En **Confirma tu número de identificación**, escribe **exactamente el mismo número**: si no coinciden, no deja continuar."
    ],
    img: [ CAP("bi_datos_dui", "Pantalla Datos de contacto con nombres, apellidos, tipo de identificación DUI y el número de DUI escrito dos veces",
               "Tipo DUI y el mismo número en los dos campos") ],
    pendiente: "Confirmar con el video: cómo pide el número (9 dígitos, ¿con o sin guion?), si abre teclado numérico (en la prueba del 22 ago abría teclado de texto) y si DUI es la única opción."
  },
  {
    id: "politicas-continuar",
    cat: "registro",
    pregunta: "“Continuar” no se activa en Políticas de privacidad",
    palabras: "politicas privacidad terminos condiciones casillas checkbox marcar aceptar autorizo continuar no se activa gris tratamiento datos",
    respuesta: "El cliente debe **marcar todas las casillas** de aceptación: el botón **Continuar** se activa solo cuando están todas marcadas. Antes de aceptar, puede tocar cada documento para leerlo.",
    img: [ CAP("bi_politicas", "Pantalla Políticas de privacidad con tres documentos para leer y las casillas de aceptación abajo",
               "Marca todas las casillas y toca “Continuar”") ]
  },
  {
    id: "sin-instagram",
    cat: "registro",
    pregunta: "El cliente no tiene Instagram o no quiere conectarlo",
    palabras: "instagram redes sociales no tiene no quiere conectar opcional omitir saltar perfil enlace contrasena",
    respuesta: "Es **opcional** y no detiene el proceso: toca **No tengo redes sociales** y sigue. Si tiene Instagram del negocio, puede tocar **Conectar mi Instagram** o pegar el enlace de su perfil.",
    decir: "No hay problema, es opcional. Podemos continuar sin eso.",
    img: [ CAP("bi_redes", "Pantalla Redes sociales con el botón Conectar mi Instagram, el campo para pegar el enlace del perfil y la opción No tengo redes sociales",
               "“No tengo redes sociales”, debajo del campo") ]
  },

  /* ================= Permisos ================= */
  {
    id: "sms-no-quiere",
    cat: "permisos",
    pregunta: "El cliente no quiere dar el permiso de SMS",
    palabras: "sms mensajes permiso leer no quiere desconfia privacidad seguro obligatorio no quiero continuar permitir rechaza miedo conversaciones",
    respuesta: "El permiso de SMS es **obligatorio**: sin él, la app no puede calcular el score. Explícale para qué sirve **antes** de que toque el botón.",
    decir: "La app revisa solo los mensajes de tu banco, de tus pagos y promociones, no tus conversaciones. Con eso Banco Integral puede evaluarte aunque no tengas historial. Es seguro y se usa solo para tu evaluación.",
    nota: "No prometas que el crédito queda aprobado: la app **no aprueba**, envía la información a Banco Integral, que decide.",
    img: [ CAP("bi_sms", "Aviso de Quipu Score que pide acceso a los SMS del banco, pagos o promociones, con los botones Permitir y continuar y No quiero continuar",
               "El aviso de la app: “Permitir y continuar”") ],
    ver: [ { id: "cliente-que-mensajes", texto: "¿Qué mensajes lee Quipu Score?" }, { id: "sms-dos-permisos", texto: "Después aparece otra ventana de permiso" } ],
    pendiente: "Falta confirmar qué pasa si el cliente toca **No quiero continuar**: qué pantalla sigue y si puede volver a intentarlo."
  },
  {
    id: "sms-dos-permisos",
    cat: "permisos",
    pregunta: "Después de “Permitir y continuar” aparece otra ventana de permiso",
    palabras: "permiso android ventana permitir no permitir dos veces otra vez sistema sms segundo paso nativo",
    respuesta: "Son **dos pasos**: primero el aviso de la app (**Permitir y continuar**) y luego la ventana de **Android**, donde el cliente también debe tocar **Permitir**. Avísale antes, para que no toque “No permitir” por error.",
    img: [ { pendiente: "IMG-01", describe: "Ventana de permiso de Android para los SMS, con los botones Permitir y No permitir.", fuente: "Video de producción que pidió Julián" } ],
    pendiente: "Confirmar qué hacer si el cliente tocó **No permitir** en la ventana de Android."
  },
  {
    id: "camara-no-abre",
    cat: "permisos",
    pregunta: "La cámara no abre para la foto o el video",
    palabras: "camara no abre permiso foto video tomar grabar permitir negado bloqueado",
    respuesta: "La primera vez, Android pide **permiso para usar la cámara**: el cliente debe tocar **Permitir**. Después de tomar la foto, la app la guarda; espera a que termine de cargar.",
    pendiente: "Falta definir qué hacer si el cliente negó el permiso de cámara (pregunta abierta también en la presentación a asesores)."
  },

  /* ================= Foto y video ================= */
  {
    id: "video-como",
    cat: "media",
    rapido: "Cómo grabar el video",
    pregunta: "¿Cómo grabar bien el video del negocio?",
    palabras: "video negocio grabar grabo como bien vertical minuto duracion historia productos camara galeria subir que decir consejos tips luz",
    respuesta: "Es la parte que más le cuesta al cliente: **acompáñalo**. El video se graba con **Grabar video con la cámara**, en el momento.",
    pasos: [
      { titulo: "Vertical y de un minuto", texto: "El celular **de pie**, no acostado. Dura **un minuto**." },
      { titulo: "El cliente sale en cámara", texto: "Contando **la historia de su negocio y de sus productos**." },
      { titulo: "Que muestre lo que vende y cómo lo hace", texto: "El local o el puesto, los productos, las herramientas de trabajo." },
      { final: true, titulo: "Con buena luz y sin movimientos bruscos", texto: "Así el video no sale oscuro ni borroso." }
    ],
    decir: "Cuéntanos en un minuto qué vendes y cómo trabajas. Muéstranos tu negocio como se lo mostrarías a un cliente.",
    img: [ CAP("bi_video", "Pantalla Video del negocio con las indicaciones y los botones Grabar video con la cámara y Subir video desde la galería",
               "Toca “Grabar video con la cámara”") ],
    ver: [ { id: "video-tarda", texto: "El video se demora mucho cargando" } ],
    pendiente: "Confirmar si el video se puede subir desde la galería. Se acordó captura en el momento (antifraude), pero el Figma y la prueba del 22 ago muestran la opción de galería. La indicación de buena luz viene de la pantalla de la foto."
  },
  {
    id: "video-tarda",
    cat: "media",
    pregunta: "¿Qué pasa si el video se demora mucho cargando?",
    palabras: "video foto no carga no sube subida lenta lento tarda demora mucho se queda cargando internet datos peso pesado error esperar",
    respuesta: "La subida del video **puede tardar un poco**: es lo que más datos usa. Casi siempre depende de la **conexión**. Verifica que haya buena señal o Wi-Fi; si puedes, muévanse a un lugar con mejor señal y esperen en esa pantalla.",
    decir: "Subir el video es lo que más datos usa. Si quieres, lo hacemos con Wi-Fi.",
    pendiente: "Confirmar: cuánto es normal que tarde, qué hacer si no termina nunca, si se pierde el video al cerrar la app y el peso o formato máximo (la app no lo indica)."
  },
  {
    id: "foto-como",
    cat: "media",
    pregunta: "¿Cómo tomar bien la foto del negocio?",
    palabras: "foto negocio tomar como bien producto servicio espacio herramientas luz iluminacion borrosa camara",
    respuesta: "Una foto de **lo que hace el cliente**: su producto, su servicio, su espacio de trabajo o sus herramientas. Con **buena iluminación** y **sin movimientos bruscos**, para que no salga borrosa. Se toma con **Tomar foto con la cámara**.",
    img: [ CAP("bi_foto", "Pantalla Foto con las indicaciones y los botones Tomar foto con la cámara y Subir foto desde la galería",
               "Toca “Tomar foto con la cámara”") ]
  },

  /* ================= Resultado ================= */
  {
    id: "resultado-final",
    cat: "resultado",
    rapido: "¿Qué resultado ve el cliente?",
    pregunta: "¿Qué resultados puede ver el cliente al final?",
    palabras: "resultado resultados final todo listo puntaje score enviado no pudimos calcular error aprobado preaprobado rechazado cupo tasa redirigido banco integral explicar",
    respuesta: "Al terminar, la app muestra **“Calculando tu score…”** por unos segundos y luego uno de estos resultados:",
    pasos: [
      { titulo: "“¡Todo listo! Tu score fue enviado”", texto: "Todo salió bien: el score se calculó y **ya está en Banco Integral**, que sigue con el proceso. Esto **no es una aprobación** del crédito.",
        img: [ CAP("bi_todo_listo", "Pantalla Todo listo: tu score fue enviado; pronto serás redirigido a Banco Integral para continuar el proceso",
                   "¡Todo listo!: el score está en Banco Integral") ] },
      { titulo: "“No pudimos calcular tu score”", texto: "La app no logró calcular el score.",
        img: [ { pendiente: "IMG-02", describe: "Pantalla “No pudimos calcular tu score”, con su texto exacto y su botón.", fuente: "Video de producción o Figma" } ] }
    ],
    decir: "Listo, tu información ya está en Banco Integral. La app no aprueba el crédito: el banco sigue con el proceso.",
    nota: "**La app no aprueba el crédito.** No prometas aprobación, montos ni tiempos: quien decide es Banco Integral.",
    pendiente: "Confirmar: texto exacto de “No pudimos calcular tu score”, por qué pasa, qué hacer (¿reintentar?, ¿reportar?) y cómo explicárselo al cliente. Y qué significa “Pronto serás redirigido a Banco Integral”."
  },
  {
    id: "como-se-termino",
    cat: "resultado",
    rapido: "¿Cómo sé si terminó?",
    pregunta: "¿Cómo sé si el cliente terminó el proceso?",
    palabras: "termino terminado completo completo la solicitud como se saber final todo listo listo enviado confirmar registrar descarga",
    respuesta: "El cliente terminó cuando su celular muestra **“¡Todo listo! Tu score fue enviado”**. Antes aparece **“Calculando tu score…”** por unos segundos: **esperen juntos en esa pantalla** y no cierren la app.",
    nota: "Míralo **en el celular del cliente** antes de irte: si la visita termina antes de “¡Todo listo!”, el proceso queda incompleto.",
    ver: [ { id: "resultado-final", texto: "¿Qué resultados puede ver el cliente?" } ],
    pendiente: "Confirmar: si el cliente cierra la app a mitad del proceso, ¿retoma donde iba? ¿Tú debes registrar la descarga en el sistema de visitas de Banco Integral?"
  },

  /* ================= Dudas del cliente ================= */
  {
    id: "cliente-que-mensajes",
    cat: "cliente",
    pregunta: "“¿Qué mensajes lee Quipu Score?”",
    palabras: "que mensajes lee sms conversaciones whatsapp privados personales banco pagos promociones suscripciones lee mis mensajes cliente pregunta",
    respuesta: "Solo los **SMS del banco, de pagos, suscripciones y promociones** que le llegan al cliente. **No lee sus conversaciones.** Con esos mensajes se conoce su comportamiento financiero, aunque no tenga historial.",
    decir: "La app revisa solo los mensajes de tu banco, de tus pagos y promociones. No lee tus conversaciones."
  },
  {
    id: "cliente-a-quien",
    cat: "cliente",
    pregunta: "“¿A quién se le comparte mi información?”",
    palabras: "a quien se comparte informacion datos compartir quien ve banco integral quipu terceros privacidad cifrado cliente pregunta",
    respuesta: "A **Banco Integral**. Quipu calcula el score y se lo envía al banco para la **evaluación de crédito**. La información viaja **cifrada** y se usa solo para esa evaluación. El cliente autoriza su uso en las políticas de privacidad de la app.",
    decir: "Tu información se envía cifrada a Banco Integral y se usa únicamente para tu evaluación de crédito. Tú autorizas su uso y puedes ver las políticas de privacidad en la app.",
    pendiente: "La política de privacidad para El Salvador está en revisión con ciberseguridad y legal de Banco Integral: validar esta respuesta con ellos."
  },
  {
    id: "cliente-borrar-app",
    cat: "cliente",
    pregunta: "“¿Puedo borrar la app después de la visita?”",
    palabras: "borrar desinstalar eliminar app despues visita quitar puedo cliente pregunta sigue leyendo",
    respuesta: "Respuesta **por confirmar** con el equipo de Quipu. Mientras tanto, no le digas que sí ni que no: toma nota y repórtalo con **Pedir ayuda**.",
    pendiente: "Definir: ¿el cliente puede desinstalar la app después de “¡Todo listo!”? ¿Afecta su evaluación? ¿La app sigue leyendo SMS después del proceso?"
  }
];

/* ---------- 5. SECCIONES (barra de navegación inferior) ----------
   nav        → texto corto bajo el ícono (máx. ~12 letras)
   antetitulo → texto pequeño sobre el título (opcional)
   icono      → "errores" | "score" | "pasos"
   tipo       → "faq"       muestra las preguntas de FAQ, con filtros por categoría
                "temas"     lista de temas que se expanden (como las preguntas)
                (opcional) resumen:{ id, titulo, palabras, bloques } → línea de tiempo arriba de los temas
   La primera sección es la que abre por defecto.

   Cada tema: { id, meta, titulo, palabras, bloques:[ ... ] }
     meta → texto pequeño sobre el título (ej. "Paso 3")
   Tipos de bloque (se combinan como quieras, en orden):
     { tipo:"texto",  texto:"..." }
     { tipo:"lista",  items:["...", "..."] }                  → viñetas
     { tipo:"pasos",  items:["...", "..."] }                  → lista numerada
     { tipo:"decir",  texto:"..." }                           → “Qué decirle al cliente”
     { tipo:"nota",   titulo:"Importante", texto:"..." }      → recuadro dorado
     { tipo:"tabla",  columnas:["A","B"], filas:[["..",".."]] }
     { tipo:"img",    img:[ ...igual que en FAQ... ] }
     { tipo:"ver",    id:"id-de-otra-respuesta", texto:"..." } → enlace a otra respuesta
     { tipo:"titulo", texto:"..." }                           → subtítulo dentro del tema
     { tipo:"pendiente", texto:"..." }                        → recuadro punteado "Por confirmar"
   En el resumen: { tipo:"momento", texto:"...", quien:"tu" | "cliente" | "ambos" } */
const SECCIONES = [
  { id: "soluciones", nav: "Soluciones", icono: "errores", tipo: "faq",
    titulo: INTRO.titulo, subtitulo: INTRO.subtitulo },

  { id: "quipu-score", nav: "Quipu Score", icono: "score", tipo: "temas",
    titulo: "Sobre Quipu Score",
    subtitulo: "Qué es, qué información usa y cómo responder las dudas del cliente con confianza.",
    temas: [
      { id: "qs-piloto", titulo: "¿Para qué es este piloto?",
        palabras: "piloto fase 0 meta descargas 2000 clientes modelo el salvador objetivo para que",
        bloques: [
          { tipo: "texto", texto: "En esta primera fase la meta es que **2.000 clientes** de Banco Integral **descarguen Quipu Score y completen el proceso**. Con esa información se construye el **primer modelo de score alternativo para El Salvador**." },
          { tipo: "texto", texto: "Por eso cuenta cada cliente que llega a **“¡Todo listo!”** con su foto y su video: una descarga a medias no sirve para el modelo." },
          { tipo: "ver", id: "como-se-termino", texto: "¿Cómo sé si el cliente terminó?" }
        ] },
      { id: "qs-que-es", titulo: "¿Qué es Quipu Score?",
        palabras: "que es app aplicacion score puntaje evaluar credito historial alternativa pitch explicar",
        bloques: [
          { tipo: "texto", texto: "Es la app con la que **Banco Integral** evalúa el crédito de sus clientes **aunque no tengan historial**. Usa información del celular y del negocio para conocerlos mejor, calcula un **score** (puntaje) y lo envía al banco." },
          { tipo: "decir", texto: "Es la app con la que Banco Integral evalúa tu crédito aunque no tengas historial. Usa información de tu celular y de tu negocio para conocerte mejor." }
        ] },
      { id: "qs-informacion", titulo: "¿Qué información recoge?",
        palabras: "informacion datos fuentes sms mensajes foto video negocio instagram redes sociales registro alternativa",
        bloques: [
          { tipo: "lista", items: [
            "**SMS:** mensajes del banco, de pagos y promociones. Nunca las conversaciones personales.",
            "**Actividad del negocio:** una foto y un video de un minuto.",
            "**Redes sociales:** el Instagram del negocio, si lo tiene (opcional).",
            "**Registro:** nombre, DUI, celular y correo (opcional)."
          ] },
          { tipo: "texto", texto: "El buró mira el pasado; Quipu Score mira el **presente** del negocio. Así se hacen visibles los micronegocios que no tienen historial." }
        ] },
      { id: "qs-quien-decide", titulo: "¿Quién aprueba el crédito?",
        palabras: "aprueba aprobacion decide decision banco integral credito prometer score no vinculante",
        bloques: [
          { tipo: "texto", texto: "La decisión final **siempre es de Banco Integral**. Quipu Score calcula el score y lo envía al banco, que lo usa junto con sus propias políticas." },
          { tipo: "decir", texto: "Esta app no aprueba el crédito: envía tu información a Banco Integral, que sigue con el proceso." },
          { tipo: "nota", titulo: "No prometas aprobación", texto: "Ni montos, ni tiempos de respuesta. Quien decide es Banco Integral." }
        ] },
      { id: "qs-por-que-qr", titulo: "¿Por qué con tu QR y no desde Play Store?",
        palabras: "qr enlace link deep link play store buscar tienda quipuscore quipubank marca logo por que",
        bloques: [
          { tipo: "texto", texto: "En Play Store la app **siempre aparece como Quipubank o Quipuscore**, sin la marca del banco, y eso no se puede cambiar. La versión con **Banco Integral** aparece solo cuando el cliente abre la app **desde tu QR**." },
          { tipo: "texto", texto: "Si el cliente la busca por su cuenta, puede dudar al no ver a Banco Integral. Por eso **tú compartes el QR** y el cliente nunca la busca solo." },
          { tipo: "ver", id: "app-sin-logo-bi", texto: "La app no muestra el logo de Banco Integral" }
        ] },
      { id: "qs-sms", titulo: "¿Por qué pide leer los SMS?",
        palabras: "sms mensajes leer permiso por que seguro privacidad conversaciones comportamiento financiero obligatorio",
        bloques: [
          { tipo: "texto", texto: "Los SMS del banco, de pagos y promociones muestran el **comportamiento financiero** del cliente. Con eso se le puede evaluar aunque no tenga historial en el banco. El permiso es **obligatorio**: sin él, la app no calcula el score." },
          { tipo: "decir", texto: "Entiendo la duda. La app revisa solo los mensajes de tu banco y de tus pagos, no tus conversaciones. Se usan solo para tu evaluación y de forma segura." },
          { tipo: "ver", id: "sms-no-quiere", texto: "El cliente no quiere dar el permiso de SMS" }
        ] },
      { id: "qs-datos-seguros", titulo: "¿Los datos del cliente están seguros?",
        palabras: "datos seguros seguridad privacidad compartir cifrado politica proteccion confianza",
        bloques: [
          { tipo: "texto", texto: "Sí. La información viaja **cifrada** y se usa solo para la evaluación de crédito con Banco Integral. El cliente autoriza su uso y puede leer las políticas de privacidad en la app." },
          { tipo: "decir", texto: "Sí, están seguros. Tu información se envía cifrada y se usa únicamente para tu evaluación de crédito con Banco Integral. Tú autorizas su uso y puedes ver las políticas de privacidad en la app." },
          { tipo: "pendiente", texto: "La política de privacidad para El Salvador está en revisión con ciberseguridad y legal de Banco Integral." }
        ] },
      { id: "qs-foto-video", titulo: "¿Por qué una foto y un video del negocio?",
        palabras: "foto video negocio por que evaluacion mostrar actividad",
        bloques: [
          { tipo: "texto", texto: "Muestran la **actividad real del negocio** y respaldan la evaluación del cliente." },
          { tipo: "decir", texto: "Nos ayuda a conocer tu negocio y respalda tu evaluación. Es como mostrarle a Banco Integral lo que haces." }
        ] },
      { id: "qs-a-quien", titulo: "¿A quién invito?",
        palabras: "a quien invitar cliente perfil existente nuevo piloto android segmento",
        bloques: [
          { tipo: "lista", items: [
            "A clientes **que ya son de Banco Integral**: en el piloto no se invita a clientes nuevos.",
            "Con celular **Android** que tenga **Play Store** e **internet**."
          ] },
          { tipo: "pendiente", texto: "Falta el perfil exacto del piloto (segmento, montos), que define Banco Integral." }
        ] },
      { id: "qs-celular", titulo: "¿En qué celular se instala?",
        palabras: "celular titular propio familiar android version play store compatible iphone chino",
        bloques: [
          { tipo: "lista", items: [
            "En el **celular del cliente**, el que usa a diario: la app lee los SMS de ese celular.",
            "Debe ser **Android** con **Play Store (Google Play)**. No funciona en **iPhone** ni en Android **sin Play Store**.",
            "Necesita **internet** para descargar la app y subir la foto y el video."
          ] },
          { tipo: "pendiente", texto: "En CFA, con la misma app, funciona desde **Android 6.0**. Confirmar con Tech para Banco Integral." }
        ] },
      { id: "qs-tiempo", titulo: "¿Cuánto tarda?",
        palabras: "cuanto tarda tiempo minutos duracion demora rapido",
        bloques: [
          { tipo: "texto", texto: "En la prueba completa tomó **unos 7 minutos**. El score se calcula **en segundos** al final." },
          { tipo: "decir", texto: "Son unos pocos minutos. Yo te acompaño en cada paso." }
        ] },
      { id: "qs-otras-dudas", titulo: "Otras dudas frecuentes del cliente",
        palabras: "objeciones dudas datos internet gasta consume celular lleno lento es de verdad banco integral no quiero dar datos",
        bloques: [
          { tipo: "tabla", columnas: ["Si el cliente dice…", "Puedes responder"], filas: [
            ["¿Esto me gasta datos?", "Usa poco. Subir la foto y el video es lo que más consume, pero es rápido. Si quieres, lo hacemos con Wi-Fi."],
            ["Mi teléfono está lleno o va lento.", "La app es liviana. Si quieres, liberamos un poco de espacio y la instalamos juntos."],
            ["¿Esto es de verdad de Banco Integral?", "Sí. Es la herramienta con la que Banco Integral evalúa a sus clientes MYPE. Por eso ves la marca del banco en la app."],
            ["No quiero dar tantos datos.", "Te entiendo. Solo pedimos lo necesario para evaluarte y tú decides. Todo lo que compartes está protegido."]
          ] }
        ] },
      { id: "qs-no-hacer", titulo: "Lo que nunca debes hacer",
        palabras: "no hacer prohibido contrasena clave llenar datos prometer aprobacion buscar app reglas",
        bloques: [
          { tipo: "lista", items: [
            "Pedir las **contraseñas** del cliente.",
            "Llenar sus datos **sin su consentimiento**.",
            "**Prometer aprobación** del crédito.",
            "Decirle que **busque la app por su cuenta**: siempre compartes tu QR."
          ] }
        ] }
    ] },

  { id: "paso-a-paso", nav: "Paso a paso", icono: "pasos", tipo: "temas",
    titulo: "Paso a paso",
    subtitulo: "La visita de un vistazo y cada pantalla en detalle, con lo que haces tú y lo que le dices al cliente.",
    resumen: { id: "recorrido", titulo: "La visita de un vistazo",
      palabras: "flujo proceso visita completo momentos orden etapas resumen recorrido",
      bloques: [
        { tipo: "momento", quien: "tu",      texto: "**Confirmas** que el celular del cliente es Android, con Play Store e internet." },
        { tipo: "momento", quien: "tu",      texto: "**Le muestras tu QR** para que instale Quipu Score." },
        { tipo: "momento", quien: "ambos",   texto: "**Revisan juntos la primera pantalla:** deben verse los logos de Banco Integral y Quipu Score." },
        { tipo: "momento", quien: "cliente", texto: "**Permite el acceso a sus SMS** (obligatorio) y acepta las políticas de privacidad." },
        { tipo: "momento", quien: "cliente", texto: "**Se registra:** nombre, DUI, celular con código de verificación y correo (opcional)." },
        { tipo: "momento", quien: "ambos",   texto: "**Foto y video del negocio**, tomados en el momento. Tú lo acompañas." },
        { tipo: "momento", quien: "cliente", texto: "**Instagram del negocio**, si lo tiene (opcional)." },
        { tipo: "momento", quien: "cliente", texto: "**Calculando tu score:** en segundos se envía a Banco Integral." },
        { tipo: "nota", titulo: "Tres reglas", texto: "**Tú compartes el QR**: el cliente nunca busca la app solo. **Explicas cada permiso** antes de que aparezca. **Acompañas la foto y el video.** El cliente hace todo en su propio celular." }
      ] },
    tituloLista: "Cada paso en detalle",
    temas: [
      { id: "antes-de-empezar", meta: "Antes de empezar", titulo: "Revisa el celular del cliente",
        palabras: "antes de empezar preparar checklist android iphone play store internet bateria espacio permisos",
        bloques: [
          { tipo: "lista", items: [
            "Celular **Android** con **Play Store** (no iPhone).",
            "**Señal**, datos móviles o Wi-Fi.",
            "**Batería** suficiente.",
            "**Espacio** de almacenamiento disponible."
          ] },
          { tipo: "decir", texto: "Vamos a usar tu celular unos minutos para instalar la app con la que Banco Integral evalúa tu crédito. Yo te acompaño en cada paso." },
          { tipo: "ver", id: "celulares", texto: "¿En qué celulares funciona?" }
        ] },
      { id: "paso-1-qr", meta: "Paso 1", titulo: "Comparte tu QR",
        palabras: "qr enlace link compartir escanear descargar instalar play store deep link",
        bloques: [
          { tipo: "pasos", items: [
            "Muéstrale **tu QR** al cliente para que lo escanee con la cámara de su celular.",
            "Que **instale la app** y la abra desde ahí."
          ] },
          { tipo: "decir", texto: "Escanea este código con la cámara de tu celular: así se instala la app de Banco Integral." },
          { tipo: "nota", titulo: "Nunca desde la búsqueda", texto: "En Play Store la app aparece como **Quipuscore**. Si el cliente la busca por su cuenta, no sale la marca de Banco Integral." },
          { tipo: "pendiente", texto: "Confirmar el canal para compartir el enlace: QR (como está escrito aquí), enlace por WhatsApp u otro. Falta también la captura de la pantalla con el QR." }
        ] },
      { id: "paso-2-bienvenida", meta: "Paso 2", titulo: "Bienvenida: revisa los dos logos",
        palabras: "bienvenida primera pantalla logos banco integral quipu score comencemos siguiente es muy facil comenzar onboarding",
        bloques: [
          { tipo: "texto", texto: "En la primera pantalla deben verse los logos de **Banco Integral y Quipu Score**. Si aparecen, el cliente toca **Comencemos**." },
          { tipo: "img", img: [ CAP("bi_cobrand", "Primera pantalla con los logos de Banco Integral y Quipu Score y el botón Comencemos", "Los dos logos: es la versión correcta") ] },
          { tipo: "ver", id: "app-sin-logo-bi", texto: "¿Cómo sé que instaló bien la app?" },
          { tipo: "texto", texto: "Luego pasan tres pantallas de bienvenida (**Siguiente**) y el resumen **“Es muy fácil”**, con los cuatro pasos del proceso. El cliente toca **Comenzar**." },
          { tipo: "img", img: [ CAP("bi_onboarding", "Pantalla Es muy fácil con cuatro pasos: permite el acceso a tus SMS, regístrate con tus datos, muestra tu actividad económica y tu score será enviado automáticamente", "“Es muy fácil”: el resumen que ve el cliente") ] },
          { tipo: "pendiente", texto: "¿Qué hace **Entrar como invitado** y debe evitarlo el cliente? Aparece en el recorrido del 22 ago, no en el Figma aprobado." }
        ] },
      { id: "paso-3-sms", meta: "Paso 3", titulo: "Permiso de SMS",
        palabras: "sms permiso permitir continuar no quiero continuar android ventana mensajes seguro obligatorio",
        bloques: [
          { tipo: "texto", texto: "La app explica para qué necesita los SMS. Es el momento clave: **explícale el beneficio antes** de que decida." },
          { tipo: "decir", texto: "La app revisa solo los mensajes de tu banco, de tus pagos y promociones, no tus conversaciones. Con eso Banco Integral puede evaluarte aunque no tengas historial." },
          { tipo: "pasos", items: [
            "En el aviso de la app, el cliente toca **Permitir y continuar**.",
            "Aparece la ventana de **Android**: ahí también toca **Permitir**."
          ] },
          { tipo: "img", img: [ CAP("bi_sms", "Aviso de Quipu Score que pide acceso a los SMS con los botones Permitir y continuar y No quiero continuar", "El aviso de la app; después viene la ventana de Android") ] },
          { tipo: "ver", id: "sms-no-quiere", texto: "El cliente no quiere dar el permiso de SMS" }
        ] },
      { id: "paso-4-politicas", meta: "Paso 4", titulo: "Políticas de privacidad",
        palabras: "politicas privacidad terminos condiciones casillas aceptar documentos tratamiento datos",
        bloques: [
          { tipo: "texto", texto: "Tres documentos que el cliente puede abrir y leer: términos y condiciones, protección de datos y autorización para el tratamiento de datos. Debe **marcar todas las casillas** para que se active **Continuar**." },
          { tipo: "img", img: [ CAP("bi_politicas", "Pantalla Políticas de privacidad con tres documentos y las casillas de aceptación", "Marca todas las casillas") ] }
        ] },
      { id: "paso-5-datos", meta: "Paso 5", titulo: "Datos de contacto y DUI",
        palabras: "datos contacto nombres apellidos dui tipo identificacion numero confirmar",
        bloques: [
          { tipo: "pasos", items: [
            "**Nombres** y **apellidos**.",
            "**Tipo de identificación:** DUI.",
            "**Número de DUI**, y luego **el mismo número otra vez** para confirmarlo."
          ] },
          { tipo: "img", img: [ CAP("bi_datos_dui", "Pantalla Datos de contacto con nombres, apellidos, tipo DUI y el número de DUI escrito dos veces", "El mismo número de DUI en los dos campos") ] },
          { tipo: "ver", id: "dui-no-avanza", texto: "“Continuar” no se activa (DUI)" }
        ] },
      { id: "paso-6-celular", meta: "Paso 6", titulo: "Celular y código de verificación",
        palabras: "celular numero codigo verificacion otp whatsapp sms 8 digitos 503 reenviar",
        bloques: [
          { tipo: "pasos", items: [
            "El cliente escribe los **8 dígitos** de su celular (el país ya es **El Salvador, +503**).",
            "Elige cómo recibir el código: **WhatsApp** o **SMS**.",
            "Escribe el **código de 6 dígitos** antes de que se acabe el tiempo."
          ] },
          { tipo: "img", img: [
            CAP("bi_celular", "Pantalla Ingresa tu número de celular con el prefijo +503 y los botones Recibir código por WhatsApp y por SMS", "Número de 8 dígitos y canal del código"),
            CAP("bi_codigo", "Pantalla Ingresa el código que te hemos enviado con seis casillas y las opciones Reenviar código y Cambiar número de teléfono", "El código de 6 dígitos")
          ] },
          { tipo: "ver", id: "codigo-no-llega", texto: "No le llega el código" }
        ] },
      { id: "paso-7-correo", meta: "Paso 7 · Opcional", titulo: "Correo electrónico (opcional)",
        palabras: "correo email electronico confirmar opcional no tiene saltar",
        bloques: [
          { tipo: "texto", texto: "El correo es **opcional**: si el cliente no tiene, sigue sin él. Si lo tiene, lo escribe **dos veces**, igual, y que sea uno al que tenga acceso." },
          { tipo: "img", img: [ CAP("bi_correo", "Pantalla Ingresa tu correo electrónico con el correo escrito y confirmado", "Opcional. Si tiene correo: el mismo en los dos campos") ] },
          { tipo: "ver", id: "correo", texto: "El cliente no tiene correo: puede seguir sin él" }
        ] },
      { id: "paso-8-foto-video", meta: "Paso 8", titulo: "Foto y video del negocio",
        palabras: "foto video negocio camara tomar grabar iluminacion vertical minuto consejos tips muestra lo que haces",
        bloques: [
          { tipo: "texto", texto: "En **“Muestra lo que haces cada día”** aparecen la **foto** y el **video** del negocio como pendientes. Al completar cada uno, se marca con un ✓. Acompaña al cliente: es la parte que más cuesta." },
          { tipo: "img", img: [ CAP("bi_menu_foto_video", "Pantalla Muestra lo que haces cada día con Foto de tu negocio y Video de tu negocio pendientes", "Foto y video, uno por uno") ] },
          { tipo: "titulo", texto: "La foto" },
          { tipo: "lista", items: [
            "Del producto, el servicio, el espacio de trabajo o las herramientas.",
            "Con **buena iluminación** y **sin movimientos bruscos**, para que no salga borrosa.",
            "Se toma con **Tomar foto con la cámara**. La primera vez, Android pide permiso para usar la cámara."
          ] },
          { tipo: "img", img: [ CAP("bi_foto", "Pantalla Foto con las indicaciones y los botones Tomar foto con la cámara y Subir foto desde la galería", "Toca “Tomar foto con la cámara”") ] },
          { tipo: "titulo", texto: "El video" },
          { tipo: "lista", items: [
            "**Vertical** y de **un minuto**.",
            "El cliente sale en cámara contando **la historia de su negocio y de sus productos**.",
            "Que muestre **lo que vende y cómo lo hace**.",
            "Se graba con **Grabar video con la cámara**. La subida puede tardar un poco."
          ] },
          { tipo: "img", img: [ CAP("bi_video", "Pantalla Video del negocio con las indicaciones y el botón Grabar video con la cámara", "Toca “Grabar video con la cámara”") ] },
          { tipo: "decir", texto: "Cuéntanos en un minuto qué vendes y cómo trabajas. Muéstranos tu negocio como se lo mostrarías a un cliente." },
          { tipo: "ver", id: "video-como", texto: "Cómo grabar bien el video" },
          { tipo: "ver", id: "video-tarda", texto: "El video se demora mucho cargando" }
        ] },
      { id: "paso-9-redes", meta: "Paso 9 · Opcional", titulo: "Redes sociales (opcional)",
        palabras: "instagram redes sociales conectar opcional no tengo enlace perfil",
        bloques: [
          { tipo: "texto", texto: "Si el cliente tiene **Instagram del negocio**, toca **Conectar mi Instagram** o pega el enlace de su perfil. Si no, toca **No tengo redes sociales**: no afecta el proceso." },
          { tipo: "img", img: [ CAP("bi_redes", "Pantalla Redes sociales con Conectar mi Instagram y No tengo redes sociales", "Opcional: “No tengo redes sociales” también sirve") ] }
        ] },
      { id: "paso-10-final", meta: "Paso 10", titulo: "Calculando y ¡Todo listo!",
        palabras: "calculando score todo listo final enviado banco integral resultado redirigido",
        bloques: [
          { tipo: "texto", texto: "La app calcula el score en **unos segundos** y muestra **“¡Todo listo!”**: el score ya se envió a **Banco Integral**." },
          { tipo: "img", img: [
            CAP("bi_calculando", "Pantalla Calculando tu score: esto solo tomará unos segundos", "Calculando: solo unos segundos"),
            CAP("bi_todo_listo", "Pantalla Todo listo: tu score fue enviado; pronto serás redirigido a Banco Integral", "¡Todo listo!: el score está en Banco Integral")
          ] },
          { tipo: "decir", texto: "Listo, tu información ya está en Banco Integral. La app no aprueba el crédito: el banco sigue con el proceso." },
          { tipo: "pendiente", texto: "Falta definir qué pasa después: si el cliente ve un preaprobado en el momento o el banco lo procesa después." }
        ] }
    ] }
];

/* Filtros dentro de "Soluciones" (en este orden). Usan las CATEGORIAS de arriba. */
const FILTROS = ["instalacion", "registro", "permisos", "media", "resultado", "cliente"];
