# Social Media Dashboard - Backend

> **NOTE**: 23-10-2024

> This project is meant to enhance my skills in MERN Stack. This master branch features the current version, which is fully functional and ready for use.

---

## Description 💬

The **Social Media Dashboard** backend is built with Node.js and Express, providing a RESTful API for user management and social interactions. This project is designed to help users connect by posting updates, following others, and engaging through likes and comments.

## Table of Contents

- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features 🌟

- **User Authentication**: Secure registration and login functionality.
- **CRUD Operations for Posts**: Users can create, read, update, and delete their posts.
- **Follow/Unfollow System**: Users can follow or unfollow other users.
- **Data Management**: Efficient handling of user profiles, posts, comments, and likes.

## Tech Stack 🐩

**Backend:**

- **Node.js**: For server-side execution.
- **Express.js**: For building the API.
- **MongoDB**: For data storage.

**Additional Libraries:**

- **Mongoose**: For MongoDB object modeling.
- **jsonwebtoken**: For user authentication via JWT.
- **bcrypt**: For password hashing.

## Installation ⚙️

Follow these steps to get your local copy up and running:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Heshbon/social-media-dashboard

   cd social-media-dashboard/backend

2. **Install dependencies:**
  ```bash
  npm install

3. **Setup environment variables:** 

Create a .env file in the backend directory and include necessary configurations such as:

  MONGO_URI=your_mongodb_connection_string
  
  JWT_SECRET=your_jwt_secret
  
  PORT=your_port_number

4. **Run the server:**
  ```bash
  npx nodemon

## Usage 🚀

1. Access the API: The API will be available at http://127.0.0.1:3000

- Register/Login: Use the appropriate endpoints for user authentication.
    
- Explore API Endpoints:

  - POST /api/auth/register: Register a new user.
  
  - POST /api/auth/login: Authenticate an existing user.
  
  - GET /api/users: Retrieve all users.
  
  - POST /api/posts: Create a new post.
  
  - GET /api/posts: Retrieve all posts.
  
  - PUT /api/posts/:id: Update a post.
  
  - DELETE /api/posts/:id: Delete a post.

## Authentication 🔑

The backend features a secure user authentication process using JSON Web Tokens (JWT):

  1. **User Input:** Users provide their email and password for login.
  
  2. **Validation:** The server checks if the credentials are valid.
  
  3. **Token Generation:** On successful authentication, a JWT is generated and returned.
  
  4. **Authorization:** The token must be included in the headers for protected routes.

This approach ensures secure access to the API while allowing users to maintain their sessions seamlessly.

## Contributing 🤝

I welcome contributions! Please follow these steps to contribute:

  1. Fork the repository.
  
  2. Create a new branch:
  ```bash
  git checkout -b feature/YourFeature

3. Make your changes and commit:
  ```bash
  git commit -am 'Add some feature'

4. Push to the branch:
  ```bash
  git push origin feature/YourFeature

5. Create a new Pull Request.

## Author ✒️

+ Hesbon Kipchirchir [Heshbon](https://github.com/Heshbon)

## License 🔒

+  This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](https://github.com/Heshbon/social-media-dashboard/blob/main/LICENSE) file for details.

## Contact ✉️

For inquiries or suggestions, reach out at [hesskip@gmail.com].

## External Resources 📚

For more inspiration on writing a good README, check out these resources:

- [Awesome README](https://github.com/matiassingers/awesome-readme)

- [How to Write a Good README?](https://www.makeareadme.com/)