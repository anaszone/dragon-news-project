import React from "react";
import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser(setUser({ ...user, displayName: name, photoURL: photo }));
            navigate("/");
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        setUser(user);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              required
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />

            <label className="label">Photo URL</label>
            <input
              required
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
            />

            <label className="label">Email</label>
            <input
              required
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              required
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            <h2 className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>{" "}
            </h2>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
