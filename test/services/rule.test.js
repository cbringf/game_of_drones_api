const assert = require('assert');
const app = require('../../src/app');

describe('\'rule\' service', () => {
	it('registered the service', () => {
		const service = app.service('rule');

		assert.ok(service, 'Registered the service');
	});

	it('creates a rule and validates data', async () => {
		const ruleData = {
			move: 'a',
			kills: 'b'
		};
		const ruleService = app.service('rule');
		const rule = await ruleService.create(ruleData);

		assert.ok(rule, 'Rule created!');
		assert.equal(rule.move, ruleData.move);
		assert.equal(rule.kills, ruleData.kills);
	});
});
