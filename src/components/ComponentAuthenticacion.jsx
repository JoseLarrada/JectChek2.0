import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Authentication.css";
import login from "../controllers/LoginController.js";
import validationForm from "../controllers/validations/Validations.js";

export default function ComponentAuthenticacion() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleClick = (event) => {
    validationForm(
      event,
      "exampleFormControlInput1",
      "exampleFormControlInput2"
    );
  };

  return (
    <div>
      <div className="container">
        <section className="auntentication">
          <h4 className="text-login">Iniciar Sesión</h4>
          <h5 className="text-account">Inicia sesión con tu cuenta</h5>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Nombre de Usuario
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              ref={usernameRef}
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">
              Contraseña
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput2"
              ref={passwordRef}
              required
            />
          </div>
          <Link to={"/resetpassword"}>
            <button type="button" class="btn btn-link ">
              ¿Olvidaste tu contraseña?
            </button>
          </Link>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              handleClick();
              login(
                usernameRef.current.value,
                passwordRef.current.value,
                navigate
              );
            }}
          >
            Iniciar Sesión
          </button>
        </section>
      </div>

      <section className="Register">
        <h1 className="title">¿Aún no estás registrado?</h1>
        <h6 className="subtitle">Crea tu cuenta</h6>
        <Link to={"/registro"}>
          <button type="button" className="btn btn-secondary">
            Regístrate Ahora
          </button>
        </Link>
      </section>
    </div>
  );
}
