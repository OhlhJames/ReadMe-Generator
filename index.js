const inquirer = require('inquirer');
const fs = require('fs');

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
        fs.appendFile('README.md',
`# ${response.title}

# Description
            
${response.description}
            
# Table of Contents 
            
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
            
# Installation

${response.installations}
            
# Usage
            
${response.usage}

# Credits

${response.contributions}
            
# License
            
${response.license}

# Tests
            
${response.tests}

# Questions

For any questions please feel free to reach out to me at:  
${response.email}
            
        `,(err) =>
            err ? console.error(err) : console.log('README Added!')      
        )
    )
