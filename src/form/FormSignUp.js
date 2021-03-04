import React from "react";
import "./FormSignUp.scss";
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs";

const FormSignUp = ({ onSubmit, signUp }) => {
  const [emailInput, setEmailInput] = React.useState("");
  const [validEmail, setValidEmail] = React.useState(true);
  const [validInterests, setValidInterests] = React.useState(true);
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChangeEmail = (e) => {
    setValidEmail(true);
    setEmailInput(e.target.value);
  };

  const submitValue = (submit) => {
    submit.preventDefault();
    if (!onSubmit) return;
    if (!validateEmail(emailInput)) {
      setValidEmail(false);
    } else {
      const formValue = {
        email: emailInput,
      };
      onSubmit(formValue);
    }
  };

  return (
    <div className="form">
      <div className="form__error">
        {validEmail ? (
          <div></div>
        ) : (
          <p className="form__error__email">
            Please enter a valid email address
          </p>
        )}
        {validInterests ? (
          <div></div>
        ) : (
          <p className="form__error__interests">
            Please enter a valid interests
          </p>
        )}
      </div>
      <div className="form__input">
        <input
          type="email"
          className={
            validEmail ? "form__input__email" : "form__input__email invalid"
          }
          placeholder="Your Email Address *"
          value={emailInput}
          onChange={handleChangeEmail}
        />
        <select>
          <option value="" disabled selected>
            Your interests
          </option>
          <option value="Developer">Developer</option>
          <option value="Marketer">Marketer</option>
          <option value="Designer">Designer</option>
        </select>
      </div>
      {!signUp ? (
        <button className="form__signup" onClick={submitValue}>
          Sign Up Now <BsFillCaretRightFill />
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default FormSignUp;
