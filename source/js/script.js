'use strict';
// у блока .earnings есть класс .earnings--choose только тогда, когда ни у одного .earning-way нет класса .open
// при нажатии на кнопку earning-way__tab, родителю earning-way добавить класс open(только после завершения анимации), если его нет (toggleClassList + делегирование со всплытием)
// c tablet ширины у .earnings__list появляется класс .earnings__list--tab при превращении его в табы(убирает бэк насильственно)