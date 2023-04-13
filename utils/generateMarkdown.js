// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.instalation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

Please refer to the LICENSE in the repo.

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the project please contact me through [my Github](${data.github}) or email me at [${data.email}](mailto:${data.email}).`;
}

module.exports = generateMarkdown;
