const { ShardingManager, DiscordAPIError } = require('discord.js');
require('./utils/Logger.js');

const manager = new ShardingManager('./src/bot.js', {
	token: 'TOKEN', /* Aqui se pone el token del bot */
	totalShards: 1,
	shardList: 'auto',
	mode: 'process',
	respawn: true,
	timeout: 87398,
});

process.on('unhandledRejection', (reason) => {
	if (reason instanceof DiscordAPIError) return;
	console.error(reason);
});

manager.on('shardCreate', (shard) => {
	console.log(`Iniciando Shard ${shard.id}`.yellow);

	shard.on('ready', () => {
		console.log(`Shard [${shard.id}] conectada a la Gateway de Discord.`.yellow);
	});
});

manager.spawn().catch((error) => console.error(`Error al iniciar la shard: ${error.message}`.red));
