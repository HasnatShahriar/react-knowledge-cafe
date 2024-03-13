import { useEffect, useState } from "react";

const Blogs = () => {
  
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])

  return (
    <main className="w-2/3">
      <h3 className="text-3xl">Blogs: {blogs.length}</h3>
    </main>
  );
};

export default Blogs;