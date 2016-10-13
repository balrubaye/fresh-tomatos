export default class MovieService{

	static getAllMovies(){
		return fetch(window.location.href + 'movies', { method:'get' }).then( (data)=>{
			return data.json();
		});
	}
}