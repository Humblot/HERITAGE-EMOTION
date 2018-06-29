$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['step1','step2','step3','step4'],
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
		slideSelector: '.section',

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

	if (window.location.pathname.indexOf('chapter3') !== -1) {
		//parallax chap 3
		var scene = document.getElementById('scene1');
		var parallaxInstance = new Parallax(scene, {
		relativeInput: true
		});
		parallaxInstance.friction(0.2, 0.1);

		//parallax chap 3
		var scene = document.getElementById('scene2');
		var parallaxInstance = new Parallax(scene, {
		relativeInput: true
		});
		parallaxInstance.friction(0.2, 0);
	}

	//overlay en savoir +
	//overlay
	(function($) {
		$(function() {
			console.log("lala")
		  $('.toggle-overlay').click(function() {
				console.log("coco");
				$('aside').toggleClass('open');
		  });
		});
	  })(jQuery);


});

///////////////////////
//		  MENU		 //
///////////////////////

const menu = document.querySelector('.menu')
const menuButton = document.querySelector('.menuButton')
const menuCross = document.querySelector('.menuCross')


menuButton.addEventListener('mousedown',() =>
{
	menuCross.classList.toggle("switch")
	menu.classList.toggle('switch')
})

const menuListChapter1 = document.querySelector('.listChapter1')
const menuListChapter2 = document.querySelector('.listChapter2')
const menuListChapter3 = document.querySelector('.listChapter3')

const menuPreview1 = document.querySelector('.preview-1')
const menuPreview2 = document.querySelector('.preview-2')
const menuPreview3 = document.querySelector('.preview-3')

const menuSelectionNumber1 = document.querySelector('.listChapter1 h5')
const menuSelectionSubtitle1 = document.querySelector('.listChapter1 h4')
const menuSelectionTitle1 = document.querySelector('.listChapter1 h3')

const menuSelectionNumber2 = document.querySelector('.listChapter2 h5')
const menuSelectionSubtitle2 = document.querySelector('.listChapter2 h4')
const menuSelectionTitle2 = document.querySelector('.listChapter2 h3')

const menuSelectionNumber3 = document.querySelector('.listChapter3 h5')
const menuSelectionSubtitle3 = document.querySelector('.listChapter3 h4')
const menuSelectionTitle3 = document.querySelector('.listChapter3 h3')

menuListChapter1.addEventListener('mouseover',() =>
{
	menuPreview1.style.opacity = "1"
	menuPreview2.style.opacity = "0"
	menuPreview3.style.opacity = "0"

	menuSelectionTitle1.style.borderBottom = "solid #8e2525 6px"
	menuListChapter1.style.paddingLeft = "25px"

	menuSelectionTitle2.style.borderBottom = "none"
	menuListChapter2.style.paddingLeft = "0px"

	menuSelectionTitle3.style.borderBottom = "none"
	menuListChapter3.style.paddingLeft = "0px"

	menuSelectionNumber1.style.fontSize = "15px"
	menuSelectionSubtitle1.style.fontSize = "24px"
	menuSelectionTitle1.style.fontSize = "33.6px"

	menuSelectionNumber2.style.fontSize = "12.5px"
	menuSelectionSubtitle2.style.fontSize = "20px"
	menuSelectionTitle2.style.fontSize = "28px"

	menuSelectionNumber3.style.fontSize = "12.5px"
	menuSelectionSubtitle3.style.fontSize = "20px"
	menuSelectionTitle3.style.fontSize = "28px"
})
menuListChapter2.addEventListener('mouseover',() =>
{
	menuPreview1.style.opacity = "0"
	menuPreview2.style.opacity = "1"
	menuPreview3.style.opacity = "0"

	menuSelectionTitle1.style.borderBottom = "none"
	menuListChapter1.style.paddingLeft = "0px"

	menuSelectionTitle2.style.borderBottom = "solid #8e2525 6px"
	menuListChapter2.style.paddingLeft = "25px"

	menuSelectionTitle3.style.borderBottom = "none"
	menuListChapter3.style.paddingLeft = "0px"

	menuSelectionNumber1.style.fontSize = "12.5px"
	menuSelectionSubtitle1.style.fontSize = "20px"
	menuSelectionTitle1.style.fontSize = "28px"

	menuSelectionNumber2.style.fontSize = "15px"
	menuSelectionSubtitle2.style.fontSize = "24px"
	menuSelectionTitle2.style.fontSize = "33.6px"

	menuSelectionNumber3.style.fontSize = "12.5px"
	menuSelectionSubtitle3.style.fontSize = "20px"
	menuSelectionTitle3.style.fontSize = "28px"
})
menuListChapter3.addEventListener('mouseover',() =>
{
	menuPreview1.style.opacity = "0"
	menuPreview2.style.opacity = "0"
	menuPreview3.style.opacity = "1"

	menuSelectionTitle1.style.borderBottom = "none"
	menuListChapter1.style.paddingLeft = "0px"

	menuSelectionTitle2.style.borderBottom = "none"
	menuListChapter2.style.paddingLeft = "0px"

	menuSelectionTitle3.style.borderBottom = "solid #8e2525 6px"
	menuListChapter3.style.paddingLeft = "25px"

	menuSelectionNumber1.style.fontSize = "12.5px"
	menuSelectionSubtitle1.style.fontSize = "20px"
	menuSelectionTitle1.style.fontSize = "28px"

	menuSelectionNumber2.style.fontSize = "12.5px"
	menuSelectionSubtitle2.style.fontSize = "20px"
	menuSelectionTitle2.style.fontSize = "28px"

	menuSelectionNumber3.style.fontSize = "15px"
	menuSelectionSubtitle3.style.fontSize = "24px"
	menuSelectionTitle3.style.fontSize = "33.6px"
})
