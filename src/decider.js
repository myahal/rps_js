export const Result = {
    p1Wins: "p1Wins",
    p2Wins: "p2Wins"
}

export const Throws = {
    rock: "rock",
    scissors: "scissors",
    paper: "paper"
}

export default class Requests {
    play = (p1, p2) => {
        if (p1 === Throws.rock && p2 === Throws.scissors || 
            p1 === Throws.scissors && p2 === Throws.paper || 
            p1 === Throws.paper && p2 === Throws.rock) {
            return Result.p1Wins
        }
        return Result.p2Wins
    }    
}