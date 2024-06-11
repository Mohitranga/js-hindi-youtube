var c=300
let a=300
if(true)
    {
        let a=20
        const b=90
        console.log("inner ",a)
    }
   // console.log(a)
    //console.log(b)
    //console.log(c)


    ////nested scope

    function one()
    {
        const username="mohit"
        function two()
        {
            const website="youtube"
            console.log(username);
        }
       // console.log(website)
        two()

    }
    one()

    //////nested function with if
     

    ////+++++++++++++++++interesting++++++++++++++
   console.log(addone(5))
    function addone( num)
    {
            return num+1;
    }
    //addtwo(5)
    const addtwo=function(num)
    {
        return num+2;
    }
    //// this is called mini hoisting 

    