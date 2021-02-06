import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { goToHomePage } from "../../Routes/Coordinator.js";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/getTripDetail");
    }
  }, [history]);

  const login = () => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/caio-teixeira-epps/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/getTripDetail");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Página de Login</h1>
      <input value={email} onChange={handleEmail} placeholder="E-mail" />
      <input
        value={password}
        onChange={handlePassword}
        placeholder="Senha"
        type="password"
      />
      <button onClick={login}>Login</button>

      <button onClick={() => goToHomePage(history)}>Ir para Home</button>
    </div>
  );
};

export default LoginPage;