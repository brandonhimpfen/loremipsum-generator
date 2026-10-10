# loremipsum-generator

[![Support Open Work](https://img.shields.io/badge/Support-Open%20Work-0A0A0A?style=flat&logo=github)](https://github.com/brandonhimpfen/support) 
[![GitHub Sponsor](https://srv-cdn.himpfen.io/badges/github/github-flat.svg)](https://github.com/sponsors/brandonhimpfen) 
[![Buy Me a Coffee](https://srv-cdn.himpfen.io/badges/buymeacoffee/buymeacoffee-flat.svg)](https://buymeacoffee.com/brandonhimpfen) 
[![Ko-Fi](https://srv-cdn.himpfen.io/badges/kofi/kofi-flat.svg)](https://ko-fi.com/brandonhimpfen) 
[![PayPal](https://srv-cdn.himpfen.io/badges/paypal/paypal-flat.svg)](https://paypal.me/brandonhimpfen)

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
