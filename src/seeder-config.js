module.exports = {
	delete: false,
	services: [{
		path: 'rule',
		template: {
			move: 'rock',
			kills: 'scissors'
		}
	}, {
		path: 'rule',
		template: {
			move: 'paper',
			kills: 'rock'
		}
	}, {
		path: 'rule',
		template: {
			move: 'scissors',
			kills: 'paper'
		}
	}]
};
