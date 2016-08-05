import React from 'react';
import Menu from './menu';
import Form from './form';

class Heading extends React.Component {
	render() {
		return 	<div className='heading'>
					<Menu />
					<span className='pull-left arrow'>⇐</span>
					<div className='col-md-4 title '>
					Heading |
					</div>

					<div className='col-md-4 col-md-push-3'>
					<Form />
					</div>
					<span className='pull-right arrow'>⇒</span>

				</div>
	}
}

export default Heading;