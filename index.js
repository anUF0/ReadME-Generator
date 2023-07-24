// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// Array of questions for user input
const questions = ['What is Your Project Called?',
'Give a Brief Description on How to Use Your Project',
'Give Brief Instructions how to Install to Project',
'Give Brief Description the Intended Usage',
'What Third Party Assests were Used to Create this Project?(If none, leave Blank)',
'List any Collaborators who with You on this Project',
'What License Did you use?',
'Please Provide Test(s) for Your Project',
'Give Brief Explanation of How to Run said Tests',
'Please Provide a Link to your Github profile'
];

// Promts user and writes README
function writeToFile() {
    inquirer.prompt([
   {
   type: 'input',
   name:'title',
   message: questions[0],
   },
   {
  type: 'input',
  name:'description',
  message: questions[1],
  },
  {
   type: 'input',
   name:'installation',
   message: questions[2],
   },
   {
  type: 'input',
  name:'usage',
  message: questions[3],
  },
  {
  type: 'input',
  name:'thirdParty',
  message: questions[4],
  },
  {
  type: 'input',
  name:'collab',
  message: questions[5],
  },
    {
    type: 'list',
    name:'license',
    choices: ['MIT','GPLv3','GPL','N/A'],
    message: questions[6],
    },
   {
   type: 'input',
   name:'tests',
   message: questions[7],
   },
   {
   type: 'input',
   name:'testHowTo',
   message: questions[8],
   },
   {
   type: 'input',
   name:'gitProfile',
   message: questions[9],
   }
])
    .then((answers) => {
        const readMEContent = generateMarkdown(answers);

        fs.writeFile('./Output/ReadMe.md', readMEContent, (err) =>
        err ? console.log(err) : console.log('Successfully created ReadMe!')
      );
    });
}

function init() {
    writeToFile();
}

// Function call to initialize app
init();
