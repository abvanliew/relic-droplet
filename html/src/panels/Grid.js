import React from 'react';
import Header from "./Header";
// import Nav from "./Nav";
// import Main from "./Main";
import Sheet from "../character/Sheet";
import "./Grid.css"

export default class Grid extends React.Component {
  render() {
    let attributes = {
      "abilityBase": "",
      "defenseBase": "10",
      "resistanceBase": "3",
      "physique": {
        "total": "+3",
        "ranks": "3",
        "misc": "0",
      },
      "warfare": {
        "total": "+3",
        "ranks": "3",
        "misc": "",
      },
      "willpower": {
        "total": "+3",
        "ranks": "3",
        "misc": "0",
      },
      "manipulation": {
        "total": "+3",
        "ranks": "3",
        "misc": "0",
      },
      "dodge": {
        "total": "13",
        "ranks": "3",
        "misc": "0",
      },
      "tenacity": {
        "total": "13",
        "ranks": "3",
        "misc": "0",
      },
      "fortitude": {
        "total": "13",
        "ranks": "3",
        "misc": "0",
      },
      "resolve": {
        "total": "13",
        "ranks": "3",
        "misc": "0",
      },
      "insight": {
        "total": "13",
        "ranks": "3",
        "misc": "0",
      },
      "physical": {
        "total": "3",
        "ranks": "0",
        "misc": "0",
      },
      "energy": {
        "total": "3",
        "ranks": "0",
        "misc": "0",
      },
      "essence": {
        "total": "3",
        "ranks": "0",
        "misc": "0",
      },
    };

    return (
      <React.Fragment>
        <div className="grid">
          <div className="header">
            <Header/>
          </div>
          <div className="main">
            <Sheet attributes={ attributes }/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}