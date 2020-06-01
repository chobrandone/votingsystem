const express = require("express")
const hospitalManager = require("../models/Hospital");

var router = express.Router();

//voters list
var students=[

]


router.get("/", function(req, res){
    res.render("vote")
});

router.get("/hospitals/add", function(req, res){
    res.render("hospital/add")
});

//add a hospital
router.post("/", (req,res)=>{
    var newHospital = req.body;
    hospitals.push(newHospital);
    res.send(hospitals)

});

//update hospital details
router.patch("/:id",(req,res)=>{
    var id = req.params.id-1;
    var updatedInfo = req.body;
    hospitals[id] = updatedInfo;
    res.send(hospitals)
    
});


module.exports = router;