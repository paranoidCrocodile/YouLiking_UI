import React, { useState, useEffect } from "react";
import { Header, FrontPanel, Footer, Main } from "../components/index";
import Global from "../style/global";
import Reset from "../style/reset";
import mediaQuery from "../utils/media";

interface PromiseObj {
  status: string;
  img: string;
  title: string;
  format: Record<string, string[]>;
  k_id: string;
}

interface StateObj {
  response: PromiseObj | null;
  isLoading: boolean;
  isSearched: boolean;
  isError: boolean;
  errorMsg: string;
}

const Index = (): React.ReactElement => {
  const [state, setState] = useState<StateObj>({
    response: null,
    isLoading: false,
    isSearched: false,
    isError: false,
    errorMsg: "",
  });
  useEffect(() => {
    console.log(mediaQuery("", "tiny"));
    console.log(mediaQuery("tiny", "mobile"));
    console.log(mediaQuery("mobile", ""));
  });
  return (
    <React.Fragment>
      <Reset />
      <Global />
      <Header siteTitle="YouLiking" />
      <FrontPanel {...{ setState, state }} />
      <Main {...{ setState, state }} />
      <Footer />
    </React.Fragment>
  );
};

export default Index;
export { StateObj, PromiseObj };
