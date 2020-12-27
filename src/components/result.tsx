import React, { useEffect } from "react";
import { PromiseObj } from "../pages";

interface ResultProps {
  resultObj: PromiseObj;
}

const Result = ({ resultObj }: ResultProps): React.ReactElement => {
  useEffect(() => console.log(resultObj), []);
  return <div></div>;
};

export default Result;
