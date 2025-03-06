import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LandingPage from "./pages/LandingPage";

function App() {
  const handleLogin = (username: string, password: string) => {
    console.log("Logged in with", username, password);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
