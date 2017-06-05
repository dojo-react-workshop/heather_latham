// import Underscore from 'underscore';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      memoryArr: ['','','','','','','','','','','',''],
	      guessArr: ['','','','','','','','','','','',''],
	      board: 1,
	      counter: 3
	    };
	  }

	 startGameClick = () => {

 		this.setState({
 			board: 2
 		})

 		this.boardPromise = new Promise((resolve, reject) => {
		    this.interval = setInterval(this.myTimer
		    	, 1000)
		    resolve(true)
		});

		this.boardPromise
		    .then(
		        this.setState({
					memoryArr: ['Y','','Y','Y','','Y','','','','','',''],
					board: 3,
					counter: 2
				})

			)
			.then(

				this.oneSecondDelay = new Promise((resolve, reject) => {
					// this.timeOut = 
					setTimeout(resolve, 1000)
			    }),
				this.oneSecondDelay
			    	.then (
				    	this.setState({
							board: 4,
							counter: 3
						})
					)
			)
			.then(
		
			 	this.threeSecondDelay = new Promise((resolve, reject) => {
					// this.timeOut = 
					setTimeout(resolve, 3000)
			    }),
				this.threeSecondDelay
					.then (
						this.setState({
							board: 5
						})
					)
			)
	 }


	myTimer = () => {
		
		console.log(this.state.counter)

		this.setState({
			counter: this.state.counter-1
		})

		if (this.state.counter === 0){
			clearInterval(this.interval)
		}
	}

	render() {

		const styleApp = {
			width: '750px',
			marginLeft: 'auto',
			marginRight: 'auto'
		}

		return (
			<div style={styleApp}>
				<h1 style={{textAlign: 'center'}}>Memory Game</h1>
				<GameBoard buildboard={this.state.board} memboard={this.state.memoryArr} personboard={this.state.guessArr}/>
				<Footer startGameClick={this.startGameClick} board={this.state.board} counter={this.state.counter}/>
			</div>
		)
	}
}

class GameBoard extends React.Component {

	boardSquareClick = (value) => {

		const tempSquaresArr = Object.assign(this.props.guessArr)

		tempSquaresArr[value] = 'Y'

		this.setState({
			guessArr: tempSquaresArr
		})	
	}

	render() {

		const styleRow = {
			display: 'block',
			width: '610px',
			marginLeft: 'auto',
			marginRight: 'auto'
		}

		if ( this.props.buildboard === 1 || this.props.buildboard === 2 ) {
			return (
				<div style={styleRow}>
					<Square styleColor={'white'} boardSquareClick={()=>{}} value={0} /><Square styleColor={'white'} boardSquareClick={()=>{}} value={2} /><Square styleColor={'white'} boardSquareClick={()=>{}} value={3} /><Square styleColor={'white'} boardSquareClick={()=>{}} value={4} /><br/>
					<Square styleColor={'white'} boardSquareClick={()=>{}} value={5} /><Square styleColor={'white'} boardSquareClick={()=>{}} value={6} /><Square styleColor={'white'} boardSquareClick={()=>{}} value={7} /><Square styleColor={'white'} boardSquareClick={()=>{}} value={8} /><br/>
					<Square styleColor={'white'} boardSquareClick={()=>{}} value={9} /><Square styleColor={'white'} boardSquareClick={()=>{}} value={10} /><Square styleColor={'white'} boardSquareClick={()=>{}} value={11} /><Square styleColor={'white'} boardSquareClick={()=>{}} value={12} /><br/>
				</div>
			)
		} else if (this.props.buildboard === 3) {
			let htmlString = []
			for (let i = 0; i < this.props.memboard.length; i++){
				if (this.props.memboard[i] === 'Y' ){
					htmlString.push(<Square styleColor={'blue'} boardSquareClick={()=>{}} value={i}/>)
				} else {
					htmlString.push(<Square styleColor={'white'} boardSquareClick={()=>{}} value={i}/>)
				}
				if (i === 3 || i === 7 || i === 11) {
					htmlString.push(<br/>)
				}
			}
			return (
				<div style={styleRow}>
					{ htmlString }
				</div>
			)
		} else if (this.props.buildboard === 4) {
			let htmlString = []
			for (let i = 0; i < this.props.personboard.length; i++){
				if (this.props.personboard[i] === 'Y' ){
					htmlString.push(<Square styleColor={'blue'} boardSquareClick={this.boardSquareClick} value={i}/>)
				} else {
					htmlString.push(<Square styleColor={'white'} boardSquareClick={this.boardSquareClick} value={i}/>)
				}
				if (i === 3 || i === 7 || i === 11) {
					htmlString.push(<br/>)
				}
			}
			return (
				<div style={styleRow}>
					{ htmlString }
				</div>
			)
		} else if (this.props.buildboard === 5) {
			let htmlString = []
			for (let i = 0; i < this.props.memboard.length; i++){
				if (this.props.memboard[i] === 'Y' & this.props.personboard[i] === 'Y'){
					htmlString.push(<Square styleColor={'green'} boardSquareClick={()=>{}} value={i}/>)
				} else if (this.props.memboard[i] === 'Y' && this.props.personboard[i] === '') {
					htmlString.push(<Square styleColor={'yellow'} boardSquareClick={()=>{}} value={i}/>)
				} else if (this.props.memboard[i] === '' && this.props.personboard[i] === 'Y') {
					htmlString.push(<Square styleColor={'red'} boardSquareClick={()=>{}} value={i}/>)
				} else {
					htmlString.push(<Square styleColor={'white'} boardSquareClick={()=>{}} value={i}/>)
				}
				if (i === 3 || i === 7 || i === 11) {
					htmlString.push(<br/>)
				}
			}
			return (
				<div style={styleRow}>
					{ htmlString }
				</div>
			)
		}
	}
}

class Square extends React.Component {
	
	selectCell = () => {
		this.props.boardSquareClick(this.props.value)
	}

	render() {
		let {styleColor} = this.props;

		const styleSquare = {
			width: '150px',
			height: '150px',
			border: 'thin solid black',
			display: 'inline-block',
			backgroundColor: styleColor
		}
		return (
			<div style={styleSquare} onClick={this.selectCell}>
			</div>
		)
	}
}

class Footer extends React.Component {
	
	showCountDownFooter = () => {
		this.props.startGameClick()
	}

	render() {

		const styleRow = {
			display: 'block',
			width: '610px',
			marginLeft: 'auto',
			marginRight: 'auto'
		}

		if (this.props.board === 1) {
			return (
				<div style={styleRow}>
					<button onClick={this.showCountDownFooter}>Start Game</button>
				</div>
			)
		} else if (this.props.board === 2) {
			return (
				<div style={styleRow}>
					<p>Get Ready To Memorize Cells in {this.props.counter} ... </p>
				</div>
			)
		} else if (this.props.board === 3) {
			return (
				<div style={styleRow}>
				</div>
			)
		} else if (this.props.board === 4) {
			return (
				<div style={styleRow}>
					<p>Guess the correct cells!)</p>
				</div>
			)
		} else if (this.props.board === 5) {
			return (
				<div style={styleRow}>
					<button onClick={this.showCountDownFooter}>Play Again</button>
				</div>
			)
		}
	}
}

ReactDOM.render(<App />, document.getElementById('root'));