'use strict';
// у блока .earnings есть класс .earnings--choose только тогда, когда ни у одного .earning-way нет класса .open
const earningsElement = document.querySelector('.earnings');
const earningsListElement = document.querySelector('.earnings__list');
const earningWayElements = [...earningsElement.querySelectorAll('.earning-way')];
const earningDescElements = [...earningsElement.querySelectorAll('.earning-way__wrap')];
const earningMediaElements = [...earningsElement.querySelectorAll('.earning-way__media-wrap')];
const earningTabElements = [...earningsElement.querySelectorAll('.earning-way__tab')];

const onClickTab = (index) => {
  earningWayElements.forEach(
    (element) => {
      element.classList.remove('open')
    }
  );

  if (earningsElement.classList.contains('earnings--choose')) {
    earningsElement.classList.remove('earnings--choose');
  };

  if (!earningsListElement.classList.contains('earnings__list--tab')) {
    earningsElement.classList.add('earnings__list--tab');
  }

  setTimeout(() => {earningWayElements[index].classList.add('open')}, 1000);
}

earningTabElements.forEach (
  (element, index) => {
    element.addEventListener('click', () => {
      onClickTab(index)
    })
  }
)
