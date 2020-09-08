const burger = document.querySelector('.burger');
const links = document.querySelector('.navbar-links');

burger.addEventListener('click' ,()=>{
  links.classList.toggle('active');
});

