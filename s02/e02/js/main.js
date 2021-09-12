const file = document.querySelector('.file');
const input = file.querySelector('.file__field');
const name = file.querySelector('.file__name');
const fakeReset = document.querySelector('.fake-file-reset');
const preview = file.querySelector('.file__preview');


input.addEventListener('change', ()=>{
	name.innerHTML = input.files[0].name;
	preview.src = URL.createObjectURL(input.files[0]);
});

fakeReset.addEventListener('click', ()=>{
	input.type = 'text';
	input.type = 'file';
	console.log(input.files);
});
