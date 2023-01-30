import React from "react";

const Contact = () => {
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
    <div className="form__contact">
      <div className="form__title">
        <h2>Contact</h2>
      </div>
      <form>
        <div className="inputBox__contact">
          <input type="text" required="required" />
          <span>Nom complet</span>
        </div>
        <div className="inputBox__contact">
          <input
            type="email"
            required="required"
            onChange={emailValidation}
            value={email}
          />
          <span>Email</span>
          <div className={email.length === 0 ? "icon initial-color" : message}>
            <ion-icon name={email.length === 0 ? "alert-circle" : icon} />
          </div>
        </div>
        <div className="inputBox__contact">
          <input type="message" required="required" />
          <span>Message</span>
        </div>
        <input className="buttonContact" type="submit" />
      </form>
    </div>
  );
};

export default Contact;
