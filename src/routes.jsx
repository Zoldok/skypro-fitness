import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}