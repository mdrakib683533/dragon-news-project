import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";

const Carrer = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Navbar />
        </div>
      </div>

      {/* Career Section */}
      <div className="max-w-5xl mx-auto mt-10 px-6">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            News Reporter Career
          </h1>

          {/* Section 1 */}
          <div className="border border-red-300 bg-gray-50 p-5 rounded-lg mb-5">
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              Role of a News Reporter
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              A news reporter plays a very important role in society. They
              collect, verify, and present news stories to the public. Reporters
              work for newspapers, television channels, radio stations, and
              online news platforms.
            </p>
          </div>

          {/* Section 2 */}
          <div className="border border-blue-300 bg-gray-50 p-5 rounded-lg mb-5">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Skills Needed to Become a Reporter
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become a successful news reporter, a person needs strong
              communication skills, curiosity, and the ability to investigate
              facts. Reporters often travel to different locations to gather
              information, interview people, and report events as they happen.
            </p>
          </div>

          {/* Section 3 */}
          <div className="border border-green-300 bg-gray-50 p-5 rounded-lg mb-5">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              Digital Journalism in Modern Times
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              In the digital age, news reporters also use modern technology and
              social media to deliver breaking news quickly. Online journalism
              has created many new opportunities for young journalists.
            </p>
          </div>

          {/* Section 4 */}
          <div className="border border-yellow-400 bg-gray-50 p-5 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">
              Why Choose Journalism as a Career
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              If you are passionate about storytelling, truth, and informing the
              public, a career in journalism can be exciting and rewarding.
            </p>
          </div>

          {/* Button */}
          <div className="text-center">
            <Link
              to="/"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrer;