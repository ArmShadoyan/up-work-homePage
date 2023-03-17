


const navBarContainer = document.createElement("div");
const containerInner = document.createElement("div");

const navBarTop = document.createElement("div");
const navBarBottom = document.createElement("div");
const menu = document.createElement("div");
const miniMenu = document.createElement("div");

const firstContentBlock = document.createElement("div");
const secondContentBlock = document.createElement("div");

const firstSection1 = document.createElement("div");
const secondSection1 = document.createElement("div");
const thirdSection1 = document.createElement("div");

const firstSection2 = document.createElement("div");
const secondSection2 = document.createElement("div");
const thirdSection2 = document.createElement("div");
const forthSection2 = document.createElement("div");
const fivethSection2 = document.createElement("div");
const supportUkraineBlock= document.createElement("div");
const rebrandSkillsBlock = document.createElement("div");
const footer = document.createElement("div");

const container = document.querySelector(".container");
const navBtns = document.querySelectorAll(".lis");


containerInner.classList.add("containerInner");

menu.classList.add("menu");
miniMenu.classList.add("miniMenu");

navBarContainer.classList.add("navBarContainer");
navBarTop.classList.add("navBarTop");
navBarBottom.classList.add("navBarBottom");

firstContentBlock.classList.add("firstContentBlock");
secondContentBlock.classList.add("secondContentBlock");

firstSection1.classList.add("firstSection");
secondSection1.classList.add("secondSection");
thirdSection1.classList.add("thirdSection");

firstSection2.classList.add("firstSection");
secondSection2.classList.add("secondSection");
thirdSection2.classList.add("thirdSection");
forthSection2.classList.add("forthSection");
fivethSection2.classList.add("fivethSection");
supportUkraineBlock.classList.add("supportUkraineBlock");
rebrandSkillsBlock.classList.add("rebrandSkillsBlock");
footer.classList.add("footer");

container.append(navBarContainer,menu,miniMenu,containerInner);

let dropDownFooter = true;

window.onload = (e) => {
	if(window.innerWidth < 900){
		dropDownFooter = true;
   }else{
	dropDownFooter = false;
   }
};

fetch("http://localhost:8888/navBarContainer")
.then(data => data.json())
.then(data =>{ 
	console.log(data);
	return data;
}).then(data => {
	navBarContainer.append(navBarTopHtml(data),navBarBottomHtml(data));
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
	containerInner.append(firstContentBlock);
	firstContentBlock.append(firstSection1Html(data),secondSection1Html(data),thirdSection1Html(data));
	return data;
}).then(data => {
	firstSlider(data);
});


fetch("http://localhost:8888/secondContentBlock")
.then(data => data.json())
.then(data => {
	console.log(data);
	return data;
}).then(data => {
	containerInner.append(secondContentBlock);
	secondContentBlock.append(firstSection2Html(data),secondSection2Html(data),
	thirdSection2Html(data),forthSection2Html(data),fivethSection2Html(data),supportUkraineBlockHtml(data),
	rebrandSkillsBlockHtml(data),footerHtml(data));
	return data;
}).then(data => {
	slider(data);
	miniFooterSize(data);
});

// activeList(data);





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
		<div class="slideLineBlock">
			<div class="slideLine">
				<div class="slideProgress first"></div>
			</div>
			<div class="slideLine">
				<div class="slideProgress second"></div>
			</div>
			<div class="slideLine">
				<div class="slideProgress third"></div>
			</div>
			<div class="slideLine">
				<div class="slideProgress forth"></div>
			</div>
		</div>
		
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
	<h1>Browse talent by category</h1>
	<div class="subTitle">
		<p>Looking for work?</p>
		<a href="#">Browse jobs</a>
	</div>
	<div class="categoryBlock">

	${thirdSection1Blocks(data)}

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




				//---SECOND CONTENT BLOCK
				//---FIRST  SECTION---


function firstSection2Html(data){
	firstSection2.innerHTML = `
	<div class="textsBlock">
	<h3>Enterprise Suite</h3>
	<h1>This is how</h1>
	<h1 class="blueText">good companies</br>find good company.</h1>
	<h4>Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now.</h4>
		
		${firstSection2Blocks(data)}

		<button>Learn More</button>
	</div>
	<div class="imgBlock">
		<img src="imgs/fourthsection/hxwn-enterprise-image@2x.webp" alt="">
		<img src="imgs/secondcontentblock/firstsection/mini size.webp" alt="" class="minisize2_1">
	</div>
	`;
	return firstSection2;
}

function firstSection2Blocks(data){
	let html = "";
	data[0].blocks.forEach(item => {
		html += `
		<div class="textWithIcon">
			<img src="${item.img}" alt="">
			<p>${item.text}</p>
		</div>
		`;
	});
	return html;

}


				//---SECOND  SECTION---

