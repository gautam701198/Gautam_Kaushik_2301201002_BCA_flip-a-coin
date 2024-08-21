const coin = document.getElementById('coin');
const result = document.getElementById('result');
const flipButton = document.getElementById('flipButton');

function flipCoin() {
    coin.classList.add('flip');
    
    setTimeout(() => {
        coin.classList.remove('flip');
    
        const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
        result.textContent = `Result: ${outcome}`;
        
        coin.textContent = outcome;
    }, 500); 
}

flipButton.addEventListener('click', flipCoin);