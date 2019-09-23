
const images = document.querySelectorAll('.cb-slideshow span');

if(images !== null){
	images.forEach( (item, i) => {
		item.style.animationDelay = i * 6 + 's';
		item.style.animationDuration = images.length * 6 + 's';
	});
}

const signatures = document.querySelectorAll('.cb-slideshow div');

if(signatures !== null){
	signatures.forEach( (item, i) => {
		item.style.animationDelay = i * 6 + 's';
		item.style.animationDuration = images.length * 6 + 's';
	});
}