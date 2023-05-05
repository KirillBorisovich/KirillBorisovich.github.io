for (var i = 0; i <= 3; i++) {
	document.querySelectorAll('#button')[i].addEventListener('click', function () {
		document.getElementById('form').classList.add('open')
		document.getElementById('body').classList.add('model-open')
		let div = document.createElement('div');
		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';
		document.body.append(div);
		let paddingOffset = div.offsetWidth - div.clientWidth + 'px';
		console.log(div.offsetWidth, div.clientWidth)
		div.remove();
		
		document.body.style.paddingRight = paddingOffset;
	}) 
};
document.getElementById('button-close2').addEventListener('click',function () {
	document.getElementById('form').classList.remove('open')
	document.getElementById('body').classList.remove('model-open')
	document.body.style.paddingRight = '0px';
}) ;

window.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		document.getElementById('form').classList.remove('open')
		document.getElementById('body').classList.remove('model-open')
		document.body.style.paddingRight = '0px';
	}
});




const animItems = document.querySelectorAll('.anim-items');
if(animItems.length > 0){
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll() {
		for(let index = 0; index < animItems.length; index++){
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 1.5;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if(animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			}else {
				if(!animItem.classList.contains('_anim-no-hide'))
				animItem.classList.remove('_active');
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}

	}
	animOnScroll()
}
