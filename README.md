# Synergy_Labs_Assignment: User Management Application

This project is a simple CRUD (Create, Read, Update, Delete) application for managing users, built with React. It uses the JSONPlaceholder API to simulate user actions like creating, updating, and deleting users. The goal was to keep API calls to a minimum, fetching all users when the page loads and only calling the API when necessary (e.g., deleting or updating a user).

## Features

1. **Fetch Users:**

   - On page load, a list of users is fetched from the JSONPlaceholder API and displayed in a table.
   - The user's name, email, and phone are shown.
   - Instead of making extra API calls when viewing a specific user, the app uses `useParams` and the `array.find` method to retrieve the user from the initial data.

2. **Create User:**

   - A form allows you to create a new user.
   - When the form is submitted, the data is sent as a POST request to the API, simulating the creation of a new user (though the API won’t actually create one).

3. **Update User:**

   - Each user has an "Edit" button, which opens a form with their information pre-filled.
   - After making changes, you can submit the form, and a PUT request is sent to the API, simulating the update.

4. **Delete User:**

   - Each user has a "Delete" button. Clicking it will simulate a DELETE request to the API, removing the user from the list.

5. **Optimized API Calls:**

   - API calls are only made when needed. For example, the list of users is fetched once, and individual user details are retrieved from that data instead of making new API calls.
   - Similarly, the API is only called for actions like deleting or updating users.

6. **Navigation:**

   - The app uses React Router to navigate between different views, like the home view and detailed user view.

7. **Error Handling:**

   - Proper error handling is in place. If something goes wrong with the API, users will see friendly error messages.

8. **Responsive Design:**
   - The layout is fully responsive and works well on both mobile and desktop screens.

## Getting Started

### Prerequisites

Before you start, make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**  
   First, clone the project to your local machine by running:

   ```bash
   git clone https://github.com/yourusername/Synergy_Labs_Assignment.git
   ```

2. Install dependencies:

    ```bash
  npm install
  ```

3.Run the application:

    ```bash
    npm run dev
    ```
