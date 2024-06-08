//const tinderuser=new Object()----> singleton object
const tinderuser={}
tinderuser.id="1223"
tinderuser.name="mohit"
tinderuser.isloggesIn=false

const regularuser={
    email:"xyz@gmail.com",
    fullname:{
        username:{
            firstname:"mohit",
            lastname:"ranga"
        }
        
    }

}
console.log(regularuser.fullname.username.firstname)


//combine the object
 const obj1={1:"a",2:"b"}
 const obj2={3:"c",4:"d"}
 const obj3={5:"e",6:"f"}

 //const obj4={obj1,obj3,obj2}
 //const obj4=Object.assign({},obj1,obj2,obj3)//{target,source1, source2,source3......}

    const obj4={...obj1,...obj2,...obj3}
 console.log(obj4)// object ke object ko dal dega means nested object


 const user=[
        {   id:1,
            email:"mohit.com"   
        },
        {   id:2,
            email:"m3hit.com"   
        },
        {   id:3,
            email:"eohit.com"   
        },
    ]
console.log(user[1].email)
console.log(tinderuser)
console.log(Object.keys(tinderuser))// return the keys in array format 
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))// make array of key and value
console.log(tinderuser.hasOwnProperty('name'));//it will return whther it has this key or not


const course={
    coursename:"js in hindi",
    price:"000",
    courseInstructor:"hitesh"
}
 
//console.log(course.courseInstructor);

const {courseInstructor : instructor}=course /// destructing
console.log(instructor)


{
    name:"hitesh", 
}
