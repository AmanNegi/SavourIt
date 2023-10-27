import { useState } from "react";
import pattern from "../../assets/pattern.png";
import Footer from "../../components/Footer";
import { Nav } from "../../nav";
import searchProducts from "./application/search";
import { DishCard } from "../LandingPage/components/DishesCard";
import { BlogCard } from "../LandingPage/components/BlogCard";

const Search = () => {
    const [products, setProducts] = useState([]);
    const [recipies, setRecipies] = useState([]);
    const [query, setQuery] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    return (
        <>
            <Nav />
            <main>
                <div className="h-[45vh] w-full relative">
                    <img
                        className="absolute h-[45vh] inset-0 object-cover w-full "
                        src={pattern}
                    />

                    <div className="absolute h-[45vh] inset-0 backdrop-blur-[200px]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="">
                            <h1 className="">Find the most savoury dishes</h1>
                        </div>
                    </div>
                    <div className="absolute top-[30vh] left-0 right-0 flex items-center justify-center">
                        <div className="flex items-center justify-center form-control">
                            <div className="input-group w-[50vw]">
                                <input
                                    type="text"
                                    placeholder="Search…"
                                    value={query}
                                    onChange={async (e) => {
                                        setQuery(e.target.value);
                                        setHasSearched(false);
                                    }}
                                    className="w-full input input-bordered"
                                />
                                <button
                                    className="btn btn-square"
                                    onClick={() => {
                                        searchProducts(query).then((res) => {
                                            if (res) {
                                                setProducts(res.products);
                                                setRecipies(res.recipies);
                                            }
                                        });
                                        setHasSearched(true);
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    (query.length < 4 || !hasSearched) && <section className="h-[70vh] w-full flex items-center justify-center">
                        <h2>Enter a query to begin searching</h2>
                    </section>
                }
                {(query.length >= 4 || hasSearched) && <section>
                    <div className="flex mx-20 mt-8 mb-6">
                        <h2 className="text-3xl">Matching Dishes</h2>
                    </div>
                    <div className="grid grid-cols-4 mx-20 mb-20">
                        {products.map((product, index) => {
                            return <DishCard {...product} key={index} />;
                        })}
                    </div>
                    <div className="flex mx-20 my-10">

                        <h2 className="text-3xl">Matching Recipies</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-8 mx-20 mb-20">
                        {recipies.map((product, index) => {
                            return <BlogCard {...product} key={index} />;
                        })}
                    </div>
                </section>}

            </main>

            <Footer />
        </>
    );
};

export default Search;
