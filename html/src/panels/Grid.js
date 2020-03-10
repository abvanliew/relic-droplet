import React from 'react';
import Header from "./Header";
// import Nav from "./Nav";
// import Main from "./Main";
import Sheet from "../character/Sheet";
import "./Grid.css"

export default class Grid extends React.Component {
  data = {};
  render() {
    return (
      <React.Fragment>
        <div className="grid">
          <div className="header">
            <Header/>
          </div>
          <div className="main">
            <Sheet/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}