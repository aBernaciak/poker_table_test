var cards = [
    {
        Suit: "Spades",
        Number: 2,
        Img: 'assets/img/2_of_spades.png'
    }, {
        Suit: "Spades",
        Number: 3,
        Img: 'assets/img/3_of_spades.png'
    }, {
        Suit: "Spades",
        Number: 4,
        Img: 'assets/img/4_of_spades.png'
    }, {
        Suit: "Spades",
        Number: 5,
        Img: 'assets/img/5_of_spades.png'
    }, {
        Suit: "Spades",
        Number: 6,
        Img: 'assets/img/6_of_spades.png'
    }, {
        Suit: "Spades",
        Number: 7,
        Img: 'assets/img/7_of_spades.png'
    }, {
        Suit: "Spades",
        Number: 8,
        Img: 'assets/img/8_of_spades.png'
    }, {
        Suit: "Spades",
        Number: 9,
        Img: 'assets/img/9_of_spades.png'
    }, 
    {
        Suit: "Spades",
        Number: 10,
        Img: 'assets/img/10_of_spades.png'
    }, {
        Suit: "Spades",
        Number: 11,
        Name: 'Jack',
        Img: 'assets/img/jack_of_spades.png'
    }, {
        Suit: "Spades",
        Number: 12,
        Name: 'Queen',
        Img: 'assets/img/queen_of_spades.png'
    }, {
        Suit: "Spades",
        Number: 13,
        Name: 'King',
        Img: 'assets/img/king_of_spades.png'
    }, {
        Suit: "Spades",
        Number: 14,
        Name: 'Ace',
        Img: 'assets/img/ace_of_spades.png'
    },{
        Suit: "Hearts",
        Number: 2,
        drawn: false,
        Img: 'assets/img/2_of_hearts.png'
    }, {
        Suit: "Hearts",
        Number: 3,
        drawn: false,
        Img: 'assets/img/3_of_hearts.png'
    }, {
        Suit: "Hearts",
        Number: 4,
        drawn: false,
        Img: 'assets/img/4_of_hearts.png'
    }, {
        Suit: "Hearts",
        Number: 5,
        drawn: false,
        Img: 'assets/img/5_of_hearts.png'
    }, {
        Suit: "Hearts",
        Number: 6,
        drawn: false,
        Img: 'assets/img/6_of_hearts.png'
    }, 
    // {
    //     Suit: "Hearts",
    //     Number: 7,
    //     drawn: false,
    //     Img: 'assets/img/7_of_hearts.png'
    // }, {
    //     Suit: "Hearts",
    //     Number: 8,
    //     drawn: false,
    //     Img: 'assets/img/8_of_hearts.png'
    // }, {
    //     Suit: "Hearts",
    //     Number: 9,
    //     drawn: false,
    //     Img: 'assets/img/9_of_hearts.png'
    // }, {
    //     Suit: "Hearts",
    //     Number: 10,
    //     drawn: false,
    //     Img: 'assets/img/10_of_hearts.png'
    // }, {
    //     Suit: "Hearts",
    //     Number: 11,
    //     Name: 'Jack',
    //     drawn: false,
    //     Img: 'assets/img/jack_of_hearts.png'
    // }, {
    //     Suit: "Hearts",
    //     Number: 12,
    //     Name: 'Queen',
    //     drawn: false,
    //     Img: 'assets/img/queen_of_hearts.png'
    // },
    //  {
    //     Suit: "Hearts",
    //     Number: 13,
    //     Name: 'King',
    //     drawn: false,
    //     Img: 'assets/img/king_of_hearts.png'
    // }, {
    //     Suit: "Hearts",
    //     Number: 14,
    //     Name: 'Ace',
    //     drawn: false,
    //     Img: 'assets/img/ace_of_hearts.png'
    // }, {
    //     Suit: "Diamonds",
    //     Number: 2,
    //     drawn: false,
    //     Img: 'assets/img/2_of_diamonds.png'
    // }, {
    //     Suit: "Diamonds",
    //     Number: 3,
    //     drawn: false,
    //     Img: 'assets/img/3_of_diamonds.png'
    // }, {
    //     Suit: "Diamonds",
    //     Number: 4,
    //     drawn: false,
    //     Img: 'assets/img/4_of_diamonds.png'
    // }, {
    //     Suit: "Diamonds",
    //     Number: 5,
    //     drawn: false,
    //     Img: 'assets/img/5_of_diamonds.png'
    // },
    //  {
    //     Suit: "Diamonds",
    //     Number: 6,
    //     drawn: false,
    //     Img: 'assets/img/6_of_diamonds.png'
    // }, {
    //     Suit: "Diamonds",
    //     Number: 7,
    //     drawn: false,
    //     Img: 'assets/img/7_of_diamonds.png'
    // }, {
    //     Suit: "Diamonds",
    //     Number: 8,
    //     drawn: false,
    //     Img: 'assets/img/8_of_diamonds.png'
    // }, {
    //     Suit: "Diamonds",
    //     Number: 9,
    //     drawn: false,
    //     Img: 'assets/img/9_of_diamonds.png'
    // }, {
    //     Suit: "Diamonds",
    //     Number: 10,
    //     drawn: false,
    //     Img: 'assets/img/10_of_diamonds.png'
    // }, {
    //     Suit: "Diamonds",
    //     Number: 11,
    //     Name: 'Jack',
    //     drawn: false,
    //     Img: 'assets/img/jack_of_diamonds.png'
    // }, {
    //     Suit: "Diamonds",
    //     Number: 12,
    //     Name: 'Queen',
    //     drawn: false,
    //     Img: 'assets/img/queen_of_diamonds.png'
    // }, {
    //     Suit: "Diamonds",
    //     Number: 13,
    //     Name: 'King',
    //     drawn: false,
    //     Img: 'assets/img/king_of_diamonds.png'
    // }, {
    //     Suit: "Diamonds",
    //     Number: 14,
    //     Name: 'Ace',
    //     drawn: false,
    //     Img: 'assets/img/ace_of_diamonds.png'
    // }, {
    //     Suit: "Clubs",
    //     Number: 2,
    //     drawn: false,
    //     Img: 'assets/img/2_of_clubs.png'
    // }, {
    //     Suit: "Clubs",
    //     Number: 3,
    //     drawn: false,
    //     Img: 'assets/img/3_of_clubs.png'
    // }, {
    //     Suit: "Clubs",
    //     Number: 4,
    //     drawn: false,
    //     Img: 'assets/img/4_of_clubs.png'
    // }, {
    //     Suit: "Clubs",
    //     Number: 5,
    //     drawn: false,
    //     Img: 'assets/img/5_of_clubs.png'
    // }, {
    //     Suit: "Clubs",
    //     Number: 6,
    //     drawn: false,
    //     Img: 'assets/img/6_of_clubs.png'
    // }, {
    //     Suit: "Clubs",
    //     Number: 7,
    //     drawn: false,
    //     Img: 'assets/img/7_of_clubs.png'
    // }, {
    //     Suit: "Clubs",
    //     Number: 8,
    //     drawn: false,
    //     Img: 'assets/img/8_of_clubs.png'
    // }, {
    //     Suit: "Clubs",
    //     Number: 9,
    //     drawn: false,
    //     Img: 'assets/img/9_of_clubs.png'
    // }, {
    //     Suit: "Clubs",
    //     Number: 10,
    //     drawn: false,
    //     Img: 'assets/img/10_of_clubs.png'
    // }, {
    //     Suit: "Clubs",
    //     Number: 11,
    //     Name: 'Jack',
    //     drawn: false,
    //     Img: 'assets/img/jack_of_clubs.png'
    // }, {
    //     Suit: "Clubs",
    //     Number: 12,
    //     Name: 'Queen',
    //     drawn: false,
    //     Img: 'assets/img/queen_of_clubs.png'
    // }, {
    //     Suit: "Clubs",
    //     Number: 13,
    //     Name: 'King',
    //     drawn: false,
    //     Img: 'assets/img/king_of_clubs.png'
    // }, {
    //     Suit: "Clubs",
    //     Number: 14,
    //     Name: 'Ace',
    //     drawn: false,
    //     Img: 'assets/img/ace_of_clubs.png'
    // }
]