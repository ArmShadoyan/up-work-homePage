

function menuRender(){
	const navBtns = document.querySelectorAll(".lis");
	const menu = document.querySelector(".menu");

	navBtns.forEach(btn  => {
		btn.addEventListener("mouseenter",(e) => {
	
			if(!btn.classList.contains("EnterPrise")){
				menu.style.display = "block";
				btn.lastElementChild.firstElementChild.style.transform = "rotate(180deg)";
			}
	
			
	
			if(e.target.firstElementChild.textContent === "FindWork"){
				menu.innerHTML = findWorkHtml();
				console.log(1);
			}else if(e.target.firstElementChild.textContent === "WhyUpwork"){
				menu.innerHTML = whyUpworkHtml();
			}else if(e.target.firstElementChild.textContent === "FindTalent"){
				menu.innerHTML = findTalentHtml();
				findTalentRightBlockHtml();
			}
	
	
			btn.addEventListener("mouseleave",(e)=>{
				if(e.relatedTarget.className !== "navBarTop"){
					hideSeen(btn);
				}				
			});
			menu.addEventListener("mouseleave",() => hideSeen(btn));
		});
	
	
	});
}

// menuRender();




 function hideSeen(btn){
	const menu = document.querySelector(".menu");
	menu.innerHTML = "";
	menu.style.display = "none";
	btn.lastElementChild.firstElementChild.style.transform = "rotate(360deg)";
}


 function findWorkHtml (){
	return  `
	<div class = "findWork">
		<div class = "firstBlock block">
			<div class="texts">
				<h4>ways to earn</h4>
				<p>Learn why Upwork has the right opportunities for you.</p>
			</div>
		</div>

		<div class = "secondBlock block">
			<div class="texts">
				<h4>Find work for your skills</h4>
				<p>Explore the kind of work available in your field.</p>
			</div>
		</div>

		<div class = "thirdBloc block">
			<div class="texts">
				<h4>Find ways to promote yourself</h4>
				<p>Explore the kind of work available in your field.</p>
			</div>	
		</div>
		
	</div>
`;
}



 function whyUpworkHtml (){
	return `
		<div class="whyUpwork">

			<div class="leftBlock">
				<div class="cards">
					<div class="card top">
						<h4>Success Stories</h4>
						<p>Discover how teams work strategically and grow together.</p>
					</div>
					<div class="card top">
						<h4>Reviews</h4>
						<p>See what it’s like to collaborate on Upwork.</p>
					</div>
					<div class="card">
						<h4>How to hire</h4>
						<p>Learn why Upwork has the right opportunities for you.</p>
					</div>
					<div class="card">
						<h4>How to find work</h4>
						<p>Learn about how to grow your independent career.</p>
					</div>
				</div>
			</div>
			<div class="rightBlock">
				<h4>Where work gets done</h4>

				<div class="cards">
					<div class="card">
						<p class="top">Guides</p>
						<p>Getting Started as a Freelancer</p>
					</div>
					<div class="card">
						<p class="top">Guides</p>
						<p>Growing Your Freelance Career</p>
					</div>
					<div class="card">
						<p class="top">Guides</p>
						<p>Hiring & Working with Independent Talent</p>
					</div>
				</div>

				<p class="bottom">See Resources</p>
			</div>

		</div>
	`;
}


function findTalentHtml(){
	let html = `
		<div class="findTalent">
			<div class="leftBlock">
				<div class="lists">
					<div class="list">
						<div class="texts">
							<h4>Post a job and hire a pro</h4>
							<p>Talent Marketplace</p>
						</div>
						<img src="/imgs/navoptionarrows/down.png">
					</div>
					<div class="list">
						<div class="texts">
							<h4>Browse and buy projects</h4>
							<p>Project Catalog</p>
						</div>
						<img src="/imgs/navoptionarrows/down.png">
					</div>
					<div class="list">
						<div class="texts">
							<h4>Let us find you the right talent</h4>
							<p>Talent Scout</p>
						</div>
						<img src="/imgs/navoptionarrows/down.png">
					</div>
				</div>
			</div>

			<div class="rightBlock">
			</div>

		</div>
	`;
	return html;
}

