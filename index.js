import express from 'express';
import { users } from './users.js';
import bodyParser from 'body-parser';
const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.render(`views`,{users});
});

app.get('/users', (req, res)=>{
    res.send({users});
} )

app.get('/', (req, res)=>{
   // console.log(`Hello Harlem!`);
    res.send('Hello Harlem!');
    console.log(users);
    
    res.send(users);
});

app.post('/', (req, res)=>{
    console.log(`West-Side`);
    //console.log(req.body);
    const user = req.body//This is where my post is being stored. I can push my post into the array below
    users.push(user);//This is to add posts/objects/users to my array.

    res.send(`Hey ${user.firstName}${user.lastName}! Where is the next fight for freedom?`);//testing post requests and variables from user
});
app.listen(port, (error)=>{
    if(!error){
        console.log(`Server is Running on port: ${port}`)
    }else{
        console.error(error);
    }
});
//patch
app.patch('/users/:id', (req, res)=>{
    let id =req.params.id * 1;
    let superHeroToUpdate = users.find(sh => sh.id ===id);
    let index = users.indexOf(superHeroToUpdate);//find index and storing it in variable "index"

    Object.assign(superHeroToUpdate, req.body)//merge objects value of req.body will merge with superheroToUpdate changing its property value
    users[index] = superHeroToUpdate;// after merging req.body to superHerToUpdate put it back into it's index position.
    fs.writeFile('users/:id', JSON.stringigy(users), (err)=>{
        res.status(200).json({
            status: "success",
            data: {
                users: superHeroToUpdate
            }
        })
    })

})