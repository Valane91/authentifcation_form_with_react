import React from 'react'; 

import SignupBtn from './SignupBtn'; 
import LoginBtn from './LoginBtn';

import './style/btnWrapper.css';


const ToggleBtnWrapper = (props) => {

    return(
        <div className="btn-wrapper">
            <SignupBtn hasId={ true } onClick={ () => props.onClick("signup") } />
            <LoginBtn hasId={ true } onClick={ () => props.onClick("login") }  />
        </div>
    );

}

export default ToggleBtnWrapper; 