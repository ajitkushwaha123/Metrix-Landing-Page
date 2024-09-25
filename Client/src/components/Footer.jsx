/* This example requires Tailwind CSS v2.0+ */
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { LuYoutube } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";


const navigation = {
  main: [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#feature" },
    { name: "Contact Us", href: "#contact-us" },
    { name: "Our Customers", href: "#our-customers" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQs", href: "#faqs" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/kravy_billing/",
      icon: <FaInstagram />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: <SlSocialTwitter />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/kravy-magicscale",
      icon: <RiLinkedinBoxLine />,
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@kravy-billing",
      icon: <LuYoutube />,
    },
  ],
};

export default function Example() {
  return (
    <footer className="bg-[#ffffff] bg-pattern2 rounded-lg">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-500 font-medium hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-primary hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2024 Kravy - By MagicScale , Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
