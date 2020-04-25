import React from "react";

import Brand from "../components/home/Brand";
import SignUp from "../components/home/SignUp";

import { Layout } from "../styles/layouts";

const Home = () => {
  return (
    <Layout>
      <Brand />
      <SignUp />
    </Layout>
  );
};

export default Home;
