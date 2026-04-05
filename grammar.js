// to stop eslint from complaining

/* global grammar, repeat, field, choice, seq, reqeat1, optional, prec, .left, .right, .dynamic*/

/**
 * @file A parser for Google flatbuffers
 * @author David Montiel <davidm0ntiel@proton.me>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

/** @description Regex pattern for hexidecimal digits */
let h_digit = '0-9a-fA-F';

export default grammar({
  name: 'flatbuffer',

  rules: {
    source_file: ($) => repeat($._declaration),

    _declaration: ($) =>
      choice($.namespace_declaration, $.attribute_declaration),

    // EBNF: 'namespace' ident ( `.` ident )* `;`
    namespace_declaration: ($) =>
      seq(
        'namespace',
        field(
          'ident',
          seq($.identifier, repeat(optional(seq('.', $.identifier)))),
        ),
        ';',
      ),

    attribute_declaration: ($) =>
      seq(
        'attribute',
        field('name', choice($.identifier, seq('"', $.identifier, '"'))),
        ';',
      ),
    identifer: ($) => /[a-zA-Z_][a-zA-Z0-9_]*/,
    /* digits */

    /* Integers */
    decimal_integer_constant: () => /[-+]?[\d]+/,
    hex_integer_constant: () => new RegExp(`[-+]?0[xX][${h_digit}]+`),

    // EBND:dec_integer_constant | hex_integer_constant
    integer_constant: ($) =>
      choice($.decimal_integer_constant, $.hex_integer_constant),
  },
});
