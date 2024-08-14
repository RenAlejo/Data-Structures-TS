"use strict";
const set = new Set([1, 2, 3, 4]);
set.add(5);
console.log(set.has(5));
set.delete(3);
console.log(set.size);
set.clear();
for (const item of set) {
    console.log('set: ', item);
}
