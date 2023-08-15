class Shape {
  constructor(color) {
    this.color = color;
  }

  // Abstract method to be overridden by subclasses
  getSVGElement() {
    throw new Error('Subclasses must implement getSVGElement method');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getSVGElement() {
    return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(color, side) {
    super(color);
    this.side = side;
  }

  getSVGElement() {
    return `<rect x="100" y="50" width="${this.side}" height="${this.side}" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  constructor(color, side) {
    super(color);
    this.side = side;
  }

  getSVGElement() {
    const height = (Math.sqrt(3) / 2) * this.side;
    return `<polygon points="150,${50 + height} 200,${150} 100,${150}" fill="${this.color}" />`;
  }
}

module.exports = {
  Circle,
  Square,
  Triangle
};
