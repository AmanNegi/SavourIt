import dish_one from "./assets/Hamburger-and-french-fries-paper-box.webp";
export function Dish_card() {
  return (
    <>
      <div className="card w-80 h-96 m-7 p-1 overflow-hidden flex items-center justify-center trendingCard">
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
