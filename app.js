
var http = require('http');
var fs = require('fs');

// Create a server object
function onRequest (req, res) {
		// http header
	

	var url = req.url; 

	if (url == '/index'){
	// http header
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	fs.readFile('./index.html' , null , function(error , data){
		if(error){
			res.writeHead(404);
			res.write('file not found');
		}else{
			res.write(data);
		}
		res.end();
	});
	}

    else if(url ==='/about') {
		fs.readFile('./about.html' , null , function(error , data){
			if(error){
				res.writeHead(404);
				res.write('file not found');
			}else{
				res.write(data);
			}
			res.end();
		}); 

	} else if(url ==='/contact') {
		fs.readFile('./contact.html' , null , function(error , data){
			if(error){
				res.writeHead(404);
				res.write('file not found');
			}else{
				res.write(data);
			}
			res.end();
		}); 
	}else if(url ==='/gallery') {
		fs.readFile('./gallery.html' , null , function(error , data){
			if(error){
				res.writeHead(404);
				res.write('file not found');
			}else{
				res.write(data);
			}
			res.end();
		}); 
	} 
	
	else {
		res.writeHead(200, {'Content-Type': 'text/html'});
	
		fs.readFile('./index.html' , null , function(error , data){
			if(error){
				res.writeHead(404);
				res.write('file not found');
			}else{
				res.write(data);
			}
			res.end();
		});
	}
}
http.createServer(onRequest).listen(3000);
