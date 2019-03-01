# How to Reverse Engineer Web Applications

## Welcome 

Hi! This workshop is designed to walk you through two major concepts 
critical for reverse engineering web applications. There are different
ways to reverse engineer any software, these techniques are based on my
experience that the only truly effective way of analyzing and controlling
web application is to

1) Reuse as much application code as possible.
2) Intercept, modify, and simulate system or browser APIs.
3) Drive a browser programmatically.

Other methods may involve compiling a custom browser, managing a reverse proxy,
or working with a snapshot of an application and creating software around that.
Each of those techniques are effective but are very dependent on both the 
application and browser staying the same for long which is very rarely something
you can rely on.

The techniques I use are meant to leverage the latest versions of the world's most
popular browser and to extract as much information from existing application code
as possible.

### Lab Series 1 - Programmatic transformation of JavaScript

JavaScript is the primary language you will experience on the internet and it is
served in a raw but often mangled form. Having executable source code available
allows us to use existing source code parsers and transformation tools for 
our analysis. By programmtically extracting utility functions and modifying 
JavaScript to publicly expose private data structures we can more easily create
a software that manipulates an application's behavior.

### Lab Series 2 - Programmatic control of a web browser

Major browser vendors update their browsers on about a six week schedule. This rapid
update schedule means that maintaining our own browser would be an unsustaintable
burden. Learning how to drive and hook into production browsers gives us the ability
to ride the wave of the latest version and still perform the majority of what we'd
want to do with our analysis.

Puppeteer is Google's nodejs library that drives Chrome via the Chrome Devtools Protocol.
The protocol is open and does not require nodejs to interface with it. There are 
libraries and bindings for many popular languages to interface with the Chrome Devtools
Protocol and any of these concepts can be ported outside node.

## Lab structure

Labs are laid out in order and contain a similar structure across all.

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

The work should be done in the `work/` directory. A stub file with boilerplate and comments
is included. Feel free to remove or modify any line.

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

