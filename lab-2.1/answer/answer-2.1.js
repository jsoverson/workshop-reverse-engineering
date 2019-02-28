// Import Puppeteer
const puppeteer = require('puppeteer');

// This is an async IIFE (pronounced IFFY).
// Confused as to what this pattern is for?
// Visit https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(async function main(){

  // Launch Chrome
  const browser = await puppeteer.launch({
    headless:false, 
    defaultViewport:null,
    devtools: true
  });

  // Grab the first open page
  const page = (await browser.pages())[0];

  // Go to the URL
  page.goto('https://www.example.com');

})()

