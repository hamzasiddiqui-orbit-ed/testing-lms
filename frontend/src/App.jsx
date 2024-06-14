import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import DashboardAdmin from "./components/DashboardAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin_dashboard" element={<DashboardAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
