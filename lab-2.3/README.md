# Lab 2.3 : Modify intercepted requests

## Background

Modifying intercepted requests requires recreating an entire HTTP response and passing it along as the original.

## Goal

Retrieve the original script body and append a `console.log()` statement to the end of the script that simply logs a message.

## Hints

1. `getResponseBodyForInterception` documentation https://chromedevtools.github.io/devtools-protocol/tot/Network#method-getResponseBodyForInterception
2. What you add to each script is up to you, it's user choice as long as it is observable.
3. The last TODO requires reading the CDP documentation : https://chromedevtools.github.io/devtools-protocol/tot/Network#method-continueInterceptedRequest

