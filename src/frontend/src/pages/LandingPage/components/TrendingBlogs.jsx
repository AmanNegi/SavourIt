import { BlogCard } from "./BlogCard";
import tikka from "../../../assets/chicken_tikka.png";

const demoitem = {
  name: "Panner Tikka",
  description: "loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum",
  image: tikka,
};


export function TrendingBlogs() {
  return (
    <>
      <div className="flex flex-row mx-20 mt-10 mb-8">
        <h1 >Trending Recipies </h1>
        <div className="flex-1"></div>
        <div>
          <a className="btn">View More</a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 mx-16 mb-[10vh] sm:grid-cols-3">

        <BlogCard {...demoitem} />
        <BlogCard {...demoitem} />
        <BlogCard {...demoitem} />
      </div>
    </>
  );
}
