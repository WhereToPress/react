import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
          <Route path="/profile" element={<Profile store={props.store} />} />
          <Route path="/news" Component={News} />
          <Route path="/music" Component={Music} />
          <Route path="/settings" Component={Settings} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
