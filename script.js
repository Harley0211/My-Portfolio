const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.classList.add('active');
  });

  card.addEventListener('mouseout', () => {
    card.classList.remove('active');
  });
});
