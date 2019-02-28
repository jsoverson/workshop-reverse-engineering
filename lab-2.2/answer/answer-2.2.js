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
      { urlPattern: '*', resourceType: 'Script', interceptionStage: 'HeadersReceived' }
    ]
  });

  // Listen for the requestIntercepted event
  client.on('Network.requestIntercepted', async ({ interceptionId, request }) => {
    console.log(`Intercepted ${request.url} {interception id: ${interceptionId}}`);

    console.log(`Continuing interception ${interceptionId}`)

    // Make sure we continue the interception
    client.send('Network.continueInterceptedRequest', {
      interceptionId
    });
  });

  page.goto('https://amazon.com');

})()

