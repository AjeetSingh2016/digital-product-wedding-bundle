export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Content from "../../components/Content"
import Features from "../../components/Features"
import Photos from "../../components/Photos"
import QNASection from "../../components/QNASection"
import FloatingWhatsAppButton from "../../components/FloatingWhatsAppButton";
import FloatingBuyNowButton from "../../components/FloatingBuyNowButton"

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <Features />
      <FeaturesPlanet />
      <Photos/>
      <Cta />
      <LargeTestimonial />
      <QNASection />
      <FloatingWhatsAppButton /> {/* Add the floating WhatsApp button */}
      {/* <FloatingBuyNowButton /> */}
    </>
  );
}
