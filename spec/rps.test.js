import Requests, {Result, Throws} from '../src/decider'

describe("rps", () => {
    it("rock vs scissors", () => {
        const result = new Requests().play(Throws.rock, Throws.scissors)

        expect(result).toBe(Result.p1Wins)
    })

    it("scissors vs rock", () => {
        const result = new Requests().play(Throws.scissors, Throws.rock)
        expect(result).toBe(Result.p2Wins)
  })
})