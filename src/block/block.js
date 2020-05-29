import { createBlock } from './create';
import { moveBlock, canMove } from './move';

export const nextBlock = (state) =>
  canMove(state) ? moveBlock(state.block, state.direction, 1) : createBlock();
