"use strict";

function tellFortune(children, partnerName, geographicLocation, jobTitle) {
  let numChildren = [0, 1, 2, 3, 4];
  let partnerNames = ["Emma", "Olivia", "Emily", "Mia", "Aria"];
  let locations = ["Amsterdam", "Dubai", "London", "Paris", "New York"];
  let jobs = [
    "Front End Developer",
    "Full Stack Developer",
    "Web Designer",
    "IT Technician",
    "Software Engineer"
  ];
  // this will randomly select values from the arrays
  children = numChildren[Math.floor(Math.random() * numChildren.length)];
  partnerName = partnerNames[Math.floor(Math.random() * partnerNames.length)];
  geographicLocation = locations[Math.floor(Math.random() * locations.length)];
  jobTitle = jobs[Math.floor(Math.random() * jobs.length)];

  return `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${children} kids.`;
}
//calling the function with random values
console.log(tellFortune());
