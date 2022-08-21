import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div, Form } from 'basedesign-iswad';

import TextBox from '@/baseComponents/TextBox';
import Button from '@/baseComponents/Button';

import useApiCalls from '@/hooks/useApiCalls';
import { emailValidators, passwordValidators } from './utils';
import { loginUser } from '@/utils/auth';
import { LOGIN_API_ROUTE } from '@/constants/apiRoutes';

import styles from './LoginComponent.module.scss';

const LoginComponent = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const toBeValidatedFields = [
    {
      input_name: 'email',
      validators: emailValidators,
      errorMessageHandler: setEmailErrorMessage
    },
    {
      input_name: 'password',
      validators: passwordValidators,
      errorMessageHandler: setPasswordErrorMessage
    }
  ];

  const [sendLoginReq, setSendLoginReq] = useState(false);
  const bodyData = {
    email,
    password
  };
  const { data, error } = useApiCalls({
    sendReq: sendLoginReq,
    setSendReq: setSendLoginReq,
    method: 'POST',
    url: LOGIN_API_ROUTE,
    bodyData
  });

  useEffect(() => {
    if (data) {
      loginUser(data['access'], data['refresh'], dispatch);
    }
  }, [data]);

  return (
    <>
      <Form
        className="textWhite py1 flex flex--jc--center flex--dir--col ml-auto mr-auto w-per-100"
        toBeValidatedFields={toBeValidatedFields}
        onSubmit={() => setSendLoginReq(true)}>
        <TextBox
          type="text"
          name="email"
          labelText="Email"
          placeholder=""
          isRequired
          val={email}
          setVal={setEmail}
          errorMessage={emailErrorMessage}
          errorHandler={setEmailErrorMessage}
          id="loginEmail"
        />
        <TextBox
          type="password"
          name="password"
          labelText="Password"
          placeholder=""
          isRequired
          val={password}
          setVal={setPassword}
          errorMessage={passwordErrorMessage}
          errorHandler={setPasswordErrorMessage}
          id="loginPassword"
        />
        <Div type="flex" hAlign="center">
          <Button className="w-px-200" type="submit" id="loginButton">
            Login
          </Button>
        </Div>
      </Form>
    </>
  );
};

export default LoginComponent;