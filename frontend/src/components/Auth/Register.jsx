import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password || !confirmPassword || !username || !firstname || !lastname) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password do not match");
      return;
    }

    setLoading(true);
    try {
      const user = await registerUser({username, firstname, lastname, email, password});
      if (user) navigate("/dashboard");
    } catch (error) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
      <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"  required />
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required/>
      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
      {error && <p style={{color: "red"}}>{error}</p>}
    </form>
  );
};

export default Register;