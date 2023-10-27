import { useEffect, useState } from "react"
import Footer from "../../components/Footer"
import { Nav } from "../../nav"
import appState from "../../data/appstate";
import { useNavigate } from "react-router-dom";
import { getShoppingList } from "./shoppinglist";
import { PropTypes } from "prop-types";

const ShoppingList = () => {
    const navigate = useNavigate();
    const [shoppingList, setShoppingList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (appState.isUserLoggedIn() === false) {
            navigate("/login");
            return;
        }
        getItems();
    }, []);

    async function getItems() {
        setIsLoading(true);
        const res = await getShoppingList();
        if (res) {
            setShoppingList(res.products);
        }
        setIsLoading(false);
    }

    return (
        <main>
            <Nav />
            <div className="h-[5vh] mt-[10vh] w-full flex flex-col items-center justify-center">
                <h1>Shopping List</h1>
                <p className="text-slate-500">Your shopping list</p>
            </div>

            <section className="mt-[10vh] max-w-[60vw] mx-auto grid grid-cols-2 gap-x-10">
                {(!isLoading && shoppingList.length > 0) && (
                    shoppingList.map((e) => <ShoppingListItem key={e._id} name={e.name} />))
                }

            </section>

            {
                (!isLoading && shoppingList.length === 0) &&

                <div className="h-[60vh] flex items - center justify - center ">
                    < p className="" > Your shopping list is empty</p>
                </div>
            }
            <Footer />
        </main >
    )
}

export default ShoppingList;


const ShoppingListItem = ({ name }) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="px-6 transition-all duration-500 rounded-md form-control hover:bg-gray-200">
            <label className="cursor-pointer label">
                <span className="label-text">{name}</span>
                <input type="checkbox" checked={checked} onChange={() => {
                    // remove from here
                    setChecked(!checked);
                }} className="checkbox checkbox-error" />
            </label>
        </div>

    )
}
ShoppingListItem.propTypes = {
    name: PropTypes.string.isRequired,
};