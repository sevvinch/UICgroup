import { IoMdGlobe } from 'react-icons/io';
import Logo from './Logo';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const blurRef = useRef();
  const [isLanguageOptionsVisible, setLanguageOptionsVisible] = useState(false);
  const [isNavHidden, setNavHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        blurRef.current.classList.add('backdrop-blur-2xl');
      } else {
        blurRef.current.classList.remove('backdrop-blur-2xl');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLanguageHover = () => {
    setLanguageOptionsVisible(true);
    setNavHidden(true);
  };

  const handleLanguageMouseLeave = () => {
    setLanguageOptionsVisible(false);
    setNavHidden(false);
  };

  return (
    <nav ref={blurRef} className="fixed z-50 top-0 w-full">
      <div className="container w-full flex items-center py-4">
        <Link to={"/"}>
          <Logo />
        </Link>

        <div className="flex flex-row-reverse items-center w-full gap-14">
          <div
            className="flex peer group items-center gap-1 border border-[#9caaac] px-2 py-1 duration-300 transition-all rounded-lg"
            onMouseEnter={handleLanguageHover}
            onMouseLeave={handleLanguageMouseLeave}
          >
            <IoMdGlobe className="text-[#9caaac] text-[24px]" />
            <span className="text-[#9caaac] mr-2 hidden group-hover:block duration-300 text-[18px]">
              Language:
            </span>
            <span className={`flex gap-3 language-options transition-transform duration-300 ${isLanguageOptionsVisible ? 'show' : ''}`}>
              <span className="text-white font-semibold text-[18px] cursor-pointer">EN</span>
              <span className="hover:text-white duration-300 hidden group-hover:block text-[#9caaac] cursor-pointer font-semibold text-[18px]">
                RU
              </span>
              <span className="hover:text-white duration-300 hidden group-hover:block text-[#9caaac] cursor-pointer font-semibold text-[18px]">
                UZ
              </span>
            </span>
          </div>

          <span className="text-[#9caaac] block peer-hover:hidden text-[24px] font-semibold hover:text-white cursor-pointer duration-300">
            +998 71 <span className="text-white">200 70 07</span>
          </span>

          <ul className={`flex nav-links text-[#9caaac] text-[16px] font-semibold gap-8 ${isNavHidden ? 'hidden' : ''}`}>
            <li className="hover:text-white duration-300">
              <Link to={"/about"}>
                <span>ABOUT US</span>
              </Link>
            </li>
            <li className="hover:text-white duration-300">
              <Link to={"/service"}>
                <span>SERVICES</span>
              </Link>
            </li>
            <li className="hover:text-white duration-300">
              <Link to={"/portfolio"}>
                <span>PORTFOLIO</span>
              </Link>
            </li>
            <li className="hover:text-white duration-300">
              <Link to={"/career"}>
                <span>CAREER</span>
              </Link>
            </li>
            <li className="hover:text-white duration-300">
              <Link to={"/blog"}>
                <span>BLOG</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
