import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import GlobalStyle from "./styles/global"
import Routes from "./routes"
import history from "./services/history"
// import StepWizard from "react-step-wizard";

import Form from "./components/Form";

// function App() {
//   return (
//     <div className="App">
//       <StepWizard>
//         <Form />
//       </StepWizard>
//     </div>
//   );
// }


function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  )
}

export default App
