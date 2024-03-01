import { Resend } from "resend";

const key = "re_geV67eqa_NRrozrvPrUzFu9caRrf79w3p";

const resend = new Resend(key);

const SendMail = async (emailSendTo, name, subject, rawText, emailToSend) => {
  const res = await resend.emails.send({
    from: "no-reply@ensf401eventsphere.ca",
    to: emailSendTo,
    subject: subject,
    react: emailToSend,
    text: rawText,
  });
  if (await res.data) {
    await console.log(res);
  }
};

export default SendMail;
