const tabs=document.getElementById("tabs")
const content = document.querySelectorAll("#contents > .content");

const innerTabs=document.getElementById("inner-tabs");
const innerContent = document.querySelectorAll("#inner-contents > .content");

console.log(tabs, content);

const changeClass = (tabsList, el) => {
	for (let i =0; i<tabsList.children.length; i++){
		// console.log(tabsList.children[i]);
		tabsList.children[i].classList.remove("active");
	}
	el.classList.add("active");
}

const switchTabListener = (tabsList, contentsList, e) => {
	const currentTab = e.target.dataset.btn;
	console.log(currentTab);
	changeClass(tabsList, e.target);
	console.log(contentsList, currentTab);
		for (let i =0; i<contentsList.length; i++){
		contentsList[i].classList.remove("active");
		if(contentsList[i].dataset.content===currentTab){
			contentsList[i].classList.add("active");
		}
	}
}
tabs.addEventListener("click", e=>{
	switchTabListener(tabs, content, e);
});

innerTabs.addEventListener("click", e=>{
	switchTabListener(innerTabs, innerContent, e);
});
