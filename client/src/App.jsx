import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
// import AllRoutes from "./routes";
import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { getUserData } from "./services/api";
import { alert } from "./components/CustomAlert/alert";
// import GoogleLogin from "./components/GoogleLogin";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from "./pages/Auth/SignIn";

const App = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const logout = () => {
    setUser(null);
    localStorage.setItem("user", JSON.stringify(null));
  };

  useEffect(() => {
    const refreshUserData = async () => {
      try {
        const res = await getUserData();

        login(res.data.data.user);
      } catch (err) {
        // alert({ message: err.response.data.message, type: "error" });
      }
    };
    refreshUserData();
  }, []);

  return (
    <GoogleOAuthProvider clientId="191844904560-20s5cjeja6m6if788g2dt7a7uv9g86eh.apps.googleusercontent.com">
    <><ToastContainer />
    <div className="App">
      <Router>
        <Navbar user={user} login={login} logout={logout} />
        <Routes>
          <Route
            path="/"
            element={<Home user={user} login={login} logout={logout} />}
          />
          <Route
            path="/about"
            element={<About user={user} login={login} logout={logout} />}
          />
          <Route
            path="/signin"
            element={<SignIn />}
          />
          {/* <Route
            path="/auth"
            element={<Auth user={user} login={login} logout={logout} />}
          /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
    </>
      
    </GoogleOAuthProvider>
  );
};

export default App;
