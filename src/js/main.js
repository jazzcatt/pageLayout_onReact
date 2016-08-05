import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Logo_head from './components/logo-head'; 
import Heading from './components/heading';
import Content from './components/content';
import Basement from './components/basement';
import Modal from './components/modal';

$(document).ready(function() {

class Hello extends React.Component {
	render() {
		return	<div>
				  <Modal />
				  <Logo_head />
				  <Heading />
				  <Content />
				  <Basement />
				</div>
	}
}

ReactDOM.render(<Hello />, document.getElementById('container'));

});
