# Synergy Labs Assignment: User Management App

Hey there! 👋 Let me tell you about this React app I built for Synergy Labs. It's a user management system - you know, the whole create, read, update, delete deal (CRUD for short). I used the JSONPlaceholder API to fake some backend stuff. The cool part? I tried to be smart about API calls, only pinging the server when absolutely necessary.

## What Can This Bad Boy Do?

1. **Fetch Users:**
   - Load up the page, and bam! You've got a table full of users.
   - You'll see names, emails, phone numbers - the works.
   - Here's a neat trick: instead of bugging the API every time you want to see a specific user, I use some React magic (`useParams` and `array.find`) to pull the info from our initial data fetch.

2. **Create User:**
   - Got a form for you to add new users.
   - Hit submit, and it'll pretend to send a POST request to the API. (Spoiler: It doesn't actually create a new user, but hey, it's the thought that counts, right?)

3. **Update User:**
   - See that "Edit" button? Click it, and you'll get a form pre-filled with user info.
   - Make your changes, hit submit, and voila! It'll fake a PUT request to the API.

4. **Delete User:**
   - Don't like someone? Just hit "Delete". It'll pretend to send a DELETE request and poof! User gone. (Well, not really, but you get the idea.)

5. **API Call Wizardry:**
   - I'm pretty proud of this - we only bug the API when we absolutely have to.
   - Fetch users once, then just work with that data. No unnecessary calls for individual users.
   - We only ping the API for big stuff like deleting or updating.

6. **Smooth Moves with React Router:**
   - Hop between views like a pro. Home view, user details - it's all smooth sailing.

7. **Oops-Proofing:**
   - If something goes wonky with the API, you'll get a friendly error message. No scary error codes here.

8. **Looking Good on Any Screen:**
   - Whether you're on your phone or your massive desktop, this app's got your back. Responsive design for the win!

## Want to Take It for a Spin?

### Before You Start:
Make sure you've got [Node.js](https://nodejs.org/) chillin' on your machine.

### Let's Get This Party Started:

1. Grab the code:
   ```bash
   git clone https://github.com/yourusername/Synergy_Labs_Assignment.git
   ```
   (Psst! Don't forget to replace 'yourusername' with, well, your username)

2. Jump into the project folder and get those dependencies:
   ```bash
   cd Synergy_Labs_Assignment
   npm install
   ```

3. Fire it up:
   ```bash
   npm run dev
   ```

And you're off to the races! The app should pop up in your browser. Have fun poking around, and if you break something... well, that's what the undo button is for, right? 😉

Got questions? Hit me up! Always happy to chat about code. Happy user managing!