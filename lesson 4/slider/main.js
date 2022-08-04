const prev= document.getElementById("btn-prev"),
	next= document.getElementById("btn-next");
	slides = document.querySelectorAll(".slide"),
	dots = document.querySelector(".dot");

let index = 0;


const nextSlide = () => {
	if(index!==slides.length-1){
		index++;	
	} else {
		index=0;
	}
	console.log(index);
	activeSlide(index);
}

const prevSlide = () => {
	if(index===0){
		index=slides.length-1;
	} else {
		
		index--;	
	}
	console.log(index);
	activeSlide(index);
}

const activeSlide = (n) => {
	for(slide of slides) {
		slide.classList.remove("active");
	}
	slides[n].classList.add("active");
}


next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);



