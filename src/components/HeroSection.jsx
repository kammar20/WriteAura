// look for size

export default function HeroSection() {
  return (
    <section className="bg-hero-pattern pt-28 pb-24 px-[3%]">
      <div>
        <h1 className="sm:max-w-[85%] m-auto text-3xl text-center mb-5 md:text-4xl lg:text-5xl lg:leading-snug xl:text-6xl xl:font-medium xl:leading-snug xl:max-w-[70%]">
          Enhance Your Writing with Intelligent{' '}
          <span className="bg-clip-text text-transparent bg-custom-gradient-text">
            AI Assistance
          </span>
        </h1>
        <p className="max-w-[80%] m-auto text-sm text-center text-neutral-400 mb-10 md:text-base lg:text-lg lg:max-w-[60%] xl:max-w-[50%]">
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
