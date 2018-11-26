import React from 'react'; 

import SignupFormHeading from './Heading/SignupFormHeading'; 
import SignupForm from './Form/SignupForm'; 

import './style/formContainer.css'; 


const SignupContainer = () => {

    return (
        <div className="form form--signup">
            <SignupFormHeading />
            <SignupForm />
        </div>
    ); 

}

export default SignupContainer; 