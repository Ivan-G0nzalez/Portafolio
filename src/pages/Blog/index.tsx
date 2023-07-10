import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogList } from "~/constant/db.json";
import Chip from "~/components/Chips";
import EmtyList from "~/components/EmptyList";

function Blog() {
  const { id }: any = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const blog = blogList.find((blog) => blog.id === parseInt(id, 10));

    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <div className="dark:bg-dark_primary">
      <Link
        className="text-lg text-gray-200 dark:text-white font-semibold hover:underline m-8 md:mt-20 sm:mt-24 block"
        to="/blogs"
      >
        <span className="dark:text-white">←</span> Go Back
      </Link>

      {blog ? (
        <div className="max-w-3xl my-0 mx-auto p-12 md:p4">
          <header className="text-center ">
            <p className="text-2xl dark:text-white text-gray-200 font-semibold">
              Published {blog.createdAt}
            </p>
            <h1 className="text-5xl dark:subtitle">{blog.title}</h1>
            <div className="flex justify-center">
              {blog.subCategory.map(
                (category: string, index: string | number) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index} className="m-4">
                    <Chip label={category} />
                  </div>
                ),
              )}
            </div>
          </header>
          <img src={blog?.cover} alt="cover" className="w-full" />
          <p className="p-2 mt-6 dark:text-white">{blog.description}</p>
        </div>
      ) : (
        <EmtyList />
      )}
    </div>
  );
}

export default Blog;
