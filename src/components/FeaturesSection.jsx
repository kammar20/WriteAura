import { featureData } from '../constant/data';
export default function FeaturesSection() {
  return (
    //
    <section className="max-w-[1400px] mx-auto px-[3%] pt-24">
      <h2 className="bg-clip-text text-transparent bg-custom-gradient-text text-2xl text-center mb-2 md:text-3xl lg:text-4xl xl:text-5xl">
        What's Included
      </h2>
      <p className="text-sm text-neutral-400 text-center mb-8 mg:text-base xl:text-lg">
        Get 100+ Features out of the box
      </p>
      <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-center md:gap-5">
        {featureData.map((feature) => (
          <div
            key={feature.id}
            className="border border-neutral-700 p-5 md:w-[45%] lg:w-[30%]"
          >
            <div className="text-xl inline-block bg-neutral-700 p-2 rounded-md  mb-4 lg:text-2xl">
              {feature.icon}
            </div>
            <h3 className="text-xl text-neutral-100 mb-2 xl:text-2xl">
              {feature.title}
            </h3>
            <p className="text-sm text-neutral-400 lg:text-base">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
