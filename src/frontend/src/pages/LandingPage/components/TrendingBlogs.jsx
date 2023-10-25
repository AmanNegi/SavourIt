import { BlogCard } from "./BlogCard";
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

const demoitem = {
  name: "Panner Tikka",
  description: "loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
};