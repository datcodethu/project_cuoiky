import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import avatar from "../images/avatar.jpg";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Trạng thái lưu lỗi
  const [loading, setLoading] = useState(false); // Trạng thái loading
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    setLoading(true); // Bắt đầu loading
    setError(""); // Xóa lỗi trước đó

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      console.log(response.data); // In ra dữ liệu phản hồi từ server
      if (response.status === 200) {
        navigate("/"); // Chuyển hướng tới trang Home
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Sai tên đăng nhập hoặc mật khẩu!");
        setUsername("");
        setPassword("");
      } else {
        setError("Lỗi máy chủ! Vui lòng thử lại sau.");
        navigate("/sorry"); // Chuyển hướng tới trang Sorry nếu lỗi server
      }
    } finally {
      setLoading(false); // Kết thúc loading
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
            {error && <p className="error-message">{error}</p>}{" "}
            {/* Hiển thị lỗi */}
            <div className="for-pass">
              <a href="#">Forgot Password</a>
              <a href="#">Sign In</a>
            </div>
            <div className="box-button-login">
              <button type="submit" disabled={loading}>
                {loading ? "Đang xử lý..." : "Đăng Nhập"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
