---
name: Fixtris Computer
description: Servicio técnico de Chivilcoy con la placa a la vista, oscuro, preciso y con una pieza ámbar que encaja.
colors:
  azul-pista: "#0aa3d3"
  azul-brillo: "#06bbf1"
  azul-cielo: "#5acfff"
  azul-hielo: "#cfefff"
  azul-hondo: "#016a8b"
  azul-abismo: "#01394c"
  azul-noche: "#00212f"
  ambar-pieza: "#ffb020"
  ambar-claro: "#ffc762"
  ambar-tostado: "#f19100"
  placa-base: "#041118"
  placa-alt: "#081b23"
  placa-tarjeta: "#122730"
  placa-borde: "#22363f"
  barra-scroll: "#01070a"
  texto-placa: "#d5e2e7"
  suave-placa: "#9aaeb6"
  papel: "#f1f6f8"
  papel-borde: "#cddae0"
  texto-papel: "#122730"
  suave-papel: "#4a585e"
  blanco: "#ffffff"
typography:
  display:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 5.6vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
  numero:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  intro:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.2
  nota:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  pieza: "6px"
  icono: "8px"
  tarjeta: "10px"
  pastilla: "999px"
spacing:
  junta: "6px"
  margen: "clamp(1rem, 4vw, 2.5rem)"
  seccion: "clamp(4.5rem, 10vw, 8rem)"
  ancho: "74rem"
  icono: "1.5rem"
components:
  button-accion:
    backgroundColor: "{colors.ambar-pieza}"
    textColor: "{colors.azul-noche}"
    typography: "{typography.label}"
    rounded: "{rounded.pieza}"
    padding: "0.7rem 1.4rem"
    height: "3rem"
  button-accion-hover:
    backgroundColor: "{colors.ambar-claro}"
    textColor: "{colors.azul-noche}"
  button-secundario:
    backgroundColor: "transparent"
    textColor: "{colors.blanco}"
    typography: "{typography.label}"
    rounded: "{rounded.pieza}"
    padding: "0.7rem 1.4rem"
    height: "3rem"
  pieza:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.suave-papel}"
    rounded: "{rounded.pieza}"
    padding: "clamp(1.25rem, 2.5vw, 1.75rem)"
  pieza-honda:
    backgroundColor: "{colors.azul-hondo}"
    textColor: "{colors.azul-hielo}"
    rounded: "{rounded.pieza}"
    padding: "clamp(1.25rem, 2.5vw, 1.75rem)"
  tarjeta:
    backgroundColor: "{colors.placa-alt}"
    textColor: "{colors.texto-placa}"
    rounded: "{rounded.tarjeta}"
    padding: "1.5rem"
  canal-principal:
    backgroundColor: "{colors.ambar-pieza}"
    textColor: "{colors.azul-noche}"
    rounded: "{rounded.tarjeta}"
    padding: "0.9rem 1.25rem"
    height: "5.5rem"
  canal:
    backgroundColor: "{colors.placa-alt}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.tarjeta}"
    padding: "0.9rem 1.25rem"
    height: "4.5rem"
  whatsapp-flotante:
    backgroundColor: "{colors.ambar-pieza}"
    textColor: "{colors.azul-noche}"
    rounded: "{rounded.pastilla}"
    padding: "0 1.15rem 0 1rem"
    height: "3.25rem"
  nav-link:
    textColor: "{colors.texto-placa}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.azul-cielo}"
---

# Design System: Fixtris Computer

## Overview

**Creative North Star: "La placa a la vista"**

Fixtris se ve como un equipo abierto sobre la mesa del técnico: fondo oscuro de placa, pistas azules que conectan las partes, bloques que encajan en una grilla exacta y una sola pieza ámbar, la que arregla. Todo sale del logo, que es un chip con una pieza en T que cae para completar la línea. El sitio repite esa idea en el damero de servicios, en la pista de circuito que une los pasos, en el punto en bloque del título y en el isotipo grande del hero.

El carácter es **lúdico y preciso, cercano y directo, nocturno y técnico, claro y honesto**. Lo lúdico vive en los detalles: la pieza que se puede encajar, el bloque al final del título. La precisión la pone la grilla. Lo nocturno es el estado por defecto, y los tramos claros (servicios, preguntas) son como abrir la tapa y prender la luz para leer con calma. La honestidad es visual: los precios se leen de un vistazo, en la misma línea que el servicio, sin letra chica ni efectos que distraigan.

La densidad es media y pensada para el pulgar. El sitio se lee sobre todo en celulares de 360 a 412 px, así que cada patrón de escritorio tiene su versión de una columna resuelta a propósito, no solo apilada.

