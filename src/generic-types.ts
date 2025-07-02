const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["good ethics", "sweet potatoes", "rice and beans", "peace"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]


/**
 * Challenge: figure out how to explicitly type the return value
 * of the function!
 */


const getLastItem = <Type,>(array: Type[]): Type | undefined => { 
    return array[array.length - 1]
}


// Best Option
console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));

// Alternative Option
// console.log(getLastItem<number>(gameScores));
// console.log(getLastItem<string>(favoriteThings));
// console.log(getLastItem<{
//     name: string,
//     age: number
// }>(voters));