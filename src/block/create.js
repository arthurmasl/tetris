import { pieces } from './pieces';
import { isTrue } from '../helpers';
import { moveBlock } from './move';

const randomPiece = () =>
  pieces[Math.floor(Math.random() * pieces.length)];

const pieceToCord = (piece) =>
  piece
    .flatMap((row, y) => row.map((col, x) => isTrue(col) && { x, y }))
    .filter(isTrue);

export const createBlock = () => moveBlock(pieceToCord(randomPiece()), 8, -3);
