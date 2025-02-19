import { useEffect, useState } from "react";
import { RiChat4Line } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hook/useAuth";

import Comment from "./Comment";
import { FaUserCircle } from "react-icons/fa";


const FoodDetails = () => {
   
  const blog = useLoaderData(); // Use singular for a single blog post
  const { user } = useAuth();
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");

  const [userName, setUserName] = useState("");
  const [userProfilePic, setUserProfilePic] = useState("");

  useEffect(() => {
    if (user) {
      setUserName(user.displayName || "");
      setUserProfilePic(user.photoURL || "");
    }
  }, [user]);

  const isAuthor = user && user.email === blog.userEmail; // Compare user email with blog author email

  const handleSubmitComment = () => {
    if (!comment.trim()) return;
  
    const commentData = {
      blogId: blog._id, // Use blog._id directly
      userName: userName,
      userProfilePic: userProfilePic,
      commentText: comment,
    };
  
    fetch('https://food-blogging-server.vercel.app/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
    
    // console.log(commentData);
  
    
    setComment("");
    setShowCommentBox(false);
  };
  
  return (
    <div>
      <div className="container mx-auto py-8">
        {/* Blog Details */}
        <div className="mb-10 p-8 bg-teal-50 rounded-xl shadow-md w-full max-w-3xl mx-auto relative">
          <h2 className="text-4xl font-semibold mb-6 text-rose-700 font-serif">{blog.title}</h2>
          <img src={blog.image} alt="Blog" className="mb-6 w-full h-64 object-cover rounded-xl lg:w-80 lg:h-80" />
          <p className="text-gray-600 mb-6 text-lg font-light font-sans">{blog.shortDescription}</p>
          <p className="text-gray-700 leading-relaxed text-base font-normal font-serif">{blog.longDescription}</p>
          
          {(isAuthor || !user) && (
            <Link to={`/update/${blog._id}`}><button className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-5">Update</button></Link>
          )}
          
          {!isAuthor && user && (
            <button
              onClick={() => setShowCommentBox(true)}
              className="bg-teal-500 text-white px-4 py-2 rounded-md flex items-center lg:ml-64"
            >
              <RiChat4Line />
              Comment
            </button>
          )}
        </div>

        {/* Comment Section */}
        <div className="mb-8">
          {isAuthor && (
            <p className="text-red-500">You cannot comment on your own blog.</p>
          )}
          {showCommentBox && !isAuthor && (
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                {userProfilePic ? (
                  <img src={userProfilePic} alt="User Profile" className="w-10 h-10 rounded-full mr-2" />
                ) : (
                  <FaUserCircle className="w-10 h-10 text-gray-500 mr-2" />
                )}
                <span className="text-gray-800 font-semibold">{userName || 'User'}</span>
              </div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment here..."
                className="w-full h-20 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex gap-3 justify-start">
                <button
                  onClick={handleSubmitComment}
                  className="bg-rose-500 text-white px-4 py-2 rounded-md mt-2"
                >
                  Submit
                </button>
                <button
                  onClick={() => setShowCommentBox(false)}
                  className="bg-teal-500 text-white px-4 py-2 rounded-md mt-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Comments */}
        <Comment></Comment>
      </div>
    </div>
  );
};

export default FoodDetails;
