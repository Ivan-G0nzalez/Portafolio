import { IPorjects } from "~/interfaces/porjects";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { content } from "../../constant/Content";

interface IProps {
  Projects: IPorjects;
}

function Projects() {
  const { Projects }: IProps = content;
  return (
    <section
      className="bg-bg_light_primary dark:bg-secundaryLinear w-full"
      id="projects"
    >
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title dark:text-white" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            className="max-w-[45vw] min-w-[22rem]"
            data-aos="fade-right"
          />
          <Swiper
            pagination={{ clickable: true }}
            data-aos="fade-down"
            spaceBetween={10}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                className="bg-white w-full rounded-3xl border-b-8 p-5 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="...." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button
                    type="button"
                    className="font-bold text-gray self-end"
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Projects;
