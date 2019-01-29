// Initializes the `player` service on path `/player`
const createService = require('feathers-nedb');
const createModel = require('../../models/player.model');
const hooks = require('./player.hooks');

module.exports = function (app) {
	const Model = createModel(app);
	const paginate = app.get('paginate');

	const options = {
		Model,
		paginate
	};

	// Initialize our service with any options it requires
	app.use('/player', createService(options));

	// Get our initialized service so that we can register hooks
	const service = app.service('player');

	service.hooks(hooks);
};
