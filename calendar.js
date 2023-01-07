var today = new Date().toISOString().split('T')[0];
document.getElementsByName("date")[0].setAttribute('min', today);






// Everything except weekend days
const validate = dateString => {
  const day = (new Date(dateString)).getDay();
  if (day==0 || day==6) {
    return false;
  }
  return true;
}

// Sets the value to '' in case of an invalid date
document.querySelector('input').onchange = evt => {
  if (!validate(evt.target.value)) {
    evt.target.value = '';
  }
}



/* Локализация datepicker */

$.datepicker.regional['ru'] = {

	closeText: 'Закрыть',

	prevText: 'Предыдущий',

	nextText: 'Следующий',

	currentText: 'Сегодня',

	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],

	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],

	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],

	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],

	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],

	weekHeader: 'Не',

	dateFormat: 'dd.mm.yy',

	firstDay: 1,

	isRTL: false,

	showMonthAfterYear: false,

	yearSuffix: ''

};

$.datepicker.setDefaults($.datepicker.regional['ru']);