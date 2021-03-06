import React from 'react';
import './SignIn.css'

class SignIn extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      signInEmail: '',
	      signInPassword: '',
	      msg: ''
	    }
	}

	onEmailChange = (event) => {
	    this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
	    this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('https://s61qq6qer7.execute-api.us-west-1.amazonaws.com/login', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	        Email: this.state.signInEmail,
	        Password: this.state.signInPassword,
	        Type: "SignIn"
	      })
	    })
	    .then(response => response.json())
	    .then(response => {
	        if (response.statusCode === 200) {
	        	this.setState({msg: ""})
		        this.props.loadUser(response.body);
		        this.props.onRouteChange('home');
	        } else {
	        	this.setState({msg: "invalid credentials"})
	        }
	    })
	}

	render() {
		const { onRouteChange } = this.props;
		return (
				<article className="br3 ba b--white mv4 w-100 w-50-m w-25-l mw6 center">
			        <main className="pa4 white-80">
			          <div className="measure">
			            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			              <legend className="f1 ph0 mh0">Log In / Register</legend>
			              <h3 className="red"> { this.state.msg } </h3> 
			              <div className="mt3">
			                <label className="db lh-copy f6" htmlFor="email-address">Username</label>
			                <input
			                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-yellow w-100 white"
			                  type="email"
			                  name="email-address"
			                  id="email-address"
			                  onChange={this.onEmailChange}
			                />
			              </div>
			              <div className="mv3">
			                <label className="db lh-copy f6" htmlFor="password">Password</label>
			                <input
			                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-yellow white w-100"
			                  type="password"
			                  name="password"
			                  id="password"
			                  onChange={this.onPasswordChange}
			                />
			              </div>
			            </fieldset>
			            <div className="">
			              <input
			              	onClick={this.onSubmitSignIn}
			                className="ph3 pv2 input-reset white ba b--white bg-transparent grow pointer f6 dib hover-yellow"
			                type="submit"
			                value="Sign in"
			              />
			            </div>
			            <div className="lh-copy mt3">
			              <p
			              onClick={() => onRouteChange('register')}
			              className="f6 link dim white db pointer hover-yellow grow"
			              >Register
			              </p>
			            </div>
			          </div>
			        </main>
				</article>
		 )
	}
}

export default SignIn;