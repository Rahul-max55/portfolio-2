import React, { useRef } from "react";
import { AiFillProfile } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import { contactSchema } from "../validation/contact";

const Contact = ({ color }) => {
  const bgValue = { backgroundColor: color };
  const textValue = { color: color };
  const borderValue = { borderColor: color };

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const form = useRef();

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: async (formData) => {
      console.log(form);
      console.log(formData);

      try {
        const result = await emailjs.sendForm(
          "service_7rc752a",
          "template_288nhy1",
          form.current,
          "LNtinvAM9sLrjV2gO",
        );
       if(!result.status){
        alert("message is not send to the Rahul Birla");
       }

       alert("message is successfuly send to the Rahul");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className="bg-[#222] min-h-screen text-white"
      >
        <div className=" p-10 text-4xl font-extrabold flex items-center justify-center">
          <h1>CONTACT </h1>
          <span style={textValue} className="text-yellow-400 mx-2">
            ME
          </span>
        </div>
        <div className="flex pb-10 justify-center items-center text-center ">
          <hr style={bgValue} className="bg-yellow-400 w-20 h-1" />
          <span className="px-4 text-center opacity-80">
            I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
          </span>
          <hr style={bgValue} className="bg-yellow-400 w-20 h-1" />
        </div>

        {/* Context details */}

        <div className=" pb-14 w-10/12 m-auto min-h-fit flex-col md:flex-row flex justify-between items-center lg:items-center">
          <div className="w-11/12 lg:w-3/12 flex flex-col justify-center items-start">
            <span className="flex  flex-col py-4 items-start justify-center">
              <h3 className="px-2 pl-0 opacity-80">Phone </h3>
              <span className="flex items-center justify-center">
                <BsWhatsapp className="mr-4" /> +91 9907761728
              </span>
            </span>

            <span className="flex  flex-col py-4 items-start justify-center">
              <h3 className="px-2 pl-0 opacity-80">Email: </h3>
              <span className="flex items-center justify-center">
                <BsWhatsapp className="mr-4" /> birlarahul340@gmail.com
              </span>
            </span>
            <span className="flex  flex-col py-4 items-start justify-center">
              <h3 className="px-2 pl-0 opacity-80">Address </h3>
              <span className="flex items-center justify-center">
                <BsWhatsapp className="mr-4" /> Indore
              </span>
            </span>
          </div>
          <div className=" w-full sm:w-9/12 pb-3 min-h-80 flex  flex-col items-center justify-between">
            <h3 className="text-lg py-6 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quo dolore porro.
            </h3>
            <form
            ref={form}
              onSubmit={handleSubmit}
              className="w-screen sm:w-full flex items-center p-4 justify-between flex-col "
            >
              <div className="flex w-full lg:w-11/12 justify-between items-center ">
                <div class="flex items-center w-5/12 sm:w-5/12 bg-[#333] border-[#444] border rounded-full p-2 space-x-2 relative">
                  <AiFillProfile />
                  <input
                    className="flex-1 bg-transparent focus:outline-none overflow-hidden"
                    type="text"
                    placeholder="Enter something..."
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                {errors.name && <p className="text-red-400 absolute -top-12 lg:-top-6">{errors.name}</p>}
                </div>

                <div class="flex items-center relative  w-5/12 sm:w-5/12 bg-[#333] border-[#444] border rounded-full p-2 space-x-2">
                  <AiFillProfile />
                  <input
                    className="bg-transparent focus:outline-none overflow-hidden"
                    type="text"
                    placeholder="Enter something..."
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                {errors.email && <p className="text-red-400 absolute -top-12 lg:-top-6">{errors.email}</p>}
                </div>
              </div>
             
              {errors.message && (
                <p className="text-red-400 mt-2 w-full lg:w-11/12 md:ml-8 text-left">{errors.message}</p>
              )}
              <textarea
                name="message"
                id="message"
                cols="10"
                rows="5"
                value={values.message}
                placeholder="Write Your Message"
                className={`${!errors.message && "m-4 p-2"} mb-4 bg-[#333] w-full lg:w-11/12  border border-[#444] outline-none  resize-none rounded-lg`}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <button
                style={{ ...borderValue, ...bgValue }}
                type="submit"
                className="flex px-3 py-1 items-center justify-center bg-yellow-500 transition-colors text-base xl:text-lg font-medium text-white space-x-2 rounded-full shadow-lg border-2 border-yellow-400 hover:bg-transparent"
              >
                <CgProfile /> <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/*end Context details */}
      </motion.div>
    </>
  );
};

export default Contact;
