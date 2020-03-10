import React from 'react';
import "./Sheet.css"
import Attribute from "./Attribute";

export default class Grid extends React.Component {
  data = {};
  render() {
    return (
      <React.Fragment>
        <div className="charSheet">

          <div className="attributeGroup">
            <div className="attributeBlock ability">
              <div className="sideways">
                ABILITIES
              </div>
              <div className="attribList">
                <Attribute title="PHYSIQUE"
                  value="+3" 
                  base="3" 
                  ranks="" 
                  misc=""
                  rankTitle="Ranks" 
                />
                <Attribute title="WARFARE"
                  value="+3" 
                  base="3" 
                  ranks="" 
                  misc=""
                  rankTitle="Ranks" 
                />
                <Attribute 
                  title="WILLPOWER"
                  value="+3" 
                  base="3" 
                  ranks="" 
                  misc=""
                  rankTitle="Ranks" 
                />
                <Attribute 
                  title="MANIPULATOR" 
                  value="+3" 
                  base="3" 
                  ranks="" 
                  misc=""
                  rankTitle="Ranks" 
                />
              </div>
            </div>
            <div className="attributeBlock defense">
              <div className="sideways">
                DEFENSES
              </div>
              <div className="attribList">
                <Attribute 
                  title="DODGE"
                  value="13" 
                  base="10" 
                  ranks="3" 
                  misc=""
                  rankTitle="Ranks" 
                />
                <Attribute 
                  title="TENACITY"
                  value="13" 
                  base="10" 
                  ranks="3" 
                  misc=""
                  rankTitle="Ranks" 
                />
                <Attribute 
                  title="FORTITUDE"
                  value="13" 
                  base="10" 
                  ranks="3" 
                  misc=""
                  rankTitle="Ranks" 
                />
                <Attribute 
                  title="RESOLVE"
                  value="13" 
                  base="10" 
                  ranks="3" 
                  misc=""
                  rankTitle="Ranks" 
                />
                <Attribute 
                  title="INSIGHT"
                  value="13" 
                  base="10" 
                  ranks="3" 
                  misc=""
                  rankTitle="Ranks" 
                />
              </div>
            </div>
            <div className="attributeBlock resistance">
              <div className="sideways">
                RESISTANCES
              </div>
              <div className="attribList">
                <Attribute 
                  title="PHYSICAL"
                  value="3" 
                  base="3" 
                  ranks="" 
                  misc=""
                  rankTitle="Armor" 
                />
                <Attribute 
                  title="ENERGY"
                  value="3" 
                  base="3" 
                  ranks="" 
                  misc=""
                  rankTitle="Armor" 
                />
                <Attribute 
                  title="ESSENCE"
                  value="3" 
                  base="3" 
                  ranks="" 
                  misc=""
                  rankTitle="Armor" 
                />
              </div>
            </div>
          </div>


        </div>
      </React.Fragment>
    );
  }
}