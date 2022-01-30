export const Result = {
    p1Wins: "p1Wins"
}

export const Throws = {
    rock: "rock",
    scissors: "scissors"
}

export default class Requests {
    play = () => {
        return Result.p1Wins
    }
}