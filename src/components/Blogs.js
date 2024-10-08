import React,{useContext} from 'react';
import style from './Blog.module.css'
import BlogContext from '../store/blog-context';

const Blogs = ({ onEditBlog}) => {
  const blogCtx = useContext(BlogContext);
  console.log(blogCtx)
  return (
    <div className={style["blogs-grid"]}>
      {blogCtx.blogs.map((blog, index) => (
        <div key={index} className={style["blog-card"]} >
          <h2>{blog.title}</h2>
          <img src={blog.imageUrl} alt={blog.title} className={style["blog-image"]} />
          <p>{blog.description}</p>
          <div className={style["blog-buttons"]}>
            <button onClick={() => onEditBlog(index,blog)}>Edit Blog</button>
            <button onClick={() => blogCtx.deleteBlog(index)}>Delete Blog</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
