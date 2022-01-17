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
//SLIDER
const sliderBtnLeft = document.querySelector('.slider__btn--left');
const sliderBtnRight = document.querySelector('.slider__btn--right');

const slide = document.querySelectorAll('.slide');
let curSlide = 0;
let maxSlide = slide.length - 1;

const slider = function (cursl) {
  slide.forEach(
    (s, i) => (s.style.transform = `translate(${100 * (i - cursl)}%)`)
  );
};
const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slider(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slider(curSlide);
};

slider(0);

sliderBtnLeft.addEventListener('click', prevSlide);
sliderBtnRight.addEventListener('click', nextSlide);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
});
//CTA
const ctaCont = document.querySelector('.form_img--cont');
const Imglabel = document.querySelector('.form__label--img');
ctaCont.addEventListener('click', function (e) {
  if (e.target.classList.contains('cta--img')) {
    Imglabel.textContent = e.target.getAttribute('data-value');
  } else {
    return;
  }
});
//Smooth scroll
document.querySelector('.nav__ul').addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    // hideMobNav();
    let id = e.target.getAttribute('href');
    let sid = document.querySelector(id);
    let idcord = sid.getBoundingClientRect();
    // revealSection();
    window.scrollTo({
      left: idcord.left + window.pageXOffset,
      top: idcord.top + window.pageYOffset,
      behavior: 'smooth',
    });
  }
});
//sticky btn
//onclick
document.querySelector('.scrollUp').addEventListener('click', function (e) {
  e.preventDefault();
  // hideMobNav();
  let id = e.target.getAttribute('href');
  let sid = document.querySelector(id);
  let idcord = sid.getBoundingClientRect();
  // revealSection();
  window.scrollTo({
    left: idcord.left + window.pageXOffset,
    top: idcord.top + window.pageYOffset,
    behavior: 'smooth',
  });
});
//sticky
const nav = document.querySelector('.scrollUp');
const header = document.querySelector('.header');
//....Functions
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.remove('hide');
  } else {
    nav.classList.add('hide');
  }
};
//....Observer
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-100px`,
});
headerObserver.observe(header);
