/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/

/* 
Here i will create the Array, and store  all my quotes as object inside.
The array needs five object and each object need to contain: the actual quote, the source, and the citation
*/
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
/*
 I created the Array above  with all my quotes abject inside ... 
 now i need to create a function to go and get the random quote from the array above
 inside that array i need to make sure that each quote is printed randomly on the page. 
 Which means, every time someone click the 'show me another quote' button; the page should display a new quote from the list of all those quote above.
 in other word: I need a "goTo QuotesAndRandomlly GetMe aQuote" type of function
*/
  function getRandomQuote() {
    var myRandomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[myRandomQuote]
  }
  /* Testing my code my printing it to the console */
  console.log(getRandomQuote());
  
  /***
   * `printQuote` function
  ***/
 /*
  Earlier I created a function to get a random quote, now I need to create another function let me print the quote to the page
  So I need a "printAboveFunction" to the screen type of function; then add use contenating to add the extra element that are inside the {}. 
  Ex: .contat ("Source", "citation", "Year", "Translation")
  */

  function printQuote () {
    var printTheQuote = getRandomQuote();
    var theHTML = 
    '<p class="quote">' + printTheQuote.quote + '</p>';
      theHTML = theHTML.concat('<p class="source">' + printTheQuote.source);
      /* 
      To make sure that my source, citation, and translation print to the page;
      I need to create some if statement
      */
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
      // Connect everything here with the innerHTML for the page.
    document.getElementById('quote-box').innerHTML = theHTML;
  
  
  
  }
  console.log(printQuote());
  //document.getElementById('quote-box').innerHTML = printQuote;
  
  
  
  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
  ***/
  
  document.getElementById('load-quote').addEventListener("click", printQuote, false);