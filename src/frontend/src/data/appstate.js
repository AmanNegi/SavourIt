const APP_STATE_KEY = "SavourIt-AppState";

class AppState {
  /**
   * @typedef {Object} User
   * @property {string|undefined} _id - The ID of the user.
   * @property {string|undefined} name - The name of the user.
   * @property {string|undefined} email - The email address of the user.
   * @property {string|undefined} phone - The phone number of the user.
   * @property {string|undefined} userType - The type of user (e.g. "admin", "customer").
   * @property {string|undefined} createdAt - The date and time when the user was created.
   * @property {string|undefined} lat - The latitude of the user's location.
   * @property {string|undefined} long - The longitude of the user's location.
   *
   */

  /**  @type {User} */
  userData = {
    createdAt: undefined,
    email: undefined,
    name: undefined,
    phone: undefined,
    userType: undefined,
    _id: undefined,
    long: undefined,
    lat: undefined,
  };

  isLoggedIn = false;

  __init__() {
    console.log("In __init__ AppState.js...");
    const data = JSON.parse(localStorage.getItem(APP_STATE_KEY)) ?? {};
    console.log("Local AppState Data: ", data);
    this.userData = data.userData ?? {};
    this.isLoggedIn = data.isLoggedIn ?? false;
  }

  /**
   * @param {Map} userData
   * @param {boolean} isLoggedIn
   */
  saveUserData(userData, isLoggedIn) {
    this.userData = userData;
    this.isLoggedIn = isLoggedIn;
    localStorage.setItem(
      APP_STATE_KEY,
      JSON.stringify({ userData, isLoggedIn })
    );
  }

  logOutUser() {
    this.saveUserData({}, false);
  }

  isUserLoggedIn() {
    // console.log("IS USER LOGGED IN : ", this.loggedIn, this.userData);
    if (!this.isLoggedIn || !this.userData._id) {
      this.isLoggedIn = false;
      return false;
    }
    return true;
  }

  /**
   * Get the user data.
   * @returns {User}
   */
  getUserData() {
    return { ...this.userData };
  }

  getLatitude() {
    if (this.userData.lat) return parseFloat(this.userData.lat);
    else return 0;
  }
  getLongitude() {
    if (this.userData.long) return parseFloat(this.userData.long);
    else return 0;
  }

  isUser() {
    return this.userData.userType === "user";
  }

  isRestaurant() {
    return this.userData.userType === "restaurant";
  }

  setUserData(data) {
    this.saveUserData(data, this.isLoggedIn);
  }
}

/// Singleton instance for AppState
const appState = new AppState();
export default appState;
