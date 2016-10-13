import React, { Component} from 'react';

export default class Movie extends Component{

	constructor(props){
		super(props);

		this.state={
			showDetail:false
		}
	}

	handleDetailClick(){
		let oldState=this.state.showDetail;

		this.setState({ showDetail: !oldState});
	}

	render(){

		return(<div className='movie'>
					<div className='floated'> <img className='thumbnail' src={ this.props.imageUrl} /> </div>
					 <div> <strong> {this.props.movieName} </strong>
					 	   <div> {this.props.movieRating} </div>
					 	   <div className='details'  onClick= { ()=> { this.handleDetailClick()}}> {this.state.showDetail ? 
					 	    this.props.movieDescription : <button > showss Detail </button>} </div>
					 </div>
			</div>)
	}

}