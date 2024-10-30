import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import UpdateFeed from "./components/UpdateFeed";


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Social Media Dashboard</h1>
        </header>
        <main>
          <Routes>
            <Route exact path="/" component={UpdateFeed} />
            <Route path="/profiles" component={UserProfile} />
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