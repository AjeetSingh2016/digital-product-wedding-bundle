"use client"; // Marking this as a Client Component

import React, { useEffect } from "react";
import Image from "next/image";
import thankYouImg from "@/public/assets/grateful.png"; // Replace with the path to your thank you image

const ThankYouPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Purchase", {
        value: 199, // Example value, replace with your actual value
        currency: "INR",
      });
      console.log("Purchase event tracked successfully.");
    } else {
      console.log("Facebook Pixel is not initialized.");
    }
  }, []);

  const handleRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      // Redirect to Gmail's web interface for Android
      window.location.href = 'https://mail.google.com';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Redirect to a generic email service for iOS
      window.location.href = 'https://mail.google.com';
    } else {
      // Fallback for desktops and other platforms
      window.location.href = 'https://mail.google.com';
    }
  };

  return (
    <section className="relative py-10 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-4xl text-center">
        {/* Thank You Message */}
        <div className="mb-8">
          <h1
            className="text-3xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
            data-aos-delay={150}
          >
            DigiProductMart
          </h1>
        </div>

        {/* Thank You Image */}
        <div className="mb-8 flex justify-center">
          <Image
            src={thankYouImg}
            alt="Thank You"
            className="w-64 h-64 object-cover" // Fixed size: 16rem x 16rem
          />
        </div>

        <p
          className="text-lg text-gray-800 mb-10"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          Your access link has been sent. <br />Please check your email or click the button below to visit your inbox.
          <br /> <span className="font-semibold mt-5">
            Make sure you loged in with same email you shared with us
          </span>
        </p>

        {/* Inbox Redirect Button */}
        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-delay={450}
        >
          <button
            className="p-4 px-10 btn bg-gradient-to-t from-green-600 to-green-500 text-white rounded shadow hover:bg-green-700"
            onClick={handleRedirect}
          >
            <span className="relative inline-flex items-center text-lg">
              Visit Inbox
              <span className="ml-1 tracking-normal transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThankYouPage;
