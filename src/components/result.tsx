import React, { useEffect } from "react";
import { ResultObj } from "../pages";

interface ResultProps {
  resultObj: ResultObj;
}

const Result = ({ resultObj }: ResultProps): React.ReactElement => {
  useEffect(() => console.log(resultObj), []);
  return <div></div>;
};

export default Result;
