import React, { PureComponent } from 'react'
import './AttributeOptions.css'

export default class AttributeOptions extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  createOptions = (attr) => {
    return attr.items.map( (option, index) => {
      let activeClass = (index === this.state.activeIndex) ? 'active' : 'inactive';
      let swatch = (attr.type === "swatch");
      return <li
        key={index}
        data-value={option.value}
        onClick={this.updateAttributes.bind(this, index)}
        className={`attr ${swatch ? 'color' : 'default'} ${activeClass}`}
        style={swatch ? {backgroundColor: option.value} : null}>
          {!swatch ? option.displayValue : null}
        </li>
    })
  }

  updateAttributes = (i, e) => {
    this.props.updateSelection(e);
    this.setState({
      activeIndex: i
    });
  }

  render() {
    const {attr} = {...this.props}
    return (
      <ul className="attr-list" data-type={attr.id}>
        {this.createOptions(attr)}
      </ul>
    )
  }
}
