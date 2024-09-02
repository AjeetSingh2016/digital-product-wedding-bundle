import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import Countdown from "./Countdown"

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20 ">
          <div
              className=""
              data-aos="zoom-y-out"
            ></div>
            <p
              className="mb-2 text-lg text-gray-300"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
             Seize this limited-time offer and create unforgettable memories for your clients.
            </p>
            <h1
              className="mb-6 text-white mt-5 text-5xl font-bold  md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Get the Wedding Bundle Now
              <br className="max-lg:hidden" />and start creating magic!
            </h1>
            <div className="mx-auto max-w-3xl">
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
<a
        className="p-4 px-10 btn group mt-5 mb-4 bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white rounded shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-blue-500 to-purple-600 sm:mb-0 animate-pulse"
        href="https://cosmofeed.com/vp/66d61835e12e9a0014f78e0a"
      >
        <span className="relative inline-flex items-center text-lg">
          ⚡Order Now At ₹199{" "}
          <span className="ml-1 tracking-normal text-blue-300 transition-transform duration-300 group-hover:translate-x-1">
            -&gt;
          </span>
        </span>
      </a>
                </div>
                <p
                  className="mt-5 mb-5 text-sm md:text-base text-gray-300"
                  data-aos="zoom-y-out text-white"
                  data-aos-delay={300}
                >
                  ⭐⭐⭐⭐⭐ Rated 9.6 out of 10. (100+ Verified Customers)
                </p>
                <Countdown textColor={"red"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}