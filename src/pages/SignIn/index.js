import React from "react"
import { Link } from "react-router-dom"
import { Form, Input } from "@rocketseat/unform"

import logo from "../../assets/logo.svg"

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form>
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
