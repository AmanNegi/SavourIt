import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import pattern from "../../assets/pattern.png";
import icon from "../../assets/logo.png";
import login from "./application/auth";
import appState from "../../data/appstate";
import { toast } from "react-toastify";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (appState.isUserLoggedIn()) {
            toast.success("You are already logged in");
            navigate("/");
        }
    }, []);
    return (
        <>
            <section className="float-left relative h-screen w-screen lg:w-[45%]">
                {/* Top Left Icon and Text */}
                <div className="absolute left-3 top-3">
                    <img className="h-[75px] object-contain  mr-1" src={icon} alt="" />
                </div>

                {/* Center Item  */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
                    <h1 className="text-2xl font-black">Welcome to SavourIt</h1>
                    <p className="font-extralight">Please enter your details</p>
                    <div className="pt-10"></div>

                    {/* Email Field */}

                    <div className="flex flex-col w-[100%]">
                        <label htmlFor="input">Email</label>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value.toLowerCase());
                            }}
                            value={email}
                            type="email"
                            placeholder=""
                            className="w-full mt-2 input input-bordered"
                        />
                    </div>
                    <div className="pt-2"></div>
                    {/* Password Field */}
                    <div className="flex flex-col w-[100%] ">
                        <label htmlFor="input">Password</label>
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                            type="text"
                            className="w-full mt-2 input input-bordered"
                        ></input>
                    </div>
                    <div className="pt-5"></div>
                    {/* Button */}
                    <button
                        onClick={() => {
                            var res = login(email, password);
                            if (res) {
                                navigate("/");
                            }
                        }}
                        className={`btn btn-primary text-white w-full py-3 mb-4`}
                    >
                        Login
                    </button>

                    <div className="mt-10">
                        <p>
                            {"Don't have an account? "}
                            <Link to="/signup" className="font-bold text-accentColor">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
            {/* Image Part */}
            <section className="hidden lg:block float-right h-screen lg:w-[55%] bg-green-300">
                <img className="w-[100%] h-[100%] object-cover" src={pattern} alt="" />
            </section>
        </>
    );
}

export default Login;
