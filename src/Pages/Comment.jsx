import { FaArrowRight } from "react-icons/fa";
import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";

const Comment = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/comment')
            .then(res => res.json())
            .then(data => setComments(data));
    }, []);
    
    return (
        <div>
           <div>
        <div>
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold mr-2">Comment Section</h2>
        <FaArrowRight className="text-gray-500" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comments.map(comment => (
          <CommentCard
            key={comment._id}
            comment={comment}
          />
        ))}
      </div>
    </div>
        </div>
        </div>
    );
};

export default Comment;