import React, { Component } from 'react';

class BasicInfo extends Component {
    render() {
        return (
            <div>
              <p>{this.props.p.name}</p>
              <p>{this.props.p.number}</p>
              <p>{this.props.p.dateOfBirth}</p>
            </div>
        );
    }
}

export default BasicInfo;