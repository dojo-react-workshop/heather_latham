import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	state = {
		numofcountholders: 1
	}

	incCountHolder = () => {
		this.setState({numofcountholders: this.state.numofcountholders+1})
	}

	render() {
			return (
			<div>
				<button onClick={this.incCountHolder}>Add Counter</button>
				<CounterHolder numofcountholders={this.state.numofcountholders}/>
			</div>
		)
	}
}

const CounterHolder = (props) => {

	let total = props.numofcountholders
	console.log(total);
	let htmlString = [];

	for (let i = 1; i <= total; i++){
	 	htmlString.push(<Counter/>)
	}

	return <div>{htmlString}</div>;

}

class Counter extends React.Component {

	state = {
		count: 0
	}

	incCount = () => {
		this.setState({count: this.state.count+1})
	}

	decCount = () => {
		this.setState({count: this.state.count-1})
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.incCount}>Increment</button>
				<button onClick={this.decCount}>Decrement</button>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
