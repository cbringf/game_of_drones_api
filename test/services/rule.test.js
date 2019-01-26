const assert = require('assert');
const app = require('../../src/app');

describe('\'rule\' service', () => {
	it('registered the service', () => {
		const service = app.service('rule');

		assert.ok(service, 'Registered the service');
	});
});
