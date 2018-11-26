import React from 'react'; 

import './style/btn.css';


const LoginBtn = (props) => {
    
    if(props.hasId) {
        
        return (
            <button className="button" id="login" onClick={ () => props.onClick() }>
                Login
            </button>
        );
    
    } else {

        return (
            <button className="button">
                Login
            </button>
        );

    }
}

export default LoginBtn; 