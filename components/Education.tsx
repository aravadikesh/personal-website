import React from "react";
import SlideUp from "./SlideUp";

const Education = () => {
  return (
    <section id="education" className="bg-white dark:bg-stone-900">
      <h1 className="my-10 text-center font-bold text-4xl bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
        Education
        <a
          href="/transcript.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-sm text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
        >
          View Transcript
        </a>
        <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-r from-teal-500 to-cyan-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2">
            {/* Graduate Education */}
            <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-xl p-6 border border-teal-100 dark:border-teal-900 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  Master of Science in Computer Science
                </h2>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  University of Massachusetts Amherst
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Expected Graduation: May 2026
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-semibold">
                  GPA: 4.0
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Concentration:</h4>
                  <p className="text-gray-600 dark:text-gray-300">Data Science</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Graduate Bay State Scholarship</li>
                    <li>Data Science for the Common Good Fellow (Summer 2025)</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Machine Learning",
                      "Reinforcement Learning",
                      "Trustworthy & Responsible AI",
                      "Advanced Natural Language Processing",
                      "Algorithms for Data Science",
                      "Advanced Information Retrieval",
                      "Statistics",
                    ].map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900 dark:to-cyan-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SlideUp>

        <SlideUp offset="-300px 0px -300px 0px">
          <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2">
            {/* Undergraduate Education */}
            <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-xl p-6 border border-teal-100 dark:border-teal-900 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  Bachelor of Science in Computer Science with a Minor in Economics
                </h2>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  University of Massachusetts Amherst
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Graduated May 2024
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-semibold">
                  GPA: 3.93
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Chancellor&apos;s Scholarship</li>
                    <li>Dean&apos;s List (All Semesters)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Software Engineering",
                      "Data Structures & Algorithms",
                      "Advanced Algorithms",
                      "Operating Systems",
                      "Database Management",
                    ].map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900 dark:to-cyan-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
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
