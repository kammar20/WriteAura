import person1 from '../assets/images/person1.jpg';
import person2 from '../assets/images/person2.jpg';
import person3 from '../assets/images/person3.jpg';
import person4 from '../assets/images/person4.jpg';
import person5 from '../assets/images/person5.jpg';
import person6 from '../assets/images/person6.jpg';
import person7 from '../assets/images/person7.jpg';
import person8 from '../assets/images/person8.jpg';

export default function Grid() {
  return (
    <div>
      <div className="Grid-Container grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {/* Grid Item 1 */}
        <div className="Grid-item-1 bg-[#F9A826] p-5 rounded-md xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-3">
          <p className="text-[#121212] mb-5 text-sm lg:text-base">
            WriteAura’s insights have elevated my content game. I save hours
            each week and know I’m delivering a polished message every time.
          </p>
          <div className="Person-Img-Name flex items-center gap-3">
            <img
              src={person4}
              alt=""
              className="w-[35px] h-[35px] rounded-full"
            />
            <span className="text-[#121212] text-sm lg:text-base">
              {' '}
              Jordan, Content Creator
            </span>
          </div>
        </div>

        {/* Grid Item 2 */}
        <div className="Grid-item-2 bg-[#6A4C93] p-5 rounded-md xl:col-start-2 xl:col-end-4 xl:row-start-1 xl:row-end-2">
          <p className="text-neutral-100 mb-5 text-sm lg:text-base">
            Using WriteAura has been a game-changer for our organization. Its
            ability to fine-tune content has helped us enhance our brand’s
            communication quality and align it with our values. The AI adjusts
            seamlessly to different tones, whether it’s for a formal report or a
            lighthearted social media post.
          </p>
          <div className="Person-Img-Name flex items-center gap-3">
            <img
              src={person8}
              alt=""
              className="w-[35px] h-[35px] rounded-full"
            />
            <span className="text-neutral-100 text-sm lg:text-base">
              Lee, Team Lead
            </span>
          </div>
        </div>

        {/* Grid Item 3 */}
        <div className="Grid-item-3 bg-[#2EC4B6] p-5 rounded-md xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-4">
          <p className="text-[#121212] mb-5 text-sm lg:text-base">
            WriteAura has truly streamlined our workflow. It’s easy to use and
            incredibly versatile, catering to different writing needs across our
            team. From drafting emails to refining campaign copy, it ensures
            quality and saves us time, making collaboration more effective.
          </p>

          <div className="Person-Img-Name flex items-center gap-3">
            <img
              src={person5}
              alt=""
              className="w-[35px] h-[35px] rounded-full"
            />
            <span className="text-[#121212] text-sm lg:text-base">
              Taylor, Freelance Writer
            </span>
          </div>
        </div>

        {/* Grid Item 4 */}
        <div className="Grid-item-4 bg-[#E71D36] p-5 rounded-md xl:col-start-2 xl:col-end-3 xl:row-start-2 xl:row-end-4">
          <p className="text-[#121212] mb-5 text-sm lg:text-base">
            WriteAura has transformed my writing. The tone adjustment feature is
            exactly what I needed to connect better with my audience.
          </p>
          <div className="Person-Img-Name flex items-center gap-3">
            <img
              src={person1}
              alt=""
              className="w-[35px] h-[35px] rounded-full"
            />
            <span className="text-[#121212] text-sm lg:text-base">
              Alex, Blogger
            </span>
          </div>
        </div>

        {/* Grid Item 5 */}
        <div className="Grid-item-5 bg-[#FF477E] p-5 rounded-md xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-4">
          <p className="text-[#121212] mb-5 text-sm lg:text-base">
            This tool is incredibly intuitive and efficient. It’s now my go-to
            for every email and presentation!
          </p>
          <div className="Person-Img-Name flex items-center gap-3">
            <img
              src={person2}
              alt=""
              className="w-[35px] h-[35px] rounded-full"
            />
            <span className="text-[#121212] text-sm lg:text-base">
              Chris, Project Manager
            </span>
          </div>
        </div>

        {/* Grid Item 6 */}
        <div className="Grid-item-6 bg-[#9B5DE5]  p-5 rounded-md xl:col-start-1 xl:col-end-2 xl:row-start-3 xl:row-end-5">
          <p className="text-[#121212] mb-5 text-sm lg:text-base">
            The AI adapts to my writing style seamlessly. It’s saved me so much
            time with revisions and keeps my messages on point.
          </p>
          <div className="Person-Img-Name flex items-center gap-3">
            <img
              src={person6}
              alt=""
              className="w-[35px] h-[35px] rounded-full"
            />
            <span className="text-[#121212] text-sm lg:text-base">
              Morgan, Business Analyst
            </span>
          </div>
        </div>

        {/* Grid Item 7 */}
        <div className="Grid-item-7 bg-[#57CC99] p-5 rounded-md xl:col-start-2 xl:col-end-3 xl:row-start-4 xl:row-end-5">
          <p className="text-[#121212] mb-5 text-sm lg:text-base">
            Our marketing team uses WriteAura daily to ensure consistency in our
            brand voice. Highly recommended!
          </p>
          <div className="Person-Img-Name flex items-center gap-3">
            <img
              src={person3}
              alt=""
              className="w-[35px] h-[35px] rounded-full"
            />
            <span className="text-[#121212] text-sm lg:text-base">
              Sarah, Marketing Lead
            </span>
          </div>
        </div>

        {/* Grid Item 8 */}
        <div className="Grid-item-8 bg-[#3A86FF] p-5 rounded-md xl:col-start-3 xl:col-end-5 xl:row-start-4 xl:row-end-5">
          <p className="text-[#121212] mb-5 text-sm lg:text-base">
            WriteAura has completely elevated my writing experience. The AI not
            only enhances clarity but ensures my messages resonate with the
            intended audience. It’s intuitive, fast, and makes revisions a
            breeze. I recommend it to anyone looking to communicate effectively.
          </p>
          <div className="Person-Img-Name flex items-center gap-3">
            <img
              src={person7}
              alt=""
              className="w-[35px] h-[35px] rounded-full"
            />
            <span className="text-[#121212] text-sm lg:text-base">
              Jamie, HR Specialist
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
