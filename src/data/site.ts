// Datos del negocio. Todo el texto editable del sitio vive acá.

export const sitio = {
	nombre: 'Fixtris Computer',
	descripcion:
		'Reparación de computadoras, notebooks, consolas y hardware. Desbloqueo de netbooks del gobierno. Te decimos qué falla y cuánto sale antes de arreglar.',
	whatsapp: '5492346409771', // solo números, con código de país
	whatsappVisible: '+54 9 2346 40-9771',
	email: 'bgonzalezerramuspe2006@hotmail.com',
	horario: 'Lunes a viernes de 9 a 18 h, sábados de 9 a 13 h',
	zona: 'Chivilcoy, Buenos Aires',
};

// Otro emprendimiento: sección "MateLogic", por si alguien busca software a medida.
export const otroEmprendimiento = {
	nombre: 'MateLogic',
	url: 'https://mate-logic.tech/',
	titulo: '¿Necesitás software a medida?',
	texto:
		'También hacemos software. En MateLogic desarrollamos páginas web, apps para Android e iOS y programas de escritorio, para negocios de Chivilcoy y de cualquier lado.',
};

export function enlaceWhatsapp(texto = 'Hola Fixtris, quiero consultar por una reparación.') {
	return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(texto)}`;
}

// Cada fila del grid suma 6 columnas: cada fila es una línea completa.
// Si agregás o sacás un servicio, revisá que los anchos de cada fila sigan sumando 6.
export const servicios = [
	// fila 1
	{
		titulo: 'Diagnóstico',
		texto: 'Encontramos qué falla y te pasamos el presupuesto antes de tocar nada.',
		ancho: 2,
	},
	{
		titulo: 'Notebooks',
		texto: 'Pantallas, teclados, bisagras y baterías. Equipos que no encienden o se apagan solos.',
		ancho: 4,
	},
	// fila 2
	{
		titulo: 'Consolas',
		texto: 'PlayStation, Xbox y Nintendo: joysticks con drift, lectoras, fuentes y consolas que se recalientan.',
		ancho: 4,
	},
	{
		titulo: 'PC de escritorio',
		texto: 'Fuentes, placas de video, memorias y discos. Pantallazos azules y reinicios.',
		ancho: 2,
	},
	// fila 3
	{
		titulo: 'Netbooks del gobierno',
		texto: 'Desbloqueamos netbooks de Conectar Igualdad y Juana Manso que quedaron trabadas, y las dejamos listas para usar.',
		ancho: 3,
	},
	{
		titulo: 'Limpieza y temperatura',
		texto: 'Limpieza interna, pasta térmica y ventiladores para el equipo que se calienta o hace ruido.',
		ancho: 3,
	},
	// fila 4
	{
		titulo: 'Mejoras',
		texto: 'Discos SSD, más memoria RAM y placas nuevas para que tu equipo rinda más sin cambiarlo entero.',
		ancho: 3,
	},
	{
		titulo: 'Sistema y programas',
		texto: 'Windows o Linux, drivers, virus y programas que no andan.',
		ancho: 3,
	},
	// fila 5
	{
		titulo: 'Recuperación de datos',
		texto: 'Intentamos rescatar fotos y archivos de discos dañados o borrados por error.',
		ancho: 3,
	},
	{
		titulo: 'Armado a medida',
		texto: 'Te ayudamos a elegir las piezas y armamos la PC para lo que la vas a usar.',
		ancho: 3,
	},
];

export const pasos = [
	{
		titulo: 'Nos contás qué pasa',
		texto: 'Por WhatsApp o en el taller. Con eso ya te decimos si conviene revisarla.',
	},
	{
		titulo: 'Diagnóstico y presupuesto',
		texto: 'Revisamos el equipo y te pasamos precio, plazo y forma de pago. No avanzamos sin tu OK.',
	},
	{
		titulo: 'Reparación',
		texto: 'Arreglamos o cambiamos lo que falla y probamos el equipo a fondo.',
	},
	{
		titulo: 'Retirás tu compu',
		texto: 'Con el detalle de lo que hicimos y la garantía por escrito.',
	},
];

// Sección "Precios y formas de pago". Según el trabajo se usa una de estas formas.
export const formasDePago = [
	{
		icono: 'banknotes',
		titulo: 'Seña del 50 %',
		texto: 'Pagás la mitad para que tomemos el trabajo y el resto cuando está terminado.',
	},
	{
		icono: 'check-circle',
		titulo: 'Todo al terminar',
		texto: 'Pagás el 100 % cuando te entregamos el equipo funcionando.',
	},
	{
		icono: 'shopping-cart',
		titulo: 'Repuestos por tu cuenta',
		texto: 'Te pasamos la lista de piezas: nos transferís el dinero o las comprás vos. El arreglo lo pagás al terminar.',
	},
] as const;

// Días desde que avisamos que el equipo está listo hasta considerarlo abandonado.
export const diasParaRetirar = 90;

export const compromiso = {
	titulo: 'Necesitamos compromiso de tu parte',
	texto: `No guardamos equipos a la espera. Si el trabajo lleva repuestos o tiempo, cobramos una parte antes de arrancar, y sin un acuerdo de pago no empezamos. Los equipos que no se retiran dentro de los ${diasParaRetirar} días del aviso se consideran abandonados.`,
};

// TODO: confirmar plazos y políticas antes de publicar.
export const preguntas = [
	{
		pregunta: '¿Cuánto sale revisar mi compu?',
		respuesta:
			'El diagnóstico tiene un costo fijo que se descuenta si hacés la reparación con nosotros. Escribinos y te pasamos el valor actual.',
	},
	{
		pregunta: '¿Cuánto tarda una reparación?',
		respuesta:
			'La mayoría están listas en 2 a 4 días hábiles. Si hay que pedir un repuesto, te avisamos el plazo antes de empezar.',
	},
	{
		pregunta: '¿Voy a perder mis archivos?',
		respuesta:
			'En una reparación normal, no: tus archivos quedan donde están. Si el disco está dañado o hay que reinstalar el sistema, te avisamos antes y te ofrecemos hacer una copia.',
	},
	{
		pregunta: '¿Desbloquean netbooks del gobierno?',
		respuesta:
			'Sí, es uno de los trabajos que más nos piden. Si tu netbook de Conectar Igualdad o Juana Manso quedó bloqueada, traela con su cargador y la dejamos funcionando.',
	},
	{
		pregunta: '¿Las reparaciones tienen garantía?',
		respuesta:
			'Sí. Cada trabajo sale con garantía por escrito sobre la mano de obra y los repuestos que colocamos.',
	},
	{
		pregunta: '¿Trabajan con todas las marcas?',
		respuesta:
			'Sí: notebooks, PC y consolas de cualquier marca, y también equipos armados. Si no podemos arreglarlo, te lo decimos en el diagnóstico.',
	},
	{
		pregunta: '¿Qué pasa si no retiro mi equipo?',
		respuesta: `Cuando el equipo está listo te avisamos. Si pasan ${diasParaRetirar} días desde ese aviso y no lo retirás ni nos escribís, lo consideramos abandonado y podemos disponer de él libremente. Antes borramos el disco por software, así tus archivos no quedan en ningún lado.`,
	},
];