function findTalentRightBlockHtml(){
const list = document.querySelectorAll(".list");
const rightBlock = document.querySelector(".rightBlock");

	list.forEach(item => {
		item.addEventListener("mouseenter",(e)=>{
			if(item.firstElementChild.lastElementChild.textContent === "Talent Marketplace"){
				rightBlock.innerHTML = findTalentFirstList();
			}
			if(item.firstElementChild.lastElementChild.textContent === "Project Catalog"){
				rightBlock.innerHTML = findTalentSecondList();
			}
			if(item.firstElementChild.lastElementChild.textContent === "Talent Scout"){
				rightBlock.innerHTML = findTalentThirdList();
			}
		});
	});
}

function findTalentFirstList(){
	return `
	<div class = "textsBlock">
		<h4>Talent Marketplace<sup>TM</sup></h4>
		<p>Learn about working with talent or explore your specific hiring needs.</p>
		<p class="green">Hire on Talent Marketplace</p>
	</div>
	<div class = "listsBlock">
		<p class="hover">Development & IT</p>
		<p class="hover">Design & Creative</p>
		<p class="hover">Sales & Marketing</p>
		<p class="hover">Writing & Translation</p>
		<p class="hover">Admin & Customer Support</p>
		<p class="hover">Finance & Accounting</p>
		<p class="hover">HR & Trainingp</p>
		<p class="hover">Legal</p>
		<p class="hover">Engineering & Architecture</p>
		<p class="hover">Hire freelancers</p>
	</div>
	`;
}

function findTalentSecondList(){
	return `
	<div class = "textsBlock">
		<h4>Project Catalog<sup>TM</sup></h4>
		<p>Browse and buy projects that have a clear scope and price.</p>
		<p class="green">Browse Project Catalog</p>
	</div>
	<div class="listsBlock">
	
	
		<div class="cardsBlock">
			<div class="card">
				<img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/logo.cd04b531.jpg">
				<p>Logo Design</p>
			</div>
			<div class="card">
				<img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/blog.d73af7fb.jpg">
				<p>Articles & Blog Posts</p>
			</div>
			<div class="card">
				<img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/wp.1acec44b.jpg">
				<p>WordPress</p>
			</div>
			<div class="card">
				<img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/smm.1a3a67a0.jpg">
				<p>Social Media Marketing</p>
			</div>
			<div class="card">
				<img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/video.8e2caeb1.jpg">
				<p>Video Editing</p>
			</div>
			<div class="card">
				<img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/seo.bb0c74c3.jpg">
				<p>SEO</p>
			</div>

		</div>

	</div>
	`;
}

function findTalentThirdList(){
	return`
	<div class = "textsBlock">
		<h4>Talent Scout<sup>TM</sup></h4>
		<p>Learn how our recruiters find you expert developers, designers, and marketers.</p>
		<p class="green">Talk to Talent Scout</p>
	</div>
	<div class = "listsBlock">
		<p class="hover">Development & IT</p>
		<p class="hover">Design & Creative</p>
		<p class="hover">Marketing</p>
	</div>
	`;
}


	//////   MINI  MENU  ///////



function miniMenuHtml(){
	return `
	<div class="lists">
		<div class="listMini toggle">
			<div class="title">
				<p>Find Talent</p>
				<img src="imgs/navoptionarrows/down.png" alt="">
			</div>
		</div>
		<div class="listMini toggle">
			<div class="title">
				<p>Find Work</p>
				<img src="imgs/navoptionarrows/down.png" alt="">
			</div>
		</div>
		<div class="listMini toggle">
			<div class="title">
				<p>Why Upwork</p>
				<img src="imgs/navoptionarrows/down.png" alt="">
			</div>
		</div>
		<div class="listMini ">
			<p>Enterprise</p>
		</div>
		<div class="listMini ">
			<p>Log In</p>
		</div>
	</div>

	<div class="signUpBtnBottom">
		<div class="btn">
			<p>Sign Up</p>
		</div>
	</div>
	`;
}

