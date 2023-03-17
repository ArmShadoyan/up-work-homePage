
function slider(){
	const rightBtn = document.querySelector(".rightSlide");
	const leftBtn = document.querySelector(".leftSlide");
	const sliderBlocks = document.querySelector(".sliderBlocks");

	// leftBtn.style.display = "none";

	rightBtn.addEventListener("click",() => {
		sliderBlocks.style.transform = "translateX(-33%)";
		// leftBtn.style.display = "block";
		// rightBtn.style.display = "none";

	});
	leftBtn.addEventListener("click",() => {
		sliderBlocks.style.transform = "translateX(0)";
		// leftBtn.style.display = "none";
		// rightBtn.style.display = "block";
	});
}


function firstSlider(data){
	const slideImg = document.querySelector(".secondSectionSliderBlock img");
	const progressItems = document.querySelectorAll(".slideProgress");
	let i = 0;
	let w = 0;
	
	let time = setInterval(() => {
		slideImg.src = data[1].slideImgs[i];

	// let t = setInterval(() => {	
	// 	w++

	// 	progressItems[i].style.width = w + "%"
	// 	if(w >= 100) {
	// 		clearInterval(t);
	// 		w = 0;
	// 	}
	// 	console.log(i);
	// }, 30);

		i++;
		if(i === data[1].slideImgs.length){
			i = 0;
			// progressItems.forEach(item => item.style.width = "0%");
		}
	
	},3000);

	// slideProgressFunc()


}
function slideProgressFunc(){
	const slideProgress = document.querySelectorAll(".slideProgress");
	let c = 1;
	let a = 1;

	for(let i = 0;i < slideProgress.length;){
		setInterval(() => {
			slideProgress[i].style.width =(a + "%");
			a++
		}, 30);
		
		c++
		console.log(slideProgress[i].style.width);
		if(slideProgress[i].style.width === "100%"){
			i++;
		}else if(a === 100){
			break;
		}

	}
	// slideProgressFunc();
}
