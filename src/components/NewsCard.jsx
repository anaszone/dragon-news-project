import React from "react";
import { FaEye, FaShareAlt } from "react-icons/fa";
import { IoMdBookmark, IoMdBookmarks } from "react-icons/io";
import { MdBookmarkBorder } from "react-icons/md";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, rating, total_view, thumbnail_url, details } = news;

  // Short Description (First 150 characters)
  const shortDetails =
    details.length > 150 ? details.slice(0, 150) + "..." : details;

  return (
    <div className="card bg-base-100 shadow-xl  rounded-xl">
      {/* Header */}
      <div className="flex bg-base-200 justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={author.img}
            alt="author"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <button className="text-gray-500 hover:text-black flex gap-1">
          <MdBookmarkBorder />
          <FaShareAlt size={18} />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold px-4">{title}</h2>

      {/* Thumbnail Image */}
      <figure className="px-4 pt-3">
        <img
          className="rounded-xl w-full object-cover"
          src={thumbnail_url}
          alt="news-thumbnail"
        />
      </figure>

      {/* Details */}
      <div className="p-4">
        <p className="text-sm text-gray-600 leading-6">
          {shortDetails}
          <Link to={`/news-details/${id}`} className="text-blue-500 font-semibold cursor-pointer">
            {" "}
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 pt-2 border-t">
        {/* Rating */}
        <div className="flex items-center gap-2 text-orange-500">
          <div className="rating rating-sm">
            <input
              type="radio"
              className="mask mask-star-2 bg-orange-400"
              checked
              readOnly
            />
          </div>
          <span className="text-gray-600">{rating.number}</span>
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
