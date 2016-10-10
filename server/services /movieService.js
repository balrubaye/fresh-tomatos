const db = require('../db.js');
const movies = db.sublevel('movies');


module.exports=() => {

	return {

		 getAllMovies: (callback) => {
			let result=[];

			movies.createReadStream()
			.on('data', (data) =>{
				result.push(data);

			})
			.on('error', (err)=>{
				console.log(`Error : ${ err } `);
				callback(err);
			})
			.on('end', ()=>{
				callback(null, result);	
			});
		},
		

		getMovie: (key, callback)=>{
			movies.get(key, (err, value)=>{

				if(err){
					console.log(`Error: ${err} `);
					return callback(err);
				};

				callback(null, value);

			});
		},

		putMovie:  ( key, value, callback)=>{

			movies.put(key, value, (err)=>{
			if(err){
				console.log(`Error: ${err} `);
				return callback(err);
			}
			callback(null, { key: key,
							value:value	})
			});
		},

		deleteMovie: (key, callback)=>{
			movies.del( key, (err, value)=> {
				if(err){
				console.log(`Error: ${err} `);
				return callback(err);
			}

			callback(null, { key: key, value:value	})
			})
		}
	}
}