import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

const Sign_Up = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showerr, setShowerr] = useState("");

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    // API Call
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phone: phone,
      }),
    });

    const json = await response.json();

    if (json.authtoken) {
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("name", name);
      // phone and email
      sessionStorage.setItem("phone", phone);
      sessionStorage.setItem("email", email);
      // Redirect to home page
      navigate("/"); //on directing to home page you need to give logic to change login and signup buttons with name of the user and logout button where you have implemented Navbar functionality
      window.location.reload();
    } else {
      if (json.errors) {
        for (const error of json.errors) {
          setShowerr(error.msg);
        }
      } else {
        setShowerr(json.error);
      }
    }
  };

  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="signup-grid">
        <div className="signup-form">
          <h1>Sign Up</h1>

          <div className="signup-text1" style={{ textAlign: "left" }}>
            Already a member?{" "}
            <span>
              <Link to="/login" style={{ color: "#2190FF" }}>
                Login
              </Link>
            </span>
          </div>
          <form method="POST" onSubmit={register}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
              {showerr && (
                <div className="err" style={{ color: "red" }}>
                  {showerr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>
            <button
              type="Submit"
              class="btn btn-primary mb-2 mr-1 waves-effect waves-light"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign_Up;
