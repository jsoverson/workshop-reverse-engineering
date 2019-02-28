const puppeteer = require('puppeteer');
const atob = require('atob');
const btoa = require('btoa');

(async function main(){
  const browser = await puppeteer.launch({
    headless:false, 
    defaultViewport:null,
    devtools: true
  });

  const page = (await browser.pages())[0];

  const client = await page.target().createCDPSession();

  await client.send('Network.enable');

  await client.send('Network.setRequestInterception', { 
    patterns: [
      { urlPattern: '*', resourceType: 'Script', interceptionStage: 'HeadersReceived' }
    ]
  });

  client.on('Network.requestIntercepted', async ({ interceptionId, request }) => {
    console.log(`Intercepted ${request.url} {interception id: ${interceptionId}}`);

    const response = await client.send('Network.getResponseBodyForInterception', { interceptionId });

    const originalSource = response.base64Encoded ? atob(response.body) : response.body;

    const newSource = originalSource + `;\nconsole.log('Injected into ${request.url}');`

    const httpResponse = [
      'HTTP/1.1 200 OK',
      'Date: ' + (new Date()).toUTCString(),
      'Connection: closed',
      'Content-Length: ' + newSource.length,
      'Content-Type: application/javascript',
      '', // Do not delete; responses need a blank line between header and body
      newSource
    ].join('\r\n');

    console.log(`Continuing interception ${interceptionId}`)
    client.send('Network.continueInterceptedRequest', {
      interceptionId,
      rawResponse: btoa(httpResponse)
    });
  });

  page.goto('https://www.reddit.com/');

})()

