import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/navigation/navbar";
// import HomePage from "./components/pages/home-page";
import AddGroupPage from "./components/pages/add-group-page";
import GroupsListPage from "./components/pages/groups-list-page";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/add-group" element={<AddGroupPage />} />
        <Route path="/groups" element={<GroupsListPage />} />
        <Route path="*" element={<AddGroupPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
