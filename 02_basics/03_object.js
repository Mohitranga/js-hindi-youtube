//singleton -> means having a single unique object 


/// object literal
/// this is how we intialise an object via literals method
const mysm=Symbol("key1")
const jsuser={
    name:"mohit",
    age:20,
    [mysm]:"key1",
    location: "jaipur",
    email:"xyz@gmail.com",
    isLoggedIn:false,
    lastlogin:["monday","tuesday"]

}
// now how to access these values

 console.log(jsuser.email) // its is correct but not a proper way to access those variable
 console.log(jsuser["email"])// we have to send thekey in the form of string
 console.log(jsuser[mysm])   
 console.log( typeof jsuser.mysm)   

 jsuser.email="mohit@gmailcom"
 //Object.freeze(jsuser)// this will freeze the object and no one can change the value in it
 jsuser.email="ahbc@gnail.com"
 console.log(jsuser)

   // how to add function in the object
   jsuser.greeting=function()
   {
    console.log("hello js user");
   }
   console.log(jsuser.greeting());
   jsuser.greetingtwo=function()
   {
    console.log(`hello js user,${this.name}`);// if we want to access the elemet of the object 
   }
   console.log(jsuser.greetingtwo());