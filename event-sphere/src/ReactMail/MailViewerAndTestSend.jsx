import { render } from "@react-email/components";
import EmailTemplate from "./Emails/EmailTemplate";
import { useState } from "react";
import SendMail from "./SendMail";
import "./MailViewerAndTestSend.css";
/**
 * @param {null} null - requires nothing
 * @returns {React.JSX.Element} page - give you a visual space to see your email in both a website and test if it handles functionality
 * @ignore Error form console, its the web being unhappy there are 2 bodies and 2 htmls but they are required for the email that is not here
 * @description Sends emails by Resend given all this info
 * @todo - fix SendMail.js so that it works
 */
const MailViewerAndTestSend = () => {
  const [name, setName] = useState("Steve the Bug");
  const [email, setEmail] = useState("example@ucalgary.ca");
  const [subject, setSubject] = useState("Test");

  const emailTemplateToSend = ({ name, email }) => {
    return <EmailTemplate name={name} email={email} />;
  };
  /**
   * @param {HTMLFormElement} e - collects info form fomr on page
   * @returns {email} email - sends email to specified address tests to see if email is dynamic
   * @todo fix SendMail
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setName(formData.get("name"));
    setEmail(formData.get("email"));
    setSubject(formData.get("subject"));
    SendMail(
      email,
      name,
      subject,
      formData.get("raw text"),
      emailTemplateToSend(name, email)
    );
  };

  /**
   * lets you see the raw html of a react page
   */
  const seeRawHtmlInConsole = 0;
  if (seeRawHtmlInConsole) {
    const html = render(emailTemplateToSend(name, email), {
      pretty: true,
    });
    console.log(html);
  }

  return (
    <div>
      <div>
        <h1>Email Preview</h1>
        {emailTemplateToSend(name, email)}
      </div>
      <div id="Form">
        <h1>Test Send an Email</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Steve the Great Bug"
            required
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="example@ucalgary.ca"
            required
          />
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Test Subject"
            required
          />
          <label>
            Raw text of Email, in case someone has hmtl disabled, just copy
            paste from the preview above
          </label>
          <input type="text" name="raw text" required></input>
          <input type="submit" value="Send Email" />
        </form>
      </div>
    </div>
  );
};

export default MailViewerAndTestSend;
