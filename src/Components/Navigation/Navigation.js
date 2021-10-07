import React from 'react';

const Navigation = ({onRouteChange, isSignedIn, email}) => {
    if (isSignedIn){
    	return (
	    	<nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
	    		<p className = 'f3 pa3 white'>
	    		Hi, {email}
	    		</p>
				<p 
				onClick={() => onRouteChange('signout')} 
				className = 'f3 link dim underline pa3 pointer white'
				>Sign Out</p>
			</nav>
    	);
	} else {
		return (
			 <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
				<p 
				onClick={() => onRouteChange('signin')} 
				className = 'f3 link dim black underline pa3 pointer white'
				>Sign In</p>
				<p 
				onClick={() => onRouteChange('register')} 
				className = 'f3 link dim underline pa3 pointer white'
				>Register</p>
			</nav>
		);
	}
}

export default Navigation;