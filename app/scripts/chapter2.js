const $menuMap = document.querySelector('.selectMap')
const $select_o = document.querySelector('.otages')
const $select_v = document.querySelector('.victimes')
const $select_a = document.querySelector('.armes')

const $displayOtages = document.querySelector('.otagesDisplayButtons')
const $displayVictimes = document.querySelector('.victimesDisplayButtons')
const $displayArmes = document.querySelector('.armesDisplayButtons')

const mapSubtitle = document.querySelector('.chapitre2_4 .subtitle')

$select_o.addEventListener('mousedown',() => 
{
	$displayOtages.style.display = 'inherit'
	$displayVictimes.style.display = 'none'
	$displayArmes.style.display = 'none'

	mapSubtitle.innerHTML = 'Otages'

	$select_o.style.background = "#A83131"
	$select_o.style.color = "#D8D8D8"

	$select_v.style.background = "#D8D8D8"
	$select_v.style.color = "#A83131"

	$select_a.style.background = "#D8D8D8"
	$select_a.style.color = "#A83131"
})

$select_v.addEventListener('mousedown',()=> 
{
	$displayOtages.style.display = 'none'
	$displayVictimes.style.display = 'inherit'
	$displayArmes.style.display = 'none'

	mapSubtitle.innerHTML = 'Victimes collatérales'

	$select_o.style.background = "#D8D8D8"
	$select_o.style.color = "#A83131"

	$select_v.style.background = "#A83131"
	$select_v.style.color = "#D8D8D8"

	$select_a.style.background = "#D8D8D8"
	$select_a.style.color = "#A83131"
})

$select_a.addEventListener('mousedown',()=> 
{
	$displayOtages.style.display = 'none'
	$displayVictimes.style.display = 'none'
	$displayArmes.style.display = 'inherit'

	mapSubtitle.innerHTML = 'Armes de guerre'

	$select_o.style.background = "#D8D8D8"
	$select_o.style.color = "#A83131"

	$select_v.style.background = "#D8D8D8"
	$select_v.style.color = "#A83131"

	$select_a.style.background = "#A83131"
	$select_a.style.color = "#D8D8D8"
})