import { DishCard } from "./DishesCard";
export function TrendingDish() {
  return (
    <>
      <div className="flex flex-row mx-20 my-8">
        <div >
          <h1 >Trending Dishes</h1>
        </div>
        <div className="flex-1"></div>
        <div>
          <a className="btn">View More</a>
        </div>
      </div>
      <div className="flex flex-col gap-8 ml-16 sm:flex-row">
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </div>

    </>
  );
}
