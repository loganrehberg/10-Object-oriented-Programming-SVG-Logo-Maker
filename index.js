// Required Files
const inquirer = require("inquirer");
const shapes = require("./lib/shapes.js");
const fs = require("fs");

//Question Array
const questions = [
  //Text input
  {
    type: "input",
    name: "text",
    message: "Enter message here (3 character limit):",
  },
  //Shape
  {
    type: "list",
    name: "shape",
    message: "choose your shape",
    choices: ["Circle", "Square", "Triangle"],
  },
  //Text color
  {
    type: "input",
    name: "textColor",
    message: "Enter message here (name or hex)",
  },
  //Shape color
  {
    type: "input",
    name: "shapeColor",
    message: "What color would you like your shape? (color or hex)",
  },
];

// Function to generate the SVG logo
// function generateSVG(text, textColor, shape, shapeColor) {
//   let svgContent = "";

//   switch (shape.toLowerCase()) {
//     case "circle":
//       svgContent = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
//       break;
//     case "triangle":
//       svgContent = `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
//       break;
//     case "square":
//       svgContent = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
//       break;
//     default:
//       throw new Error("Invalid shape choice.");
//   }

//   svgContent += `<text x="150" y="120" fill="${textColor}" font-family="Arial" font-size="20" text-anchor="middle">${text}</text>`;

//   return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgContent}</svg>`;
// }
// variable to createSVG
const generateSVG = (text, textColor, shapeElement) => {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeElement}<text x="150" y="100" font-family="Arial" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text></svg>
  `
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
    let shapeElement = shapes.generateSVGshape(answers);
    let svg = generateSVG(text, textColor, shapeElement);
    write(svg);
  });
}

//Export to use for testing
module.export = questions;
init();
