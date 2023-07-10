// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from "@emailjs/browser";
// eslint-disable-next-line import/no-extraneous-dependencies
import toast, { Toaster } from "react-hot-toast";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormik } from "formik";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Yup from "yup";
import { IMail } from "~/interfaces/email";
import { IContact } from "~/interfaces/contact";
import { createElement, useRef } from "react";

import { content } from "../../constant/Content";

interface IProps {
  Contact: IContact;
}

function ContactMe() {
  const { Contact }: IProps = content;
  const form = useRef<any>();

  // Sending email
  const formik = useFormik<IMail>({
    initialValues: {
      from_name: "",
      user_email: "",
      message: "",
    },

    validationSchema: Yup.object().shape({
      from_name: Yup.string().required("Field is required"),
      user_email: Yup.string().required("Field is required"),
      message: Yup.string().required("Field is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      emailjs
        .sendForm(
          "service_ke8vxt6",
          "template_pdxrbjv",
          form.current,
          "x0grGR7AxA-ZvYuAQ",
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          },
        );
      toast.success("Email send sucessfully");
      formik.resetForm();
    },
  });

  return (
    <section
      className="bg-dark_primary dark:bg-secundaryLinear text-white w-full"
      id="contact"
    >
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white">{Contact.title}</h2>
        <h4 className="subtitle">{Contact.subtitle}</h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={formik.handleSubmit}
            action=""
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5 "
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              value={formik.values.from_name}
              onChange={formik.handleChange}
              className="border border-slate-600 p-3 rounded dark:border-white dark:text-white"
            />
            <input
              type="text"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              value={formik.values.user_email}
              onChange={formik.handleChange}
              className="border border-slate-600 p-3 rounded dark:border-white dark:text-white"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              className="border border-slate-600 p-3 rounded h-44 dark:border-white dark:text-white"
            />
            <button
              type="submit"
              className="btn self-start bg-white text-dark_primary  dark:text-secundaryLinear dark:"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {" "}
            {Contact.social_media.map((contact, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                data-aos="fade-down"
                data-aos-delay={index * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(contact.icon)}</h4>
                <a
                  href={contact.link}
                  className="font-Poppins"
                  target="_blank"
                  rel="noreferrer"
                >
                  {contact.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
