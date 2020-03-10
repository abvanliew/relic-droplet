import React from 'react';
import "./Sheet.css"

export default class Grid extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="attribute">
          <div className="attributeTitle">
            { this.props.title }
          </div>
          <div className="attributeValue">
            { this.props.value }
          </div>
        </div>
      </React.Fragment>
    );
  }
}