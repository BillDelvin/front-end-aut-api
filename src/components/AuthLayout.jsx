import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    //validasi jika tidak ada token
    const getToken = localStorage.getItem(process.env.REACT_APP_AUTH);
    if (getToken !== null) navigate("/", { replace: true });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default AuthLayout;
