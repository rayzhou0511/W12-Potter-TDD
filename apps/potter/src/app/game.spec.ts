import { TestBed } from '@angular/core/testing';
import { Game } from './game';

describe('Game', () => {
  let game : Game;

  beforeEach(() => {
    game = new Game();
  });

  test('testbasics', () => {
    game.buy([2,0,4,1,0]);
    expect(game.price).toBe(56);
  });
  /*
  test('testSimpleDiscounts', () => {
    game.buy([1,0,1,1,0]);
    expect(game.price).toBe(8*3*0.9);
  }); 
  */
});
