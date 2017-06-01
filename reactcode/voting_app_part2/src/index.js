import React from 'react';
import ReactDOM from 'react-dom';
import img from './plus.png';

const App = () => {
	
	const styleH = {
        textAlign: 'center'
    }

	return (
		<div>
			<h1 style={styleH}>Vote Your JS Library!</h1>
			<Container/>
		</div>
	)
}

class Container extends React.Component {

    state = {
    	libraries: [ 
    		{
		        text: 'React',
		        count: 0
		    },
		    {
		        text: 'Vue',
		        count: 0
		    },
		    {
		        text: 'Angular',
		        count: 0
		    },
		    {
		        text: 'Ember',
		        count: 0
		    }
		]
	}

    incCount = (text) => {

		this.setState((oldState) => {
			const newLibraries = oldState.libraries.map((alibrary) => {
				if (alibrary.text !== text) {
					return {...alibrary}; 
				} else {
					return {
						...alibrary,
						count: alibrary.count + 1
					}
				}
			})
			return {
				libraries: newLibraries
				}
		})
	}

    render () {
    	let sortedlibraries = [...this.state.libraries]
    		sortedlibraries = sortedlibraries.sort((a, b) => {
    			if (a.count < b.count) return 1
    			if (a.count > b.count) return -1
    			return 0
    		})

	   	const rectangles = sortedlibraries.map((recObj) => {
		return <Rectangle key={recObj.text} recInfo={recObj} myFunc={this.incCount} />
		})
		return (
			<div>
				{rectangles}
			</div>
		)
	}  
}

const Rectangle = (props) => {

    const styleDiv = {
        height: '55px',
        width: '275px',
        display: 'block',
        border: 'thin solid black',
        marginLeft: 'auto',
        marginRight: 'auto'
    };

    const styleText = {
        width: '80px',
        height: '45px',
        margin: '0px',
        verticalAlign: 'middle',
        textAlign: 'center',
        display: 'inline-block'
    }

    const styleCounter = {
        textAlign: 'center',
        border: '2px solid black',
        borderRadius: '50px',
        margin: '0px',
        width: '40px',
        height: '40px',
        fontSize: '20px',
        display: 'inline-block',
        verticalAlign: 'middle'
    };

    const stylePic = {
        width: '35px',
        height: '35px',
        display: 'inline-block',
        verticalAlign: 'middle'
    }

    const { recInfo } = props;
    const text = recInfo.text;
    const counter = recInfo.count;

    const click = () => {
    	props.myFunc(text)
    }

	return (
    	<div style={styleDiv}>
	        <p style={styleCounter}>{counter}</p>
	        <p style={styleText}>{text}</p>
	        <img style={stylePic} onClick={click} src={img} alt="pluspic"/>
	    </div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
