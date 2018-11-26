import React from 'react'; 

import LoginContainer from './Form/LoginContainer';
import SignupContainer from './Form/SignupContainer'; 
import Toggle from './Toggle/Toggle'; 

import './style/app.css';  
 

class App extends React.Component {

    constructor(props) {
        super(props); 

        this.state = 
        (
            {
                isSignupToggle: true        
            }
        ); 

        this.handleToggleBtnClick = this.handleToggleBtnClick.bind(this);
    }


    
    handleToggleBtnClick(toggle) {


        if(toggle === 'login' && this.state.isSignupToggle === true) {
            
            this.setState(
                {
                    isSignupToggle: false 
                }
            );    
        
        } else if(toggle === 'signup' && this.state.isSignupToggle === false) {
        
            this.setState(
                {
                    isSignupToggle: true 
                }
            );    
        
        } 
    }


    render() {

        return (
            <div className="container">
                
                <SignupContainer />
                <LoginContainer /> 
                
                <Toggle 
                    isSignupToggle={ this.state.isSignupToggle } 
                    onClick={ (toggle) => this.handleToggleBtnClick(toggle) }
                /> 

            </div>
        );
    }

}

export default App; 