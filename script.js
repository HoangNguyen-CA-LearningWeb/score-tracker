const select = document.querySelector('#select');
const scoreEl = document.querySelector('#score');
const reset = document.querySelector('#reset');

const p1 = {
  score: 0,
  scoreEl: document.querySelector('#score1'),
  btn: document.querySelector('#add1'),
};

const p2 = {
  score: 0,
  scoreEl: document.querySelector('#score2'),
  btn: document.querySelector('#add2'),
};

const INITIAL_MAX = 5;
const MINMAX_SCORE = 3;
const MAXMAX_SCORE = 11;
let maxScore = INITIAL_MAX;

function init() {
  for (let i = MINMAX_SCORE; i <= MAXMAX_SCORE; i++) {
    let el = document.createElement('option');
    el.value = i;
    el.innerText = i;
    if (i == INITIAL_MAX) {
      el.selected = true;
    }
    select.appendChild(el);
  }
}

const canUpdateScore = () => {
  return p1.score < maxScore && p2.score < maxScore;
};

let resetScore = () => {
  p1.score = 0;
  p2.score = 0;
  updateScore();
  resetColors();
};

const resetColors = () => {
  for (let p of [p1, p2]) {
    p.scoreEl.classList.remove('text-green', 'text-red');
  }
};

const updateScore = () => {
  p1.scoreEl.innerText = p1.score;
  p2.scoreEl.innerText = p2.score;

  if (p1.score >= maxScore) {
    resetColors();
    p1.scoreEl.classList.add('text-green');
    p2.scoreEl.classList.add('text-red');
  } else if (p2.score >= maxScore) {
    resetColors();
    p1.scoreEl.classList.add('text-red');
    p2.scoreEl.classList.add('text-green');
  }
};

select.addEventListener('change', (e) => {
  maxScore = e.target.value;
  resetScore();
});

for (let p of [p1, p2]) {
  p.btn.addEventListener('click', () => {
    if (canUpdateScore()) {
      p.score++;
      updateScore();
    }
  });
}

reset.addEventListener('click', resetScore);

init();
