const express = require("express");
const app = express();

const user = [{
    name: "John",
    kidenys: [{
        healthy: false
    }]
}];


app.use(express.json());

// User can check how many kidneys they have and their health 
app.get("/", function (req, res) {  //  Requests data from a server at the specified resource.
    // write logic
    const johnKideyns = user[0].kidenys;
    //console.log(johnKideyns);
    const numberOfKidneys = johnKideyns.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++) {
        if (johnKideyns[i].healthy)
            numberOfHealthyKidneys++;
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.send(`Here is the data, number of Kidneys: ${numberOfKidneys}, number of healty kidneys: ${numberOfHealthyKidneys}
        , and number of unhealthy Kidneys: ${numberOfUnHealthyKidneys}`);
})

// POST - User can add a new kidney 
app.post("/", function (req, res) {     // Submits data to a server to create a new resource.
    // console.log(req.body);      // undefined
    const isHealthy = req.body.isHealthy;
    user[0].kidenys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Done!"
    })
})


// PUT - User can replace a kidney, make it healthy 
app.put("/", function (req, res) {      // Sends data to the server to update an existing resource.
    for (let i = 0; i < user[0].kidenys.length; i++) {
        user[0].kidenys[i].healthy = true;
    }
    res.json({});
})

// DELETE - removing all the unhealthy kidneys
app.delete("/", function (req, res) {   //  Requests the server to delete a specified resource.
    // you should return a 411
    // only if atlest one unhealty kidney is there do this, else return 411
    if (isThereAtLeastOneUnhealtyKideney()) {
        const newKidneys = [];
        for (let i = 0; i < user[0].kidenys.length; i++) {
            if (user[0].kidenys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        user[0].kidenys = newKidneys;
        res.json({ msg: "done" })
    }
    else {
        res.status(411).json({
            msg: "You have no unhealthy kidneys"
        });
    }
    
})
function isThereAtLeastOneUnhealtyKideney() {
    for (let i = 0; i < user[0].kidenys.length; i++) {
        if (!user[0].kidenys[i])
            return true;
    }
    return false;
}
app.listen(3000);