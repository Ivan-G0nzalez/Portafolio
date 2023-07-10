import Chip from "~/components/Chips";

import { Link } from "react-router-dom";

function BlogItem({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover,
  },
}: any) {
  return (
    <div className="flex flex-col mb-4">
      <img
        src={cover}
        alt="cover"
        className="w-full h-72 object-cover mb-0.5 rounded-lg"
      />
      <div className="w-[50%] mx-auto ">
        <Chip label={category} />
      </div>
      <h3 className="mt-3 mr-0 mb-2.5 ml-0 font-semibold text-xl flex-1 dark:subtitle">
        {title}
      </h3>
      <p className="text-gray-600 text-lg relative max-h-14 overflow-hidden dark:text-white pr-0.5 before:absolute before:content-['...'] before:right-0 before:bottom-0">
        {description}
      </p>

      <footer className="flex items-center mt-3 justify-between">
        <div className="flex">
          <img
            src={authorAvatar}
            alt="authorAvatar"
            className="w-10 h-10 rounded-3xl object-cover mr-0.5"
          />
          <div className="ml-2">
            <h6 className="dark:subtitle">{authorName}</h6>
            <p className="text-xs text-gray-400 dark:text-white">{createdAt}</p>
          </div>
        </div>

        <Link className="text-inherit text-white" to={`/blogs/${id}`}>
          {" "}
          ➙{" "}
        </Link>
      </footer>
    </div>
  );
}

export default BlogItem;
