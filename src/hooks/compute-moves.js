// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
	return async hook => {
		const playerService = hook.app.service('player');
		const rulesService = hook.app.service('rule');
		const fullMatch = hook.params.fullMatch;
		let match = hook.data;

		if (match.moves &&
			match.moves.player1.length === match.moves.player2.length) {

			const player1 = await playerService.get(fullMatch.player1Id);
			const player2 = await playerService.get(fullMatch.player2Id);
			const rules = await rulesService.find();
			const moveResult = computeMoves(player1, player2, match.moves, rules.data);

			if (moveResult.winner) {
				match.winner = moveResult.updatedPlayers[0]._id;
				match.finished = true;
				player1.hits = 0;
				player2.hits = 0;
				moveResult.updatedPlayers[0].record++;
				moveResult.updatedPlayers = [player1, player2];
			}
			if (moveResult.updatedPlayers.length > 0) {
				moveResult.updatedPlayers.forEach(p => {
					playerService.patch(p._id,
						{
							hits: p.hits,
							record: p.record
						});
				});
			}
		}
		return hook;
	};
};

function computeMoves(player1, player2, moves, rules) {
	const cursor = moves.player1.length - 1;
	const p1Move = moves.player1[cursor];
	const p2Move = moves.player2[cursor];
	const result = {
		updatedPlayers: [],
		winner: null
	};

	if (p1Move !== p2Move) {
		if (rules.filter(r => r.move === p1Move && r.kills === p2Move).length > 0) {
			player1.hits++;
			result.updatedPlayers.push(player1);
		}
		else {
			player2.hits++;
			result.updatedPlayers.push(player2);
		}
		if (Math.max(player1.hits, player2.hits) >= 3) {
			result.winner = result.updatedPlayers[0];
		}
	}
	return result;
}
