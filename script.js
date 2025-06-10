const username = document.querySelector('.username');
const usernameDisplay = document.querySelector('.username-display');
// console.log(usernameDisplay);


let user = 'Dude';
username.addEventListener('click', () => {
    user = prompt('Enter your name here!');
    console.log(user);
    usernameDisplay.innerHTML = `Your name is ${user}`;
})

const complimentBtn = document.querySelector('.compliment-btn');
const insultBtn = document.querySelector('.insult-btn');
const complimentInsultDisplay = document.querySelector('.compliment-insult-display');

complimentBtn.addEventListener('click', () => {
    complimentInsultDisplay.innerHTML = `Wow! ${user}, you smell so nice today!`;
});

insultBtn.addEventListener('click', () => {
    complimentInsultDisplay.innerHTML = `Ugh. ${user}, you're so ugly.`
})


const memeBtn = document.querySelector('.meme-btn');
const memeDisplay = document.querySelector('.meme-display');

memeBtn.addEventListener('click', () => {
    memeDisplay.innerHTML = `Check out this dank ass meme &#128526;`;
});

/*To work on:
-have alternating insults/compliments/memes by putting them in an array and selecting one option at random when the corresponding button is clicked

*/