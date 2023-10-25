import { Nav } from "./nav";
// import { Banner } from "./banner";
import bannerimage from "./assets/banner.png";
import { Trending_dish } from "./Trending_dishes";
import {Trending_blogs} from "./Trending_blogs"
const App = () => {
    return (
        <>
        <Nav/>
        {/* <Banner/> */}
        <img className="h-[70vh] w-[100vw] object-cover" src={bannerimage}></img>
        <Trending_dish/>
        <Trending_blogs/>
        </>
    );
};

export default App;
