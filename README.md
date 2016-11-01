# fresh-tomatos

Simple App using Express LevelDB , React , Webpack, Web-Proxy and Docker

To generate the bundle file after change run:
`npm run dev`

There is a webserver that runs by default on port 8891 and another apiServer which runs on port 8889, by using the web proxy any request to `httpl://localhost:8891/api` will forward that request to the apiServer `http:localhost:8889`

To run the express servers : `npm run start`  if port is not specified then it will be 8891

`` http://localhost:8891/ `` to see the web ui

List of Apis :

`http://localhost:8891/api/movies`

`http://localhost:8891/api/movie/Avengers - Age of Ultron 2`

``http://localhost:8891/api/movie/movie/Avengers - Age of Ultron 2 ``(post with passing the json body)


