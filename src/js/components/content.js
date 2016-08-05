import React from 'react';
import Article_col from './article_col';
import Pagination from './nav_pagination';
import Widget_map from './widget_map';

class Content extends React.Component {
	render() {
		return  <main>
					<Article_col />
					<Article_col />
					<Article_col />
					<p>
				  	Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				  	sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				  	Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				  	 ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
				  	 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
				  	 sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
				  	  anim id est laborum.
				  </p>
				  <Pagination />
				  <Widget_map />
				</main> 
	}
}


export default Content;