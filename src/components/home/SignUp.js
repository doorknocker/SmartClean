import React from "react";

import { MainLayout } from "../../styles/layouts";

import { MediumTitle } from "../../styles/headings";
import { Paragraph } from "../../styles/paragraphs";

import Form from "./Form";

const SignUp = () => {
  return (
    <MainLayout>
      <MediumTitle>Sign In.</MediumTitle>
      <Paragraph>
        Several aspects like Air Quality, Dispenser Levels, Wetness Levels,
        Usage Trends and Consumption Levels can be monitored on a real-time
        basis by combining machine learning and AI technology. Enter your
        credentials to login into the portal.
      </Paragraph>
      <Form />
    </MainLayout>
  );
};

export default SignUp;
