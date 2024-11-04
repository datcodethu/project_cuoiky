import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import avatar from "../images/avatar.jpg";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState(""); // State cho mật khẩu xác nhận
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && password && reenteredPassword) {
      if (password === reenteredPassword) {
        console.log("Đăng ký với:", username, password);
        navigate("/"); // Chuyển hướng đến trang Home hoặc trang xác nhận
      } else {
        alert("Mật khẩu không khớp. Vui lòng nhập lại.");
      }
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
          <form className="box-form" onSubmit={handleRegister}>
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
            <div className="box-email-password">
              <label>Re-enter Password</label>
              <input
                type="password"
                value={reenteredPassword}
                onChange={(e) => setReenteredPassword(e.target.value)}
                required
              />
            </div>
            <div className="box-button-login">
              <button type="submit">Đăng Ký</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
