const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  if (license == 'None') {
    return `None`;
  }
  else if  (license == 'MIT') {
  return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else if (license == 'Mozilla 2.0') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `
  # Project Title: ${data.title}

  ${renderLicenseBadge}

  ## Table of Contents

* [Description](#description)
* [Instillation](#installation)
* [Usage](#usage)
* [contributors](#contributors)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)


## Description: ${data.description}

## Instillation: ${data.installation}

## Usage: ${data.usage}

## Contributors: ${data.contributors}

## Tests: ${data.tests}

## License: ${data.license}

## Questions: ${data.github} ${data.email} ${data.contact}

`;
}

module.exports = generateMarkdown;