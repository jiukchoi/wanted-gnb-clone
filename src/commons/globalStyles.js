import { Global, css } from "@emotion/react";

const reset = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
`;

const GlobalStyles = () => {
  return <Global styles={reset} />;
};

export default GlobalStyles;
