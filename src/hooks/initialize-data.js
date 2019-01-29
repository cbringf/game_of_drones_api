// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
const _ = require('lodash');

module.exports = function (options = {}) {
	return async hook => {
		hook.data = _.merge(options.initialData, hook.data);
		return hook;
	};
};
