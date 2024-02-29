
// function to make none choice work in generateMarkdown function
function renderLicense(license) {
    if (license === 'None') {
        return '';
    } else {
        return '- [License](#license)';
    }
}

 function generateMarkdown ({licenseUsage, projectDescription, usageInformation, contributionGuidelines, testInstructions, projectName, installationInstructions, githubUsername, emailAddress}) {

    const licenseSelection = renderLicense(licenseUsage);
    const licenseBadge = licenseUsage !== 'None' ? `![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(licenseUsage)}-blue)\n` : '';

  
    return `${licenseBadge}

# ${projectName}

## Description 
${projectDescription}
   


## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
${licenseSelection}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation 
${installationInstructions}

## Usage
${usageInformation}

${licenseSelection !== '' ? `
## License 
This project is licensed under the ${licenseUsage}.
` : ''}


## Contributing 
${contributionGuidelines}

## Tests
${testInstructions}

## Questions
GitHub Profile: [${githubUsername}](https://github.com/${githubUsername})

For additional questions, contact me via email: ${emailAddress}`;
};

module.exports = generateMarkdown;