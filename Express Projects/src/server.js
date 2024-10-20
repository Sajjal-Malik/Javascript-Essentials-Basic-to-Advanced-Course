import express from 'express';
import cookieParser from 'cookie-parser';
import users from './users.js';
import { v4 as uuid } from 'uuid';


const app = express();

app.use(express.json());  // Middleware   // -->  req.body = ...
app.use(cookieParser());  // Middleware   // -->  req.cookie = ...

// Create
// Raed (load) --> "List", "Read One", "Search"

app.get('/users', (req, res) => {
    // res.send("Users page");
    // res.json(users);

    let {search} = req.query;
    if(search){
        let matches = users.filter(user => user.username.includes(search));
        res.json(matches);
    }
    else{
        res.json(users);
    }

});

app.get('/users/:userId', (req, res) => {
    let {userId} = req.params;
    let user = users.find(user => user.id === userId);

    if(user){
        res.json(user);
    }
    else{
        res.sendStatus(404);
    }
    
});

app.get('/users/:userId/comments/commentId', (req, res) => {
    let {userId, commentId} = req.params;
    let user = users.find(user => user.id === userId);
    let comment = users.comments.find(comment => commentId === commentId);

    if(user){
        res.json(user);
    }
    else{
        res.sendStatus(404);
    }
});

app.post('/users', (req, res) => {
    let {username, password} = req.body;

    let newUser = {
        id: uuid(),
        username,
        password,
        numberOfArticles
    }

    users.push(newUser);

    res.send(201).json(users);
});

app.put('/:id', function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        let updateData = {
            id: found.id,
            name: req.body.name,
            course: req.body.course,
            roll_no: req.body.roll_no
        };

        let targetIndex = data.indexOf(found);

        data.splice(targetIndex, 1, updateData);

        res.status(201).json({ 'message': "data updated" });
    } else {
        res.status(404).json({
            'message': 'unable to insert data because data inserted not matched'
        });
    }
});

app.delete('/:id', function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        let targetIndex = data.indexOf(found);

        data.splice(targetIndex, 1);

        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});
// Handling requests - GET POST PUT DELETE

app.get('/products', (req, res) => {
    res.send("Here is the Product");

});

app.put("/about", (req, res) =>{
    res.send("Here is the login page"); 
});

app.post("/login", (req, res) =>{
    res.send("Here is the login form"); 
});

app.delete("/account", (req, res) =>{
    res.send("deleted the account"); 
});



app.listen(8080, () => console.log("Server is Listening on port 8080...")); 