const inquirer = require("inquirer");
const fs = require("fs");
const { init, questions } = require("../index");

// Mocking the inquirer module
jest.mock("inquirer");

describe("init function", () => {
  it("should generate and write SVG with given inputs", async () => {
    // Set up mock answers
    const mockAnswers = {
      text: "Test",
      textColor: "black",
      shape: "Square",
      shapeColor: "red",
    };

    // Mock the inquirer prompt with resolved answers
    inquirer.prompt.mockResolvedValue(mockAnswers);

    // Mock the generateSVGshape function
    const mockShapeElement = '<rect width="50" height="50" />';
    const mockGenerateSVGshape = jest.fn().mockReturnValue(mockShapeElement);
    const shapes = require("../lib/shapes");
    shapes.generateSVGshape = mockGenerateSVGshape;

    // Mock the fs.writeFile function
    fs.writeFile = jest.fn((path, data, callback) => callback(null));

    // Run the init function
    await init();

    // Assertions
    expect(mockGenerateSVGshape).toHaveBeenCalledWith(mockAnswers);

    // Additional assertions for fs.writeFile if needed
  });
});
