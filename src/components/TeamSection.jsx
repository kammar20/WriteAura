import { GiBiceps } from 'react-icons/gi';
import Chip from './Chip';
import { TeamData } from '../constant/data';

export default function TeamSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-[3%] pt-24">
      <div className="mb-5">
        <Chip icon={<GiBiceps />}>Team</Chip>
      </div>
      <h2 className="bg-clip-text text-transparent bg-custom-gradient-text text-2xl text-center mb-10 md:text-3xl lg:text-4xl xl:text-5xl">
        Meet Our Team
      </h2>

      <div className="flex flex-col items-center gap-5 md:flex-row md:flex-wrap md:justify-center">
        {TeamData.map((person) => (
          <div
            key={person.id}
            className="sm:w-[60%] md:w-[40%] lg:w-[28%] border border-neutral-600 shadow-custome flex flex-col items-center py-8 px-5"
          >
            <div className="flex justify-center items-center mb-5">
              <img
                src={person.imgSrc}
                alt="person1"
                className="w-[30%] rounded-full"
              />
            </div>
            <h2 className="mb-2 text-neutral-100 text-xl">{person.fullName}</h2>
            <p className="text-center text-neutral-400 mb-5">{person.info}</p>
            <div className="flex gap-5">
              {person.socials.map((social) => (
                <div key={social.socialId} className="text-xl">
                  {social.iconSrc}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
