# Next.js Sheet App

## Introduction
"Sheet" is a web application designed to streamline the process of collecting and distributing money within a group of friends participating in a fund collection game. The app allows users to register using their GitHub or Google accounts. The primary use case of the app is to manage a fund collection game where a group of 10 friends contribute money on a daily basis for a specified number of days. The app automates the process of collecting and distributing money among the participants based on a predefined sequence of positions.

## Features

### User Registration and Authentication
Users can register and log in using their GitHub or Google accounts, ensuring a secure and seamless authentication process.

### Fund Collection Game
The core feature of the app is the fund collection game. Here's how it works:

1. **Initialization**: A group of 10 friends participate in the game. The participants contribute a set amount of money (e.g., Rs. 1000) each day.
2. **Position Assignment**: At the beginning of the game, a draw is shuffled to assign positions. One participant is assigned the first place, another the second place, and so on, up to the tenth place.
3. **Daily Collection**: The game lasts for a specified number of days (e.g., 10 days). Each day, the participants contribute their respective amounts to the owner of the event. The owner is responsible for collecting and managing the funds.
4. **Distribution**: After the specified number of days, the owner distributes the collected money. The participant in the first place receives the entire fund on the first distribution day, the participant in the second place receives the fund on the second distribution day, and so on.

### Participant Dashboard
Users can view their assigned position, track the amount they have settled, and see their pending amount.

### Owner's Management Tools
The owner of the event has access to tools that allow them to manage the collection process efficiently:
- Notifications: The owner can send reminders to participants who haven't paid.
- Collection Tracking: The owner can track which participants have settled and which ones have pending amounts.
- Distribution Management: The owner initiates fund distributions on the specified days.

## Technology Stack

- **Frontend**: Next.js 13, React.js
- **Backend**: MongoDB (for user data and game records)
- **Styling**: Tailwind CSS

## Setup Instructions

1. **Clone the Repository**: Clone this repository to your local machine.
   ```
   git clone https://github.com/jareerzeenam/nextjs-sheet-app.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies.
   ```
   cd nextjs-sheet-app
   npm install
   ```

3. **Environment Variables**: Create a `.env.local` file in the project root and add the required environment variables.
   ```
   NEXTAUTH_SECRET= # openssl rand -base64 32 //https://next-auth.js.org/configuration/options
   GITHUB_ID= # https://next-auth.js.org/providers/github
   GITHUB_SECRET=
   GOOGLE_CLIENT_ID= # https://next-auth.js.org/providers/google
   GOOGLE_CLIENT_SECRET=
   MONGO_URI=your_mongodb_uri
   MONGO_DB_NAME=your_mongodb_name
   ```

4. **Run the Application**: Start the development server to run the app locally.
   ```
   npm run dev
   ```

5. **Access the App**: Open your web browser and navigate to `http://localhost:3000` to access the app.

## Conclusion

"Sheet" simplifies the process of collecting and distributing funds among friends participating in a fund collection game. By automating the collection and distribution process, the app ensures a fair and organized experience for all participants. The user-friendly interface and management tools make it easy for both participants and the owner to engage in the game without hassle.
