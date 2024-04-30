/*
Your job is to write the following function:
titleCased(): returns an array with title case tutorial names. 
Note that this function takes no arguments and should use the global tutorials variable as data.

NOTE: This lab is challenging! You will need to iterate through the tutorials array, modifying the name of each tutorial. 
To do this, you will also need to access and modify each individual word.

Some questions to consider:
> How can we "iterate" through individual words in a string?
> Can we execute an iteration inside an iteration? How?
> How can we capitalize just the first letter in a word?

*/

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(tutorials) {
  return tutorials.map(tutorial => {
    return tutorial.split(" ").map(word => {
      const capitalizedFirstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return capitalizedFirstLetter + restOfWord;
    }).join(" ");
  })
} 

titleCased(tutorials);
console.log(titleCased(tutorials));

/*
function displayTutorials() { //this function is needed in order to create a list of tutorials on the page
  const titleCasedTutorials = titleCased(tutorials);
  const tutorialsListDiv = document.getElementById("tutorialList");

  titleCasedTutorials.forEach(title => {
    const paragraph = document.createElement("body");
    paragraph.textContent = title;
    tutorialsListDiv.appendChild(paragraph);
  });
} */