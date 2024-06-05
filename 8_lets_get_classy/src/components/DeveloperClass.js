import React from "react";

export default class DeveloperClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    // fetch data
    const data = await fetch("https://api.github.com/users/The-EleetCoder");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("state variables updated with data from github!");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} />
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Contact: </p>
      </div>
    );
  }
}
