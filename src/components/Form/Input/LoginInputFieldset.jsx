import React from 'react'; 

import NameInput from './InputComponents/NameInput';
import PasswordInput from './InputComponents/PasswordInput'; 

import './style/fieldset.css';


const LoginInputFieldset = () => {

    return (
        <fieldset>  
            <NameInput />
            <PasswordInput />
        </fieldset>
    );

}

export default LoginInputFieldset; 