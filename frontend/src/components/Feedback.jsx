import React, { useState } from "react";
import { FaLeaf, FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSuccess = () => {
    toast.success("🌱 Feedback successfully submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white" id="contact">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="inline-block p-4 mb-4 bg-green-100 rounded-full"
          >
            <FaLeaf className="text-4xl text-green-700" />
          </motion.div>
          <h2 className="mb-4 text-4xl font-bold font-playfair">
            <span className="text-gray-800">Cultivate</span>{" "}
            <span className="text-[#5DB996]">Connection</span>
          </h2>
          <p className="text-lg text-gray-600">
            Your insights help us grow better solutions for modern agriculture
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="p-8 bg-white border border-green-100 shadow-xl rounded-2xl"
          >
            <form
              action="https://formsubmit.co/agrobrain.ai@gmail.com"
              method="POST"
              onSubmit={handleSuccess}
              className="space-y-6"
            >
              {/* Disable captcha and redirect on submit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />

              <div className="space-y-4">
                <div className="relative">
                  <FaUser className="absolute text-green-600 top-4 left-4" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full py-3 pl-12 pr-4 transition-all border border-green-200 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute text-green-600 top-4 left-4" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full py-3 pl-12 pr-4 transition-all border border-green-200 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>

                <div className="relative">
                  <FaCommentDots className="absolute text-green-600 top-4 left-4" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your agricultural insights..."
                    className="w-full h-40 py-3 pl-12 pr-4 transition-all border border-green-200 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                    maxLength={500}
                  />
                  <span className="absolute text-sm text-gray-400 bottom-2 right-3">
                    {formData.message.length}/500
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex items-center justify-center w-full gap-2 px-6 py-4 font-medium text-white transition-colors bg-green-700 rounded-lg hover:bg-green-800"
              >
                <FaLeaf className="text-lg" />
                Submit Feedback
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="hidden lg:block relative bg-green-700 rounded-2xl overflow-hidden min-h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Farm Consultation"
              className="object-cover w-full h-full opacity-90"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 mt-10 bg-gradient-to-t from-green-900/90">
              <h3 className="mb-3 text-2xl font-semibold text-white">
                Why Your Feedback Matters
              </h3>
              <p className="leading-relaxed text-green-100">
                At AgroTech, we believe in growing together. Your experiences shape our
                agricultural solutions, helping us develop smarter tools for sustainable
                farming and crop management.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} />
    </section>
  );
};

export default FeedbackForm;
