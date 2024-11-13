


const express = require('express')
const bodyPArser = require("body-parser");
// middlewares
const app = express()
const port = 3000

// app.get('/conversation', function (req, res) {
//     // res.send('Hello World!')
//     console.log(req.headers);
    
//     res.send({
//         msg: "2 + 2 = 4"
//     })
// })
app.use(bodyPArser.json());
app.post('/', function (req, res) {
    // res.send('Hello World!')
    // console.log(req.headers);
    console.log(req.body);
    
    res.send('Hello World')
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})