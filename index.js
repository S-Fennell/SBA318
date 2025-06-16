import express from 'express';
import { users } from './users.js';


const app = express();

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
//patch
app.patch('/users/:id', (req, res)=>{
    let id =req.params.id * 1;
    let superHeroToUpdate = users.find(sh => sh.id ===id);
    let index = users.indexOf(superHeroToUpdate);//find index and storing it in variable "index"

    Object.assign(superHeroToUpdate, req.body)//merge objects value of req.body will merge with superheroToUpdate changing its property value
    users[index] = superHeroToUpdate;// after merging req.body to superHerToUpdate put it back into it's index position.
    FileSystem.writeFile('users/:id', JSON.stringigy(users), (err)=>{
        res.status(200).json({
            status: "success",
            data: {
                users: superHeroToUpdate
            }
        })
    })

})