// create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

const team = {
  _players: [
    {firstName: 'Elysea', lastName: 'Crawford',age: 28},
    {firstName: 'Vicki', lastName: 'Crawford',age: 55},
    {firstName: 'Chris', lastName: 'Brown',age: 33}
  ],
 _games: [
  {opponent: 'Raiders', teamPoints: 12, opponentPoints: 5},
  {opponent: 'Jets', teamPoints: 3, opponentPoints: 10},
  {opponent: 'Giants', teamPoints: 20, opponentPoints: 8}
  ],
get players() {
    return this._players;
  },
get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);