import React from 'react';

class Widget_map extends React.Component {
	render() {
		return  <section className='widget_map'>
				  <div className='col-md-4'>
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
				  <div className='col-md-6'>
				  	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40635.37580228201!2d30.529886535781888!3d50.465106329846044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce6aeb46254f%3A0x8e70cf5f182d1883!2z0JrQvtC90YLRgNCw0LrRgtC-0LLQsNGPINC_0LvQvtGJ0LDQtNGM!5e0!3m2!1sru!2sua!4v1470170955419" 
				  		width='100%' height="300" 
				  		frameBorder="0" style={{border:0}}
				  		allowFullScreen>
				  	 </iframe>
				  </div>	
				</section>
	}
}

export default Widget_map;