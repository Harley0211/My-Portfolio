document.querySelector('.home-imgHover').addEventListener('mouseover', () => {
  document.querySelector('.home-imgHover').classList.add('animate');
});

document.querySelector('.home-imgHover').addEventListener('mouseout', () => {
  document.querySelector('.home-imgHover').classList.remove('animate');
});

document.querySelectorAll('.btn-box a').forEach((button) => {
  button.addEventListener('mouseover', () => {
      button.classList.add('animate');
  });

  button.addEventListener('mouseout', () => {
      button.classList.remove('animate');
  });
});