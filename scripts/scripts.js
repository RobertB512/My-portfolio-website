// animation content area
let contentContainers = document.querySelectorAll(".select-item");
let orderedItemBoxes = document.querySelectorAll(".ordered-item-box");
let tableSectionHeadings = document.querySelectorAll(".table-section-heading");
let coffeeBox = document.querySelector(".coffee-box");
let aboutMe = document.querySelector(".about-me");
let foodBox = document.querySelector(".food-box");
let food = document.querySelector(".food");
let likesInterests = document.querySelector(".likes-interests");
let tablet = document.querySelector(".tablet");
let backToTableBtn = document.querySelector(".back-to-table");

// tablet content
let tabletContent = document.querySelector(".tablet-content");


// for keyboard
const keyboard = document.querySelector(".keyboard");

// some presets
aboutMe.classList.add("hide-content");
likesInterests.classList.add("hide-content");
backToTableBtn.classList.add("hide-content");
tabletContent.classList.add("hide-content");

// trigger animation area
let animTableItem = (item, showTextContent, animClass) => {
	item.addEventListener("click", () => {
		item.classList.add(animClass);
		if (item.querySelector(".food")) {
			food.classList.add("anim-food");
		}

		for (let tableSectionHeading of tableSectionHeadings) {
			tableSectionHeading.classList.remove("show-content");
			tableSectionHeading.classList.add("hide-content");
		}

		showTextContent.classList.remove("hide-content");
		showTextContent.classList.add("show-content");
		backToTableBtn.classList.remove("hide-content");
		backToTableBtn.classList.add("show-content");
	});
};

animTableItem(coffeeBox, aboutMe, "anim-order");
animTableItem(foodBox, likesInterests, "anim-order");
animTableItem(tablet, tabletContent, "anim-tablet");


// take away keyboard
const getWindowWidth = () => {
	let windowWidth = window.innerWidth
  windowWidth < 900
		? keyboard.classList.add("hide-content")
		: keyboard.classList.add("show-content");
};
window.addEventListener("load", getWindowWidth)
window.addEventListener("resize", () => {
  keyboard.classList.remove("show-content", "hide-content")
  getWindowWidth()
})

// go back to table
backToTableBtn.addEventListener("click", () => {
	for (let orderedItemBox of orderedItemBoxes) {
		orderedItemBox.classList.remove("anim-order");
	}

	aboutMe.classList.remove("show-content");
	aboutMe.classList.add("hide-content");
	likesInterests.classList.remove("show-content");
	likesInterests.classList.add("hide-content");
	tabletContent.classList.remove("show-content");
	tabletContent.classList.add("hide-content");

	for (let tableSectionHeading of tableSectionHeadings) {
		tableSectionHeading.classList.remove("hide-content");
		tableSectionHeading.classList.add("show-content");
	}

	food.classList.remove("anim-food");
	tablet.classList.remove("anim-tablet");
	backToTableBtn.classList.remove("show-content");
	backToTableBtn.classList.add("hide-content");
});


