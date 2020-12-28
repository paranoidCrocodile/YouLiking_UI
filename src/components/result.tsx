import React, { useEffect } from "react";
import { PromiseObj } from "../pages";

interface ResultProps {
  response: PromiseObj;
}

const Result = ({ response }: ResultProps): React.ReactElement => {
  useEffect(() => console.log(response), []);
  return <div></div>;
};

export default Result;
