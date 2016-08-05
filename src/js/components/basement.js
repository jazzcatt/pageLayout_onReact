import React from 'react';
import Contact_form from './contact_form';

class Basement extends React.Component {
	render() {
		return 	<section className='basement'>
					<div className='col-md-4 col-md-offset-1 about_block'>
						<h3>About us</h3>
						<p>
				  	      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				  	      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				  	      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				  	      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
				  	      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
				  	      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
				  	      anim id est laborum.
				        </p>
					</div>
					<div className='col-md-6 contact_block'>
						<h3 className='col-md-6'>Contact us</h3>
						<Contact_form />
					</div>
				</section>
	}
}

export default Basement;