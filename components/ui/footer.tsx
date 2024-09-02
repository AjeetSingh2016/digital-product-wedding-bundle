import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 my-10">
        {/* Top area: Blocks */}
        <div className="w-full  flex justify-around">
          <h1 className="text-xl font-bold">Privacy Policy</h1>
          <h1 className="text-xl font-bold">Terms & Conditions</h1>
        </div>
      <div className="flex-col justify-around">
      <p className="text-center mt-10">
          <em className="font-bold">Terms and Conditions:</em> By using our website and services, you agree to
          our Terms and Conditions. We provide digital services like website and
          app development, and payment is required in advance. All content on
          our site is our intellectual property. We are not liable for any
          indirect damages, and we reserve the right to update these terms. For
          questions, contact us at{" "} 
          <a className="text-blue-600" href="contactdigiproductmart@gmail.com">contactdigiproductmart@gmail.com</a>
        </p>
        <p className="text-center mt-10">
          <em className="font-bold">Privacy Policy: </em>We collect personal information to process transactions and communicate with you. Your data is protected by industry-standard security measures and is not sold to third parties. We use cookies to improve site experience and may update this policy periodically. For more details, contact us at {" "} 
          <a className="text-blue-600" href="contactdigiproductmart@gmail.com">contactdigiproductmart@gmail.com</a>
        </p>
      </div>
        
      </div>
    </footer>
  );
}