function secondSection2Html(data){
	secondSection2.innerHTML = `
	<div class="titleBlock">
	<p>For clients</p>
	<h2>Find talent</br> your way</h2>
	</div>
	<div class="textBlock">
		<p>Work with the largest network of independent </br> professionals and get things done—from quick</br> turnarounds to big transformations.</p>
	</div>
	<div class="cardsBlock">
		
			${secondSection2Blocks(data)}

	</div>
	</div>
	`;
	return secondSection2;
}

function secondSection2Blocks(data){
	let html = "";
	data[1].blocks.forEach(item => {
		html += `
		<div class="${item.className} card">
			<h2>${item.title.firstLine}</br>${item.title.secondLine}</h2>
			<p>${item.subTitle.line}<sup>${item.subTitle.sup}</sup></p>
		</div>
		`;
	});
	return html;
}


				//---THIRD SECTION---

function thirdSection2Html(data){
	thirdSection2.innerHTML = `
	<div class="leftBlock">

	<div class="leftTextBlock">
		<h2>Why businesses</br> turn to Upwork</h2>
	
		<div class="subTitleBlock">
			${thirdSection2Blocks1(data)}
		</div>
	</div>
	<img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_357,h_694,q_auto,dpr_2.0/brontes/why-upwork/reaching-person@1x.png" alt="" class="peopleImage">
	</div>
	<div class="rightBlock">
		<h3>We’re </br>the world’s work</br> marketplace</h3>	
		${thirdSection2Blocks2(data)}
	</div>
	`;
	return thirdSection2;
}

function thirdSection2Blocks1(data){
	let html ="";

	data[2].leftSide.blocks.forEach(item => {
		html += `
		<div class="${item.className}">
			<div class="subTitle">
				<img src="${item.img}" alt="">
				<h3>${item.title}</h3>
			</div>
			<p>${item.subTitle.firstLine}</br> ${item.subTitle.secondLine}</p>
		</div>
		`;
	});
	return html;
}

function thirdSection2Blocks2(data){
	let html = "";

	data[2].rightSide.blocks.forEach(item => {
		html += `
			<div class="${item.className}">
				<div class="titleText">
					<img src="${item.img}" alt="" class="${item.imgClassName?item.imgClassName:""}">
					<p>${item.title}</p>
				</div>
				<p>${item.subTitle}</p>
			</div>
		`;
	});

	return html;
}


				//---FORTH  SECTION---

function forthSection2Html(data){
	forthSection2.innerHTML = `
	<div class="imgBlock">
	<img src="imgs/secondcontentblock/forthseciton/find-great-work@1x.jpg" alt="">
	<img src="imgs/secondcontentblock/forthseciton/minisize.jpg" alt="" class="minisize2_4">
	</div>
	<div class="textsBlock">
		<div class="topBlock">
			<h3>For talent</h3>
			<h1>Find great work</h1>
			<p>Meet clients you’re excited to work with and take
				your career or business to new heights.</p>
		</div>
		<div class="bottomBlock">
			<div class="cardsBlock">
				${forthSection2Blocks(data)}
			</div>
			<button>Find opportunities</button>
		</div>
	</div>
	`;
	return forthSection2;
}

function forthSection2Blocks(data){
	let html = "";

	data[3].blocks.forEach(item => {
		html += `
		<div class="card">
			<p>${item}</p>
		</div>
		`;
	});
	return html;
}
				//---SECOND  SECTION---

function fivethSection2Html(data){
	fivethSection2.innerHTML = `
	<div class="titleBlock">
	<h2>Trusted by leading</br>
		brands and startups</h2>
</div>
<div class="sliderContainer">
	<div class="arrows">
		<div class="leftArrow">
			<button class="leftSlide">
				<span class="material-symbols-outlined">
					arrow_back
				</span>
			</button>
		</div>
		<div class="rightArrow">
			<button class="rightSlide">
				<span class="material-symbols-outlined">
					arrow_forward
				</span>
			</button>
		</div>
	</div>
	

	<div class="sliderBlocks">
				${fivethSection2Blocks1(data)}
		
				<div class="block third">
					<div class="imgBlock"></div>
					<div class="textsBlock">
						<div class="manyMore ">
							<p>And many more</p>
						</div>
						${fivethSection2Blocks2(data)}
					</div>
				</div>
			</div>
		</div>
	`;

	return fivethSection2;
}

