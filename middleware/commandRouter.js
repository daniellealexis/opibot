const client = require('./client');

const ERROR_TEXT = 'error';

const commandObject = {
	get: client.getSuggestion,
	'new': client.createCategory,
	categories: client.viewAllCategories,
	suggest: client.submitSuggestion,
	help: client.viewAllCommands,
	[ERROR_TEXT]: client.handleError,
	// delete: client.deleteCategory
};

const parseCommand = function(text) {
	text = typeof text === 'string' ? text.trim() : '';

	return {
		command: text.substring(0, text.indexOf(' ')) || text,
		value: text.includes(' ') ?
			text.substring(text.indexOf(' '), text.length).trim() : '',
	}
}

module.exports = {
	parseCommand,
	handleRequest: function(req, res) {
		var data = parseCommand(req.body.text);
		var command = data.command || ERROR_TEXT;
		var handler = commandObject[command] || commandObject[ERROR_TEXT];

		handler(data,req,res);
	},
};
