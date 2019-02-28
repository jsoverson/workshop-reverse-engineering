# Payload A

The JavaScript source found in payload-A.js is the first of 3 payloads found in the exploited npm package flatmap-stream, the package that was added as a dependency to the massively popular event-stream.

This source shows some basic techniques used to obscure the intent of JavaScript source.

## Goal

De-obfuscate this source and identify how it is loading the second payload.

## Hints

1. Format source (cmd-shift-P-> "Format Document")
2. Rename variables when you understand what they do (F2 when cursor is over an identifier)
3. De-obfuscate strings manually with https://codebeautify.org/hex-string-converter

## Bonus task

For the friendly: help a neighbor.

For the motivated: decrypt the second payload.
