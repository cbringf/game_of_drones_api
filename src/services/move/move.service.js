// Initializes the `move` service on path `/move`
const createService = require('feathers-nedb');
const createModel = require('../../models/move.model');
const hooks = require('./move.hooks');

module.exports = function (app) {
	const Model = createModel(app);
	const paginate = app.get('paginate');

	const options = {
		Model,
		paginate
	};

	// Initialize our service with any options it requires
	app.use('/move', createService(options));

	// Get our initialized service so that we can register hooks
	const service = app.service('move');

	service.hooks(hooks);
};
