const assert = require('assert');
const app = require('../../src/app');

describe('\'move\' service', () => {
	it('registered the service', () => {
		const service = app.service('move');

		assert.ok(service, 'Registered the service');
	});
});
