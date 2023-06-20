const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Index de la slide actuelle affichée pour pouvoir lui enlever la classe "dot_selected" quand on change
let currentSlideDisplayed = 0;

const dotsDiv = document.querySelector('.dots');

// On ajoute le nombre de points (dot) par rapport au nombre d'images dans le tableau "slides"
for (let i = 0; i < slides.length; i++) {
	// On créé une div
	const newDot = document.createElement('div');

	// On lui ajoute sa classe et son id unique
	newDot.classList.add('dot');
	newDot.id = "dot-"+i;

	// On ajoute l'évènement pour changer l'image en cliquant sur le point
	newDot.addEventListener('click', function() {
		displayDot(i);
	});

	// On ajoute le point dans la div de tous les points
	dotsDiv.appendChild(newDot);
}

// Quand on clique sur la flèche de gauche
document.querySelector('.arrow_left').addEventListener('click', function() {
	previousSlide();
});

// Quand on clique sur la flèche de droite
document.querySelector('.arrow_right').addEventListener('click', function() {
	nextSlide();
});
  
// Fonction pour afficher une slide précise avec son index (de 0 à slides.length-1)
function displayDot(dotIndex){
	// On enlève la classe "dot_selected" du précédent point affiché
	const dotDisplayedBefore = document.getElementById('dot-'+currentSlideDisplayed);
	dotDisplayedBefore.classList.remove('dot_selected');

	// On ajoute la classe "dot_selected" au nouveau point
	const newDotDisplayed = document.getElementById('dot-'+dotIndex);
	newDotDisplayed.classList.add('dot_selected');

	// On change l'image
	const slideImg = document.querySelector(".banner-img");
	slideImg.src = "assets/images/slideshow/"+slides[dotIndex]["image"];

	// On change le paragraphe
	const slideParagraph = document.querySelector(".banner-paragraph");
	slideParagraph.innerHTML = slides[dotIndex]["tagLine"];

	// On met à jour le point actuel
	currentSlideDisplayed = dotIndex;
}

// Fonction pour passer à la slide suivante
function nextSlide(){
	// On calcule le nouvel index
	let nextSlideIndex = currentSlideDisplayed+1;
	// Si l'index dépasse le nombre d'images, on retourne à la première image
	if(nextSlideIndex >= slides.length){
		nextSlideIndex = 0;
	}
	displayDot(nextSlideIndex);
}

// Fonction pour passer à la slide précédente
function previousSlide(){
	// On calcule le nouvel index
	let previousSlideIndex = currentSlideDisplayed-1;
	// Si l'index est plus petit que 0, on va à la dernière image
	if(previousSlideIndex < 0){
		previousSlideIndex = slides.length-1;
	}
	displayDot(previousSlideIndex);
}

// On initialise le tout en affichant la première image
displayDot(0);
