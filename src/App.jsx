import React from "react";

import pp from "./assets/pic.jpg";
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Navbar from "./Navbar";


function App() {


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200">
      {/* Navbar */}
     <Navbar></Navbar>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-20 py-12">
        {/* Text */}
        <div className="space-y-4 text-center lg:text-left">
          <p className="text-lg text-gray-700">Hello, I am</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900">
            Valentine
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-indigo-700">
            Fullstack Web & App Developer
          </h2>
          <p className="text-gray-700">Based in Cameroon</p>

        
        </div>

        {/* Image */}
        <div className="mb-8 lg:mb-0">
          <img
            src={pp}
            alt="Profile"
            className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] object-cover rounded-full shadow-xl border-4 border-indigo-600"
          />
        </div>
      </section>
      <About></About>
<Services />
<Contact />
    </div>
  );
}

export default App;
