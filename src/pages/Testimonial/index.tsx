import { ITestimonials } from "~/interfaces/testimonial";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { content } from "../../constant/Content";

interface IProps {
  Testimonials: ITestimonials;
}

function Testimonials() {
  const { Testimonials }: IProps = content;

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex items-center dark:bg-secundaryLinear lg:flex-row flex-col-reverse gap-5">
      <div className="md:container px-5 pt-14">
        <h2 className="title text-white" data-aos="fade-down">
          {Testimonials.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Testimonials.subtitle}
        </h4>
        <br />
        <Swiper
          direction="vertical"
          loop
          pagination={{ clickable: true }}
          data-aos="fade-up"
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {Testimonials.testimonials_content.map((content, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-bg_light_primary mx-8 border-2 
                p-8 h-full rounded-2xl flex items-center gap-6
                 border-slate-200 md:flex-row flex-col
                  ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src={content.img} alt="..." className="h-24" />
                <div>
                  <p className="sm:text-base text-sm">{content.review}</p>
                  <br />
                  <h6>{content.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
