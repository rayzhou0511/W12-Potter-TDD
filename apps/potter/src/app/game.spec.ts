import { TestBed } from '@angular/core/testing';
import { Game } from './game';

describe('Game', () => {
  let game : Game;

  beforeEach(() => {
    game = new Game();
  });

  
  test('testbasics', () => {
    game.buy([2,0,4,1,0]);
    expect(game.price).toBe(8*3*0.9 + 8*2*0.95 + 8*2);
  });
  

  
  test('testSimpleDiscounts', () => {
    game.buy([1,1,1,1,1]);
    expect(game.price).toBe(8*5*0.75);
  });

  test('testSeveralDiscounts', () => {
    game.buy([1,2,1,1,1]);
    expect(game.price).toBe(8*5*0.75 + 8*1*1);
  });

  test('testEdgeCases1', () => {
    game.buy([2,2,2,1,1]);
    expect(game.price).toBe(8*4*0.8 + 8*4*0.8);
  });
  
  
  test('testEdgeCases2', () => {
    game.buy([5,5,4,5,4]);
    expect(game.price).toBe((8*5*0.75)*3 + (8*4*0.8)*2);
  });

});
