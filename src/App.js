import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./stylesheets/alignments.css";
import "./stylesheets/custom.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/sizes.css";
import "./stylesheets/theme.css";
import { useSelector } from "react-redux";

function App() {
  const {loading} = useSelector(state=>state.loaders)
  return (
    <Fragment>
      {loading && (<div className="loader-parent">
        <div className="loader"></div>
      </div>)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
