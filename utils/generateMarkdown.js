  
//Generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
      
    ## Desription
            
    ${data.description}
    
    ## Table of Contents
    
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation Instructions
    ${data.installation}
    
    ## Usage Data
    ${data.usage}
    
    ## License Information
    ![License](https://img.shields.io/badge/License-${data.license}-green.svg "License Badge")
    
    ## Contributing Authors
    ${data.contributors}
    
    ## Tests
    ${data.tests}
    
    ## Questions
    
    For Questions or Comments please reach out to:
    Email: ${data.email}
    [https://${data.username}.github.io](https://${data.username}.github.io)
    
    `;
  }
  
  module.exports = { generateMarkdown };