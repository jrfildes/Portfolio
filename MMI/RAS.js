const randomAussieSlang = () => {
	//Generate number associated with random Slang
	const randomNum = Math.floor(Math.random() * 16);
	// Test random number allocation with below
	//console.log(randomNum);

	let quote = ''

	switch(randomNum) {
		case 0:
			quote = "You're a few sandwiches short of a picnic"
			break;
		case 1:
			quote = 'Fair go, mate. Fair suck of the sauce bottle. Fair crack of the whip'
			break;
		case 2:
			quote = "No worries, mate, she'll be right"
			break;
		case 3:
			quote = 'Have a Captain Cook'
			break;
		case 4:
			quote = "What's the John Dory?"
			break;
		case 5:
			quote = "You're few stubbies short of a six-pack"
			break;
		case 6:
			quote = "Tell him he's dreaming"
			break;
		case 7:
			quote = "Dog's breakfast"
			break;
		case 8:
			quote = "Wrap your laughing gear 'round that"
			break;
		case 9:
			quote = "Six of one, half a dozen of the other"
			break;
		case 10:
			quote = "Onya bike"
			break;
		case 11:
			quote = "Cooee"
			break;
		case 12:
			quote = 'One for the road'
			break;
		case 13:
			quote = 'Hit the frog and toad'
			break;
		case 14:
			quote = 'Ya C**t'
			break;
		case 15:
			quote = 'Gone Walkabout'
			break;


	} console.log(quote);

};

randomAussieSlang();
