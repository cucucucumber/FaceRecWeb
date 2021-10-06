import React from 'react';

const FaceRecognition = ({url}) => {
	return(
	       <div className='center'>
	       	<div className='absolute mt2'>
	       		<img id='inputimg' alt='' src={url} width='500px' heigh='auto'/>
	       	</div>
	       </div>
	);
};

export default FaceRecognition