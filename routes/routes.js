module.exports = function(app) { 
	app.get('/', (req,res) => {   res.send('Hello, world!')})
	app.get('/users/:userId/books', (req,res) => {   res.send(req.params)})
	app.get('/hellonerds', (req,res) => {   res.send('Hello, nerds!!!')})
}