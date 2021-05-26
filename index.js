const express = require('express');
const path = require('path');

const app = express();

app.listen(4000,() => console.log("server is runnning"));

const postsPath = path.join(__dirname,'src', 'html', "posts.html");
const aboutPath = path.join(__dirname,'src', 'html', 'about.html');
const contactPath = path.join(__dirname,'src', 'html', 'contact.html');


app.get("/posts",(request, response) =>{
   response.sendFile(postsPath)
})

app.get("/about",(request, response) =>{
   response.sendFile(aboutPath)
})

app.get("/contact",(request, response) =>{
   response.sendFile(contactPath)
})