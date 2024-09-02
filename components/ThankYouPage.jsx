import Image from "next/image";
import thankYouImg from "@/public/assets/grateful.png";

export default function ThankYouPage() {
  return (
    <section className="relative">
      <div className="mx-auto px-4 sm:px-6">
        {/* Thank You content */}
        <div className="pb-12 mt-16 md:pb-20 md:mt-20 text-center">
          <div
            className="border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
            data-aos="zoom-y-out"
          ></div>
          <h1
            className="mb-6 mt-5 text-5xl font-bold text-gray-900 md:text-6xl"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            Thank You for Your Purchase!
          </h1>
          <p
            className="mb-8 text-lg text-gray-700"
            data-aos="zoom-y-out"
            data-aos-delay={300}
          >
            We appreciate your business and hope you enjoy your purchase.
          </p>
          <div className="mx-auto max-w-3xl">
            <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                <a
                  className="p-4 px-10 btn group mt-5 mb-4 w-full bg-gradient-to-t from-green-600 to-green-500 bg-[length:100%_100%] bg-[bottom] text-white rounded shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="https://your-drive-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center text-lg">
                    🎉 Download Now{" "}
                    <span className="ml-1 tracking-normal text-green-300 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Thank You image */}
        <Image
          src={thankYouImg}
          alt="Thank You"
          layout="responsive" // This will make the image responsive
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
