import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="app-name">🌍 عالم الإيجار</h1>
        <p className="welcome-text">أهلاً بك</p>
        <h2>إنشاء حساب جديد</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>الاسم الكامل</label>
            <input
              type="text"
              name="name"
              placeholder="أدخل اسمك الكامل"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="input-group">
            <label>تأكيد كلمة المرور</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="أعد إدخال كلمة المرور"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-btn">
            تسجيل
          </button>
        </form>
        <p className="login-link">
          لديك حساب بالفعل؟ <Link to="/login">تسجيل الدخول</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
