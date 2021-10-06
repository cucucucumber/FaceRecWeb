import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({oninputchange, onbuttonsubmit}) => {
	return (
		<div>
			<p className='f3 center white'>
			 {'Testy Websity'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input 
					className='f4 pa2 w-70 center' 
					type='tex' 
					onChange={oninputchange}
					placeholder='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
					/>
					<button 
					className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
					onClick = {onbuttonsubmit}
					>Detect
					</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;