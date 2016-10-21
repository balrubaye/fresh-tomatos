
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
//const Main= require('./src/app/main.jsx');
//const Main= require('./src/main.js');
//const routesConfig= require('src/app/routesConfig.js');


const port= process.argv[2] || 8891;

app.use(bodyParser.json());
app.set('view engine', 'ejs');

//Proxy requests for API server
app.use('/api', (req, res) =>{
	proxy.web(req, res , {target: targetUrl})
})


app.use('/', Express.static( path.join(__dirname+ '/dist') ));

/*
app.get('/', (req, res)=>{
	//console.log(Main);
	res.sendFile(path.join(__dirname+ '/dist/index.html'));
	//console.log( ReactDom.renderToString() )

})
*/



app.listen( port, ()=>{
	console.log('Start listening to requets ...' + port);

})
