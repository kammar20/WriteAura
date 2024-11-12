import Chip from './Chip';
import { RiCustomerServiceFill } from 'react-icons/ri';

export default function Testimonial() {
  return (
    <section className="max-w-[1400px] mx-auto px-[3%] pt-24">
      <div className="mb-8">
        <Chip icon={<RiCustomerServiceFill />}>Pricing</Chip>
      </div>
      <h2 className="bg-clip-text text-transparent bg-custom-gradient-text text-2xl text-center pb-10 sm:max-w-[60%] lg:max-w-[50%] mx-auto md:text-3xl lg:text-4xl xl:text-5xl">
        What Our Users Say
      </h2>
    </section>
  );
}
