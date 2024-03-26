require('dotenv').config();
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox34f8925d18c04684bae1fe282d68cb6e.mailgun.org";
const mg = mailgun({apiKey: process.env.MAILGUN, domain: DOMAIN});
const data = {
	from: "EventSphere rohil1710@gmail.com",
	to: "akshpreet.singh.02@gmail.com",
	subject: "Hello",
	text: "Testing some Mailgun awesomness!"
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});
