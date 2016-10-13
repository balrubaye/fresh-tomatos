const React= require('react') ;
import ReactDom from 'react-dom';
import MovieList from './components /MovieList.jsx'

class Main extends React.Component{

	constructor(props){
		super(props);
	}

	render(){

		return( 
			<div> <MovieList /> </div>);
	}
}

//module.exports= Main;
ReactDom.render(<Main />, document.getElementById('main') );
