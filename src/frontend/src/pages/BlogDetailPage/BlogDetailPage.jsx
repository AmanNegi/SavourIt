import BlogImg from "../../assets/Hamburger-and-french-fries-paper-box.webp";
import Footer from "../../components/Footer";
import { Nav } from "../../nav";
import { addToShoppingList } from "../ShoppingList/shoppinglist";
import { PropTypes } from "prop-types";

const BlogDetailsPage = ({ title, description, image, ingredients }) => {

  console.log(image, ingredients);
  return (
    <>
      <Nav />
      <div className="mt-6 object-cover mx-auto max-w-[700px] h-96 rounded-xl overflow-hidden">
        <img src={BlogImg} alt="image" />
      </div>
      <div className="w-[35rem] mx-auto text-left">
        <h1 className="py-2 my-3">{title ?? "No Title"}</h1>
      </div>

      <div className="flex mx-auto flex-row h-[10vh] max-w-[700px] px-16 ">
        <div className="w-full avatar">
          <div className="h-[50px] rounded-full object-cover ">
            <img src={BlogImg} />
          </div>
          <div className="flex flex-col w-full">
            <p className="pl-2 text-md">Amanda</p>
            <p className="pl-2 text-xs">2 days ago</p>

          </div>
        </div>

      </div>
      <div className="w-[35rem] mx-auto border-2 rounded-md flex flex-col items-start p-2 my-3 relative">

        <h2 className="mb-3">Ingredients</h2>
        <ul className="list-disc list-inside">
          {["Koka", "Thoka", "Moka"].map((e, indx) => <li className="text-md" key={indx}>{e}</li>)}
        </ul>
        <div className="absolute right-2 top-2">
          <button onClick={() => {

            addToShoppingList(["Koka", "Thoka", "Moka"]);

          }} className="btn btn-accent">+</button>
        </div>
      </div>
      <div className="w-[35rem] mx-auto text-left text-sm">

        {description ?? "KUCH NAHI HAI"}
        {/* <h2>Main</h2>
        <p className="my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ex
          debitis exercitationem molestiae autem illo, eaque quo aspernatur
          perspiciatis error corporis tenetur ipsa voluptatum excepturi dicta
          quasi nesciunt amet explicabo? At molestias quod earum inventore,
          dolores rerum repudiandae minus porro asperiores perspiciatis ex ea,
          quae non necessitatibus vitae. Ea cumque magnam assumenda mollitia
          corrupti quia rerum officia qui nisi excepturi? Harum quisquam
          consectetur necessitatibus dolorem. Cupiditate repellat qui iste
          laudantium ex porro, ipsam aut beatae ipsum modi quas consectetur
          ratione atque nihil reiciendis voluptate enim blanditiis ea minima
          officiis laboriosam!
        </p>
        <h2>Hero</h2>
        <p className="my-5 mb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab similique
          sint aut pariatur culpa sit? Facilis, at totam eveniet suscipit illo
          ducimus repellendus, repudiandae exercitationem, modi unde labore id
          dolorum! Asperiores enim debitis dolores, laudantium neque quis,
          maxime voluptas quas sunt necessitatibus reprehenderit? Voluptatum,
          consequatur fugiat. Iste ullam, sapiente sit modi atque sequi ab, rem
          reprehenderit temporibus assumenda, voluptatum doloribus? Perferendis
          eius neque dolorum ab cupiditate vitae dicta quos nisi ad. Vitae eaque
          commodi cumque explicabo sit tempore fugit blanditiis sed sequi
          quisquam odit tenetur voluptates, cum optio expedita delectus!
          Delectus laborum nisi neque optio, illum odio ad alias eius,
          exercitationem similique et officia incidunt itaque ea ipsum
          consequatur velit necessitatibus reprehenderit qui. Error aliquam,
          optio cum debitis hic nemo.
        </p> */}
      </div>
      <Footer />
    </>
  );
};
BlogDetailsPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

export default BlogDetailsPage;
