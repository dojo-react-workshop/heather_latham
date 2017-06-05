import React, { Component } from 'react';
import './styles/App.css';
var validator = require("email-validator");

class App extends Component {

	state = {
		nameVal: '',
		nameErrMgs: '',
		email: '',
		emailErrMgs: '',
		namePass: false,
		emailPass: false,
		btnDis: true,
		display: 'form' //'form' or 'thanks'
	}

	handleChange = (event) => {
		const { name, value} = event.target;
		let nameError = this.state.nameErrMgs;
		let emailError = this.state.emailErrMgs;
		let namePassing = this.state.namePass;
		let emailPassing = this.state.emailPass;
		let displaySubmitBtn = this.state.btnDis;


		if(name === 'nameVal' && value.length<8){
			nameError = 'Name needs to be 8 chars or longer';
			namePassing = false;
		}
		else if(name === 'nameVal' && value.length>=8){
			nameError = '';
			namePassing = true;
		}

		if(name === 'email' && !validator.validate(value)){
			emailError = 'invalid email format';
			emailPassing = false;
		}
		else if(name === 'email' && validator.validate(value)){
			emailError = '';
			emailPassing = true;
		}

		if(namePassing && emailPassing) {
			displaySubmitBtn = false;
		}
		else{
			displaySubmitBtn = true;
		}

		this.setState( {
			[name]: value,
			nameErrMgs: nameError,
			emailErrMgs: emailError,
			namePass: namePassing,
			emailPass: emailPassing,
			btnDis: displaySubmitBtn
		})
	}

	submitFormClick = () => {
		let display = 'thanks'
		this.setState({display: display})
	}
	  render() {

	  	if(this.state.display === 'form'){
	  		return (
		      <div className="App">
		        <div>
		        	<input type='text' name='nameVal' placeholder='name' onChange={this.handleChange} value={this.state.name}/>
		        	<p>{this.state.nameErrMgs}</p>
		        </div>
		        <div>
		        	<input type='text' name='email' placeholder='email' onChange={this.handleChange} value={this.state.email}/>
		        	<p>{this.state.emailErrMgs}</p>
		        </div>
		        <button onClick={this.submitFormClick} disabled={this.state.btnDis}>Submit</button>
		      </div>
		    );
	  	}
	  	else{
	 	  	return (
		      <div className="App">
		      Thanks!
		      </div>
		    ); 		
	  	}


	  }
}

export default App;
