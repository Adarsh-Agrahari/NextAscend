# Next Ascend

Next Ascend is a comprehensive web application that centralizes over 500 opportunities for internships, mentorships, and research opportunities. It features a user-friendly interface for easy navigation and discovery of relevant opportunities. The platform is built using React, Node.js, Express, and MongoDB, with an integrated automated mail system using the Mailchimp API to notify students of upcoming opportunity deadlines.

## Features

- **Centralized Opportunity Database:** Contains over 500 opportunities for internships, mentorships, and research.
- **User-Friendly Interface:** Built with React for seamless navigation and an intuitive user experience.
- **Automated Email Notifications:** Utilizes Mailchimp API to notify users about upcoming deadlines.
- **Efficient Backend:** Developed using Node.js and Express, ensuring robust and scalable performance.
- **Database Management:** Opportunities and user data are managed with MongoDB.

## Tech Stack

- **Frontend:** React, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Email Notifications:** Mailchimp API

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB instance running
- Mailchimp account and API key

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Adarsh-Agrahari/NextAscend.git
    cd NextAscend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory with the following content:

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    MAILCHIMP_API_KEY=your_mailchimp_api_key
    MAILCHIMP_LIST_ID=your_mailchimp_list_id
    ```

4. **Start the server:**
    ```bash
    npm start
    ```

5. **Run the frontend:**
    Navigate to the `client` directory and start the React development server:

    ```bash
    cd client
    npm start
    ```

6. **Access the application:**
    Open your browser and go to `http://localhost:3000`.

## Usage

- **Browse Opportunities:** Users can browse and filter opportunities by type, category, and location.
- **Sign Up for Notifications:** Users can sign up to receive email notifications for upcoming deadlines.
- **Admin Panel:** Admins can add, update, or delete opportunities through a secure admin panel.

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out via email at adarshagrahari0503@gmail.com.

## Links

- **GitHub Repository:** [Next Ascend Repo](https://github.com/Adarsh-Agrahari/NextAscend)
- **Live Site:** [Next Ascend](https://next-ascend.vercel.app/)

