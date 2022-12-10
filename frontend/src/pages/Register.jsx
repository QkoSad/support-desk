import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { reset, register } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isError, user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset);
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };
  if(isLoading){
    return <Spinner />
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={name}
              id="name"
              onChange={onChange}
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              value={email}
              id="email"
              onChange={onChange}
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              value={password}
              id="password"
              onChange={onChange}
              placeholder="Enter your password"
              name="password"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              value={password2}
              id="password2"
              onChange={onChange}
              placeholder="Enter your password again"
              name="password2"
              required
            />
          </div>
          <div className="form-group">
            <button className=" btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}
export default Register;
