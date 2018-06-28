$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: [],
		showActiveTooltip: false,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#000', '#000' , '#000' , '#000' , '#000'],
		paddingTop: '0',
		paddingBottom: '0',
		fixedElements: 0,
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: true,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});


	//parallax
	var scene = document.getElementById('scene');
	var parallaxInstance = new Parallax(scene, {
	  relativeInput: true
	});
	parallaxInstance.friction(0.2, 0.2);



	  
});

const $player = document.querySelector('.player')
const $video = $player.querySelector('video')
const $seekBar = $player.querySelector('.seek-bar')
const $fillBar = $seekBar.querySelector('.fill-bar')

// ----------------seekBarTIME----------------------------------

$seekBar.addEventListener('mousedown', (event) => {
    // prevent default event 
    event.preventDefault()

    // update current video Time 
    const ratio = (event.clientX) / $seekBar.offsetWidth
    const videoTime = ratio * $video.duration

    $video.currentTime = videoTime
      

})


$video.addEventListener('timeupdate', () => {
    const ratio = $video.currentTime / $video.duration
    $fillBar.style.transform = `scaleX(${ratio})`;
    
})

$video.addEventListener('mousedown', (event) => {

    event.preventDefault()
    if ($video.paused) {
        $video.play()
        
       
    } else {
        $video.pause()

        
    }
})