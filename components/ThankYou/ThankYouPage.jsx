import React from "react";
import Image from "next/image";
import thankYouImg from "@/public/assets/grateful.png"; // Replace with the path to your thank you image

const ThankYouPage = () => {
  return (
    <section className="relative py-16 px-4 h-full sm:px-6 bg-white">
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
           Your Purchase is ready. <br />Please Click on the "Download Now" Button to Download the Pdf Of your Purchase.
          </p>
        {/* Download Button */}
        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-delay={450}
        >
            
          <a
            className="p-4 px-10 btn bg-gradient-to-t from-green-600 to-green-500 text-white rounded shadow hover:bg-green-700"
            href="YOUR_DRIVE_LINK_HERE" // Replace with the actual drive link
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <span className="relative inline-flex items-center text-lg">
              Download Now
              <span className="ml-1 tracking-normal transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYouPage;
