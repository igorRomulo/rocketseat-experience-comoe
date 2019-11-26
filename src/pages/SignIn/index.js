import React from 'react';
import { Link } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';
// import { Link } from "react-router-dom"
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
// import { signInRequest } from "~/store/modules/auth/actions"

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),

  password: Yup.string().required('A senha é obrigatória')
});

export default function SignIn() {
  // const dispatch = useDispatch();
  const loading = false; //useSelector(state => state.auth.loading);

  function handleSubimit({ email, password }) {
    //dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubimit}>
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/list" className="button">
          Acessar
        </Link>
        {/* <Link to="/register">Criar conta gratuita</Link> */}
      </Form>
    </>
  );
}
