import BlogItem from "./BlogItem";

function BlogList({ blogs }: any) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      {blogs.map((blog: { id: any }) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
}

export default BlogList;
