import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import "./Signup.css";
export default function Signup () {
  const [name, setName] = useState("");
  const [currentsaving, setcurrentsaving] = useState("");
  const [Annualsaving, setAnnualsaving] = useState("");
  const [Goal, setGoal] = useState("");
//   const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
    //   navigate("/");
    }
  }, []);
  const CollectData = async () => {
    // console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, currentsaving, Annualsaving, Goal }),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);

    localStorage.setItem("user", JSON.stringify(result));
    // navigate("/");
  };
  return (
    <div className="register_form">
      <h1 className="h1tag text-3xl ">Form</h1>
      <div className="second">
        <input
          className="input_box"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input_box"
          type="text"
          placeholder="Enter Email"
          value={currentsaving}
          onChange={(e) => setcurrentsaving(e.target.value)}
        />
        <input
          className="input_box"
          type="password"
          placeholder="Enter password"
          value={Annualsaving}
          onChange={(e) => setAnnualsaving(e.target.value)}
        />
        <input
          className="input_box"
          type="password"
          placeholder="Enter password"
          value={Goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button onClick={CollectData} className="signupbutt  text-red-300">
          Signup
        </button>
      </div>
    </div>
  );
};

// export default Signup;

