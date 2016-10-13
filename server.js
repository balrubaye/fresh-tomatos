
const http= require('http');
const Express=require('express')
const app= Express();
const bodyParser = require('body-parser');
const ReactDom= require('react-dom/server');
const React= require('react');
const Router= require('react-router');
const movieService = require('./server/services /movieService.js')();
const path= require('path');

//const Main= require('./src/app/main.jsx');
//const Main= require('./src/main.js');
//const routesConfig= require('src/app/routesConfig.js');


const port= process.argv[2] || 8891;

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use('/', Express.static( path.join(__dirname+ '/dist') ));

/*
app.get('/', (req, res)=>{
	//console.log(Main);
	res.sendFile(path.join(__dirname+ '/dist/index.html'));
	//console.log( ReactDom.renderToString() )

})
*/

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
	console.log('Start listening to requets ...' + port);

})
