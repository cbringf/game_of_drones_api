// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
	return async hook => {
		let match = hook.data;
		let fullMatch = hook.params.fullMatch;

		if (!fullMatch.onTurn && fullMatch.player1Id) {
			match.onTurn = fullMatch.player1Id;
		}
		if (match.moves) {
			match.onTurn = match.moves.player1.length > match.moves.player2.length ?
				fullMatch.player2Id : fullMatch.player1Id;
		}
		return hook;
	};
};
