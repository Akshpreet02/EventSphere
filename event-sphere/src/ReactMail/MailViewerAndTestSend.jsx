import { render } from "@react-email/components";
import EventConfirmEmail from "./Emails/EventConfirmEmail";
import { useState } from "react";
import SendMail from "./SendMail";

const MailViewerAndTestSend = () => {
  const [name, setName] = useState("Steve the Bug");
  const [email, setEmail] = useState("example@ucalgary.ca");
  const [subject, setSubject] = useState("Test");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setName(formData.get("name"));
    setEmail(formData.get("email"));
    setSubject(formData.get("subject"));
    console.log({ name, email, subject });
    SendMail(
      email,
      name,
      subject,
      formData.get("raw text"),
      <EventConfirmEmail name={name} email={email} />
    );
  };

  const seeRawHtmlInConsole = 0;
  if (seeRawHtmlInConsole) {
    const html = render(<EventConfirmEmail />, {
      pretty: true,
    });
    console.log(html);
  }

  return (
    <div>
      <div>
        <h1>Email Preview</h1>
        <EventConfirmEmail name={name} email={email} />
      </div>
      <div>
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
            Raw text of Email, in case someone has hmtl disabled, kist copy
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
