'use scrict';


export default class PlayerService {

  /* @ngInject */
  constructor(PlayerFactory) {
    this.player1 = PlayerFactory.createPlayer({type: 'dealer'}); //Defaults to dealer
    this.player2 = PlayerFactory.createPlayer({type: 'player'});
    this.currentDealer = this.player1;
    this.currentPlayer = this.player2;
  }

  getDealer() {
    return this.currentDealer;
  }

  getPlayer() {
    return this.currentPlayer;
  }

  switchPlayers() {
    if (this.player1.isDealer()) {
      this.player1.setPlayerType('player');
      this.currentPlayer = this.player1;
      this.player2.setPlayerType('dealer');
      this.currentDealer = this.player2;
    } else {
      this.player2.setPlayerType('player');
      this.currentPlayer = this.player2;
      this.player1.setPlayerType('dealer');
      this.currentDealer = this.player1;
    }
  }
}
