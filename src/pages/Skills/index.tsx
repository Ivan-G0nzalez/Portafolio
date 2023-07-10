import { createElement, useState } from "react";

import Modal from "react-modal";
import customStyles from "../../styles/modal";

import { content } from "../../constant/Content";
import { ISkills } from "../../interfaces/skill";

interface IProps {
  skills: ISkills;
}

Modal.setAppElement("#root");

function Skills() {
  const { skills }: IProps = content;
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectSkill, setSelectSkill] = useState<any>(null);

  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  return (
    <section
      className="min-h-fit bg-bg_light_primary dark:bg-secundaryLinear"
      id="skills"
    >
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        // eslint-disable-next-line react/jsx-no-bind
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="" />
          <h6>{selectSkill?.name}</h6>
          <br />
        </div>
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            dolore sunt
          </li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            dolore sunt
          </li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing</li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button type="button" onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>
      {/* Content */}
      <div className="container px-5 py-14">
        <h2
          className="md:text-3xl text-2xl dark:text-white"
          data-aos="fade-down"
        >
          {skills.title}
        </h2>
        <h4 className="subtitle text-gray " data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 400}
              className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 dark:bg-dark_primary"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6 className="dark:text-white">{skill.name}</h6>
                <p className="italic text-gray">{skill.para}</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectSkill(skill);
                    openModal();
                  }}
                  className="text-xl absolute top-3 right-3 dark:text-white"
                >
                  {createElement(skills.icon)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
