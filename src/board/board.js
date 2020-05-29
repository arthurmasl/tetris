import { canMove } from '../block/move';
import { isTrue } from '../helpers';

const createBoard = () => [...Array(20)].map(() => [...Array(20).fill(0)]);

const blockToBoard = (block, board) =>
  board.map((row, y) =>
    row.map((col, x) => block.find((i) => i.x === x && i.y === y) ? 1 : col));

const hasLine = (board) =>
  board.map((row) => row.every(isTrue)).some(isTrue);

const removeLine = (board) =>
  [[...Array(20).fill(0)], ...board.slice(0, board.length - 1)];

const checkLine = ({ block, board }) =>
  hasLine(blockToBoard(block, board))
    ? removeLine(board)
    : blockToBoard(block, board);

const nextBoard = (state) =>
  canMove(state)
    ? state.board
    : checkLine(state);


export { nextBoard, createBoard };
