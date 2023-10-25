import { Nav } from "./nav";
import { Banner } from "./banner";
import { Trending_dish } from "./Trending_dishes";
import {Trending_blogs} from "./Trending_blogs"
const App = () => {
    return (
        <>
        <Nav/>
        <Banner/>
        <Trending_dish/>
        <Trending_blogs/>
        </>
    );
};

export default App;
