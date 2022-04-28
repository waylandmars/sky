import React from "react";

import Navigation from "./nav";

const Dashboard = (props) => {
  console.log(props.page);
  return (
    <div className="main">
      <Navigation></Navigation>
      <div className="content">{props.page}</div>
    </div>
  );
};

export default Dashboard;