**Key Characteristics:**
- Oscuro por defecto (`color-scheme: dark`), con dos secciones claras que marcan el ritmo.
- Un azul de marca con su escala completa y un ámbar reservado para actuar.
- Grilla de 6 columnas en la que cada fila se completa, como una línea del juego.
- Plano: la profundidad sale del cambio de tono, no de sombras.
- Quicksand redondeada en títulos, botones y montos; system-ui en el texto corrido.
- Íconos de librería, todos de 24 px.

## Colors

Una placa azul petróleo casi negra, un azul eléctrico que la recorre y un ámbar cálido que aparece solo donde se actúa.

### Primary
- **Azul Pista** (`azul-pista`): el color de la marca, el de las pistas del circuito. Pinta la línea que une los pasos, los nodos y las celdas del chip. Se usa en trazos y en superficies chicas, no en fondos grandes.
- **Azul Brillo** (`azul-brillo`): la variante encendida. Va en el punto en bloque del título, en el borde izquierdo del aviso de compromiso y en el degradé de la llave.
- **Azul Cielo** (`azul-cielo`): el azul que se lee sobre la placa oscura. Lo usan los enlaces, el anillo de foco, el hover de la navegación, los títulos de categoría de precios, los números de los pasos, el borde del botón secundario y los íconos dentro de su recuadro.
- **Azul Hondo** (`azul-hondo`): el azul de las secciones claras. Lo usan los enlaces y el foco sobre papel, el hover y el signo de las preguntas, y el fondo de las piezas oscuras del damero.
- **Azul Hielo** (`azul-hielo`): el texto sobre Azul Hondo.
- **Azul Abismo** (`azul-abismo`) y **Azul Noche** (`azul-noche`): los fondos más profundos. Azul Noche es la junta del damero y el recuadro de los íconos, el texto sobre ámbar y el título en las secciones claras.

### Secondary
- **Ámbar Pieza** (`ambar-pieza`): la pieza que encaja. Es el fondo de toda acción (botón principal, canal de WhatsApp, botón flotante, enlace para saltar al contenido) y marca el último nodo de los pasos, cuando retirás tu compu.
- **Ámbar Claro** (`ambar-claro`): el hover de toda superficie ámbar y el inicio del degradé de la pieza.
- **Ámbar Tostado** (`ambar-tostado`): el final del degradé de la pieza en T. No se usa solo.

### Neutral
- **Placa Base** (`placa-base`): el fondo de la página, del hero, de precios, de contacto y del pie. También es el `theme-color`.
- **Placa Alt** (`placa-alt`): un escalón más claro para las sección alterna (proceso) y el fondo de las tarjetas de precio, formas de pago y canales.
- **Placa Tarjeta** (`placa-tarjeta`): el escalón siguiente, para el hover de los canales.
- **Placa Borde** (`placa-borde`): todos los bordes y divisores de 1 px sobre fondo oscuro.
- **Barra con scroll** (`barra-scroll`): el negro casi puro de la barra fija al bajar, más oscuro que la página para separarse de ella.
- **Texto Placa** (`texto-placa`) y **Suave Placa** (`suave-placa`): el texto corrido y el texto secundario sobre fondo oscuro. Los títulos van en blanco.
- **Papel** (`papel`), **Papel Borde** (`papel-borde`), **Texto Papel** (`texto-papel`) y **Suave Papel** (`suave-papel`): las mismas funciones en las secciones claras. Ahí las piezas del damero son blancas.

### Named Rules
**La Regla de la Pieza Ámbar.** El ámbar es la pieza que arregla: se usa solo en acciones y en la pieza del logo. No sirve para decorar ni para avisar. El aviso de compromiso, aunque importa, va con borde azul justamente para no competir con los botones.

**La Regla del Azul por Fondo.** Sobre la placa oscura los enlaces, el foco y los acentos van en Azul Cielo. Sobre papel van en Azul Hondo. Nunca se intercambian.

**La Regla de los Temas.** Cada sección declara su tema (`tema-oscuro`, `tema-oscuro tema-alt` o `tema-claro`) y los componentes toman `--fondo`, `--texto`, `--suave`, `--titulo`, `--linea` y `--enlace` de ahí. Un componente nuevo no fija colores de texto a mano.

## Typography

**Display Font:** Quicksand 500 y 700 (con system-ui, sans-serif)
**Body Font:** system-ui (con -apple-system, Segoe UI, Roboto, sans-serif)

