// innerHTML wont work with event listeners when dynamically adding elements... heres some options


// best solution!

var counter = 0;
function makeCard () {
	counter++;
	var card = //makes card//
	
	var newDiv = document.createElement('article');
	newDiv.innerHTML = card;
	var newAttr = document.creatAttribute('id');
	newAttr.value = 'cardWrapper--${counter}';
	newDiv.setAttributeNode(newAttr);
	cardContainer.appendChild(newDiv);

	document.getElementById(`card--${counter}`).addEventListener('click', deleteSong);
}

function deleteSong () {
var clickedBtn = event.target.id.split("--")[1];
console.log("clickedBtn", clickedBtn);
var cardToDelete = document.getElementById('')
console.log("cardToDelete", cardToDelete);
cardContainer.removeChild(cardToDelete);
}

//------------------------------------------

var btn = document.getElementById('cardMaker').addEventListener("click", makeCard);
var counter = 0;
var cardContainer = document.getElementById('cardHolder');

function makeCard() {
  counter++;
  var card = `<div class="cards"><p>I am card #${counter}</p><button id="card--${counter}">Delete</button></div>`
  // problem!
  // cardContainer.innerHTML += card;

  // solution #1
  // parentNode.parentNode Yuck

  // solution #2
  var newDiv = document.createElement("article");
  newDiv.innerHTML = card;
  var newAttr = document.createAttribute("id");
  newAttr.value = `cardWrapper--${counter}`;
  newDiv.setAttributeNode(newAttr);
  cardContainer.appendChild(newDiv);

  // solution #3
  // add id to the card container also, then target it in delete song

  document.getElementById(`card--${counter}`).addEventListener("click", deleteSong);
}

function deleteSong() {
  console.log("Delete Clicked");
  // parentNode
  // Very fragile
  // var cardToDelete = event.target.parentNode.parentNode;
  // console.log("card to Delete", cardToDelete );
  // cardContainer.removeChild(cardToDelete);

  // closest
  // var cardToDelete = event.target.closest("article");
  // console.log("card to Delete", cardToDelete );
  // cardContainer.removeChild(cardToDelete);

  // same id
  var clickedBtn = event.target.id.split("--")[1];
  console.log("clicked button", clickedBtn );
  var cardToDelete = document.getElementById(`cardWrapper--${clickedBtn}`);
  console.log("card to Delete", cardToDelete );
  cardContainer.removeChild(cardToDelete);





  