import React from "react";
import "./FormLogin.css";
import { Link } from "react-router-dom";

const FormLogIn = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState(false);
  const [icon, setIcon] = React.useState("close-circle");
  const [show, setShow] = React.useState(false);
  const emailValidation = (e) => {
    const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,2})+$/;
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (email.match(pattern)) {
      setMessage("icon success-color");
      setIcon("checkmark-circle");
    } else {
      setMessage("icon error-color");
      setIcon("close-circle");
    }
  };
  const handleShowhide = () => {
    setShow(!show);
  };
  const handleInputChange = () => {};
  return (
    <div className="formlogin">
      <div className="formlogin__icon__connexion">
        <ion-icon name="arrow-back-circle" />
      </div>
      <div className="formlogin__before">
        <h2>Connexion</h2>
      </div>
      <form>
        <div className="formlogin__inputbox">
          <input
            type="email"
            id="emailConnexion"
            required="required"
            onChange={emailValidation}
            value={email}
          />
          <span>Email</span>
          <div className={email.length === 0 ? "icon initial-color" : message}>
            <ion-icon name={email.length === 0 ? "alert-circle" : icon} />
          </div>
        </div>
        <div className="formlogin__inputbox">
          <input
            type={show ? "text" : "password"}
            required="required"
            onChange={handleInputChange}
          />
          <span>Password</span>
          <div className="icon initial-color">
            {show ? (
              <ion-icon name="eye-off" onClick={handleShowhide} />
            ) : (
              <ion-icon name="eye" onClick={handleShowhide} />
            )}
          </div>
        </div>
        <div className="formlogin__checkbox">
          <input type="checkbox" />
          <label htmlFor="connect">Se souvenir de moi?</label>
        </div>
        <button className="button" type="button">
          Soumettre
        </button>
      </form>
      <div className="formlogin__link">
        <Link to="mot-de-passe-oublie">Mot de passe oublié</Link>
        <Link to="premiere-connexion">Première connexion</Link>
      </div>
    </div>
  );
};

export default FormLogIn;
