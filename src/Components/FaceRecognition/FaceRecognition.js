import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({url, box, age}) => {
	return(
	       <div className='center'>
	       	<div className='absolute mt2'>
	       		<img id='inputimg' alt='' src={url} width='500px' heigh='auto'/>
	       		<div
	       		className='bounding-box' 
	       		style={{left: box.leftCol, top: box.topRow, right: box.rightCol, bottom: box.bottomRow}}
	       		>
	       			<div className="bounding-box-concepts">
	       				<div className="concept bounding-box__concept">
	       					<span className="concept__name white">
	       						{age}
	       					</span>
	       				</div>
	       			</div>
	       		</div>
	       	</div>
	       </div>
	);
};

export default FaceRecognition