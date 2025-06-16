import express from 'express';
import { users} from './users.js';

const app = express()

const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render(`views`,{users});
});

app.get('/users', (req, res)=>{
    res.send({users});
} )


app.listen(port, (error)=>{
    if(!error){
        console.log(`Server is Running on port: ${port}`)
    }else{
        console.error(error);
    }
});