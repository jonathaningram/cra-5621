import loadable from "loadable-components";

import LoadingComponent from "./components/Loader";

export const HomePage = loadable(() => import("./pages/HomePage"), {
  LoadingComponent
});
