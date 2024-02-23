const inquirer = require('inquirer');

inquirer
    .prompt([
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
    .then((response) =>
        console.log(`# ${response.question}

            ## Description
            
            ${response.description}
            
            ## Table of Contents (Optional)
            
            If your README is long, add a table of contents to make it easy for users to find what they need.
            
            - [Installation](#installation)
            - [Usage](#usage)
            - [Credits](#credits)
            - [License](#license)
            
            ## Installation

            ${response.installation}
            
            ## Usage
            
            ${response.usage}

            ## Credits

            ${response.contributions}
            
            ## License
            
            ${response.license}

            ## Tests
            
            ${response.tests}

            ## Questions

            For any questions please feel free to reach out to me at  ${response.email}
            
            `
        )
            
    )