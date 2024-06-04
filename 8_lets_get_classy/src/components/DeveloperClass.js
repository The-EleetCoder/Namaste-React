import React from "react";

export default class DeveloperClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div>
        <p>Count: {count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count increase
        </button>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Contact: {contact} </p>
      </div>
    );
  }
}
