$( document ).ready(function() {
	'use strict'

	var p1Cards=[], p2Cards=[], p1CardsRaw=[], p2CardsRaw=[], tableCards=[];
	var sameCards1 = false, sameCards2 = false;

	function drawnCard(card) {
		var cardDetails = card.Number + ' ' + card.Suit;
		var cardIndex = cards.indexOf(card);
		cards.splice(cardIndex, 1)

		return cardDetails;
	}

	function bindCard(bind, count) {
		for (count; count >= 0; count--) {
			var randCard = cards[Math.floor(Math.random() * cards.length)];
			bind[i] =  randCard;
			return drawnCard(bind[i]);
		}
	}

	function showCard(dest, player, imgSrc) {
		var imgDest = dest + ' + img';
		$(imgDest).attr('src', imgSrc)
		$(dest).text(player);
	}

	function checkFlush(cardsP1, cardsP2, cardsTable, cardsTableCount) {
		var flushCardsCount = 0, flushCardsCount2 = 0;
		var tableSuitCardsCount = [];

		for (var j = cardsTableCount - 1; j >= 0; j--) {

				// if (j != 0 && cardsTable[j].Suit == cardsTable[j-1].Suit && j != 0) {

				// 	tableSuitCardsCount++;
				// 	if (tableSuitCardsCount > 2) {
				// 		console.log(cardsTable[j].Suit);
				// 	}
				// }

			for (var i = 1; i >= 0; i--) {

				if (cardsP1[i].Suit == cardsTable[j].Suit) {

					if (flushCardsCount == 5) {
						$('.figure-p1').text('Player 1 got ' + cardsP1[i].Suit + ' flush.');
					}
					flushCardsCount++;
					console.log('player1 ' + flushCardsCount);
				}

				if (cardsP2[i].Suit == cardsTable[j].Suit)	{

					if (flushCardsCount2 == 5) {
						$('.figure-p2').text('Player 2 got ' + cardsP2[i].Suit + ' flush.');
					}
					flushCardsCount2++;
					console.log('player2 ' + flushCardsCount2);
				}

				// if (flushCardsCount >= 5 && flushCardsCount2 >= 5) {
				// 	$('.figure').text('Player 1 got ' + cardsP1[i].Suit + ' flush. Player 2 got ' + cardsP2[i].Suit + ' flush.');
				// }
				// else if (flushCardsCount2 == 5 && flushCardsCount == 5 ){
				// 	$('.figure').text('Player 3 got flush.');
				// }
			}
		}
	}

	function checkPairs(cardsP1, cardsP2, cardsTable, cardsTableCount) {
		var pairCount1 = 0, pairCount2 = 0;
		var checkedCard1, checkedCard2;

		for (var j = cardsTableCount - 1; j >= 0; j--) {

			for (var i = 1; i >= 0; i--) {

				if (cardsP1[i].Number == cardsTable[j].Number) {
					var checkTriple = false;

					if (checkedCard1 == cardsTable[j].Number) {
						alert('check');
						console.log(checkedCard1);
						checkTriple = true;
					}
					checkedCard1 = cardsTable[j].Number;

					if (checkTriple == true) {
						$('.figure-p1').text('Player 1 got 3triple ' + cardsP1[i].Number + '\'s.');
					}

					else if (sameCards1 == false) {

						$('.figure-p1').text('Player 1 got pair of ' + cardsP1[i].Number + '\'s.');

						pairCount1++;
						if (pairCount1 == 2) {
							$('.figure-p1').text
							('Player 1 got 2 pairs of ' + cardsP1[1].Number + '\'s and ' + cardsP1[0].Number + '\'s.');
						}
					}
					else if (sameCards1 == true) {
						$('.figure-p1').text('Player 1 got 3triple ' + cardsP1[i].Number + '\'s.');
					}
				}

				if (cardsP2[i].Number == cardsTable[j].Number) {
					var	checkTriple = false;

					if (checkedCard2 == cardsTable[j].Number) {
						alert('check');
						console.log(checkedCard2);
						checkTriple = true;
					}
					checkedCard2 = cardsTable[j].Number;

					if (checkTriple == true) {
						$('.figure-p2').text('Player 2 got 3triple ' + cardsP2[i].Number + '\'s.');
					}

					else if (sameCards2 == false ) {

						$('.figure-p2').text('Player 2 got pair of ' + cardsP2[i].Number + '\'s.');

						pairCount2++;
						if (pairCount2 == 2) {
							$('.figure-p2').text
							('Player 2 got 2 pairs of ' + cardsP2[1].Number + '\'s and ' + cardsP2[0].Number + '\'s.');
						}
					}
					else if (sameCards2 == true) {
						$('.figure-p2').text('Player 2 got 3triple ' + cardsP2[i].Number + '\'s.');
					}
				}
			}
		}
	}

	for (var i = 1; i >= 0; i--) {
		p1Cards[i] = bindCard(p1CardsRaw, i+1);
		p2Cards[i] = bindCard(p2CardsRaw, i+1);
	}

	for (var i = 4; i >= 0; i--) {
		bindCard(tableCards, i+1);
	}

	for (var i = 1; i >= 0; i--) {
		if (i != 0 && p1CardsRaw[i].Number == p1CardsRaw[i-1].Number) {
			sameCards1 = true;
			// alert('asd 1');
		}
		if (i != 0 && p2CardsRaw[i].Number == p2CardsRaw[i-1].Number) {
			sameCards2 = true;
			// alert('asd 2');
		}
	}

	// $('button#flop').click(function(){
	// 	showCard('.table-f1', 'Flop 1', tableCards[0].Img);
	// 	showCard('.table-f2', 'Flop 2', tableCards[1].Img);
	// 	showCard('.table-f3', 'Flop 3', tableCards[2].Img);
	// 	checkPairs(p1CardsRaw, p2CardsRaw, tableCards, 3);
	// 	checkFlush(p1CardsRaw, p2CardsRaw, tableCards, 3);

	// 	$(this).addClass("-disabled");
	// });

	// $('button#turn').click(function(){
	// 	showCard('.table-f4', 'Turn', tableCards[3].Img);
	// 	checkPairs(p1CardsRaw, p2CardsRaw, tableCards, 4);
	// 	checkFlush(p1CardsRaw, p2CardsRaw, tableCards, 4);

	// 	$(this).addClass("-disabled");
	// });

	// $('button#river').click(function(){
	// 	showCard('.table-f5', 'River', tableCards[4].Img);
	// 	checkPairs(p1CardsRaw, p2CardsRaw, tableCards, 5);
	// 	checkFlush(p1CardsRaw, p2CardsRaw, tableCards, 5);

	// 	$(this).addClass("-disabled");
	// });

	showCard('.table-f1', 'River', tableCards[0].Img);
	showCard('.table-f2', 'River', tableCards[1].Img);
	showCard('.table-f3', 'River', tableCards[2].Img);
	showCard('.table-f4', 'River', tableCards[3].Img);
	showCard('.table-f5', 'River', tableCards[4].Img);
	checkPairs(p1CardsRaw, p2CardsRaw, tableCards, 5);
	checkFlush(p1CardsRaw, p2CardsRaw, tableCards, 5);


	showCard('.p1-c1', p1Cards[0], p1CardsRaw[0].Img);
	showCard('.p1-c2', p1Cards[1], p1CardsRaw[1].Img);
	showCard('.p2-c1', p2Cards[0], p2CardsRaw[0].Img);
	showCard('.p2-c2', p2Cards[1], p2CardsRaw[1].Img);

});