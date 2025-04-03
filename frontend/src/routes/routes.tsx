import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import LandingPage from "../pages/LandingPage";
import RegisterForm from "../components/RegisterForm";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/register" element={<RegisterForm />} />
  </Routes>
);

export default AppRoutes;
