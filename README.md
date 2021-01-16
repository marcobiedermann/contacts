# Contacts App

[![Build Status](https://img.shields.io/travis/com/marcobiedermann/contacts)](https://travis-ci.com/marcobiedermann/contacts)
[![codecov](https://img.shields.io/codecov/c/gh/marcobiedermann/contacts)](https://codecov.io/gh/marcobiedermann/contacts)
[![dependencies Status](https://img.shields.io/david/marcobiedermann/contacts)](https://david-dm.org/marcobiedermann/contacts)
[![devDependencies Status](https://img.shields.io/david/dev/marcobiedermann/contacts)](https://david-dm.org/marcobiedermann/contacts?type=dev)
[![Netlify Status](https://api.netlify.com/api/v1/badges/16b1212e-31a0-4415-aad4-df9d20d5217a/deploy-status)](https://app.netlify.com/sites/contacts-app/deploys)

Contact management tool built using React, Firebase and TypeScript.

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Models](#models)
- [License](#license)

## Setup

Install dependencies.

```sh
npm install
```

## Usage

### Format

Format code using [Prettier](https://prettier.io/).

```sh
npm run format
```

### Linting

Lint code using [ESLint](https://eslint.org/).

```sh
npm run lint
```

### Testing

Run tests using [Jest](https://jestjs.io/) testing framework.

```sh
npm test
```

## Models

### Contact

Contact model structure containing example data.

```json
{
  "name": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "addresses": [
    {
      "type": "home",
      "value": {
        "city": "New York City",
        "country": "US",
        "street": "Main Street 1",
        "zip": "12345"
      }
    }
  ],
  "emails": [
    {
      "type": "home",
      "value": "john.doe@gmail.com"
    }
  ],
  "phones": [
    {
      "type": "home",
      "value": "+1 234 56789"
    }
  ]
}
```

## License

[MIT](LICENSE) © [Marco Biedermann](https://github.com/marcobiedermann)