**Character:** Quicksand tiene las terminaciones redondeadas del logo y le da a los títulos un tono amable, casi de juego. Las fuentes del sistema leen rápido y no pesan nada en un celular de gama baja. Quicksand se carga con la API de fuentes de Astro, con precarga, solo en 500 y 700.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 5.6vw, 4.6rem)`, interlineado 1, -0.025em): solo el título del hero, que termina en un bloque Azul Brillo en lugar de punto. En escritorio con pantalla baja (alto de 820 px o menos) se compacta a `clamp(2.75rem, 4.6vw, 3.9rem)` para que el botón de WhatsApp se vea sin bajar.
- **Headline** (700, `clamp(2rem, 4.2vw, 3.1rem)`, 1.08, -0.015em): el título de cada sección, con `text-wrap: balance`.
- **Title** (700, 1.25rem, 1.25): títulos de pieza, tarjeta y forma de pago. Las preguntas frecuentes suben a 1.1875rem/1.35, y en el menú del celular los enlaces van a 1.5rem.
- **Número** (700, 3rem en escritorio y 2.25rem en celular): los números de los pasos, en Azul Cielo.
- **Body** (400, 1.0625rem, 1.6): todo el texto corrido, con `text-wrap: pretty`. El ancho de línea se limita con `max-width` entre 22rem y 46rem según el bloque.
- **Intro** (400, 1.125rem): la bajada bajo cada título de sección, en color suave y con un máximo de 34rem.
- **Label** (Quicksand 700, 1.0625rem, 1.2): botones, nombres de servicio en precios y enlaces de navegación (estos en 500 y 1rem). Los montos van en Quicksand 700 a 1.25rem, sin cortar línea.
- **Nota** (400, 0.9375rem): aclaraciones, detalles de precio, cantidades y el pie.

### Named Rules
**La Regla de los Números Redondos.** Precios, montos y números de paso van siempre en Quicksand 700. Son lo primero que busca el visitante y tienen que leerse como títulos.

**La Regla del Bloque Final.** El título del hero termina en un cuadrado de 0.17em, igual que los puntos de las íes del logo. Es un detalle de firma: no se repite en cada título.

## Layout

El contenido vive en un contenedor de 74rem centrado, con margen lateral `clamp(1rem, 4vw, 2.5rem)`. Las secciones tienen un aire vertical de `clamp(4.5rem, 10vw, 8rem)`. El título y la bajada van arriba a la izquierda y el contenido de la sección empieza `clamp(2.5rem, 5vw, 3.5rem)` más abajo.

El ritmo de la página alterna temas: hero oscuro, servicios claro, proceso oscuro alterno, precios oscuro, preguntas claro, contacto oscuro y pie oscuro. La página termina en contacto: el pie cierra con la marca y no repite los datos.

Patrones de grilla:
- **Servicios:** 6 columnas con juntas de 6 px sobre Azul Noche. Cada servicio ocupa 2, 3 o 4 columnas y cada fila suma 6.
- **Precios:** dos columnas tipo mampostería (`columns: 2`) para que las categorías de distinto alto no dejen huecos.
- **Proceso:** cuatro columnas unidas por una pista horizontal. En celular la pista pasa a ser vertical, a la izquierda, con los nodos sobre ella.
- **Preguntas y contacto:** dos columnas asimétricas (0.8/1.2 y 1/1).

Cortes de pantalla: 1080 px (la navegación pasa a hamburguesa), 960 px (el hero pasa a una columna), 860 px (todo lo demás pasa a una columna y aparece el WhatsApp flotante), 640 px y 480 px para ajustes finos. En celular el orden sigue a la acción: en contacto los canales van antes que el horario, y en el hero los dos botones ocupan todo el ancho y tienen el mismo alto (3.5rem).

### Named Rules
**La Regla de la Línea Completa.** En la grilla de servicios cada fila suma 6 columnas, como una línea del juego que se limpia. Un servicio nuevo se suma revisando los anchos de su fila.

**La Regla del Pulgar.** Todo lo que se toca mide al menos 3rem de alto (3.5rem en el menú y los botones del hero en celular, 4rem en los enlaces del menú) y deja el espacio del área segura del teléfono.

## Elevation & Depth

El sistema es plano. La profundidad sale de escalonar el tono de la placa (Base, Alt, Tarjeta) y de los bordes de 1 px en Placa Borde, no de sombras. Hay luz de ambiente, pero no relieve: degradés radiales muy tenues de azul detrás del hero y de ámbar detrás del bloque de contacto, como el brillo de un equipo encendido.

### Shadow Vocabulary
- **Barra flotando** (`box-shadow: 0 8px 24px rgb(0 0 0 / 0.35)`): solo en la barra fija cuando la página ya bajó.
- **Botón flotando** (`box-shadow: 0 6px 20px rgb(0 0 0 / 0.35)`): solo en el WhatsApp flotante del celular.

### Named Rules
**La Regla Plana.** Las superficies son planas en reposo y en hover. La sombra queda para lo que flota sobre la página mientras se hace scroll. Una tarjeta nueva se separa del fondo subiendo un escalón de placa o con un borde, nunca con una sombra.

## Shapes

Las formas son firmes y encastrables: esquinas apenas redondeadas y bordes netos, como piezas que calzan en la grilla. La escala de radios es corta: 6 px para botones y piezas del damero; 8 px para el recuadro de los íconos; 10 px para tarjetas, la grilla de servicios y los canales. La única forma totalmente redonda es la pastilla del WhatsApp flotante, que es la excepción porque flota. Los círculos se reservan para los nodos de la pista.

Las celdas del chip usan un radio del 15 % de su lado, el mismo del logo.

### Named Rules
**La Regla de la Junta.** Donde las piezas se tocan, la separación es una junta fija de 6 px sobre Azul Noche, no un `gap` de aire. Así el damero se lee como un solo bloque armado.

## Components

### Buttons
Firmes, con bordes netos y siempre con texto en Quicksand 700.
- **Shape:** esquinas apenas redondeadas (6 px), borde de 2 px (transparente salvo en el secundario), alto mínimo de 3rem y separación de 0.6rem entre ícono y texto.
- **Acción:** fondo Ámbar Pieza y texto Azul Noche. Se usa para escribir por WhatsApp y para cualquier paso que lleve a contactar.
- **Hover / Focus:** pasa a Ámbar Claro con una transición de color de 0.15 s. El foco es un contorno de 3 px en Azul Cielo con 3 px de separación (Azul Hondo en secciones claras).
- **Secundario:** fondo transparente, borde de 2 px en Azul Cielo y texto blanco. En hover se rellena con un 14 % de Azul Cielo. Va al lado del botón de acción, nunca solo como acción principal.
- **Cabecera:** el botón de acción en versión compacta (alto de 2.6rem y 0.9375rem), sin ícono en escritorio.

### Cards / Containers
- **Corner Style:** 10 px.
- **Background:** Placa Alt sobre Placa Base.
- **Shadow Strategy:** ninguna (ver la Regla Plana).
- **Border:** 1 px en Placa Borde.
- **Internal Padding:** 1.5rem en las formas de pago y 1.25rem en las categorías de precio.
- **Aviso de compromiso:** borde de 1 px en Azul Hondo, borde izquierdo de 4 px en Azul Brillo y fondo con un 10 % de Azul Pista sobre la placa. Es la única tarjeta "importante" y no usa ámbar.

### Navigation
- **Escritorio:** barra fija de 5.5rem que al bajar se reduce a 4.5rem, se oscurece a Barra con scroll y suma un borde inferior y la sombra Barra flotando (0.25 s). Los enlaces van en Quicksand 500, 1rem, Texto Placa, y en hover pasan a Azul Cielo. Termina con el botón de acción compacto.
- **Celular (≤1080 px):** botón hamburguesa de 48 px (Heroicons `bars-3`, que pasa a `x-mark`). Abre un panel a pantalla completa en Placa Base que aparece con opacidad y un desplazamiento de 0.75rem (0.2 s). Los enlaces van apilados, de 4rem de alto, en Quicksand 700 de 1.5rem, separados por líneas, y abajo va el botón de acción de 3.5rem con ícono.

### Damero de servicios (firma)
La grilla de servicios es la línea del juego. Las piezas son blancas o Azul Hondo y se alternan en damero, fila por fila. Se calcula en el componente y no se carga a mano. Cada pieza tiene un alto mínimo de 11rem y ocupa 2, 3 o 4 columnas. En celular pasa a una columna y la alternancia es de a uno.

Cada pieza termina en un enlace "Ver precios" (Quicksand 700, 1rem, subrayado de 2 px y flecha de Heroicons) que lleva a su categoría de la lista de precios y la abre. Siempre queda al pie de la pieza, alineado en toda la fila. A la vista es chico, pero se toca en 3rem de alto. Va en Azul Hondo sobre las piezas blancas y en blanco sobre las piezas Azul Hondo, y el anillo de foco cambia igual.

### Precio en el hero
Debajo de la bajada, una línea de texto común dice cuánto sale el diagnóstico. El monto va en Quicksand 700 a 1.25rem, en blanco, con un subrayado Azul Brillo que lleva a la lista de precios. Es un dato dentro de la frase, no una cifra destacada aparte.

### Lista de precios
Una categoría con un solo precio (el diagnóstico) es una tarjeta fija que siempre está abierta, sin signo ni cantidad. Las demás categorías son un `<details>` tipo tarjeta, con el título en Azul Cielo, la cantidad de servicios en tono suave y un signo + que gira 45° hasta ser una × al abrirse (0.25 s). Toda la cabecera de la tarjeta se toca, a todo el ancho y con al menos 3rem de alto: el relleno va en el `summary`, no en la tarjeta. Cada fila pone el servicio (Quicksand 700) y el monto (Quicksand 700, 1.25rem, sin cortar) en la misma línea base, con el detalle debajo a todo el ancho y un divisor de 1 px entre filas.

### Canales de contacto
Filas grandes, de 4.5rem, con un recuadro de ícono de 44 px (fondo Azul Noche, ícono Azul Cielo), un título en Quicksand y el dato en tono suave. WhatsApp es el canal principal: mide 5.5rem, va con fondo Ámbar Pieza y su ícono pasa a Ámbar Claro sobre Azul Noche. Los demás canales, en hover, pasan a Placa Tarjeta con borde en Azul Pista oscuro.

### Pista de pasos (firma)
Una pista de 4 px en Azul Pista, que se desvanece al final, une nodos circulares de 22 px con borde de 4 px. El último nodo es Ámbar Pieza, porque es el momento en que el equipo vuelve arreglado.

### Isotipo del hero (firma)
El logo grande, quieto, al lado del texto del hero: el chip con la llave cruzada detrás y una grilla de 6 × 6 donde la pieza en T (degradé de Ámbar Claro a Ámbar Tostado) cae sobre un hueco marcado con un contorno ámbar. Es decorativo (oculto para lectores de pantalla) y no tiene controles ni animación. Mide hasta 25rem (o 60 % del alto de la pantalla) en escritorio y 14.5rem en celular.

### WhatsApp flotante
Pastilla ámbar de 3.25rem con el logo de WhatsApp (Simple Icons) y texto en Quicksand 700. Aparece solo en celular, deslizándose desde abajo (0.25 s) cuando el botón principal del hero sale de la pantalla. Se esconde otra vez sobre la sección de contacto y el pie, y respeta el área segura del teléfono.

### Pie
Cierra con la marca: el logo, una línea de qué se arregla y, separada por un divisor de 1 px, la mención de MateLogic (enlace en Quicksand 700, tocable en 3rem) y el ©. No repite los datos de contacto, que están justo arriba.

### Íconos
Todos pasan por un único componente y miden 24 px, la grilla nativa de Heroicons: Heroicons de contorno para la interfaz y Simple Icons para logos de terceros. Dentro de tarjetas y canales van en un recuadro de 44 px con radio de 8 px.

## Do's and Don'ts

### Do:
- **Do** reservar Ámbar Pieza para acciones y para la pieza del logo, con Azul Noche como color de texto encima.
- **Do** declarar el tema de cada sección nueva (`tema-oscuro`, `tema-alt` o `tema-claro`) y respetar la alternancia de oscuros y claros de la página.
- **Do** completar cada fila de la grilla de servicios hasta 6 columnas.
- **Do** separar las superficies subiendo un escalón de placa (Base, Alt, Tarjeta) o con un borde de 1 px en Placa Borde.
- **Do** poner precios, montos y números en Quicksand 700.
- **Do** usar íconos de Heroicons o Simple Icons a 24 px, a través del componente de íconos.
- **Do** diseñar primero para 360–412 px: una columna, botones de ancho completo y mismo alto, y la acción antes que la información secundaria.
- **Do** respetar `prefers-reduced-motion`: las transiciones y animaciones se anulan y el scroll deja de ser suave.

### Don't:
- **Don't** usar el ámbar para avisos, etiquetas, decoración o fondos grandes.
- **Don't** agregar sombras a tarjetas, piezas o botones en reposo o en hover. La sombra es solo para la barra fija y el botón flotante.
- **Don't** dibujar íconos SVG a mano. Lo único dibujado a mano son los logos de Fixtris.
- **Don't** usar radios mayores a 10 px en componentes comunes ni formas de pastilla, salvo el WhatsApp flotante.
- **Don't** poner Azul Cielo sobre fondo claro ni Azul Hondo como acento sobre la placa oscura.
- **Don't** convertir el logo en un juego ni sumarle controles: el isotipo del hero es solo el logo.
- **Don't** usar formularios de contacto ni selectores tipo chip. El contacto se hace con botones directos (WhatsApp, llamar, correo).
- **Don't** mostrar reseñas, fotos o cifras de relleno para simular prueba social.
