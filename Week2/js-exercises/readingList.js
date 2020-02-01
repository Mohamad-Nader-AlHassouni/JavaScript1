"use strict";

// Declare a variable that holds an array of 3 objects
let myBooks = [
  {
    title: "The World of Ice and Fire",
    author: "George R. R. Martin",
    alreadyRead: true
  },
  {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    alreadyRead: false
  },
  { title: "Fire & Blood", author: "George R. R. Martin", alreadyRead: false }
];
// Loop through the array of books
for (let index = 0; index < myBooks.length; index++) {
  //log the books details
  console.log(myBooks[index].title + " by " + myBooks[index].author);
  //check if the book read or not
  if (myBooks[index].alreadyRead == true) {
    console.log(`You already read "${myBooks[index].title}"`);
  } else {
    console.log(`You still need to read "${myBooks[index].title}"`);
  }
}
