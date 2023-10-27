import axios from "axios";
import { toast } from "react-toastify";
import appState from "../../../data/appstate";

/**
 * Login using email and password.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>} A Promise that resolves with the user account data.
 */
export default async function login(email, password) {
  try {
    const res = await axios.post(import.meta.env.VITE_API_URL + "/auth/login", {
      email: email,
      password: password,
    });

    toast.success("User Logged in Successfully");
    appState.saveUserData(res.data, true);
    return res.data;
  } catch (e) {
    toast.error(e.response.data);
    return undefined;
  }
}

/**
 * Register using email and password.
 * @async
 * @param {Object} data - The user account data.
 * @param {string} data.name - The user's name.
 * @param {string} data.email - The user's email address.
 * @param {string} data.password - The user's password.
 * @param {string} data.userType - The user's type (e.g. "customer", "admin").
 * @param {string} data.phone - The user's phone number.
 * @param {string} data.lat - The user's latitude.
 * @param {string} data.long- The user's longitude.
 * @returns {Promise<Object|undefined>} A Promise that resolves with the user account data.
 */
export async function signUp(data) {
  const { name, email, password, userType, phone, lat, long } = data;

  try {
    console.log(import.meta.env.VITE_API_URL);
    const res = await axios.post(
      import.meta.env.VITE_API_URL + "/auth/signup",
      {
        name: name,
        email: email.toLowerCase(),
        password: password,
        userType: userType,
        phone: phone,
        lat: lat.toString(),
        long: long.toString(),
      }
    );

    toast.success("Registration Successful");
    appState.saveUserData(res.data, true);

    return res.data;
  } catch (e) {
    toast.error(e.response.data);
    return undefined;
  }
}
