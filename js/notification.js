$button = document.getElementById('button');
$campana = document.getElementById('campana');

$button.addEventListener('click', (event) => {
	$campana.classList.add('show-count');
})