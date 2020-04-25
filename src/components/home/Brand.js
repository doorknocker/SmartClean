import React from "react";

import { BigTitle } from "../../styles/headings";
import { FocusedLayout } from "../../styles/layouts";

import logo from "../../images/logo-inverse.png";

const Brand = () => {
  return (
    <FocusedLayout>
      <div>
        <img src={logo} alt="Credit Voyager" />
        <BigTitle inverse>
          Enable data driven cleaning <span>operations</span>.
        </BigTitle>
      </div>
    </FocusedLayout>
  );
};

export default Brand;
