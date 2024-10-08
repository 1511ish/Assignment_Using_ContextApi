import React, { useState } from 'react';
import StudentContext from './student-context';

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  const editStudent = (id, updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student, index) =>
        index === id ? updatedStudent : student
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents((prevStudents) => prevStudents.filter((_, index) => index !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, editStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
