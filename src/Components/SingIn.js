import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Thêm axios
import "../App.css";
import avatar from "../images/avatar.jpg";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");
  const [error, setError] = useState(""); // Trạng thái lưu lỗi
  const [loading, setLoading] = useState(false); // Trạng thái loading
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (username && password && reenteredPassword) {
      if (password === reenteredPassword) {
        try {
          const response = await axios.post(
            "http://localhost:5000/api/register",
            {
              username,
              password,
            }
          );
          console.log(response.data.message); // Đăng ký thành công
          navigate("/"); // Chuyển hướng đến trang Home
        } catch (error) {
          if (error.response) {
            console.error(error.response.data.message); // In ra thông báo lỗi
            alert(error.response.data.message); // Hiển thị thông báo lỗi
          } else {
            alert("Lỗi đăng ký, vui lòng thử lại.");
          }
        }
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
              <label>name</label>
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
            {error && <p className="error-message">{error}</p>}{" "}
            {/* Hiển thị lỗi */}
            <div className="box-button-login">
              <button type="submit" disabled={loading}>
                {loading ? "Đang xử lý..." : "Sign in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
