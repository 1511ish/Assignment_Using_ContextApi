import React, { Children, useState } from "react";
import BlogContext from "./blog-context";

const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    const addBlog = (blog) => {
        setBlogs((blogs) => [...blogs, blog]);
    }

    const editBlog = (id, updatedBlog) => {
        setBlogs((blogs) => {
            return blogs.map((blog, index) => {
                return index === id ? updatedBlog : blog;
            })
        })
    }

    const deleteBlog = (id) => {
        setBlogs((blogs) => blogs.filter((_, index) => id !== index));
    }
    
    const blogContext = {
        blogs: blogs,
        addBlog: addBlog,
        editBlog: editBlog,
        deleteBlog: deleteBlog
    }
    return (
        <BlogContext.Provider value={blogContext}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider;