'use strict';

import Game from './game';


export default function gameFactory() {
  return {
    createGame: () => {
      return new Game();
    }
  };
};
