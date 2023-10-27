import axios from "axios";
import { toast } from "react-toastify";
import appState from "../../../data/appstate";

export default async function search(query) {
  try {
    const productRes = await axios.post(
      import.meta.env.VITE_API_URL + "/list/searchProduct",
      {
        name: query,
        long: appState.getLongitude(),
        lat: appState.getLatitude(),
      }
    );
    const recipiesRes = await axios.post(
      import.meta.env.VITE_API_URL + "/list/searchRecipie",
      {
        name: query,
      }
    );

    return {
      products: productRes.data,
      recipies: recipiesRes.data,
    };
  } catch (e) {
    console.log(e);
    toast.error("An error occurred while searching");
  }
}
