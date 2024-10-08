import React, { useContext } from 'react';
import Student from './Student';
import StudentContext from '../store/student-context';

const Students = (props) => {
  const studentCtx = useContext(StudentContext);

  return (
    <>
      <h1>All Students</h1>
      {studentCtx.students.length}
      <ul>
        {studentCtx.students.map((student, index) => (
          <li key={index}>
            <Student
              id={index}
              name={student.name}
              phone={student.phone}
              email={student.email}
            />
            <button onClick={() => props.onEditStudent(index, student)}>
              Edit
            </button>
            <button onClick={() => studentCtx.deleteStudent(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Students;
