import { PricingData } from '../constant/data';
import Button from './Button';
import Chip from './Chip';
import { ImPriceTags } from 'react-icons/im';

export default function PricingSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-[3%] pt-24">
      <div className="mb-8">
        <Chip icon={<ImPriceTags />}>Pricing</Chip>
      </div>
      <h2 className="bg-clip-text text-transparent bg-custom-gradient-text text-2xl text-center pb-10 sm:max-w-[60%] lg:max-w-[50%] mx-auto md:text-3xl lg:text-4xl xl:text-5xl">
        Simple and Affordable Pricing Plan
      </h2>

      {/* Card */}
      <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-center">
        {PricingData.map((data) => (
          // card
          <div
            key={data.id}
            className="bg-neutral-900 shadow-2xl border border-neutral-700 p-5 rounded-lg md:w-[40%] lg:w-[30%] xl:w-[25%]"
          >
            <div className="flex justify-between items-center mb-5">
              <span className="text-neutral-400">{data.type}</span>
              {data.type === 'Professional' ? <Chip>Most Popular</Chip> : ''}
            </div>

            <h1 className="text-3xl mb-3">
              {data.price}
              <span className="text-base text-neutral-400">{data.limit}</span>
            </h1>
            <p className="text-neutral-400 text-sm mb-8">{data.desc}</p>
            <div className="flex justify-center mb-8 ">
              <Button>{data.btnText}</Button>
            </div>
            <div className="flex justify-between items-center mb-6">
              <hr className="w-[35%] border-neutral-400" />
              <span className="text-neutral-100">{data.lineText}</span>
              <hr className="w-[35%] border-neutral-400" />
            </div>

            {data.features.map((feature, i) => (
              <div key={i} className="flex items-center mb-3 text-neutral-400">
                <span className="mr-2 text-neutral-100">{data.icon}</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
