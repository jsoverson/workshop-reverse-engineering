# How to Reverse Engineer Web Applications

## Welcome 

This workshop walks participants through two major concepts 
critical for reverse engineering web applications. There are different
ways to reverse engineer any software -- these techniques are a result 
of 15 years of experience both defeating applications and building software
to protect against applications from being defeated. The most effective way 
of analyzing and controlling web applications is to:

1) Reuse as much application code as possible.
2) Intercept, modify, and simulate system or browser APIs.
3) Drive a browser programmatically.

Other methods may involve compiling a custom browser, managing a reverse proxy,
or working with a snapshot of an application.
Each of those techniques are effective but are dependent on both the 
application and browser staying the same for an extended duration which
you can't rely on with modern web sites.

These labs leverage the production version of Chrome, the world's most
popular browser, and the Shift suite of JavaScript tools.

### Lab Series 1 - Programmatic transformation of JavaScript

JavaScript is the primary language that drives web pages. You can observe it raw but often mangled by build processes, compilers, and optimizers. Having executable source code available
allows us to use existing source code parsers and transformation tools for 
our analysis. By programmtically extracting application level functions and modifying 
JavaScript to publicly expose private data structures we can create
a software that closely manipulates an application's behavior.

### Lab Series 2 - Programmatic control of a web browser

Major browser vendors update their browsers on about a six week schedule. This rapid
update schedule means that maintaining our own browser would be an unsustaintable
burden. Learning how to drive and hook into production browsers gives us the ability
to ride the wave of the latest version and still perform the majority of what we'd
want to do with our analysis.

Puppeteer is Google's nodejs library that drives Chrome via the Chrome Devtools Protocol.
The protocol is open and does not require nodejs to interface with it. There are 
libraries and bindings for popular languages to interface with the Chrome Devtools
Protocol and you can port all the concepts in these labs outside node.

## Labs

This lab content is located at https://github.com/jsoverson/workshop-reverse-engineering

## Directory structure

Lab directories all contain a similar structure.

```
lab-#.#/
├── answer
│   └── answer-#.#.js
├── test
│   └── test.js
├── work
│   └── lab-#.#.js
└── package.json
```

### Setup

Each lab contains its own `package.json`. Use `npm install` within each lab to install the lab's dependencies.

```bash
$ npm install
```

### Work

Complete work in the `work/` directory. A stub file is included with boilerplate and comments. Feel free to remove or change any line.

### Tests

If a lab benefits from tests then there is a test set up designed to consume from the 
`work/` directory. Run tests with the command:

```bash
$ node test/test.js
```

### Answers

Answer directories include a version of the answer that solves the problem defined.
You can run the answers with node:

```bash
$ node answer/answer*.js
```

## Prerequisites

- node.js
- npm
- Visual Studio code
- Chrome
- git

## Helpful Links

- http://shift-ast.org/parser.html 
- https://astexplorer.net/
- https://chromedevtools.github.io/devtools-protocol/
- https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md

## Alternate dev environment

Gitpod

Link your Github account to Gitpod and go here:

- https://gitpod.io#https://github.com/jsoverson/workshop-reverse-engineering

