import { IHero } from "~/interfaces/hero";

import Skills from "~/pages/Skills";
import Services from "~/pages/Services";
import Projects from "~/pages/Projects";
import Testimonials from "~/pages/Testimonial";
import ContactMe from "~/pages/Contacts";

import { content } from "../../constant/Content";
import Hireme from "../Hireme";

interface IProp {
  hero: IHero;
}

function Hero() {
  const { hero }: IProp = content;
  return (
    <>
      <section
        id="home"
        className="overflow-hidden dark:bg-dark_primary w-full "
      >
        <div
          id="hero"
          className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center"
        >
          <div
            data-aos="slide-left"
            data-aos-delay="1200"
            className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear dark:bg-secundaryLinear bottom-0"
          >
            <h1 className="rotate-90 absolute top-[30%] sm:top-[45%] right-[-33%] sm:right-[-15%] text-[#EAF2FA] dark:text-dark_primary">
              {hero.firstName}{" "}
              <span className="text-dark_primary dark:text-[#EAF2FA]">
                {hero.LastName}
              </span>
            </h1>
          </div>

          {/* first col */}
          <div className="pb-16 px-6 pt-5 z-10" data-aos="fade-down">
            <h2 className="dark:text-white">{hero.title}</h2>
            <br />
            <div className="flex justify-end">
              <a
                href="src\public\IvanGonzalez.pdf"
                download
                className="btn dark:text-white dark:border-white"
              >
                {hero.btnText}
              </a>
            </div>
            <div className="flex flex-col gap-10 mt-10 ">
              {hero.hero_content.map((content, index) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  data-aos="fade-down"
                  data-aos-delay={index * 300}
                  className={`flex items-center w-80 gap-5
            ${index === 1 && " flex-row-reverse text-right"}`}
                >
                  <h3 className="dark:text-white">{content.count}</h3>
                  <p className="dark:text-white">{content.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* sec col */}
          <div className="md:h-[37rem] h-96 z-10">
            <img
              src={hero.image}
              data-aos="slide-up"
              alt="..."
              className="h-full object-cover"
            />
          </div>
        </div>
      </section>
      <Skills />
      <Services />
      <Testimonials />
      <Projects />
      <Hireme />
      <ContactMe />
    </>
  );
}

export default Hero;
