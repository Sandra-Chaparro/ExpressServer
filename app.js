const express = require('express');

//Not secure to have port hard coded, instead use an env variable
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());//to enable JSON parsing in incoming requests

//Create APIs
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/greet', (req, res) => {
    const {name} = req.body;
    if(!name)
    {return res.status(400).json("Name is required")}
    res.json(`Hello ${name}`);//instead of .json can be just .send if we want the body plain text
});

app.get('/greet/:name', (req, res) => {
    const {name} = req.params;

    res.json(`Hello ${name}`);//instead of .json can be just .send if we want the body plain text
});
// app.get('/greet/:name', (req, res) => {
//     const params = req.query;
//     const {name} = req.params;
//     console.log("hello");
//     console.log(params);
//     if(params.uppercase){
//         message = `HELLO ${name.toUpperCase()}`;
//     }else{
//         message = `Hello ${name}`;
//     }
//     res.json(message);
// });


app.listen(PORT, () => {//command node app.js to run
    console.log(`Server listening on port ${PORT}`);
});

