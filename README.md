# Firebase Notifications

This project is a Single Page Application (SPA) built using React and TypeScript, leveraging Firebase as the backend service. The app features a notification system where users can add and receive notifications, mark them as read, and view unread notification counts.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Environment Variables](#environment-variables)
- [Firebase Emulators](#firebase-emulators)
- [Features](#features)

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript.
- **React Bootstrap**: Bootstrap components for React.
- **React Icons**: Popular icons for React.
- **Firebase**: Backend service for database and real-time updates.
- **CSS Modules**: Scoped CSS for modular and maintainable styling.

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (version 12.x or later)
- **npm** (version 6.x or later)
- **Firebase CLI** (for managing Firebase emulators)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sunny-mahajan/firebase-notifications.git
   cd firebase-notifications
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

### Running the App

1. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add your Firebase configuration:

   ```plaintext
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

2. **Start Firebase Emulators**

   To run Firebase services locally, start the emulators:

   ```bash
   firebase emulators:start
   ```

3. **Start the React Application**

   ```bash
   npm start
   ```

   This will start the development server and open the app in your default web browser.

## Environment Variables

Environment variables are used to securely handle configuration settings. These variables are defined in a `.env` file in the root directory. Here is an example:

```plaintext
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Firebase Emulators

To develop and test the app locally without affecting the production environment, Firebase Emulators are used. They simulate Firebase services locally.

### Starting Firebase Emulators

```bash
firebase emulators:start
```


## Features

- **Real-time Notifications**: Receive and update notifications in real time.
- **Notification Management**: Add, view, and mark notifications as read.
- **Interactive UI**: User-friendly interface with buttons and dropdowns.

## Additional Notes

- Ensure you restart the development server (`npm start`) after making any changes to the `.env` file.
- For detailed Firebase configuration, refer to the Firebase console.