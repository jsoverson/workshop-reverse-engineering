# Lab 1.1 : Programmatically extract logic from JavaScript

## Background

Common JavaScript best practices and bundlers produce code that has a minimal public footprint, limiting the ability to hook into existing logic. Many applications include ready-made utility
functions that the application uses to encode and decode data, make API calls, format data, etc
and we just need to find a way to get to it.

By programmatically reusing existing application code we stand a better chance of keeping our
software running if the target application changes.

## Goal

Use the Shift parser and code generator to read payload-A.js and extract its `e` function and export it as an `unhex` method in our node script.

## Hints

1. Don't overthink it - you're just deeply accessing a property in an object.
2. console.log() as you make your way down the tree, e.g. console.log(tree.expressions[0]);
3. Copy/paste payload-A.js into astexplorer.net for an interactive UI
