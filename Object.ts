interface Obj {
    name: string;
    age: number;
    keyThree?: boolean;
    sayMyName?: () => string;
}

const obj: Obj = {
    name: 'Bruce',
    age: 25,
    "keyThree": true,
    sayMyName: function() {
        return this.name;
    }
}

delete obj["keyThree"];

console.log(obj.name);
console.log(obj.sayMyName);

// Useful methods for working with objects
//  Returns an array of all properties
console.log(Object.keys(obj)); // ['name', 'age']
// Returns an array of all values
console.log(Object.values(obj)); // ['Bruce', 25]   
// Returns an array of all properties (including non-enumerable properties and those which use Symbol)
console.log(Object.entries(obj)); // [['name', 'Bruce'], ['age', 25]]
// Returns an array of all properties (including non-enumerable properties except for those which use Symbol)
console.log(Object.getOwnPropertyNames(obj)); // ['name', 'age']
// Returns an array of all properties (including non-enumerable properties and those which use Symbol)
console.log(Object.getOwnPropertySymbols(obj)); // []   
// Returns an array of all properties (including non-enumerable properties and those which use Symbol)
console.log(Object.getOwnPropertyDescriptors(obj)); // { name: { value: 'Bruce', writable: true, enumerable: true, configurable: true }, age: { value: 25, writable: true, enumerable: true, configurable: true } }