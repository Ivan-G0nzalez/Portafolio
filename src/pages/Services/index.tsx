import { IServices } from "~/interfaces/services";
import { content } from "../../constant/Content";

interface IProps {
  services: IServices;
}

function Services() {
  const { services }: IProps = content;
  return (
    <section className="dark:bg-secundaryLinear">
      <div className="md:container px-5 py-14" id="services">
        <h2 className="title dark:text-white" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 600}
              className="dark:bg-primaryLinear min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl bg-bg_light_primary p-6 flex-1 group-hover:blur-sm  hover:!blur-none"
            >
              <img src={content.logo} alt="" className="mx-auto" />
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
