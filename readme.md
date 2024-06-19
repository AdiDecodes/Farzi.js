# Farzi.js

Farzi.js is a powerful JavaScript library designed to generate good quality of realistic fake data for both browser and Node.js environments. Ideal for testing and development purposes, Farzi.js offers a wide range of data types, including but not limited to names, addresses, phone numbers, and more.

# Get Started

![Logo](https://res.cloudinary.com/customzone-app/image/upload/v1712841124/farzi-poster_fuwpzq.png)

## Installation

Install farzi.js with npm

```bash
  npm install farzi.js
```

## Import

Use ES6 Module Import to import the package

```bash
  import farzi from 'farzi.js';
```

### OR

Use traditonal method (CommonJS)

```bash
  const farzi = require('farzi.js');
```

## Usage/Examples

### 1) Generate Fake Name

It can generate Fake Name using two methods `firstName() ` and `fullName() `

#### Get First Name Only

```javascript
const name = farzi.firstName();
console.log(name); //Adam
```

#### Get Full Name

```javascript
const name = farzi.fullName();
console.log(name); //Adam Smith
```

### 2) Generate Number

It can generate number by two methods `getRange(min, max) ` and `getNumber(length) `

#### Get number between a specified range

```javascript
const number = farzi.number.getRange(0, 100);

console.log(number); //4
console.log(number); //87
console.log(number); //45
```

#### Get number by length

```javascript
const number = farzi.number.getNumber(10);
console.log(number); //6767897653

const number = farzi.number.getNumber(4);
console.log(number); //4587

const number = farzi.number.getNumber(2);
console.log(number); //23
```

### 3) Generate Email

Generate fake email using method `email() `

#### Get email by this method

```javascript
const email = farzi.email();

console.log(email); // graykelly@example.com
console.log(email); // jonesmadeline@example.org
console.log(email); // harrydixon@example.net
```

### 4) Generate Fake addresses

Generate Fake Addresses using `address()`

#### Get Full Address

```javascript
const address = farzi.address.getFullAddress();
console.log(address); // 59596 Curry Shoals Clarkchester, IA 32671
```

#### Get city name only

```javascript
const address = farzi.address.getCity();
console.log(address); // Nataliebury
```

#### Get state name only

```javascript
const address = farzi.address.getState();
console.log(address); // Utah
```

#### Get postal code

```javascript
const address = farzi.address.getPostalCode();
console.log(address); // 97114
```

#### Get country name only

```javascript
const address = farzi.address.getCountry();
console.log(address); // India
```

#### Get country code

```javascript
const address = farzi.address.getCountryCode();
console.log(address); // KG
```

### 5) Generate Fake Images

Generate Fake Addresses using `image()`

#### Get random images using `image(width, height)` Accepts width and height of the image and returns the image in specified size. (Leaving it blank will give the size of 400x400 px)

```javascript
const image = farzi.image(250, 500);
console.log(image); // https://picsum.photos/250/500

const img = farzi.image();
console.log(img); // https://picsum.photos/400/400
```

### 6) Generate Date and Time

Generate date and time using `date` object.
It supports 3 methods i.e `currentDate()` `currentTime()` `epochTime(type)`

#### Get Current Date in ISO Format

```javascript
const date = farzi.date.currentDate();
console.log(date); // 2024-04-11T12:19:01.401Z
```

#### Get Current Time in hh:mm:ss aa format

```javascript
const time = farzi.date.currentTime();
console.log(time); // 5:50:29 PM
```

#### Get Current Time in epoch (seconds) specified

```javascript
const epoch = farzi.date.epochTime('s');
console.log(epoch); // 1712838155
```

#### Get Current Time in epoch (milliseconds) specified

```javascript
const epoch = farzi.date.epochTime('ms');
console.log(epoch); // 1712838149303
```

#### Get Current Time in epoch (nothing specified)

```javascript
const epoch = farzi.date.epochTime();
console.log(epoch); // 1712838155
```

### 7) Generate Fake Card Details

Generate fake card details using `card()` method.

#### Get random fake card details using `card()` method. No need to specify something here. It will automaticallly generate details such as Card Number, Card Owner Name, Expiry, CVV, Card Type.

```javascript
const cardDetails = farzi.card();
console.log(cardDetails);

// {
  "Card": "American Express",
  "Owner Name": "Larry Chad",
  "Card Number": 2402400982696908,
  "expiry": "07/29",
  "cvv": 444
}
```

#### Use JSON.parse(cardDetails) to convert this back to javascript object.

## Authors

- [@adidecodes](https://www.github.com/adidecodes)

## Conclusion

#### If you like this package, show your support & love!

[![buy me a coffee](https://res.cloudinary.com/customzone-app/image/upload/c_pad,w_200/v1712840190/bmc-button_wl78gx.png)](https://www.buymeacoffee.com/adidecodes)
