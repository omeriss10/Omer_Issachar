const express = require('express');
const path = require('path');
const app = express();
const port = 2002;
app.use(express.static(path.join(__dirname, "static")));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"));
});


app.get('/formHandler', (req, res)=>{
    res.send("thank you!");
});


app.listen(port, ()=>{
    console.log("server is running on port", port);
});