const ajv = require('ajv');
const { validateSchema } = require('feathers-hooks-common');
const schema = require('../../models/schemas/player/player.model');
const initialData = require('../../models/init-data/player');
const initalizeObject = require('../../hooks/initialize-data');

module.exports = {
	before: {
		all: [],
		find: [],
		get: [],
		create: [
			initalizeObject({ initialData: initialData }),
			validateSchema(schema, ajv)
		],
		update: [validateSchema(schema, ajv)],
		patch: [],
		remove: []
	},

	after: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: []
	},

	error: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: []
	}
};
