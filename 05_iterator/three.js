 // for of loop
 //[],[],[],[]
 //[{},{},{},{}]
 const arr=[1,2,3,4,5,6]
 for (const num of arr) {
    console.log(num);
    
 }

 /// we can also apply on string also




 ///////Map

 const map=new Map()
 map.set('IN',"india") ///key,value
 map.set('US',"america")
 map.set('FR',"france")
 //console.log(map)


 for (const key of map) {
   //console.log(key)
   
 }// this will print the whole map 
 /// but if we haveto print it separtely
 for (const [key, value] of map) {
  // console.log(key)
   //// now we can print the key and value seprately
 }

 ////  now apply loop on object

 const myobj={
   'game1':'nfs',
   'game2':'spiderman'
 }

 for (const [key,avlue] of myobj) {
   //console.log(key)
   
 }/// object are not iterable ther are different methods to iterate the object
