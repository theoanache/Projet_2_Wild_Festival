import React, { useState } from "react";
import "./FormLogin.css";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const FormFirstConnexion = ({
  userName,
  setUserName,
  userAvatar,
  setUserAvatar,
}) => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("icon error-color");
  const [phone, setPhone] = React.useState("");
  const [messagePhone, setMessagePhone] = React.useState("icon error-color");
  const [icon, setIcon] = React.useState("close-circle");
  const [iconPhone, setIconPhone] = React.useState("close-circle");
  const [password, setPassword] = React.useState("");
  const [pwdRequire, setPwdRequire] = React.useState(false);
  const [cheks, setCheks] = React.useState({
    minLetterCheks: false,
    upLetterCheks: false,
    specialCharacter: false,
    numberNumber: false,
    totalCharacter: false,
  });

  const [confirmPwd, setConfirmPwd] = React.useState("");
  const [cheksPwd, setCheksPwd] = React.useState(false);
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
  const phoneValidation = (e) => {
    const pattern = /^[0-9]{9}$/;
    const phoneValue = e.target.value;
    setPhone(phoneValue);
    if (phone.match(pattern)) {
      setMessagePhone("icon success-color");
      setIconPhone("checkmark-circle");
    } else {
      setMessagePhone("icon error-color");
      setIconPhone("close-circle");
    }
  };
  const handleOnChange = (e) => {
    setPassword(e.target.value);
  };
  const handleOnFocus = () => {
    setPwdRequire(true);
  };
  const handleOnBlur = () => {
    setPwdRequire(false);
  };
  const handleKeyUp = (e) => {
    const { value } = e.target;
    const minLetterCheks = /[a-z]/.test(value);
    const upLetterCheks = /[A-Z]/.test(value);
    const specialCharacter = /[!@#$%^&*]/.test(value);
    const numberNumber = /[0-9]{2}/.test(value);
    const totalCharacter = value.length >= 8;
    setCheks({
      minLetterCheks,
      upLetterCheks,
      specialCharacter,
      numberNumber,
      totalCharacter,
    });
  };
  const [showButton, setShowButton] = useState(false);
  const handleConfirmPwd = (f) => {
    const valuePwd = f.target.value;
    setConfirmPwd(valuePwd);
    if (password === valuePwd) {
      setCheksPwd(true);
      setShowButton(true);
    } else {
      setCheksPwd(false);
      setShowButton(false);
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
        <h2>Première connexion</h2>
      </div>
      <form action="">
        <div className="formlogin__inputbox">
          <input
            type="url"
            required="required"
            value={userAvatar}
            onChange={(e) => setUserAvatar(e.target.value)}
            accept="image/png, image/JPEG"
          />
          <span>URL avatar</span>
        </div>
        <div className="formlogin__inputbox">
          <input
            type="text"
            required="required"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <span>Prénom</span>
        </div>
        <div className="formlogin__inputbox">
          <input type="text" required="required" />
          <span>Nom</span>
        </div>
        <div className="formlogin__inputbox">
          <input
            className="numberPhone"
            type="tel"
            required="required"
            maxLength={10}
            onChange={phoneValidation}
          />
          <span>Téléphone</span>
          <div
            className={phone.length === 0 ? "icon initial-color" : messagePhone}
          >
            <ion-icon name={phone.length === 0 ? "alert-circle" : iconPhone} />
          </div>
        </div>
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
            type="password"
            required="required"
            value={password}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyUp={handleKeyUp}
          />
          <span>Mot de passe</span>
        </div>
        {pwdRequire ? (
          <div className="modalPwd">
            <div
              className={cheks.minLetterCheks ? "success-color" : "error-color"}
            >
              <ion-icon
                className="cheks"
                name={
                  cheks.minLetterCheks ? "checkmark-circle" : "close-circle"
                }
              />
              <p>Au moins 1 lettre minuscule</p>
            </div>
            <div
              className={cheks.upLetterCheks ? "success-color" : "error-color"}
            >
              <ion-icon
                className="cheks"
                name={cheks.upLetterCheks ? "checkmark-circle" : "close-circle"}
              />
              <p>Au moins 1 lettre majuscule</p>
            </div>
            <div
              className={cheks.numberNumber ? "success-color" : "error-color"}
            >
              <ion-icon
                className="cheks"
                name={cheks.numberNumber ? "checkmark-circle" : "close-circle"}
              />
              <p>Au moins 2 chiffres</p>
            </div>
            <div
              className={
                cheks.specialCharacter ? "success-color" : "error-color"
              }
            >
              <ion-icon
                className="cheks"
                name={
                  cheks.specialCharacter ? "checkmark-circle" : "close-circle"
                }
              />
              <p>Au moins 1 caractère spécial</p>
            </div>
            <div
              className={cheks.totalCharacter ? "success-color" : "error-color"}
            >
              <ion-icon
                className="cheks"
                name={
                  cheks.totalCharacter ? "checkmark-circle" : "close-circle"
                }
              />
              <p>8 caractères minimum</p>
            </div>
          </div>
        ) : null}
        <div className="formlogin__inputbox">
          <input
            value={confirmPwd}
            type="password"
            required="required"
            onChange={handleConfirmPwd}
          />
          <span>Confirmation</span>
        </div>
        <div className="modalPwd">
          <div className={cheksPwd ? "success-color" : "error-color"}>
            <ion-icon
              className="cheks"
              name={cheksPwd ? "checkmark-circle" : "close-circle"}
            />
            <p>Mot de passe confirmé</p>
          </div>
        </div>
        <Link to="/home">
          {showButton && <input className="button" type="submit" />}
        </Link>
      </form>
    </div>
  );
};

FormFirstConnexion.propTypes = {
  userName: PropTypes.string.isRequired,
  setUserName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  setUserAvatar: PropTypes.string.isRequired,
};

export default FormFirstConnexion;
