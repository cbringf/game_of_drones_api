module.exports = {
	include: [{
		service: 'player',
		nameAs: 'player1',
		parentField: 'player1Id',
		childField: '_id'
	}, {
		service: 'player',
		nameAs: 'player2',
		parentField: 'player2Id',
		childField: '_id'
	}]
}