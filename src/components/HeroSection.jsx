// look for size

export default function HeroSection() {
  return (
    <section className="bg-hero-pattern px-[3%] pt-20 pb-28 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32 2xl:pt-40 2xl:pb-36">
      <div>
        <h1 className="text-2xl text-center mb-5 m-auto sm:max-w-[80%] md:max-w-[70%] md:text-4xl lg:text-5xl lg:leading-snug xl:text-6xl xl:font-medium xl:leading-snug xl:max-w-[70%]">
          Enhance Your Writing with Intelligent{' '}
          <span className="bg-clip-text text-transparent bg-custom-gradient-text">
            AI Assistance
          </span>
        </h1>

        <p className="max-w-[80%] m-auto text-sm text-center text-neutral-400 mb-10 sm:max-w-[65%] md:text-base lg:text-lg lg:max-w-[55%] xl:max-w-[60%]">
          Transform your thoughts into clear, impactful text with WriteAura.
          Write smarter, edit faster, and let your words flow effortlessly.
        </p>
        <div className="flex justify-center items-start gap-5">
          <button className="lg:block bg-custom-gradient py-1.5 px-4 rounded hover:translate-y-[-2px] transition-all">
            Start Now
          </button>
          <button className="lg:block border border-neutral-500 bg-neutral-900 py-1.5 px-4 rounded hover:translate-y-[-2px] transition-all">
            See Demo
          </button>
        </div>
      </div>
    </section>
  );
}
