import React from 'react';
import ReactiveButton from 'reactive-button';
import { uniqueNamesGenerator, Config, adjectives, colors, NumberDictionary, starWars} from 'unique-names-generator';

class Register extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      email: '',
	      password: '',
	      msg: '',
	      secret: true
	    }
	}

	onPasswordChange = (event) => {
	    this.setState({password: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	generateEmail = () => {
		const randomName: string = uniqueNamesGenerator({
		  dictionaries: [adjectives, starWars],
		  separator: ' '
		});
		this.setState({email: randomName})
	}

	generatePassword = () => {
		const numberDictionary = NumberDictionary.generate({ min: 100000, max: 99999999 });
		const randomPassword: string = uniqueNamesGenerator({
		  dictionaries: [colors, numberDictionary]
		});
		this.setState({password: randomPassword})
	}

	onSubmitSignIn = () => {
		if(this.state.password.length < 6){
			this.setState({msg: 'Minimum Password Length is 6'})
		}
		else{
			this.setState({msg: ''})
			fetch('https://s61qq6qer7.execute-api.us-west-1.amazonaws.com/login', {
		      method: 'post',
		      headers: {'Content-Type': 'application/json'},
		      body: JSON.stringify({
		        Email: this.state.email,
		        Password: this.state.password,
		        Type: 'Register'
		      })
		    })
		      .then(response => response.json())
		      .then(response => {
		        if (response.statusCode === 200) {
		          this.props.loadUser(response.body)
		          this.props.onRouteChange('home');
		        } else {
		        	this.setState({msg: "Registration Failed: Network Issue"})
		        }
		      })
		  }
	}

		togglePassword = () => {
	    // When the handler is invoked
	    // inverse the boolean state of passwordShown
	    this.setState({secret: !this.state.secret});
	  }

	  render () {
	  	return (
			<article className="br3 ba b--white mv4 w-100 w-80-m w-50-l mw6 center">
			        <main className="pa4 white-80">
			          <div className="measure">
			            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			              <legend className="f2 ph0 mh0">Register</legend>
			              <div className="mt3">
			              	<h3 className="red"> { this.state.msg } </h3> 
			                <label className="db lh-copy f6" htmlFor="email-address">Username</label>
			                <div className='flex'>
			                	<div className=" w-100">
					                <input
					                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-yellow white w-100"
					                  type="email"
					                  name="email-address"
					                  id="email-address"
					                  value={this.state.email}
					                  onChange={this.onEmailChange}
					                />
					            </div>
					            <div className="">
					                <ReactiveButton
								         color={'yellow'}
								         idleText={'Generate'}
								         type={'button'}
								         size={"small"}
								         className={'class1 class2'}
								         shadow={true}
								         rounded={true}
								         width={null}
								         height={null}
								         animation={true}
								         onClick={this.generateEmail}
								    />
								</div>
							</div>
			              </div>
			              <div className="mt3">
			              	<label className="db lh-copy f6" htmlFor="password">Password</label>
			                <div className='flex'>
			                	<div className=" w-100">
					                <input
					                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-yellow white w-100"
					                  type={this.state.secret ? "password" : "text"}
					                  name="password"
					                  id="password"
					                  value={this.state.password}
					                  onChange={this.onPasswordChange}
					                />
					            </div>

					            <div>
				            		<ReactiveButton
								         color={'yellow'}
								         idleText={'Generate'}
								         type={'button'}
								         size={"small"}
								         className={'class1 class2'}
								         shadow={true}
								         rounded={true}
								         width={null}
								         height={null}
								         animation={true}
								         onClick={this.generatePassword}
								    />
								</div>
							</div>
							
			              </div>
			            </fieldset>
			            <div className="mt2">
			              <input
			              	onClick={this.onSubmitSignIn}
			                className="b ph3 pv2 input-reset white ba b--white bg-transparent grow hover-yellow pointer f6 dib"
			                type="submit"
			                value="Register"
			              />
			            </div>
			            <div className='mt2'>
				            <ReactiveButton 
					                color={'secondery'}  
					                idleText={'show password'} 
					                onClick={this.togglePassword}
					                rounded={true}
					                shadow={true}
					                size={'small'}
				            />
				        </div>
			          </div>
			        </main>
			      </article>
		 )
	  }
}

export default Register;