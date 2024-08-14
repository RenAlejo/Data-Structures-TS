const map = new Map<string, number>([['a', 1], ['b', 2], ['c', 3]]);
map.set('d', 4);
map.delete('a');
console.log(map.has('a'));
console.log('Size:', map.size);
map.clear();

for(const [key, value] of map) {
    console.log(key, value);
}