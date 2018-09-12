import React from 'react'

const EditStudent = () => {

  return (
    <form
      className="ui form center aligned sixteen wide column"
      onSubmit={""}
    >
      <div className="inline fields">
        <div className="four wide field">
          <input
            id="name"
            type="text"
            value={""}
            onChange={"your code here"}
          />
        </div>
        <div className="four wide field">
          <input
            id="class_year"
            type="number"
            value={""}
            onChange={"your code here"}
          />
        </div>
        <div className="four wide field">
          <input
            id="percentage"
            type="number"
            value={""}
            onChange={"your code here"}
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default EditStudent
