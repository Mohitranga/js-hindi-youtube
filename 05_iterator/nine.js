////+++++"reduce"++++++++

const mynum=[1,2,3]
//const mytotal=mynum.reduce((acc,num)=>acc+num,0)
//console.log(mytotal);

const shopingcar=[
    {
        item:"js  course",
        price:999
    },
    {
        item:"java  course",
        price:1999
    },
    {
        item:"c++  course",
        price:9990
    },
]
const price=shopingcar.reduce((acc,item)=>acc+item.price,0)
console.log(price);