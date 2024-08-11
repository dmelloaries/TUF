import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import FlashCardSet from "./components/FlashCardSet";
import Admin from "./components/Admin";
import AdminNavbar from "./components/AdminNavbar";

function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-black flex flex-col md:flex-row">
        <Sidebar className="w-full md:w-64 fixed md:relative h-screen md:h-auto" />
        <div className="md:ml-64 flex-1">
          {location.pathname.startsWith("/admin") ? (
            <AdminNavbar />
          ) : (
            <Navbar />
          )}
        </div>
      </div>
      <div className="flex-1 bg-[#111] flex items-center justify-center">
        <Routes>
          <Route path="/" element={<FlashCardSet />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
