$( document ).ready(function() {
	'use strict'

	var p1CardsRaw=[], p2CardsRaw=[], tableCards=[], pCards = [];
	var sameCards1 = false, sameCards2 = false;
	var playersCount = 2;

	function drawnCard(card) {
		var cardDetails = card.Number + ' ' + card.Suit;
		var cardIndex = cards.indexOf(card);
		cards.splice(cardIndex, 1)

		return cardDetails;
	}

	function bindCard(bind, count) {
		for (playersCount - 1; i >= 0; i--) {
			for (count; count >= 0; count--) {
				var randCard = cards[Math.floor(Math.random() * cards.length)];
				bind[i] =  randCard;
				return drawnCard(bind[i]);
			}
		}
	}

	function showCard(dest, imgSrc) {
		var imgDest = dest + ' + img';
		$(imgDest).attr('src', imgSrc)
	}

	function playerTableCards(playerCards, cardsTable, cardsTableCount, property) {
		var array = [];
		if (property == 'number') {
			for (var i = 0; i < cardsTableCount; i++) {
		    	array.push(cardsTable[i].Number);
			}
			for (var i = 0; i < playerCards.length; i++) {
		    	array.push(playerCards[i].Number);
			}
			return array;
		}
		else if (property == 'suit') {
			for (var i = 0; i < cardsTableCount; i++) {
		    	array.push(cardsTable[i].Suit);
			}
			for (var i = 0; i < playerCards.length; i++) {
		    	array.push(playerCards[i].Suit);
			}
			return array;
		}
		else if (property == 'raw') {
			for (var i = 0; i < cardsTableCount; i++) {
		    	array.push(cardsTable[i]);
			}
			for (var i = 0; i < playerCards.length; i++) {
		    	array.push(playerCards[i]);
			}
			return array;
		}
	}

	function checkFlush(cardsPlayer, cardsTable, cardsTableCount, playerNumber) {
		var arrRaw = playerTableCards(cardsPlayer, cardsTable, cardsTableCount, 'raw');
		var arrSuit = playerTableCards(cardsPlayer, cardsTable, cardsTableCount, 'suit');


		var frequency = {};  // array of frequency.
		var max = 0, maxSuit = 0;  // holds the max frequency.
		var result;   // holds the max frequency element.
		for(var v in arrSuit) {
	        frequency[arrSuit[v]]=(frequency[arrSuit[v]] || 0)+1; // increment frequency.
	        if(frequency[arrSuit[v]] > max) { // is this frequency > max so far ?
                max = frequency[arrSuit[v]];  // update max.
                result = arrSuit[v];          // update result.
                if (max >= 5) {

        			arrRaw = arrRaw.filter(function( obj ) {return obj.Suit === result; });
					maxSuit = Math.max.apply(Math,arrRaw.map(function(o){return o.Number;}))

			    	switch(maxSuit) {
					case 14:
					    $('.figure-p' + playerNumber).text
			    		('Player ' + playerNumber + ' got ' + arrSuit[v] + ' flush from Ace.');
					    break;

					case 13:
					    $('.figure-p' + playerNumber).text
			    		('Player ' + playerNumber + ' got ' + arrSuit[v] + ' flush from King.');
					    break;

					case 12:
					    $('.figure-p' + playerNumber).text
			    		('Player ' + playerNumber + ' got ' + arrSuit[v] + ' flush from Queen.');
					    break;

					case 11:
					    $('.figure-p' + playerNumber).text
			    		('Player ' + playerNumber + ' got ' + arrSuit[v] + ' flush from Jack.');
					    break;

					default:
	                	$('.figure-p' + playerNumber).text
		    			('Player ' + playerNumber + ' got ' + arrSuit[v] + ' flush from ' + maxSuit + '.');
					}
                }
	        }
		}
	}

	function checkPairs(cardsPlayer, cardsTable, cardsTableCount, playerNumber) {
		var arrNumbers = playerTableCards(cardsPlayer, cardsTable, cardsTableCount, 'number');
		var double = [], trips = [], full = [], quads = [];

		for (var i = arrNumbers.length - 1; i >= 0; i--) {
			var result = arrNumbers.filter(function(it) {return it === arrNumbers[i];});

			if (result.length === 2 && double.indexOf(result[0]) === -1) {
				double.push(result[0]);
				double.sort(function(a, b){return b-a});
				if (double.length == 1) {
					switch(double[0]) {
					case 14:
						$('.figure-p' + playerNumber).text
		    			('Player ' + playerNumber + ' got pair of Aces\'s.');
					    break;

					case 13:
						$('.figure-p' + playerNumber).text
		    			('Player ' + playerNumber + ' got pair of King\'s');
					    break;

					case 12:
						$('.figure-p' + playerNumber).text
		    			('Player ' + playerNumber + ' got pair of Queen\'s');
					    break;

					case 11:
						$('.figure-p' + playerNumber).text
		    			('Player ' + playerNumber + ' got pair of Jack\'s');
					    break;

					default:
				    	$('.figure-p' + playerNumber).text
		    			('Player ' + playerNumber + ' got pair of ' + double[0] + '\'s.');
					}
				}
				else if (double.length = 2) {
					console.log('two pairs of ' + double[0] + ' and ' + double[1]);
					$('.figure-p' + playerNumber).text
		    		('Player ' + playerNumber + ' got 2 pairs of ' + double[0] + '\'s and ' +  double[1] + '\'s.');
				}
			}
			else if (result.length === 3 && trips.indexOf(result[0]) === -1) {
				trips.push(result[0]);
				switch(double[0]) {
				case 14:
					$('.figure-p' + playerNumber).text
	    			('Player ' + playerNumber + ' got trips of Ace\'s.');
				    break;

				case 13:
					$('.figure-p' + playerNumber).text
	    			('Player ' + playerNumber + ' got trips of King\'s.');
				    break;

				case 12:
					$('.figure-p' + playerNumber).text
	    			('Player ' + playerNumber + ' got trips of King\'s.');
				    break;

				case 11:
					$('.figure-p' + playerNumber).text
	    			('Player ' + playerNumber + ' got trips of Jack\'s.');
				    break;

				default:
			    	$('.figure-p' + playerNumber).text
		    		('Player ' + playerNumber + ' got trips of ' + trips[0] + '\'s.');
				}
			}
			else if (result.length === 4 && quads.indexOf(result[0]) === -1) {
				quads.push(result[0]);
				switch(double[0]) {
				case 14:
					$('.figure-p' + playerNumber).text
	    			('Player ' + playerNumber + ' got quads of Ace\'s.');
				    break;

				case 13:
					$('.figure-p' + playerNumber).text
	    			('Player ' + playerNumber + ' got quads of King\'s.');
				    break;

				case 12:
					$('.figure-p' + playerNumber).text
	    			('Player ' + playerNumber + ' got quads of King\'s.');
				    break;

				case 11:
					$('.figure-p' + playerNumber).text
	    			('Player ' + playerNumber + ' got quads of Jack\'s.');
				    break;

				default:
			    	$('.figure-p' + playerNumber).text
		    		('Player ' + playerNumber + ' got quads of ' + quads[0] + '\'s.');
				}
			}

			if ( double.length == 1 && trips.length !== 0) {
				$('.figure-p' + playerNumber).text
	    		('Player ' + playerNumber + ' got full house. Trips: ' + trips[0] + '\'s. And pair of ' + double[0] + '\s.');
			}
		}
		double.splice(0,-1)
		console.log(double);
	}

	function checkStraight(cardsPlayer, cardsTable, cardsTableCount, playerNumber) {

		var arrNumbers = playerTableCards(cardsPlayer, cardsTable, cardsTableCount, 'number');
		var helperArray = {};

		arrNumbers.forEach(function (e) { helperArray[e] = true; });

		//now loop all in arrNumbers, and then loop again for 5
		arrNumbers.forEach(function (num) {
		  	var count = 0, l;
		  	for (l = 0; l < 5; l ++) {
		    	if (helperArray[num + l]) count ++;
	 	 	}

	  		if (count === 5) {
		    //found, push into arrNumbers just to show nice in console
		    	var nums = [];
		    	for (l = 0; l < 5; l ++) {
		      		nums.push(num + l);
		    	}

		    	switch(nums[nums.length - 1]) {
					case 14:
					    $('.figure-p' + playerNumber).text
			    		('Player ' + playerNumber + ' got straight from Ace to 10.');
					    break;

					case 13:
					    $('.figure-p' + playerNumber).text
			    		('Player ' + playerNumber + ' got straight from King to 9.');
					    break;

					case 12:
					    $('.figure-p' + playerNumber).text
			    		('Player ' + playerNumber + ' got straight from Queen to 8.');
					    break;

					case 11:
					    $('.figure-p' + playerNumber).text
			    		('Player ' + playerNumber + ' got straight from Jack to 7.');
					    break;

					default:
				    	$('.figure-p' + playerNumber).text
			    		('Player ' + playerNumber + ' got straight from ' + nums[nums.length - 1] + ' to ' + nums[0] + '.');
				}
		  	}
		})
	}

	for (var i = playersCount - 1; i >= 0; i--) {
		bindCard(p1CardsRaw, i+1);
		bindCard(p2CardsRaw, i+1);
	}

	for (var i = 4; i >= 0; i--) {
		bindCard(tableCards, i+1);
	}

	for (var i = playersCount - 1; i >= 0; i--) {
		if (i != 0 && p1CardsRaw[i].Number == p1CardsRaw[i-1].Number) {
			sameCards1 = true;
			// alert('asd 1');
		}
		if (i != 0 && p2CardsRaw[i].Number == p2CardsRaw[i-1].Number) {
			sameCards2 = true;
			// alert('asd 2');
		}
	}

	$('button#flop').click(function(){
		showCard('.table-f1', tableCards[0].Img);
		showCard('.table-f2', tableCards[1].Img);
		showCard('.table-f3', tableCards[2].Img);
		checkPairs(p1CardsRaw, tableCards, 3, 1);
		checkPairs(p2CardsRaw, tableCards, 3, 2);

		checkStraight(p1CardsRaw, tableCards, 3, 1);
		checkStraight(p2CardsRaw, tableCards, 3, 2);

		checkFlush(p1CardsRaw, tableCards, 3, 1);
		checkFlush(p2CardsRaw, tableCards, 3, 2);

		$('button#turn').removeClass('-disabled');
		$(this).addClass("-disabled");
	});

	$('button#turn').click(function(){
		showCard('.table-f4', tableCards[3].Img);
		checkPairs(p1CardsRaw, tableCards, 4, 1);
		checkPairs(p2CardsRaw, tableCards, 4, 2);

		checkStraight(p1CardsRaw, tableCards, 4, 1);
		checkStraight(p2CardsRaw, tableCards, 4, 2);

		checkFlush(p1CardsRaw, tableCards, 4, 1);
		checkFlush(p2CardsRaw, tableCards, 4, 2);
		
		$('button#river').removeClass('-disabled');
		$(this).addClass("-disabled");
	});

	$('button#river').click(function(){
		showCard('.table-f5', tableCards[4].Img);
		checkPairs(p1CardsRaw, tableCards, 5, 1);
		checkPairs(p2CardsRaw, tableCards, 5, 2);

		checkStraight(p1CardsRaw, tableCards, 5, 1);
		checkStraight(p2CardsRaw, tableCards, 5, 2);

		checkFlush(p1CardsRaw, tableCards, 5, 1);
		checkFlush(p2CardsRaw, tableCards, 5, 2);

		$(this).addClass("-disabled");
	});

	// showCard('.table-f1', 'River', tableCards[0].Img);
	// showCard('.table-f2', 'River', tableCards[1].Img);
	// showCard('.table-f3', 'River', tableCards[2].Img);
	// showCard('.table-f4', 'River', tableCards[3].Img);
	// showCard('.table-f5', 'River', tableCards[4].Img);
	// checkPairs(p1CardsRaw, p2CardsRaw, tableCards, 5);
	// checkFlush(p1CardsRaw, p2CardsRaw, tableCards, 5);


	showCard('.p1-c1', p1CardsRaw[0].Img);
	showCard('.p1-c2', p1CardsRaw[1].Img);
	showCard('.p2-c1', p2CardsRaw[0].Img);
	showCard('.p2-c2', p2CardsRaw[1].Img);

});