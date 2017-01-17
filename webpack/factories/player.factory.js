'use strict';

let PlayerTypeEnum = {
  dealer: 1,
  player: 2
};

if (Object.freeze)
  Object.freeze(PlayerTypeEnum);

class Player {
  constructor(args) {
    this.type = PlayerTypeEnum[args.type];
    this.score = 0;
  }

  isDealer() {
    return this.type === PlayerTypeEnum.dealer;
  }

  isPlayer() {
    return this.type === PlayerTypeEnum.player;
  }

  setPlayerType(type) {
    this.type = PlayerTypeEnum[type];
  }
}

let playerFactory = () => {
  return {
    createPlayer: (args) => {
      return new Player(args);
    }
  }
}

export default playerFactory;
