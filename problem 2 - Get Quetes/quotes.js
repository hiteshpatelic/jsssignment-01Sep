
// https://zenquotes.io/api/random 
const quotes = [
    {
        quote: 'Do you want to know who you are? Don\'t ask. Act! Action will delineate and define you.',
        author : 'Thomas Jefferson'
    },
    {
        quote: 'Whatever satisfies the soul is truth.',
        author: 'Walt Whitman'
    },
    {
        quote: 'Surround yourself with only people who are going to lift you higher.',
        author: 'Oprah Winfrey'
    },
    {
        quote: 'Better to die fighting for freedom than be a prisoner all the days of your life.',
        author: 'Bob Marley'
    },
    {
        quote: 'To be alive - is Power.',
        author: 'Emily Dickinson'
    },
    {
        quote: 'Take the attitude of a student. Never be too big to ask questions. Never know too much to learn something new.',
        author: 'Og Mandino'
    },
    {
        quote: 'Your past does not equal your future.',
        author: 'Tony Robbins'
    },
    {
        quote: 'The heart wants what it wants - or else it does not care.',
        author: 'Emily Dickinson'
    },
    {
        quote: 'The greatest value of a picture is when it forces us to notice what we never expected to see.',
        author: 'John Tukey'
    },
    {
        quote: 'Tomorrow is only found in the calendar of fools.',
        author: 'Og Mandino'
    }
]

const body = document.body;
const randomNumber = `#${Math.floor(Math.random() * 1000000)}`
body.style.backgroundColor = randomNumber
const getQuoteBtn = document.getElementById('getQuoteBtn');
getQuoteBtn.style.backgroundColor = randomNumber

const quotesText = document.getElementById('quote');
const quotesAuthor = document.getElementById('author');

const getIndex = Math.floor(Math.random() * 10);

quotesText.innerHTML = `<i class="fas fa-quote-left"></i> ${ quotes[getIndex].quote} <i class="fas fa-quote-right"></i>`;
quotesAuthor.innerHTML = `- ${quotes[getIndex].author}`;

function getNewQuote(){

    const randomNumber = `#${Math.floor(Math.random() * 1000000)}`
    body.style.backgroundColor = randomNumber
    getQuoteBtn.style.backgroundColor = randomNumber

    const getIndex = Math.floor(Math.random() * 10);
    quotesText.innerHTML = `<i class="fas fa-quote-left"></i> ${ quotes[getIndex].quote} <i class="fas fa-quote-right"></i>`;
    quotesAuthor.innerHTML = `- ${quotes[getIndex].author}`;
}


const timeStatus = document.getElementById('time');
console.log(timeStatus)
var time = new Date();
var hour = time.getHours();

console.log(hour)
if(hour>6 && hour<11){
    timeStatus.innerHTML= "Morning"
}
else if(hour>11 && hour<16){
    timeStatus.innerHTML= "Afternoon"
}
else if(hour>16 && hour<18){
    timeStatus.innerHTML= "Evening"
}
else if(hour>18 && hour<24){
    timeStatus.innerHTML= "Nignt"
}
else{
    timeStatus.innerHTML= "Nignt"
}



