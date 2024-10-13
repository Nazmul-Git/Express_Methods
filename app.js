const express = require('express');

const app = express();
const PORT = 3000;

// for post request 

// app.use(express.raw()); //<Buffer 7b 0d 0a 20 20 20 20 22 6e 61 6d 65 22 20 3a 20 22 4e 61 7a 6d 75 6c 22 0d 0a 7d>

// app.use(express.text()); // plain text , name=Sunny&id=20
// app.use(express.urlencoded()); // { google: 'www.google.com' }
// app.use(express.json()); //{ name: 'Nazmul' }
// app.use(express.static(`${__dirname}/public/`)) // get static data like, text.txt file, image.png etc.
const router= express.Router({
    caseSensitive: true,
})
app.use(router);



router.get('/home', (req, res) => {
    res.send('Wlcome to your server.')
})

router.post('/', (req, res) => {
    // console.log(req.body);  
    res.send('User POST request');
})

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running,and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);
