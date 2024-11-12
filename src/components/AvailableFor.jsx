import { PiSealCheck } from 'react-icons/pi';
import chrome from '../assets/svg/chrome.svg';
import firefox from '../assets/svg/firefox.svg';
import safari from '../assets/svg/safari.svg';
import android from '../assets/svg/android.svg';
import ios from '../assets/svg/ios.svg';
import windowOS from '../assets/svg/windowOS.svg';
import Chip from './Chip';

export default function AvailableFor() {
  return (
    <section className="max-w-[1400px] m-auto pt-24 px-[3%]">
      {/* Chip */}
      <div className="mb-8">
        <Chip icon={<PiSealCheck />}>Available For</Chip>
      </div>

      {/* Available For */}
      <div className="flex justify-center gap-5 ">
        <img
          src={chrome}
          alt=""
          className="w-[30px] sm:w-[40px] md:w-[45px] lg:w-[50px] hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
        />
        <img
          src={firefox}
          alt=""
          className="w-[30px] sm:w-[40px] md:w-[45px] lg:w-[50px] hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
        />
        <img
          src={safari}
          alt=""
          className="w-[30px] sm:w-[40px] md:w-[45px] lg:w-[50px] hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
        />
        <img
          src={android}
          alt=""
          className="w-[32px] sm:w-[42px] md:w-[50px] lg:w-[55px] hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
        />
        <img
          src={ios}
          alt=""
          className="w-[28px] sm:w-[38px] md:w-[43px] lg:w-[48px] hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
        />
        <img
          src={windowOS}
          alt=""
          className="w-[27px] sm:w-[35px] md:w-[40px] lg:w-[45px] hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
        />
      </div>
    </section>
  );
}
