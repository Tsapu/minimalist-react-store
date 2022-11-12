import React, { PureComponent } from 'react'
import './CartAttributes.css'

export default class CartAttributes extends PureComponent {

  getSizeStyle = () => {
    const size = this.props.size;
    const style =
      (size === "m") ? 'small' :
      (size === "l") ? 'large' : '';
    return style;
  }

  createAttributes = (attributes) => {
    const sizeStyle = this.getSizeStyle();

    return attributes.map( (attr, index) => {
      const selection = attr.items[0]; // expect to receive filtered results to only a single item
      const swatch = (attr.type === "swatch");
      const boolAttr = ( ["Yes", "No"].includes(selection.value) );
      const className = [
        "cart attr active",
        sizeStyle,
        swatch ? 'color' : 'default',
        boolAttr ? 'attr-bool' : '',
      ];
      return <li 
        key={index}
        className={className.join(" ").trim()}
        style={swatch ? {backgroundColor: selection.value} : null}>
          {boolAttr ? `${attr.name}: ${selection.value}`
          : !swatch ? selection.displayValue : null}
        </li>
    });
  }

  render() {
    const {attributes} = {...this.props};
      return (
      <ul className="attr-list">
        {this.createAttributes(attributes)}
      </ul>
    )
  }
}
