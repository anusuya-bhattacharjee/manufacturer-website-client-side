import React from "react";

const Blog = () => {
  return (
    <div className="w-full md:w-2/3 mx-auto p-5 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div className="w-2/3">
          <h2 className="section-heading">Questions and Answer</h2>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <div>
          <div className="flex items-start">
            <div>
              <span className="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white font-medium text-sm">
                Q
              </span>
            </div>

            <p className="ml-4 md:ml-6">
              How will you improve the performance of a React Application?
            </p>
          </div>

          <div className="flex items-start mt-3">
            <div>
              <span className="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                A
              </span>
            </div>

            <p className="ml-4 md:ml-6 text-gray-800">
              1. Keeping component state local where necessary. 2. Memoizing
              React components to prevent unnecessary re-renders. 3.
              Code-splitting in React using dynamic import() 4. Windowing or
              list virtualization in React 5. Lazy loading images in React.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:flex md:items-center mt-8 md:ml-12">
            <div className=""></div>

            <div className="flex items-center md:ml-8">
              <div className="mr-2 w-6 h-6 overflow-hidden shadow rounded-full border-gray-500"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start">
            <div>
              <span className="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white font-medium text-sm">
                Q
              </span>
            </div>

            <p className="ml-4 md:ml-6">
              What are the different ways to manage a state in a React
              application?
            </p>
          </div>

          <div className="flex items-start mt-3">
            <div>
              <span className="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                A
              </span>
            </div>

            <p className="ml-4 md:ml-6 text-gray-800">
              There are several other ways to manage state​s in React, including
              the use of: 1. Hooks. 2. React Context API. 3. Apollo Link State.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:flex md:items-center mt-8 md:ml-12">
            <div className="flex items-center md:ml-8">
              <div className="mr-2 w-6 h-6 overflow-hidden shadow rounded-full border-gray-500"></div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-start">
            <div>
              <span className="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white font-medium text-sm">
                Q
              </span>
            </div>

            <p className="ml-4 md:ml-6">
              How does prototypical inheritance work?
            </p>
          </div>

          <div className="flex items-start mt-3">
            <div>
              <span className="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                A
              </span>
            </div>
            <p className="ml-4 md:ml-6 text-gray-800">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:flex md:items-center mt-8 md:ml-12">
            <div className="flex items-center md:ml-8">
              <div className="mr-2 w-6 h-6 overflow-hidden shadow rounded-full border-gray-500"></div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-start">
            <div>
              <span className="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white font-medium text-sm">
                Q
              </span>
            </div>

            <p className="ml-4 md:ml-6">
              What is a unit test? Why should write unit tests?
            </p>
          </div>

          <div className="flex items-start mt-3">
            <div>
              <span className="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                A
              </span>
            </div>
            <p className="ml-4 md:ml-6 text-gray-800">
              Unit testing allows the programmer to refactor code at a later
              date, and make sure the module still works correctly The procedure is to write test cases for all
              functions and methods so that whenever a change causes a fault, it
              can be quickly identified and fixed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:flex md:items-center mt-8 md:ml-12">
            <div className="flex items-center md:ml-8">
              <div className="mr-2 w-6 h-6 overflow-hidden shadow rounded-full border-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
