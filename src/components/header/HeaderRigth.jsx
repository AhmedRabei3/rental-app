import React from "react";
import { useSelector } from "react-redux";

function HeaderRigth() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="right-header">
      {!user && (
        <>
          <div className="header-auth-login">
            <i className="bi bi-box-arrow-in-right"></i> Login
          </div>
          <div className="header-auth">
            <i className="bi bi-person-plus"></i> Register
          </div>
        </>
      )}
      {user && (
        <>
          <div className="header-right-link">
            <i className="bi bi-bell"></i>
            <span className="notification-count">0</span>
          </div>
          <div className="avatar-container">
            <div className="user-menue">
              <i className="bi bi-chevron-down"></i>
            </div>
            <div className="user-avatar">
              <img src={user.user.profilePhoto.url} alt={user.user.name} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HeaderRigth;
