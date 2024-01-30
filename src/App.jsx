import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";
import Layout from "./pages/Layout";
import Header from "./components/Header";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<h1>Blog Details</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
