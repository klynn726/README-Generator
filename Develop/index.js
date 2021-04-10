// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const output = 'README.md';
let readMe = "";

// TODO: Create an array of questions for user input
//re-worked the module code

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
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
      name: 'description',
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
      name: 'installation',
      message: 'What are the installation instructions? (Required)',
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log('Please enter installation instructions.');
          return false;
        }
      }
    }, 
     {
      type: 'input',
      name: 'usage',
      message: 'what are the instructions to use this project? (Required)',
      validate: useInput => {
        if (useInput) {
          return true;
        } else {
          console.log('Please enter a usage instructions.');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: "Select a project license with the arrow keys",
      choices: ['None', 'MIT', 'Mozilla 2.0']
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Who contributed to the production of this project? (Required)',
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
      name: 'tests',
      message: 'How do you test this project? (Required)',
      validate: testsInput => {
        if (testsInput) {
          return true;
        } else {
          console.log('Please enter test directions.');
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
          console.log('Please enter your GitHub username.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contact',
      message: 'Please enter directions on how to contact you (Required)',
      validate: contactInput => {
        if (contactInput) {
          return true;
        } else {
          console.log('Please enter directions on how to contact you.');
          return false;
        }
      }
    }
  ]);
};


const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./dist/${output}`, fileContent, err => {
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