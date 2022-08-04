/* 
    Задание 1:

    Доделать слайдер с урока

    1. Переписать код слайдера с урока по видео
    2. Доделать автоматическое переключение слайдов с интвервалом в 2 секунды

*/

const prev= document.getElementById("btn-prev"),
	next= document.getElementById("btn-next");
	slides = document.querySelectorAll(".slide"),
	dots = document.querySelectorAll(".dot");

let index = 0;


const nextSlide = () => {
	if(index!==slides.length-1){
		index++;	
	} else {
		index=0;
	}
	// console.log(index);
	prepareCurrentSlide(index);
}

const prevSlide = () => {
	if(index===0){
		index=slides.length-1;
	} else {
		
		index--;	
	}
	// console.log(index);
	prepareCurrentSlide(index);
}

const prepareCurrentSlide = (n) => {
	activeSlide(n);
	activeDot(n);
	// Перезапускаем отсчет до переключения слайда
	restartShowSlides();
}

const activeSlide = (n) => {
	for(slide of slides) {
		slide.classList.remove("active");
	}
	slides[n].classList.add("active");
}

const activeDot = (n) => {
	for(dot of dots) {
		dot.classList.remove("active");
	}
	dots[n].classList.add("active");
}

dots.forEach((item, indexDot) => {
	item.addEventListener("click", () => {
		index = indexDot;
		prepareCurrentSlide(index);
	})
});



next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

let timerId;

const startShowSlides = () => {
	timerId = setInterval( nextSlide, 2000);	
}

const restartShowSlides = () => {
	clearInterval(timerId); 
	startShowSlides();
}

// Запускаем отсчет до переключения слайда
startShowSlides();





/* 
    Задание 2:

    Доделать tabs с урока

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/