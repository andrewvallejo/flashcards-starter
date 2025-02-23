/* eslint-disable max-len */
const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Round', () => {
  let card1, card2, card3, deck, round
  beforeEach(() => {
    card1 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    deck = new Deck([card1, card2, card3]);
    
    round = new Round(deck);
  })
  describe('Round Properties', () => {
    it('should be a function', function() {
      expect(Round).to.be.a('function')
    }) 

    it('should be an instance of Round', () => {
      expect(round).to.be.an.instanceOf(Round)
    }) 

    it('should have a deck', () => {
      expect(round.deck).to.have.lengthOf(3)
    }) 

    it('should return the card in play', function() {
      expect(round.returnCurrentCard()).to.deep.equal(card1)
    })

    it('should be able to goto the next card', () => {
      round.takeTurn()
      expect(round.returnCurrentCard()).to.deep.equal(card2)
    })

    it('should have a default of 0 turns', () => {
      expect(round.turns).to.equal(0)
    })

    it('should be able to update turns', () => {
      round.takeTurn()
      round.takeTurn()

      expect(round.turns).to.be.equal(2)
    })
    
    it('should have an empty array for incorrect guesses', () => {
      expect(round.incorrectGuesses).to.be.an('array')
    })

    it('should be able guess incorrectly', () => {
      expect(round.takeTurn('spleen')).to.be.equal('incorrect!')
    })

    it('should be able to store incorrect guesses', () => {
      round.takeTurn('appendix')
      round.takeTurn('sea otter')

      expect(round.incorrectGuesses).to.be.lengthOf(1)
    })

    it('should be calculate how the percentage of wins', () => {
      round.takeTurn('appendix')
      round.takeTurn('sea otter') 

      expect(round.calculatePercentCorrect()).to.be.equal(50)
    })

    it('should be able to end round and receive a message', () => {
      round.takeTurn('appendix')
      round.takeTurn('sea otter') 

      expect(round.endRound()).to.be.equal('** Round over! ** You answered 50% of the questions correctly!')
    })
  })
})
