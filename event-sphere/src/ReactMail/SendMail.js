// import { render } from "@react-email/components";
import { Resend } from "resend";
import EmailTemplate from "./EmailTemplateTest.js";

/**
 * @param {string} name - Name of the Recipient
 * @param {string} emailSendTo - Email of Recipient
 * @param {string} subjectToSend - Subject Line
 * @param {string} rawText - Alternative if someone has html turned off
 * @param {React.JSX.Element} - The email you want to send missing no parts
 * @returns {emails} email - sneds email to specified email address from brock's domain
 * @description Sends emails by Resend given all this info
 * @todo - fix this I dont understand why it doesnt work
 */
const SendMail = async () =>
	// 	emailSendTo,
	// 	name,
	// 	subjectToSend,
	// 	rawText,
	// 	emailToSend
	{
		const emailSendTo = "darkicewolf50@gmail.com";
		const name = "Brock";
		const subjectToSend = "Test Mail";
		const rawText = "Nothing here to see";
		const emailToSend = EmailTemplate(name, emailSendTo);
		console.log({ emailSendTo, subjectToSend, rawText, emailToSend }); //more debug testng

		const resend = new Resend("re_H7Z8ekze_AFGPKA29ZrBarMxfeEFsy6y3");

		const { res, error } = await resend.emails.send({
			from: "valid@eatsleepski.com", //cannot change without more money
			to: emailSendTo,
			subject: subjectToSend,
			html: render(emailToSend, { pretty: true }),
			text: rawText,
		});
		await console.log(error);

		await console.log(res);
	};

export default SendMail;
