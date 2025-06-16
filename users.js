import express from 'express';
const router = express.Router();

export let users = [
    {
    id:1,
    fName: 'Captain',
    lName: 'America',
    age: 80
},
{
    id:2,
    fName: 'Black',
    lName: 'Widow',
    age: 32
},
{
    id:3,
    fName: 'Bruce',
    lName: 'Banner',
    age: 35
},
{
    id:4,
    fName: 'Iron',
    lName: 'Man',
    age: 35
}
];

// router.get('/', (req, res)=>{
//    // console.log(`Hello Harlem!`);
//     res.send('Hello Harlem!');
//     console.log(users);
    
//     res.send(users);
// });

// router.post('/', (req, res)=>{
//     console.log(`West-Side`);
//     //console.log(req.body);
//     const user = req.body//This is where my post is being stored. I can push my post into the array below
//     users.push(user);//This is to add posts/objects/users to my array.

//     res.send(`Hey ${user.firstName}${user.lastName}! Where is the next fight for freedom?`);//testing post requests and variables from user
// });


export default router;