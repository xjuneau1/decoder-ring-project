const {substitution} = require("../src/substitution")
const {expect} = require("chai")

//abcdefghijklmnopqrstuvwxyz
//qwertyuiopasdfghjklzxcvbnm

describe("substitution() error handling", () => {
    it("should return false if user alphabet not given", ()=>{
        const message = "hello world"
        const actual = substitution(message)
        expect(actual).to.be.false
    })
    it("should return false if the user alphabet is not 26 characters", ()=>{
        const actual = substitution("hello world", "qwertyuiopasdfghjkl")
        expect(actual).to.be.false
    })
    it("should return false if user alphabet does not have 26 different characters", ()=>{
        const actual = substitution("hello world", "qwertyuiopasdfghjklqwertyu")
        expect(actual).to.be.false
    })
})

describe("substitution() encoding", () => {
    it("should encode a message with the given user alphabet", ()=>{
        const actual = substitution("hello world", "qwertyuiopasdfghjklzxcvbnm")
        const expected = "itssg vgksr"
        expect(actual).to.equal(expected)
    })
    it("should work with a user alphabet that has symbols", ()=>{
        const actual = substitution("abcdef", "qwe)tyuiopasdfghjk%zxcvbnm")
        const expected = "qwe)ty"
        expect(actual).to.equal(expected)
    })
    it("should keep spaces from user input", ()=>{
        const actual = substitution("hello world", "qwertyuiopasdfghjklzxcvbnm")
        const expected = "itssg vgksr"
        expect(actual).to.equal(expected)
    })
})

describe("substitution() decoding", () => {
    it("should decode a message with the given user alphabet", ()=>{
        const actual = substitution("itssg vgksr", "qwertyuiopasdfghjklzxcvbnm", false)
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })
    it("should work with a user alphabet that has symbols", ()=>{
        const actual = substitution("qwe)ty", "qwe)tyuiopasdfghjk%zxcvbnm", false)
        const expected = "abcdef"
        expect(actual).to.equal(expected)
    })
    it("should keep spaces from user input", ()=>{
        const actual = substitution("itssg vgksr", "qwertyuiopasdfghjklzxcvbnm", false)
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })
})