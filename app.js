const express = require('express');
const app = express();
require('dotenv').config()

app.use(express.static("public"))

app.get('/', (req, res) => {
        let name = req.query["name"]
        let pass = req.query["pass"]

        if(!name || !pass){
            res.redirect("/login")
        }
        else if(name.toLocaleLowerCase() != process.env.user || pass.toLocaleLowerCase() != process.env.senha){
            res.redirect("/login")
        }
        else{
            res.sendFile(__dirname+"/public/home.html")
        }
        
    }
)

app.get('/login', (req, res) => {
    res.sendFile(__dirname+"/public/login.html")
    }
)

app.listen(5500 || process.env.PORT, () => {
    console.log('our app is running locally...');
});