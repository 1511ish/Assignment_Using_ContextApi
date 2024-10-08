import React, { useState, useEffect, useContext } from "react";
import Modal from "./UI/Modal/Modal";
import BlogContext from "../store/blog-context";
// import StudentContext from "../store/student-context";

const Form = ({ edit, onCloseForm, blogToEdit, blogId }) => {
  // const studentCtx = useContext(StudentContext);
  const blogCtx = useContext(BlogContext);

  const [imageUrl, setImageUrl] = useState(blogToEdit ? blogToEdit.imageUrl : "");
  const [title, setTitle] = useState(blogToEdit ? blogToEdit.title : "");
  const [description, setDescription] = useState(blogToEdit ? blogToEdit.description : "");

  useEffect(() => {
    if (blogToEdit) {
      setImageUrl(blogToEdit.imageUrl);
      setTitle(blogToEdit.title);
      setDescription(blogToEdit.description);
      console.log("if condition truthy");
    }
  }, [blogToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const blogData = {
      imageUrl: imageUrl,
      title: title,
      description: description,
    };

    if (edit) {
      blogCtx.editBlog(blogId, blogData);
    } else {
      blogCtx.addBlog(blogData);
    }

    // Clear form and close modal after submission
    setImageUrl("");
    setTitle("");
    setDescription("");
    onCloseForm();
  };

  return (
    <Modal onClick={onCloseForm}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">ImageUrl:</label>
          <input
            type="text"
            id="image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Blog Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">{edit ? "Edit blog" : "Add blog"}</button>
        </div>
      </form>
    </Modal>
  );
};

export default Form;
