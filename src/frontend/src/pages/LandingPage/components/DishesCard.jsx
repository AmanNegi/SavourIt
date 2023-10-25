// import dish_one from "../assets/Hamburger-and-french-fries-paper-box.webp";
import dish_one from "../../../assets/Hamburger-and-french-fries-paper-box.webp";

export function DishCard() {
  return (
    <>
      <div className="flex items-center justify-center p-1 overflow-hidden card w-80 h-96 trendingCard">
        <div className="w-[100%] h-[100%] flex justify-center over pb-3 ">
          <img className="rounded-2xl" src={dish_one} alt="dish" />
        </div>
        <p className="p-2 bg-white">Something about this card</p>
        <div className="w-[100%] h-[100%] flex justify-end items-end p-2">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </>
  );
}
