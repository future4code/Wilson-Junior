import React from "react";
import { useHistory } from "react-router-dom";
import { goToAboutPage, goToAdmPage } from "../../Routes/Coordinator.js";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => goToAboutPage(history)}>
        AboutPage
      </button>
      <button onClick={() => goToAdmPage(history)}>
        AdmPage
      </button>
    </div>
  );
};

export default HomePage;