const { generateSVGshape } = require("./lib/shapes.js"); // Update the path accordingly

describe("generateSVGshape function", () => {
  it("should generate SVG content for Circle shape", () => {
    const data = {
      shape: "Circle",
      shapeColor: "blue",
    };

    const result = generateSVGshape(data);

    expect(result).toContain(`<circle cx="150" cy="100" r="50" fill="${data.shapeColor}" />`);
  });

  it("should generate SVG content for Triangle shape", () => {
    const data = {
      shape: "Triangle",
      shapeColor: "green",
    };

    const result = generateSVGshape(data);

    expect(result).toContain(`<polygon points="150,50 100,150 200,150" fill="${data.shapeColor}" />`);
  });

  it("should generate SVG content for Square shape", () => {
    const data = {
      shape: "Square",
      shapeColor: "red",
    };

    const result = generateSVGshape(data);

    expect(result).toContain(`<rect x="100" y="50" width="100" height="100" fill="${data.shapeColor}" />`);
  });

  it("should throw an error for an invalid shape choice", () => {
    const data = {
      shape: "InvalidShape",
      shapeColor: "purple",
    };

    expect(() => {
      generateSVGshape(data);
    }).toThrow("Invalid shape choice.");
  });
});
