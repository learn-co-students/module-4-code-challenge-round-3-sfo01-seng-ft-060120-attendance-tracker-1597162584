import React, { Component } from "react";

import Title from "./Title";
import CourseContainer from "./CourseContainer";


const API_COURSES = "http://localhost:6001/courses";

class App extends Component {
    state = {
        courses: []
    }

    componentDidMount() {
        fetch(API_COURSES)
          .then((res) => res.json())
          .then((obj) => {
            return this.setState({
              courses: obj,
            });
          });
      }

render() {

  return (<div className="ui raised segment">
    <Title />
    <CourseContainer courses={this.state.courses}/>
  </div>)
    }
}

export default App;


///   git checkout -b your-branch-name

