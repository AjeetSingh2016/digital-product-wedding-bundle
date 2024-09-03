import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import heroImg from "@/public/assets/hero.webp";
import OrderButton from "./OrderButton";

export default function HeroHome() {
  
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto  px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 mt-16 md:pb-20 md:mt-20">
          {/* Section header */}
          <div className=" text-center md:pb-10">
            <div
              className=" border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            ></div>
            <p
              className="mb-2 text-lg text-gray-700"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              Impress every client and deliver flawless projects on time using
              our
            </p>
            <h1
              className="mb-6 mt-5 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Ultimate Wedding Photography
              <br className="max-lg:hidden" />& Videography Bundle
            </h1>
            <div className="mx-auto max-w-3xl">
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  {/* <a
                    className="p-4 px-10 btn group mt-5 mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white rounded shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://cosmofeed.com/vp/66d61835e12e9a0014f78e0a"
                  >
                    <span className="relative inline-flex items-center text-lg">
                      ⚡Order Now At ₹199{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a> */}
                  <OrderButton />
                </div>
                <p
                  className="mt-5 mb-5 text-sm md:text-base text-black"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  ⭐⭐⭐⭐⭐ Rated 9.6 out of 10. (100+ Verified Customers)
                </p>
                <h1>199</h1>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <Image
            src={heroImg}
            alt="description"
            layout="responsive" // This will make the image responsive
            // Maintain aspect ratio
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
