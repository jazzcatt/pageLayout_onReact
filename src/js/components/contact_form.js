import React from 'react';

class Contact_form extends React.Component {
	render() {
		return 	<div className='col-md-6'>
					<textarea id='mess_box' placeholder='Send message to us'></textarea>
					<div>
						<a href='#' className='col-md-6 col-md-offset-2'><u>contact</u> <u>page</u></a>
						<input type='button' className='btn btn-default pull-right' value='Send' 
						data-toggle="modal" data-target="#send_modal"/>
					</div>
				</div>
	}
}

export default Contact_form;