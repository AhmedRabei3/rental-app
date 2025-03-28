import "./App.css";
import { Routes, Route } from "react-router";
import pages from "./pages";
import ChatbotComponent from "./components/chatBot";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<pages.HomePage />} />
        <Route path="/about" element={<pages.About />} />
        <Route path="/admin-dashboard" element={<pages.AdminDashboard />} />
        <Route path="/login" element={<pages.LoginPage />} />
        <Route path="/register" element={<pages.RegisterPage />} />
        <Route path="/forgot-password" element={<pages.ForgotPassword />} />
        <Route path="/reset-password" element={<pages.ResetPassword />} />
        <Route path="/contact" element={<pages.ContactUs />} />
        <Route path="*" element={<pages.NotFound />} />
      </Routes>
      <ChatbotComponent />
    </>
  );
}

export default App;
