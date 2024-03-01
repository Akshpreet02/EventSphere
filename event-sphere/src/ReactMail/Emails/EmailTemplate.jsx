import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Img,
  Text,
  Link,
  Preview,
} from "@react-email/components";
import "./EmailTemplate.css";
/**
 * @param {string} name - Name of the Recipient
 * @param {string} email - Email of Recipient
 * @returns {Promise<number>} c - what the program returns with type
 * @description A template example of what the format for an email is
 * you must use a .jsx file
 */
const EmailTemplate = ({
  name = "Steve the Great Bug",
  email = "example@ucalgary.ca",
}) => {
  return (
    <Html>
      <Head lang="en">
        <Preview>
          This gives some plain text to what someone would preview in a
          notification
        </Preview>
      </Head>
      <Body>
        <Heading>Look a Nice Title</Heading>
        <Img
          alt="Steve the Bug"
          src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1682555015/zn5rcoz4nybndmla9kbp.webp"
        />
        <Text>You have to use these instead of the normal "p" tags</Text>
        <Link href="https://google.com">google.com</Link>
        <Container style={containerStyle}>
          <Text>Hello from a table</Text>
          <Text>Hello {name} this was send from the react mail component</Text>
          <Text>This was send to {email}</Text>
          <Text>Have a wonderful day</Text>
        </Container>
      </Body>
    </Html>
  );
};

// container = table
// you MUST USE this when dealing with Containers, you cannot change the max-width any other way
const containerStyle = {
  maxWidth: "100%",
};

export default EmailTemplate;
