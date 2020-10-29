const fs = require("fs");
const inquirer = require('inquirer');
const util = require("util");
const markDown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);


//Query for user inputs
const query = [
    {
        name: "title",
        type: "input",
        message: "Enter your project title: ",
    },
    {
        name: "description",
        type: "input",
        message: "Enter project description: ",
    },
    {
        name: "installation",
        type: "input",
        message: "Enter any installation instructions: ",
    },
    {
        name: "usage",
        type: "input",
        message: "What is the intended use for your application? ",
    },
    {
        name: "contributors",
        type: "input",
        message: "Who has contributed to this project? ",
    },
    {
        name: "tests",
        type: "input",
        message: "Provide any relevant test data: ",
    },
    {
        name: "license",
        type: "checkbox",
        message: "Choose a license type",
        choices: [
            "Apache",
            "MIT",
            "ISC",
            "GNU",
            
            "Mozilla Public License 2.0",
            "The Unlicense"
        ]
    },
    {
        name: "GitHub Account",
        type: "input",
        message: "Enter your GitHub username: ",
    },
    {
        name: "Contact for questions (email)",
        type: "input",
        message: "Enter the email address where questions should be directed: ",
    },

];

//store answers to const and write to readme file.
async function init() {
    try {
        const userResponse = await inquirer.prompt(questions);
        const generatedReadMe = markDown.generateMarkdown(userResponse);
        await writeFileAsync("README.md", generatedReadMe);
        console.log(userResponse);
    } catch (err) {
        console.log(err);
    }
}


//start the program
init();