  let mydate= new Date()
  //console.log(mydate.toString());
  //console.log(mydate.toDateString());
  //console.log(mydate.toISOString());
  //console.log(mydate.toLocaleString());

  console.log(typeof mydate);//object
    
  let mycreatedate=new Date(2023,0,23)// month start from 0 in js
 console.log(mycreatedate.toDateString()); 
 let mycreatedate1=new Date(2023,0,23,5,3);// hours ans minutes
 console.log(mycreatedate1.toLocaleString());


 let mytimestamp=Date.now()//time in millisecond
 console.log(mytimestamp);
 console.log(mycreatedate.getTime());// return the time of that date
 console.log(Math.floor(Date.now()/1000));//convert into seconds
let newDate=new Date();
console.log(newDate.getMonth());///returnb the month as like we can also find day and year etc and all 
 newDate.toLocaleString('default',{weekday: "narrow"});