const coding=["js","ruby","java","python"]

const value=coding.forEach((item)=>{
    console.log(item);
    return item
})
console.log(value); //// foreach  does not return any value 


//////++++++++++++ filter method 
const mynum=[1,2,3,4,5,56]
const newnums=mynum.filter((num)=> num>5) //// there must be a condition
console.log(newnums); //// it return the value where as for each does not return the value


