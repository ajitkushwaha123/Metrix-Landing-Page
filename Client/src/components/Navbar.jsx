import { useState, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { FaShopLock } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { navLinks } from "../constants";
import Icon from "./Icon";


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //  const navLinks = [
  //    {
  //      id: "home",
  //      title: "Home",
  //      icon: <CiHome />,
  //    },
  //    {
  //      id: "feature",
  //      title: "Features",
  //      icon: <CiGrid41 />,
  //    },
  //    {
  //      id: "our-customers",
  //      title: "Our Customers",
  //      icon: <CiUser />,
  //    },
  //    {
  //      id: "faqs",
  //      title: "FAQS",
  //      icon: <FaQrcode />,
  //    },
  //    {
  //      id: "pricing",
  //      title: "Pricing",
  //      icon: <MdOutlinePriceChange />,
  //    },
  //  ];


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "https://kravy.magicscale.in";
  };


  return (
    <>
      <nav
        // id="home"
        className={`w-full overflow-hidden z-100 font-poppins top-0 z-auto md:px-[80px] px-[10px] py-2 md:py-3 flex justify-between items-center navbar ${
          isScrolled
            ? "bg-white shadow-sm z-100 border-2 h-[66px] sm:h-[80px]"
            : "bg-transparent"
        }
      `}
      >
        <img
          src={logo}
          alt="kravy"
          className="w-[40px] sm:w-[50px] bg-primary m-2 text-white p-2 rounded-xl h-[40px] sm:h-[50px]"
        />{" "}
        <span className="text-[30px] hidden lg:block font-bold font-poppins">
          Kravy
        </span>
        <button className="text-white p-0.5 hidden lg:block text-[10px] ml-[10px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl border-2 ">
          <div className="flex bg-black justify-center items-center px-[10px] py-1 font-poppins rounded-2xl">
            <GoDotFill className="mr-[6px] text-[14px]" />
            By MagicScale 🚀
          </div>
        </button>
        <ul className="list-none md:flex hidden justify-center items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-primary" : "text-dimBlack"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="font-poppins hidden md:block">
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            className="hover:bg-white text-white sm:text-[15px] border-2 border-white flex bg-primary border-2 border-primary hover:border-2 hover:border-primary text-white hover:text-primary font-medium font-poppins justify-center items-center sm:px-4 px-3 sm:py-2 py-2 rounded-md"
          >
            <FaShopLock className="mr-[8px]" /> Get Started
          </button>
        </div>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <a id="#our-customers">
            <div className="font-poppins md:hidden">
              <button
                onClick={(e) => {
                  handleClick(e);
                }}
                className="hover:bg-white text-white sm:text-[15px] border-2 border-white flex bg-primary border-2 border-primary hover:border-2 hover:border-primary text-white hover:text-primary font-medium font-poppins justify-center items-center sm:px-4 px-3 sm:py-2 py-2 rounded-md"
              >
                <FaShopLock className="mr-[8px]" /> Get Started
              </button>
            </div>
          </a>
          <div className="p-1 ml-[10px] text-red-500 rounded-md bg-primary">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px]  h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
      </nav>

      {toggle && (
        <div className="w-[100%] fixed z-auto h-screen absolute shadow-lg shadow-indigo-500/40 backdrop-blur-sm bg-indigo-500/10">
          <div
            className={`${
              !toggle ? "hidden" : "flex z-100"
            } p-6 bg-white absolute top-20 z-auto right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none bg-white flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins flex justify-center items-center font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-indigo-500" : "text-primary"
                  }  mb-4`}
                  onClick={() => {
                    setActive(nav.title), setToggle(!toggle);
                  }}
                >
                  <p className="mr-[10px]">
                    
                    <Icon name={nav.icon} />
                  </p>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              <li
                className={`font-poppins text-red-400 flex justify-center items-center font-medium cursor-pointer text-[16px]`}
              >
                <p className="mr-[10px]">{/* <FiLogOut /> */}</p>
                {/* <NavLink to={"/login"}>
                    Logout
                  </NavLink> */}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;













