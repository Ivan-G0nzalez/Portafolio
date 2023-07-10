export interface ISkill {
  name: string;
  para: string;
  logo: string;
}

export interface ISkills {
  icon(icon: any): import("react").ReactNode;
  title: string;
  subtitle: string;
  skills_content: ISkill[];
}
