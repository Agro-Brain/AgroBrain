import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@mui/material";
import image from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://gnews.io/api/v4/search", {
          params: {
            q: "sustainable farming",
            lang: "en",
            country: "us",
            max: 9, // Increased to show more articles
            apikey: import.meta.env.VITE_NEWS_API_KEY,
          },
        });
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      <nav className="fixed top-0 right-0 left-0 z-50 bg-white bg-opacity-90 shadow-md backdrop-blur">
        <div className="flex justify-between items-center px-4 h-16 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <button onClick={() => navigate("/")} className="cursor-pointer">
              <img src={image} alt="Logo" className="w-auto h-20" />
            </button>
          </div>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 text-white bg-green-700 rounded-md transition-all duration-200 hover:bg-green-800"
          >
            Go Back
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4 mx-auto max-w-7xl">
        <h1 className="mb-12 text-4xl font-bold text-center text-green-800">
          Latest Agricultural News
        </h1>

        <AnimatePresence>
          {loading ? (
            <div className="grid gap-8 md:grid-cols-3">
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <Skeleton variant="rectangular" height={200} className="mb-4 rounded-lg" />
                  <Skeleton variant="text" width="80%" height={32} />
                  <Skeleton variant="text" width="100%" height={72} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid gap-8 md:grid-cols-3"
            >
              {news.map((article, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="overflow-hidden bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="overflow-hidden relative h-48">
                    <img
                      src={article.image || '/fallback-agriculture-image.jpg'}
                      alt={article.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.target.src = '/fallback-agriculture-image.jpg';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-green-800 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mb-4 text-gray-600 line-clamp-3">
                      {article.description}
                    </p>
                    <motion.a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-medium text-green-700 hover:text-green-900 group"
                      whileHover={{ x: 5 }}
                    >
                      Read More
                      <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default NewsPage;