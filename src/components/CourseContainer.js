import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";


const API_STUDENTS = "http://localhost:6001/students";

class CourseContainer extends Component {

    //     "id": 272,
    //     "name": "Having a good time",
    //     "instructor": "Rob Boss",
    //     "semester": "Summer 2020"
    //   }
    // "students": [
    //     "id": 5945,
    //     "name": "Mr. Princess Predovic",
    //     "class_year": 11,
    //     "percentage": 93,
    //     "course": "Having a good time",
    //     "attending": true


    constructor() {
        super();
        this.state = {
          students: []
        };
      }

      componentDidMount() {
        fetch(API_STUDENTS)
          .then((res) => res.json())
          .then((obj) => {
            return this.setState({
              students: obj,
            });
          });
      }



  render() {

    //   console.log(this.props.courses);
    //   console.log(this.state.students);

    return (
      <div className="ui grid container">
        <CourseDetails />
        <CourseSelector />
        <StudentsList students={this.state.students}/>
      </div>
    );
  }
}

export default CourseContainer;
