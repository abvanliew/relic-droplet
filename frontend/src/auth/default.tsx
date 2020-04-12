import React from "react";
import Auth from "./auth";
import { AuthPage } from "./auth";

interface DefaultAuthProps {
  parent: Auth
}

interface DefaultAuthState {}

export default class DefaultAuth extends React.Component<DefaultAuthProps, DefaultAuthState> {
  readonly parent: Auth;

  constructor( props: DefaultAuthProps ) {
    super( props );
    this.parent = props.parent;
  }

  render() {
    return (
      <React.Fragment>
        Default
        <br></br>
        <button onClick={() => this.parent.setPage( AuthPage.Login )}>Login</button>
        <button onClick={() => this.parent.setPage( AuthPage.Create )}>Create New Account</button>
      </React.Fragment>
    );
  }
}