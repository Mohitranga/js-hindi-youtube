const user={
    username:"mohit",
    price:999,

    welcomeMessage:function()
    {
        console.log(`${this.username},welcome to website`);
        console.log(this)// print all the current context value 
    }
}
//user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()
//console.log(this) 
//////
function chai(){
    let username="mohit"
    console.log(this.username)//will show undefined as we cant use the this function with the function
    console.log(this)// we will get the local value or predefined value 
}
//chai()



/////// -------Arrow function-------
const chai1=() =>    ///remove the function keyword and add "=>""
    {
        let username="mohit ranga"
        console.log(this.username)

    }
    //chai1()// works same as normal function 


    //    const addtwo=(num1,num2) =>{
    //        return num1+num2
    //        }

    /// now have some changes in the code 
    
    //const addtwo=(num1,num2) => num1+num2 /// implicit key function
    //const addtwo=(num1,num2) => (num1+num2) ////()-> dont require return but {}->require return keyword
     
    const addtwo=(num1,num2)=>({username:"mohit"})/// to return an object we must require the ( )
    //console.log(addtwo(3,5))

    ////// iife -> immediately invoked function expression
    (function chai3(){ 
        /// named iife
        console.log(`db connected`);
    })()/// function_name() but now in iife ()() , the first () is for function defintion and the othe () is fo the function call 
    /// why it is came ?
    /// global scope  variable ke pollution ko hatne ke liye we used  iife
    /// semicolon is must to end the control flow


    