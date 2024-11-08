const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Giả lập dữ liệu người dùng
const users = [{ username: "datdeptrai", password: "123" }];

// Route GET cho trang chủ
app.get("/", (req, res) => {
  res.send("API đang chạy. Vui lòng sử dụng POST tại /api/login để đăng nhập.");
  console.log(users);
});
// API Đăng Ký
app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  // Kiểm tra xem username đã tồn tại hay chưa
  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "Tên đăng nhập đã tồn tại." });
  }

  // Nếu chưa tồn tại, thêm người dùng mới
  users.push({ username, password });
  return res.status(201).json({ message: "Đăng ký thành công." });
});

// API Login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Tên đăng nhập và mật khẩu không được để trống." });
  }

  // Tìm kiếm người dùng
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    return res.status(200).json({ message: "Login thành công" });
  } else {
    return res.status(400).json({ message: "Sai tài khoản hoặc mật khẩu" });
  }
});

// Xử lý lỗi server
app.use((err, req, res, next) => {
  console.error(err); // Ghi log lỗi cho server
  res.status(500).json({ message: "Lỗi server, vui lòng thử lại sau." });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
