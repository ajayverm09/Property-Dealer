import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ id, image, title, excerpt, date }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div
      onClick={handleReadMore}
      className="cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300 w-full max-w-md mx-auto sm:max-w-sm md:max-w-md"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
        <img
          src={image}
          alt="author"
          className="w-20 h-20 sm:w-16 sm:h-16 rounded-full object-cover mx-auto sm:mx-0"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm line-clamp-2">{excerpt}</p>

      <div className="flex justify-end mt-2">
        <span className="text-blue-500 hover:text-blue-700 text-sm font-medium">
          Read More...
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
