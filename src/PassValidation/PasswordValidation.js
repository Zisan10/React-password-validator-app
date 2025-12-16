import React, { useState } from "react";
import validator from "validator";
const PasswordValidation = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleValidate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
      })
    ) {
      setErrorMessage("✔ Strong Password");
    } else {
      setErrorMessage("❌ Input Strong");
    }
  };

  return (
    <div>
      <div className="input">
        <h4>Enter Password : </h4>
        <input
          type="password"
          placeholder="Enter Pass:"
          onChange={(e) => {
            handleValidate(e.target.value);
          }}
        />
        {errorMessage === "" ? <span>{null}</span> : <p>{errorMessage}</p>}
        <button>Log in</button>
      </div>
    </div>
  );
};

export default PasswordValidation;
