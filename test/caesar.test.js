// Write your tests here!
const {expect} = require("chai")
const {caesar} = require("../src/caesar")

describe("caesar() error handling", ()=> {
    it("should return false if the shift value is equal to 0", () => {
        const message = 'hello there'
        const actual = caesar(message, 0)
        expect(actual).to.be.false
    })
    it("should return false if the shift value is less than -25 ", () => {
        const message = 'hello there'
        const actual = caesar(message, -26)
        expect(actual).to.be.false
    })
    it("should return false if the shift value is greater than 25 ", () => {
        const message = 'hello there'
        const actual = caesar(message, 26)
        expect(actual).to.be.false
    })
    it("should return false if the shift value is not present", () => {
        const message = 'hello there'
        const actual = caesar(message)
        expect(actual).to.be.false
    })
})

describe("caesar() encoding", () => {
    it("should encode a message by shifting letters", () => {
        const actual = caesar('thinkful', 3)
        const expected = 'wklqnixo'
        expect(actual).to.equal(expected)
    })
    it("should leave spaces and other symbols", () => {
        const actual = caesar("think ful!", 3)
        const expected = 'wklqn ixo!'
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", () => {
        const actual = caesar("Thinkful", 3)
        const expected = 'wklqnixo'
        expect(actual).to.equal(expected)
    })
    it("should wrap letters at the end of the alphabet to the beginning", () => {
        const actual = caesar('wxyz', 3)
        const expected = 'zabc'
        expect(actual).to.equal(expected)
    })
    it("should wrap letters at the beginning of the alphabet to the end", () => {
        const actual = caesar('abcd', -3)
        const expected = `xyza`
        expect(actual).to.equal(expected)
    })
})

describe("caesar() decoding", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
        const actual = caesar('wklqnixo', 3, false)
        const expected = 'thinkful'
        expect(actual).to.equal(expected)
    })
    it("should leaves spaces and other symbols as is", () => {
        const actual = caesar('wklqn ixo!', 3, false)
        const expected = 'think ful!'
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", () => {
        const actual = caesar('Wklqnixo', 3, false)
        const expected = 'thinkful'
        expect(actual).to.equal(expected)
    })
    it("should wrap letters at the end of the alphabet to the beginning", () => {
        const actual = caesar("cheud pdjdclqh", 3, false)
        const expected = "zebra magazine"
        expect(actual).to.equal(expected)
    })
    it("should wrap letters at the beginning of the alphabet to the end", () => {
        const actual = caesar('wklqn ixo!', 3, false)
        const expected = 'think ful!'
        expect(actual).to.equal(expected)
    })
})