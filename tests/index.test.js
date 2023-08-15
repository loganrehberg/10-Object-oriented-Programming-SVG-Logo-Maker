const fs = require("fs");
const inquirer = require("inquirer");
const { questions, init } = require("../index"); //
const generateSVGshape = require("../lib/shapes"); //

// Mock Inquirer prompt
jest.mock("inquirer");

describe("init function", () => {
  it("should generate SVG logo and write to file", async () => {
    // Mock user input
    const answers = {
      text: "Test Text",
      textColor: "red",
      shape: "Circle",
      shapeColor: "blue",
    };

    // Mock the Inquirer prompt answers
    inquirer.prompt.mockResolvedValue(answers);

    // Mock the shapes module
    generateSVGshape.generateSVGshape = jest
      .fn()
      .mockReturnValue("<circle cx='150' cy='100' r='50' />");

    // Mock the fs.writeFile function
    fs.writeFile = jest.fn((path, data, callback) => {
      callback(null); // Simulate success
    });

    // Import the init function after mocking
    const init = require("../index"); //

    // Call the init function
    await init();

    // Check if Inquirer prompt was called with the correct questions
    expect(inquirer.prompt).toHaveBeenCalledWith(questions);

    // Check if the shapes module was called with the correct answers
    expect(generateSVGshape.generateSVGshape).toHaveBeenCalledWith(answers);

    // Check if fs.writeFile was called with the correct parameters
    expect(fs.writeFile).toHaveBeenCalledWith(
      "./examples/logo.svg",
      expect.any(String),
      expect.any(Function)
    );
  });
});
