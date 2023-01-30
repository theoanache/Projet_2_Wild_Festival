import React from "react";
import "./FormLogin.css";
import { Link } from "react-router-dom";

const FormForget = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState(false);
  const [icon, setIcon] = React.useState("close-circle");
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
  return (
    <div className="formlogin">
      <div className="formlogin__icon">
        <Link to="/">
          <ion-icon name="arrow-back-circle" />
        </Link>
      </div>
      <div className="formlogin__before">
        <h2>Mot de passe oublié</h2>
      </div>
      <p className="procedure">
        Merci de renseigner votre mail, nous vous enverrons la procédure afin de
        réinisialiser votre mot de passe.
      </p>
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
        <button className="button" type="button">
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default FormForget;
