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
            <div className="attributeTotal">
              { this.props.value }
            </div>
            <div className="attributeCalc">
              <div className="calcSpacer calcStnd">
                <div className="calcLabel"></div>
                <div className="calcValue">
                  { this.props.base }
                </div>
              </div>
              <div className="calcSpacer calcThin">
                <div className="calcLabel"></div>
                <div className="calcValue">
                  { this.props.base === "" ? "" : "+" }
                </div>
              </div>
              <div className="calcSpacer calcStnd">
                <div className="calcLabel">
                  { this.props.rankTitle }
                </div>
                <div className="calcValue">
                  { this.props.ranks }
                </div>
              </div>
              <div className="calcSpacer calcThin">
                <div className="calcLabel"></div>
                <div className="calcValue">
                  +
                </div>
              </div>
              <div className="calcSpacer calcStnd">
                <div className="calcLabel">
                  Misc
                </div>
                <div className="calcValue">
                  { this.props.misc }
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}