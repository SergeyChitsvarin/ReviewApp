const express = require("express")
const router = express.Router()

router.get("/Calgary", (req, res) =>{
    res.send("This is Calgary")
})

router.get("/Edmonton", (req, res) =>{
    res.send("This is Edmonton")
})

router.get("/Vancouver", (req, res) =>{
    res.send("This is Vancouver")
})

router.get("/Victoria", (req, res) =>{
    res.send("This is Victoria")
})

router.get("/Saskatoon", (req, res) =>{
    res.send("This is Saskatoon")
})

router.get("/Regina", (req, res) =>{
    res.send("This is Regina")
})

router.get("/Winnipeg", (req, res) =>{
    res.send("This is Winnipeg")
})

router.get("/Toronto", (req, res) =>{
    res.send("This is Toronto")
})

router.get("/Ottawa", (req, res) =>{
    res.send("This is Ottawa")
})

router.get("/Montreal", (req, res) =>{
    res.send("This is Montreal")
})

router.get("/Halifax", (req, res) =>{
    res.send("This is Halifax")
})

module.exports = router