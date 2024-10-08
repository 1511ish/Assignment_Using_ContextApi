
import React, { useState, useContext } from 'react';
import Students from './components/Students';
import Form from './components/Form';
import StudentContext from './store/student-context';

function App() {
  const studentCtx = useContext(StudentContext); // Now this will work correctly as it's within the provider
  const [formIsShown, setFormIsShown] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState(null);
  const [studentIdToEdit, setStudentIdToEdit] = useState(null);

  const hideFormHandler = () => {
    setFormIsShown(false);
    setIsEditMode(false);
    setStudentToEdit(null);
    setStudentIdToEdit(null);
  };

  const addStudentHandler = () => {
    setFormIsShown(true);
    setIsEditMode(false);
    setStudentToEdit(null);
    setStudentIdToEdit(null);
  };

  const editStudentHandler = (id, student) => {
    setFormIsShown(true);
    setIsEditMode(true);
    setStudentToEdit(student);
    setStudentIdToEdit(id);
  };

  return (
    <>
      {formIsShown && (
        <Form
          edit={isEditMode}
          studentToEdit={studentToEdit}
          studentId={studentIdToEdit}
          onCloseForm={hideFormHandler}
        />
      )}
      <h1>Student Manager</h1>
      <p>Total Students: {studentCtx.students.length}</p>
      <button onClick={addStudentHandler}>Add Student</button>
      <Students onEditStudent={editStudentHandler} />
    </>
  );
}

export default App;

