import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_3p2rgat
// service_8ey6w4d
// publickey: CPK5ZX_GOMp_DzpqS
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const linkedInUrl = "https://www.linkedin.com/in/long-vo/";
  const linkedInImage =
    "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"; // Or a local path if you have the image saved locally
  const gitHubUrl = "https://github.com/longvo-cv";
  const gitHubImage =
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"; // Or a local path if you have the image saved locally
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_8ey6w4d",
        "template_3p2rgat",
        {
          from_name: form.name,
          to_name: "Long Vo",
          from_email: form.email,
          to_email: "longvo.cv@gmail.com",
          message: form.message,
        },
        "CPK5ZX_GOMp_DzpqS"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <div className="flex justify-between ">
            <button
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
              type="submit"
            >
              {loading ? "Sending..." : "Sent"}
            </button>
            <div className="flex gap-3">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={linkedInImage}
                  alt="LinkedIn"
                  className="w-[50px] h-[50px] rounded-xl"
                />
              </a>
              <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={gitHubImage}
                  alt="GitHub"
                  className="w-[50px] h-[50px] rounded-xl"
                />
              </a>
            </div>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
