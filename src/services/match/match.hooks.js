const { populate } = require('feathers-hooks-common');
const populateSchema = require('../../models/schemas/match/match.populate');
const computeMoves = require('../../hooks/compute-moves');
const prepareMatch = require('../../hooks/prepare-match');
const computeTurn = require('../../hooks/compute-turn');
const ajv = require('ajv');
const {validateSchema} = require('feathers-hooks-common');
const schema = require('../../models/schemas/match/match.model');
const initialData = require('../../models/init-data/match');
const initializeObject = require('../../hooks/initialize-data');

module.exports = {
	before: {
		all: [],
		find: [],
		get: [],
		create: [
			initializeObject({initialData: initialData}),
			prepareMatch(),
			validateSchema(schema, ajv)
		],
		update: [],
		patch: [
			prepareMatch(),
			computeTurn(),
			computeMoves()
		],
		remove: []
	},

	after: {
		all: [],
		find: [populate({ schema: populateSchema })],
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
