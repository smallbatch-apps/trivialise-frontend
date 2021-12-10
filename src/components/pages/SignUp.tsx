import { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BlueBox from "../layout/BlueBox";

import { userService } from "../../services/UserService";

import PlanningHero from "../../images/heroes/planning.jpg";
interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  tandc: boolean;
}
const SignUp: FC = () => {
  const handleSubmit = (values: FormValues) => {
    userService
      .create(values)
      .then(() => {
        window.location.href = "/login";
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {});
  };

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
    name: Yup.string().required("Name is required"),
    tandc: Yup.bool().oneOf([true], "Terms and Conditions must be checked"),
  });

  return (
    <>
      <BlueBox hero={PlanningHero}>
        <h2 className="text-6xl mb-8 font-oswald">Sign Up</h2>

        <p>
          Create your Trivialize account and start storing questions. You don't need to set up any payments now, but you can upgrade when you're ready
          to start making events.
        </p>

        <div className="mt-8">
          <span className="rounded border border-white p-3 px-4 hover:bg-blue-600">View Packages</span>
          <span className="rounded border border-white p-3 px-4 bg-white text-blue-500 hover:bg-blue-600 ml-5">Just want to log in?</span>
        </div>
      </BlueBox>

      <div className="px-5 py-3 sm:px-8 sm:py-5 md:px-16 md:py-10 lg:px-20 lg:py-16 xl:px-60 xl:py-20 2xl:px-72 2xl:py-32 font-light">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            tandc: false,
            newsletter: false,
          }}
          validationSchema={validate}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 col-span-2 md:col-span-1">
                <label htmlFor="name" className="w-full block text-gray-900">
                  Your full name
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Your full name..."
                  className="w-full font-light mt-2 border-0 bg-gray-100 text-gray-300 p-2 px-3 rounded"
                />
                <ErrorMessage name="name" component="div" className="bg-red-50 text-red-400 border border-red-200 p-2 mt-3" />

                <label htmlFor="email" className="w-full block text-gray-900 mt-8">
                  Email address
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Your email address..."
                  className="w-full font-light mt-2 border-0 bg-gray-100 text-gray-300 p-2 px-3 rounded"
                />
                <ErrorMessage name="email" component="div" className="bg-red-50 text-red-400 border border-red-200 p-2 mt-3" />

                <label htmlFor="password" className="w-full block text-gray-900 mt-8">
                  Set password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Your password..."
                  className="w-full font-light mt-2 border-0 bg-gray-100 text-gray-300 p-2 px-3 rounded"
                />
                <ErrorMessage name="password" component="div" className="bg-red-50 text-red-400 border border-red-200 p-2 mt-3" />

                <label htmlFor="confirmPassword" className="w-full block text-gray-900 mt-8 ">
                  Confirm password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password..."
                  className="w-full font-light mt-2 border-0 bg-gray-100 text-gray-300 p-2 px-3 rounded"
                />
                <ErrorMessage name="confirmPassword" component="div" className="bg-red-50 text-red-400 border border-red-200 p-2 mt-3" />

                <button
                  type="submit"
                  className="p-6 hidden md:inline-block py-3 text-lg font-light tracking-wider mt-8 bg-red-600 text-white rounded"
                >
                  Create account
                </button>
              </div>
              <div className="shadow rounded p-5 col-span-2 md:col-span-1">
                <h2 className="text-xl text-gray-600 uppercase">Your Account</h2>
                <hr className="mt-3" />
                <div className="flex justify-between mt-3 mx-5">
                  <span>Monthly Cost</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between mt-2 mb-3 mx-5">
                  <span>Access Length</span>
                  <span className="font-semibold">Infinite</span>
                </div>
                <hr />
                <div className="flex mt-6 mb-3">
                  <span className="px-5">
                    <i className="fal fa-check"></i>
                  </span>
                  <span>Manage questions and answers for future events, store and search, and tag to find them more easily.</span>
                </div>
                <div className="flex mt-6 mb-3">
                  <span className="px-5">
                    <i className="fal fa-clock"></i>
                  </span>
                  <span>
                    Prepare and create events, add rounds, and assign questions into them. Build custom slideshow to help you run the event. - Coming
                    Soon!
                  </span>
                </div>
                <div className="flex mt-6 mb-3">
                  <span className="px-5">
                    <i className="fal fa-clock"></i>
                  </span>
                  <span>
                    Full digital event management, including registrations, digital scoring assistance, event leaderboards and more - Coming Less
                    Soon!
                  </span>
                </div>
                <div className="flex mt-6 mb-3">
                  <span className="px-5">
                    <i className="fal fa-clock"></i>
                  </span>
                  <span>Online events with team setup, registration, team chat or video rooms, and host video broadcast. - Coming Eventually!</span>
                </div>
                <hr />
                <div className="mt-3 flex">
                  <div>
                    <Field type="checkbox" name="tandc" className="mx-5" />
                  </div>
                  <div>
                    <div className="w-full">Terms of Service</div>
                    <div className="text-xs w-full text-gray-500">I agree to the terms of service</div>
                    <ErrorMessage name="tandc" className="text-red-500 text-sm" />
                  </div>
                </div>
                <div className="mt-3 flex">
                  <div>
                    <Field type="checkbox" name="newsletter" className="mx-5" />
                  </div>
                  <div>
                    <div className="w-full">Newsletter Signup</div>
                    <div className="text-xs w-full text-gray-500">I want to receive occasional updates of new features.</div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="p-6 md:hidden mt-5 mx-auto py-3 text-lg font-light tracking-wider bg-red-600 text-white rounded">
              Create account
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SignUp;
