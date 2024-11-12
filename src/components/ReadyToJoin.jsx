export default function ReadyToJoin() {
  return (
    <section className="max-w-[1400px] mx-auto px-[3%] pt-36 flex flex-col items-center">
      <div className="flex flex-col items-center bg-neutral-900 border border-neutral-700 shadow-custome2 py-12 px-8 rounded-2xl lg:w-[65%] xl:w-[60%]">
        <h1 className="bg-clip-text text-transparent bg-custom-gradient-text text-2xl text-center pb-2 md:text-3xl lg:text-4xl ">
          Ready to enhance your writing?
        </h1>
        <p className="text-sm font-light text-center text-neutral-400 mb-8">
          The smart AI writing assistant that adapts to your style. Get started{' '}
          <span className="text-orange-400 cursor-pointer">- for free.</span>
        </p>

        <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-center ">
          <input
            className="md:w-[130%] lg:w-[50%] xl:w-[55%] py-1 px-3 bg-neutral-800 border border-neutral-600 outline-none focus:border-neutral-400"
            type="text"
            placeholder="Email Address..."
          />
          <button className="bg-custom-gradient py-1.5 px-4 rounded hover:translate-y-[-2px] transition-all">
            Join Waiting List
          </button>
        </div>
      </div>
    </section>
  );
}
