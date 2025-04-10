import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./styles.css";
import { loginUser } from "../../redux/apiCalls/authApiCall";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged In:", formData);
    dispatch(loginUser(formData));
  };

  return (
    <div className="login-container">
      <div className="background-overlay"></div>
      <div className="login-box">
        <h1 className="app-name">🌍 عالم الإيجار</h1>
        <p className="welcome-text">مرحباً بعودتك!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>كلمة المرور</label>
            <input
              type="password"
              name="password"
              placeholder="أدخل كلمة المرور"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            تسجيل الدخول
          </button>
        </form>
        <p className="forgot-password">
          <Link to="/forgot-password">نسيت كلمة المرور؟</Link>
        </p>
        <p className="register-link">
          ليس لديك حساب؟ <Link to="/register">إنشاء حساب جديد</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
