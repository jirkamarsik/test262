// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.3.18
description: >
  Returns true if searchString appears as a substring of the given string with a
  given position.
info: |
  21.1.3.18 String.prototype.startsWith ( searchString [ , position ] )

  ...
  11. Let len be the number of elements in S.
  12. Let start be min(max(pos, 0), len).
  13. Let searchLength be the number of elements in searchStr.
  14. If searchLength+start is greater than len, return false.
  15. If the sequence of elements of S starting at start of length searchLength
  is the same as the full element sequence of searchStr, return true.
  ...
---*/

var str = 'The future is cool!';

assert(
  str.startsWith('The future', 0),
  'str.startsWith("The future", 0) === true'
);
assert(
  str.startsWith('future', 4),
  'str.startsWith("future", 4) === true'
);
assert(
  str.startsWith(' is cool!', 10),
  'str.startsWith(" is cool!", 10) === true'
);
