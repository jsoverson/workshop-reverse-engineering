
const { readFileSync } = require('fs');
const path = require('path');

// Import our parser and codegen functions
const { parseScript } = require('shift-parser');
const { default: codegen } = require('shift-codegen');

// Import Shift reducer and helper functions
let { reduce, adapt, ConcatReducer } = require('shift-reducer');

// Read ../payload-A.js
const payloadFilename = path.join(__dirname, '..', 'payload-A.js');
const payloadSource = readFileSync(payloadFilename, {encoding:'utf8'});

// Define a "flatten" function to find all Nodes in a tree
function flatten(tree) {
  let reducer = adapt((data, node) => [node].concat(data), new ConcatReducer);
  return reduce(reducer, tree);
}

// Parse the source code for payload-A.js
const tree = parseScript(payloadSource);

// Grab a list of all nodes
const allNodes = flatten(tree);

let functionTree = allNodes.find(node => {
  return (node.type === 'FunctionDeclaration' && node.name.name === 'e');
})

// Generates real JS source represented by the functionTree AST
const generatedSource = codegen(functionTree);

// Evaluate the function and export it from this module as "unhex"
eval('exports.unhex = ' + generatedSource);

