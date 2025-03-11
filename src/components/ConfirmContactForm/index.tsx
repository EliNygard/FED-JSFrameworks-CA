import React from "react";
import { StyledContactFormMessage } from "./index.styles";
import Button from "../Button";

interface MessageProps {
  name: string;
  onReset: () => void;
}

const ConfirmContactFormMessage: React.FC<MessageProps> = ({
  name,
  onReset,
}) => {
  return (
    <StyledContactFormMessage>
      <p>Thank you for your message, {name}!</p>
      <p>We will get back to you as soon as we can.</p>

      <Button onClick={onReset}>Back</Button>
    </StyledContactFormMessage>
  );
};

export default ConfirmContactFormMessage;
