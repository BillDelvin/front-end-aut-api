// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

function App() {
  // const getToken = localStorage.getItem(process.env.REACT_APP_AUTH);
  // const [token, setToken] = useState(false);

  // useEffect(() => {
  //   setToken((prevState) => (getToken !== null ? (prevState = true) : (prevState = false)));
  // }, [getToken]);

  // kalau ada global management state
  // const listRoutes =
  //   token === true ? (
  //     <>
  //       <Route path="/" element={<Home />} />
  //     </>
  //   ) : (
  //     <>
  //       <Route path="/sign-in" element={<SignIn />} />
  //       <Route path="/register" element={<Register />} />
  //     </>
  //   );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
