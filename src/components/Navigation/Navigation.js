import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
      );
    } else {
      return (
          <nav className="" style={{display: 'flex'}}>
          <a style={{'marginRight': 'auto'}} href="#"> 
            <Logo/>
          </a>
            <p onClick={() => onRouteChange('signin')} className='ma0 f3 link dim black underline pa3 pointer'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='ma0 f3 link dim black underline pa3 pointer'>Register</p>          
        </nav>
      );
    }
}

export default Navigation;