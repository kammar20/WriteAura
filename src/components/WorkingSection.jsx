import { FaCogs } from 'react-icons/fa';
import Chip from './Chip';
import { workData } from '../constant/data';

export default function WorkingSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-[3%] pt-24">
      <div className="mb-8">
        <Chip icon={<FaCogs />}>Working</Chip>
      </div>
      <h2 className="bg-clip-text text-transparent bg-custom-gradient-text text-2xl text-center pb-10 sm:max-w-[60%] lg:max-w-[50%] mx-auto md:text-3xl lg:text-4xl xl:text-5xl">
        Simple Steps to Better Writing
      </h2>
      <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-center">
        {workData.map((data) => (
          <div
            key={data.id}
            className="bg-neutral-900 border border-neutral-700 p-5 md:w-[40%] lg:w-[30%]"
          >
            <div className="text-xl mb-5">{data.icon}</div>
            <h3 className="text-xl mb-2 text-neutral-100 md:text-2xl ">
              {data.title}
            </h3>
            <p className="text-sm text-neutral-400 md:text-base">{data.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
