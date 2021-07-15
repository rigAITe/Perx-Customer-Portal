import React from 'react';
import './address-bar.css';

const AddressBar = (props) => {
	return (
		<div className="address-bar">
			{props.show ?
				<div className="d-flex flex-row justify-content-between align-items-center">
					<p>
						{props.text1}
					</p>
					<p className="bold black-text" style={{ width: '90%' }}>
						{props.text2}
					</p>
				</div> :
				<div className="d-flex flex-row justify-content-between align-items-center">
					<p>
						{props.text1}
					</p>
					<p>
						{props.text2}
					</p>
				</div>
			}

		</div>
	)
}

export default AddressBar