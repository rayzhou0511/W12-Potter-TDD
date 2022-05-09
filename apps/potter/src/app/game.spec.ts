import { Game } from './game';

describe('Game', () => {
  let game : Game;

  beforeEach(() => {
    game = new Game();
  });

  test('testbasic', () => {
    game.buy(0,2);
    game.buy(1,4);
    game.buy(4,1)
    expect(game.price).toBe(56);
  });
});
