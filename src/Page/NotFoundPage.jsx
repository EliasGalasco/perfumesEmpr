import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function NotFoundPage() {
  let navigateTo = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigateTo(-1);
    }, 2000);
  }, []);

  return (
    <div>
      <h1 className="d-flex justify-content-center">404: Pagina no encontrada</h1>
      <small className="d-flex justify-content-center">Te enviaremos a la anterior pagina</small>
    </div>
  );
}

export default NotFoundPage;