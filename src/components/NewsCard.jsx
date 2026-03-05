import React from "react";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id,title, author, image_url, details, rating, total_view } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <div className="card bg-base-100 shadow-md mb-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-base-200 p-4 rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        {/* Image */}
        <img src={image_url} alt="news" className="rounded-lg mb-4" />

        {/* Details */}
        <p className="text-sm text-gray-600">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>

        <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold mt-2">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 ml-2">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
