---
target: src/pages/index.astro
total_score: 19
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 2
target_identity: "file:/mnt/GamesHDD/Desarrollo/Private-Repos/Fixtris-Website/src/pages/index.astro"
target_fingerprint: "sha256:21dec4a6a2498d69f39d4f4087576c93a56eaf9030824107e085a05a7939831f"
target_path: /mnt/GamesHDD/Desarrollo/Private-Repos/Fixtris-Website/src/pages/index.astro
timestamp: 2026-11-08T03-56-51Z
slug: src-pages-index-astro
---
Method: dual-agent (A: revisión de diseño · B: detector y navegador). Escritorio 1360 px; celular 360/390 px simulado en iframe.

## Puntaje de diseño
| # | Heurística | Puntaje | Problema principal |
|---|---|---|---|
| 1 | Visibilidad del estado | 3 | Fecha de precios y estados de acordeón bien; si falla la API del dólar se muestra fecha vieja sin aviso |
| 2 | Lenguaje del usuario | 3 | Voseo claro; "Por BIOS", "pasta térmica", "liberación" sin explicar |
| 3 | Control y libertad | 3 | Menú, anclas y acordeones bien; categorías de precio cerradas en celular |
| 4 | Consistencia | 3 | Misma acción con tres nombres: "Pedir presupuesto", "Escribinos por WhatsApp", "WhatsApp" |
| 5 | Prevención de errores | 2 | Descuento del diagnóstico solo en FAQ; "el taller" sin dirección; plazo con TODO |
| 6 | Reconocer antes que recordar | 2 | "Lo encontrás en la sección de precios" sin enlace; filas de precio sin acción |
| 7 | Flexibilidad | n/a | Persuade, un solo camino |
| 8 | Estética y minimalismo | 3 | Coherente; en celular chip decorativo y servicios empujan precios a 6+ pantallas |
| 9 | Recuperación de errores | n/a | Sin formularios |
| 10 | Ayuda | n/a | FAQ evaluada en 5 y 6 |
| Total | | 19/28 (68 %) | Aceptable |

## Especificidad
Hecha para Fixtris ("La placa a la vista": chip jugable, damero, pista, ámbar solo en acciones). Genérica en la estructura de secciones; diferenciales (precios publicados, netbooks) enterrados.
Detector CLI: 11 avisos (1 warning side-tab, 10 advisory). 6 falsos positivos documentados en DESIGN.md. 5 desvíos reales: radio 12px Chip.astro:130; color #1a3540 Chip.astro:273; tamaños 1.5rem Precios.astro:206, 1.3rem Contacto.astro:177, 0.875rem Chip.astro:291.
Overlay escritorio: icon-tile-stack x3 (formas de pago), side-tab y line-length ~87 en .compromiso, bounce-easing, shape-assembled-illustration (FP), dark-glow (FP).
Medidas: sin desborde a 360; contraste texto suave 6.7–8.3:1; summaries de categorías de precio 26 px de alto (5/26 elementos < 44 px).

## Lo que funciona
1. Lista de precios: servicio y monto en la misma línea, fecha de actualización, pesos al MEP diario.
2. Coreografía de WhatsApp en celular: botón de ancho completo, flotante solo cuando sale el del hero, canales antes que horario.
3. Marca sobria: ámbar solo en acciones, plano, identidad por estructura.

## Problemas prioritarios
- [P1] Precios lejos y diagnóstico escondido en celular (Precios.astro:56-62 cierra todo; "Ver servicios" en hero). Fix: diagnóstico cerca del CTA, "Ver precios", categoría de un precio abierta, "ver precio" por servicio. Comando: layout + clarify.
- [P1] Datos que chocan o faltan: descuento del diagnóstico solo en FAQ; "Pedir presupuesto" (Cabecera.astro:59); "el taller" sin dirección; sin medios de pago; plazo con TODO. Comando: clarify.
- [P2] Aviso de compromiso suena a amenaza (título, mano en alto, "abandonados"; side-tab, icon-tile, 87 caracteres; flotante tapa la última línea). Fix: acuerdo en viñetas, ícono neutro, sin franja, aire abajo. Comando: clarify + polish.
- [P2] Categorías de precio tocables en 26 px (padding en .categoria, no en summary; Precios.astro:103-116). Fix: padding y min-height 3rem en summary. Comando: harden.
- [P3] Página termina en MateLogic; pie sin contacto; flotante reaparece en pie; chip de ~400 px en celular. Comando: distill.

## Personas
- Jordan: jerga (BIOS, pasta térmica, liberación, clonado); "presupuesto" vs diagnóstico pago; "escribinos" sin botón en FAQ; no sabe adónde llevar el equipo.
- Riley: descuento solo en FAQ; plazo TODO como hecho; "no se cobra" ambiguo sobre clonado/respaldo; plazo prometido no dado; flotante en pie.
- Casey: summaries de 26 px; precios a 6+ pantallas; flotante tapa contenido; correo cortado a la mitad. Menú hamburguesa bien.
- Padre/madre con netbook bloqueada: chip + 4 tarjetas antes de netbooks; precio en acordeón cerrado; "con su cargador" solo en FAQ; sin plazo; mensaje de WhatsApp genérico.

## Detalles menores
Bajada de precios larga; en 1366×768 CTAs en el borde; tres ámbar en hero escritorio (cabecera, hero, "Soltar"); 5 desvíos de tokens.

## Preguntas
1. ¿Por qué el hero no muestra un número?
2. ¿Cada fila de precio como enlace a WhatsApp con mensaje armado?
3. ¿El chip se gana sus 400 px en celular?
4. ¿La política de abandono como promesa?
