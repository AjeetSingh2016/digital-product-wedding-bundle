export const metadata = {
  title: "Thank You",
  description: "The Ultimate Wedding Photography & Videography Bundle offers top-quality templates, presets, and resources for just ₹199. Originally valued at ₹20,000, it includes wedding video invitations, Premiere Pro transitions, album templates, and more. Compatible with Lightroom, Photoshop, Premiere Pro, and After Effects, this bundle is rated 9.6/10 by over 100 verified customers. Get lifetime access and start creating stunning wedding projects today!",
};

import React from 'react'
import ThankYouPage from "../../components/ThankYou/ThankYouPage"
import FloatingWhatsAppButton from "../../components/FloatingWhatsAppButton";

const page = () => {
  return (
   <>
   <ThankYouPage />
   <FloatingWhatsAppButton />
   </>
  )
}

export default page
