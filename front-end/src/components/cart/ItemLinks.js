import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';

export class ItemName extends PureComponent {
  render() {
    const {className, onClick, url, name} = this.props;
    return (
      <Link to={url} onClick={onClick} className={className} title="View Product Page">{name}</Link>
    )
  }
}

export class ItemImage extends PureComponent {
  render() {
    const {className, onClick, url, imgSrc} = this.props;
    return (
      <Link to={url} onClick={onClick} className={className} title="View Product Page" >
        <img src={imgSrc} alt=""></img>
      </Link>
    )
  }
}
