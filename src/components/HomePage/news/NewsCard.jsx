import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

const NewsCard = ({ n }) => {
  return (
    <div className="border-b border-gray-400 pb-4">
      <div className="flex justify-between w-full  bg-gray-200 rounded-md mt-2">
        <ul className="flex justify-start items-center ">
          <li>
            <Image
              src={n.author.img}
              width={30}
              height={30}
              alt={n.author.name}
              className="rounded-full"
            />
          </li>
          <li>
            <h1 className="text-xs font-semibold">{n.author.name}</h1>
            <p className="text-xs font-normal text-gray-500">
              {n.author.published_date}
            </p>
          </li>
        </ul>
        <div className="flex items-center">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      <div>
        <h1 className="font-semibold">{n.title}</h1>

        <Image
          src={n.image_url}
          width={400}
          height={180}
          alt={n.title}
          className="mx-auto"
        />
        <p className="font-normal text-xs line-clamp-3">{n.details}</p>
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-3 ">
          <li className="flex items-center text-sm">
            <FaEye />
            {n.total_view}
          </li>
          <li className="flex items-center text-sm">
            <CiStar />
            {n.rating.number}
          </li>
        </ul>
        <ul>
          <Link
            className=" text-red-500 flex text-xs cursor-pointer items-center btn"
            href={`/news/${n._id}`}
          >
            <button>Read more</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NewsCard;
