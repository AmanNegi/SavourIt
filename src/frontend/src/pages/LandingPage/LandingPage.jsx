import { Nav } from "../../nav";
import { TrendingBlogs } from "./components/TrendingBlogs";
import bannerimage from "../../assets/banner.png"
import { TrendingDish } from "./components/TrendingDish";

const LandingPage = () => {
    return (
        <>
            <Nav />
            <img className="h-[70vh] w-[100vw] object-cover" src={bannerimage}></img>
            <TrendingDish />
            <TrendingBlogs />
        </>
    )
}

export default LandingPage;