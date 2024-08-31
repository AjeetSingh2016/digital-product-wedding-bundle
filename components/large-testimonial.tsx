import Image from "next/image";
import TestimonialImg from "@/public/assets/satisfaction.webp";


export default function LargeTestimonial() {
  return (
    <section>
      <div className="px-5 md:px-20 mt-10">
        <div className="py-4 md:py-14">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={TestimonialImg}
                width={150}
                height={150}
                alt="Large testimonial"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Your Satisfaction is our No.1 Priority!</h1>
            <p className=" text-base md:text-xl font-semibold text-gray-900">
            <em className="italic text-gray-500">Your satisfaction is our top priority.</em>,
            he Ultimate Wedding Bundle is crafted with high-quality, professional-grade resources to ensure you can create stunning wedding projects. {" "}
              We are confident that you will love the results. Join thousands of happy users who have transformed their work with our comprehensive bundle.
            </p>
            {/* <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Mary Sullivan</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-blue-500" href="#0">
                CTO at Microsoft
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
