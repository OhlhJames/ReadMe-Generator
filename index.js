const inquirer = require('inquirer');

inquirer
    .createPromptModule([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please add a description for this project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'please add if there are any installations for this project',
            name: 'installations',
        },
        {
            type: 'input',
            message: 'Please add usage information for this project',
            name:'usage',
        },
        {
            type: 'input',
            message: 'Please add any contributors for this project',
            name:'contributions',
        },
        {
            type: 'input',
            message: 'Please add test instructions for this project',
            name:'tests',
        },
        {
            type: 'input',
            message: 'Please add a license for this project',
            name:'license',
        },
        {
            type: 'input',
            message: 'What is a good email for people to send questions to you?',
            name:'email',
        },

    ])