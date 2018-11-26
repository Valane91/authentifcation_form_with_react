import React from 'react'; 

import NameInput from './InputComponents/NameInput';
import EmailInput from './InputComponents/EmailInput'; 
import PasswordInput from './InputComponents/PasswordInput'; 

import './style/fieldset.css';


const SignupInputFieldset = () => {

    return (
        <fieldset>  
            <NameInput />
            <EmailInput />
            <PasswordInput />
        </fieldset>
    );

}

export default SignupInputFieldset; 