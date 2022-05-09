import { TestBed } from '@angular/core/testing';
import { Game } from './game';

describe('Game', () => {
  let game : Game;

  beforeEach(() => {
    game = new Game();
  });

  /*
  test('testbasics', () => {
    game.buy([2,0,4,1,0]);
    expect(game.price).toBe(56);
  });
  */

  test('testSimpleDiscounts', () => {
    game.buy([1,1,1,1,1]);
    expect(game.price).toBe(8*5*0.75);
  });

  test('testSeveralDiscounts', () => {
    game.buy([1,2,1,1,1]);
    expect(game.price).toBe(8*5*0.75 + 8*1*1);
  });

  test('testEdgeCases', () => {
    game.buy([2,2,2,1,1]);
    expect(game.price).toBe(8*4*0.8 + 8*4*0.8);
  });

});
