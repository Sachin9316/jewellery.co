"use client";
import React, {useState} from "react";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {toast} from "sonner";
import {Loader} from "lucide-react";


const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
})

function SubscribeSection() {
    const {isAuthenticated} = useSelector((state: RootState) => state.auth);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values: { email: string }, {resetForm}: any) => {
        setLoading(true)
        try {
            const res = await fetch(
                `/api/send-email`,
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        to: values.email,
                        subject: "Newsletter Subscription",
                        message: `<p>New subscriber: ${values.email}</p>`,
                    }),
                }
            );

            const data = await res.json();
            if (data.success) {
                toast.success("Email sent successfully!", {position: "top-right"});
                resetForm();
            } else {
                toast.error("Failed to send email", {position: "top-right"});
            }
        } catch (error) {
            toast.error("Something went wrong! Try again.", {position: "top-right"});
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full px-4 bg-chart-1 py-10 md:my-10">
            <div className="font-light tracking-[0.1em] uppercase text-xl sm:text-2xl text-center">
                become a member and get exclusive deals
            </div>

            <div className="flex flex-col items-center justify-start mt-8 w-full">
                <Formik
                    initialValues={{email: ""}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({errors, touched}) => (
                        <Form
                            className="relative flex flex-col gap-3 items-center sm:items-start w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
                            <div className="relative w-full">
                                <div className="text-muted-foreground text-sm pb-1">
                                    Subscribe to our newsletter to stay in the loop.
                                </div>

                                <div className={'relative w-full'}>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email here."
                                        className={`w-full bg-white p-4 pr-16 focus:outline-none text-sm border-2 rounded-md ${
                                            errors.email && touched.email
                                                ? "border-red-500"
                                                : "border-muted-foreground"
                                        }`}
                                    />

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`${
                                            isAuthenticated ? "bg-destructive" : "bg-primary"
                                        } px-10 bottom-0 h-14 w-14 absolute right-0 rounded-md flex items-center justify-center hover:bg-red-700 transition-all`}
                                    >
                                        {
                                            loading ? (
                                                <div className={'animate-spin'}>
                                                    <Loader color={'white'}/>
                                                </div>
                                            ) : (
                                                <Image
                                                    src="/icons/send.svg"
                                                    alt="Send"
                                                    fill
                                                    className="p-4"
                                                />
                                            )
                                        }
                                    </button>

                                </div>


                                <ErrorMessage
                                    name="email"
                                    component="p"
                                    className="text-red-500 text-xs mt-1"
                                />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default SubscribeSection;
