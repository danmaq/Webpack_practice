const fp = require('lodash/fp');

const source =
  [{ w: "a", a: 3, b: 4 },
  { w: "a", a: 4, b: 0 },
  { w: "a", a: 0, b: 0 },
  { w: "b", a: 7, b: 4 },
  { w: "c", a: 8, b: 9 },
  { w: "c", a: 5, b: 7 },
  { w: "d", a: 6, b: 9 },
  { w: "d", a: 8, b: 4 },
  { w: "d", a: 6, b: 5 },
  { w: "e", a: 7, b: 0 }];

const groupW = fp.groupBy('w');
const meanA = fp.meanBy('a');
const meanB = fp.meanBy('b');

const result =
  Object
    .entries(groupW(source))
    .map(([w, v]) => ({ w, a: meanA(v), b: meanB(v) }));

console.log(result);
