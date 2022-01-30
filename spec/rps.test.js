import Requests, {Result, Throws} from '../src/decider'

describe("rps", () => {
    it("rock vs scissors", () => {
        const result = new Requests().play(Throws.rock, Throws.scissors)

        expect(result).toBe(Result.p1Wins)
    })
})