import React from "react";

import DashboardLayout from "../components/common/DashboardLayout";
import AuthWrapper from "../components/common/AuthWrapper";
import Main from "../components/tabular";

const WaitList = () => {
  return (
    <AuthWrapper>
      <DashboardLayout>
        <Main />
      </DashboardLayout>
    </AuthWrapper>
  );
};

export default WaitList;
