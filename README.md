
# Login Application

## Description

This is an Angular-based login application that uses a simple authentication mechanism with JSON server for user credentials. Users can log in using the provided credentials, and their session is managed via `localStorage`.

## Features

- User login with validation (username and password).
- Session management using `localStorage`.
- Authentication using a mock backend (`JSON server`).
- Protected routes based on user authentication status.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Example Credentials](#example-credentials)
- [Login Functionality](#login-functionality)
- [Logout Functionality](#logout-functionality)
- [API Integration](#api-integration)


## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/fatmaindex/ideaBankPortal.git
    ```

## Running the Application

1. To start the Angular application, run the following command:

    ```bash
    ng serve
    ```

2. The application will be served at `http://localhost:4200`.

3. The app will communicate with the `JSON server` running on `http://localhost:3002`.

## Example Credentials

Use the following credentials to log into the application:

- **Username**: `fatma`
- **Password**: `password123`

- **Username**: `nora`
- **Password**: `password345`

## Login Functionality

- Users can log in by providing the correct username and password.
- If the credentials are correct, a session token is stored in `localStorage` to keep the user logged in across page refreshes.
- Upon login, the user is redirected to the landing page.

## Logout Functionality

- Users can log out by clicking the **Logout** button.
- The session token is removed from `localStorage`, and the user is redirected to the login page.

## API Integration

The application uses the `JSON server` to simulate a backend service. The login service queries the server to validate user credentials. 

