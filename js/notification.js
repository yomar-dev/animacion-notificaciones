$button = document.getElementById('button');
$campana = document.getElementById('campana');

$button.addEventListener('click', (event) => {
	let count = Number($campana.getAttribute('data-count')) || 0;
	$campana.setAttribute('data-count', count + 1);
	$campana.classList.add('show-count');
})