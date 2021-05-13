const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.turns = 0
    this.incorrectGuesses = []
    this.currentCard = this.deck[0]
  }
  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    this.currentCard = this.deck[this.turns]
    const turn = new Turn(guess, this.currentCard)
    this.turns++
  
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
      return turn.giveFeedBack()
    } else {
      return turn.giveFeedBack()
    }
  }
  calculatePercentCorrect() {
    return Math.round((this.turns - this.incorrectGuesses.length) / this.turns * 100)
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round