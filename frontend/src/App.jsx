import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./components/about/About.jsx";
import Todo from "./components/todo/Todo.jsx";
import Signup from "./components/signup/Signup.jsx";
import Signin from "./components/signin/Signin.jsx";

import { useDispatch } from "react-redux";
import { authActions } from "./store";


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const userID = sessionStorage.getItem("id");
    if (userID) {
      dispatch(authActions.login());
    }
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
