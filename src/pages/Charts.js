import React from "react";

import DashboardLayout from "../components/common/DashboardLayout";
import AuthWrapper from "../components/common/AuthWrapper";
import Main from "../components/charts";

const Charts = () => {
  return (
    <AuthWrapper>
      <DashboardLayout>
        <Main />
      </DashboardLayout>
    </AuthWrapper>
  );
};

export default Charts;
