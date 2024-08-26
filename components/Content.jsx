import React from 'react';


const Content = () => {
  return (
    <div className="bg-white p-2 rounded-lg text-black mb-10">
      <h1 className="text-2xl font-bold text-center mb-6">Save Time And Money</h1>
      <div className="flex flex-wrap justify-around mt-6 gap-4">
        <div className="bg-green-200 p-6 rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-center mb-2">Over 150+ resources</h2>
          <p className="text-center">Comprehensive including Lightroom presets, Photoshop actions, translations, 300+ wedding tracks and more.</p>
        </div>
        <div className="bg-green-200 p-6 rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-center mb-2">Originally worth $600</h2>
          <p className="text-center">Now available at just $99; offering significant savings.</p>
        </div>
        <div className="bg-green-200 p-6 rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-center mb-2">Lifetime access</h2>
          <p className="text-center">Instant download and lifetime access upon purchase.</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-around mt-6 gap-4">
        <div className="bg-green-200 p-6 rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-center mb-2">Wide Compatibility</h2>
          <p className="text-center">Works seamlessly with popular software like Lightroom, Photoshop, Premiere Pro, After Effects, and more.</p>
        </div>
        <div className="bg-green-200 p-6 rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-center mb-2">Professionally Designed</h2>
          <p className="text-center">High-quality, customizable templates and presets tailored for wedding projects.</p>
        </div>
        <div className="bg-green-200 p-6 rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-center mb-2">Proven Satisfaction</h2>
          <p className="text-center">Trusted by over 5000 users with a 9.6 out of 10 rating from 3546+ reviews.</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
