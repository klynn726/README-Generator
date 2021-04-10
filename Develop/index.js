// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const output = 'README.md';

// TODO: Create an array of questions for user input

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a title.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Please write a description of your project. (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'Installation instructions',
      message: 'What are the installation instructions? (Required)',
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log('Please enter installation instructions.');
          return false;
        }
      }
    },  {
      type: 'input',
      name: 'Usage',
      message: 'How is this project to be used? (Required)',
      validate: useInput => {
        if (useInput) {
          return true;
        } else {
          console.log('Please enter a title.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'License',
      message: "Select a project license with the arrow keys",
      choices: ['None', 'MIT', 'Mozilla 2.0']
    },
  ]);
};

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/readMe.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};


promptUser()
.then(answers => {
  readMe =  generateMarkdown(answers);
  writeFile(readMe)
})
.catch(err => {
  console.log(err);
});












inquirer.prompt([
  /* Pass your questions in here */
])
.then(answers => {
  userInput = generatePage(answers)
  writeFile(userInput);
})
.catch(error => {
  if(error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions)
}

// Function call to initialize app
init();

