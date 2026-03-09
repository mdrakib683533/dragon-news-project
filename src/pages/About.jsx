import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Navbar />
        </div>
      </div>

      {/* About Section */}
      <div className="mx-auto mt-12 px-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10">
          {/* Title */}
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About Breaking News
          </h1>

          {/* Content */}
          <div className="space-y-6">
            <div className="p-5 border-l-4 border-red-500 bg-gray-50 rounded-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                Breaking News is a modern online news platform that delivers the
                latest updates from around the world. Our mission is to provide
                accurate, reliable, and real-time news to keep people informed
                about important events.
              </p>
            </div>
            <div className="p-5 border-l-4 border-green-500 bg-gray-50 rounded-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                Breaking News is a digital news platform dedicated to delivering timely and trustworthy information from around the globe. Our goal is to keep readers informed with accurate reports, breaking headlines, and meaningful stories that matter most.
              </p>
            </div>
            <div className="p-5 border-l-4 border-blue-500 bg-gray-50 rounded-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                Breaking News is committed to sharing real-time updates and insightful stories from around the world. Our team focuses on delivering credible journalism that helps readers understand current events quickly and clearly.
              </p>
            </div>

            <div className="p-5 border-l-4 border-yellow-500 bg-gray-50 rounded-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                We cover a wide range of topics including politics, technology,
                business, sports, and entertainment. Our team of dedicated
                journalists works hard to ensure that every news article is
                trustworthy and up-to-date.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-gray-50 rounded-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                With a simple and user-friendly interface, Breaking News allows
                readers to easily explore trending stories, latest headlines,
                and in-depth reports from across the globe.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-10">
            <Link
              to="/"
              className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
