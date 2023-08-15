function generateSVGshape(data) {
  let svgContent = '';

  switch (data.shape) {
    case "Circle":
      svgContent = `<circle cx="150" cy="100" r="50" fill="${data.shapeColor}" />`;
      return svgContent;
    case "Triangle":
      svgContent = `<polygon points="150,50 100,150 200,150" fill="${data.shapeColor}" />`;
      return svgContent;
    case "Square":
      svgContent = `<rect x="100" y="50" width="100" height="100" fill="${data.shapeColor}" />`;
      return svgContent;
    default:
      throw new Error("Invalid shape choice.");
  }
};

module.exports = {
  generateSVGshape
};
// Calling the SVG function and passing in all the shape data, init variable, returns different value depending on the color user selected
