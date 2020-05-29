import {
  initialState, nextState, changeDirection,
} from './tetris';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let state = initialState();

const s = (c) => Math.round((c * canvas.width) / state.size);

const draw = () => {
  const { block, board } = state;

  ctx.fillStyle = '#333';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#f9f9f9';
  block.forEach(({ x, y }) => {
    ctx.fillRect(s(x), s(y), s(1), s(1));
  });


  board.forEach((row, rowY) =>
    row.forEach((col, colX) => {
      if (!col) return;

      ctx.fillRect(s(colX), s(rowY), s(1), s(1));
    }));
};

const step = (t1) => (t2) => {
  if (t2 - t1 > 1000 / 5) {
    state = nextState(state);
    draw();
    window.requestAnimationFrame(step(t2));
  } else {
    window.requestAnimationFrame(step(t1));
  }
};

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    // case 'w':
    //   state = rotate(state);
    //   break;
    case 'a':
      state = changeDirection(state, -1);
      break;
    case 'd':
      state = changeDirection(state, 1);
      break;
    default:
  }
});

window.requestAnimationFrame(step(0));
