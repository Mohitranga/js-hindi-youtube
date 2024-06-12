const myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

// now to itrate over object we require for in loop


for (const key in myobj) {
   // console.log(key) /// this will only print the keys

    /// now if a have to print the value of key we should use  "myob[key]"
    console.log(`${key } is a shortcut for ${myobj[key]}`);
}

// for in loop basically gives u the keys  it can also be applied on array

const arr=["mohit","nishant","shresth","akshit"]
for (const key in arr) 
    {
    console.log(key) //// here it will give the value of key
}

/// but map cant be iterable by this loop it will give error just lik object gave error in for of loop