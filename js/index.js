// import { menuRender } from "./menu";
// import { hideSeen } from "./menu";
// import { findWorkHtml } from "./menu";
// import { whyUpworkHtml } from "./menu";
// import { findTalentHtml } from "./menu";
// import { findTalentRightBlockHtml } from "./menu";
// import { findTalentFirstList } from "./menu";
// import { findTalentSecondList } from "./menu";
// import { findTalentThirdList } from "./menu";

// import { miniMenuHtml } from "./menu";
// import { miniMenuRender } from "./menu";
// import { toggleBtnsFunc } from "./menu";
// import { findTalentBtnsFunc } from "./menu";
// import { blockTitleDiv } from "./menu";
// import { backMiniMenu } from "./menu";

const container = document.querySelector(".container");
const navBtns = document.querySelectorAll(".lis");
const menu = document.querySelector(".menu");
const miniMenu = document.querySelector(".miniMenu");


const navBarContainer = document.createElement("div");
const navBarTop = document.createElement("div");
const navBarBottom = document.createElement("div");
const containerInner = document.querySelector(".containerInner");

// const containerInner = document.createElement("div");
const firstContentBlock = document.createElement("div");
const secondContentBlock = document.createElement("div");

const firstSection1 = document.createElement("div");
const secondSection1 = document.createElement("div");
const thirdSection1 = document.createElement("div");

navBarContainer.classList.add("navBarContainer");
navBarTop.classList.add("navBarTop");
navBarBottom.classList.add("navBarBottom");

// containerInner.classList.add("containerInner");
firstContentBlock.classList.add("firstContentBlock");
secondContentBlock.classList.add("secondContentBlock");

firstSection1.classList.add("firstSection");
secondSection1.classList.add("secondSection");
thirdSection1.classList.add("thirdSection");


fetch("http://localhost:8888/navBarContainer")
.then(data => data.json())
.then(data =>{ 
	console.log(data);
	return data;
}).then(data => {
	navBarContainer.append(navBarTopHtml(data),navBarBottomHtml(data));
	container.append(navBarContainer);
}).then(data => {
	menuRender();
	miniMenu.innerHTML = miniMenuHtml();
	miniMenuRender();
	toggleBtnsFunc();
});



fetch("http://localhost:8888/firstContentBlock")
.then(data => data.json())
.then(data => {
	console.log(data);
	return data;
}).then(data => {
	containerInner.prepend(firstContentBlock)
	firstContentBlock.append(firstSection1Html(data),secondSection1Html(data),thirdSection1Html(data));

});

		//--- NAV BAR ---

function navBarTopHtml(data){
	
	navBarTop.innerHTML = `
	<div class="navLogo">
	<div class="menuLogos">
		<img src="${data[0].openMenu}" alt="" class="openMenu">
		<img src="${data[0].closeMenu}" alt="" class="closeMenu">
	</div>
	<img src="${data[0].logo}" alt="" class="logoImg">
	</div>
	<div class="navLeft">
		<div class="navLeftOptions">
			<div class="lis FindTalent">
				<p>${data[1].navLeft[0]}</p>
				<div class="arrow">
					<img src="${data[0].arrow}" alt="">
				</div>
			</div>
		<div class="lis FindWork">
			<p>${data[1].navLeft[1]}</p>
			<div class="arrow">
				<img src="${data[0].arrow}" alt="">
			</div>
		</div>
		<div class="lis WhyUpwork">
			<p>${data[1].navLeft[2]}</p>
			<div class="arrow">
				<img src="${data[0].arrow}" alt="">
			</div>
		</div>
		<div class="lis EnterPrise">
			<p>${data[1].navLeft[3]}</p>
		</div>
	</div>
</div>


<div class="navRight">
	<form action="">
		<img src="${data[0].search}" alt="">
		<input type="text" placeholder="Search">
		<button>
			${data[1].navRight[0]}
			<img src="imgs/navoptionarrows/down.png" alt="">
		</button>
	</form>
	<a href="#">${data[1].navRight[1]}</a>
	<button class="signUpBtn">${data[1].navRight[2]}</button>
</div>

	<!-- passive nav bar -->

		<div class="navBarPassive">
			<div class="passiveNavRight">
				<button class="signUpBtnResp">${data[1].navRight[2]}</button>
				<img src="${data[0].search}" alt="" class="searchImgResp">
			</div>
		</div>
	`;

	return navBarTop;
}

function navBarBottomHtml(data){
	navBarBottom.innerHTML = `
	<div class="navRightOptions">
		<a href="#">${data[1].navBottom[0]}</a>
		<a href="#">${data[1].navBottom[1]}</a>
		<a href="#">${data[1].navBottom[2]}</a>
		<a href="#">${data[1].navBottom[3]}</a>
		<a href="#">${data[1].navBottom[4]}</a>
		<div class="moreBtn">
			<span>More</span>
			<img src="imgs/navoptionarrows/down.png" alt="">
		</div>
	</div>
	`;
	return navBarBottom;
}

				//---FIRST CONTENT BLOCK
				//--- FIRST SECTION---


function firstSection1Html(data){
	firstSection1.innerHTML = `
	<div class="contentInner">
	<div class="firstSectionTexts">
		<h1 class="firstSectionH1">${data[0].texts[0]}</h1>
		<p class="firstSectionP">${data[0].texts[1]}</p>
		<button>${data[0].texts[2]}</button>
	</div>
	<div class="firstSectionLogos">
		<div class="title">${data[0].texts[3]}</div>
		<div class="logos">
			<img src="${data[0].imgs.logo1}" alt="">
			<img src="${data[0].imgs.logo2}" alt="">
			<img src="${data[0].imgs.logo3}" alt="">
		</div>
	</div>
	</div>
	<div class="contentInnerimg">
		<img src="${data[0].imgs.bigImg}" alt="">
	</div>
	`;
	return firstSection1;
}

				//--- SECOND SECTION ---


function secondSection1Html(data){
	secondSection1.innerHTML = `
	<div class="secondSectionSliderBlock">
		<img src="${data[1].slideImgs[0]}" alt="">
	</div>
	<div class="secondSectionTexts">
		<h2>${data[1].title}</h2>

		${secondSection1Blocks(data)}

	<div class="buttons">
		<button class="leftBtn">${data[1].buttons[0]}</button>
		<button class="rightBtn">${data[1].buttons[0]}</button>
	</div>
</div>	
	`;
	return secondSection1;
}

function secondSection1Blocks(data){
	let html = "";
	data[1].textBlocks.forEach(item => {
		html += `
		<div class="${item.className} textBlock">
			<img src="${item.logo}" alt="">
			<div class="textsDiv">
				<h5>${item.title}</h5>
				<p>${item.subtitle}</p>
			</div>
		</div>
		`;
	});
	return html;
}
				// --- THIRD SECTION ---

function thirdSection1Html(data){
	thirdSection1.innerHTML = `
	<div class="thirdSection">
	<h1>Browse talent by category</h1>
	<div class="subTitle">
		<p>Looking for work?</p>
		<a href="#">Browse jobs</a>
	</div>
	<div class="categoryBlock">

	${thirdSection1Blocks(data)}

	</div>
</div>
	`;
	return thirdSection1;
}

function thirdSection1Blocks(data){
	let html = "";

	data[2].textBlocks.forEach(item => {
		html += `
		<div class="category">
		<h6>${item.title}</h6>
		<div class="options">
			<div class="rateDiv">
				<img src="${item.logo}" alt="">
				<span class="rate">${item.rate}</span>
			</div>
			<span class="skills">${item.skills}</span>
		</div>
		</div>
		`;
	});
	return html;
}










