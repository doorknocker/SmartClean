import React from "react";

import Error404 from "../components/notfound/Error404";

import { Layout } from "../styles/layouts";

const NotFound = () => {
  return (
    <Layout>
      <Error404 />
      <div />
    </Layout>
  );
};

export default NotFound;
