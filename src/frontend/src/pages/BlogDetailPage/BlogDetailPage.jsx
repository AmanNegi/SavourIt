import BlogImg from "../../assets/Hamburger-and-french-fries-paper-box.webp";
import Footer from "../../components/Footer";
import { Nav } from "../../nav";

const BlogDetailsPage = () => {
  return (
    <>
      <Nav />
      <div className=" object-cover mx-auto max-w-[700px] h-96 rounded-xl overflow-hidden">
        <img src={BlogImg} alt="image" />
      </div>
      <div className="w-[35rem] mx-auto text-left">
        <h1 className="py-2 my-3">SavoutIt at new heights</h1>
      </div>
      <div className="w-[35rem] mx-auto rounded-md flex flex-col items-start">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src={BlogImg} />
          </div>
          <p className="pl-2 text-xs">Amanda</p>
          <p className="pl-2 text-xs">Amanda</p>
        </div>
      </div>
      <div className="w-[35rem] mx-auto border-2 rounded-md flex flex-col items-start p-2 my-3 text-xs">
        <h2 className="mb-3">Ingredients</h2>
        <ul className="list-disc list-inside">
          <li>Mirchi</li>
          <li>Dhaniya</li>
          <li>Aloo</li>
        </ul>
      </div>
      <div className="w-[35rem] mx-auto text-left text-sm">
        <h2>Main</h2>
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
        <p className="my-5">
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
        </p>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetailsPage;
