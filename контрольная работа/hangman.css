const letterDiv = document.querySelector('.letter-div');
const resetButton = document.querySelector('.reset-btn');
const liveSpan = document.querySelector('.lives');
const wordDiv = document.querySelector('.word-div');
const notif = document.querySelector('.notif');
const notifContent = document.querySelector('.notif-content');
const notifSpan = document.querySelector('.notif-span');
const playAgain = document.querySelector('.notif-btn');
let letters;
let lives;

let select_word

const init = function (state) {
  wordDiv.innerHTML = '';
  if (state === 'start') {
    for (const i of 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {
      const html = `<button class="alpha">${i.toUpperCase()}</button>`;
      letterDiv.insertAdjacentHTML('beforeend', html);
    }
  } else if (state === 'reset') {
    letters.forEach(btn => {
      btn.classList.remove('disabled');
      notif.classList.add('hidden');
    });
  }
  select_word = prompt("Введите слово");
  lives = 5;
  
  letters = document.querySelectorAll('.alpha');
  liveSpan.textContent = lives;

  for (let i = 0; i < select_word.length; i++) {
    const html = `<p class="word">_</p>`;
    wordDiv.insertAdjacentHTML('beforeend', html);
  }
};

init('start');


const showNotif = function (msg) {
  notif.classList.remove('hidden');
  notifSpan.textContent = select_word;
  notifContent.textContent = `${msg}`;

};


const decreaseLife = function () {
  lives--;
  liveSpan.textContent = lives;
  if (lives === 0) {
    showNotif('Поражение');
  }
};

const getindexes = function (letter) {
  let indexes = [];
  [...select_word].forEach((val, i) => {
    if (val === letter) {
      const index = i;
      indexes.push(index);
    }
  });

  return indexes;
};


const checkWord = function () {
  let val = true;
  for (let i = 0; i < wordDiv.children.length; i++) {
    if (wordDiv.children[i].textContent === '_') {
      val = false;
    }
  }
  return val;
};


const letterPress = function () {
  const letter = this.textContent.toLowerCase();

  if (select_word.includes(letter)) {
    const indexes_list = getindexes(letter);
    indexes_list.forEach((val, i) => {
      wordDiv.children[val].textContent = this.textContent;
    });
    if (checkWord()) showNotif('Победа');
  } else {
    decreaseLife();
  }
  this.classList.add('disabled');
};


letters.forEach(btn => {
  btn.addEventListener('click', letterPress);
});


resetButton.addEventListener('click', function () {
  init('reset');
});


playAgain.addEventListener('click', function () {
  init('reset');
});
