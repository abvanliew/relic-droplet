import React from 'react';
import Header from "./header";
import Auth from "../auth/auth";
import "./grid.css";

export default class Grid extends React.Component {
  render() {

    return (
      <React.Fragment>
        <div className="grid">
          <div className="header">
            <Header/>
          </div>
          <div className="main">
            <Auth/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}