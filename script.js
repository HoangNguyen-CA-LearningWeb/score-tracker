const select = document.querySelector('#select');
const scoreEl = document.querySelector('#score');
const score1El = document.querySelector('#score1');
const score2El = document.querySelector('#score2');

const INITIAL_MAX = 5;
const MAXMAX_SCORE = 10;
let maxScore = INITIAL_MAX;
let score1 = 0;
let score2 = 0;

const canUpdateScore = () => {
  return score1 < maxScore && score2 < maxScore;
};

const resetColors = () => {
  score1El.classList.remove('text-green');
  score1El.classList.remove('text-red');
  score2El.classList.remove('text-green');
  score2El.classList.remove('text-red');
};

const updateScore = () => {
  score1El.innerText = `${score1}`;
  score2El.innerText = `${score2}`;

  if (score1 >= maxScore) {
    resetColors();
    score1El.classList.add('text-green');
    score2El.classList.add('text-red');
  } else if (score2 >= maxScore) {
    resetColors();
    score1El.classList.add('text-red');
    score2El.classList.add('text-green');
  }
};

let resetScore = () => {
  score1 = 0;
  score2 = 0;
  updateScore();
  resetColors();
};

for (let i = 1; i <= MAXMAX_SCORE; i++) {
  let el = document.createElement('option');
  el.value = i;
  el.innerText = i;
  if (i == INITIAL_MAX) {
    el.selected = true;
  }
  select.appendChild(el);
}

select.addEventListener('change', (e) => {
  maxScore = e.target.value;
  resetScore();
});

const add1Btn = document.querySelector('#add1');
const add2Btn = document.querySelector('#add2');
const reset = document.querySelector('#reset');

add1Btn.addEventListener('click', () => {
  if (canUpdateScore()) {
    score1++;
    updateScore();
  }
});

add2Btn.addEventListener('click', () => {
  if (canUpdateScore()) {
    score2++;
    updateScore();
  }
});

reset.addEventListener('click', resetScore);
