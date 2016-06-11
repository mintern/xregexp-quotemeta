const assert = require("assert");
const XRegExp = require("xregexp");
const quotemeta = require("./xregexp-quotemeta");

quotemeta.addSupportTo(XRegExp);

assert(XRegExp('^\\Q(?*+)').test('(?*+)'));
assert(XRegExp('^\\Q.\\E.').test('.x'));
assert(!XRegExp('^\\Q.\\E.').test('xx'));
assert(XRegExp('^\\Q\\E$').test(''));
assert(!XRegExp('^\\Q\\E$').test('x'));
assert.throws(() => XRegExp('\\E'));
