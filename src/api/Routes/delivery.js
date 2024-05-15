const router = require("express").Router();
let Delivery = require("../model/Deliveryschema");

// Create delivery record 
router.route("/add").post(async(req, res) => {
    const {deliveryid, customername, items, transactionid, address, status,createdAt,completedAt} = req.body;

    const newDelivery = new Delivery({
        deliveryid,
        customername,
        items,
        transactionid,
        address,
        status,
        createdAt,
        completedAt
    });

    newDelivery.save().then(() => {
        res.json("Delivery created");
    }).catch((err) => {
        console.log(err);
    });
});

// Get all deliveries
router.route("/").get(async(req, res) => {
    Delivery.find().then((deliveries) => {
        res.json(deliveries);
    }).catch((err) => {
        console.log(err);
    });
});

// Update delivery
router.route("/update/:deliveryid").put(async(req, res) => {
    let deliveryNum = req.params.deliveryid;
    const {deliveryid, customername, items, transactionid, address, status} = req.body;

    // You need to add the update logic here
});

//http://localhost:8090/delivery/:deilveryid

router.route("/delete/:deliveryid").delete(async(req, res) => {
    let delivery = req.params.deliveryid;

    await Delivery.findOneAndDelete({deliveryid: delivery})
    .then(() => {
        res.status(200).send({status: "Delivery record deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Record", error: err.message});
    });
});

module.exports = router;
