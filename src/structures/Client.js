const { Client, Partials, ActivityType, PresenceUpdateStatus, Collection } = require('discord.js');
const i18n = require('../utils/langs.js');
const config = require('../config/botConfig/config.json');
module.exports = class extends Client {
	constructor() {
		super({
			intents: [ 3276799 ],
			partials: [ Partials.User, Partials.Channel, Partials.GuildMember, Partials.Message, Partials.Reaction ],
			presence: {
				activities: [{ name: 'Netflix sin ti :c', type: ActivityType.Watching }],
				status: PresenceUpdateStatus.Idle,
			},
			messageCacheMaxSize: 50,
			messageCacheLifetime: 60,
			messageSweepInterval: 60,
			retryLimit: 2,
			restGlobalRateLimit: 50,
			messageEditHistoryMaxSize: 100,
			messageEditHistoryLifetime: 600,
		});
		this.commands = new Collection();
		this.slashCommands = new Collection();
		this.slashArray = new Collection();
		this.langs = i18n;
		this.emotes = config.emotes;
		this.colores = config.colores;
	}
	async login(token = this.token) {
		super.login(token);
	}
};
