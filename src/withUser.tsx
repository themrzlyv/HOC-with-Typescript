import React, { useCallback, useEffect, useState } from "react";

export interface iPassedProp {
  userId: number;
}

export interface iHOCProp {
  user: any;
}

const withUser = <iHOCProp extends iPassedProp>(
  WrappedComponent: React.ComponentType<iHOCProp>
) => {
  return (props: iHOCProp) => {
    const [user, setUser] = useState<any | undefined>();
    const getUser = useCallback(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}`)
        .then((res) => res.json())
        .then((user) => setUser(user));
    }, [props.userId]);

    useEffect(() => {
      getUser();
    }, [getUser]);

    return <WrappedComponent {...(props as iHOCProp)} user={user} />;
  };
};

export default withUser;
