/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
    source: 'Michael Scott',
    citation: 'The Office',
    year: 2009,
    season: 'Season 5, "The Duel"'
  },
  {
    quote: "I talk a lot, so I’ve learned to tune myself out.",
    source: 'Kelly Kapoor',
    citation: 'The Office',
    year: 2011,
    season: 'Season 7, “Counseling”'
  },
  {
    quote: "If I don’t have some cake soon, I might die.",
    source: 'Stanley Hudson',
    citation: 'The Office',
    year: 2008,
    season: 'Season 4, “Survivor Man”'
  },
  {
    quote: 'Identity theft is not a joke, Jim! Millions of families suffer every year.',
    source: 'Dwight Shrute',
    citation: 'The Office',
    year: 2007,
    season: 'Season 3, “Product Recall”'
  },
  {
    quote: "There’s a lot of beauty in ordinary things. Isn’t that kind of the point?",
    source: 'Pam Beesly-Halpert',
    citation: 'The Office',
    year: 2013,
    season: 'Season 9, "Finale"'
  }
];

/***
 * `getRandomQuote` function
***/

//Generate random number from array index positions

function randomBackgroundGen(){
  let randomColor = Math.floor( Math.random() * 256);
  return randomColor;
}

function getRandomQuote(){

  let randomQuote = Math.floor( Math.random() * quotes.length);
  return quotes[randomQuote];
}

// console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/



function printQuote(){
  const quoteObject = getRandomQuote();

  let html = `<p class="quote"> ${quoteObject.quote} </p>`;
  html += `<p class="source"> ${quoteObject.source}`;
     
  if (quoteObject.citation){
      html += `<span class="citation"> ${quoteObject.citation}</span>`
    };
  if (quoteObject.year){
      html += `<span class="year"> ${quoteObject.year}</span>`
    };
  if (quoteObject.season){
    html += `<p class="season"> ${quoteObject.season}</span>`
  };
  html += '</p>'

  document.getElementById('quote-box').innerHTML = html;  
  document.body.style.backgroundColor = `rgb(${randomBackgroundGen()}, ${randomBackgroundGen()}, ${randomBackgroundGen()})`;

}

setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);