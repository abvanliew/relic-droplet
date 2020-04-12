import React from 'react';

export default class Header extends React.Component {
  data = {};
  render() {
    return (
      <React.Fragment>
        <img className="logo" src="images/relic-logo.png" alt="Relic"/>
      </React.Fragment>
    );
  }
}