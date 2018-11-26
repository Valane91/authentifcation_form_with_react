import React from 'react'; 

import ToggleBtnWrapper from '../Button/ToggleBtnWrapper';

import './style/toggle.css';


const Toggle = (props) => {
        
    switch(props.isSignupToggle) {
        case true: 
            return (
                <div className="message signup" >
                    <ToggleBtnWrapper onClick={ toggle => props.onClick(toggle) } />
                </div>
    
            );
        default: 
            return (
                <div className="message login" >
                    <ToggleBtnWrapper onClick={ toggle => props.onClick(toggle) } />
                </div>
            );
    }

}

export default Toggle; 