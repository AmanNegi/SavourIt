import { Blog_card } from "./blog_card";
export function Trending_blogs() {
  return (
    <>
      <div className="flex gap-[5vw]">
        <div className="flex-1"></div>
        <Blog_card />
        <Blog_card />
        <div className="flex-1"></div>
      </div>
    </>
  );
}
