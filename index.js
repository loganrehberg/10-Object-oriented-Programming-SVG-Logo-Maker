// Required Files
const inquirer = require('inquirer');
const shapes = require('./lib');
const fs = require('fs');

//Question Array
const questions = [
    //Text input
    {
        type: 'input',
        name: 'text',
        text: 'Enter message here (3 character limit):',
        validate: input => input.length <= 3 || 'text needs to be 3 characters'
    },
    //Shape
    {
        type: 'list',
        name: 'shape',
        text: 'choose your shape',
        choice: [ 'Circle', 'Square', 'Triangle'],
    },
    //Text color
    {
        type: "input",
        color: 'textColor',
        text: 'Enter message here (name or hex)'
    },
    //Shape color
    {
        type: 'input',
        name: 'shapeColor',
        text: 'What color would you like your shape? (color or hex)',
    },
];
