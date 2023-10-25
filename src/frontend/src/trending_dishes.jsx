import { Dish_card } from "./dishes_card";
export function Trending_dish() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start bg-green-100 ml-4">
          <p className="text-3xl">Trending Dishes</p>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      <div className="flex gap-[5vw]">
        <div className="flex-1"></div>
        <Dish_card />
        <Dish_card />
        <Dish_card />
        <div className="flex-1"></div>
      </div>
    </>
  );
}
