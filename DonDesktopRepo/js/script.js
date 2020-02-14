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
// My Empty array
var quotes = [
    {
      quote: 'Whoever gives heed to instruction prospers, and blessed is the one who trusts in the Lord.',
      source: 'Prov. 16v20',
     },
  
    {
      quote: 'À qui il a été beaucoup donné, il sera beaucoup demandé.',
      source: 'French Proverb',
      translation: '(Trans: "To whom much is given, much is expected.") '
     },
  
    {
      quote: 'I’ve learned that people will forget what you said, people will forget what you did, but they will never forget how you made them feel.',
      source: 'Maya Angelou '
     },
  
    {
      quote: 'Avèk pasyans e detèminasyon wa va jwenn kè foumi.',
      source: 'Haitian Proverb ',
      translation: '(Trans: "With patience and determination you will find ant heart.")'
     },
  
    {
      quote: 'There are thousands of paths to the same destination.',
      source: 'Marc Benioff',
      citation: '-Book: Trailblaizer ',
      year: 2019
     }
  ]
  console.log(quotes);
  
  
  /***
   * `getRandomQuote` function
  ***/
    // 1. Create a variable that generates a random number
    // between zero and the last index in the `quotes` array
  
    // 2. Use the random number variable and bracket notation 
    // to grab a random object from the `quotes` array, and 
    // store it in a variable
  
    // 3. Return the variable storing the random quote object
  function getRandomQuote() {
    var myRandomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[myRandomQuote]
  }
  console.log(getRandomQuote());
  
  /***
   * `printQuote` function
  ***/
  
  function printQuote () {
    var printTheQuote = getRandomQuote();
    var theHTML = 
    '<p class="quote">' + printTheQuote.quote + '</p>';
      theHTML = theHTML.concat('<p class="source">' + printTheQuote.source);
      if (printTheQuote.citation) {
        theHTML = theHTML.concat('<span class="citation">' + printTheQuote.citation + '</span>');
      }
      if (printTheQuote.year) {
        theHTML = theHTML.concat('<span class="year">' + printTheQuote.year + '</span>');
      }
      if (printTheQuote.translation) {
        theHTML = theHTML.concat('<br><span class="translation">' + printTheQuote.translation + '</span');
      }
      theHTML = theHTML.concat('</p>');
    document.getElementById('quote-box').innerHTML = theHTML;
  
  
  //   var myRandomQuote = getRandomQuote ();
  //   var htmlString = 
  //     '<p class="quote">' + myRandomQuote.quote + '</p>'
  //     '<p class="source">' + myRandomQuote.source + 
  //       if () {
  //         '<span class="citation">' + myRandomQuote.citation + '</span>'
  //       }
  //       if () {
  //         <span class="year">myRandomQuote.year</span>
  //       }
  //     '</p>'
  }
  console.log(printQuote());
  //document.getElementById('quote-box').innerHTML = printQuote;
  
  
  
  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
  ***/
  
  document.getElementById('load-quote').addEventListener("click", printQuote, false);