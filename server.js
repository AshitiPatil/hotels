const express = require('express')
const app = express()
const db = require('./db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());// store data in req.body 

app.get('/', function (req, res) {
res.send('Welcome to my hotel...How i can help you ?')
})




app.get('/chicken',(req, res)=>{
    res.send('sure sir,i would love to serve chicken')
})

app.get('/idli',(req, res)=>{
    var customized_idli = {
        name: 'rava idli',
        size:'10cm diamter',
        is_sambhar:true,
        is_chutney:false
    }
    res.send(customized_idli)
})

app.post('/items',(req, res)=>{
    res.send("save data");
})

const personRoutes = require('./Routes/personRoutes');
const menuRoutes = require('./Routes/menuRoutes');
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

app.listen(3000 , ()=> {
    console.log('Listenin on port 3000');
})

