import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";

import pattern from "../../assets/pattern.png";
import icon from "../../assets/logo.png";
import { toast } from "react-toastify";
import { signUp } from "./application/auth";
import appState from "../../data/appstate";

function SignUp() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        userType: "",
        phone: "",
        lat: "",
        long: "",
    });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    useEffect(() => {
        if (appState.isUserLoggedIn()) {
            toast.success("You are already logged in");
            navigate("/");
            return;
        }
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    console.log(result);
                    if (result.state === "granted") {
                        //If granted then you can directly call your function here
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "prompt") {
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "denied") {
                        //If denied then you have to show instructions to enable location
                        toast.error("Please grant the location permission to continue");
                    }
                });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);
    function success(pos) {
        var crd = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        setData({ ...data, lat: crd.latitude, long: crd.longitude });
    }

    function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };
    return (
        <>
            <section className="float-right relative h-screen w-screen lg:w-[45%]">
                {/* Top Left Icon and Text */}
                <div className="absolute right-3 top-3">
                    <img className="h-[75px] object-contain  mr-1" src={icon} alt="" />
                </div>

                {/* Center Item  */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
                    <h1 className="text-2xl font-black text-semiBoldColor">
                        Register to FreshNest
                    </h1>
                    <p className="font-extralight">Create an account</p>
                    <div className="pt-10"></div>
                    {/* Name Field */}
                    <div className="flex flex-col w-[100%]">
                        <label htmlFor="input">Name</label>
                        <input
                            name="name"
                            onChange={handleFieldChange}
                            type="text"
                            className="w-full mt-2 input input-bordered"
                        ></input>
                    </div>
                    <div className="pt-2"></div>
                    {/* Email Field */}
                    <div className="flex flex-col w-[100%]">
                        <label htmlFor="input">Email</label>
                        <input
                            name="email"
                            onChange={handleFieldChange}
                            type="email"
                            className="w-full mt-2 input input-bordered"
                        ></input>
                    </div>
                    <div className="pt-2"></div>
                    {/* Password Field */}
                    <div className="flex flex-col w-[100%] ">
                        <label htmlFor="input">Password</label>
                        <div className="flex flex-row items-end">
                            <input
                                name="password"
                                onChange={handleFieldChange}
                                type={passwordVisible ? "text" : "password"}
                                className="w-full mt-2 input input-bordered"
                            ></input>
                            <button
                                // className="ml-2 myButton"
                                className="ml-2 text-white btn btn-primary"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? <BiHide /> : <BiShow />}
                            </button>
                        </div>
                    </div>
                    <div className="pt-2"></div>
                    {/* Customer Type */}
                    <div className="flex flex-col w-[100%]">
                        <label htmlFor="userType">User Type</label>
                        <select
                            id="userType"
                            name="userType"
                            value={data.userType}
                            onChange={handleFieldChange}
                            className="w-full mt-2 select select-bordered"
                        >
                            <option value="">Select User Type</option>
                            <option value="user">User</option>
                            <option value="restaurant">Restaurant</option>
                        </select>
                    </div>
                    <div className="pt-2"></div>
                    {/* Phone Field */}
                    <div className="flex flex-row gap-3">
                        <div className="flex flex-col flex-2">
                            <label htmlFor="input">Phone</label>
                            <input
                                name="phone"
                                onChange={handleFieldChange}
                                type="phone"
                                className="w-full mt-2 input input-bordered"
                            ></input>
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor="input">Latitude</label>
                            <input
                                name="lat"
                                value={data.lat}
                                onChange={handleFieldChange}
                                type="number"
                                className="w-full mt-2 input input-bordered"
                            ></input>
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor="input">Longitude</label>
                            <input
                                name="long"
                                value={data.long}
                                onChange={handleFieldChange}
                                type="number"
                                className="w-full mt-2 input input-bordered"
                            ></input>
                        </div>
                    </div>
                    <div className="pt-4"></div>
                    <div className="flex flex-row items-center w-full gap-3">
                        <button
                            onClick={() => {
                                var res = signUp(data);
                                if (res) {
                                    navigate("/");
                                }
                            }}
                            className={`btn btn-primary flex-grow py-3 text-white`}
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className="mt-10">
                        <p>
                            {"Already have an account? "}
                            <Link to="/login" className="font-bold text-accentColor">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
            {/* Image Part */}
            <section className="hidden lg:block float-right h-screen lg:w-[55%]">
                <img className="w-[100%] h-[100%] object-cover" src={pattern} alt="" />
            </section>
        </>
    );

    function handleFieldChange(e) {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }
}

export default SignUp;
