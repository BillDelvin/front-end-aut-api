import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = localStorage.getItem(process.env.REACT_APP_AUTH);
    const timer = setTimeout(() => {
      navigate(getToken !== null ? -1 : "/sign-in");
    }, 1500);

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section style={{ textAlign: "center", marginTop: 100 }}>
      <h2>Page 404</h2>
    </section>
  );
};

export default Page404;
