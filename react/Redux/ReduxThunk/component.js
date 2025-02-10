// using thunk in component

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const myComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return <>content</>;
};


export default myComponent