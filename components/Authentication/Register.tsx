"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {loginSuccess} from "@/utils/redux/Slices/authSlice";
import {useDispatch} from "react-redux";

export default function Register({setShowLogin}: {setShowLogin: any}) {
    const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number")
    .required("Phone number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col sm:flex-row w-full justify-center items-center px-4 md:px-16 py-6">
            {/* Image Section */}
            <div className="w-full sm:w-[450px] h-[280px] sm:h-[580px] relative">
                <Image
                    src="/images/signup-image.jpg"
                    alt="Register Image"
                    fill
                    priority
                    className="object-cover sm:object-contain"
                />
            </div>

            {/* Form Section */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center items-start px-4 md:px-12 pt-10">
                <h1 className="text-2xl sm:text-3xl text-gray-800 font-semibold mb-6 tracking-[2px] text-center w-full">
                    Sign Up
                </h1>

                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        const user = {
                            id: Date.now().toString(),
                            name: `${values.firstName} ${values.lastName}`,
                            email: values.email,
                            password: values.password,
                        };

                        const token = "dummy-registration-token";
                        dispatch(loginSuccess({user, checked: false, token}));
                        setShowLogin(true);
                    }}
                >
                    {() => (
                        <Form className="w-full max-w-md space-y-2">
                            {/* First & Last Name */}
                            <div className="">
                                <label className="block text-sm mb-1">First name</label>
                                <Field
                                    name="firstName"
                                    placeholder="First name"
                                    className="w-full border rounded p-2 text-sm"
                                />
                                <ErrorMessage name="firstName" component="p" className="text-red-500 text-xs"/>
                            </div>
                            <div className="">
                                <label className="block text-sm mb-1">Last name</label>
                                <Field
                                    name="lastName"
                                    placeholder="Last name"
                                    className="w-full border rounded p-2 text-sm"
                                />
                                <ErrorMessage name="lastName" component="p" className="text-red-500 text-xs"/>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm mb-1">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email here"
                                    className="w-full border rounded p-2 text-sm"
                                />
                                <ErrorMessage name="email" component="p" className="text-red-500 text-xs"/>
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm mb-1">Phone number</label>
                                <div className="flex gap-2">
                                    <Field
                                        as="select"
                                        name="countryCode"
                                        className="border rounded p-2 text-sm w-20"
                                    >
                                        <option value="+91">IN +91</option>
                                        <option value="+1">US +1</option>
                                    </Field>
                                    <Field
                                        type="text"
                                        name="phone"
                                        placeholder="Enter Number"
                                        className="w-full border rounded p-2 text-sm"
                                    />
                                </div>
                                <ErrorMessage name="phone" component="p" className="text-red-500 text-xs"/>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm mb-1">Create Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    className="w-full border rounded p-2 text-sm"
                                />
                                <ErrorMessage name="password" component="p" className="text-red-500 text-xs"/>
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-sm mb-1">Confirm Password</label>
                                <Field
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Re-Enter Password"
                                    className="w-full border rounded p-2 text-sm"
                                />
                                <ErrorMessage
                                    name="confirmPassword"
                                    component="p"
                                    className="text-red-500 text-xs"
                                />
                            </div>

                            <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2"/>
                                    <span className={'pb-1'}>
                                        Show password
                                    </span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-primary text-white px-10 py-2.5 rounded text-sm hover:bg-red-800"
                                >
                                    CREATE ACCOUNT
                                </button>
                            </div>

                            {/* Already Account */}
                            <p className="text-sm mt-4 text-center w-full text-muted-foreground">
                                Already have an account?{" "}
                                <Link href="#" className="text-muted-foreground underline"
                                      onClick={() => setShowLogin(true)}>
                                    Click here
                                </Link>
                            </p>
                        </Form>
                    )}
                </Formik>


            </div>
        </div>
    );
}
