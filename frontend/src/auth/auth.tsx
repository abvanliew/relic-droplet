import React from "react";
import DefaultAuth from "./default";
import CreateAccount from "./create";
import LoginAccount from "./login";
import ForgottenCredentials from "./forgot";
import ResetAuth from "./reset";

export enum AuthPage {
  Default = "Default",
  Create = "Create", 
  Login = "Login", 
  Forgot = "Forgot",
  Reset = "Reset",
}

interface AuthProps {}

interface AuthState {
  currentPage: AuthPage
}

export default class Auth extends React.Component<AuthProps, AuthState> {
  constructor( props: AuthProps ) {
    super( props );
    this.state = { currentPage: AuthPage.Default };
  }

  public setPage( newPage: AuthPage ) {
    this.setState( { currentPage: newPage } );
  }

  render() {
    let currentComponent = <DefaultAuth parent={this} />;

    switch( this.state.currentPage ) {
      case AuthPage.Create:
        currentComponent = <CreateAccount />;
        break;
      case AuthPage.Login:
        currentComponent = <LoginAccount />;
        break;
      case AuthPage.Forgot:
        currentComponent = <ForgottenCredentials />;
        break;
      case AuthPage.Reset:
        currentComponent = <ResetAuth />;
        break;
    }

    return (
      <React.Fragment>
        {currentComponent}
        <br></br>
        <button onClick={() => this.setPage( AuthPage.Default )}>Default</button>
      </React.Fragment>
    );
  }
}