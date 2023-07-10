import { useState } from "react";
import BlogList from "~/components/Blog/BlogList";
import Header from "~/components/Blog/Headers";
import SearchBar from "~/components/Blog/SearchBar";
import { blogList } from "~/constant/db.json";
import EmtyList from "~/components/EmptyList";

function Home() {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSerchKey] = useState("");

  const handleSearchResult = () => {
    const allBlog = blogList;
    const filteredBlogList = allBlog.filter((blog) =>
      blog.category
        .toLowerCase()
        .includes(searchKey.toLocaleLowerCase().trim()),
    );

    setBlogs(filteredBlogList);
  };

  const handleSerchSubmit = (event: any): void => {
    event.preventDefault();
    handleSearchResult();
    console.log("this is working");
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSerchKey("");
  };

  return (
    <div className="p-12 md:p4 dark:bg-dark_primary">
      {/* Headers */}
      <Header />
      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSerchSubmit}
        handleSearchKey={(e: any): void => setSerchKey(e.target.value)}
      />
      {/* Blog List and Empty list */}
      {!blogs.length ? <EmtyList /> : <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home;
