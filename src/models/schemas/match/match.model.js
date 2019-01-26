module.exports = {
	properties: {
		player1Id: {
			type: 'string'
		},
		player2Id: {
			type: 'string'
		},
		moves: {
			type: 'object',
			properties: {
				player1Moves: {
					type: 'array',
					items: {
						type: 'string'
					}
				},
				player2Moves: {
					type: 'array',
					items: {
						type: 'string'
					}
				}
			}
		}
	}
};
