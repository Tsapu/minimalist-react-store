import React from 'react';
import { NavLink } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import './CategoryNav.css';

class CategoryNav extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      activeCategory: this.props.categories[0],
      dropActive: false,
    }
  }

  createLinks = () => {
    return this.props.categories.map((category, index) => ( // Note that first index is for all categories
      <li key={index}>
        <NavLink to={(index === 0) ? '/all-products' : `/categories/${category}`} onClick={this.setActive.bind(this, index)}>
          {category}
        </NavLink>
      </li>
    ));
  }

  toggleDrop = () => this.setState(state => ({ dropActive: !state.dropActive }));
  hideDrop = () => this.setState({ dropActive: false })
  setActive = (i) => {
    this.setState({ activeCategory: this.props.categories[i] });
    this.hideDrop();
  }

  render() {
    const {activeCategory, dropActive} = {...this.state}
    return (
      <div className="menu-wrap">
      {dropActive && <div className="site-overlay"></div>}
        <OutsideClickHandler onOutsideClick={this.hideDrop}>
          <div className="category-menu">
            <div className="active-category" onClick={this.toggleDrop}>
              <span>{activeCategory}</span>
              <span className="drop-icon">
                <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg" fill="#1D1F22"><path d="M 0,0 16,0 8,12 z"/></svg>
              </span>
            </div>
            <ul className="category-nav" style={dropActive ? {display: 'flex'} : null}>
              {this.createLinks()}
            </ul>
          </div>
        </OutsideClickHandler>
      </div>
    );
  }
}

export default CategoryNav;