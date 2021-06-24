import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  

  useEffect (() => {
    fetch ('http://localhost:8000/blogs')
    .then(res => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setBlogs(data);
      setIsPending(false);
    })
  }, []); 
  // name is the dependency that we add into the second argument if we wanna run this function when the state changes (only if we want it for this state)

  return ( 
    <div className="home">
      { isPending && <div>Lodaing</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
      {/* line above - we're passing the blogs as a prop through to the BlogList*/}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!"/> */}
      {/*   */}
    </div>
   );
}
 
export default Home;