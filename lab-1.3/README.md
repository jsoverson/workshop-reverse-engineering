# Lab 1.3 : Rewrite JavaScript taking scope and context into account

## Background

Rewriting portions of JavaScript is often an effective part of the reverse engineering process. Rewriting JavaScript reliably is not possible without tools that can properly assess scope and context.

## Goal

Use `shift-scope` to rename global variables `a` and `b` to `first` and `second`

## Hints

1. The argument to `lookupTable.variableMap.get()` should be the identifier node itself, not a string.
2. There are variables already defined that reference the AST nodes.
3. Each lookup returns a list of entries with declarations and references. You need to change *both* declarations and references to fully rename an identifier.
