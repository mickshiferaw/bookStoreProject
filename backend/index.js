import express from 'express';
import mongoose from 'mongoose';
import {mongoDBURL} from './config.js';
import {Book} from './models/bookModel.js';
import booksRoute from './routes/bookRoutes.js';
import cors from 'cors';
const app = express();
const PORT = 5555;

//middleware for parsing request body
app.use(express.json());

//middleware for handling cors policy
//option 1: allow all origin with default of cors(*)
app.use(cors());
//option 2: allow custom origin(this is a better way),allows more controll
// app.use(
//     cors({
//         origin: 'http://localhost:300',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// );



app.get('/', (req, res) =>  {
    console.log(req);
    return res.status(234).send('wlcome to mern stack tutorial')

})

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log('app connected to database')
    app.listen(PORT, () =>{
        console.log("port at 555")
    })
})
.catch((error)=> {
    console.log(error)
})