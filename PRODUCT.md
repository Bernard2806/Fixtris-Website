# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Vecinos de Chivilcoy (Buenos Aires) con un equipo que falla, que entran al sitio desde el celular y terminan escribiendo por WhatsApp. Tres grupos, sin uno que mande sobre los otros:

- **Familias y estudiantes:** netbooks del gobierno (Conectar Igualdad, Juana Manso) bloqueadas y notebooks de la casa. Quieren saber si tiene arreglo, cuánto sale y que se lo resuelva alguien de confianza.
- **Gamers:** consolas con drift, que se recalientan o con la lectora rota, liberación de PS3, mantenimiento y armado de PC.
- **Comercios y oficinas:** equipos de trabajo que no pueden quedar parados mucho tiempo.

## Product Purpose

Sitio de Fixtris Computer, un servicio técnico de computadoras, notebooks, netbooks, PC de escritorio y consolas. Le sirve al visitante para entender qué se arregla, cuánto sale y cómo es el proceso, y para escribir por WhatsApp sin dudar. El éxito es un mensaje de WhatsApp de alguien que ya sabe qué esperar en precio, plazo y condiciones.

## Positioning

- **Precio claro antes de tocar nada:** primero hay diagnóstico y presupuesto (precio, plazo y forma de pago) y no se avanza sin el OK del cliente.
- **Precios publicados:** lista pública cargada en dólares y mostrada en pesos al dólar MEP del día, para que no quede vieja con la inflación.
- **Netbooks del gobierno:** el desbloqueo de Conectar Igualdad y Juana Manso es el trabajo que más se pide.
- **Trato directo:** atiende y repara el dueño en persona, por WhatsApp y con un lenguaje simple.

## Operating Context

- El contacto es por WhatsApp (botón principal y botón flotante); también hay teléfono y correo. Nada de formularios.
- Proceso en cuatro pasos: nos contás qué pasa, diagnóstico y presupuesto, reparación, retirás el equipo con el detalle de lo hecho y la garantía por escrito.
- Formas de pago según el trabajo: seña del 50 %, todo al terminar, o repuestos por cuenta del cliente.
- Condiciones: sin acuerdo de pago no se empieza; los equipos no retirados dentro de los 90 días del aviso se consideran abandonados, previo borrado del disco por software.
- Horario: lunes a viernes de 9 a 18 h, sábados de 9 a 13 h.

## Capabilities and Constraints

- Sitio estático en Astro, publicado en GitHub Pages bajo `/Fixtris-Website/`, que se recompila todos los días para refrescar la cotización. Toda ruta interna pasa por `ruta()`.
- Textos y datos del negocio en `src/data/site.ts`. La lista de precios guarda montos en USD y tiene una cotización de respaldo por si la API del dólar falla al compilar.
- Se consulta sobre todo desde el celular: mobile first, verificado en 360–412 px.
- No se hacen trabajos que requieran microsoldadura; no se los ofrece.
- Español rioplatense con voseo.
- **Sin decidir:** si se publica una dirección del taller. El texto menciona "el taller", pero hoy el sitio no muestra dirección.
- **Pendiente:** las preguntas frecuentes llevan un TODO para confirmar plazos y políticas antes de darlas por definitivas.

## Brand Commitments

- Nombre: Fixtris Computer. Los logos de la marca son lo único dibujado a mano (`public/brand/`, `public/favicon.svg`).
- Manual de marca: paleta azul `#0aa3d3`, ámbar reservado para acciones, Quicksand en títulos y system-ui en textos. La ruta de referencia en AGENTS.md (`/home/bernardo/Desarrollo/Logo-Fixtris/`) no está en esta máquina.
- Íconos solo de librerías (Heroicons para la interfaz, Simple Icons para logos de terceros), mediante `Icono.astro`, todos del mismo tamaño.
- Voz: cercana y directa, con voseo y sin jerga técnica innecesaria. El sitio habla en plural ("arreglamos", "te decimos") aunque trabaja una sola persona; se mantiene así.
- Sección aparte para MateLogic, el otro emprendimiento del dueño (software a medida).

## Evidence on Hand

- Lista real de servicios, precios, pasos, formas de pago y preguntas frecuentes en `src/data/site.ts`.
- Contacto real: WhatsApp +54 9 2346 40-9771, correo y zona (Chivilcoy).
- **No hay:** reseñas, testimonios, fotos de trabajos ni del taller, cantidad de clientes ni años de experiencia. No inventar nada de esto ni simularlo con textos de relleno.

## Product Principles

1. **La claridad vende:** precio, plazo y condiciones se ven antes de escribir. Ocultar información para forzar la consulta va en contra de la marca.
2. **WhatsApp es el destino:** cada sección acerca a escribir por WhatsApp, sin pasos de más.
3. **Primero el celular:** si algo no se entiende o no se toca bien a 360 px, no está terminado.
4. **Honestidad sobre lo que se hace:** se ofrece solo lo que se hace de verdad y se dice cuándo algo no tiene arreglo.
5. **Cerca y en persona:** suena como el técnico que te atiende, no como una cadena.

## Accessibility & Inclusion

Público general (familias, estudiantes, comercios) con distinto manejo de la tecnología: lenguaje simple y botones grandes, fáciles de tocar en el celular. No se definió un estándar formal; se toma WCAG 2.2 AA como piso (inferido, sin confirmar).
