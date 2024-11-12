import { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  window.addEventListener('scroll', handleScroll);

  //Show Border On Scroll
  function handleScroll() {
    if (window.scrollY >= 20) {
      setShowBorder(true);
    } else {
      setShowBorder(false);
    }
  }

  //Modal Open And Close
  function handleClick() {
    setOpenModal(!openModal);
  }

  return (
    <nav
      className={`max-w-[100%] sticky top-0 z-10 backdrop-blur-xl px-[3%] py-5 ${
        showBorder ? 'border-b-2 border-neutral-500' : ''
      }`}
    >
      <div className={`flex justify-between items-center`}>
        {/* logo */}
        <div>
          <h1 className="text-3xl font-semibold font-logo">WriteAura</h1>
        </div>
        {/* nav-menu */}
        <ul className="hidden lg:flex gap-8">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
        </ul>
        {/* Button */}
        <button className="hidden lg:block bg-custom-gradient py-1.5 px-4 rounded hover:translate-y-[-2px] transition-all">
          Try for Free
        </button>
        {/* hamburger */}
        <div onClick={handleClick} className="text-2xl lg:hidden ">
          {openModal ? <LuX /> : <LuMenu />}
        </div>
      </div>
      {/* Modal open and Close */}
      {openModal && (
        <div>
          <ul className="flex flex-col items-start gap-8 pt-8 mb-8 lg:hidden ">
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
          {/* Button */}
          <div className="pb-4">
            <button className="bg-custom-gradient py-1.5 px-4 rounded hover:translate-y-[-2px] transition-all lg:hidden">
              Try for Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}