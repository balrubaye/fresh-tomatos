
const http= require('http');
const Express=require('express')
const app= Express();
const bodyParser = require('body-parser');
const ReactDom= require('react-dom/server');
const React= require('react');
const Router= require('react-router');
//const movieService = require('./server/services /movieService.js')();
const path= require('path');

const httpProxy= require( 'http-proxy');
const targetUrl='http://localhost:8889';

let proxy= httpProxy.createProxyServer({ target:'http://localhost:8889'});



const port= process.argv[2] || 8891;

app.use(bodyParser.json());
app.set('view engine', 'ejs');


//Proxy requests for API server
app.use('/api', (req, res) =>{
	
	proxy.web(req, res , {target: targetUrl});
})


app.use('/', Express.static( path.join(__dirname+ '/dist') ));





app.listen( port, ()=>{
	console.log('Start listening to requets ...' + port);

})
