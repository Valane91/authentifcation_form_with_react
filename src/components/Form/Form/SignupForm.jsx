import React from 'react'; 

import SignupInputFieldset from '../Input/SignupInputFieldset'; 
import SignupBtn from '../../Button/SignupBtn'; 


const SignupForm = () => {

    return (
        <form autoComplete="off">
            <SignupInputFieldset />
            <SignupBtn hasId={ false } />
        </form>
    ); 

}

export default SignupForm; 