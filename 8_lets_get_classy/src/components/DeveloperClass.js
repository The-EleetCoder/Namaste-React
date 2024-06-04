import React from "react";

export default class DeveloperClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { name, location, contact } = this.props;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Contact: {contact} </p>
      </div>
    );
  }
}
