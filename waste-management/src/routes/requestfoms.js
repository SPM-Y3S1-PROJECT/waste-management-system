const router = require("express").Router();
const Requestform = require("../models/Requestform");
let form = require("../models/Requestform");



//adding  forms            
//http://localhost:9090/Requestform/add
router.route("/add").post((req, res) => {

    const name = req.body.name;
    const Contactnumber = Number(req.body.Contactnumber);
    const address = req.body.address;
    const Categoryname=req.body.Categoryname;
    const SubCategoryname=req.body.SubCategoryname;
    const approximatewaight = req.body.approximatewaight;
    const description = req.body.description;


    const newform = new Requestform({
        name,
        Contactnumber,
        address,
        Categoryname,
        SubCategoryname,
        approximatewaight,description
    })
    newform.save().then(() => {
        res.json("form added")

    }).catch((err) => {
        console.log(err);
    })
})


//viewall
router.route("/").get((req, res) => {

    Requestform.find().then((forms) => {
        res.json(forms)
    }).catch((err) => {
        console.log(err);
    })


})

//update

router.route("/update/:id").put(async(req, res) => {
    let formid = req.params.id;

    const { name, Contactnumber, address, Categoryname,
        SubCategoryname, approximatewaight,description } = req.body;


    const updateform = {
        name,
        Contactnumber,
        address,
        Categoryname,
        SubCategoryname,
        approximatewaight,description
    }
    const update = await Requestform.findByIdAndUpdate(formid, updateform).then(() => {
        res.status(200).send({ status: "form updated", user: update })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            status: "error with updating Data ",
            Error: err.massage
        })

    })


})

//http://localhost:9090/Requestform/delete/631218392a59d3d1790a6059
router.route("/delete/:id").delete(async(req, res) => {
    let formid = req.params.id;
    await Requestform.findByIdAndDelete(formid).then(() => {
        res.status(200).send({ states: "form deleted" });

    }).catch((err) => {
        console.log(err.massage);
        res.status(500).send({ status: "Error with delete", error: err.massage });
    })



})






module.exports = router;