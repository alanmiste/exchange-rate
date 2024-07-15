# Exchange Rate
or Currency Exchange Calculator, is a simple currency exchange calculator built to demonstrate the use of Redux with React hooks. This project allows users to select a currency, input an amount, and view the exchange rates for various currencies.

## Features

- **React**: Utilizes React for building the user interface.
- **Redux**: Manages the application state with Redux.
- **React Hooks**: Demonstrates the use of React hooks with Redux.
- **Exchange Rates**: Fetches and displays current exchange rates for multiple currencies.
- **Responsive Design**: User-friendly and responsive design for various devices.

## Project Structure

- `src/index.js`: Entry point of the application. Sets up the Redux provider and renders the `ExchangeRate` component.
- `src/components/ExchangeRate.js`: Main component for displaying exchange rates. Contains sub-components for currency selection, amount input, and rate table.
- `public/`: Contains public assets like `index.html`.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `package.json`: Lists project dependencies and scripts.

## Setup

To set up the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/alanmiste/exchange-rate.git
    cd exchange-rate
    ```

2. Install dependencies:
    ```bash
    yarn
    # or
    npm install
    ```

## Running the Application

To run the application locally:

```bash
yarn start
# or
npm start
```

This will start the development server and open the application in your default web browser.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: Predictable state container for JavaScript apps.
- **Create React App**: Tool to set up a modern web app by running one command.
- **JavaScript**: Primary programming language used.
- **CSS**: Styling for the application.

## Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.
