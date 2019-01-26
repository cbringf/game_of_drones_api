// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
    return async hook => {

        return context;
    };
};

function computeMoves(player1, player2, moves, rules) {
    const cursor = Math.max(moves.player1.length - 1, 0);
    const p1Move = moves.player1[cursor];
    const p2Move = moves.player2[cursor];
    const result = {
        updatedPlayer: null,
        winner: null
    };

    if (p1Move !== p2Move) {
        if (rules.filter(r => r.move === p1Move && r.kills === p2Move).length > 0) {
            player1.hits++;
            result.updatedPlayer = player1;
        }
        else {
            player2.hits++;
            result.updatedPlayer = player2;
        }
        if (Math.max(player1.hits, player2.hits) >= 3) {
            result.winner = result.updatedPlayer;
        }
    }
    return result;
}
