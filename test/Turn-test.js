const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')

describe('Turn', function() {
  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', function () {
    const turn = new Turn() 
    expect(turn).to.be.an.instanceOf(Turn)
  })
  it('should instantiate users guess', function () {
    const turn = new Turn('guess')
    expect(turn.guess).to.be.a('string')
  })
})