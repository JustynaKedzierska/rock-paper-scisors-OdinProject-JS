const choice = ["rock", "papper", "scissors"];

function computerPlay(){                                                             
    const computerSelection= choice[Math.floor(Math.random()*choice.length)];
    return computerSelection;
}

function game(){                                                            
    let player_count = 0;
    let computer_count = 0;

    for ( let games = 1; games <= 5; games++ ) { 
        // let games = 5;
        const playerSelection = prompt("Co wybierasz ?: rock , scissors or papper ?").toLocaleLowerCase();  // take player's choise ignore upper case
        const computerSelection = computerPlay();                                       // teke computer's random choise
      
        console.log("Player choice is: " + playerSelection);                           
        console.log("Computer choise is " + computerSelection);
    

        function playRound(playerSelection, computerSelection) {
       

            if (computerSelection === playerSelection) {
                computer_count = computer_count + 1;
                player_count = player_count + 1;
                return "Remis !!"

            } 
            else if (computerSelection === "papper" && playerSelection === "rock"){
                computer_count = computer_count + 1;
                // console.log("player score:" + player_count);
                // console.log("computer score: " + computer_count);

                return "Computer won !!"
              
            } 
            else if (computerSelection === "papper" && playerSelection === "scissors") {
                player_count = player_count + 1;
                // console.log("player score:" + player_count);
                // console.log("computer score: " + computer_count);
                return "Player won"
               

            }
            else if (computerSelection === "rock" && playerSelection === "scissors") {
                computer_count = computer_count + 1;
                // console.log("player score:" + player_count);
                // console.log("computer score: " + computer_count);
                return "Player won"
            }

            else if (computerSelection === "scissors" && playerSelection === "rock") {
                player_count = player_count +1;
                // console.log("player score:" + player_count);
                // console.log("computer score: " + computer_count);
                return "Player won"
               
            }
            else if ( computerSelection == "rock" && playerSelection === "papper") {
                player_count = player_count + 1;
                // console.log("player score:" + player_count);
                // console.log("computer score: " + computer_count);
                return "Player won"

            }
            else if ( computerSelection === "scissors" && playerSelection === "papper") {
                computer_count = computer_count + 1;
                // console.log("player score:" + player_count);
                // console.log("computer score: " + computer_count);
                return "Computer won"
            }
        }
    console.log(playRound(playerSelection, computerSelection));
    console.log("Total player score :" + player_count);
    console.log("Total computer score: " + computer_count);
    }
}

game();

    
    