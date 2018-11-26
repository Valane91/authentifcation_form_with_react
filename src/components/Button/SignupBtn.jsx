import React from 'react'; 

import './style/btn.css';

const SignupBtn = (props) => {
    
    if(props.hasId) {
        
        return (
            <button className="button" id="signup" onClick={ () => props.onClick() }>
                Sign Up
            </button>
        );
    
    } else {

        return (
            <button className="button">
                Sign Up
            </button>
        );

    }
}

export default SignupBtn; 