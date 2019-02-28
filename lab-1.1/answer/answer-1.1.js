
const { readFileSync } = require('fs');
const path = require('path');

// Import our parser and codegen functions
const { parseScript } = require('shift-parser');
const { default: codegen } = require('shift-codegen');

// Read ../payload-A.js
const payloadFilename = path.join(__dirname, '..', 'payload-A.js');
const payloadSource = readFileSync(payloadFilename, {encoding:'utf8'});

// Parse the source code for payload-A.js
const tree = parseScript(payloadSource);

// Log out the tree
// console.log(tree);
// Check out https://astexplorer.net for an interactive UI

// Extract the node that represents the 'e' function in payload-A.js
const functionTree = tree.statements[0].expression.operand.callee.body.statements[0].body.statements[1];

// Generates real JS source represented by the functionTree AST
const generatedSource = codegen(functionTree);

// Evaluate the function and export it from this module as "unhex"
eval('exports.unhex = ' + generatedSource);

