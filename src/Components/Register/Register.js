import React from 'react';
import ReactiveButton from 'reactive-button';

const Register = ({onRouteChange}) => {

	const generateEmail = () => {
		this.setState({email: 'fuck@gmail.com'})
	}
	return (
		<article className="br3 ba b--white mv4 w-100 w-80-m w-50-l mw6 center">
		        <main className="pa4 white-80">
		          <div className="measure">
		            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		              <legend className="f2 fw6 ph0 mh0">Register</legend>
		              <div className="mt3">
		                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		                <div className='flex'>
		                	<div class=" w-100">
				                <input
				                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
				                  type="email"
				                  name="email-address"
				                  id="email-address"
				                />
				            </div>
				            <div class="">
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
							    />
							</div>
						</div>
		              </div>
		              <div className="mt3">
		              	<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		                <div className='flex'>
		                	<div class=" w-100">
				                <input
				                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
				                  type="password"
				                  name="password"
				                  id="password"
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
							    />
							</div>
						</div>
		              </div>
		            </fieldset>
		            <div className="">
		              <input
		              	onClick={() => onRouteChange('home')}
		                className="b ph3 pv2 input-reset white ba b--white bg-transparent grow pointer f6 dib"
		                type="submit"
		                value="Register"
		              />
		            </div>
		          </div>
		        </main>
		      </article>
		 )
}

export default Register;