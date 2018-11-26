import React from 'react'; 

import LoginInputFieldset from '../Input/LoginInputFieldset'; 
import LoginBtn from '../../Button/LoginBtn'; 


const LoginForm = () => {

    return (
        <form autoComplete="off">
            <LoginInputFieldset />
            <LoginBtn hasId={ false } />
        </form>
    ); 

}

export default LoginForm; 