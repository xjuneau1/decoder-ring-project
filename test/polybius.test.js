const { should, expect } = require("chai");
const {polybius} = require("../src/polybius")

// Write your tests here!
describe('polybius() error handling', () => {
    it('should return false if the number of characters is odd', () => {
        const actual = polybius("324", false)
        expect(actual).to.be.false
    })
    it('should output a string', () => {
        const actual = polybius("thinkful")
        expect(actual).to.be.a.string
    })
})

describe('polybius() encoding', () => {
    it('should encode a message by changing each letter to number pairs', () =>{
        const actual = polybius("thinkful")
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })
    it('should maintain spaces throughout', () => {
        const actual = polybius("think ful")
        const expected = "4432423352 125413"
        expect(actual).to.equal(expected)
    })
    it('should ignore capital letters', () => {
        const actual = polybius("Thinkful")
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })
    it('should encode I or J to I/J(42)', () => {
        const actual = polybius("ij")
        const expected = "4242"
        expect(actual).to.equal(expected)
    })    
})

describe('polybius() decoding', () => {
    it("should decode by changing each number pair into letters", () => {
        const actual = polybius("4432423352125413", false)
        const expected = "thi/jnkful"
        expect(actual).to.equal(expected)
    })
    it('should decode 42 to I/J', () => {
        const actual = polybius("42", false)
        const expected = "i/j"
        expect(actual).to.equal(expected)
    })
    it('should leave spaces throughout', () => {
        const actual = polybius("4432423352 125413", false)
        const expected = "thi/jnk ful"
        expect(actual).to.equal(expected)
    })
})