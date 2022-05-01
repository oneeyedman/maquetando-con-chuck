
const range = document.querySelector('.js__range');
const rangeField = range.querySelector('.js__range-field');
const rangeOutput = range.querySelector('.js__range-output');


function getProgress(value, min, max) {
	return (value - min) * 100 / (max - min);
}


function calcProgress(event) {
	const field = event.currentTarget;
	applyProgress(field);
	paintVolume(field.value);
}


function applyProgress(field) {
	const {value, min, max} = field;
	const size = getProgress(value, min, max);
	field.style=`background-size: ${size}% 100%`
}

function paintVolume(value) {
	rangeOutput.value = Math.round(Number(value) * 100) / 100;
}

rangeField.addEventListener('input', calcProgress);
applyProgress(rangeField);
paintVolume(rangeField.value)
