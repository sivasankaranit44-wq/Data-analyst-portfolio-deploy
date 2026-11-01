// 1. Put the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Phone menu: open and close
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('site-nav');

menuBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

// Close the menu after tapping a link
nav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

// 3. "Ask my data": show the answer for the question that was tapped.
//    The facts come from my Olist project. <mark> highlights the key numbers.
const answers = {
  busiest:
    'On <mark>24 November 2017</mark> (Black Friday) the store took <mark>1,147 orders</mark> in a single day, about R$ 150,000 in sales. Earlier that month most days had 100 to 220 orders.',
  delivery:
    'Orders arrive well before the promised date. São Paulo averages about <mark>9 days</mark>. The slowest state, Roraima, takes about <mark>28 days</mark> and still beats the 46 days it was promised.',
  products:
    '<mark>Health and beauty</mark> earns the most, about R$ 1.23 million. Watches and gifts come second, and bed and bath third.'
};

const questionButtons = document.querySelectorAll('.ask-buttons button');
const answerBox = document.getElementById('answer');

function showAnswer(key) {
  answerBox.innerHTML = answers[key];
  questionButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.answer === key));
  });
}

questionButtons.forEach((button) => {
  button.addEventListener('click', () => showAnswer(button.dataset.answer));
});
