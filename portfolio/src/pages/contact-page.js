import React from "react";
import Banner from "../components/Banner/banner";
import Spacer from "../components/Common/spacer";
import { Contact } from "../components/Contact/contact";

const ContactPage = () => {
  return (
    <>
      <Spacer height="150" />
      <Banner />
      <Spacer height="150" />
      <Contact />
      <Spacer height="150" />

    </>
  );
};

export default ContactPage;
