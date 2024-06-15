////////++++++++++++++++mapp+++++++++++++++


const mynum=[1,2,3,4,5,6,7,8]
//const newnum=mynum.map((num)=> num+10)


////+++++++ chaining++++++++++
const newnum=mynum
    .map((num)=>num*10)
    .map((num)=>num+1)
    .filter((num)=>num>=40) //// we can apply many function in sequence 

console.log(newnum);