import { DishCard } from "./DishesCard";
export function TrendingDish() {
  return (
    <>
      <div className="flex flex-row mx-20 my-8">
        <div >
          <h1 >Trending Dishes </h1>
        </div>
        <div className="flex-1"></div>
        <div>
          <a className="btn">View More</a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 mx-16 sm:grid-cols-2 lg:grid-cols-4">
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </div>

    </>
  );
}
