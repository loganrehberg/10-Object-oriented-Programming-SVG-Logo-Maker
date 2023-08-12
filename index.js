// Required Files
const inquirer = require('inquirer');
const shapes = require("./lib");
const fs = require("fs");

//Question Array
const questions = [
  //Text input
  {
    type: "input",
    name: "text",
    text: "Enter message here (3 character limit):",
    validate: (input) => input.length <= 3 || "text needs to be 3 characters",
  },
  //Shape
  {
    type: "list",
    name: "shape",
    text: "choose your shape",
    choice: ["Circle", "Square", "Triangle"],
  },
  //Text color
  {
    type: "input",
    color: "textColor",
    text: "Enter message here (name or hex)",
  },
  //Shape color
  {
    type: "input",
    name: "shapeColor",
    text: "What color would you like your shape? (color or hex)",
  },
];

//Function to generate the SVG logo
const SVG = (text, textColor, shape) => {
  return ` <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeElement}<text x="150" y="100" font-family="Arial" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
};
//Function to create SVG file
function write(data) {
  fs.writeFile("./examples/logo.svg", data, (err) =>
    err ? console.error(err) : console.log("SVG logo generated!")
  );
}

//Function to start all other functions

function init() {
  inquirer.prompt(questions).then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    let shapeElement = GenerateShape.GenerateShapeElement(answers);
    let svg = generateSVG(text, textColor, shape);
    write(SVG);
  });
}

//Export to use for testing
module.export = questions;
init();
