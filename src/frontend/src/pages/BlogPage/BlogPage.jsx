import Footer from "../../components/Footer";
import { Nav } from "../../nav";
import { BlogCard } from "../LandingPage/components/BlogCard";

import tikka from "../../assets/chicken_tikka.png";

const demoitem = {
    name: "Panner Tikka",
    description: "loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum",
    image: tikka,
};

const BlogPage = () => {
    return (
        <main>
            <Nav />
            <div className="h-[5vh] mt-[20vh] w-full flex flex-col items-center justify-center">
                <h1>Popular Recipies</h1>
                <p className="text-slate-500">Recipies people love frequently</p>
            </div>
            <div className="grid grid-cols-3 gap-5 mx-20 my-20">
                <BlogCard {...demoitem} />
                <BlogCard {...demoitem} />
                <BlogCard {...demoitem} />
                <BlogCard {...demoitem} />
                <BlogCard {...demoitem} />
                <BlogCard {...demoitem} />
                <BlogCard {...demoitem} />
            </div>
            <Footer />
        </main>
    )
}

export default BlogPage