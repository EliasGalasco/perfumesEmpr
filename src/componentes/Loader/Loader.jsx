import ContentLoader from "react-content-loader";
import React from "react";
import "../Loader/loader.css";

const Loader = (props) => (
  <ContentLoader
    className="loader"
    speed={1}
    viewBox="0 0 900 507"
    backgroundColor="#733c9f"
    foregroundColor="#d06ce4"
    {...props}
  >
    <rect x="30" y="20" rx="0" ry="0" width="130" height="23" />
    <rect x="30" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="30" y="189" rx="0" ry="0" width="200" height="15" />
    <rect x="30" y="211" rx="0" ry="0" width="140" height="15" />
    <rect x="243" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="243" y="189" rx="0" ry="0" width="200" height="15" />
    <rect x="243" y="211" rx="0" ry="0" width="140" height="15" />
    <rect x="455" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="455" y="189" rx="0" ry="0" width="200" height="15" />
    <rect x="455" y="211" rx="0" ry="0" width="140" height="15" />
    <rect x="667" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="667" y="188" rx="0" ry="0" width="200" height="15" />
    <rect x="667" y="209" rx="0" ry="0" width="140" height="15" />
    <rect x="30" y="280" rx="0" ry="0" width="130" height="23" />
    <rect x="30" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="30" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="30" y="474" rx="0" ry="0" width="140" height="15" />
    <rect x="243" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="455" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="667" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="243" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="455" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="667" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="243" y="474" rx="0" ry="0" width="140" height="15" />
    <rect x="455" y="474" rx="0" ry="0" width="140" height="15" />
    <rect x="667" y="474" rx="0" ry="0" width="140" height="15" />
  </ContentLoader>
);

export const HeadBodyGrid = props => (
  <ContentLoader
  className="loaderDetail"
  speed={1}
  viewBox="0 0 900 507"
  backgroundColor="#000000"
  foregroundColor="#7e7c7e"
  {...props}
  >
    <rect x="270" y="07" rx="10" ry="10" width="388" height="217" />
    <rect x="320" y="240" rx="4" ry="4" width="271" height="9" />
    <rect x="320" y="250" rx="4" ry="4" width="271" height="9" />
    <rect x="470" y="260" rx="3" ry="3" width="119" height="6" />
    <rect x="320" y="260" rx="3" ry="3" width="119" height="6" />
    <rect x="410" y="280" rx="3" ry="3" width="80" height="13" />
  </ContentLoader>
);
export default Loader;
