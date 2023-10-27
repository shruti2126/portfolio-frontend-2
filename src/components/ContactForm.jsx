/** @format */

import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  reason: "",
  message: "",
};

const ContactForm = () => {
  return (
    <Formik
      initialValues={initialState}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        axios.post("https://shrutis-io-backend.onrender.com/send-email", {
          values,
        });

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="firstname" name="firstname" />
          <ErrorMessage name="firstname" component="div" />

          <Field type="lastname" name="lastname" />
          <ErrorMessage name="lastname" component="div" />

          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
