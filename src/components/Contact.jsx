import { Suspense, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useCan3D } from "../utils/client";
import { links } from "../constants";
import { githubMark, linkedinLogo } from "../assets";

const COOLDOWN_MS = 60_000;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const lastSentAt = useRef(0);
  const can3D = useCan3D();
  // Earth loads only as Contact approaches, so its ~3 MB never competes with the hero.
  const section = useRef(null);
  const nearView = useInView(section, { once: true, margin: "600px" });
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
    // Honeypot: real visitors never see this field, bots fill it. Pretend success.
    if (formRef.current.company.value) {
      setForm({ name: "", email: "", message: "" });
      return;
    }
    // ponytail: client-side only, a determined sender bypasses it; the EmailJS dashboard rate limit is the real guard.
    if (Date.now() - lastSentAt.current < COOLDOWN_MS) {
      alert("Thanks, your message is on its way. Please wait a minute before sending another.");
      return;
    }
    setLoading(true);
    emailjs
      .send(
        "service_8ey6w4d",
        "template_3p2rgat",
        {
          from_name: form.name,
          to_name: "Long Vo",
          from_email: form.email,
          message: form.message,
        },
        "CPK5ZX_GOMp_DzpqS"
      )
      .then(
        () => {
          setLoading(false);
          lastSentAt.current = Date.now();
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
    <div ref={section} className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact</h2>
        <p className="mt-4 text-white-100 text-[17px]">
          Email:{" "}
          <a href={`mailto:${links.email}`} className="underline underline-offset-4">
            {links.email}
          </a>
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="absolute -left-[9999px]" aria-hidden="true">
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#81FFD9]"
              required
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
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#81FFD9]"
              required
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
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#81FFD9]"
              required
            />
          </label>
          <div className="flex justify-between ">
            <button
              className="bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#81FFD9] disabled:opacity-60"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
            <div className="flex gap-3">
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img
                  loading="lazy"
                  src={linkedinLogo}
                  alt=""
                  className="w-[50px] h-[50px] rounded-xl"
                />
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img
                  loading="lazy"
                  src={githubMark}
                  alt=""
                  className="w-[50px] h-[50px] rounded-xl bg-tertiary p-2"
                />
              </a>
            </div>
          </div>
        </form>
      </motion.div>
      {can3D && nearView && (
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <Suspense fallback={null}>
            <EarthCanvas />
          </Suspense>
        </motion.div>
      )}
    </div>
  );
};

const ContactSection = SectionWrapper(Contact, "contact");

export default ContactSection;
