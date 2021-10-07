import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';
import './ImageLinkForm.css';

const ImageLinkForm = ({oninputchange, onbuttonsubmit, status}) => {
	const [state, setState] = useState('idle');
	const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 1500);
    }
	return (
		<div>
			<p className='f3 center white'>
			 Click 'Detect' to Make Age Predictions
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input 
					className='f4 pa2 w-70 center'
					type='tex' 
					onChange={oninputchange}
					placeholder='Image URL, or simply click Detect'
					/>
					<ReactiveButton
					 buttonState={state}
			         onClick={() => { onbuttonsubmit(); onClickHandler();}}
			         color={'primary'}
			         idleText={'Detect'}
			         loadingText={'Loading'}
			         successText={'Success'}
			         errorText={'Error'}
			         type={'button'}
			         size={"large"}
			         className={'class1 class2'}
			         shadow={true}
			         rounded={true}
			         messageDuration={1500}
			         disabled={false}
			         buttonRef={null}
			         width={130}
			         height={null}
			         animation={true}
			    />
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;