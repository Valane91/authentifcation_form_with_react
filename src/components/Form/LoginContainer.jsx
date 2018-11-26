import React from 'react'; 

import LoginFormHeading from './Heading/LoginFormHeading'; 
import LoginForm from './Form/LoginForm'; 

import './style/formContainer.css'; 


const LoginContainer = () => {

    return (
        <div className="form form--login">
            <LoginFormHeading />
            <LoginForm />
        </div>
    ); 

}

export default LoginContainer; 