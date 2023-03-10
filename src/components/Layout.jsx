import { useEffect, useCallback } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const validateToken = useCallback(
    (token) => {
      const split = token.split(" ")[1]; // validasi tahap 1
      if (split === undefined) {
        localStorage.removeItem(process.env.REACT_APP_AUTH);
        navigate("/sign-in", { replace: true });
      }

      try {
        jwtDecode(split);
      } catch (error) {
        localStorage.removeItem(process.env.REACT_APP_AUTH);
        navigate("/sign-in", { replace: true });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    // validasi wajib ada token
    const getToken = localStorage.getItem(process.env.REACT_APP_AUTH);
    if (getToken === null) navigate("/sign-in", { replace: true });

    const timer = setTimeout(() => {
      validateToken(getToken);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateToken]);

  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
