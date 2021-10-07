import React from 'react';

const Counter = ({email, rank}) => {
	return (
		<div>
			<div className='f2 center white'>
				Welcome, {email}
			</div>
			<div className='f3 center white'>
				You are the #{rank} guest visiting this warm website
			</div>
		</div>
	)
}

export default Counter;