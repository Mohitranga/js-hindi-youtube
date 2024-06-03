const  myArr=[0,1,2,3,4,true,"hitesh"]// elements may be diff
console.log(myArr[0]);
const myarr2=new Array(1,2,3,4,5);
console.log(myarr2[3]);


//array methods

myArr.push(6);
myArr.push(7);
myArr.pop();
myArr.pop();

console.log(myArr);

/// unshift method
myarr2.unshift(9);
console.log(myarr2);// add elemt in the first postion leads to shifting of all elements
myarr2.shift();// it remove the first element from the array
console.log(myarr2);

console.log(myarr2.includes(6));//reurn the boolean value
console.log(myarr2.indexOf(3));// return the integer value


const newArr=myarr2.join();
console.log(typeof newArr);// it basically copies the elements one array to another and changes the data type to string

/// slice ,splice

 console.log("A",myarr2)
 const myn1=myarr2.slice(1,3);// copies the elements and  3 is exclusive 
console.log(myn1);

console.log("B",myarr2);
const myn2=myarr2.splice(1,3);// orignal array changes and this range is deleted from the array

console.log("C",myarr2);
console.log(myn2); // see the output