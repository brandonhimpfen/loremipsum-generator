# loremipsum-generator

Generate random placeholder text in the style of Lorem Ipsum.

## Installation

You can install the `@brandonhimpfen/loremipsum-generator` package using npm:

```
npm i @brandonhimpfen/loremipsum-generator
```

## Usage 

```
const generateLoremIpsum = require('lorem-ipsum-generator');

console.log(generateLoremIpsum()); // Generates a single sentence of Lorem Ipsum-style text
console.log(generateLoremIpsum(3)); // Generates three sentences of Lorem Ipsum-style text
```

The generateLoremIpsum function takes an optional sentences parameter that specifies the number of sentences to generate. It returns a string of Lorem Ipsum-style text.