import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

import AuthLayout from "../../components/AuthLayout";

const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (value) => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/user-login`, value);
      if (data.Authorization) {
        Swal.fire("Welcome back!", "", "success");
        localStorage.setItem(process.env.REACT_APP_AUTH, data.Authorization);
        navigate("/", { replace: true });
      }
    } catch (error) {
      Swal.fire("Failed!", error.response.data.message, "error");
    }
  };

  return (
    <AuthLayout>
      <section className="container text-center">
        <h1>Signin Page</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Username
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              {...register("username", { required: true })}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Password
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>{" "}
          &nbsp;
          <NavLink to="/register" className="btn btn-secondary" type="button">
            Doesn't have account?
          </NavLink>
        </form>
      </section>
    </AuthLayout>
  );
};

export default SignIn;
