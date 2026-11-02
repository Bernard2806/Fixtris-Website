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
		texto: 'Pantallas, teclados, bisagras, puertos de carga y baterías. Equipos que no encienden o se apagan solos.',
		ancho: 4,
	},
	// fila 2
	{
		titulo: 'Consolas',
		texto: 'PlayStation, Xbox y Nintendo: joysticks con drift, puertos HDMI, lectoras, fuentes y consolas que se recalientan.',
		ancho: 4,
	},
	{
		titulo: 'PC de escritorio',
		texto: 'Fuentes, placas madre, placas de video y memorias. Pantallazos azules y reinicios.',
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
		texto: 'Revisamos el equipo y te pasamos precio y plazo. No avanzamos sin tu OK.',
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
];
