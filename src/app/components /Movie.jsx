import React, { Component} from 'react';
import Rating from './Rating.jsx'

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
					 <div className='movie-data'> <strong> {this.props.movieName} </strong>
					 	   <div> <Rating value={this.props.movieRating} /> </div>
					 	   <div className='details'  onClick= { ()=> { this.handleDetailClick()}}> {this.state.showDetail ? 
					 	    this.props.movieDescription : <button > showss Detail </button>} </div>
					 </div>
			</div>)
	}

}