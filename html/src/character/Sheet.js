import React from 'react';
import "./Sheet.css"
import Attribute from "./Attribute";

export default class Grid extends React.Component {
  data = {};
  render() {
    let attributes = this.props.attributes;

    return (
      <React.Fragment>
        <div className="charSheet">

          <div className="attributeGroup">

            <div className="attributeBlock ability">
              <div className="sideways">
                ABILITIES
              </div>
              <div className="attribList">
                <Attribute
                  title="PHYSIQUE" rankTitle="Ranks"
                  base={ attributes.abilityBase }
                  value={ attributes.physique.total }
                  ranks={ attributes.physique.ranks }
                  misc={ attributes.physique.misc }
                />
                <Attribute 
                  title="WARFARE" rankTitle="Ranks"
                  base={ attributes.abilityBase }
                  value={ attributes.warfare.total }
                  ranks={ attributes.warfare.ranks }
                  misc={ attributes.warfare.misc }
                />
                <Attribute 
                  title="WILLPOWER" rankTitle="Ranks"
                  base={ attributes.abilityBase }
                  value={ attributes.willpower.total }
                  ranks={ attributes.willpower.ranks }
                  misc={ attributes.willpower.misc }
                />
                <Attribute 
                  title="MANIPULATION" rankTitle="Ranks"
                  base={ attributes.abilityBase }
                  value={ attributes.manipulation.total }
                  ranks={ attributes.manipulation.ranks }
                  misc={ attributes.manipulation.misc }
                />
              </div>
            </div>

            <div className="attributeBlock defense">
              <div className="sideways">
                DEFENSES
              </div>
              <div className="attribList">
                <Attribute 
                  title="DODGE" rankTitle="Ranks" 
                  base={ attributes.defenseBase }
                  value={ attributes.dodge.total }
                  ranks={ attributes.dodge.ranks }
                  misc={ attributes.dodge.misc }
                />
                <Attribute 
                  title="TENACITY" rankTitle="Ranks" 
                  base={ attributes.defenseBase }
                  value={ attributes.tenacity.total }
                  ranks={ attributes.tenacity.ranks }
                  misc={ attributes.tenacity.misc }
                />
                <Attribute 
                  title="FORTITUDE" rankTitle="Ranks" 
                  base={ attributes.defenseBase }
                  value={ attributes.fortitude.total }
                  ranks={ attributes.fortitude.ranks }
                  misc={ attributes.fortitude.misc }
                />
                <Attribute 
                  title="RESOLVE" rankTitle="Ranks" 
                  base={ attributes.defenseBase }
                  value={ attributes.resolve.total }
                  ranks={ attributes.resolve.ranks }
                  misc={ attributes.resolve.misc }
                />
                <Attribute 
                  title="INSIGHT" rankTitle="Ranks" 
                  base={ attributes.defenseBase }
                  value={ attributes.insight.total }
                  ranks={ attributes.insight.ranks }
                  misc={ attributes.insight.misc }
                />
              </div>
            </div>

            <div className="attributeBlock resistance">
              <div className="sideways">
                RESISTANCES
              </div>
              <div className="attribList">
                <Attribute 
                  title="PHYSICAL" rankTitle="Armor" 
                  base={ attributes.resistanceBase }
                  value={ attributes.physical.total }
                  ranks={ attributes.physical.ranks }
                  misc={ attributes.physical.misc }
                />
                <Attribute 
                  title="ENERGY" rankTitle="Armor" 
                  base={ attributes.resistanceBase }
                  value={ attributes.energy.total }
                  ranks={ attributes.energy.ranks }
                  misc={ attributes.energy.misc }
                />
                <Attribute 
                  title="ESSENCE" rankTitle="Armor" 
                  base={ attributes.resistanceBase }
                  value={ attributes.essence.total }
                  ranks={ attributes.essence.ranks }
                  misc={ attributes.essence.misc }
                />
              </div>
            </div>

          </div>
          <div className="">

          </div>

        </div>
      </React.Fragment>
    );
  }
}