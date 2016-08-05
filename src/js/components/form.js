import React from 'react';

class Form extends React.Component {
	render(){
		return <form role='form'>
		  		  <fieldset className='form-group'>
					<input type='text' className='form-control' placeholder='name' />
					<input type='text' className='form-control' placeholder='phone' />
					<input type='text' className='form-control' placeholder='email' />
					<input type='text' className='form-control' placeholder='amount' />
					<input type='button' className='btn btn-default pull-right' value='make request' 
					 data-toggle="modal" data-target="#send_modal"/>
				  </fieldset>
				</form>
	}
}

export default Form;