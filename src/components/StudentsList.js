import React from "react";
import Student from "./Student";

// displayStudents = (props.students) => {
//     const students_obj = ({this.props.students})
//     return students_obj;
// }
// console.log(displayStudents(props.students))

const StudentsList = (CourseContainer) => (
    // console.log(displayStudents())
    // console.log(props.students);
    // console.log(CourseContainer);

    // how to receive props from a class to an arrow function?
    
  <table className="ui celled striped padded table unstackable">
    <tbody>
      <tr>
        <th>
          <h3 className="ui center aligned header">Student Name</h3>
          {/* {props.students} */}
        </th>
        <th>
          <h3 className="ui center aligned header">Class Year</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Course Percentage</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Attending</h3>
        </th>
      </tr>

      {/* a row per student should go here */}
    </tbody>
  </table>
);

export default StudentsList;
