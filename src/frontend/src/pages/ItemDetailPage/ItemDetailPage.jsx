import BlogImg from "../../assets/Hamburger-and-french-fries-paper-box.webp";
import Footer from "../../components/Footer";
import {Nav} from "../../nav";
import Comment from "./Comment";

const ItemDetailPage = () => {
  return (
    <>
      <Nav />
      <div className="m-20 rounded-lg flex">
        <div className="overflow-hidden">
          <img className="rounded-lg w-[35vw]" src={BlogImg} alt="" />
        </div>
        <div className="text-left mx-24 flex-col items-start">
          <h1 className="text-7xl">Chowmein</h1>
          <div className="mt-4 rating rating-md">
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>

          <p className="mt-4 text-2xl">Restaurent Name</p>
          <div className="max-w-2xl mt-7">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, illum minima veniam fuga assumenda impedit quas at ut,
              magni adipisci provident sequi tenetur placeat architecto, tempora
              aperiam ea cum dicta? Sed temporibus sit exercitationem vitae
              explicabo. Tempora dicta quae nesciunt iure sint enim, ab commodi
              modi quod error a velit saepe repudiandae. Rem laboriosam velit
              atque nulla alias, omnis fuga?
            </p>
          </div>
          <h2 className="text-5xl mt-12">&#8377;250</h2>
          <button className="mt-8 btn btn-primary">Book Now</button>
        </div>
      </div>
      <div className="ml-14 p-5 h-[50vh]">
        <p className="mb-4 font-bold text-4xl">Reviews</p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-error w-[60%]"
        />
        <button className="ml-2 btn btn-neutral w-24">Comment</button>
        <Comment />
      </div>
      <Footer />
    </>
  );
};

export default ItemDetailPage;
