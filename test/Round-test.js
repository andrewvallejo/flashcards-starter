/* eslint-disable max-len */
const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')



describe('Round', () => {
  let card1, card2, card3, deck, round
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    deck = new Deck([card1, card2, card3]);
    
    round = new Round(deck);
  })
  describe('Round Properties', () => {
    it('should be a function', function() {
      expect(Round).to.be.a('function')
    }) 

    it('should be an instance of Round', function () {
      expect(round).to.be.an.instanceOf(Round)
    }) 

    it('should have deck', function () {
      expect(round.deck).to.have.lengthOf(3)
    }) 

    it('should return the card in play', function() {
      round.returnCurrentCard() 
      expect(round.currentCard.to.deep.equal(deck.deck['card1']))
    })

    it.skip('should have a default of 0 turns', function () {
      expect(round.turns).to.equal(0)
    })
    
    it.skip('should have an empty array for incorrect guesses', function () {
      expect(round.incorrectGuesses).to.be.an('array')
    })
    it.skip('should be able guess correctly', function () {
      expect(round.takeTurn('sea otter')).to.be.equal('correct!')
    })

    it.skip('should be able guess incorrectly', function () {
      expect(round.takeTurn('spleen')).to.be.equal('incorrect!')
    })

    it.skip('should be able to goto the next card', function () {
      expect(round.currentCard).to.deep.equal(card2)
    })
         
    it.skip('should be able to add 1 to when a turn is taken', function () {
      round.takeTurn('pug')
      round.takeTurn('sea otter')
      expect(round.turns).to.equal(2)
    })

    it.skip('should be able to store incorrect guesses', function () {
      round.takeTurn(14)
      expect(round.incorrectGuesses).to.deep.equal([14])
    })

  })
})