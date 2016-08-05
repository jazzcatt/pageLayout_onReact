import React from 'react';

class Menu extends React.Component {
	render() {
		return 	<nav className='navbar'>
					<a href='#'>home</a>
					<a href='#'>products</a>
					<a href='#'>testimonials</a>
					<a href='#'>why us</a>
					<a href='#'>contact us</a>
				</nav>
	}
}

export default Menu;