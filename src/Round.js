const Turn = require("./Turn");
class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.turns = 0
    this.incorrectGuesses = []
    this.currentCard = this.deck[this.turns]
  }

  returnCurrentCard() {
    if (!this.currentCard && this.calculatePercentCorrect() < 90) {
      this.sayStartOver()
      this.restart()
      return (`** Start over! ** You only answered ${this.calculatePercentCorrect()}% correctly!`)
    } 
    return this.currentCard 
  }
  
  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard)
    this.turns++
    this.currentCard = this.deck[this.turns]
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
      return turn.giveFeedBack()
    }
    return turn.giveFeedBack() 
  }

  calculatePercentCorrect() {
    return Math.round((this.turns - this.incorrectGuesses.length) / this.turns * 100)
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

  sayStartOver() {
    console.log(`-----------------------------------------------------------------------`)
    console.log(`** Start over! ** You only answered ${this.calculatePercentCorrect()}% correctly!`)
    console.log(`-----------------------------------------------------------------------`)
  }
  
  restart() {
    this.turns = 0
    this.incorrectGuesses = []
    this.currentCard = this.deck[0]
  }
}

module.exports = Round