const colors = require('./colors.json');

class Logo {
    constructor(text, textColor, shapeColor) {
        if(text.length > 3) {
            throw new Error('Logo text must be less than 4 characters long');
        } else if (text.length === 0) {
            throw new Error('Logo text must have at least 1 character')
        }

        this.validateColor(textColor);
        this.validateColor(shapeColor);
    
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    validateHex(hexColor, shorthand) {
        // If shorthand true, then it'll equal first cond, e.g. "#ABC"
        const hexColorPattern = shorthand ? /^#[0-9A-Fa-f]{3}$/ : /^#[0-9A-Fa-f]{6}$/;

        if (!hexColorPattern.test(hexColor)) {
            throw new Error('Invalid hex color code');
        }
    }

    validateColor(color) {
        let givenColor = color.replace(/\s/g, '').toLowerCase();
        // Hexadecimal Validation
        if (givenColor.startsWith("#")) {
            let hexColorPattern;

            if (givenColor.length === 4) {
                this.validateHex(givenColor, true);
            } else if (givenColor.length === 7) {
                this.validateHex(givenColor, false);
            } else {
                throw new Error('Invalid hex color code. It should start with "#" and be 6 characters long (3 for shorthand).');
            }
        // Keyword validation
        } else if (!colors.hasOwnProperty(givenColor)) {
            throw new Error('Invalid color keyword. Please use one of the 140 defined CSS color keywords');
        }
    }

    renderStart() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        `
    }

    renderEnd() {
        return `
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
 }



class Circle extends Logo {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Logo {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<polygon points="40,180 150,20 260,180" fill="${this.shapeColor}" />`
    }
}

class Square extends Logo {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<polygon points="50,0 250,0 250,200 50,200" fill="${this.shapeColor}" />`
    }
}

module.exports = {Logo,Circle,Triangle,Square};
