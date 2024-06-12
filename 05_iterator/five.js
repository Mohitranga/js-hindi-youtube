const coding=["js","c++","java","python"]
/// call back function dont have name

coding.forEach(function (val)
{
    console.log(val);
}) // we can easily apply any function to all the elements of array 


/// same can be done in arrow function

/// now if u have seprate function defintion then 

function printme(item){
 //   console.log(item);
}
//coding.forEach(printme) //// here u have to give the function name and pass the refernce only
 coding.forEach((item,index,arr)=>{
    console.log(index,item,arr);

    
 })



 /// array of object

 const mycoding=[

    {
        langname:"javascript",
        langfile:"five"

    },
    {
        langname:"c++",
        langfile:"four"

    },
    {
        langname:"react",
        langfile:"three"

    }
 ]

 mycoding.forEach((item)=>{
    console.log(item.langfile);
 })/// we can here only pass the object by arrow function