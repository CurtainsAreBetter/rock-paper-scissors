

// Returns a random rps move
function computerPlay() {
    switch(Math.floor(Math.random() * 3) + 1) {
        case 1: 
            return "rock";
        case 2:
            return "paper";
        case 3: 
            return "scissors";
    }
}

// Returns win lose tie from p1's perspective
function playRound(p1, p2) {
    p1 = p1.toLowerCase();
    p2 = p2.toLowerCase();
    switch(p1) {
        case "rock":
            switch(p2) {
                case "scissors":
                    return "win";
                case "paper":
                    return "lose";
                case "rock":
                    return "tie";
                default:
                    return "ERROR";
            }
        case "paper":
            switch(p2) {
                case "rock":
                    return "win";
                case "scissors":
                    return "lose";
                case "paper":
                    return "tie";
                default:
                    return "ERROR";
            }
        case "scissors":
            switch(p2) {
                case "paper":
                    return "win";
                case "rock":
                    return "lose";
                case "scissors":
                    return "tie";
                default:
                    return "ERROR";
            }
        default:
            return "ERROR";
    }
}