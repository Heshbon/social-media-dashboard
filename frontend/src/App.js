import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import UpdateFeed from "./components/UpdateFeed";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Social Media Dashboard</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/profiles">UserProfiles</Link>
            <Link to="/post">Post</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<UpdateFeed />} />
            <Route path="/profiles" element={<UserProfile />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </main>
        <footer>
          <p>© 2024 Social Media Dashboard</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;