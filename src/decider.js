export const Result = {
    p1Wins: "p1Wins",
    p2Wins: "p2Wins"
}

export const Throws = {
    rock: "rock",
    scissors: "scissors"
}

export default class Requests {
    play = (p1) => {
        if (p1 === Throws.rock) {
            return Result.p1Wins
        }
        return Result.p2Wins
    }    
}