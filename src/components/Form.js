import React, { useState, useEffect, useContext } from "react";
import Modal from "./UI/Modal/Modal";
import StudentContext from "../store/student-context";

const Form = ({ edit, onCloseForm, studentToEdit, studentId }) => {
  const studentCtx = useContext(StudentContext);

  const [name, setName] = useState(studentToEdit ? studentToEdit.name : "");
  const [phoneNo, setPhoneNo] = useState(studentToEdit ? studentToEdit.phone : "");
  const [emailId, setEmailId] = useState(studentToEdit ? studentToEdit.email : "");

  useEffect(() => {
    if (studentToEdit) {
      setName(studentToEdit.name);
      setPhoneNo(studentToEdit.phone);
      setEmailId(studentToEdit.email);
    }
  }, [studentToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const studentData = {
      name: name,
      phone: phoneNo,
      email: emailId,
    };

    if (edit) {
      studentCtx.editStudent(studentId, studentData);
    } else {
      studentCtx.addStudent(studentData);
    }

    // Clear form and close modal after submission
    setName("");
    setPhoneNo("");
    setEmailId("");
    onCloseForm();
  };

  return (
    <Modal onClick={onCloseForm}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNo">PhoneNo:</label>
          <input
            type="number"
            id="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="emailId">EmailId:</label>
          <input
            type="email"
            id="emailId"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">{edit ? "Edit Student" : "Add Student"}</button>
        </div>
      </form>
    </Modal>
  );
};

export default Form;
