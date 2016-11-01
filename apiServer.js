const http= require('http');
const Express=require('express')
const app= Express();
const bodyParser = require('body-parser');

const movieService = require('./server/services /movieService.js')();
const path= require('path');





const port= 8889;

app.use(bodyParser.json());

//middleware 
app.use((req,res, next)=>{

	console.log(`New request for : ${req.url} `);
	next();
})


//Select all movies 
app.get('/movies', (req, res) =>{

	movieService.getAllMovies( (err, value)=> {
		if(err){ return res.status(500).json({error: String(err) })}

		res.status(200).json(value);	
	});

});


//Select specific movie 
app.get('/movie/:name', (req, res)=>{
	console.log('sdsd' + req.params.name);

	movieService.getMovie( req.params.name, (err, value) =>
	{
		if(err){ return res.status(500).json({error: String(err) })}

		res.status(200).json(value);	
	});
})

//Create New movie
app.post('/movie', (req, res)=>{
	console.log( req.body);

	movieService.putMovie(req.body.movie_name, req.body, (err,value)=>{

		if(err){ return res.status(500).json({error: String(err) })}

		res.status(200).json(value);		
	});
})

//Delete a movie 
app.delete('/movie/:name', (req, res)=>{
	console.log('sdsd' + req.params.name);

	movieService.deleteMovie( req.params.name, (err, value) =>
	{
		if(err){ return res.status(500).json({error: String(err) })}

		res.status(200).json(value);	
	});
})


app.listen( port, ()=>{
	console.log('Api Server is listening to requets ...' + port);

})
