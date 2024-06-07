const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros)// it become array of arrayy
///[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] this will be the output
//  console.log(marvel_heros[3][1])
//  marvel_heros.concat(marvel_heros) /// work same in the array
// in conacte it return the new array where as in push it return the same array

const newheros=[...marvel_heros,...dc_heros]
console.log(newheros) // it will make the new array and separte the each element


const another_array=[1,2,3,[4,5,6,],7,[6,7,[4,5]]]
const real_array=another_array.flat(Infinity)// return all the elements in the single array 
console.log(real_array)

// to check whether it is array or not
console.log(Array.isArray("mohit"))
console.log(Array.from("mohit"))// convert the string into array
 
console.log(Array.from({name:"mohit"}))// intersting as it will not able
// to convert this into as it is little biit of confuse that it has
// to made arrayof key or value



// another way of creating an array
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
