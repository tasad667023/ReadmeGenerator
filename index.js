const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");


// array of questions for user
const questions = [
    {
        type: "Input" , 
        name: "Github",
        message: "1. What is your github username?", 
    },
    {
        type: "Input" , 
        name: "Email",
        message: "2. What is your email address?", 
    },
    {
        type: "Input" , 
        name: "Title",
        message: "3. What is your project name?", 
    },
    {
        type: "Input" , 
        name: "Description",
        message: "4. What is your project description?", 
    },
    {
        type: "Input" , 
        name: "Table of Contents",
        message: "5. What are your table of contents?", 
    },
    {
        type: "Input" , 
        name: "Installation",
        message: "6. What is you installation instructions?", 
    },
    {
        type: "Input" , 
        name: "Usage",
        message: "7. What is your usage information?", 
    },
    {
        type: "list",
        name: "license",
        message: "8. What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "Input" , 
        name: "Contributing",
        message: "9. What is your contributions?", 
    },
    {
        type: "Input" , 
        name: "Tests",
        message: "10. Did you have any test instructions??", 
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then ((inquirerResponses) => {
        console.log("generating readme...");
        writeToFile ("readme.md", generateMarkdown ({...inquirerResponses}));
    })
}

// function call to initialize program
init();
