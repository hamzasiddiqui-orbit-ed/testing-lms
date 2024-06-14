import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardManager from "./pages/DashboardManager";
import DashboardLearner from "./pages/DashboardLearner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin_dashboard" element={<DashboardAdmin />} />
        <Route path="/manager_dashboard" element={<DashboardManager />} />
        <Route path="/learner_dashboard" element={<DashboardLearner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
