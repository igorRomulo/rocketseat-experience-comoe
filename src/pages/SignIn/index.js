import React from "react"
import { Link } from "react-router-dom"
import { Form, Input } from "@rocketseat/unform"
import history from "../../services/history"

import logo from "../../assets/logo.svg"

export default function SignIn() {
  function handleSubimit({ email, password }) {
    history.push("/list")
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubimit}>
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button>
          <Link to="/list" className="button">
            Acessar
          </Link>
        </button>
      </Form>
    </>
  )
}
