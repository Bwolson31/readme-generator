
// function to make none choice work in generateMarkdown function
function renderLicense (license) {
    console.log(license)
    if (license === 'None') {
    return '' 
    }
else {
return '- [License](#License)'
}     

}

 function generateMarkdown ({licenseUsage, projectDescription, usageInformation, contributionGuidelines, testInstructions, projectName, installationInstructions, githubUsername, emailAddress}) {

    const license = renderLicense(licenseUsage)
  
    return `![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(licenseUsage)}-blue)

# ${projectName}

## Description 
${projectDescription}
   


## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
${license}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation 
${installationInstructions}

## Usage
${usageInformation}

## License 
This project is licensed under the ${licenseUsage}.


## Contributing 
${contributionGuidelines}

## Tests
${testInstructions}

## Questions
GitHub Profile: [${githubUsername}](https://github.com/${githubUsername})

For additional questions, contact me via email: ${emailAddress}`;
};

module.exports = generateMarkdown;