import React, { Component } from 'react';

export default class ProfileStatus extends Component {
  state = {
    editMode: false
  };

  activateEditMode() {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    });
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input type="text" onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}
