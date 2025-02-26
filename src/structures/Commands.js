module.exports = class Commando {
	constructor(opciones) {
		// # Configuración básica.
		this.name = opciones.name;
		this.alias = opciones.alias;
		this.description = opciones.description;
		this.category = opciones.category;
		// # Configuración adicional
		this.args = opciones.args || false;
		this.inactive = opciones.inactive || false;
		this.exclusive = opciones.exclusive || false; // Pruebas después
		this.usage = opciones.usage; // Pruebas después
		this.options = opciones.options || false; // Comprobar
		this.role = opciones.role || false; /* Idk */
		// # Otras configuraciones
		this.subcommands = opciones.subcommands; /* Comprobar */
		this.cooldown = opciones.cooldown || false;
		this.permisos = opciones.permisos || false;
		this.production = opciones.production || false; /* Prueba después */
		this.permisos_bot = opciones.permisos_bot || false;
		this.tos = opciones.tos || false; /* Comprobar */
		this.spam = opciones.spam || false; /* Comprobar */
		this.owner = opciones.owner || false;
		this.nsfw = opciones.nsfw || false;
		this.voice = opciones.voice || false;
		this.type = opciones.type; /* Comprobar */
	}
}
