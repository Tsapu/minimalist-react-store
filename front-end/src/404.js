import React, { PureComponent } from 'react';
import './404.css';

export default class Error404 extends PureComponent {
  static defaultProps = {
    requestType: '',
    failedQuery: '',
    pathname: '',
  }
  render() {
    return (
      <div className="e404">
        <div className="title">{`Unable to fulfill the ${this.props.requestType} request:`}</div>
        <div className="path">{this.props.requestType ? this.props.failedQuery : this.props.location.pathname}</div>
      </div>
    )
  }
}