function miniMenuRender(){
	const openBtn = document.querySelector(".openMenu");
	const closeBtn = document.querySelector(".closeMenu");
	const signUpBtn = document.querySelector(".signUpBtnResp");
	openBtn.addEventListener("click",() => {
		openBtn.style.display = "none";
		closeBtn.style.display = "block";
		signUpBtn.style.display = "none";
	
		setTimeout(() => {
			miniMenu.style.transform = "translate(0)";
		}, 1);
		setTimeout(() => {
			containerInner.style.display = "none";
		}, 1);
	
		closeBtn.addEventListener("click",() => {
			openBtn.style.display = "block";
			closeBtn.style.display = "none";
			signUpBtn.style.display = "block";
			miniMenu.classList.remove("findTalentFirstList");

	
	
			setTimeout(() => {
				miniMenu.style.transform = "translate(-100%)";
				miniMenu.innerHTML = miniMenuHtml();
				miniMenuRender();
				toggleBtnsFunc();
			}, 1);
			setTimeout(() => {
				containerInner.style.display = "block";
				signUpBtn.style.display = "block";
			}, 1);
			
		});
	});
}

function toggleBtnsFunc(){
	const toggleBtns = document.querySelectorAll(".toggle");

	toggleBtns.forEach((btn,index) => {
		btn.addEventListener("click",() => {
			if(index === 0){
				if(btn.lastElementChild.className !== "findTalent"){
					btn.innerHTML += findTalentHtml();
					findTalentBtnsFunc();
					btn.firstElementChild.querySelector("img").style.transform = "rotate(180deg)";
				}else{
					btn.lastElementChild.remove();
					btn.firstElementChild.querySelector("img").style.transform = "rotate(0)";
				}
			}else if(index === 1){
				if(btn.lastElementChild.className !== "findWork"){
					btn.innerHTML += findWorkHtml();
					btn.firstElementChild.querySelector("img").style.transform = "rotate(180deg)";
				}else{
					btn.lastElementChild.remove();
					btn.firstElementChild.querySelector("img").style.transform = "rotate(0)";
				}
			}else if(index === 2){
				if(btn.lastElementChild.className !== "whyUpwork"){
					btn.innerHTML += whyUpworkHtml();
					btn.firstElementChild.querySelector("img").style.transform = "rotate(180deg)";
				}else{
					btn.lastElementChild.remove();
					btn.firstElementChild.querySelector("img").style.transform = "rotate(0)";
				}
			}
			

	
		});
	});
}

function findTalentBtnsFunc(){
	const findTalent = document.querySelector(".findTalent");
	const findTalentBtns = findTalent.querySelectorAll(".list");

	findTalentBtns.forEach((btn,index) => {
		btn.addEventListener("click",() => {
			if(index === 0){
				miniMenu.innerHTML = blockTitleDiv(btn) + findTalentFirstList();
				backMiniMenu();
				miniMenu.classList.add("findTalentFirstList");
			}else if(index === 1){
				miniMenu.innerHTML = blockTitleDiv(btn) + findTalentSecondList();
				backMiniMenu();
				miniMenu.classList.add("findTalentFirstList");
			}else if(index === 2){
				miniMenu.innerHTML =  blockTitleDiv(btn) + findTalentThirdList();
				backMiniMenu();
				miniMenu.classList.add("findTalentFirstList");

			}
		});
	});

}

function blockTitleDiv(btn){
	titleDiv =`
	<div class="titleDiv">
		<img src="/imgs/navoptionarrows/down.png" class="backBtn">
		<p>${btn.firstElementChild.lastElementChild.textContent}</p>
	</div>
	
	`;
	return titleDiv;
}
function backMiniMenu(){
	const backBtn = document.querySelector(".backBtn");

	backBtn.addEventListener("click",() => {
		miniMenu.innerHTML = miniMenuHtml();
		miniMenuRender();
		toggleBtnsFunc();
		miniMenu.classList.remove("findTalentFirstList");
	});
}


// miniMenu.innerHTML = miniMenuHtml();
// miniMenuRender();
// toggleBtnsFunc();