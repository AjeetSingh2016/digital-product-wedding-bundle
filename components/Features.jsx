import React from "react";
import Image from "next/image";
import exampleImage from "../assets/lady.webp"; // Adjust the path to your image
const Features = () => {
  return (
    <div className="flex-col justify-center ">
      {" "}
      <div className="justify-center items-center flex mb-10">
        <div className="w-5/6">
          <h2 className="text-2xl text-center font-bold mb-10">
            Everything You'll Get Inside:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:px-2">
            <div
              style={{ backgroundColor: "#aef47f" }}
              className=" p-4 rounded-lg shadow-md min-h-[400px] md:py-24 "
            >
              <ul className="list-disc list-inside space-y-2 text-xs md:text-lg font-semibold">
                <li>Wedding Video Invitation - Worth ₹7000</li>
                <li>Premiere Pro Transition Pack - Worth ₹7500</li>
                <li>Wedding Album Template - Worth ₹5000</li>
                <li>Premiere Pro Effects Preset - Worth ₹6000</li>
                <li>Wedding Title Animation - Worth ₹3500</li>
                <li>Wedding Caricature Template - Worth ₹3000</li>
                <li>Birthday Album Template - Worth ₹2000</li>
                <li>Ultimate Retouch Panel - Worth ₹1500</li>
                <li>Wedding Text Logo Bundle - Worth ₹1000</li>
                <li>Wedding Invitation Card - Worth ₹1500</li>
                <li>Video Overlay Pack - Worth ₹2500</li>
                <li>Wedding Lightroom Presets - Worth ₹2000</li>
                <li>Wedding Font Collection - Worth ₹500</li>
              </ul>
            </div>
            <div className="relative bg-green-500 rounded-lg shadow-md overflow-hidden min-h-[400px]">
              <Image
                src={exampleImage}
                alt="Features Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
