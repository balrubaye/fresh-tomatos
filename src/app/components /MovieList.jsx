import React, {Component} from 'react';
import Movie from './Movie.jsx'
import MovieService from '../movieService.js'; 

export default class MovieList extends Component{

	constructor(props){
		super(props);

		this.state={
			movies:[{
				    "movie_name": "Avengers - Age of Ultron 2",
				    "image_url": "http://resizing.flixster.com/s8kIQtOhr36lGPkcUGCVeqVWw9Y=/180x270/dkpu1ddg7pbsk.cloudfront.net/movie/11/19/01/11190143_ori.jpg",
				    "rating": "4.1",
				    "description": "When Tony Stark jumpstarts a dormant peacekeeping program, things go awry and Earth's Mightiest Heroes, including Iron Man, Captain America, Thor, The Incredible Hulk, Black Widow and Hawkeye, are put to the ultimate test as they battle to save the planet from destruction at the hands of the villainous Ultron."
				    }]
		}
	}

	componentDidMount(){
		MovieService.getAllMovies().then( (data)=>{
			let movies=[];

			data.forEach( item => {movies.push(item.value)} );
			this.setState({ movies : movies })
		})
	}

	render(){

		return( <div> {this.state.movies.map( (movie, indx)=>{

			return <Movie imageUrl={movie.image_url }   movieName={movie.movie_name} key={indx}
				movieRating={movie.rating}
				movieDescription={movie.description} />  
		}) } </div> )
	}
}