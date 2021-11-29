import "./style/App.css";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import SurveyForm from "./components/survey";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/survey" exact element={<SurveyForm />} />
        {/* <Route path="/visualization" exact element={<Visualization />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
