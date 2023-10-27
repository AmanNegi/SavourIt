import axios from "axios";
import { toast } from "react-toastify";
import appState from "../../data/appstate";

export async function getShoppingList() {
  try {
    const res = await axios.post(
      import.meta.env.VITE_API_URL + "/list/getShoppingList",
      {
        userId: appState.getUserData()._id,
      }
    );
    console.log(res);
    return res.data;
  } catch (e) {
    toast.error(e.response.data);
  }
}

export async function addToShoppingList(items) {
  try {
    const res = await axios.post(
      import.meta.env.VITE_API_URL + "/list/addToShoppingList",
      {
        userId: appState.getUserData()._id,
        items: items.map((e) => {
          return { name: e };
        }),
      }
    );
    toast.success("Added to Shopping List");
    return res.data;
  } catch (e) {
    console.log(e);
    toast.error(e.response.data);
  }
}
