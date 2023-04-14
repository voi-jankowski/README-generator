// Array of possible licences with badge and link properties.
const licenseArray = [
  {
    name: "Apache License 2.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://opensource.org/licenses/Apache-2.0",
  },
  {
    name: "GNU General Public License v3.0",
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "https://www.gnu.org/licenses/gpl-3.0",
  },
  {
    name: "MIT License",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://opensource.org/licenses/MIT",
  },
  {
    name: "ISC License",
    badge:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    link: "https://opensource.org/licenses/ISC",
  },
  {
    name: "Mozilla Public License 2.0",
    badge:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "https://opensource.org/licenses/MPL-2.0",
  },
  {
    name: "Boost Software License 1.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    link: "https://www.boost.org/LICENSE_1_0.txt",
  },
  {
    name: "The Unlicense",
    badge:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    link: "http://unlicense.org/",
  },
  // If there is no license, return an empty string
  {
    name: "I don’t want a license.",
    badge: "",
    link: "",
  },
];

// Make variables available globally
let licenseBadge;
let licenseLink;
let licenseSection;

//Create a function that returns a license badge based on which license is passed in data from inquirer
function renderLicenseBadge(license) {
  // Use Array.prototype.find() method to return the object that matches the data
  const licenseFound = licenseArray.find((obj) => obj.name === license);
  licenseBadge = licenseFound.badge;
  // Pass it to link function
  renderLicenseLink(licenseFound);
}

// Create a function that returns the license link
function renderLicenseLink(licenseFound) {
  licenseLink = licenseFound.link;
  // Pass the object to render section function
  renderLicenseSection(licenseFound);
}

// Create a function that returns the license section of README
function renderLicenseSection(licenseFound) {
  let licenseName = licenseFound.name;
  // If there is no license, return an empty string
  licenseLink === ""
    ? (licenseSection = "")
    : (licenseSection = `This application is covered under [${licenseName}](${licenseLink})`);
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  // Call license functions
  renderLicenseBadge(data.license);
  return `# ${data.title}

${licenseBadge}

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

${licenseSection}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the project please contact me through [my Github](${data.github}) or email me at [${data.email}](mailto:${data.email}).`;
}

module.exports = generateMarkdown;
