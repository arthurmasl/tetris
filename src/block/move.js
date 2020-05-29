import { isTrue } from '../helpers';

const moveBlock = (block, x, y = 1) =>
  block.map((i) => ({ x: i.x + x, y: i.y + y }));

const notOutOfBound = ({ block, size }) =>
  moveBlock(block)[block.length - 1].y < size;

const collideArr = (board) => (acc, curr) => [
  ...acc,
  board[curr.y]?.[curr.x] !== 1,
];

const notCollide = ({ block, direction, board }, x) =>
  moveBlock(block, x || direction)
    .reduce(collideArr(board), [])
    .every(isTrue);

const canMove = (state) => notCollide(state) && notOutOfBound(state);


export { canMove, notCollide, moveBlock };
