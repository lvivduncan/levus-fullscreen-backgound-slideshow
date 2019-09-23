
// отримуємо усі спани, фоном яких є зображення
const images = document.querySelectorAll('.cb-slideshow span');

// пробігаємо методом forEach і додаємо плавний ефект
if(images !== null){
	images.forEach( (item, i) => {
		item.style.animationDelay = i * 6 + 's';
		item.style.animationDuration = images.length * 6 + 's';
	});
}

// отримуємо усі підписи до зображень
const signatures = document.querySelectorAll('.cb-slideshow div');

// пробігаємо методом forEach і додаємо плавний ефект
if(signatures !== null){
	signatures.forEach( (item, i) => {
		item.style.animationDelay = i * 6 + 's';
		item.style.animationDuration = images.length * 6 + 's';
	});
}