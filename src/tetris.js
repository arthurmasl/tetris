import { nextBlock } from './block/block';
import { nextBoard, createBoard } from './board/board';
import { createBlock } from './block/create';
import { notCollide } from './block/move';


export const initialState = () => ({
  size: 20,
  board: createBoard(),
  block: createBlock(),
  direction: 0,
});


export const nextState = (state) => ({
  ...state,
  direction: 0,
  block: nextBlock(state),
  board: nextBoard(state),
});

export const changeDirection = (state, x) => ({
  ...state,
  direction: notCollide(state, x) ? x : 0,
});
