import React from 'react';

const BlogContext = React.createContext({
    blogs:[],
    addBlog: (blog) => {},
    editBlog: (id,blog) => {},
    deleteBlog: (id) => {}
});

export default BlogContext;