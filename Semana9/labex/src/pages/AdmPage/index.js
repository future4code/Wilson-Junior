import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToHomePage, goToCreateTripPage } from "../../Routes/Coordinator.js";

const AboutPage = () => {
 
  const history = useHistory();

  return (
    <div>
      <h1>Página ADM</h1>
      <button onClick={() => goToHomePage(history)}>Ir para Home</button>
      <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
    </div>
  );
};

export default AboutPage;