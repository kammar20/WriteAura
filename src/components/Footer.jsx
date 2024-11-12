import {
  FooterProducts,
  FooterResource,
  FooterService,
  FooterSocial,
} from '../constant/data';

export default function Footer() {
  return (
    <footer className="max-w-[1400px] mx-auto px-[3%] pt-36">
      <div className="top-footer flex flex-col pb-7 md:flex-row md:flex-wrap md:justify-between">
        <div className="s-1 mb-10 lg:w-[50%]">
          <h1 className="text-3xl text-neutral-100 mb-5">WriteAura</h1>
          <p className="text-sm text-neutral-400 mb-3">
            WriteAura is an AI-powered writing assistant that refines your
            message, adapting to your tone and style to make every communication
            clear and impactful.
          </p>
          <p className="text-sm text-neutral-400 mb-5">
            Address : 123 Inspiration Drive, Creativity City, CA 12345
          </p>
          <div className="soclia-icons flex gap-5">
            {FooterSocial.map((icon) => (
              <div
                className="bg-neutral-800 inline-flex justify-center items-center h-9 w-9 rounded-full"
                key={icon.id}
              >
                {icon.iconType}
              </div>
            ))}
          </div>
        </div>
        <div className="s-2 mb-8">
          <h2 className="mb-3 text-neutral-100">Products</h2>
          <ul>
            {FooterProducts.map((productText, i) => (
              <li className="mb-2 text-neutral-400 text-sm" key={i}>
                {productText}
              </li>
            ))}
          </ul>
        </div>
        <div className="s-3 mb-8">
          <h2 className="mb-3 text-neutral-100">Service</h2>
          <ul>
            {FooterService.map((serviceText, i) => (
              <li className="mb-2 text-neutral-400 text-sm" key={i}>
                {serviceText}
              </li>
            ))}
          </ul>
        </div>
        <div className="s-4">
          <h2 className="mb-3 text-neutral-100">Resource</h2>
          <ul>
            {FooterResource.map((resText, i) => (
              <li className="mb-2 text-neutral-400 text-sm" key={i}>
                {resText}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="h-px border-neutral-400 pb-7" />

      <div className="bottom-footer pb-7 md:flex md:justify-between">
        <p className="text-neutral-400 text-sm mb-5">
          &copy; 2024 Finament. All Right Reserved
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-3">
          <p className="text-neutral-400 text-sm">Term & Condition</p>
          <p className="text-neutral-400 text-sm">Privacy Policy</p>
          <p className="text-neutral-400 text-sm">Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
}
