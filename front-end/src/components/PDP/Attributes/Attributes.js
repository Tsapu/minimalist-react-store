import React, { PureComponent } from 'react'
import AttributeOptions from './AttributeOptions';
import './Attributes.css'

export class Attributes extends PureComponent {

  getAttributes() {
    const {attributes, updateSelection} = {...this.props}
    return attributes.length > 0
      ? attributes.map( attr => (
        <div key={attr.id}>
          <h3 className="attr-type">{attr.name}:</h3>
          <AttributeOptions attr={attr} updateSelection={updateSelection}/>
        </div>
      )) : null;
  }

  render() {
    return (
      <div className="attr-hold">
        {this.getAttributes()}
      </div>
    )
  }
}

export default Attributes

