const express = require('express');
const app = express();

console.log("Starting web app");
app.get('/', (req, res)=>{
    console.log("Request received");
    res.send(`
    <h1>Hello World</h1>
    `)
});

app.listen(3000);