const express = require('express');
const path = require('path');
const port = 7000;
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('assets'));

const theme_server = {
	theme_light: 'light',
	theme_dark: 'dark'
}

var clientTheme = '';

app.get('/', function(req, res){
	// console.log(path.join(__dirname))
	
	return res.render('index', 
		{
			theme_client: theme_server
		}
	);
});

app.get('/singlePlaylistScreen', function(req, res){
	// console.log(path.join(__dirname))
	
	return res.render('singlePlaylistScreen');
});


app.listen(port, function(err){
	if(err){
		console.log(err) 
		return
	}
	console.log('Express Server is running!');

})