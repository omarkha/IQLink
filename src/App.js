import logo from "./logo.svg";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import { SiMessenger } from "react-icons/si";
import Messenger from "./components/Messenger";
import { useState } from "react";

function App() {
  const [messCollapsed, setMessCollapsed] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <ProfilePage />
      <Messenger />
    </div>
  );
}

export default App;
