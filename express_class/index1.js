const express = require("express");
const app = express();

const user = [{
    name: "John",
    kidenys: [{
        healthy: false
    }]
}];


app.use(express.json());

app.get("/", function (req, res) {
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

app.post("/", function (req, res) {
    // console.log(req.body);      // undefined
    const isHealthy = req.body.isHealthy;
    user[0].kidenys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Done!"
    })
})

app.put("/", function (req, res) {
    for (let i = 0; i < user[0].kidenys.length; i++) {
        user[0].kidenys[i].healthy = true;
    }
    res.json({});
})

// removing all the unhealthy kidneys
app.delete("/", function (req, res) {
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