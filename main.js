
let finalResult = JSON.parse(localStorage.getItem('finalresult'));

if (finalResult === null) {
    resets();
}

        function resets() {
            localStorage.removeItem('finalresult');
            finalResult = {
                Wins: 0,
                Losses: 0,
                Ties: 0
            };

            document.querySelector('.gameResult').innerHTML = 'Scores';

            document.querySelector('.moves').innerHTML = '';

            document.querySelector('.gameScores').innerHTML = `Wins: ${finalResult.Wins}, Losses: ${finalResult.Losses}, Ties: ${finalResult.Ties}`;
        }

        function playGame(userMove) {
            let choices = ['Rock', 'Paper', 'Scissors'];
            const index = Math.floor(Math.random() * choices.length);
            const computerMove = choices[index];

            let results = '';
        
        if (userMove === 'Rock'){
            
            if (computerMove === 'Rock') {
                results = 'Tie';
            } else if (computerMove === 'Paper'){
                results = 'You Lose' ;
            } else {
                results = 'You Win';
            }
        } else if (userMove === 'Paper') {
            
            if (computerMove === 'Rock'){
                results = 'You Win';
            } else if (computerMove === 'Paper'){
                results = 'Tie';
            } else {
                results = 'You Lose';
            }

        } else if (userMove === 'Scissors') {
        
            if (computerMove === 'Rock'){
                results = 'You Lose';
            } else if (computerMove === 'Paper'){
                results = 'You Win';
            } else if (computerMove === 'Scissors'){
                results = 'Tie';
            }
        } 
        
        if (results === 'You Win') {
            finalResult.Wins ++;
        } else if (results === 'You Lose'){
            finalResult.Losses ++;
        } else if (results === 'Tie'){
            finalResult.Ties ++;
        }   

        localStorage.setItem('finalresult', JSON.stringify(finalResult));

        document.querySelector('.gameResult').innerHTML = `${results}`;

        document.querySelector('.moves').innerHTML = `You picked ${userMove}. The computer picked ${computerMove}`;

        document.querySelector('.gameScores').innerHTML = `Wins: ${finalResult.Wins}, Losses: ${finalResult.Losses}, Ties: ${finalResult.Ties}`;

        }
