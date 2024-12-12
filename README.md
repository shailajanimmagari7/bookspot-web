# Bookspot

This branch implements the UI for the Login Page of the Bookspot web application. Currently, only the frontend UI for logging in is implemented.


# Description

- This app is a **Bookspot** web application.
- The **LoginPage** UI is fully implemented allowing users to input their credentials and log into the app (authentication functionality to be added in future branches).

# Table of Contents

- [Technologies Used](#technologies-used)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)

# Technologies Used

- React
- Typescript
- Jest
- React Testing Library

# Requirements

Before you start, ensure that you have the following dependencies installed:

1.  Install Node.js on macOS. Node.JS
    To install Node.js, you can use the following command:

    ```bash
     brew install node
    ```

2.  The package manager for managing dependencies in your React project (comes with Node.js).

    ```bash
     npm install
    ```

3.  Create React App:
    If you're creating a new React app, you can use create-react-app with the TypeScript template:

    ```bash
    npx create-react-app app-name  --template typescript
    ```

4.  Jest is a testing framework for running unit, integration, and snapshot tests in React. To install
    ```bash
    npm install --save-dev jest
    ```
5.  React Testing Library: For testing React components in a way that reflects how users interact with the UI.
    Install React Testing Library:
    ```bash
    npm install --save-dev @testing-library/react

    ```

6.  TypeScript, if you're using create-react-app with the TypeScript template, TypeScript is automatically set up. But if you're manually setting up TypeScript in a non-TypeScript React project, you can install it like this:
    ```bash
     npm install --save-dev typescript @types/react
     @types/react-dom
    ```

# Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:shailajanimmagari7/bookspot-web.git
   cd bookspot-web
   ```

2. Install dependencies:
   Once inside the project directory, install the required dependencies:
   ```bash
   npm install
   ```

# Usage

Once you've installed the necessary dependencies and set up the project, you can begin using and testing the app. Below are some common commands and steps to help you get started.

1. Run the app.

- To start the React application locally:

  ```bash
  npm start

  ```

2.  Run Tests with Jest

- You can run the tests using Jest with the following command:
  ```bash
  npx test
  ```

3. Run Tests with Coverage:
   To run tests and get a coverage report, use:
   ```bash
   npm test -- --coverage
   ```
4. Run a Specific Test:
   If you want to run a specific test file, you can use the following command:
   ```bash
   npm test <test-file-path>
   ```
