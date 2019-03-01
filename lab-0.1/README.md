# Lab 0.1 : Understanding Intent in JavaScript

## Background

The JavaScript source found in payload-A.js is a slightly modified version of the first of 3 payloads found in the exploited npm package flatmap-stream, the package that was added as a dependency to the massively popular event-stream.

This source shows some basic techniques used to obscure the intent of JavaScript source.

## Goal

De-obfuscate payload-A.js and identify how it is loading the second payload.

## Hints

1. Format your code with ⌘+⇧+P → "Format Document".
2. Rename variables with F2.
3. There is a helper file that includes additional encoded strings. (The first and second strings in the helper file are beyond the scope of this lab.)
4. process.env contains the environment variables at time of execution
