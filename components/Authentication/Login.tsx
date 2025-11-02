"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {loginSuccess} from "@/utils/redux/Slices/authSlice";
import {toast} from "sonner";

export default function Login({setShowLogin}: { setShowLogin: any }) {
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });
    const dispatch = useDispatch();
const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col sm:flex-row w-full justify-center items-center pt-1 md:pt-16">
            {/* Image Section */}
            <div className="w-full sm:w-[450px] h-[280px] sm:h-[580px] relative">
                <Image
                    src="/images/login-image.jpg"
                    alt="Login"
                    fill
                    priority
                    className="object-cover sm:object-contain p-4 sm:p-0"
                />
            </div>

            {/* Form Section */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center items-center p-6">
                <h1 className="text-4xl font-sans sm:text-3xl font-normal tracking-wide mb-6 sm:mb-8">
                    Log In
                </h1>

                <Formik
                    initialValues={{email: "", password: ""}}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        const storedUser = localStorage.getItem("user");
                        const storedToken = localStorage.getItem("token");

                        if (!storedUser || !storedToken) {
                            alert("No user found. Please register first.");
                            return;
                        }

                        const user = JSON.parse(storedUser);

                        console.log({
                            user
                        })

                        if (values.email === user.email && values.password === user.password) {
                            dispatch(loginSuccess({user, checked: true, token: storedToken}));
                            localStorage.setItem("isLoggedIn", JSON.stringify(true));
                            toast.success("Logged in successfully.", {
                                position: "top-right",
                            });
                        } else {
                            toast.error("Invalid email or password", {
                                position: "top-right",
                            });
                        }
                    }}
                >
                    <Form className="w-full max-w-md space-y-5">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Email
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email here"
                                className="w-full border border-gray-300 rounded p-2.5 sm:p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                            <ErrorMessage
                                name="email"
                                component="p"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-1">
                                Password
                            </label>
                            <Field
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                className="w-full border border-gray-300 rounded p-2.5 sm:p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                            <ErrorMessage
                                name="password"
                                component="p"
                                className="text-red-500 text-sm mt-1"
                            />

                            <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                                <label className="flex items-center">
                                   <input
      type="checkbox"
      className="mr-2"
      checked={showPassword}
      onChange={() => setShowPassword(prev => !prev)}
    />
                                    <span className={''}>
                                        Show password
                                    </span>
                                </label>
                                <Link href="#" className="hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-center w-full">
                            <button
                                type="submit"
                                className="bg-primary text-white px-10 sm:px-16 p-1 rounded-xs hover:bg-red-800 transition"
                            >
                                LOG IN
                            </button>
                        </div>
                    </Form>
                </Formik>

                {/* Register Link */}
                <p className="text-sm mt-6 text-gray-600">
                    Don’t have an account?{" "}
                    <Link href="#" className="text-black font-medium hover:underline"
                          onClick={() => setShowLogin(false)}>
                        Register Here
                    </Link>
                </p>
            </div>
        </div>
    );
}
