
const { readFileSync } = require('fs');
const path = require('path');

const { parseScript } = require('shift-parser');
const {default: analyzeScope, ScopeLookup} = require('shift-scope');
const {default: codegen, FormattedCodeGen } = require('shift-codegen');

const payloadFilename = path.join(__dirname, '..', 'sample-source.js');
const payloadSource = readFileSync(payloadFilename, {encoding:'utf8'});

const tree = parseScript(payloadSource);

// Perform scope analysis across the entire tree
const globalScope = analyzeScope(tree);

// Generate a lookup table for our scope definition
const lookupTable = new ScopeLookup(globalScope);

// Grab references to the 2 identifiers we want to rename
const firstVar = tree.statements[0].declaration.declarators[0].binding;
const secondVar = tree.statements[1].declaration.declarators[0].binding;

// Look up the declarations and references for firstVar
const firstVarLookup = lookupTable.variableMap.get(firstVar);

// Change identifier name for all instances of usage to 'first'
firstVarLookup[0].declarations.forEach(decl => decl.node.name = 'first');
firstVarLookup[0].references.forEach(ref => ref.node.name = 'first');

// Do the same for secondVar
const secondVarLookup = lookupTable.variableMap.get(secondVar);
secondVarLookup[0].declarations.forEach(decl => decl.node.name = 'second');
secondVarLookup[0].references.forEach(ref => ref.node.name = 'second');

// Generate and output the JavaScript source
const generatedSource = codegen(tree, new FormattedCodeGen());
console.log(generatedSource);
