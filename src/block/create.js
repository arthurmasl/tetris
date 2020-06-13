import { pieces } from './pieces';
import { moveBlock } from './move';

const randomPiece = () => pieces[Math.floor(Math.random() * pieces.length)];

const pieceToCord = (piece) =>
  piece
    .flatMap((row, y) => row.map((col, x) => col && { x, y }))
    .filter(Boolean);

export const createBlock = () => moveBlock(pieceToCord(randomPiece()), 8, -3);
