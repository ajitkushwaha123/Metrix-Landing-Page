import { CiHome } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    icon: <CiHome />,
  },
  {
    id: "feature",
    title: "Features",
    icon: <CiGrid41 />,
  },
  {
    id: "our-customers",
    title: "Our Customers",
    icon: <CiUser />,
  },
  {
    id: "faqs",
    title: "FAQS",
    icon: <FaQuestionCircle />,
  },
  {
    id: "pricing",
    title: "Pricing",
    icon: <MdOutlinePriceChange />,
  },
];
