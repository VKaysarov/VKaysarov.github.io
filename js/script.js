// const ROOT = document.querySelector(':root');
// const SLIDE_LIST = document.querySelectorAll('.slide');

// function chancgeTabs(num, text) {
// 	// const ACTIVE_SLIDE = document.querySelector('.slide.active')
// 	// setTimeout(() => {
// 		// ACTIVE_SLIDE.classList.remove('active');
// 		// console.log('ok')
// 	// }, 1000);
// 	// SLIDE_LIST[num].classList.add('active');
// 	ROOT.style.setProperty('--num-tabs', num);
// }

anime({
	targets: '.slide.active > .slider-img',
	width: '1380px',
	easing: 'easeInOutQuad'
});

const ROOT = document.querySelector(':root');
const SLIDE_LIST = document.querySelectorAll('.slide');
const TABS_LIST = document.querySelectorAll('.tab__link');

let current_tab = 0;

for (let tab of TABS_LIST) {
  tab.addEventListener('click', () => {
	if (tab.classList[1] != 'active') {
	  	let num_tab = tab.innerHTML - 1;
	  	const back_slide = document.querySelector('.slide.active > .slider-img');
	  	back_slide.style.zIndex = -2;
	  	SLIDE_LIST[num_tab].classList.add('active');
	  	TABS_LIST[num_tab].classList.add('active');
	  	ROOT.style.setProperty('--num-tabs', num_tab);
	  	setTimeout(() => {
	  		SLIDE_LIST[current_tab].classList.remove('active');
	  		TABS_LIST[current_tab].classList.remove('active');
	  		back_slide.style.zIndex = -1;
	  		current_tab = num_tab;
	  	}, 1000)
	}
  })
}


let isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);
 
function throttleScroll(e) {
    if (isScrolling == false ) {
        window.requestAnimationFrame(function() {
          dealWithScrolling(e);
          isScrolling = false;
        });
    }
    isScrolling = true;
}   
 
function dealWithScrolling(e) {

	const CARDS_ELEMENT = document.querySelector('.cards');
    if (isPartiallyVisible(CARDS_ELEMENT)) {
    	anime({
			targets: '.card__bg',
			width: '100%',
			easing: 'easeInOutQuad'
		});
    }
}

function isPartiallyVisible(element) {
    let elementBoundary = element.getBoundingClientRect();
 
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;
 
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(element) {
  let elementBoundary = element.getBoundingClientRect();
 
  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
 
  return ((top >= 0) && (bottom <= window.innerHeight));
}