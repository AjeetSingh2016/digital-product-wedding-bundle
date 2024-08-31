export const metadata = {
  title: "Ultimate Wedding Photography & Videography Bundle",
  description: "The Ultimate Wedding Photography & Videography Bundle offers top-quality templates, presets, and resources for just ₹199. Originally valued at ₹20,000, it includes wedding video invitations, Premiere Pro transitions, album templates, and more. Compatible with Lightroom, Photoshop, Premiere Pro, and After Effects, this bundle is rated 9.6/10 by over 100 verified customers. Get lifetime access and start creating stunning wedding projects today!",
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
