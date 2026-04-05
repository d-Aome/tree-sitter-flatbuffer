/**
 * @file A parser for google flatbuffers
 * @author David Montiel <davidm0ntiel@proton.me>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: 'flatbuffer',

  rules: {
    // TODO: add the actual grammar rules
    source_file: ($) => repeat($._declaration),

    _declaration: ($) =>
      choice($.namespace_declaration, $.attribute_declaration),

    namespace_declaration: ($) =>
      seq('namespace', field('name', $.identifier), ';'),

    attribute_declaration: ($) =>
      seq('attribute', field('name', $.identifier), ';'),

    identifier: ($) => /[a-zA-Z][a-zA-Z0-9]*/,
  },
});
