import { Dish_card } from "./dishes_card";
export function Trending_dish() {
  return (
    <>
      <div className="flex flex-row mx-20 mt-4">
        <div className="">
          <p className="text-3xl">Trending Dishes</p>
        </div>
        <div className="flex-1"></div>
        <div className="">
          <a className="btn">Button</a>
        </div>
      </div>
      <div className="flex ml-15">
        <Dish_card />
        <Dish_card />
        <Dish_card />
        <div className="flex-1"></div>
      </div>
    </>
  );
}
