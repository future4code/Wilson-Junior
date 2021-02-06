import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToHomePage } from "../../Routes/Coordinator.js";

const SubscribePage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Página de Inscrição</h1>
      <button onClick={() => goToHomePage(history)}>Ir para Home</button>
    </div>
  );
};

export default SubscribePage;