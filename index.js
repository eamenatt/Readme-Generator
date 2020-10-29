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
        message: "Describe the applications use and functionality: ",
    },
    {
        name: "contributors",
        type: "input",
        message: "List all project contributors: ",
    },
    {
        name: "tests",
        type: "input",
        message: "Provide any relevant test data: ",
    },
    {
        name: "license",
        type: "checkbox",
        message: "Choose a license type: ",
        choices: [
            "Apache",
            "MIT",
            "ISC",
            "GNU",
            "None"
        ]
    },
    {
        name: "username",
        type: "input",
        message: "Enter your GitHub username: ",
    },
    {
        name: "email",
        type: "input",
        message: "Enter the email address where questions should be directed: ",
    },

];

//store answers to respnse and write to readme file.
async function init() {
    try {
        const userResponse = await inquirer.prompt(query);
        const generatedReadMe = markDown.generateMarkdown(userResponse);
        await writeFileAsync("README.md", generatedReadMe);
        // console.log(userResponse);
    } catch (err) {
        console.log(err);
    }
}


//start the program
init();