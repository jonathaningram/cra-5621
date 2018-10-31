import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import * as Routes from "./Routes";

interface Props extends RouteComponentProps<null> {}

interface State {}

class App extends React.Component<Props, State> {
  state: State = {};

  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Title</title>
        </Helmet>

        <>
          <>
            <Switch>
              <Route
                exact={true}
                path={"/"}
                component={() => <Routes.HomePage />}
              />
            </Switch>
          </>
        </>
      </>
    );
  }
}

export default withRouter<Props>(App);
