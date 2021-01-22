function randomAussieSlang(){

slang = ["You're a few sandwiches short of a picnic",
"Fair go, mate. Fair suck of the sauce bottle. Fair crack of the whip",
"No worries, mate, she'll be right","Have a Captain Cook",
"What's the John Dory?","You're few stubbies short of a six-pack",
"Tell him he's dreaming","Dog's breakfast",
"Wrap your laughing gear 'round that","Six of one, half a dozen of the other",
"Onya bike","Cooee","One for the road",
"Hit the frog and toad","Ya C**t","Gone Walkabout", "Not here to F*** Spiders"]

//Generate number associated with random Slang array length
const randomNum = Math.floor(Math.random() * slang.length);

console.log(slang[randomNum]);

}

randomAussieSlang();