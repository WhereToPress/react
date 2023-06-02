import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={ <Dialogs dialogData={props.dialogData} messageData={props.messageData} /> } />
            <Route path="/profile" element={ <Profile postData={props.postData} /> } />
            <Route path="/news" Component={News} />
            <Route path="/music" Component={Music} />
            <Route path="/settings" Component={Settings} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
