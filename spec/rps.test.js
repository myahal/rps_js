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

    it("scissors vs paper", () => {
        const result = new Requests().play(Throws.scissors, Throws.paper)
        expect(result).toBe(Result.p1Wins)
    })

    it("paper vs scissors", () => {
        const result = new Requests().play(Throws.paper, Throws.scissors)
        expect(result).toBe(Result.p2Wins)
    })

    it("paper vs rock", () => {
        const result = new Requests().play(Throws.paper, Throws.rock)
        expect(result).toBe(Result.p1Wins)
    })

    it("rock vs paper", () => {
        const result = new Requests().play(Throws.rock, Throws.paper)
        expect(result).toBe(Result.p2Wins)
    })

    it("rock vs rock", () => {
        const result = new Requests().play(Throws.rock, Throws.rock)
        expect(result).toBe(Result.tie)
    })
})