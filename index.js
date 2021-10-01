const express=require('express');
const app=express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
const port=3000;
app.get('/',(req,res)=>{
    res.render('index.ejs');
})
app.post('/', (req, res) => {
    const username = req.body.username;
    console.log(username);
    username
    res.redirect('https://codeforces.com/api/user.info?handles='+username.toLowerCase(username));
});
app.listen(port, () => console.log(`Example app listening at ${port}`));
