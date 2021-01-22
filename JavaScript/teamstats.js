const team = {
  _players: [
    { firstName: 'Jimbo', lastName: 'Fidler', age: 69},
    { firstName: 'Max', lastName: 'Tang', age: 33},
    { firstName: 'Jesus', lastName: 'Chan', age: 16}
  ],
  _games: [
    { opponent: 'Liverpool', teamPoints: 37, opponentPoints: 3 },
    { opponent: 'Winchester', teamPoints: 107, opponentPoints: 1 },
    { opponent: 'LA', teamPoints: 2, opponentPoints: 600 }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this.games.push(game);

  }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 276);

console.log(team.players);

team.addGame('Meow', 5, 169);
team.addGame('Meow2', 7, 179);
team.addGame('Meow4', 5, 109);

console.log(team.games);
