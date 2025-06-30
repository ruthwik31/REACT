import User from "./User.js";
import UserClass from "./UserClass.js";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props); //or else it throws error

    //console.log("parent is loaded"); //parents props
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <User/>
        {/*<UserClass name={"Ruthwik Class"} />*/}
      </div>
    );
  }
}
export default About;
