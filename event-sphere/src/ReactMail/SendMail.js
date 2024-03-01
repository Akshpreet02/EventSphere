import { Resend } from "resend";

const key = "re_geV67eqa_NRrozrvPrUzFu9caRrf79w3p";

const resend = new Resend("re_bzsYtb4U_J5SwBcWr1r11miMyRh6NqN87");

/**
 * @param {string} name - Name of the Recipient
 * @param {string} emailSendTo - Email of Recipient
 * @param {string} subjectToSend - Subject Line
 * @param {string} rawText - Alternative if someone has html turned off
 * @param {React.JSX.Element} - The email you want to send missing no parts
 * @returns {emails} email - sneds email to specified email address from brock's domain
 * @description Sends emails by Resend given all this info
 * @todo - fix this pos I dont understand why it doesnt work
 */
const SendMail = async (
  emailSendTo,
  name,
  subjectToSend,
  rawText,
  emailToSend
) => {
  console.log({ emailSendTo, name, subjectToSend, rawText, emailToSend }); //more debug testng

  const res = await resend.emails.send({
    from: "brock@eatsleepski.com", //cannot change without more money
    to: emailSendTo,
    subject: subjectToSend,
    html: <h1>Hello</h1>, //debug testing
    react: emailToSend,
    text: rawText,
  });

  if (res.data) {
    return new Response(JSON.stringify({ message: res.data }), {
      status: 200,
      statusText: "OK",
    });
  } else {
    return new Response(JSON.stringify({ message: res.error }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};

export default SendMail;
