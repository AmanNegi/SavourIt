import axios from "axios";
import { toast } from "react-toastify";
import appState from "../../../data/appstate";

import tikka from "../../../assets/chicken_tikka.png";

export async function mockSearch() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    products: [
      {
        id: 1,
        name: "Product 1",
        description: "Product 1 description",
        location: { type: "Point", coordinates: [0, 0] },
      },
    ],
    recipies: [
      {
        name: "Recipie 1",
        description: "Recipie 1 description",
        listedBy: "User1ID",
        listedByName: "User1",
        image: tikka,
        createdAt: "2021-01-01T00:00:00.000Z",
      },
    ],
  };
}
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
