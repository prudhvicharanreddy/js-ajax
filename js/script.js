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
let quotes=[{
    "quote": "Don’t ever think I fell for you, or fell over you. I didn’t fall in love, I rose in it.",
    "source": "Toni Morrison",
    "citation":"Jazz "
  }, {
    "quote": "So many books, so little time.",
    "source": "Frank Zappa",
    "year":1992,
    "citation":"unknown"
  },
  {
    "quote": "Be the change that you wish to see in the world.",
    "source": "Mahatma Gandhi",
    "year":1945
  }, {
    "quote": "Be yourself; everyone else is already taken.",
    "source": "Oscar Wilde",
     "year":1960,
     "citation":"unknown"
  },
  {
    "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "source": "Aristotle"
  }
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {

var random_index = Math.floor(Math.random() *5);
var obj = quotes[random_index];
return obj;
}

/***
 * `printQuote` function
***/
function printQuote(){
  let RandomQuote = getRandomQuote(); //calling the above function and storing it in a variable
  let PtoHTML1 = "<p class='quote'>" + RandomQuote.quote + "</p class='quote'>" +"<p class='source'>"+ RandomQuote.source;


  if ('citation' in RandomQuote==true) {
    PtoHTML1=PtoHTML1+"<span class='citation'>" + RandomQuote.citation+ "</span class='citation'>"  ;

  }//if condition to check whether citation is present or not


  if ('year' in RandomQuote==true ) {
    PtoHTML1=PtoHTML1+"<span class='year'>"+ RandomQuote.year + "</span class='year'>"  ;

  }//if condition to check whether year property is present or not

  PtoHTML1=PtoHTML1 + "</p>";


  document.getElementById('quote-box').innerHTML = PtoHTML1;



}
printQuote();
//function call



/***
 * click event listener for the print quote buttn
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
