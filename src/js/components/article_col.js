import React from 'react';

class Article_col extends React.Component {
	render() {
		return  <div className='col-sm-4 article_col'>
					<img src='./src/img/default.png' />
					<h3>Article |</h3>
					<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
					ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
					in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
					id est laborum.
					</p>
					<a href='#'><u>Read</u> <u>more</u></a>
				</div>
	}
}

export default Article_col;