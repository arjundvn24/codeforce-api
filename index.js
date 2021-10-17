import fetch from "node-fetch";
import express from 'express';
const app=express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
const port=3000;
var username;
var data;
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render('index.ejs');
})
app.post('/', (req, res) => {
    username = req.body.username;
    console.log(username);
    res.redirect('/info');
});
app.get('/info',(req,res)=>{
    let api_url='https://codeforces.com/api/user.info?handles='+username;
    async function getUserData() {
        const response=await fetch(api_url);
        data=await response.json();
        data=data.result;
        res.render('info.ejs',{
            data:data    
        });
    }
    getUserData();
   
});

app.listen(port, () => console.log(`Example app listening at ${port}`));
