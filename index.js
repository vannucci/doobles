const app = require("express")();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); 

const routes = require("./routes/routes")(app);

app.listen(3000, () => console.log("Running on 3000..."));
