
function slider(){
	const rightBtn = document.querySelector(".rightSlide");
	const leftBtn = document.querySelector(".leftSlide");
	const sliderBlocks = document.querySelector(".sliderBlocks");

	leftBtn.style.display = "none";

	rightBtn.addEventListener("click",() => {
		sliderBlocks.style.transform = "translateX(-33%)";
		leftBtn.style.display = "block";
		rightBtn.style.display = "none";

	});
	leftBtn.addEventListener("click",() => {
		sliderBlocks.style.transform = "translateX(0)";
		leftBtn.style.display = "none";
		rightBtn.style.display = "block";
	});
}

slider();