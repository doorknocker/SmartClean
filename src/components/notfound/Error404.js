import React from "react";
import { Link } from "react-router-dom";

import { BigTitle } from "../../styles/headings";
import { FocusedLayout } from "../../styles/layouts";
import { GoBack } from "../../styles/common";

const Brand = () => {
  return (
    <FocusedLayout>
      <div>
        <BigTitle inverse>
          <span>404</span> Not Found
        </BigTitle>
        <Link to="/">
          <GoBack>Home Page</GoBack>
        </Link>
      </div>
    </FocusedLayout>
  );
};

export default Brand;
