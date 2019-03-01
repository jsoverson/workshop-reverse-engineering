# Lab 1.2 : Resiliently extract logic from JavaScript

## Background

Directly probing a giant JavaScript object is not as future-proof as we'd like. If almost
anything changes in the target application then our path to the AST node will be broken.

Extracting and manipulating JavaScript requires code be resilient to changes in the input source.

## Goal

Use a traversal method to pick out the same function from lab 1.1 by inspecting the AST node of the function and identifying it by its shape or attributes.

## Hints

1. `allNodes` contains a list of all nodes in the AST.
2. You can iterate over that list and check every node for properties that represent the node you want to target.
3. You probably want to start with `node.type === 'FunctionDeclaration'`
4. You can then check the function name to make sure it is equal to `'e'`
