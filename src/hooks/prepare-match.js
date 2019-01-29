// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
	return async hook => {
		let match = hook.data;

		if (!match._id) {
			prepareNewMatch(match);
		}
		else {
			const oldMatch = await hook.service.get(match._id);

			hook.params.fullMatch = oldMatch;
			prepareMatch(match, oldMatch);
		}
	};
};

function prepareMatch(match, oldMatch) {
	if (match.player1Id || match.player2Id) {
		if (match.player1Id) {
			oldMatch.player1Id = match.player1Id;
		}
		if (match.player2Id) {
			oldMatch.player2Id = match.player2Id;
		}
		if (oldMatch.player1Id && oldMatch.player2Id) {
			match.open = false;
		}
	}
}

function prepareNewMatch(match) {
	if (match.player1Id && match.player2Id) {
		match.onTurn = match.player1Id;
		match.open = false;
	}
}
