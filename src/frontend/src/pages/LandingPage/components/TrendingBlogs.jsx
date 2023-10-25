import { BlogCard } from "./BlogCard";
export function TrendingBlogs() {
  return (
    <>
      <div className="flex flex-row mx-20 mt-10 mb-8">
        <h1 >Trending Recipies</h1>
        <div className="flex-1"></div>
        <div>
          <a className="btn">View More</a>
        </div>
      </div>

      <div className="flex gap-[5vw]">

        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
}
