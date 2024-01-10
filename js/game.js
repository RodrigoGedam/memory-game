const grid = document.querySelector(".grid");

const characters = [
	"beth",
	"jerry",
	"jessica",
	"morty",
	"pessoa-passaro",
	"pickle-rick",
	"rick",
	"summer",
	"meeseeks",
	"scroopy",
];

const createElement = (tag, className) => {
	const e = document.createElement(tag);
	e.className = className;
	return e;
};

const checkEndGame = () => {
	const disabledCards = document.querySelectorAll(".disabled-card");

	if (disabledCards.length === 20) {
	}
};

const checkCards = () => {
	const firstCharacter = firstCard.getAttribute("data-character");
	const secondCharacter = secondCard.getAttribute("data-character");

	if (firstCharacter === secondCharacter) {
		setTimeout(() => {
			firstCard.firstChild.classList.add("disabled-card");
			secondCard.firstChild.classList.add("disabled-card");
			firstCard = "";
			secondCard = "";
		}, 250);

		checkEndGame();
	} else {
		setTimeout(() => {
			firstCard.classList.remove("reveal-card");
			secondCard.classList.remove("reveal-card");
			firstCard = "";
			secondCard = "";
		}, 500);
	}
};

let firstCard = "";
let secondCard = "";

const revealCard = (e) => {
	if (e.target.parentNode.className.includes("reveal-card")) return;

	if (firstCard === "") {
		e.target.parentNode.classList.add("reveal-card");
		firstCard = e.target.parentNode;
	} else if (secondCard === "") {
		e.target.parentNode.classList.add("reveal-card");
		secondCard = e.target.parentNode;

		checkCards();
	}
};

const createCard = (character) => {
	const card = createElement("div", "card");
	const front = createElement("div", "face front");
	const back = createElement("div", "face back");

	front.style.backgroundImage = `url(../images/${character}.png)`;

	card.appendChild(front);
	card.appendChild(back);

	card.addEventListener("click", revealCard);
	card.setAttribute("data-character", character);

	return card;
};

const loadGame = () => {
	const duplicateCharacters = [...characters, ...characters];

	const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

	shuffledArray.forEach((character) => {
		const card = createCard(character);
		grid.appendChild(card);
	});
};

loadGame();
