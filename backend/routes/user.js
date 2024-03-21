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
})

module.exports = router;

