import { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { loginService } from "../../services/LoginService";

import BlueBox from "../layout/BlueBox";
import Hero from "../../images/heroes/books-2.jpg";

const LogIn: FC = () => {
  const handleSubmit = (values: { email: string; password: string }) => {
    loginService
      .logIn(values.email, values.password)
      .then(({ data }) => {
        loginService.saveUser(data);
        window.location.href = "/";
      })
      .catch(() => {})
      .finally(() => {});
  };

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Enter your email"),
    password: Yup.string().required("Enter your password"),
  });

  return (
    <>
      <BlueBox hero={Hero}>
        <h2 className="text-6xl mb-8 font-oswald">Log In To Trivialize</h2>
      </BlueBox>

      <div className="px-5 py-3 sm:px-8 sm:py-5 md:px-16 md:py-10 lg:px-20 lg:py-16 xl:px-60 xl:py-20 2xl:px-72 2xl:py-32 font-light">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="shadow rounded p-5 w-1/2 mx-auto">
              <label htmlFor="email" className="w-full block text-gray-900">
                Your email address
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Your email address..."
                className="w-full font-light mt-2 border-0 bg-gray-100 text-gray-600 p-2 px-3 rounded"
              />
              <ErrorMessage name="email" component="div" className="bg-red-50 text-red-400 rounded-b p-1 px-2 m-2 mt-0" />

              <label htmlFor="password" className="w-full block text-gray-900 mt-5">
                Your password
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Your password..."
                className="w-full font-light mt-2 border-0 bg-gray-100 text-gray-600 p-2 px-3 rounded"
              />
              <ErrorMessage name="password" component="div" className="bg-red-50 text-red-400  rounded-b p-1 px-2 m-2 mt-0" />

              <button type="submit" className="p-6 hidden md:inline-block py-3 text-lg font-light tracking-wider bg-red-600 text-white rounded mt-4">
                Log In
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default LogIn;
