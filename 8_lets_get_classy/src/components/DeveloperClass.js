import React from "react";

export default class DeveloperClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
    <div>
        <p>Name: {this.props.name}</p>
        <p>Location: {}</p>
        <p>Contact: {} </p>
    </div>);
  }
}
