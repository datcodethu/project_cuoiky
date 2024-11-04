import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Nhập useNavigate
import "../App.css";
import avatar from "../images/avatar.jpg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      console.log("Đăng nhập với:", username, password);
      navigate("/"); // Chuyển hướng đến trang Home
    } else {
      alert("Vui lòng nhập đầy đủ thông tin.");
    }
  };

  return (
    <div className="header-login">
      <div className="header_info-login">
        <div className="login-container">
          <div className="box-avatar">
            <img src={avatar} alt="Avatar" />
          </div>
          <form className="box-form" onSubmit={handleLogin}>
            <div className="box-email-password">
              <label>Email or Phone Number</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="box-email-password">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="for-pass">
              <a href="#">Forgot Password</a>
              <a href="#">Sign In</a>
            </div>
            <div className="box-button-login">
              <button type="submit">Đăng Nhập</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
