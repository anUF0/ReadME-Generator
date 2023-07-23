// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
## Description
${answers.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contribution)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

##Usage
${answers.usage}

## Contributions
${answers.collab}
${answers.thirdParty}

## License
${answers.license}

## Tests
${answers.tests}
${answers.testHowTo}

## Questions
For anymore questions contact me at ${answers.gitProfile}
`;
}

module.exports = generateMarkdown;
