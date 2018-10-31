import * as React from "react";
import Helmet from "react-helmet";

const HomePage: React.SFC = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h1>Home</h1>
    <p>The home page.</p>
  </>
);

export default HomePage;
