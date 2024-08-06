// pages/Blogs.jsx
import { useState, useEffect } from 'react';

function Blogs() {
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const response = await fetch('https://api.hashnode.com/v1/me/articles', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': '11cc8e2b-1233-4209-b6ff-d375b6587f2c'
  //         },
  //         body: JSON.stringify({
  //           query: `
  //             query {
  //               user(username: "huamanraj") {
  //                 publication {
  //                   posts(page: 1) {
  //                     title
  //                     brief
  //                     slug
  //                     dateAdded
  //                   }
  //                 }
  //               }
  //             }
  //           `
  //         })
  //       });
  //       const data = await response.json();
  //       setBlogs(data.data.user.publication.posts);
  //     } catch (error) {
  //       console.error('Error fetching blogs:', error);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);

  return (
    <div className="blogs">
      <h1 className="text-3xl text-md-yellow mb-6">Blogs</h1>
      {/* <div className="space-y-6">
        {blogs.map(blog => (
          <div key={blog.slug} className="bg-md-bg border border-md-text/20 p-6 rounded-lg">
            <h2 className="text-2xl text-md-blue mb-2">{blog.title}</h2>
            <p className="text-md-text mb-4">{blog.brief}</p>
            <a href={`https://huamanraj.hashnode.dev/${blog.slug}`} target="_blank" rel="noopener noreferrer" className="text-md-green hover:text-md-yellow transition-colors duration-200">
              Read more
            </a>
            <p className="text-sm text-md-text/60 mt-2">{new Date(blog.dateAdded).toLocaleDateString()}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Blogs;