import React from "react";

import "./App.css";
import PasswordValidation from "./PassValidation/PasswordValidation";
import PageHeading from "./root/headFoot/PageHeading";
import PageFooter from "./root/headFoot/PageFooter";

function App() {
  return (
    <div>
      <PageHeading />
      <div className="App">
        <h2>Checking Password Strength in ReactJS</h2>
        <PasswordValidation />
      </div>
      <PageFooter />
    </div>
  );
}

export default App;
