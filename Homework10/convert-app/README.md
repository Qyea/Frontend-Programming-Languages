# Currency exchange app

## Description

Create a currency conversion application to help calculate what the amount is worth in
another currency.

**API**
To achieve that, you can use APIs from the next urls:

- https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json (to
  receive a list of shortened names of currencies (keys of the json))
- https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/[currency].
  min.json (to receive the data for exchanges, you have to replace [currency] with the
  necessary key from the list from the first link)
  As inputs for choosing currencies you may use native inputs, TextField or Select from the
  MUI library. For other component you may also use components from the MUI library
  For the first homework it is necessary to complete only part nr. 1 from the second
  screenshot

## App preview

## Available Scripts

First you need to run a mock-server with currency data
All necessary data will be posted on [http://localhost:3000/currency](http://localhost:3000/currency)

### `npm run server`

Then you should run this app on another port:

### `npm start`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Also you can pay a little attention to MUI [MUI documentation](https://mui.com/)
