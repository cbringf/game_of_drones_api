// Initializes the `match` service on path `/match`
const createService = require('feathers-nedb');
const createModel = require('../../models/match.model');
const hooks = require('./match.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/match', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('match');

  service.hooks(hooks);
};
