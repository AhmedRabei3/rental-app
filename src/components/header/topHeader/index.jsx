import "../styles.css";
import { Link } from "react-router";

function TopHeader({ user }) {
  return (
    <div className="top-header">
      <div className="logo">
        <Link to="/" className="logo">
          logo
        </Link>
      </div>
      <div className={(user && "profile-photo") || "hide"}>
        <strong>{user?.name}</strong>
        <img src="" alt="user photo" />
      </div>
      <div className="top-header-left">
        <div className="auth-btn login">
          <i className="bi bi-box-arrow-in-right"></i>
          <Link to="/login" className="auth">
            تسجيل الدخول
          </Link>
        </div>
        <div className="auth-btn register">
          <i className="bi bi-person-plus"></i>
          <Link to="/register" className="auth">
            تسجيل
          </Link>
        </div>
        <div className={(user && "auth-btn") || "hide"}>
          <i className="bi bi-box-arrow-left"></i>
          <Link to="/logout" className="auth">
            تسجيل الخروج
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
