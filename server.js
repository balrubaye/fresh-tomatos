
const http= require('http');
const app= require('express')();
const bodyParser = require('body-parser');

const movieService = require('./server/services /movieService.js')();

const port= process.argv[2];

app.use(bodyParser.json());

console.log(movieService);

app.get('/movies', (req, res) =>{

	movieService.getAllMovies( (err, value)=> {
		if(err){ return res.status(500).json({error: String(err) })}

		res.status(200).json(value);	
	});

});



app.get('/movie/:name', (req, res)=>{
	console.log('sdsd' + req.params.name);

	movieService.getMovie( req.params.name, (err, value) =>
	{
		if(err){ return res.status(500).json({error: String(err) })}

		res.status(200).json(value);	
	});
})


app.post('/movie', (req, res)=>{
	console.log( req.body);

	movieService.putMovie(req.body.movie_name, req.body, (err,value)=>{

		if(err){ return res.status(500).json({error: String(err) })}

		res.status(200).json(value);		
	});
})

app.delete('/movie/:name', (req, res)=>{
	console.log('sdsd' + req.params.name);

	movieService.deleteMovie( req.params.name, (err, value) =>
	{
		if(err){ return res.status(500).json({error: String(err) })}

		res.status(200).json(value);	
	});
})


app.listen( port, ()=>{
	console.log('Start listening to requets ...' + port);

})
