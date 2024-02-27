//packages needed for this application
const {prompt} = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'projectDescription',
    },
    {
        type: 'input',
        message: 'What are the installation instructions of your project?',
        name: 'installationInstructions',
    },
    {
        type: 'input',
        message: 'What is the usage information of your project?',
        name: 'usageInformation',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines of your project?',
        name: 'contributionGuidelines',
    },
    {
        type: 'input',
        message: 'What are the test instructions of your project?',
        name: 'testInstructions',
    },
    {
        type: 'list',
        message: 'What license would you like to use',
        name: 'licenseUsage',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Mozilla Publice License 2.0', 'BSD 3-Clause license', 'None']
    },  
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailAddress',
    },

];
// Init function based off of generateMarkdown.js file
    async function init() {
        try {
            const responses = await prompt(questions);
            console.log(JSON.stringify(responses));
    
            fs.writeFile('dist/README.MD', generateMarkdown(responses), function (error) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('README.md successfully generated!');
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
    
    init();


 