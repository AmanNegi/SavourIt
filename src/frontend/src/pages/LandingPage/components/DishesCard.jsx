// import dish_one from "../assets/Hamburger-and-french-fries-paper-box.webp";
import dish_one from "../../../assets/Hamburger-and-french-fries-paper-box.webp";

export function DishCard() {
  return (
    <>
      <div className="relative flex justify-center p-3 overflow-hidden card w-80 h-96 trendingCard">
        <div className="w-[100%] h-[100%] flex justify-center over pb-3 ">
          <img className="rounded-2xl" src={dish_one} alt="dish" />
        </div>
        <div className="pl-3">
          <div className="flex flex-row">
            <h2 className="font-medium">Pizza</h2>
            <div className="flex-1"></div>
            <h2 className="text-2xl font-bold text-black ">₹120</h2>
          </div>
          <p className="text-slate-500" >Lovely Sweets</p>
          <div className="my-4 rating">
            <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
            <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" checked />
            <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
            <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
            <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
          </div>

        </div>

        <div className="absolute bottom-2 right-2">
          <button className="text-white btn btn-primary">Buy Now</button>
        </div>
      </div >
    </>
  );
}
