import React from 'react';

export default class Header extends React.Component {
  data = {};
  render() {
    var jsonObj = new XMLHttpRequest();
    jsonObj.overrideMimeType("application/json");
    jsonObj.open('GET', "js/pool.json", true);
    jsonObj.onreadystatechange = function () {
      if (jsonObj.readyState === 4 && jsonObj.status === "200") {
        console.log(jsonObj.responseText);
      }
    };
    jsonObj.send(null);  

    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}