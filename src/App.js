import React from "react";
import StepWizard from "react-step-wizard";

import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StepWizard>
        <Form />
      </StepWizard>
    </div>
  );
}

export default App;
