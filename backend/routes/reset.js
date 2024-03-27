const { Router } = require("express");
const router = Router();
const { User, PasswordReset } = require("../db/index.js");
const { sendEmail } = require('../mail/mailer');

router.post('/forget', async (req, res) => {
    const { email } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const resetCode = Math.floor(Math.random() * 9000000000 + 1000000000).toString();

        // Create a password reset document in the database collection
        const newPasswordReset = new PasswordReset({
            user: user._id,
            resetCode: resetCode,
            expiration: new Date(Date.now() + 3600000) // Expires in 1 hour
        });
        await newPasswordReset.save();

        // Send the email with the reset code
        const subject = "Your Password Reset Code";
        const textBody = `Your password reset code is: ${resetCode}`;
        await sendEmail(email, subject, textBody);

        res.json({ message: "A password reset code has been sent to your email." });
    } catch (error) {
        console.error('Error during password reset:', error);
        res.status(500).json({ message: 'Error during password reset process.', error: error.message });
    }
})

module.exports = router;