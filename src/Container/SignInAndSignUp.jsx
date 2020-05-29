import React from 'react';

import SignIn from '../Components/sign-in';
import SignUp from '../Components/sign-up';
import './styles/SignInAndSingUp.scss'

const SignInAndSignUpPage = () => (
  <>
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
    <div className="msg">
      <h4>SignIn and SignUp with e-mail will be add soon.</h4>
      <h4 className="ml-5">Yet you can use signin with google.</h4>
    </div>
    
  </>
);

export default SignInAndSignUpPage;
