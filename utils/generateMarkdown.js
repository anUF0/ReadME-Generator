function renderLicenseBadge(license) {
  const licenseType = license;
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = 'N/A'
  }
  return yourLicense;
};

//F unction to generate markdown for README
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
This project was made with assistance of ${answers.collab} and ${answers.thirdParty}

## License
${renderLicenseBadge(answers.license)}

## Tests
${answers.tests}
${answers.testHowTo}

## Questions
For anymore questions contact me at ![${answers.gitProfile}]
`;
}

module.exports = generateMarkdown;
