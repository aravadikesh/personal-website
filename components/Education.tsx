import React from "react";
import SlideUp from "./SlideUp";

const Education = () => {
  return (
    <section id="education">
      <h1 className="my-10 text-center font-bold text-4xl">
        Education
        <a 
          href="/transcript.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ml-4 text-sm text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
        >
          View Transcript
        </a>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2">
            {/* Graduate Education */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-teal-600 mb-2">
                Master of Science in Computer Science
              </h2>
              <h3 className="text-xl font-semibold mb-2">
                University of Massachusetts Amherst
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Expected Graduation: May 2026
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                GPA: 4.0
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Concentration:</h4>
                <p className="text-gray-600 dark:text-gray-300">Data Science</p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Bay State Scholar</li>
                  <li>Data Science for the Common Good Fellow (Summer 2025)</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Modern Neural Networks",
                    "Reinforcement Learning",
                    "Security & Privacy in GenAI",
                    "Advanced Natural Language Processing",
                    "Algorithms for Data Science",
                  ].map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SlideUp>

        <SlideUp offset="-300px 0px -300px 0px">
          <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2">
            {/* Undergraduate Education */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-teal-600 mb-2">
                Bachelor of Science in Computer Science with a Minor in Economics
              </h2>
              <h3 className="text-xl font-semibold mb-2">
                University of Massachusetts Amherst
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Graduated May 2024
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                GPA: 3.932
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Chancellor&apos;s Award recipient ($64,000)</li>
                  <li>Dean&apos;s List (All Semesters)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Software Engineering (Typescript)",
                    "Data Structures & Algorithms",
                    "Advanced Algorithms",
                    "Game Programming (C#)",
                    "Operating Systems (C/C++)",
                    "Database Management (SQL)",
                    "Intelligent Visual Computing",
                    "Search Engines",
                  ].map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SlideUp>
      </div>

      {/* Add gap at the end of section */}
      <div className="h-24 sm:h-32"></div>
    </section>
  );
};

export default Education;