function fivethSection2Blocks1(data){
	let html = "";

	data[4].firstSecondBlocks.forEach((item,index)=> {
		html += `
		<div class="${item.className[0]} ${item.className[1]} ${item.className[2]?item.className[2]:""}">

			<div class="topBlock">
				<img src="${item.topBlock.img}" alt="" class="logo">
				<p class="top">${item.topBlock.topTitle}</p>
				<p class="bottom">${item.topBlock.bottomTitle}</p>
			</div>

			<p class="results">${item.middleTitle}</p>


			<div class="bottomBlock">
				<div class="leftBlock">
					<p class="top">${item.bottomBlock.leftTitles[0]}</p>
					<p class="bottom">${item.bottomBlock.leftTitles[1]}</p>
				</div>
				<div class="rightBlock">
					<p class="top">${item.bottomBlock.rightTitles[0]}</p>
					<p class="bottom">${item.bottomBlock.rightTitles[1]}</p>
				</div>
			</div>

		</div>
		`;
	});
	return html;
}

function fivethSection2Blocks2(data){
	let html = "";
	
	data[4].thirdBlock.logos.forEach(item => {
		html += `
		<div class="logo ">
			<img src="${item}" alt="">
		</div>
		`;
	});

	return html;
}

				//---SUPPORT UKRAINE BLOCK---


function supportUkraineBlockHtml(){
	supportUkraineBlock.innerHTML = `
		<div class="textBlock">
			<div class="titles">
				<h2>We support Ukraine</h2>
				<p>We are taking action to help our freelancers, our clients, and the people of Ukraine—and so can you</p>
			</div>
			<div>
				<button>Learn more</button>
			</div>
		</div>
		<div class="imgBlock">
			<img src="/imgs/secondcontentblock/sixthsection/ukraine-help.svg">
		</div>
	`;

	return supportUkraineBlock;
}

				//---REBRAND SKILLS BLOCK---

function rebrandSkillsBlockHtml(data){
	rebrandSkillsBlock.innerHTML= `	
		<div class="filters list">
			${rebrandFilters(data)}
		</div>
		<div class="rightSide">
			<div class="leftList list">
				${rebrandLeftList(data)}
			</div>
			<div class="rightList list">
				${rebrandRightList(data)}
			</div>
		</div>
		

	`;
	return rebrandSkillsBlock;
}

function rebrandFilters(data){
	let html = "";
	data[6].filter.forEach(item => {
		html += `
			<p class="rebrandFilterP">${item}</p>
		`;
	});
	return html;
}
function rebrandLeftList(data){
	let html = "";
		data[6].topSkillsBlock.leftList.forEach(item => {
			html += `
				<p>${item}</p>
			`;
		});
	return html;
}
function rebrandRightList(data){
	let html = "";
		data[6].topSkillsBlock.rightList.forEach(item => {
			html += `
				<p>${item}</p>
			`;
		});
	return html;
}
function activeList(data){
	const filters = document.querySelectorAll(".rebrandFilterP");
	const leftList = document.querySelector(".rebrandSkillsBlock .leftList");
	const rightList = document.querySelector(".rebrandSkillsBlock .rightList");

	filters.forEach(item => {
		item.addEventListener("click",(e)=>{

			leftList.innerHTML = "";
			rightList.innerHTML = "";

		});
	});
	
}


					//---FOOTER BLOCK---

function footerHtml(data){
	footer.innerHTML = `
		<div class="topOptions">
			<div class = "firstBlock block">
				<p class="title">${data[7].topOptions.titles[0]}</p>
				${ topOptionsFirstBlock(data)}
			</div>
			<div class = "secondBlock block">
				<p class="title">${data[7].topOptions.titles[1]}</p>
				${topOptionsSecondBlock(data)}
			</div>
			<div class = "thirdBlock block">
				<p class="title">${data[7].topOptions.titles[2]}</p>
				${topOptionsThirdBlock(data)}
			</div>
			<div class = "forthBlock block">
				<p class="title">${data[7].topOptions.titles[3]}</p>
				${topOptionsForthBlock(data)}
			</div>
		</div>
		<div class="social">
			<div class="leftSide">
				<h4>${data[7].social.leftSide.title}</h4>
				<div class="logos">
					${socialLeftSide(data)}
				</div>
			</div>
			<div class="rightSide">
				<h4>${data[7].social.rightSide.title}</h4>
				<div class="logos">
					${socialRightSide(data)}
				</div>
			</div>
		</div>
		<div class="bottomOptions">
			<p>${data[7].bottomOptions.title}</p>
			${bottomOptions(data)}
		</div>
	`;
	return footer;
}

			//---MINI FOOTER BLOCK---

function miniFooterSize(data){
	if(dropDownFooter){
		miniFooter(data);
	}
	window.addEventListener("resize", (e) => {
		if(e.target.innerWidth < 900){
			 miniFooter(data);
		}else{
			 footerHtml(data);
		}

		if(e.target.innerWidth > 1080){
			const openBtn = document.querySelector(".openMenu").style.display = "none";
		}else{
			const openBtn = document.querySelector(".openMenu").style.display = "block";
		}
	});


}

function miniFooter(data){
	footer.innerHTML = `
		<div class="toggleBtns">
			<div class="titleDiv">
			<div>
				<p class="title">${data[7].topOptions.titles[0]}</p>
				<div class="listMini"></div>
			</div>
				<img src="/imgs/navoptionarrows/down.png">
			</div>

			<div class="titleDiv">
				<div>
					<p class="title">${data[7].topOptions.titles[1]}</p>
					<div class="listMini"></div>
				</div>
			<img src="/imgs/navoptionarrows/down.png">
			</div>

			<div class="titleDiv">
				<div>
					<p class="title">${data[7].topOptions.titles[2]}</p>
					<div class="listMini"></div>
				</div>
					<img src="/imgs/navoptionarrows/down.png">
			</div>

			<div class="titleDiv">
				<div>
					<p class="title">${data[7].topOptions.titles[3]}</p>
					<div class="listMini"></div>
				</div>
				<img src="/imgs/navoptionarrows/down.png">
			</div>
		
			
		</div>

		<div class="social minisizeTop">
			<div class="leftSide">
				<h4>${data[7].social.leftSide.title}</h4>
				<div class="logos">
					${socialLeftSide(data)}
				</div>
			</div>
			<div class="rightSide">
				<h4>${data[7].social.rightSide.title}</h4>
				<div class="logos">
					${socialRightSide(data)}
				</div>
			</div>
		</div>
		<div class="bottomOptions minisizeBottom">
			<p>${data[7].bottomOptions.title}</p>
			${bottomOptions(data)}
		</div>
	`;
	toggleLists(data)

}

function toggleLists(data){
	const btns = document.querySelectorAll(".toggleBtns .titleDiv");
	
	btns.forEach((item,index) => {
		item.addEventListener("click",(e)=>{

			if(index === 0){
				if(item.firstElementChild.lastElementChild.textContent === ""){
					item.firstElementChild.lastElementChild.innerHTML +=topOptionsFirstBlock(data);
					item.querySelector("img").style.transform = "rotate(180deg)";
				}else{
					item.firstElementChild.lastElementChild.textContent = "";
					item.querySelector("img").style.transform = "rotate(0)";
				}
			}
			if(index === 1){
				if(item.firstElementChild.lastElementChild.textContent === ""){
					item.firstElementChild.lastElementChild.innerHTML +=topOptionsSecondBlock(data);
					item.querySelector("img").style.transform = "rotate(180deg)";
				}else{
					item.firstElementChild.lastElementChild.textContent = "";
					item.querySelector("img").style.transform = "rotate(0)";
				}
			}
			if(index === 2){
				if(item.firstElementChild.lastElementChild.textContent === ""){
					item.firstElementChild.lastElementChild.innerHTML +=topOptionsThirdBlock(data);
					item.querySelector("img").style.transform = "rotate(180deg)";
				}else{
					item.firstElementChild.lastElementChild.textContent = "";
					item.querySelector("img").style.transform = "rotate(0)";
				}
			}
			if(index === 3){
				if(item.firstElementChild.lastElementChild.textContent === ""){
					item.firstElementChild.lastElementChild.innerHTML +=topOptionsForthBlock(data);
					item.querySelector("img").style.transform = "rotate(180deg)";
				}else{
					item.firstElementChild.lastElementChild.textContent = "";
					item.querySelector("img").style.transform = "rotate(0)";
				}
			}			
		});
	});
}


function topOptionsFirstBlock(data){
	let html = "";

		data[7].topOptions.firstBlock.forEach(item => {
			html += `
				<p class="link">${item}</p>
			`
		});

	return html;
}
function topOptionsSecondBlock(data){
	let html = "";
	data[7].topOptions.secondBlock.forEach(item => {
		html += `
			<p class="link">${item}</p>
		`
	});
	return html;
}
function topOptionsThirdBlock(data){
	let html = "";

	data[7].topOptions.thirdBlock.forEach(item => {
		html += `
			<p class="link">${item}</p>
		`;
	});
	return html;
}
function topOptionsForthBlock(data){
	let html = "";
	data[7].topOptions.forthBlock.forEach(item => {
			html += `
				<p class="link">${item}</p>
			`
		});
	return html;
}


function socialLeftSide(data){
	let html = "";

	data[7].social.leftSide.logos.forEach(item => {
		html+= `
			<img src="${item}">
		`;
	});
	return html;
}
function socialRightSide(data){
	let html = "";

	data[7].social.rightSide.logos.forEach(item => {
		html+= `
			<img src="${item}">
		`;
	});
	return html;
}
function bottomOptions(data){
	let html = "";

	data[7].bottomOptions.options.forEach(item => {
		html += `
			<p class = item>${item}</p>
		`;
	});

	return html;
}