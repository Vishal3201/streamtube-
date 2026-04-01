import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./pages/Home/Home";
import Watch from "./pages/Watch/Watch";
import Upload from "./pages/Upload/Upload";
import Channel from "./pages/Channel/Channel";
import Search from "./pages/Search/Search";
import Shorts from "./pages/Shorts/Shorts";
import You from "./pages/You/You";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Create from "./pages/Create/Create";
import VoiceTest from "./pages/Search/VoiceTest";
import UserPage from "./pages/user/UserPage";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function Layout() {
  const location = useLocation();

  const hideLayout = location.pathname === "/search"; // hide navbar for search page

  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideLayout && <Sidebar />}

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/watch/:id" element={<Watch />} />

          <Route path="/upload" element={<Upload />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/shorts/:index" element={<Shorts />} />

          <Route path="/search" element={<Search />} />
          <Route path="/voice" element={<VoiceTest />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/user" element={<UserPage />} />
          <Route path="/you" element={<You />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
