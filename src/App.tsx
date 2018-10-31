import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Switch, Route } from "react-router-dom";

import * as Routes from "./Routes";

interface Props extends RouteComponentProps<null> {}

interface State {}

class App extends React.Component<Props, State> {
  state: State = {};

  render() {
    return (
      <Switch>
        <Route exact={true} path={"/"} component={() => <Routes.HomePage />} />
      </Switch>
    );
  }
}

export default withRouter<Props>(App);
