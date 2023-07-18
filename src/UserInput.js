import React, { Component } from "react";

class UserInput extends Component {
  state = {
    name: ""
  };

  updateName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addName(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.name}
          onChange={this.updateName}
          type="text"
          placeholder="Add a new name here..."
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
