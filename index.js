// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = ['What is Your Project Called?',
'Give Brief Instructions how to Install to Project',
'Give a Brief Description on How to Use Your Project',
'What Third Party Assests were Used to Create thie Project?(If None leave Blank)',
'List any Collaborators with You on this Project',
'What License Did you use?',
'Please Provide Test(s) for Your Project',
'Give Brief Explanation of How to Run said Tests'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt([
    {
    type: 'input',
    name:'title',
    message: questions[0],
    }
])
    .then((answers) => {
        console.log(answers.title);
    });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
