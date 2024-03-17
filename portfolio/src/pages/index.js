import React from "react";
import { AboutMe } from "../components/About me/about-me";
import Banner from "../components/Banner/banner";
import PageHeader from "../components/Common/page-header";
import Spacer from "../components/Common/spacer";
import { Contact } from "../components/Contact/contact";
import { Header } from "../components/HomePage/header";
import { HomePage } from "../components/HomePage/home-page";
import { Projects } from "../components/Projects/projects";
import { Skills } from "../components/Skills/skills";

const Pages = () => {
  return (
    <>
      <HomePage />
      <Spacer />
      <PageHeader title="About Me" />
      <AboutMe />
      <Spacer />
      <PageHeader title="Skills" />
      <Skills />
      <Spacer />
      <PageHeader title="Experience" />
      {/* experince */}
      <Spacer />
      <PageHeader title="Projects" />
      <Projects />
      <Spacer/>
      <Banner/>
      <Spacer/>
      <PageHeader title="Contact Me" />
      <Contact />
      <Spacer/>

    </>
  );
};

export default Pages;
