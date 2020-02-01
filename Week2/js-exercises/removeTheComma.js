"use strict";

let myString = "hello,this,is,a,difficult,to,read,sentence";

//Log the length of myString
console.log(myString.length);

//replace the commas with spaces
myString = myString.replace(/,/g, " ");

//Log myString after replacing the commas with spaces
console.log(myString);
