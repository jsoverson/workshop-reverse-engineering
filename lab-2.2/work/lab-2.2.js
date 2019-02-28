const puppeteer = require('puppeteer');

(async function main(){
  const browser = await puppeteer.launch({
    headless:false, 
    defaultViewport:null,
    devtools: true
  });

  const page = (await browser.pages())[0];

  // Creat a CDP session
  const client = await page.target().createCDPSession();

  // Enable the Network domain
  await client.send('Network.enable');

  // Register the Request patterns we want intercepted
  await client.send('Network.setRequestInterception', { 
    patterns: [
      /* TODO: What is the Request pattern that will intercept all Script resources? */
    ]
  });

  // Listen for the requestIntercepted event
  client.on('Network.requestIntercepted', async ({ interceptionId, request }) => {
    console.log(`Intercepted ${request.url} {interception id: ${interceptionId}}`);

    console.log(`Continuing interception ${interceptionId}`)

    /* TODO: How do we continue on an intercepted request? */
    /* What happens if we run the script without continuing a request? */
  });

  page.goto('https://amazon.com');

})()

