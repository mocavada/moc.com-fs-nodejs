import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from '../repos/routes/routes'

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mocdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// bodyparser setup
app.use(
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
); 


////Combine perssit and initialize???


// repo routes
routes(app);

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);