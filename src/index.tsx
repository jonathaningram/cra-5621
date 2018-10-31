import "core-js/fn/array/includes";
import "core-js/fn/set";
import "whatwg-fetch";
import * as React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const el = document.getElementById("root") as HTMLElement;
if (el) {
  if (el.hasChildNodes()) {
    hydrate(
      <Router>
        <App />
      </Router>,
      el
    );
  } else {
    render(
      <Router>
        <App />
      </Router>,
      el
    );
  }
}
