'use strict';
/*
  JavaScript Basics
  Yuhan Zhao
*/

const btn = document.querySelector('button');
const body = document.querySelector('body')

btn.addEventListener('click', () => {
  body.classList.toggle('daymode');
  if(body.classList.contains('daymode')){
    btn.innerText = 'Try Nightmode';
  } else {
    btn.innerText = 'Try Daymode';
  }
});