const numberDevice = document.querySelector('.number-device');

const phrases = document.querySelector('.phrases');

const btnAdviceGenerator = document.querySelector('.btn-advice-generator');

btnAdviceGenerator.addEventListener('click', () => {
    generateAdvice();
});

function generateAdvice() {
    fetch('https://api.adviceslip.com/advice', { cache: 'no-store' })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then((json) => initialize(json))
        .catch((err) => console.log(`Fetch problem: ${err.message}`));
}

function initialize(advice) {
    numberDevice.innerHTML = `Advice #${advice.slip.id}`;
    phrases.innerHTML = `&ldquo;${advice.slip.advice}&rdquo;`;
}

generateAdvice();