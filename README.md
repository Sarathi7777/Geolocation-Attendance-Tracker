# Geolocation-Based Mobile Attendance App

This is a geolocation-based mobile attendance application designed for managing employee attendance and leave efficiently. Built using **Next.js**, **MongoDB**, **Tailwind CSS**, and **Capacitor**, the app ensures real-time attendance tracking and seamless user experience.

---

## Features

- **Real-Time Attendance Tracking**  
  Tracks employee attendance with geolocation accuracy up to 10 meters.

- **Automatic Work Hours Calculation**  
  Automatically calculates work hours based on clock-in and clock-out times.

- **Leave Management System**  
  Includes functionality for applying, approving, and tracking Paid Leaves (PL).

---

## Technologies Used

- **Frontend:** [Next.js](https://nextjs.org/)  
  For building a responsive and dynamic UI.

- **Database:** [MongoDB](https://www.mongodb.com/)  
  NoSQL database for storing attendance and user data.

- **Styling:** [Tailwind CSS](https://tailwindcss.com/)  
  For creating modern and responsive designs.

- **Mobile Integration:** [Capacitor](https://capacitorjs.com/)  
  Enables running the app on iOS and Android with native functionalities.

---

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or later)  
- **MongoDB** (local or cloud instance)  
- **Git**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git

2. Navigate to the project directory:

    ```bash
    cd your-repo-name

3. Install dependencies:

    ```bash
    npm install

4. Create a .env file in the root directory with the following variables:

    ```env
    MONGODB_URI=mongodb://localhost:27017/your-database-name
    NEXT_PUBLIC_API_URL=http://localhost:3000/api

5. Start the MongoDB server (if running locally):

    ```bash
    mongod


### Running the Application

1. Start the development server:

    ```bash
    npm run dev
    The application will be available at http://localhost:3000.

2. Building for production:

    ```bash
    npm run build
    npm start


### Mobile Setup (Capacitor)
To run the application as a native mobile app:

1. Add platforms:

    ```bash
    npx cap add ios
    npx cap add android

2. Build the project:

    ```bash
    npm run build
    npx cap sync

3. Open platforms in their respective IDEs:

    For Android: npx cap open android
    For iOS: npx cap open ios


    ### Contributing
    Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request.

    ### License



    ### Contact
    For any queries, reach out to:
    Sarathi T
    sarathiff777@gmail.com
    [GitHub Profile](https://github.com/Sarathi7777)
