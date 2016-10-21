export default class MovieService{

	static getAllMovies(){
		return fetch(window.location.href + 'api/'+ 'movies', { method:'get' }).then( (data)=>{
			return data.json();
		});
	}
}