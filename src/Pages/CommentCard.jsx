import { FaUserCircle } from "react-icons/fa";

const CommentCard = ({ comment }) => {
    const { commentText, userName, userProfilePic } = comment;
  
    return (
      <div className="flex items-center gap-4 p-4 bg-rose-300 shadow-md rounded-md">
        {userProfilePic ? (
          <img src={userProfilePic} alt="User Profile" className="w-10 h-10 rounded-full" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <FaUserCircle className="w-6 h-6 text-gray-500" />
          </div>
        )}
        <div>
          <p className="font-semibold">{userName}</p>
          <p>{commentText}</p>
        </div>
      </div>
    );
  };
  
  export default CommentCard;
  