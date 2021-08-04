svg4everybody();


function faq() {
  const faq = document.querySelector('.questions');

  faq.addEventListener('click', (e) => {
    if (e.target.classList.contains('question__text') ||
      e.target.classList.contains('question__header') ||
      e.target.classList.contains('icon')
    ) {
      e.target.closest('.question').classList.toggle('open');
    }
  })


}

faq();
