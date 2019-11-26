import React from "react";
import { Wrapper, Container } from "./styles";

import StepWizard from "react-step-wizard";

function Form() {
  return (
    <StepWizard>
      <Container>
        <h1>Entendendo mais você 😍</h1>

        <form>
          <Wrapper>
            <label htmlFor="">Você gosta de computadores ?</label>
            <select>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </Wrapper>

          <Wrapper>
            <label htmlFor="">
              Tem curiosidade de como faz para construir uma rede social ?
            </label>
            <select>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </Wrapper>

          <Wrapper>
            <label htmlFor="">Já desmontou um computador ?</label>
            <select>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </Wrapper>

          <button>
            <span>Aplicar</span>
          </button>
        </form>
      </Container>
    </StepWizard>
  );
}

export default Form;
