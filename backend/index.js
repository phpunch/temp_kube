const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('./models/Comment');
//Set up default mongoose connection
var mongoDB = 'mongodb://db:27017/data';
// if (process.env.NODE_ENV === 'test') {
//   mongoDB = keys.mongoURITEST
// } else if (process.env.NODE_ENV === 'production') {
//   mongoDB = 'mongodb://db:27017/data';
// }
console.log(mongoDB)
// var mongoDB = 'mongodb://db:27017/data';
mongoose.connect(mongoDB, {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!!')
});

//////////////////////////////////////

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


require('./routes/commentRoutes')(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('App listening port 5000!');
})
