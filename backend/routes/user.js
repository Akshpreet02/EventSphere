const { Router } = require("express");
const router = Router();
const { User } = require("../db/index.js");

router.get("/getUsers", async(req, res) => {
    console.log("Getting users from the backend")

    const users = await User.find();
    
    res.status(200).json({
        "Users": users
    })
})

router.post("/addUser", async(req, res) => {
    console.log("Posting user to backend")

    const payLoad = req.body;
    try {
        await User.create({
            username: payLoad.username,
            password: payLoad.password,
            email: payLoad.email,
            full_name: payLoad.full_name,
            role: payLoad.role
        })
    
        res.status(200).json({
            msg: "User created"
        })
    } catch(error) {
        console.error("Error creating user", error);
        res.status(500).json({
            msg: "Failed to create user due to an internal error."
        });
    }
    
})

router.post('/login', async (req, res) => {
    console.log("validating user credentials")

    const payLoad = req.body;
    const user = await User.findOne({
        username: payLoad.username,
        password: payLoad.password
    })

    if(user) {
        res.status(200).json({
            "userFound": true,
            "id": user._id
        })
    } else {
        res.status(200).json({
            "userFound": false
        })
    }
})

module.exports = router;

