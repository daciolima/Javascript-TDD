import * as R from "ramda";

import soma, { subtrair, mult, dividir as div, PI } from "./src/utils";

const arr1 = [1, 1, 12, 3, 4, 5, 5, 6, 6, 6, 7];
const arr2 = [8, 8, 9, 10, 11, 12, 13, 14, 14, 15, 15];

const arr = R.union(arr1, arr2);
const arrUniq = R.uniq(arr1, arr2);

console.log(arr);
console.log(arrUniq);

console.log(soma(2, 2));
console.log(subtrair(2, 2));
console.log(mult(2, 2));
console.log(div(2, 2));
console.log(PI);
