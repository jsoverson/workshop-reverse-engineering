
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

/********************************/
/*       Work starts here       */
/********************************/

// Look up the declarations and references for firstVar
const firstVarLookup = lookupTable.variableMap.get(/* put the variable you want to look up here */);

// Change identifier name for all instances of usage to 'first'
// The lookup above gives you a list of declarations and references
// to the queried node. Change all the identifier names for each of
// the nodes in that list 

// This is just a console log for the lookup to get you started
// understanding the lookup structure.
console.log(firstVarLookup);

// Do the same for secondVar (start by copying the first line in this 
// work block)

/********************************/
/*        Work ends here        */
/********************************/


// Generate and output the JavaScript source
const generatedSource = codegen(tree, new FormattedCodeGen());
console.log(generatedSource);
