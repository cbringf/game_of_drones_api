const player = require('./player/player.service.js');
const rule = require('./rule/rule.service.js');
const move = require('./move/move.service.js');
const play = require('./play/play.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(player);
  app.configure(rule);
  app.configure(move);
  app.configure(play);
};
