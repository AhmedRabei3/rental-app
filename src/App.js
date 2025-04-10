import "./App.css";
import { Routes, Route } from "react-router";
import pages from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<pages.HomePage />} />
        <Route path="/about" element={<pages.About />} />
        <Route path="/admin-dashboard" element={<pages.AdminDashboard />} />
        <Route path="/my-profile" element={<pages.Profile />} />
        <Route path="/user-dashboard" element={<pages.UserDashBoard />} />
        <Route path="/login" element={<pages.LoginPage />} />
        <Route path="/register" element={<pages.RegisterPage />} />
        <Route path="/forgot-password" element={<pages.ForgotPassword />} />
        <Route path="/reset-password" element={<pages.ResetPassword />} />
        <Route path="/contact" element={<pages.ContactUs />} />
        <Route path="/item-details" element={<pages.ItemDetailsPage />} />
        <Route path="*" element={<pages.NotFound />} />
      </Routes>
    </>
  );
}

export default App;
