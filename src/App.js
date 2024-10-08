
import React, { useState, useContext } from 'react';
import Blogs from './components/Blogs';
import Form from './components/Form';
import BlogContext from './store/blog-context';

function App() {
  const [formIsShown, setFormIsShown] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [blogToEdit, setBlogToEdit] = useState(null);
  const [blogIdToEdit, setBlogIdToEdit] = useState(null);

  const hideFormHandler = () => {
    setFormIsShown(false);
    setIsEditMode(false);
    setBlogToEdit(null);
    setBlogIdToEdit(null);
  };

  const addBlogHandler = () => {
    setFormIsShown(true);
    setIsEditMode(false);
    setBlogToEdit(null);
    setBlogIdToEdit(null);
  };

  const editBlogHandler = (id, blog) => {
    setFormIsShown(true);
    setIsEditMode(true);
    setBlogToEdit(blog);
    setBlogIdToEdit(id);
  };

  return (
    <>
      {formIsShown && (
        <Form
          edit={isEditMode}
          blogToEdit={blogToEdit}
          blogId={blogIdToEdit}
          onCloseForm={hideFormHandler}
        />
      )}
      <h1>Blog Website</h1>
      <button onClick={addBlogHandler}>Add New Blog</button>
      <hr />
      <Blogs onEditBlog={editBlogHandler}/>
    </>
  );
}

export default App;

