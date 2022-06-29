import Home from "./Pages/Home/Home";
import "./app.scss";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Watch from "./Pages/watch/Watch";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;
