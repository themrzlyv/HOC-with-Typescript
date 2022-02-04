import React from "react";
import withUser from "./withUser";

interface iProp {
  userId: number;
  user?: any;
}

const UserDetail: React.FC<iProp> = (prop) => {
  console.log(prop.user);
  return (
    <>
      <p></p>
    </>
  );
};

export default withUser(UserDetail);
