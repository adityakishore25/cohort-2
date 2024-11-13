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
    res.send(`Here is the data, nmber of Kidneys: ${numberOfKidneys}, number of healty kidneys: ${numberOfHealthyKidneys}
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
app.listen(3000);