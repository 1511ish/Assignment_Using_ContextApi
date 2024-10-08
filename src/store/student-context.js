import React from 'react';

const StudentContext = React.createContext({
    students:[],
    addStudent: (student) => {},
    editStudent: (id) => {},
    deleteStudent: (id) => {}
});

export default StudentContext;