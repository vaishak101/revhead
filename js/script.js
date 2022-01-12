//FEATURES
const displayImage = document.querySelector('.features__display--img');
const displayH2 = document.querySelectorAll('.secondary-heading--ft');
const setDisplay = function (num) {
  displayH2.forEach((s, i) => s.classList.add('hide--ft'));
  displayImage.setAttribute('src', `img/features/f-${num}.webp`);
  const numUp = Number(num) - 1;
  const displayH2UP = displayH2[numUp];
  displayH2UP.classList.remove('hide--ft');
};

const ftContainer = document.querySelector('.ft__options--cont');
ftContainer.addEventListener('click', function (e) {
  if (
    e.target.classList.contains('ft__figure--img') ||
    e.target.classList.contains('ft__figure--caption')
  ) {
    const ftOpt = e.target.getAttribute('data-num');
    setDisplay(ftOpt);
  } else {
    return;
  }
});
