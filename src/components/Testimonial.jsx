import { RiCustomerServiceFill } from 'react-icons/ri';
import Chip from './Chip';
import Grid from './Grid';

export default function Testimonial() {
  return (
    <section className="max-w-[1400px] mx-auto px-[3%] pt-24">
      <div className="mb-8">
        <Chip icon={<RiCustomerServiceFill />}>Testimonial</Chip>
      </div>
      <h2 className="bg-clip-text text-transparent bg-custom-gradient-text text-2xl text-center pb-10 md:text-3xl lg:text-4xl xl:text-5xl">
        What Our Users Say
      </h2>
      <Grid />
    </section>
  );
}
