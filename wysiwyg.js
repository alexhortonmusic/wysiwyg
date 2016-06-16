var famousPeople = [
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
  title: "Captain",
  name: "Jack Sparrow",
  bio: "He was a pirate, and in addition to that, he starred in Edward Scissorhands. And every Tim Burton movie ever.",
  image: "http://www.vinovenitas.com/wp-content/uploads/2014/10/Potc-4-jack-sparrow-stills-pirates-of-the-caribbean-22281675-1500-998.jpg",
  lifespan: {
    birth: 1747,
    death: "unknown"
  }
},
{
	  title: "Assistant TO the Regional Manager",
	  name: "Dwight Shrute",
    bio: "Gifted salesman and martial artist. 3 words describe him: hard working, alpha-male, jack-hammer. Merciless... Insatiable.",
	  image: "http://az616578.vo.msecnd.net/files/2015/11/14/635830719325534785241400053_UpstandingCitizen_014_Dwight-Schrute-Office.jpg",
	  lifespan: {
	    birth: 1968,
	    death: "present"
	  }
	},
	{
	  title: "Mr.",
	  name: "Mom",
	  bio: "Batman/Beetlejuice. Also, a babysitter.",
	  image: "http://www.liketotally80s.com/wp-content/uploads/2015/03/mr-mom-chainsaw.jpg",
	  lifespan: {
	    birth: 1947,
	    death: "present"
	  }
	},
	{
	  title: "Fresh",
	  name: "Prince",
	  bio: "Born in West Philadelphia. Also, raised in West Philadelphia. Spent most of his days on the playground.",
	  image: "https://i.ytimg.com/vi/Y14oz_bUt7o/maxresdefault.jpg",
	  lifespan: {
	    birth: 1973,
	    death: "present"
	  }
	}
]


// container to hold famousPeople divs
var container = document.getElementById('container');


var counter = 0;
famousPeople.forEach(function makeCard (people) {
	counter++;
	var person = `
		<div class="famous">
			<h2>${people.title} ${people.name}</h2>
			<div class="bioImg">
				<p>${people.bio}</p>
				<img src="${people.image}">
			</div>
			<div class="lifespan">
				<h3>Lifespan</h3>
				<p>From ${people.lifespan.birth} to ${people.lifespan.death}</p>
			</div>
		</div>
	`;

	var newDiv = document.createElement('article');
	newDiv.innerHTML = person;
	var newAttr = document.createAttribute("id");
	newAttr.value = `person--${counter}`;
	newDiv.setAttributeNode(newAttr);
	container.appendChild(newDiv);

	newDiv.addEventListener('click', addClickBorder);

});

function addClickBorder (event) {
	var clickedCard = event.currentTarget.id.split("--")[1];
	console.log("clickedCard", clickedCard);
	var cardToBorder = document.getElementById(`person--${clickedCard}`)
	console.log("cardToBorder", cardToBorder);
	cardToBorder.classList.toggle("clickBorder");
};






